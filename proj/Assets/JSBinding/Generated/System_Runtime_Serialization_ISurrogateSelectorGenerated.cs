﻿
//------------------------------------------------------------------------------
// <auto-generated>
// This code was generated by CSGenerator.
// </auto-generated>
//------------------------------------------------------------------------------
using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using System.Runtime.Serialization;

using jsval = JSApi.jsval;

public class System_Runtime_Serialization_ISurrogateSelectorGenerated
{

////////////////////// ISurrogateSelector ///////////////////////////////////////
// constructors

// fields

// properties

// methods

static bool ISurrogateSelector_ChainSelector__ISurrogateSelector(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Runtime.Serialization.ISurrogateSelector arg0 = (System.Runtime.Serialization.ISurrogateSelector)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        ((System.Runtime.Serialization.ISurrogateSelector)vc.csObj).ChainSelector(arg0);
    }

    return true;
}

static bool ISurrogateSelector_GetNextSelector(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 0) 
    {
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Runtime.Serialization.ISurrogateSelector)vc.csObj).GetNextSelector());
    }

    return true;
}

static bool ISurrogateSelector_GetSurrogate__Type__StreamingContext__ISurrogateSelector(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 3) 
    {
        System.Type arg0 = (System.Type)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        System.Runtime.Serialization.StreamingContext arg1 = (System.Runtime.Serialization.StreamingContext)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        int r_arg2 = JSApi.incArgIndex();
        System.Runtime.Serialization.ISurrogateSelector arg2;
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Runtime.Serialization.ISurrogateSelector)vc.csObj).GetSurrogate(arg0, arg1, out arg2));
        JSApi.setArgIndex(r_arg2);
        JSMgr.datax.setObject((int)JSApi.SetType.ArgRef, arg2);
    }

    return true;
}


//register

public static void __Register()
{
    JSMgr.CallbackInfo ci = new JSMgr.CallbackInfo();
    ci.type = typeof(System.Runtime.Serialization.ISurrogateSelector);
    ci.fields = new JSMgr.CSCallbackField[]
    {

    };
    ci.properties = new JSMgr.CSCallbackProperty[]
    {

    };
    ci.constructors = new JSMgr.MethodCallBackInfo[]
    {

    };
    ci.methods = new JSMgr.MethodCallBackInfo[]
    {
        new JSMgr.MethodCallBackInfo(ISurrogateSelector_ChainSelector__ISurrogateSelector, "ChainSelector"),
        new JSMgr.MethodCallBackInfo(ISurrogateSelector_GetNextSelector, "GetNextSelector"),
        new JSMgr.MethodCallBackInfo(ISurrogateSelector_GetSurrogate__Type__StreamingContext__ISurrogateSelector, "GetSurrogate"),

    };
    JSMgr.allCallbackInfo.Add(ci);
}


}
