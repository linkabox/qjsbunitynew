﻿using System;
using System.Reflection;
using System.Text;
using cg;
using UnityEngine;

public class JSDataExchangeEditor : JSDataExchangeMgr
{
    // Editor only
    public struct ParamHandler
    {
        public string argName; // argN
        public string getter;
        public string updater;
    }

    public enum MemberFeature
    {
        Static = 1 << 0,
        Indexer = 1 << 1, // for Property
        Get = 1 << 2, // can be Get or Set, only one of them, for Field Property
        Set = 1 << 3
    }

    //static Dictionary<Type, JSDataExchange> dict;
    private static JSDataExchange_Arr arrayExchange;

    // Editor only
    public static void reset()
    {
        //dict = new Dictionary<Type, JSDataExchange>();

        arrayExchange = new JSDataExchange_Arr();
    }

    // Editor only
//    public static ParamHandler Get_TType(int index)
//    {
//        ParamHandler ph = new ParamHandler();
//        ph.argName = "t" + index.ToString();
//
//        string get_getParam = dict[typeof(string)].Get_GetParam(null);
//        ph.getter = "System.Type " + ph.argName + " = JSDataExchangeMgr.GetTypeByName(" + get_getParam + ");";

    //         string get_getParam = objExchange.Get_GetParam(typeof(Type));
    //         ph.getter = "System.Type " + ph.argName + " = (System.Type)" + get_getParam + ";";
//        return ph;
//    }
    public static bool IsDelegateSelf(Type type)
    {
        return type == typeof (Delegate) || type == typeof (MulticastDelegate);
    }

    public static bool IsDelegateDerived(Type type)
    {
        return typeof (Delegate).IsAssignableFrom(type) && !IsDelegateSelf(type);
    }

//    public string RecursivelyGetParam(Type type)
//    {
//        if (type.IsByRef)
//        {
//            return RecursivelyGetParam(type.GetElementType());
//        }
//        if (!type.IsArray)
//        {
//
//        }
//    }
    // Editor only
    public static ParamHandler Get_ParamHandler(Type type, int paramIndex, bool isRef, bool isOut)
    {
        var ph = new ParamHandler();
        ph.argName = "arg" + paramIndex;

        if (IsDelegateDerived(type))
        {
            Debug.LogError("Delegate derived class should not get here");
            return ph;
        }

        bool bTOrContainsT = type.IsGenericParameter || type.ContainsGenericParameters;

        string typeFullName;
        if (bTOrContainsT)
            typeFullName = "object";
        else
            typeFullName = JSNameMgr.GetTypeFullName(type);

        if (type.IsArray)
        {
            ph.getter = new StringBuilder()
                .AppendFormat("{0} {1} = {2};", typeFullName, ph.argName, arrayExchange.Get_GetParam(type))
                .ToString();
        }
        else
        {
            if (isRef || isOut)
            {
                type = type.GetElementType();
            }
            string keyword = GetMetatypeKeyword(type);
            if (keyword == string.Empty)
            {
                Debug.LogError("keyword is empty: " + type.Name);
                return ph;
            }

            if (isOut)
            {
                ph.getter = new StringBuilder()
                    .AppendFormat("int r_arg{0} = JSApi.incArgIndex();\n", paramIndex)
                    .AppendFormat("        {0} {1}{2};", typeFullName, ph.argName, bTOrContainsT ? " = null" : "")
                    .ToString();
            }
            else if (isRef)
            {
                ph.getter = new StringBuilder()
                    .AppendFormat("int r_arg{0} = JSApi.getArgIndex();\n", paramIndex)
                    .AppendFormat("{0} {1} = ({0}){2}((int)JSApi.GetType.ArgRef);", typeFullName, ph.argName, keyword)
                    .ToString();
            }
            else
            {
                ph.getter = new StringBuilder()
                    .AppendFormat("{0} {1} = ({0}){2}((int)JSApi.GetType.Arg);", typeFullName, ph.argName, keyword)
                    .ToString();
            }

            if (isOut)
            {
                var _sb = new StringBuilder();
                if (bTOrContainsT)
                {
                    // TODO
                    // sorry, 'arr_t' is written in CSGenerator2.cs
                    _sb.AppendFormat("        {0} = arr_t[{1}];\n", ph.argName, paramIndex);
                }

                ph.updater = _sb.AppendFormat("        JSApi.setArgIndex(r_arg{0});\n", paramIndex)
                    .AppendFormat("        {0}((int)JSApi.SetType.ArgRef, {1});\n", keyword.Replace("get", "set"),
                        ph.argName)
                    .ToString();
            }
        }
        return ph;
    }

    // Editor only
    public static ParamHandler Get_ParamHandler(ParameterInfo paramInfo, int paramIndex)
    {
        return Get_ParamHandler(paramInfo.ParameterType, paramIndex, paramInfo.ParameterType.IsByRef, paramInfo.IsOut);
    }

    // Editor only
    public static ParamHandler Get_ParamHandler(FieldInfo fieldInfo)
    {
        return Get_ParamHandler(fieldInfo.FieldType, 0, false, false); //fieldInfo.FieldType.IsByRef);
    }

    public static string Get_GetJSReturn(Type type)
    {
        if (type == typeof (void))
            return string.Empty;

        if (type.IsArray)
        {
            arrayExchange.elementType = type.GetElementType();
            if (arrayExchange.elementType.IsArray)
            {
                Debug.LogError("Return [][] not supported");
                return string.Empty;
            }
            if (arrayExchange.elementType.ContainsGenericParameters)
            {
                Debug.LogError(" Return T[] not supported");
                return "/* Return T[] is not supported */";
            }

            return arrayExchange.Get_GetJSReturn();
        }
        var sb = new StringBuilder();
        string keyword = GetMetatypeKeyword(type);

        sb.AppendFormat("{0}((int)JSApi.GetType.JSFunRet)", keyword);
        return sb.ToString();
    }

    public static string Get_Return(Type type, string expVar)
    {
        if (type == typeof (void))
            return expVar + ";";

        if (type.IsArray)
        {
            arrayExchange.elementType = type.GetElementType();
            if (arrayExchange.elementType.IsArray)
            {
                Debug.LogError("Return [][] not supported");
                return string.Empty;
            }
//            else if (arrayExchange.elementType.ContainsGenericParameters)
//            {
//                Debug.LogError(" Return T[] not supported");
//                return "/* Return T[] is not supported */";
//            }

            return arrayExchange.Get_Return(expVar);
        }
        var sb = new StringBuilder();
        string keyword = GetMetatypeKeyword(type).Replace("get", "set");

        if (type.IsPrimitive)
            sb.AppendFormat("{0}((int)JSApi.SetType.Rval, ({1})({2}));", keyword, JSNameMgr.GetTypeFullName(type),
                expVar);
        else if (type.IsEnum)
            sb.AppendFormat("{0}((int)JSApi.SetType.Rval, (int){1});", keyword, expVar);
        else
            sb.AppendFormat("{0}((int)JSApi.SetType.Rval, {1});", keyword, expVar);
        return sb.ToString();
    }

    public static string GetMethodArg_DelegateFuncionName(Type classType, string methodName, int methodTag, int argIndex)
    {
        // append Method Index if still conflicts
        var sb = new StringBuilder();
        sb.AppendFormat("{0}_{1}_GetDelegate_member{2}_arg{3}", classType.Name, methodName, methodTag, argIndex);
        return JSNameMgr.HandleFunctionName(sb.ToString());
    }

    public static string Build_GetDelegate(string getDelegateFunctionName, Type delType)
    {
        return new StringBuilder()
            .AppendFormat("JSDataExchangeMgr.GetJSArg<{0}>(()=>\n        [[\n", JSNameMgr.GetTypeFullName(delType))
            .AppendFormat("            if (JSApi.isFunctionS((int)JSApi.GetType.Arg))\n")
            .AppendFormat("                return {0}(JSApi.getFunctionS((int)JSApi.GetType.Arg));\n", getDelegateFunctionName)
            .Append("            else\n")
            .AppendFormat("                return ({0})JSMgr.datax.getObject((int)JSApi.GetType.Arg);\n",
                JSNameMgr.GetTypeFullName(delType))
            .Append("        ]])").ToString();
    }

    public static StringBuilder Build_DelegateFunction(Type classType, MemberInfo memberInfo, Type delType,
        int methodTag, int argIndex)
    {
        // building a closure
        // a function having a up-value: jsFunction

        string getDelFunctionName = GetMethodArg_DelegateFuncionName(classType, memberInfo.Name, methodTag, argIndex);

        var sb = new StringBuilder();
        var delInvoke = delType.GetMethod("Invoke");
        var ps = delInvoke.GetParameters();
        var returnType = delType.GetMethod("Invoke").ReturnType;

        var argsParam = new args();
        for (int i = 0; i < ps.Length; i++)
        {
            argsParam.Add(ps[i].Name);
        }

        // format as <t,u,v>
        string stringTOfMethod = string.Empty;
        if (delType.ContainsGenericParameters)
        {
            var arg = new args();
            foreach (var t in delType.GetGenericArguments())
            {
                arg.Add(t.Name);
            }
            stringTOfMethod = arg.Format(args.ArgsFormat.GenericT);
        }

        // this function name is used in BuildFields, don't change
        sb.AppendFormat("public static {0} {1}{2}(CSRepresentedObject objFunction)\n[[\n",
            JSNameMgr.GetTypeFullName(delType, true), // [0]
            getDelFunctionName, // [2]
            stringTOfMethod // [1]
            );
        sb.Append("    if (objFunction == null || objFunction.jsObjID == 0)\n");
        sb.Append("    [[\n        return null;\n    ]]\n");

        sb.AppendFormat("    var action = JSMgr.getJSFunCSDelegateRel<{0}>(objFunction.jsObjID);\n", JSNameMgr.GetTypeFullName(delType, true));
        sb.Append("    if (action == null)\n    [[\n");
        sb.AppendFormat("        action = ({1}) => \n", JSNameMgr.GetTypeFullName(delType, true),
            argsParam.Format(args.ArgsFormat.OnlyList));
        sb.AppendFormat("        [[\n");
        sb.AppendFormat("            JSMgr.vCall.CallJSFunctionValue(0, objFunction.jsObjID{0}{1});\n",
            argsParam.Count > 0 ? ", " : "", argsParam);

        if (returnType != typeof (void))
            sb.Append("            return (" + JSNameMgr.GetTypeFullName(returnType) + ")" + Get_GetJSReturn(returnType) +
                      ";\n");

        sb.AppendFormat("        ]];\n");
        sb.Append("        JSMgr.addJSFunCSDelegateRel(objFunction.jsObjID, action);\n");
        sb.Append("    ]]\n");
        sb.Append("    return action;\n");
        sb.AppendFormat("]]\n");

        return sb;
    }

    //
    // arg: a,b,c
    //
    public static string BuildCallString(Type classType, MemberInfo memberInfo, string argList, MemberFeature features,
        string newValue = "")
    {
        bool bGenericT = classType.IsGenericTypeDefinition;
        string memberName = memberInfo.Name;
        bool bIndexer = (features & MemberFeature.Indexer) > 0;
        bool bStatic = (features & MemberFeature.Static) > 0;
        bool bStruct = classType.IsValueType;
        string typeFullName = JSNameMgr.GetTypeFullName(classType);
        bool bField = memberInfo is FieldInfo;
        bool bProperty = memberInfo is PropertyInfo;
        bool bGet = (features & MemberFeature.Get) > 0;
        bool bSet = (features & MemberFeature.Set) > 0;
        if ((bGet && bSet) || (!bGet && !bSet))
        {
            return ">>>> sorry >>>>";
        }

        var sb = new StringBuilder();

        if (bField || bProperty)
        {
            if (!bGenericT)
            {
                string strThis = typeFullName;
                if (!bStatic)
                {
                    strThis = "_this";
                    sb.AppendFormat("        {0} _this = ({0})vc.csObj;\n", typeFullName);
                }

                string result = string.Empty;
                if (bGet)
                {
                    // convention: name 'result'
                    result = "var result = ";
                }

                if (bIndexer)
                    sb.AppendFormat("        {2}{0}[{1}]", strThis, argList, result);
                else
                    sb.AppendFormat("        {2}{0}.{1}", strThis, memberName, result);

                if (bGet)
                {
                    sb.Append(";\n");
                }
                else
                {
                    sb.AppendFormat(" = {0};\n", newValue);
                    if (!bStatic && bStruct)
                    {
                        sb.Append("        JSMgr.changeJSObj(vc.jsObjID, _this);\n");
                    }
                }
            }
            else
            {
                // convention: name 'member'
                if (bIndexer || !bIndexer) // both indexer and not indexer enters
                {
                    if (bProperty)
                    {
                        sb.AppendFormat("        {4}member.{0}({1}, {2}new object[][[{3}]]);\n",
                            bGet ? "GetValue" : "SetValue",
                            bStatic ? "null" : "vc.csObj",
                            bSet ? newValue + ", " : "",
                            argList,
                            bGet ? "var result = " : "");
                    }
                    else
                    {
                        sb.AppendFormat("        {3}member.{0}({1}{2});\n",
                            bGet ? "GetValue" : "SetValue",
                            bStatic ? "null" : "vc.csObj",
                            bSet ? ", " + newValue : "",
                            bGet ? "var result = " : "");
                    }
                }
            }
        }
        return sb.ToString();
    }
}