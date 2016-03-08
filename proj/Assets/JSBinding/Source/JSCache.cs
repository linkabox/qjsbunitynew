using System;
using System.Text;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using SharpKit.JavaScript;

public class JSCache
{
    #region MonoBehaviour -> JSComponent Name
    // MonoBehaviour 对应的 JSComponent 名字
    static Dictionary<string, string> dictMB2JSComName = new Dictionary<string, string>();
    private static Type monoBehaviourType = typeof(MonoBehaviour);

    // 根据 脚本名获得JSComponent名
    public static string GetMonoBehaviourJSComponentName(string monoBehaviourName)
    {
        string ret;
        if (dictMB2JSComName.TryGetValue(monoBehaviourName, out ret))
            return ret;
        // 没找到返回  Empty
        return string.Empty;
    }
    // 从 MonoBehaviour2JSComponentName.javascript 加载
    public static void InitMonoBehaviourJSComponentName()
    {
        dictMB2JSComName.Clear();

        byte[] jsonBytes = JSEngine.inst.jsLoader.LoadJSSync(JSPathSettings.Mono2JsComConfig);
        Hashtable table = MiniJSON.jsonDecode(Encoding.UTF8.GetString(jsonBytes)) as Hashtable;
        if (table != null)
        {
            foreach (DictionaryEntry item in table)
            {
                dictMB2JSComName.Add((string)item.Key, (string)item.Value);
            }
        }
        else
        {
            Debug.LogError("Read Mono2JsCom Config Error");
        }

        //dictMB2JSComName.Clear();

        //int i = 0;
        //string str;
        //string[] arr;

        //// 从JS逐个取出
        //while (true)
        //{
        //	// 调用全局函数，使用 id 0
        //	if (!JSMgr.vCall.CallJSFunctionName(0, "GetMonoBehaviourJSComponentName", i))
        //		break;

        //	str = JSApi.getStringS((int)JSApi.GetType.JSFunRet);
        //	if (string.IsNullOrEmpty(str))
        //		break;

        //	arr = str.Split('|');
        //	if (arr == null || arr.Length != 2)
        //		break;

        //	//Debug.Log(arr[0] + "->" + arr[1]);

        //	dictMB2JSComName.Add(arr[0], arr[1]);

        //	i++;
        //}

        Debug.Log("JSCache.InitMonoBehaviourJSComponentName OK, total " + dictMB2JSComName.Count);
    }

    #endregion MonoBehaviour -> JSComponent Name

    #region MonoBehaviour Inheritance Relation
    // 对继承关系做缓存

    static Dictionary<string, bool> dictClassInheritanceRel = new Dictionary<string, bool>();

    public static bool IsInheritanceRel(string baseClassName, string subClassName)
    {
        string key = baseClassName + "|" + subClassName;

        bool ret = false;
        if (dictClassInheritanceRel.TryGetValue(key, out ret))
        {
            return ret;
        }

        ret = false;
        if (JSMgr.vCall.CallJSFunctionName(0 /*global*/, "jsb_IsInheritanceRel", baseClassName, subClassName))
        {
            ret = (System.Boolean)JSApi.getBooleanS((int)JSApi.GetType.JSFunRet);
        }
        dictClassInheritanceRel.Add(key, ret);
        return ret;
    }

    #endregion MonoBehaviour Inheritance Relation

    #region Type -> TypeInfo

    public class TypeInfo
    {
        Type type;
        public TypeInfo(Type t) { this.type = t; }

        bool? isValueType = null;
        bool? isClass = null;
        bool? isDelegate = null;
        bool? isCSMonoBehaviour = null;
        string jsTypeFullName = null;

        // public bool IsNull { get { return type == null; } }

        public bool IsValueType
        {
            get
            {
                if (isValueType == null)
                    isValueType = type.IsValueType;
                return (bool)isValueType;
            }
        }
        public bool IsClass
        {
            get
            {
                if (isClass == null)
                    isClass = type.IsClass;
                return (bool)isClass;
            }
        }
        public bool IsDelegate
        {
            get
            {
                if (isDelegate == null)
                    isDelegate = typeof(System.Delegate).IsAssignableFrom(type);
                return (bool)isDelegate;
            }
        }
        public bool IsCSMonoBehaviour
        {
            get
            {
                if (isCSMonoBehaviour == null)
                {
                    if (type == null)
                        isCSMonoBehaviour = false;
                    else if (!monoBehaviourType.IsAssignableFrom(type))
                        isCSMonoBehaviour = false;
                    else if (type.Namespace != null && type.Namespace == monoBehaviourType.Namespace)
                        isCSMonoBehaviour = true;
                    else if (dictMB2JSComName.ContainsKey(JSNameMgr.GetTypeFullName(type, false)))
                        isCSMonoBehaviour = false;
                    // This is useful if source c# file still exists in project
                    else if (type.IsDefined(typeof (JsTypeAttribute), false))
                        isCSMonoBehaviour = false;
                    else
                        isCSMonoBehaviour = true;
                }
                return (bool)isCSMonoBehaviour;
            }
        }
        public string JSTypeFullName
        {
            get
            {
                if (jsTypeFullName == null)
                    jsTypeFullName = JSNameMgr.GetJSTypeFullName(type);
                return jsTypeFullName;
            }
        }

    }
    static Dictionary<Type, TypeInfo> dictType2TypeInfo = new Dictionary<Type, TypeInfo>();
    static TypeInfo nullTypeInfo = new TypeInfo(null);

    public static TypeInfo GetTypeInfo(Type type)
    {
        if (type == null)
            return nullTypeInfo;

        TypeInfo ti;
        if (dictType2TypeInfo.TryGetValue(type, out ti))
            return ti;

        ti = new TypeInfo(type);
        dictType2TypeInfo.Add(type, ti);
        return ti;
    }
    #endregion
}
