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

public class System_Xml_XmlAttributeCollectionGenerated
{

////////////////////// XmlAttributeCollection ///////////////////////////////////////
// constructors

// fields

// properties
static void XmlAttributeCollection_ItemOf_String(JSVCall vc)
{
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Xml.XmlAttributeCollection _this = (System.Xml.XmlAttributeCollection)vc.csObj;
        var result = _this[arg0];
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, result);
}
static void XmlAttributeCollection_ItemOf_Int32(JSVCall vc)
{
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Xml.XmlAttributeCollection _this = (System.Xml.XmlAttributeCollection)vc.csObj;
        var result = _this[arg0];
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, result);
}
static void XmlAttributeCollection_ItemOf_String_String(JSVCall vc)
{
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.String arg1 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Xml.XmlAttributeCollection _this = (System.Xml.XmlAttributeCollection)vc.csObj;
        var result = _this[arg0, arg1];
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, result);
}

// methods

static bool XmlAttributeCollection_Append__XmlAttribute(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Xml.XmlAttribute arg0 = (System.Xml.XmlAttribute)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Xml.XmlAttributeCollection)vc.csObj).Append(arg0));
    }

    return true;
}

static bool XmlAttributeCollection_CopyTo__XmlAttribute_Array__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Xml.XmlAttribute[] arg0 = JSDataExchangeMgr.GetJSArg<System.Xml.XmlAttribute[]>(() =>
    {
    int jsObjID = JSApi.getObject((int)JSApi.GetType.Arg);
    int length = JSApi.getArrayLength(jsObjID);
    var ret = new System.Xml.XmlAttribute[length];
    for (var i = 0; i < length; i++) {
        JSApi.getElement(jsObjID, i);
        ret[i] = (System.Xml.XmlAttribute)JSMgr.datax.getObject((int)JSApi.GetType.SaveAndRemove);
    }
    return ret;
})
;
        System.Int32 arg1 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        ((System.Xml.XmlAttributeCollection)vc.csObj).CopyTo(arg0, arg1);
    }

    return true;
}

static bool XmlAttributeCollection_InsertAfter__XmlAttribute__XmlAttribute(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Xml.XmlAttribute arg0 = (System.Xml.XmlAttribute)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        System.Xml.XmlAttribute arg1 = (System.Xml.XmlAttribute)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Xml.XmlAttributeCollection)vc.csObj).InsertAfter(arg0, arg1));
    }

    return true;
}

static bool XmlAttributeCollection_InsertBefore__XmlAttribute__XmlAttribute(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Xml.XmlAttribute arg0 = (System.Xml.XmlAttribute)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        System.Xml.XmlAttribute arg1 = (System.Xml.XmlAttribute)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Xml.XmlAttributeCollection)vc.csObj).InsertBefore(arg0, arg1));
    }

    return true;
}

static bool XmlAttributeCollection_Prepend__XmlAttribute(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Xml.XmlAttribute arg0 = (System.Xml.XmlAttribute)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Xml.XmlAttributeCollection)vc.csObj).Prepend(arg0));
    }

    return true;
}

static bool XmlAttributeCollection_Remove__XmlAttribute(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Xml.XmlAttribute arg0 = (System.Xml.XmlAttribute)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Xml.XmlAttributeCollection)vc.csObj).Remove(arg0));
    }

    return true;
}

static bool XmlAttributeCollection_RemoveAll(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 0) 
    {
        ((System.Xml.XmlAttributeCollection)vc.csObj).RemoveAll();
    }

    return true;
}

static bool XmlAttributeCollection_RemoveAt__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Xml.XmlAttributeCollection)vc.csObj).RemoveAt(arg0));
    }

    return true;
}

static bool XmlAttributeCollection_SetNamedItem__XmlNode(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Xml.XmlNode arg0 = (System.Xml.XmlNode)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Xml.XmlAttributeCollection)vc.csObj).SetNamedItem(arg0));
    }

    return true;
}


//register

public static void __Register()
{
    JSMgr.CallbackInfo ci = new JSMgr.CallbackInfo();
    ci.type = typeof(System.Xml.XmlAttributeCollection);
    ci.fields = new JSMgr.CSCallbackField[]
    {

    };
    ci.properties = new JSMgr.CSCallbackProperty[]
    {
        XmlAttributeCollection_ItemOf_String,
        XmlAttributeCollection_ItemOf_Int32,
        XmlAttributeCollection_ItemOf_String_String,

    };
    ci.constructors = new JSMgr.MethodCallBackInfo[]
    {

    };
    ci.methods = new JSMgr.MethodCallBackInfo[]
    {
        new JSMgr.MethodCallBackInfo(XmlAttributeCollection_Append__XmlAttribute, "Append"),
        new JSMgr.MethodCallBackInfo(XmlAttributeCollection_CopyTo__XmlAttribute_Array__Int32, "CopyTo"),
        new JSMgr.MethodCallBackInfo(XmlAttributeCollection_InsertAfter__XmlAttribute__XmlAttribute, "InsertAfter"),
        new JSMgr.MethodCallBackInfo(XmlAttributeCollection_InsertBefore__XmlAttribute__XmlAttribute, "InsertBefore"),
        new JSMgr.MethodCallBackInfo(XmlAttributeCollection_Prepend__XmlAttribute, "Prepend"),
        new JSMgr.MethodCallBackInfo(XmlAttributeCollection_Remove__XmlAttribute, "Remove"),
        new JSMgr.MethodCallBackInfo(XmlAttributeCollection_RemoveAll, "RemoveAll"),
        new JSMgr.MethodCallBackInfo(XmlAttributeCollection_RemoveAt__Int32, "RemoveAt"),
        new JSMgr.MethodCallBackInfo(XmlAttributeCollection_SetNamedItem__XmlNode, "SetNamedItem"),

    };
    JSMgr.allCallbackInfo.Add(ci);
}


}
