﻿using System;
using System.Reflection;
using UnityEngine;

//using UnityEditor;

public class JSBindingSettings
{
    /*
     * Formula:
     * All C# scripts - PathsNotToJavaScript + PathsToJavaScript = C# scripts to export to javascript
     * see JSAnalyzer.MakeJsTypeAttributeInSrc for more information
     */

    public static string[] PathsNotToJavaScript =
    {
        "GameResourceManager/",
        "GameResources/",
        "JSBinding/",
        "NGUI/",
        "Plugins/",
        "Preview/",
        "Pro Standard Assets/",
        "Resources/",
        "Scripts/Components/",
        "Scripts/GameFramework/",
        //"Scripts/GamePlot/",
        "Scripts/GameProtocol/",
        "Scripts/GameProtocol/ProtocolBuffer/",
        "Scripts/GameProtocol/h1-clientservice/lib/",
        "Scripts/GameProtocol/h1-clientservice/com/nucleus/h1/logic/core/modules/proto",
        "Scripts/MyGameScripts/",
        "Scripts/MyTestScripts/",
        "Scripts/ThirdParty/",
        "Standard Assets/",
        "StreamingAssets/",
        "UI/",
        "uLua/",
        "WebPlayerTemplates/"
    };

    public static string[] PathsToJavaScript =
    {
        "Scripts/MyGameScripts/GamePlot/",
        "JSBinding/Samples/",
        "JSBinding/JSImp/" // !!
    };

    /// <summary>
    ///     By default, menu
    ///     JSB | Check All Monos for all Prefabs and Scenes
    ///     JSB | Replace All Monos for all Prefabs and Scenes
    ///     handles all Prefabs and Scenes in whole project
    ///     add paths(directory or file name) to this array if you want to skip them
    /// </summary>
    public static string[] PathsNotToCheckOrReplace =
    {
        "JSBinding/",
        "JSBinding/Prefabs/_JSEngine.prefab",
        "Plugins/",
        "Resources/",
        "Src/",
        "StreamingAssets/",
        "UnityVS/",
        "DaikonForge Tween (Pro)/",
        "NGUI/"
    };

    /// <summary>
    ///     Gets the type serialized properties.
    ///     如果想要序列化某个类的Property，则得在这里配置，否则不序列化。
    /// </summary>
    /// <returns>The type serialized properties.</returns>
    public static PropertyInfo[] GetTypeSerializedProperties(Type type)
    {
        PropertyInfo[] infos = null;
        if (type == typeof (AnimationCurve))
        {
            infos = new[]
            {
                type.GetProperty("keys"),
                type.GetProperty("postWrapMode"),
                type.GetProperty("preWrapMode")
            };
        }
        else if (type == typeof (Keyframe))
        {
            infos = new[]
            {
                type.GetProperty("inTangent"),
                type.GetProperty("outTangent"),
                type.GetProperty("tangentMode"),
                type.GetProperty("time"),
                type.GetProperty("value")
            };
        }
        if (infos == null)
            infos = new PropertyInfo[0];
        return infos;
    }
}