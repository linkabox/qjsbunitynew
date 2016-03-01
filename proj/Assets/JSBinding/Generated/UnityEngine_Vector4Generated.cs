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

using jsval = JSApi.jsval;

public class UnityEngine_Vector4Generated
{

////////////////////// Vector4 ///////////////////////////////////////
// constructors
public static ConstructorID constructorID0 = new ConstructorID(null, null);

static bool Vector4_Vector41(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 0)
    {
        JSMgr.addJSCSRel(_this, new UnityEngine.Vector4());
    }

    return true;
}

static bool Vector4_Vector42(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 4)
    {
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        System.Single arg1 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        System.Single arg2 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        System.Single arg3 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        JSMgr.addJSCSRel(_this, new UnityEngine.Vector4(arg0, arg1, arg2, arg3));
    }

    return true;
}

static bool Vector4_Vector43(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 3)
    {
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        System.Single arg1 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        System.Single arg2 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        JSMgr.addJSCSRel(_this, new UnityEngine.Vector4(arg0, arg1, arg2));
    }

    return true;
}

static bool Vector4_Vector44(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 2)
    {
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        System.Single arg1 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        JSMgr.addJSCSRel(_this, new UnityEngine.Vector4(arg0, arg1));
    }

    return true;
}

// fields
static void Vector4_kEpsilon(JSVCall vc)
{
        var result = UnityEngine.Vector4.kEpsilon;
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(result));
}
static void Vector4_x(JSVCall vc)
{
    if (vc.bGet) {
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        var result = _this.x;
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(result));
    }
    else {
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        _this.x = arg0;
        JSMgr.changeJSObj(vc.jsObjID, _this);
    }
}
static void Vector4_y(JSVCall vc)
{
    if (vc.bGet) {
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        var result = _this.y;
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(result));
    }
    else {
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        _this.y = arg0;
        JSMgr.changeJSObj(vc.jsObjID, _this);
    }
}
static void Vector4_z(JSVCall vc)
{
    if (vc.bGet) {
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        var result = _this.z;
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(result));
    }
    else {
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        _this.z = arg0;
        JSMgr.changeJSObj(vc.jsObjID, _this);
    }
}
static void Vector4_w(JSVCall vc)
{
    if (vc.bGet) {
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        var result = _this.w;
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(result));
    }
    else {
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        _this.w = arg0;
        JSMgr.changeJSObj(vc.jsObjID, _this);
    }
}

// properties
static void Vector4_Item_Int32(JSVCall vc)
{
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
    if (vc.bGet)
    { 
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        var result = _this[arg0];
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(result));
    }
    else
    { 
        System.Single arg1 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        _this[arg0] = arg1;
        JSMgr.changeJSObj(vc.jsObjID, _this);
    }
}
static void Vector4_normalized(JSVCall vc)
{
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        var result = _this.normalized;
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, result);
}
static void Vector4_magnitude(JSVCall vc)
{
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        var result = _this.magnitude;
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(result));
}
static void Vector4_sqrMagnitude(JSVCall vc)
{
        UnityEngine.Vector4 _this = (UnityEngine.Vector4)vc.csObj;
        var result = _this.sqrMagnitude;
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(result));
}
static void Vector4_zero(JSVCall vc)
{
        var result = UnityEngine.Vector4.zero;
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, result);
}
static void Vector4_one(JSVCall vc)
{
        var result = UnityEngine.Vector4.one;
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, result);
}

// methods

static bool Vector4_Equals__Object(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.Object arg0 = (System.Object)JSMgr.datax.getWhatever((int)JSApi.GetType.Arg);
UnityEngine.Vector4 argThis = (UnityEngine.Vector4)vc.csObj;        JSApi.setBooleanS((int)JSApi.SetType.Rval, (System.Boolean)(argThis.Equals(arg0)));
        JSMgr.changeJSObj(vc.jsObjID, argThis);
    }

    return true;
}

static bool Vector4_GetHashCode(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 0) 
    {
UnityEngine.Vector4 argThis = (UnityEngine.Vector4)vc.csObj;        JSApi.setInt32((int)JSApi.SetType.Rval, (System.Int32)(argThis.GetHashCode()));
        JSMgr.changeJSObj(vc.jsObjID, argThis);
    }

    return true;
}

static bool Vector4_Normalize(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 0) 
    {
UnityEngine.Vector4 argThis = (UnityEngine.Vector4)vc.csObj;        argThis.Normalize();
        JSMgr.changeJSObj(vc.jsObjID, argThis);
    }

    return true;
}

static bool Vector4_Scale__Vector4(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
UnityEngine.Vector4 argThis = (UnityEngine.Vector4)vc.csObj;        argThis.Scale(arg0);
        JSMgr.changeJSObj(vc.jsObjID, argThis);
    }

    return true;
}

static bool Vector4_Set__Single__Single__Single__Single(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 4) 
    {
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        System.Single arg1 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        System.Single arg2 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        System.Single arg3 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
UnityEngine.Vector4 argThis = (UnityEngine.Vector4)vc.csObj;        argThis.Set(arg0, arg1, arg2, arg3);
        JSMgr.changeJSObj(vc.jsObjID, argThis);
    }

    return true;
}

static bool Vector4_SqrMagnitude(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 0) 
    {
UnityEngine.Vector4 argThis = (UnityEngine.Vector4)vc.csObj;        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(argThis.SqrMagnitude()));
        JSMgr.changeJSObj(vc.jsObjID, argThis);
    }

    return true;
}

static bool Vector4_ToString__String(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        System.String arg0 = (System.String)JSApi.getStringS((int)JSApi.GetType.Arg);
UnityEngine.Vector4 argThis = (UnityEngine.Vector4)vc.csObj;        JSApi.setStringS((int)JSApi.SetType.Rval, argThis.ToString(arg0));
        JSMgr.changeJSObj(vc.jsObjID, argThis);
    }

    return true;
}

static bool Vector4_ToString(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 0) 
    {
UnityEngine.Vector4 argThis = (UnityEngine.Vector4)vc.csObj;        JSApi.setStringS((int)JSApi.SetType.Rval, argThis.ToString());
        JSMgr.changeJSObj(vc.jsObjID, argThis);
    }

    return true;
}

static bool Vector4_Distance__Vector4__Vector4(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(UnityEngine.Vector4.Distance(arg0, arg1)));
    }

    return true;
}

static bool Vector4_Dot__Vector4__Vector4(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(UnityEngine.Vector4.Dot(arg0, arg1)));
    }

    return true;
}

static bool Vector4_Lerp__Vector4__Vector4__Single(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 3) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        System.Single arg2 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, UnityEngine.Vector4.Lerp(arg0, arg1, arg2));
    }

    return true;
}

static bool Vector4_Magnitude__Vector4(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(UnityEngine.Vector4.Magnitude(arg0)));
    }

    return true;
}

static bool Vector4_Max__Vector4__Vector4(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, UnityEngine.Vector4.Max(arg0, arg1));
    }

    return true;
}

static bool Vector4_Min__Vector4__Vector4(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, UnityEngine.Vector4.Min(arg0, arg1));
    }

    return true;
}

static bool Vector4_MoveTowards__Vector4__Vector4__Single(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 3) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        System.Single arg2 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, UnityEngine.Vector4.MoveTowards(arg0, arg1, arg2));
    }

    return true;
}

static bool Vector4_Normalize__Vector4(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, UnityEngine.Vector4.Normalize(arg0));
    }

    return true;
}

static bool Vector4_op_Addition__Vector4__Vector4(JSVCall vc, int argc)
{
    UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    JSMgr.datax.setObject((int)JSApi.SetType.Rval, arg0 + arg1);
    return true;
}

static bool Vector4_op_Division__Vector4__Single(JSVCall vc, int argc)
{
    UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    System.Single arg1 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
    JSMgr.datax.setObject((int)JSApi.SetType.Rval, arg0 / arg1);
    return true;
}

static bool Vector4_op_Equality__Vector4__Vector4(JSVCall vc, int argc)
{
    UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    JSApi.setBooleanS((int)JSApi.SetType.Rval, (System.Boolean)(arg0 == arg1));
    return true;
}

static bool Vector4_op_Implicit__Vector3_to_Vector4(JSVCall vc, int argc)
{
    UnityEngine.Vector3 arg0 = (UnityEngine.Vector3)JSApi.getVector3S((int)JSApi.GetType.Arg);
    JSMgr.datax.setObject((int)JSApi.SetType.Rval, (UnityEngine.Vector4)arg0);
    return true;
}

static bool Vector4_op_Implicit__Vector4_to_Vector2(JSVCall vc, int argc)
{
    UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    JSApi.setVector2S((int)JSApi.SetType.Rval, (UnityEngine.Vector2)arg0);
    return true;
}

static bool Vector4_op_Implicit__Vector2_to_Vector4(JSVCall vc, int argc)
{
    UnityEngine.Vector2 arg0 = (UnityEngine.Vector2)JSApi.getVector2S((int)JSApi.GetType.Arg);
    JSMgr.datax.setObject((int)JSApi.SetType.Rval, (UnityEngine.Vector4)arg0);
    return true;
}

static bool Vector4_op_Implicit__Vector4_to_Vector3(JSVCall vc, int argc)
{
    UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    JSApi.setVector3S((int)JSApi.SetType.Rval, (UnityEngine.Vector3)arg0);
    return true;
}

static bool Vector4_op_Inequality__Vector4__Vector4(JSVCall vc, int argc)
{
    UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    JSApi.setBooleanS((int)JSApi.SetType.Rval, (System.Boolean)(arg0 != arg1));
    return true;
}

static bool Vector4_op_Multiply__Vector4__Single(JSVCall vc, int argc)
{
    UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    System.Single arg1 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
    JSMgr.datax.setObject((int)JSApi.SetType.Rval, arg0 * arg1);
    return true;
}

static bool Vector4_op_Multiply__Single__Vector4(JSVCall vc, int argc)
{
    System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
    UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    JSMgr.datax.setObject((int)JSApi.SetType.Rval, arg0 * arg1);
    return true;
}

static bool Vector4_op_Subtraction__Vector4__Vector4(JSVCall vc, int argc)
{
    UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    JSMgr.datax.setObject((int)JSApi.SetType.Rval, arg0 - arg1);
    return true;
}

static bool Vector4_op_UnaryNegation__Vector4(JSVCall vc, int argc)
{
    UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
    JSMgr.datax.setObject((int)JSApi.SetType.Rval, -arg0);
    return true;
}

static bool Vector4_Project__Vector4__Vector4(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, UnityEngine.Vector4.Project(arg0, arg1));
    }

    return true;
}

static bool Vector4_Scale__Vector4__Vector4(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 2) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        UnityEngine.Vector4 arg1 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSMgr.datax.setObject((int)JSApi.SetType.Rval, UnityEngine.Vector4.Scale(arg0, arg1));
    }

    return true;
}

static bool Vector4_SqrMagnitude__Vector4(JSVCall vc, int argc)
{
    int len = argc;
    if (len == 1) 
    {
        UnityEngine.Vector4 arg0 = (UnityEngine.Vector4)JSMgr.datax.getObject((int)JSApi.GetType.Arg);
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(UnityEngine.Vector4.SqrMagnitude(arg0)));
    }

    return true;
}


//register

public static void __Register()
{
    JSMgr.CallbackInfo ci = new JSMgr.CallbackInfo();
    ci.type = typeof(UnityEngine.Vector4);
    ci.fields = new JSMgr.CSCallbackField[]
    {
        Vector4_kEpsilon,
        Vector4_x,
        Vector4_y,
        Vector4_z,
        Vector4_w,

    };
    ci.properties = new JSMgr.CSCallbackProperty[]
    {
        Vector4_Item_Int32,
        Vector4_normalized,
        Vector4_magnitude,
        Vector4_sqrMagnitude,
        Vector4_zero,
        Vector4_one,

    };
    ci.constructors = new JSMgr.MethodCallBackInfo[]
    {
        new JSMgr.MethodCallBackInfo(Vector4_Vector41, ".ctor"),
        new JSMgr.MethodCallBackInfo(Vector4_Vector42, ".ctor"),
        new JSMgr.MethodCallBackInfo(Vector4_Vector43, ".ctor"),
        new JSMgr.MethodCallBackInfo(Vector4_Vector44, ".ctor"),

    };
    ci.methods = new JSMgr.MethodCallBackInfo[]
    {
        new JSMgr.MethodCallBackInfo(Vector4_Equals__Object, "Equals"),
        new JSMgr.MethodCallBackInfo(Vector4_GetHashCode, "GetHashCode"),
        new JSMgr.MethodCallBackInfo(Vector4_Normalize, "Normalize"),
        new JSMgr.MethodCallBackInfo(Vector4_Scale__Vector4, "Scale"),
        new JSMgr.MethodCallBackInfo(Vector4_Set__Single__Single__Single__Single, "Set"),
        new JSMgr.MethodCallBackInfo(Vector4_SqrMagnitude, "SqrMagnitude"),
        new JSMgr.MethodCallBackInfo(Vector4_ToString__String, "ToString"),
        new JSMgr.MethodCallBackInfo(Vector4_ToString, "ToString"),
        new JSMgr.MethodCallBackInfo(Vector4_Distance__Vector4__Vector4, "Distance"),
        new JSMgr.MethodCallBackInfo(Vector4_Dot__Vector4__Vector4, "Dot"),
        new JSMgr.MethodCallBackInfo(Vector4_Lerp__Vector4__Vector4__Single, "Lerp"),
        new JSMgr.MethodCallBackInfo(Vector4_Magnitude__Vector4, "Magnitude"),
        new JSMgr.MethodCallBackInfo(Vector4_Max__Vector4__Vector4, "Max"),
        new JSMgr.MethodCallBackInfo(Vector4_Min__Vector4__Vector4, "Min"),
        new JSMgr.MethodCallBackInfo(Vector4_MoveTowards__Vector4__Vector4__Single, "MoveTowards"),
        new JSMgr.MethodCallBackInfo(Vector4_Normalize__Vector4, "Normalize"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Addition__Vector4__Vector4, "op_Addition"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Division__Vector4__Single, "op_Division"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Equality__Vector4__Vector4, "op_Equality"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Implicit__Vector3_to_Vector4, "op_Implicit"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Implicit__Vector4_to_Vector2, "op_Implicit"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Implicit__Vector2_to_Vector4, "op_Implicit"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Implicit__Vector4_to_Vector3, "op_Implicit"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Inequality__Vector4__Vector4, "op_Inequality"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Multiply__Vector4__Single, "op_Multiply"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Multiply__Single__Vector4, "op_Multiply"),
        new JSMgr.MethodCallBackInfo(Vector4_op_Subtraction__Vector4__Vector4, "op_Subtraction"),
        new JSMgr.MethodCallBackInfo(Vector4_op_UnaryNegation__Vector4, "op_UnaryNegation"),
        new JSMgr.MethodCallBackInfo(Vector4_Project__Vector4__Vector4, "Project"),
        new JSMgr.MethodCallBackInfo(Vector4_Scale__Vector4__Vector4, "Scale"),
        new JSMgr.MethodCallBackInfo(Vector4_SqrMagnitude__Vector4, "SqrMagnitude"),

    };
    JSMgr.allCallbackInfo.Add(ci);
}


}
