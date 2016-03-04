﻿//
// Automatically generated by JSComponentGenerator.
//
using UnityEngine;

public class JSComponent_Update_Render : JSComponent
{
    int idUpdate;
    int idLateUpdate;
    int idOnPostRender;
    int idOnPreCull;
    int idOnPreRender;
    int idOnRenderObject;
    int idOnWillRenderObject;

    protected override void initMemberFunction()
    {
        base.initMemberFunction();
        idUpdate = JSApi.getObjFunction(jsObjID, "Update");
        idLateUpdate = JSApi.getObjFunction(jsObjID, "LateUpdate");
        idOnPostRender = JSApi.getObjFunction(jsObjID, "OnPostRender");
        idOnPreCull = JSApi.getObjFunction(jsObjID, "OnPreCull");
        idOnPreRender = JSApi.getObjFunction(jsObjID, "OnPreRender");
        idOnRenderObject = JSApi.getObjFunction(jsObjID, "OnRenderObject");
        idOnWillRenderObject = JSApi.getObjFunction(jsObjID, "OnWillRenderObject");
    }

    void Update()
    {
        callIfExist(idUpdate);
    }
    void LateUpdate()
    {
        callIfExist(idLateUpdate);
    }
    void OnPostRender()
    {
        callIfExist(idOnPostRender);
    }
    void OnPreCull()
    {
        callIfExist(idOnPreCull);
    }
    void OnPreRender()
    {
        callIfExist(idOnPreRender);
    }
    void OnRenderObject()
    {
        callIfExist(idOnRenderObject);
    }
    void OnWillRenderObject()
    {
        callIfExist(idOnWillRenderObject);
    }

}