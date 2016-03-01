using SharpKit.JavaScript;
using UnityEngine;
using System.Collections;

[JsType(JsMode.Clr)]
public class AwakeC : MonoBehaviour
{
    public int valueOfC = 0;
    void Awake()
    { 
        valueOfC = 8; 
    }
}
