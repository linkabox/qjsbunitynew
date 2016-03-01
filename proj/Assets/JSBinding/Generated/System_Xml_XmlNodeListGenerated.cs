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
using System.Xml;

using jsval = JSApi.jsval;

public class System_Xml_XmlNodeListGenerated
{

////////////////////// XmlNodeList ///////////////////////////////////////
// constructors

// fields

// properties
static void XmlNodeList_Count(JSVCall vc)
{
        System.Xml.XmlNodeList _this = (System.Xml.XmlNodeList)vc.csObj;
        var result = _this.Count;
        JSApi.setInt32((int)JSApi.SetType.Rval, (System.Int32)(result));
}
static void XmlNodeList_ItemOf_Int32(JSVCall vc)
{
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Xml.XmlNodeList _this = (System.Xml.XmlNodeList)vc.csObj;
        var result = _this[arg0];
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, result);
}

// methods

static bool XmlNodeList_GetEnumerator(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 0) 
    {
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Xml.XmlNodeList)vc.csObj).GetEnumerator());
    }

    return true;
}

static bool XmlNodeList_Item__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Xml.XmlNodeList)vc.csObj).Item(arg0));
    }

    return true;
}


//register

public static void __Register()
{
    JSMgr.CallbackInfo ci = new JSMgr.CallbackInfo();
    ci.type = typeof(System.Xml.XmlNodeList);
    ci.fields = new JSMgr.CSCallbackField[]
    {

    };
    ci.properties = new JSMgr.CSCallbackProperty[]
    {
        XmlNodeList_Count,
        XmlNodeList_ItemOf_Int32,

    };
    ci.constructors = new JSMgr.MethodCallBackInfo[]
    {

    };
    ci.methods = new JSMgr.MethodCallBackInfo[]
    {
        new JSMgr.MethodCallBackInfo(XmlNodeList_GetEnumerator, "GetEnumerator"),
        new JSMgr.MethodCallBackInfo(XmlNodeList_Item__Int32, "Item"),

    };
    JSMgr.allCallbackInfo.Add(ci);
}


}
