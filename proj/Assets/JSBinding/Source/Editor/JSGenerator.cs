﻿using UnityEngine;
using UnityEditor;
using System;
using System.Text;
using System.Reflection;
using System.Collections.Generic;
using System.Collections;
using System.IO;
using System.Text.RegularExpressions;


public static class JSGenerator
{
    // input
    static StringBuilder sb = null;
    public static Type cachedType = null;

    static StreamWriter W;
    //static string enumFile = JSBindingSettings.jsGeneratedDir + "/enum" + JSPathSettings.jsExtension;
    //static string tempFile = JSPathSettings.jsDir + "/temp"+JSPathSettings.jsExtension;

    public static void OnBegin()
    {
        GeneratorHelp.ClearTypeInfo();

//        if (Directory.Exists(JSBindingSettings.jsGeneratedDir))
//        {
//            // delete all last generated files
//            string[] files = Directory.GetFiles(JSBindingSettings.jsGeneratedDir);
//            for (int i = 0; i < files.Length; i++)
//            {
//                File.Delete(files[i]);
//            }
//        }
//        else
//        {
//            // create directory
//            Directory.CreateDirectory(JSBindingSettings.jsGeneratedDir);
//        }

		// clear generated enum files
		W = OpenFile(JSPathSettings.jsGeneratedFiles, false);
		W.Write("this.Enum = {};\n");
    }
    public static void OnEnd()
    {
        W.Close();
    }

    public static string SharpKitTypeName(Type type)
    {
        if (type == null)
            return "";
        string name = string.Empty;
        if (type.IsByRef)
        {
            name = SharpKitTypeName(type.GetElementType());
        }
        else if (type.IsArray)
        {
            while (type.IsArray)
            {
                Type subt = type.GetElementType();
                name += SharpKitTypeName(subt) + '$';
                type = subt;
            }
            name += "Array";
        }
        else if (type.IsGenericTypeDefinition)
        {
            // never come here
            name = type.Name;
        }
        else if (type.IsGenericType)
        {
            name = type.Name;
            Type[] ts = type.GetGenericArguments();

            bool hasGenericParameter = false;
            for (int i = 0; i < ts.Length; i++)
            {
                if (ts[i].IsGenericParameter)
                {
                    hasGenericParameter = true;
                    break;
                }
            }

            if (!hasGenericParameter)
            {
                for (int i = 0; i < ts.Length; i++)
                {
                    name += "$" + SharpKitTypeName(ts[i]);
                }
            }
        }
        else
        {
            name = type.Name;
        }
        return name;

    }
    public static string SharpKitPropertyName(PropertyInfo property)
    {
        string name = property.Name;
        ParameterInfo[] ps = property.GetIndexParameters();
        if (ps.Length > 0)
        {
            for (int i = 0; i < ps.Length; i++)
            {
                Type type = ps[i].ParameterType;
                name += "$$" + SharpKitTypeName(type);
            }
            name = name.Replace("`", "$");
        }
        return name;
    }
    public static string SharpKitMethodName(string methodName, ParameterInfo[] paramS, bool overloaded, int TCounts = 0)
    {
//         if (!overloaded && TCounts > 0)
//         {
//             Debug.Log("");
//         }

        string name = methodName;
        if (TCounts > 0)
            name += "$" + TCounts.ToString();

        if (overloaded)
        {
            for (int i = 0; i < paramS.Length; i++)
            {
                Type type = paramS[i].ParameterType;
                name += "$$" + SharpKitTypeName(type);
            }
            name = name.Replace("`", "$");
        }
        return name;
    }
    public static string SharpKitClassName(Type type)
    {
        return JSNameMgr.GetJSTypeFullName(type);
    }

    public static StringBuilder BuildFields(Type type, FieldInfo[] fields, int slot, List<string> lstNames)
    {
//        string fmt2 = @"
// _jstype.{7}.get_{0} = function() [[ return CS.Call({1}, {3}, {4}, {5}{6}); ]]
// _jstype.{7}.set_{0} = function(v) [[ return CS.Call({2}, {3}, {4}, {5}{6}, v); ]]
// "; 
        string fmt3 = @"
_jstype.{7}.{0} =  [[ 
            get: function() [[ return CS.Call({1}, {3}, {4}, {5}{6}); ]], 
            set: function(v) [[ return CS.Call({2}, {3}, {4}, {5}{6}, v); ]] 
        ]];
";

        var sb = new StringBuilder();
        for (int i = 0; i < fields.Length; i++)
        {
            FieldInfo field = fields[i];

			lstNames.Add((field.IsStatic ? "Static_" : "") + field.Name);

            sb.AppendFormat(fmt3, 
                field.Name, // [0]
                (int)JSVCall.Oper.GET_FIELD, // [1]
                (int)JSVCall.Oper.SET_FIELD, // [2]
                slot, //[3]
                i,//[4]
                (field.IsStatic ? "true" : "false"),//[5]
                (field.IsStatic ? "" : ", this"), //[6]
                (field.IsStatic ? "staticFields" : "fields"));//[7]
        }
        return sb;
    }
	public static StringBuilder BuildProperties(Type type, PropertyInfo[] properties, int slot, List<string> lstNames)
    {
        string fmt2 = @"
_jstype.{7}.get_{0} = function({9}) [[ return CS.Call({1}, {3}, {4}, {5}{6}{8}); ]]
_jstype.{7}.set_{0} = function({10}v) [[ return CS.Call({2}, {3}, {4}, {5}{6}{8}, v); ]]
";
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < properties.Length; i++)
        {
            PropertyInfo property = properties[i];
//             if (property.Name == "Item") //[] not support
//                 continue;

            ParameterInfo[] ps = property.GetIndexParameters();
            string indexerParamA = string.Empty;
            string indexerParamB = string.Empty;
            string indexerParamC = string.Empty;
            for (int j = 0; j < ps.Length; j++)
            {
                indexerParamA += "ind" + j.ToString();
                indexerParamB += "ind" + j.ToString() + ", ";
                if (j < ps.Length - 1) indexerParamA += ", ";
                indexerParamC += ", ind" + j.ToString();
            }


            MethodInfo[] accessors = property.GetAccessors();
            bool isStatic = accessors[0].IsStatic;

			string mName = SharpKitPropertyName(property);
			lstNames.Add((isStatic ? "Static_" : "") + "get_" + mName);
			lstNames.Add((isStatic ? "Static_" : "") + "set_" + mName);

            sb.AppendFormat(fmt2,
			                mName, // [0]
                (int)JSVCall.Oper.GET_PROPERTY, // [1] op
                (int)JSVCall.Oper.SET_PROPERTY, // [2] op
                slot,                           // [3]
                i,                              // [4]
                (isStatic ? "true" : "false"),  // [5] isStatic
                (isStatic ? "" : ", this"),     // [6] this
                (isStatic ? "staticDefinition" : "definition"),                // [7]
                indexerParamC, // [8]
                indexerParamA, 
                indexerParamB);
        }
        return sb;
    }
    public static StringBuilder BuildTail()
    {
        StringBuilder sb = new StringBuilder();
        sb.Append(@"


JsTypes.push(_jstype);");
        return sb;
    }
    public static StringBuilder BuildHeader(Type type)
    {
        string fmt = @"if (typeof(JsTypes) == 'undefined')
    var JsTypes = [];

// {0}
_jstype = 
[[
    definition: [[]],
    staticDefinition: [[]],
    fields: [[]],
    staticFields: [[]],
    assemblyName: '{1}',
    Kind: '{2}',
    fullname: '{3}', {4}
    {5}
]];

var _found = false;
for (var i = 0; i < JsTypes.length; i++) [[
    if (JsTypes[i].fullname == _jstype.fullname) [[
        JsTypes[i] = _jstype;
        _found = true;
        break;
    ]]
]]
if (!_found) [[
    JsTypes.push(_jstype);
]]

";
        string jsTypeName = JSNameMgr.GetTypeFullName(type);
        jsTypeName = jsTypeName.Replace('.', '$');

        string assemblyName = "";
        string Kind = "unknown";
        if (type.IsClass) {
			Kind = "Class";
		} else if (type.IsEnum) {
			Kind = "Enum";
		} else if (type.IsValueType) {
			Kind = "Struct";
		} else if (type.IsInterface) {
			Kind = "Interface";
		}

        string fullname = SharpKitClassName(type);
        string baseTypeName = SharpKitClassName(type.BaseType);
		Type[] interfaces = type.GetInterfaces();
		StringBuilder sbI = new StringBuilder();
		if (interfaces != null && interfaces.Length > 0)
		{
			sbI.Append("\n    interfaceNames: [");
			for (int i = 0; i < interfaces.Length; i++)
			{
				sbI.AppendFormat("\'{0}\'", SharpKitClassName(interfaces[i]));
				if (i < interfaces.Length - 1)
					sbI.Append(", ");
			}
			sbI.Append("],");
		}

        StringBuilder sb = new StringBuilder();
        sb.AppendFormat(fmt, 
            jsTypeName,   // [0]
            assemblyName, // [1]
            Kind,         // [2] 
            fullname,     // [3] full name
			sbI.ToString(), // [4] interfaceNames
            baseTypeName.Length > 0 ? "baseTypeName: '" + baseTypeName + "'" : ""); // [5] baseTypeName

        return sb;
    }
    public static StringBuilder BuildConstructors(Type type, ConstructorInfo[] constructors, int slot, int howmanyConstructors, List<string> lstNames)
    {
        string fmt = @"
_jstype.definition.{0} = function({1}) [[ CS.Call({2}); ]]";

        StringBuilder sb = new StringBuilder();
        var argActual = new cg.args();
        var argFormal = new cg.args();

        for (int i = 0; i < constructors.Length; i++)
        {
            ConstructorInfo con = constructors[i];
            ParameterInfo[] ps = con == null? new ParameterInfo[0] : con.GetParameters();

            argActual.Clear().Add(
                (int)JSVCall.Oper.CONSTRUCTOR, // OP
                slot,
                i,  // NOTICE
                "true", // IsStatics                
                "this"
                );

            argFormal.Clear();

            // add T to formal param
            if (type.IsGenericTypeDefinition)
            {
                // TODO check
                int TCount = type.GetGenericArguments().Length;
                for (int j = 0; j < TCount; j++)
                {
                    argFormal.Add("t" + j + "");
                    argActual.Add("t" + j + ".getNativeType()");
                }
            }

            //StringBuilder sbFormalParam = new StringBuilder();
            //StringBuilder sbActualParam = new StringBuilder();
            for (int j = 0; j < ps.Length; j++)
            {
                argFormal.Add("a" + j.ToString());
                argActual.Add("a" + j.ToString());
            }

			string mName = SharpKitMethodName("ctor", ps, howmanyConstructors > 1);
			lstNames.Add(mName);

            sb.AppendFormat(fmt,
                mName, // [0]
                argFormal,    // [1]
                argActual);    // [2]
        }
        return sb;
    }

    // can handle all methods
	public static StringBuilder BuildMethods(Type type, MethodInfo[] methods, int slot, List<string> lstNames)
    {
        string fmt = @"
/* {6} */
_jstype.definition.{1} = function({2}) [[ 
    {9}
    return CS.Call({7}, {3}, {4}, false, {8}{5}); 
]]";
        string fmtStatic = @"
/* static {6} {8} */
_jstype.staticDefinition.{1} = function({2}) [[ 
    {9}
    return CS.Call({7}, {3}, {4}, true{5}); 
]]";

        //bool bIsSystemObject = (type == typeof(System.Object));

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < methods.Length; i++)
        {
            MethodInfo method = methods[i];

            bool bOverloaded = ((i > 0 && method.Name == methods[i - 1].Name) ||
                (i < methods.Length - 1 && method.Name == methods[i + 1].Name));

            if (!bOverloaded)
            {
                if (GeneratorHelp.MethodIsOverloaded(type, method.Name))
                {
                    bOverloaded = true;
                    //Debug.Log("$$$ " + type.Name + "." + method.Name + (method.IsStatic ? " true" : " false"));
                }
            }

            StringBuilder sbFormalParam = new StringBuilder();
            StringBuilder sbActualParam = new StringBuilder();
            ParameterInfo[] paramS = method.GetParameters();
            StringBuilder sbInitT = new StringBuilder();
            int TCount = 0;

            // add T to formal param
            if (method.IsGenericMethodDefinition)
            {
                TCount = method.GetGenericArguments().Length;
                for (int j = 0; j < TCount; j++)
                {
                    sbFormalParam.AppendFormat("t{0}", j);
                    if (j < TCount - 1 || paramS.Length > 0)
                        sbFormalParam.Append(", ");


                    sbInitT.AppendFormat("    var native_t{0} = t{0}.getNativeType();\n", j);
                    sbActualParam.AppendFormat(", native_t{0}", j);
                }
            }

            int L = paramS.Length;
            for (int j = 0; j < L; j++)
            {
                sbFormalParam.AppendFormat("a{0}/*{1}*/{2}", j, paramS[j].ParameterType.Name, (j == L - 1 ? "" : ", "));

                ParameterInfo par = paramS[j];
                if (par.ParameterType.IsArray && par.GetCustomAttributes(typeof(ParamArrayAttribute), false).Length > 0)
                {
                    sbActualParam.AppendFormat(", jsb_formatParamsArray({0}, a{0}, arguments)", j);
                }
                else
                {
                    sbActualParam.AppendFormat(", a{0}", j);
                }
            }

            //int TCount = method.GetGenericArguments().Length;

            string methodName = method.Name;
            if (methodName == "ToString") { methodName = "toString"; }

			string mName = SharpKitMethodName(methodName, paramS, bOverloaded, TCount);
			lstNames.Add((method.IsStatic ? "Static_" : "") + mName);

            if (!method.IsStatic)
                sb.AppendFormat(fmt,
                    className,
				    mName, // [1] method name
                    sbFormalParam.ToString(),  // [2] formal param
                    slot,                      // [3] slot
                    i,                         // [4] index
                    sbActualParam,             // [5] actual param
                    method.ReturnType.Name,    // [6] return type name
                    (int)JSVCall.Oper.METHOD,  // [7] OP
                    "this",                // [8] this
                    sbInitT                    //[9] generic types init
                    );
            else
                sb.AppendFormat(fmtStatic, 
                    className,
				    mName, 
                    sbFormalParam.ToString(), 
                    slot, 
                    i, 
                    sbActualParam, 
                    method.ReturnType.Name, 
                    (int)JSVCall.Oper.METHOD, 
                    "",
                    sbInitT);
        }
        return sb;
    }
    public static StringBuilder BuildClass(Type type, StringBuilder sbFields, StringBuilder sbProperties, StringBuilder sbMethods, StringBuilder sbConstructors)
    {
        /*
        * class
        * 0 class name
        * 1 fields
        * 2 properties
        * 3 methods
        * 4 constructors
        */
        string fmt = @"
{4}

// fields
{1}
// properties
{2}
// methods
{3}
";
        var sb = new StringBuilder();
        sb.AppendFormat(fmt, className, sbFields.ToString(), sbProperties.ToString(), sbMethods.ToString(), sbConstructors.ToString());
        return sb;
    }

    public static List<string> GenerateClass()
    {
        /*if (type.IsInterface)
        {
            Debug.Log("Interface: " + type.ToString() + " ignored.");
            return;
        }*/

		List<string> memberNames = new List<string>();

        GeneratorHelp.ATypeInfo ti;
        int slot = GeneratorHelp.AddTypeInfo(cachedType, out ti);
        var sbHeader = BuildHeader(cachedType);
		var sbCons = sbHeader.Append(BuildConstructors(cachedType, ti.constructors, slot, ti.howmanyConstructors, memberNames));
		var sbFields = BuildFields(cachedType, ti.fields, slot, memberNames);
		var sbProperties = BuildProperties(cachedType, ti.properties, slot, memberNames);
		var sbMethods = BuildMethods(cachedType, ti.methods, slot, memberNames);
        //sbMethods.Append(BuildTail());
        var sbClass = BuildClass(cachedType, sbFields, sbProperties, sbMethods, sbCons);
		HandleStringFormat(sbClass);
		
		
		//        string fileName = JSBindingSettings.jsGeneratedDir + "/" +
		//            JSNameMgr.GetTypeFileName(JSGenerator.type)
		//            + JSPathSettings.jsExtension;
		//        var writer2 = OpenFile(fileName, false);
		//        writer2.Write(sbClass.ToString());
		//        writer2.Close();
		W.Write(sbClass.ToString());

		return memberNames;
    }

    static void GenerateEnum()
    {
        var sb = new StringBuilder();

        // comment line
        string fmtComment = @"// {0}
";
        sb.AppendFormat(fmtComment, cachedType.ToString());

        // remove name space
        string typeName = cachedType.ToString();
        int lastDot = typeName.LastIndexOf('.');
        if (lastDot >= 0)
        {
            typeName = typeName.Substring(lastDot + 1);
        }

        if (typeName.IndexOf('+') >= 0)
            return;

        string fmt = "this.Enum.{0} = [[\n";
        sb.AppendFormat(fmt, typeName);


        FieldInfo[] fields = cachedType.GetFields(BindingFlags.GetField | BindingFlags.Public | BindingFlags.Static);
        string fmtField = "    {0}: {1}{2}\n";
        for (int i = 0; i < fields.Length; i++)
        {
            sb.AppendFormat(fmtField, fields[i].Name, (int)fields[i].GetValue(null), i==fields.Length-1?"":",");
        }
        string fmtEnter = "]];\n";
        sb.Append(fmtEnter);

		HandleStringFormat(sb);
		W.Write(sb.ToString());
    }

    public static void Clear()
    {
        cachedType = null;
        sb = new StringBuilder();
    }
    static void GenEnd()
    {
        string fmt = @"
]]
";
        sb.Append(fmt);
    }

    static void WriteUsingSection(StreamWriter writer)
    {
        string fmt = @"using System;
using UnityEngine;
";
        writer.Write(fmt);
    }
    static StreamWriter OpenFile(string fileName, bool bAppend = false)
    {
        // IMPORTANT
        // Bom (byte order mark) is not needed
        Encoding utf8NoBom = new UTF8Encoding(false);
        return new StreamWriter(fileName, bAppend, utf8NoBom);
    }

    static void HandleStringFormat(StringBuilder sb)
    {
        sb.Replace("[[", "{");
        sb.Replace("]]", "}");
        sb.Replace("'", "\"");
    }

//     [MenuItem("JS for Unity/Generate JS Enum Bindings")]
//     public static void GenerateEnumBindings()
//     {
    //         JSGenerator2.OnBegin();
// 
//         for (int i = 0; i < JSBindingSettings.enums.Length; i++)
//         {
    //             JSGenerator2.Clear();
    //             JSGenerator2.type = JSBindingSettings.enums[i];
    //             JSGenerator2.GenerateEnum();
//         }
// 
    //         JSGenerator2.OnEnd();
// 
//         Debug.Log("Generate JS Enum Bindings finish. total = " + JSBindingSettings.enums.Length.ToString());
//     }

    /* 
     * Some classes have another name
     * for example: js has 'Object'
     */
    public static Dictionary<Type, string> typeClassName = new Dictionary<Type, string>();
    static string className = string.Empty;


    //[MenuItem("JSBinding/Generate JS Bindings")]
    public static void GenerateClassBindings()
    {
//         if (!typeClassName.ContainsKey(typeof(UnityEngine.Object)))
//             typeClassName.Add(typeof(UnityEngine.Object), "UnityObject");

        JSGenerator.OnBegin();

        // enums
        for (int i = 0; i < JSBindingSettings.enums.Length; i++)
        {
            JSGenerator.Clear();
            JSGenerator.cachedType = JSBindingSettings.enums[i];
            JSGenerator.GenerateEnum();
        }

		// typeName -> member list
		Dictionary<string, List<string>> allDefs = new Dictionary<string, List<string>>();

        // classes
        for (int i = 0; i < CSGenerator.exportTypeList.Count; i++)
        {
            JSGenerator.Clear();
            JSGenerator.cachedType = CSGenerator.exportTypeList[i];
            if (!typeClassName.TryGetValue(cachedType, out className))
                className = cachedType.Name;


            List<string> memberNames = JSGenerator.GenerateClass();
            allDefs.Add(SharpKitClassName(cachedType), memberNames);
        }

   //     for (int i = 0; i < JSBindingSettings.classes.Length; i++)
   //     {
   //         JSGenerator.Clear();
   //         JSGenerator.cachedType = JSBindingSettings.classes[i];
   //         if (!typeClassName.TryGetValue(cachedType, out className))
   //             className = cachedType.Name;
            

			//List<string> memberNames = JSGenerator.GenerateClass();
			//allDefs.Add(SharpKitClassName(cachedType), memberNames);
   //     }

        JSGenerator.OnEnd();

		StringBuilder sb = new StringBuilder();
		foreach (var KV in allDefs)
		{
			sb.AppendFormat("[{0}]\r\n", KV.Key);

			var lst = KV.Value;
			foreach (var l in lst)
			{
				sb.AppendFormat("    {0}\r\n", l);
			}
			sb.Append("\r\n");
		}
		File.WriteAllText(JSAnalyzer.GetAllExportedMembersFile(), sb.ToString());

        Debug.Log("Generate JS Bindings OK. enum " + JSBindingSettings.enums.Length.ToString() + ", class " + JSBindingSettings.classes.Length.ToString());
    }

	////[UnityEditor.MenuItem("JSB/Merge Generated JS and SharpKit Generated JS", false, 502)]
	//public static void MergeGeneratedJsAndSharpKitGeneratedJS()
	//{
	//	string[] sourceDirs = new string[]
	//	{
	//		//JSBindingSettings.jsGeneratedDir,
	//		JSBindingSettings.sharpKitGenFileFullDir,
	//	};
	//	string[] targetFiles = new string[]
	//	{
	//		//JSBindingSettings.GeneratedFilesAll,
	//		JSBindingSettings.SharpkitGeneratedFilesAll,
	//	};

	//	for (var i = 0; i < sourceDirs.Length; i++)
	//	{
	//		string dir = sourceDirs[i];
	//		string[] files = Directory.GetFiles(
	//			dir,
	//			"*.javascript", SearchOption.AllDirectories);

	//		StringBuilder sb = new StringBuilder();
	//		StringBuilder sbFileName = new StringBuilder();
	//		foreach (var f in files)
	//		{
	//			string text = File.ReadAllText(f);
	//			sb.Append(text);
	//		}

	//		File.WriteAllText(targetFiles[i], sb.ToString());

	//		Debug.Log ("合并 " + dir + " ---> " + targetFiles[i]);
	//	}		
	//}

    //     [MenuItem("JS for Unity/Output All Types in UnityEngine")]
    //     public static void OutputAllTypesInUnityEngine()
    //     {
    //         var asm = typeof(GameObject).Assembly;
    //         var alltypes = asm.GetTypes();
    //         var writer = new StreamWriter(tempFile, false, Encoding.UTF8);
    // 
    //         writer.WriteLine("// enum");
    //         writer.WriteLine("");
    //         for (int i = 0; i < alltypes.Length; i++)
    //         {
    //             if (!alltypes[i].IsPublic && !alltypes[i].IsNestedPublic)
    //                 continue;
    // 
    //             if (alltypes[i].IsEnum)
    //                 writer.WriteLine(alltypes[i].ToString());
    //         }
    // 
    //         writer.WriteLine("");
    //         writer.WriteLine("// interface");
    //         writer.WriteLine("");
    // 
    //         for (int i = 0; i < alltypes.Length; i++)
    //         {
    //             if (!alltypes[i].IsPublic && !alltypes[i].IsNestedPublic)
    //                 continue;
    // 
    //             if (alltypes[i].IsInterface)
    //                 writer.WriteLine(alltypes[i].ToString());
    //         }
    // 
    //         writer.WriteLine("");
    //         writer.WriteLine("// class");
    //         writer.WriteLine("");
    // 
    //         for (int i = 0; i < alltypes.Length; i++)
    //         {
    //             if (!alltypes[i].IsPublic && !alltypes[i].IsNestedPublic)
    //                 continue;
    // 
    //             if ((!alltypes[i].IsEnum && !alltypes[i].IsInterface) &&
    //                 alltypes[i].IsClass)
    //                 writer.WriteLine(alltypes[i].ToString());
    //         }
    // 
    // 
    //         writer.WriteLine("");
    //         writer.WriteLine("// ValueType");
    //         writer.WriteLine("");
    // 
    //         for (int i = 0; i < alltypes.Length; i++)
    //         {
    //             if (!alltypes[i].IsPublic && !alltypes[i].IsNestedPublic)
    //                 continue;
    // 
    //             if ((!alltypes[i].IsEnum && !alltypes[i].IsInterface) &&
    //                 !alltypes[i].IsClass && alltypes[i].IsValueType)
    //                 writer.WriteLine(alltypes[i].ToString());
    //         }
    // 
    //         writer.Close();
    // 
    //         Debug.Log("Output All Types in UnityEngine finish, file: " + tempFile);
    //         return;
    //    }
}