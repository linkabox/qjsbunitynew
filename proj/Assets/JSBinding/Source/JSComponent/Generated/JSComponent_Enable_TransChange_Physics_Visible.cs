﻿//
// Automatically generated by JSComponentGenerator.
//
using UnityEngine;

public class JSComponent_Enable_TransChange_Physics_Visible : JSComponent
{
    int idOnDisable;
    int idOnEnable;
    int idOnTransformChildrenChanged;
    int idOnTransformParentChanged;
    int idOnCollisionEnter;
    int idOnCollisionExit;
    int idOnCollisionStay;
    int idOnTriggerEnter;
    int idOnTriggerExit;
    int idOnTriggerStay;
    int idOnControllerColliderHit;
    int idOnBecameInvisible;
    int idOnBecameVisible;

    protected override void initMemberFunction()
    {
        base.initMemberFunction();
        idOnDisable = JSApi.getObjFunction(jsObjID, "OnDisable");
        idOnEnable = JSApi.getObjFunction(jsObjID, "OnEnable");
        idOnTransformChildrenChanged = JSApi.getObjFunction(jsObjID, "OnTransformChildrenChanged");
        idOnTransformParentChanged = JSApi.getObjFunction(jsObjID, "OnTransformParentChanged");
        idOnCollisionEnter = JSApi.getObjFunction(jsObjID, "OnCollisionEnter");
        idOnCollisionExit = JSApi.getObjFunction(jsObjID, "OnCollisionExit");
        idOnCollisionStay = JSApi.getObjFunction(jsObjID, "OnCollisionStay");
        idOnTriggerEnter = JSApi.getObjFunction(jsObjID, "OnTriggerEnter");
        idOnTriggerExit = JSApi.getObjFunction(jsObjID, "OnTriggerExit");
        idOnTriggerStay = JSApi.getObjFunction(jsObjID, "OnTriggerStay");
        idOnControllerColliderHit = JSApi.getObjFunction(jsObjID, "OnControllerColliderHit");
        idOnBecameInvisible = JSApi.getObjFunction(jsObjID, "OnBecameInvisible");
        idOnBecameVisible = JSApi.getObjFunction(jsObjID, "OnBecameVisible");
    }

    void OnDisable()
    {
        callIfExist(idOnDisable);
    }
    void OnEnable()
    {
        callIfExist(idOnEnable);
    }
    void OnTransformChildrenChanged()
    {
        callIfExist(idOnTransformChildrenChanged);
    }
    void OnTransformParentChanged()
    {
        callIfExist(idOnTransformParentChanged);
    }
    void OnCollisionEnter(Collision collisionInfo)
    {
        callIfExist(idOnCollisionEnter, collisionInfo);
    }
    void OnCollisionExit(Collision collisionInfo)
    {
        callIfExist(idOnCollisionExit, collisionInfo);
    }
    void OnCollisionStay(Collision collisionInfo)
    {
        callIfExist(idOnCollisionStay, collisionInfo);
    }
    void OnTriggerEnter(Collider other)
    {
        callIfExist(idOnTriggerEnter, other);
    }
    void OnTriggerExit(Collider other)
    {
        callIfExist(idOnTriggerExit, other);
    }
    void OnTriggerStay(Collider other)
    {
        callIfExist(idOnTriggerStay, other);
    }
    void OnControllerColliderHit(ControllerColliderHit hit)
    {
        callIfExist(idOnControllerColliderHit, hit);
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