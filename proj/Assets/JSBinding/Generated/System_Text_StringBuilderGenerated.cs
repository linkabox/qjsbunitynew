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
using System.Text;

using jsval = JSApi.jsval;

public class System_Text_StringBuilderGenerated
{

////////////////////// StringBuilder ///////////////////////////////////////
// constructors

static bool StringBuilder_StringBuilder1(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 4)
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Int32 arg1 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg2 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg3 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.addJSCSRel(_this, new System.Text.StringBuilder(arg0, arg1, arg2, arg3));
    }

    return true;
}

static bool StringBuilder_StringBuilder2(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 0)
    {
        JSMgr.addJSCSRel(_this, new System.Text.StringBuilder());
    }

    return true;
}

static bool StringBuilder_StringBuilder3(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 1)
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.addJSCSRel(_this, new System.Text.StringBuilder(arg0));
    }

    return true;
}

static bool StringBuilder_StringBuilder4(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 2)
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg1 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.addJSCSRel(_this, new System.Text.StringBuilder(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_StringBuilder5(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 1)
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        JSMgr.addJSCSRel(_this, new System.Text.StringBuilder(arg0));
    }

    return true;
}

static bool StringBuilder_StringBuilder6(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 2)
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Int32 arg1 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.addJSCSRel(_this, new System.Text.StringBuilder(arg0, arg1));
    }

    return true;
}

// fields

// properties
static void StringBuilder_MaxCapacity(JSVCall vc)
{
        System.Text.StringBuilder _this = (System.Text.StringBuilder)vc.csObj;
        var result = _this.MaxCapacity;
        JSApi.setInt32((int)JSApi.SetType.Rval, (System.Int32)(result));
}
static void StringBuilder_Capacity(JSVCall vc)
{
    if (vc.bGet)
    { 
        System.Text.StringBuilder _this = (System.Text.StringBuilder)vc.csObj;
        var result = _this.Capacity;
        JSApi.setInt32((int)JSApi.SetType.Rval, (System.Int32)(result));
    }
    else
    { 
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Text.StringBuilder _this = (System.Text.StringBuilder)vc.csObj;
        _this.Capacity = arg0;
    }
}
static void StringBuilder_Length(JSVCall vc)
{
    if (vc.bGet)
    { 
        System.Text.StringBuilder _this = (System.Text.StringBuilder)vc.csObj;
        var result = _this.Length;
        JSApi.setInt32((int)JSApi.SetType.Rval, (System.Int32)(result));
    }
    else
    { 
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Text.StringBuilder _this = (System.Text.StringBuilder)vc.csObj;
        _this.Length = arg0;
    }
}
static void StringBuilder_Chars_Int32(JSVCall vc)
{
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
    if (vc.bGet)
    { 
        System.Text.StringBuilder _this = (System.Text.StringBuilder)vc.csObj;
        var result = _this[arg0];
        JSApi.setChar((int)JSApi.SetType.Rval, (System.Char)(result));
    }
    else
    { 
        System.Char arg1 = (System.Char)JSApi.getChar((int)JSApi.GetType.Arg);
        System.Text.StringBuilder _this = (System.Text.StringBuilder)vc.csObj;
        _this[arg0] = arg1;
    }
}

// methods

static bool StringBuilder_Append__Char_Array__Int32__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 3) 
    {
        System.Char[] arg0 = JSDataExchangeMgr.GetJSArg<System.Char[]>(() =>
    {
    int jsObjID = JSApi.getObject((int)JSApi.GetType.Arg);
    int length = JSApi.getArrayLength(jsObjID);
    var ret = new System.Char[length];
    for (var i = 0; i < length; i++) {
        JSApi.getElement(jsObjID, i);
        ret[i] = (System.Char)JSApi.getChar((int)JSApi.GetType.SaveAndRemove);
    }
    return ret;
})
;
        System.Int32 arg1 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg2 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0, arg1, arg2));
    }

    return true;
}

static bool StringBuilder_Append__String__Int32__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 3) 
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Int32 arg1 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg2 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0, arg1, arg2));
    }

    return true;
}

static bool StringBuilder_Append__Char__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Char arg0 = (System.Char)JSApi.getChar((int)JSApi.GetType.Arg);
        System.Int32 arg1 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Append__Int64(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Int64 arg0 = (System.Int64)JSApi.getInt64((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__Object(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Object arg0 = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__Double(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Double arg0 = (System.Double)JSApi.getDouble((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__Int16(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Int16 arg0 = (System.Int16)JSApi.getInt16((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__SByte(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.SByte arg0 = (System.SByte)JSApi.getSByte((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__UInt64(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.UInt64 arg0 = (System.UInt64)JSApi.getUInt64((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__Char(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Char arg0 = (System.Char)JSApi.getChar((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__UInt32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.UInt32 arg0 = (System.UInt32)JSApi.getUInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__Single(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__UInt16(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.UInt16 arg0 = (System.UInt16)JSApi.getUInt16((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__String(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__Char_Array(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Char[] arg0 = JSDataExchangeMgr.GetJSArg<System.Char[]>(() =>
    {
    int jsObjID = JSApi.getObject((int)JSApi.GetType.Arg);
    int length = JSApi.getArrayLength(jsObjID);
    var ret = new System.Char[length];
    for (var i = 0; i < length; i++) {
        JSApi.getElement(jsObjID, i);
        ret[i] = (System.Char)JSApi.getChar((int)JSApi.GetType.SaveAndRemove);
    }
    return ret;
})
;
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__Boolean(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Boolean arg0 = (System.Boolean)JSApi.getBooleanS((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__Decimal(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Decimal arg0 = (System.Decimal)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_Append__Byte(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Byte arg0 = (System.Byte)JSApi.getByte((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Append(arg0));
    }

    return true;
}

static bool StringBuilder_AppendFormat__String__Object__Object__Object(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 4) 
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Object arg1 = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.Arg);
        System.Object arg2 = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.Arg);
        System.Object arg3 = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).AppendFormat(arg0, arg1, arg2, arg3));
    }

    return true;
}

static bool StringBuilder_AppendFormat__IFormatProvider__String__Object_Array(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 3) 
    {
        System.IFormatProvider arg0 = (System.IFormatProvider)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        System.String arg1 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Object[] arg2 = JSDataExchangeMgr.GetJSArg<System.Object[]>(() =>
    {
    int jsObjID = JSApi.getObject((int)JSApi.GetType.Arg);
    int length = JSApi.getArrayLength(jsObjID);
    var ret = new System.Object[length];
    for (var i = 0; i < length; i++) {
        JSApi.getElement(jsObjID, i);
        ret[i] = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.SaveAndRemove);
    }
    return ret;
})
;
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).AppendFormat(arg0, arg1, arg2));
    }

    return true;
}

static bool StringBuilder_AppendFormat__String__Object__Object(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 3) 
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Object arg1 = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.Arg);
        System.Object arg2 = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).AppendFormat(arg0, arg1, arg2));
    }

    return true;
}

static bool StringBuilder_AppendFormat__String__Object(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Object arg1 = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).AppendFormat(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_AppendFormat__String__Object_Array(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Object[] arg1 = JSDataExchangeMgr.GetJSArg<System.Object[]>(() =>
    {
    int jsObjID = JSApi.getObject((int)JSApi.GetType.Arg);
    int length = JSApi.getArrayLength(jsObjID);
    var ret = new System.Object[length];
    for (var i = 0; i < length; i++) {
        JSApi.getElement(jsObjID, i);
        ret[i] = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.SaveAndRemove);
    }
    return ret;
})
;
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).AppendFormat(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_AppendLine__String(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).AppendLine(arg0));
    }

    return true;
}

static bool StringBuilder_AppendLine(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 0) 
    {
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).AppendLine());
    }

    return true;
}

static bool StringBuilder_CopyTo__Int32__Char_Array__Int32__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 4) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Char[] arg1 = JSDataExchangeMgr.GetJSArg<System.Char[]>(() =>
    {
    int jsObjID = JSApi.getObject((int)JSApi.GetType.Arg);
    int length = JSApi.getArrayLength(jsObjID);
    var ret = new System.Char[length];
    for (var i = 0; i < length; i++) {
        JSApi.getElement(jsObjID, i);
        ret[i] = (System.Char)JSApi.getChar((int)JSApi.GetType.SaveAndRemove);
    }
    return ret;
})
;
        System.Int32 arg2 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg3 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        ((System.Text.StringBuilder)vc.csObj).CopyTo(arg0, arg1, arg2, arg3);
    }

    return true;
}

static bool StringBuilder_EnsureCapacity__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSApi.setInt32((int)JSApi.SetType.Rval, (System.Int32)(((System.Text.StringBuilder)vc.csObj).EnsureCapacity(arg0)));
    }

    return true;
}

static bool StringBuilder_Equals__StringBuilder(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Text.StringBuilder arg0 = (System.Text.StringBuilder)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSApi.setBooleanS((int)JSApi.SetType.Rval, (System.Boolean)(((System.Text.StringBuilder)vc.csObj).Equals(arg0)));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Char_Array__Int32__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 4) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Char[] arg1 = JSDataExchangeMgr.GetJSArg<System.Char[]>(() =>
    {
    int jsObjID = JSApi.getObject((int)JSApi.GetType.Arg);
    int length = JSApi.getArrayLength(jsObjID);
    var ret = new System.Char[length];
    for (var i = 0; i < length; i++) {
        JSApi.getElement(jsObjID, i);
        ret[i] = (System.Char)JSApi.getChar((int)JSApi.GetType.SaveAndRemove);
    }
    return ret;
})
;
        System.Int32 arg2 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg3 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1, arg2, arg3));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__String__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 3) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.String arg1 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Int32 arg2 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1, arg2));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Int64(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int64 arg1 = (System.Int64)JSApi.getInt64((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Object(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Object arg1 = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Double(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Double arg1 = (System.Double)JSApi.getDouble((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Int16(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int16 arg1 = (System.Int16)JSApi.getInt16((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg1 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__UInt16(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.UInt16 arg1 = (System.UInt16)JSApi.getUInt16((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__UInt32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.UInt32 arg1 = (System.UInt32)JSApi.getUInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Single(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Single arg1 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__SByte(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.SByte arg1 = (System.SByte)JSApi.getSByte((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__UInt64(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.UInt64 arg1 = (System.UInt64)JSApi.getUInt64((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Boolean(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Boolean arg1 = (System.Boolean)JSApi.getBooleanS((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__String(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.String arg1 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Char_Array(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Char[] arg1 = JSDataExchangeMgr.GetJSArg<System.Char[]>(() =>
    {
    int jsObjID = JSApi.getObject((int)JSApi.GetType.Arg);
    int length = JSApi.getArrayLength(jsObjID);
    var ret = new System.Char[length];
    for (var i = 0; i < length; i++) {
        JSApi.getElement(jsObjID, i);
        ret[i] = (System.Char)JSApi.getChar((int)JSApi.GetType.SaveAndRemove);
    }
    return ret;
})
;
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Decimal(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Decimal arg1 = (System.Decimal)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Char(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Char arg1 = (System.Char)JSApi.getChar((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Insert__Int32__Byte(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Byte arg1 = (System.Byte)JSApi.getByte((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Insert(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Remove__Int32__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg1 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Remove(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Replace__Char__Char__Int32__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 4) 
    {
        System.Char arg0 = (System.Char)JSApi.getChar((int)JSApi.GetType.Arg);
        System.Char arg1 = (System.Char)JSApi.getChar((int)JSApi.GetType.Arg);
        System.Int32 arg2 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg3 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Replace(arg0, arg1, arg2, arg3));
    }

    return true;
}

static bool StringBuilder_Replace__String__String__Int32__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 4) 
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.String arg1 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.Int32 arg2 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg3 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Replace(arg0, arg1, arg2, arg3));
    }

    return true;
}

static bool StringBuilder_Replace__String__String(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        System.String arg1 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Replace(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_Replace__Char__Char(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Char arg0 = (System.Char)JSApi.getChar((int)JSApi.GetType.Arg);
        System.Char arg1 = (System.Char)JSApi.getChar((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).Replace(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_ToString__Int32__Int32(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        System.Int32 arg1 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        JSApi.setStringS((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).ToString(arg0, arg1));
    }

    return true;
}

static bool StringBuilder_ToString(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 0) 
    {
        JSApi.setStringS((int)JSApi.SetType.Rval, ((System.Text.StringBuilder)vc.csObj).ToString());
    }

    return true;
}


//register

public static void __Register()
{
    JSMgr.CallbackInfo ci = new JSMgr.CallbackInfo();
    ci.type = typeof(System.Text.StringBuilder);
    ci.fields = new JSMgr.CSCallbackField[]
    {

    };
    ci.properties = new JSMgr.CSCallbackProperty[]
    {
        StringBuilder_MaxCapacity,
        StringBuilder_Capacity,
        StringBuilder_Length,
        StringBuilder_Chars_Int32,

    };
    ci.constructors = new JSMgr.MethodCallBackInfo[]
    {
        new JSMgr.MethodCallBackInfo(StringBuilder_StringBuilder1, ".ctor"),
        new JSMgr.MethodCallBackInfo(StringBuilder_StringBuilder2, ".ctor"),
        new JSMgr.MethodCallBackInfo(StringBuilder_StringBuilder3, ".ctor"),
        new JSMgr.MethodCallBackInfo(StringBuilder_StringBuilder4, ".ctor"),
        new JSMgr.MethodCallBackInfo(StringBuilder_StringBuilder5, ".ctor"),
        new JSMgr.MethodCallBackInfo(StringBuilder_StringBuilder6, ".ctor"),

    };
    ci.methods = new JSMgr.MethodCallBackInfo[]
    {
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Char_Array__Int32__Int32, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__String__Int32__Int32, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Char__Int32, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Int64, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Object, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Int32, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Double, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Int16, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__SByte, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__UInt64, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Char, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__UInt32, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Single, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__UInt16, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__String, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Char_Array, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Boolean, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Decimal, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Append__Byte, "Append"),
        new JSMgr.MethodCallBackInfo(StringBuilder_AppendFormat__String__Object__Object__Object, "AppendFormat"),
        new JSMgr.MethodCallBackInfo(StringBuilder_AppendFormat__IFormatProvider__String__Object_Array, "AppendFormat"),
        new JSMgr.MethodCallBackInfo(StringBuilder_AppendFormat__String__Object__Object, "AppendFormat"),
        new JSMgr.MethodCallBackInfo(StringBuilder_AppendFormat__String__Object, "AppendFormat"),
        new JSMgr.MethodCallBackInfo(StringBuilder_AppendFormat__String__Object_Array, "AppendFormat"),
        new JSMgr.MethodCallBackInfo(StringBuilder_AppendLine__String, "AppendLine"),
        new JSMgr.MethodCallBackInfo(StringBuilder_AppendLine, "AppendLine"),
        new JSMgr.MethodCallBackInfo(StringBuilder_CopyTo__Int32__Char_Array__Int32__Int32, "CopyTo"),
        new JSMgr.MethodCallBackInfo(StringBuilder_EnsureCapacity__Int32, "EnsureCapacity"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Equals__StringBuilder, "Equals"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Char_Array__Int32__Int32, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__String__Int32, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Int64, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Object, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Double, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Int16, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Int32, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__UInt16, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__UInt32, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Single, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__SByte, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__UInt64, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Boolean, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__String, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Char_Array, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Decimal, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Char, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Insert__Int32__Byte, "Insert"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Remove__Int32__Int32, "Remove"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Replace__Char__Char__Int32__Int32, "Replace"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Replace__String__String__Int32__Int32, "Replace"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Replace__String__String, "Replace"),
        new JSMgr.MethodCallBackInfo(StringBuilder_Replace__Char__Char, "Replace"),
        new JSMgr.MethodCallBackInfo(StringBuilder_ToString__Int32__Int32, "ToString"),
        new JSMgr.MethodCallBackInfo(StringBuilder_ToString, "ToString"),

    };
    JSMgr.allCallbackInfo.Add(ci);
}


}
