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

public class UnityEngine_CapsuleColliderGenerated
{

////////////////////// CapsuleCollider ///////////////////////////////////////
// constructors

static bool CapsuleCollider_CapsuleCollider1(JSVCall vc, int argc)
{
    int _this = JSApi.getObject((int)JSApi.GetType.Arg);
    JSApi.attachFinalizerObject(_this);
    --argc;

    int len = argc;
    if (len == 0)
    {
        JSMgr.addJSCSRel(_this, new UnityEngine.CapsuleCollider());
    }

    return true;
}

// fields

// properties
static void CapsuleCollider_center(JSVCall vc)
{
    if (vc.bGet)
    { 
        UnityEngine.CapsuleCollider _this = (UnityEngine.CapsuleCollider)vc.csObj;
        var result = _this.center;
        JSApi.setVector3S((int)JSApi.SetType.Rval, result);
    }
    else
    { 
        UnityEngine.Vector3 arg0 = (UnityEngine.Vector3)JSApi.getVector3S((int)JSApi.GetType.Arg);
        UnityEngine.CapsuleCollider _this = (UnityEngine.CapsuleCollider)vc.csObj;
        _this.center = arg0;
    }
}
static void CapsuleCollider_radius(JSVCall vc)
{
    if (vc.bGet)
    { 
        UnityEngine.CapsuleCollider _this = (UnityEngine.CapsuleCollider)vc.csObj;
        var result = _this.radius;
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(result));
    }
    else
    { 
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        UnityEngine.CapsuleCollider _this = (UnityEngine.CapsuleCollider)vc.csObj;
        _this.radius = arg0;
    }
}
static void CapsuleCollider_height(JSVCall vc)
{
    if (vc.bGet)
    { 
        UnityEngine.CapsuleCollider _this = (UnityEngine.CapsuleCollider)vc.csObj;
        var result = _this.height;
        JSApi.setSingle((int)JSApi.SetType.Rval, (System.Single)(result));
    }
    else
    { 
        System.Single arg0 = (System.Single)JSApi.getSingle((int)JSApi.GetType.Arg);
        UnityEngine.CapsuleCollider _this = (UnityEngine.CapsuleCollider)vc.csObj;
        _this.height = arg0;
    }
}
static void CapsuleCollider_direction(JSVCall vc)
{
    if (vc.bGet)
    { 
        UnityEngine.CapsuleCollider _this = (UnityEngine.CapsuleCollider)vc.csObj;
        var result = _this.direction;
        JSApi.setInt32((int)JSApi.SetType.Rval, (System.Int32)(result));
    }
    else
    { 
        System.Int32 arg0 = (System.Int32)JSApi.getInt32((int)JSApi.GetType.Arg);
        UnityEngine.CapsuleCollider _this = (UnityEngine.CapsuleCollider)vc.csObj;
        _this.direction = arg0;
    }
}

// methods


//register

public static void __Register()
{
    JSMgr.CallbackInfo ci = new JSMgr.CallbackInfo();
    ci.type = typeof(UnityEngine.CapsuleCollider);
    ci.fields = new JSMgr.CSCallbackField[]
    {

    };
    ci.properties = new JSMgr.CSCallbackProperty[]
    {
        CapsuleCollider_center,
        CapsuleCollider_radius,
        CapsuleCollider_height,
        CapsuleCollider_direction,

    };
    ci.constructors = new JSMgr.MethodCallBackInfo[]
    {
        new JSMgr.MethodCallBackInfo(CapsuleCollider_CapsuleCollider1, ".ctor"),

    };
    ci.methods = new JSMgr.MethodCallBackInfo[]
    {

    };
    JSMgr.allCallbackInfo.Add(ci);
}


}
