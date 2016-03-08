﻿//
// Automatically generated by JSComponentGenerator.
//
using UnityEngine;

public class JSComponent_FUpdate_GUI_TransChange_Visible : JSComponent
{
    int idFixedUpdate;
    int idOnGUI;
    int idOnTransformChildrenChanged;
    int idOnTransformParentChanged;
    int idOnBecameInvisible;
    int idOnBecameVisible;

    protected override void initMemberFunction()
    {
        base.initMemberFunction();
        idFixedUpdate = JSApi.getObjFunction(jsObjID, "FixedUpdate");
        idOnGUI = JSApi.getObjFunction(jsObjID, "OnGUI");
        idOnTransformChildrenChanged = JSApi.getObjFunction(jsObjID, "OnTransformChildrenChanged");
        idOnTransformParentChanged = JSApi.getObjFunction(jsObjID, "OnTransformParentChanged");
        idOnBecameInvisible = JSApi.getObjFunction(jsObjID, "OnBecameInvisible");
        idOnBecameVisible = JSApi.getObjFunction(jsObjID, "OnBecameVisible");
    }

    void FixedUpdate()
    {
        callIfExist(idFixedUpdate);
    }
    void OnGUI()
    {
        callIfExist(idOnGUI);
    }
    void OnTransformChildrenChanged()
    {
        callIfExist(idOnTransformChildrenChanged);
    }
    void OnTransformParentChanged()
    {
        callIfExist(idOnTransformParentChanged);
    }
    void OnBecameInvisible()
    {
        callIfExist(idOnBecameInvisible);
    }
    void OnBecameVisible()
    {
        callIfExist(idOnBecameVisible);
    }

}