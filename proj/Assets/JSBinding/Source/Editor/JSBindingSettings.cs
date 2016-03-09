using System;
using System.IO;
using System.Reflection;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

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

    // some public class members can be used
    // some of them are only in editor mode
    // some are because of unknown reason
    //
    // they can't be distinguished by code, but can be known by checking unity docs
    public static bool IsDiscard(Type type, MemberInfo memberInfo)
    {
        string memberName = memberInfo.Name;

        if (typeof (Delegate).IsAssignableFrom(type)
            /* && (memberInfo is MethodInfo || memberInfo is PropertyInfo || memberInfo is FieldInfo)*/)
        {
            return true;
        }

        if (memberName == "networkView" && (type == typeof (GameObject) || typeof (Component).IsAssignableFrom(type)))
        {
            return true;
        }

        if ((type == typeof (Application) && memberName == "ExternalEval") ||
            (type == typeof (Input) && memberName == "IsJoystickPreconfigured"))
        {
            return true;
        }

        //
        // Temporarily commented out
        // Uncomment them yourself!!
        //
        if ((type == typeof (Motion)) ||
            (type == typeof (AnimationClip) && memberInfo.DeclaringType == typeof (Motion)) ||
            (type == typeof (Application) && memberName == "ExternalEval") ||
            (type == typeof (Input) && memberName == "IsJoystickPreconfigured") ||
            (type == typeof (AnimatorOverrideController) && memberName == "PerformOverrideClipListCleanup") ||
            (type == typeof (Caching) && (memberName == "ResetNoBackupFlag" || memberName == "SetNoBackupFlag")) ||
            (type == typeof (Light) && (memberName == "areaSize")) ||
            (type == typeof (Security) && memberName == "GetChainOfTrustValue") ||
            (type == typeof (Texture2D) && memberName == "alphaIsTransparency") ||
            (type == typeof (WebCamTexture) && (memberName == "isReadable" || memberName == "MarkNonReadable")) ||
            (type == typeof (StreamReader) &&
             (memberName == "CreateObjRef" || memberName == "GetLifetimeService" ||
              memberName == "InitializeLifetimeService")) ||
            (type == typeof (StreamWriter) &&
             (memberName == "CreateObjRef" || memberName == "GetLifetimeService" ||
              memberName == "InitializeLifetimeService")) ||
            (type == typeof (Font) && (memberName == "textureRebuildCallback")) ||
            //(type == typeof (UIWidget) && (memberName == "showHandlesWithMoveTool" || memberName == "showHandles")) ||
            //(type == typeof (UIInput) && (memberName == "ProcessEvent")) ||
            //(type == typeof (UIDrawCall) && (memberName == "isActive")) ||
            (type == typeof (Font) && (memberName == "textureRebuildCallback")) ||
#if UNITY_4_6
            (type == typeof (PointerEventData) && memberName == "lastPress") ||
            (type == typeof (InputField) && memberName == "onValidateInput") ||
            (type == typeof (Graphic) && memberName == "OnRebuildRequested") ||
            (type == typeof (Text) && memberName == "OnRebuildRequested")
#endif
            )
        {
            return true;
        }

#if UNITY_ANDROID || UNITY_IPHONE
        if (type == typeof (WWW) && (memberName == "movie"))
            return true;
#endif
        return false;
    }

    public static bool IsSupportByDotNet2SubSet(string functionName)
    {
        if (functionName == "Directory_CreateDirectory__String__DirectorySecurity" ||
            functionName == "Directory_GetAccessControl__String__AccessControlSections" ||
            functionName == "Directory_GetAccessControl__String" ||
            functionName == "Directory_SetAccessControl__String__DirectorySecurity" ||
            functionName == "DirectoryInfo_Create__DirectorySecurity" ||
            functionName == "DirectoryInfo_CreateSubdirectory__String__DirectorySecurity" ||
            functionName == "DirectoryInfo_GetAccessControl__AccessControlSections" ||
            functionName == "DirectoryInfo_GetAccessControl" ||
            functionName == "DirectoryInfo_SetAccessControl__DirectorySecurity" ||
            functionName == "File_Create__String__Int32__FileOptions__FileSecurity" ||
            functionName == "File_Create__String__Int32__FileOptions" ||
            functionName == "File_GetAccessControl__String__AccessControlSections" ||
            functionName == "File_GetAccessControl__String" ||
            functionName == "File_SetAccessControl__String__FileSecurity")
        {
            return false;
        }
        return true;
    }

    public static bool NeedGenDefaultConstructor(Type type)
    {
        if (typeof (Delegate).IsAssignableFrom(type))
            return false;

        if (type.IsInterface)
            return false;

        // don't add default constructor
        // if it has non-public constructors
        // (also check parameter count is 0?)
        if (type.GetConstructors(BindingFlags.NonPublic | BindingFlags.Instance).Length != 0)
            return false;

        //foreach (var c in type.GetConstructors(BindingFlags.NonPublic | BindingFlags.Instance))
        //{
        //    if (c.GetParameters().Length == 0)
        //        return false;
        //}

        if (type.IsClass && (type.IsAbstract || type.IsInterface))
            return false;

        if (type.IsClass)
        {
            return type.GetConstructors().Length == 0;
        }
        foreach (var c in type.GetConstructors())
        {
            if (c.GetParameters().Length == 0)
                return false;
        }
        return true;
    }

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