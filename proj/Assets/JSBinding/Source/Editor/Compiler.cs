﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using cg;
using UnityEditor;
using UnityEngine;
using Debug = UnityEngine.Debug;
using Object = UnityEngine.Object;

public class Compiler
{
    private const string OUTPUT_PATH = "Temp/obj/Debug/SharpKitProj.dll";
    private static bool _rebuild;

    private static Dictionary<string, List<string>> typesImpByJs;

    private static bool CallSharpKitToCompile(string allInvokeOutputPath, string allInvokeWithLocationOutputPath,
        string YieldReturnTypeOutputPath)
    {
        string workingDir = Application.dataPath.Replace("/Assets", "");

        var args = new args();

        // working dir
        args.AddFormat("/dir:\"{0}\"", workingDir);

        // define		
        string define = "TRACE";

#if UNITY_ANDROID
        define += ";UNITY_ANDROID";
#endif

#if UNITY_IPHONE
        define += ";UNITY_IPHONE";
#endif

#if UNITY_4_6
        define += ";UNITY_4_6";
#endif

#if UNITY_4_7
        define += ";UNITY_4_7";
#endif

#if UNITY_4_8
        define += ";UNITY_4_8";
#endif

#if UNITY_5_0
        define += ";UNITY_5_0";
#endif

#if UNITY_5_1
        define += ";UNITY_5_1";
#endif

#if UNITY_5_2
        define += ";UNITY_5_2";
#endif

#if UNITY_5_3
        define += ";UNITY_5_3";
#endif
        //在这里可以加入自定义宏
        //        if (PlayerSettings.GetScriptingDefineSymbolsForGroup(BuildTargetGroup.Standalone).IndexOf("USEAB") >= 0)
        //            define += ";USEAB";

        args.AddFormat("/define:{0}", define);

        if (_rebuild)
            args.Add("/rebuild");

        // references
        var assemblies = AppDomain.CurrentDomain.GetAssemblies();

        foreach (var asm in assemblies)
        {
            args.AddFormat("/reference:\"{0}\"", asm.Location);
        }

        // out, target, target framework version
        args.Add("/out:" + OUTPUT_PATH);
        args.Add("/target:library");
        args.Add("/TargetFrameworkVersion:v3.5");
        args.AddFormat("/AllInvocationsOutput:\"{0}\"", allInvokeOutputPath);
        args.AddFormat("/AllInvocationsWithLocationOutput:\"{0}\"", allInvokeWithLocationOutputPath);
        args.AddFormat("/YieldReturnTypeOutput:\"{0}\"", YieldReturnTypeOutputPath);

        // source files
        var sources = Directory.GetFiles(Application.dataPath, "*.cs", SearchOption.AllDirectories);
        foreach (string filePath in sources)
        {
            //Ignore Editor Folder *.cs files
            if (filePath.Contains("Editor"))
                continue;

            args.Add("\"" + filePath.Replace(workingDir, ".") + "\"");
        }

        // 把参数写到文件中，然后把这个文件路径做为参数传递给 skc5.exe
        string argFile = JSAnalyzer.GetTempFileNameFullPath("skc_args.txt");
        string strArgs = args.Format(args.ArgsFormat.Space);
        File.WriteAllText(argFile, strArgs);

        //windows下直接调用skc5编译，mac下需要通过mono调用skc5
#if UNITY_EDITOR_WIN
        string exePath = Path.Combine(workingDir, "Compiler/skc5.exe");
        string arguments = string.Format("/paramFile:\"{0}\"", argFile);
#else
		string exePath = "/usr/local/bin/mono";
		string arguments = Path.Combine(workingDir,"Compiler/skc5.exe") + string.Format(" /paramFile:\"{0}\"",argFile);
#endif
        var processInfo = new ProcessStartInfo
        {
            CreateNoWindow = true,
            UseShellExecute = false,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            FileName = exePath,
            Arguments = arguments
        };

        var process = Process.Start(processInfo);
        string outputLog = process.StandardOutput.ReadToEnd();
        string errorLog = process.StandardError.ReadToEnd();
        // 等待结束
        process.WaitForExit();

        Debug.LogError(outputLog);
        int exitCode = process.ExitCode;
        if (exitCode != 0)
        {
            EditorUtility.DisplayDialog("SharpKitCompiler", "Compile failed. exit code = " + exitCode, "OK");
            if (!string.IsNullOrEmpty(errorLog))
                Debug.LogError(errorLog);
            return false;
        }
        EditorUtility.DisplayDialog("SharpKitCompiler", "Compile success.", "OK");
        return true;
    }

    // 加载文本文件
    // 内容是所有 Logic 调用 Framework 的代码信息
    // Dict: className -> (memberName -> locations)
    private static Dictionary<string, Dictionary<string, List<Location>>> LoadAllInvoked(string path)
    {
        var D = new Dictionary<string, Dictionary<string, List<Location>>>();

        string content = File.ReadAllText(path);
        var lines = content.Split("\r\n".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);

        Dictionary<string, List<Location>> E = null;
        List<Location> L = null;
        foreach (string line in lines)
        {
            if (string.IsNullOrEmpty(line))
                continue;

            if (line[0] == '[')
            {
                string typeName = line.Substring(1, line.Length - 2);
                E = new Dictionary<string, List<Location>>();
                D.Add(typeName, E);
                continue;
            }

            bool b4 = line.Length >= 4 && line.Substring(0, 4) == "    ";
            bool b8 = line.Length >= 8 && line.Substring(0, 8) == "        ";

            if (b4 && !b8)
            {
                L = new List<Location>();
                E.Add(line.Substring(4), L);
            }
            else if (b8)
            {
                var loc = line.Substring(8).Split(',');
                //int index = int.Parse(loc[0]);
                L.Add(new Location {FileName = loc[1], Line = int.Parse(loc[2])});
            }
            else
                throw new Exception("Line is invalid: '" + line + "'");
        }

        return D;
    }

    // 加载文本文件
    // 内容是所有 导出到JS的
    // Dict: className -> member names
    private static Dictionary<string, HashSet<string>> LoadAllExported(string path)
    {
        var D = new Dictionary<string, HashSet<string>>();

        string content = File.ReadAllText(path);
        var lines = content.Split("\r\n".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);

        HashSet<string> L = null;
        foreach (string line in lines)
        {
            if (string.IsNullOrEmpty(line))
                continue;

            if (line[0] == '[')
            {
                string typeName = line.Substring(1, line.Length - 2);
                L = new HashSet<string>();
                D.Add(typeName, L);
            }
            else if (line.Substring(0, 4) == "    ")
            {
                L.Add(line.Substring(4));
            }
            else
                throw new Exception("Line is invalid: " + line);
        }

        return D;
    }

    private static void CheckError_Invocation(string allInvokeWithLocationOutputPath)
    {
        if (typesImpByJs == null)
        {
            typesImpByJs = new Dictionary<string, List<string>>();
            typesImpByJs["T"] = new List<string> {"T"};
            typesImpByJs["System.Action"] = new List<string> {"" /* 调用 action */};
            typesImpByJs["System.Action$1"] = new List<string> {"" /* 调用 action */};
            typesImpByJs["System.Action$2"] = new List<string> {"" /* 调用 action */};
            typesImpByJs["System.Action$3"] = new List<string> {"" /* 调用 action */};
            typesImpByJs["System.Action$4"] = new List<string> {"" /* 调用 action */};
            typesImpByJs["System.Func$1"] = new List<string> {"" /* 调用 action */};
            typesImpByJs["System.Func$2"] = new List<string> {"" /* 调用 action */};
            typesImpByJs["System.Func$3"] = new List<string> {"" /* 调用 action */};
            typesImpByJs["System.Func$4"] = new List<string> {"" /* 调用 action */};
            typesImpByJs["System.Exception"] = new List<string> {"ctor$$String"};
            typesImpByJs["System.NotImplementedException"] = new List<string> {"ctor"};
            typesImpByJs["System.Array"] = new List<string> {"length", "CopyTo", "Static_Sort$1$$T$Array"};
            typesImpByJs["System.Collections.Generic.List$1"] = new List<string>
            {
                "ctor",
                "ctor$$IEnumerable$1",
                "ctor$$Int32",
                "RemoveRange",
                "Clear",
                "get_Item$$Int32",
                "set_Item$$Int32",
                "get_Count",
                "GetEnumerator",
                "ToArray",
                "AddRange",
                "Add",
                "Remove",
                "Contains",
                "SetItems",
                "IndexOf",
                "Exists",
                "IndexOf$$T",
                "Insert",
                "RemoveAt",
                "RemoveAll",
                //"TryRemove",
                //"CopyTo",
                //"get_IsReadOnly",
                "Reverse",
                "Sort",
                "Sort$$Comparison$1",
                "ForEach",
                "Find"
            };
            typesImpByJs["System.Collections.Generic.Dictionary$2"] = new List<string>
            {
                "ctor",
                "Add",
                "Remove",
                "get_Item$$TKey",
                "set_Item$$TKey",
                "ContainsKey",
                "GetEnumerator",
                "Clear",
                "TryGetValue",
                "get_Count",
                "get_Keys",
                "get_Values"
            };
            typesImpByJs["System.Collections.Generic.KeyValuePair$2"] = new List<string>
            {
                "get_Key",
                "get_Value",
                "ctor$$TKey$$TValue"
            };
            typesImpByJs["System.Collections.Generic.Dictionary.ValueCollection$2"] = new List<string> {"CopyTo"};
            // 特殊！
            typesImpByJs["System.Collections.Generic.Dictionary.KeyCollection$2"] = new List<string> {"CopyTo"}; // 特殊！
            typesImpByJs["System.Linq.Enumerable"] = new List<string> {"Static_ToArray$1"};
            typesImpByJs["System.Collections.Generic.HashSet$1"] = new List<string>
            {
                "ctor",
                "Add",
                "get_Count",
                "Clear",
                "Contains",
                "Remove"
            };
            typesImpByJs["System.Collections.Generic.Queue$1"] = new List<string>
            {
                "ctor",
                "ctor$$Int32",
                "Clear",
                "get_Count",
                "Enqueue",
                "Dequeue",
                "Peek",
                "Contains",
                "ToArray"
            };
            typesImpByJs["System.String"] = new List<string>
            {
                // native
                "toString",
                "length",
                "replace",
                "split",
                "indexOf",
                "substr",
                "charAt",
                /// static
                "Static_Empty",
                "Static_Format$$String$$Object",
                "Static_Format$$String$$Object$$Object",
                "Static_Format$$String$$Object$$Object$$Object",
                "Static_IsNullOrEmpty",
                // instance
                "Insert",
                "Substring$$Int32",
                "Substring$$Int32$$Int32",
                "Substring",
                "ToLower",
                "ToUpper",
                "getItem",
                "IndexOf$$String",
                "IndexOf$$Char",
                "LastIndexOf",
                "LastIndexOf$$Char",
                "LastIndexOf$$String",
                "Remove$$Int32",
                "Remove$$Int32$$Int32",
                "StartsWith$$String",
                "EndsWith$$String",
                "Contains",
                "get_Length",
                "Split$$Char$Array",
                "trim",
                "Trim",
                "ltrim",
                "rtrim",
                "Static_Format$$String$$Object$Array",
                "Replace$$String$$String",
                "Replace$$Char$$Char",
                "PadLeft$$Int32$$Char",
                "PadRight$$Int32$$Char"
            };
            typesImpByJs["System.Char"] = new List<string> {"toString", "Static_IsNumber$$Char"};
            typesImpByJs["System.Int32"] = new List<string>
            {
                "toString",
                "Static_Parse$$String",
                "Static_TryParse$$String$$Int32"
            };
            typesImpByJs["System.UInt64"] = new List<string>
            {
                "toString",
                "Static_Parse$$String",
                "Static_TryParse$$String$$UInt64"
            };
            typesImpByJs["System.Int64"] = new List<string>
            {
                "toString",
                "Static_Parse$$String",
                "Static_TryParse$$String$$Int64"
            };
            typesImpByJs["System.Boolean"] = new List<string> {"toString"};
            typesImpByJs["System.Double"] = new List<string> {"toString"};
            typesImpByJs["System.Single"] = new List<string> {"toString", "Static_Parse$$String"};
            //			typesImpByJs["System.Int32"] = new List<string> { "toString", "Static_Parse$$String",  };
            typesImpByJs["System.Enum"] = new List<string> {"toString"};
            typesImpByJs["System.MulticastDelegate"] = new List<string>();
        }


        string allExportedMembersFile = JSAnalyzer.GetAllExportedMembersFile();

        var allInvoked = LoadAllInvoked(allInvokeWithLocationOutputPath);
        var allExported = LoadAllExported(allExportedMembersFile);
        foreach (var KV in typesImpByJs)
        {
            HashSet<string> HS = null;
            if (!allExported.TryGetValue(KV.Key, out HS))
            {
                HS = new HashSet<string>();
                allExported.Add(KV.Key, HS);
            }
            if (KV.Value == null)
                continue;

            foreach (string m in KV.Value)
            {
                if (!HS.Contains(m))
                    HS.Add(m);
            }
        }

        var sbError = new StringBuilder();

        int errCount = 0;
        foreach (var KV in allInvoked)
        {
            string typeName = KV.Key;
            HashSet<string> hsExported;
            var DInvoked = KV.Value;

            // 类有导出吗？
            if (!allExported.TryGetValue(typeName, out hsExported))
            {
                errCount++;
                sbError.AppendFormat("[{0}] not exported.", typeName);
                sbError.AppendLine();
                foreach (var KV2 in DInvoked)
                {
                    string methodName = KV2.Key;
                    sbError.AppendFormat("      {0}", methodName);
                    sbError.AppendLine();

                    foreach (var loc in KV2.Value)
                    {
                        sbError.AppendFormat("        {0} {1}", loc.FileName, loc.Line);
                        sbError.AppendLine();
                    }
                }
            }
            else
            {
                foreach (var KV2 in DInvoked)
                {
                    string methodName = KV2.Key;
                    // 函数可用/有导出吗
                    if (hsExported == null || !hsExported.Contains(methodName))
                    {
                        errCount++;
                        sbError.AppendFormat("[{0}].{1} not valid.", typeName, methodName);
                        sbError.AppendLine();

                        foreach (var loc in KV2.Value)
                        {
                            sbError.AppendFormat("        {0} {1}", loc.FileName, loc.Line);
                            sbError.AppendLine();
                        }
                    }
                }
            }
        }

        string fullpath = JSAnalyzer.GetTempFileNameFullPath("CompilerCheckErrorResult.txt");
        File.Delete(fullpath);

        if (errCount > 0)
        {
            File.WriteAllText(fullpath, sbError.ToString());

            string relPath = fullpath.Replace("\\", "/").Substring(fullpath.IndexOf("Assets/"));
            var context = Resources.LoadAssetAtPath<Object>(relPath);
            Debug.LogError("Check invocation error result: (" + errCount + " errors) （点击此条可定位文件）", context);
            Debug.LogError(sbError);
        }
        else
        {
            Debug.Log("Check invocation error result: 0 error");
        }
    }

    private static void CheckError_Inheritance()
    {
        var sb = new StringBuilder();
        int errCount = 0;
        foreach (var a in AppDomain.CurrentDomain.GetAssemblies())
        {
            if (a.FullName.Contains("Assembly-CSharp")) // 可能是 Assembly-CSharp-Editor
            {
                var types = a.GetTypes();
                foreach (var type in types)
                {
                    bool toJS = JSSerializerEditor.WillTypeBeTranslatedToJavaScript(type);
                    if (!toJS)
                        continue;

                    var baseType = type.BaseType;
                    if (baseType == null ||
                        baseType == typeof (object) ||
                        baseType == typeof (Enum) ||
                        baseType == typeof (ValueType) ||
                        baseType == typeof (MonoBehaviour))
                    {
                        continue;
                    }

                    // 特赦
                    //					if (baseType == typeof(Swift.Component) ||
                    //					    baseType == typeof(Swift.Port) ||
                    //					    baseType == typeof(Swift.PortAgent))
                    //					{
                    //						continue;
                    //					}


                    bool baseToJS = JSSerializerEditor.WillTypeBeTranslatedToJavaScript(baseType);
                    if (!baseToJS)
                    {
                        errCount++;
                        sb.AppendFormat("[{0}] 继承自 [{1}]，是否应该放 Framework？", type.FullName, baseType.FullName);
                        sb.AppendLine();
                    }
                }
            }
        }
        if (errCount > 0)
            Debug.LogError(sb.ToString());
    }

    [MenuItem("JSB/Build Cs to Js", false, 130)]
    public static void BuildJsCode()
    {
        _rebuild = false;
        CompileCsToJs();
    }

    [MenuItem("JSB/Rebuild Cs to Js", false, 131)]
    public static void RebuildJsCode()
    {
        _rebuild = true;
        CompileCsToJs();
    }

    public static void CompileCsToJs()
    {
        // 这个用于查看
        string allInvokeOutputPath = JSAnalyzer.GetTempFileNameFullPath("AllInvocations.txt");
        // 这个用于分析
        string allInvokeWithLocationOutputPath = JSAnalyzer.GetTempFileNameFullPath("AllInvocationsWithLocation.txt");
        // 
        string YieldReturnTypeOutputPath = JSAnalyzer.GetTempFileNameFullPath("YieldReturnTypes.txt");

        // 编译
        if (!CallSharpKitToCompile(allInvokeOutputPath, allInvokeWithLocationOutputPath, YieldReturnTypeOutputPath))
        {
            return;
        }

        // 纠正协程代码
        //JSAnalyzer.CorrectJavaScriptYieldCode();

        // 查错
        CheckError_Invocation(allInvokeWithLocationOutputPath);
        CheckError_Inheritance();

        // 生成JSC
#if UNITY_EDITOR_WIN
        //JSCGenerator.ConvertJavaScriptToBytecode();
        //JSCGenerator.ChangeExtensionJsc2Bytes();
#endif

        AssetDatabase.Refresh();

        // 提示生成 yield 结果
        string relPath =
            YieldReturnTypeOutputPath.Replace("\\", "/").Substring(YieldReturnTypeOutputPath.IndexOf("Assets/"));
        var context = Resources.LoadAssetAtPath<Object>(relPath);
        Debug.Log("生成了文件 " + relPath + "，请检查（点击此条可定位文件）", context);
    }

    public class Location
    {
        public string FileName;
        public int Line;
    }

    #region SharpKit工程编译选项

    //private const string SHARPKIT_CONFIG = "SharpKitConfiguration";
    //[MenuItem("JSB/***Compile SharpKit Proj***", false, 132)]
    //public static void CompileSharpKitProject()
    //{
    //    string configParam = EditorPrefs.GetString(SHARPKIT_CONFIG, "Android_Release");
    //    System.Diagnostics.Process.Start(".\\BuildProject.bat", configParam);
    //}

    //[MenuItem("JSB/***Set SharpKit Proj Target***/Android_Release", false, 134)]
    //public static void SetSharpKitProj_Android_Release()
    //{
    //    EditorPrefs.SetString(SHARPKIT_CONFIG, "Android_Release");
    //}

    //[MenuItem("JSB/***Set SharpKit Proj Target***/Android_Release", true, 134)]
    //public static bool IsSharpKitProj_Android_Release()
    //{
    //    string configParam = EditorPrefs.GetString(SHARPKIT_CONFIG);
    //    if (string.IsNullOrEmpty(configParam))
    //    {
    //        EditorPrefs.SetString(SHARPKIT_CONFIG, "Android_Release");
    //    }
    //    return EditorPrefs.GetString(SHARPKIT_CONFIG) != "Android_Release";
    //}

    //[MenuItem("JSB/***Set SharpKit Proj Target***/Android_Editor", false, 135)]
    //public static void SetSharpKitProj_Android_Editor()
    //{
    //    EditorPrefs.SetString(SHARPKIT_CONFIG, "Android_Editor");
    //}

    //[MenuItem("JSB/***Set SharpKit Proj Target***/Android_Editor", true, 135)]
    //public static bool IsSharpKitProj_Android_Editor()
    //{
    //    return EditorPrefs.GetString(SHARPKIT_CONFIG) != "Android_Editor";
    //}

    //[MenuItem("JSB/***Set SharpKit Proj Target***/IOS_Editor", false, 136)]
    //public static void SetSharpKitProj_IOS_Editor()
    //{
    //    EditorPrefs.SetString(SHARPKIT_CONFIG, "IOS_Editor");
    //}

    //[MenuItem("JSB/***Set SharpKit Proj Target***/IOS_Editor", true, 136)]
    //public static bool IsSharpKitProj_IOS_Editor()
    //{
    //    return EditorPrefs.GetString(SHARPKIT_CONFIG) != "IOS_Editor";
    //}

    //[MenuItem("JSB/***Set SharpKit Proj Target***/IOS_Release", false, 137)]
    //public static void SetSharpKitProj_IOS_Release()
    //{
    //    EditorPrefs.SetString(SHARPKIT_CONFIG, "IOS_Release");
    //}

    //[MenuItem("JSB/***Set SharpKit Proj Target***/IOS_Release", true, 137)]
    //public static bool IsSharpKitProj_IOS_Release()
    //{
    //    return EditorPrefs.GetString(SHARPKIT_CONFIG) != "IOS_Release";
    //}

    #endregion
}