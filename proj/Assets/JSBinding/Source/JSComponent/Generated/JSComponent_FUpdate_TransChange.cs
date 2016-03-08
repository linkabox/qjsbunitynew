﻿//
// Automatically generated by JSComponentGenerator.
//
using UnityEngine;

public class JSComponent_FUpdate_TransChange : JSComponent
{
    int idFixedUpdate;
    int idOnTransformChildrenChanged;
    int idOnTransformParentChanged;

    protected override void initMemberFunction()
    {
        base.initMemberFunction();
        idFixedUpdate = JSApi.getObjFunction(jsObjID, "FixedUpdate");
        idOnTransformChildrenChanged = JSApi.getObjFunction(jsObjID, "OnTransformChildrenChanged");
        idOnTransformParentChanged = JSApi.getObjFunction(jsObjID, "OnTransformParentChanged");
    }

    void FixedUpdate()
    {
        callIfExist(idFixedUpdate);
    }
    void OnTransformChildrenChanged()
    {
        callIfExist(idOnTransformChildrenChanged);
    }
    void OnTransformParentChanged()
    {
        callIfExist(idOnTransformParentChanged);
    }

}