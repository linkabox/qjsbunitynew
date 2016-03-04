﻿//
// Automatically generated by JSComponentGenerator.
//
using UnityEngine;

public class JSComponent_Update_GUI : JSComponent
{
    int idUpdate;
    int idLateUpdate;
    int idOnGUI;

    protected override void initMemberFunction()
    {
        base.initMemberFunction();
        idUpdate = JSApi.getObjFunction(jsObjID, "Update");
        idLateUpdate = JSApi.getObjFunction(jsObjID, "LateUpdate");
        idOnGUI = JSApi.getObjFunction(jsObjID, "OnGUI");
    }

    void Update()
    {
        callIfExist(idUpdate);
    }
    void LateUpdate()
    {
        callIfExist(idLateUpdate);
    }
    void OnGUI()
    {
        callIfExist(idOnGUI);
    }

}