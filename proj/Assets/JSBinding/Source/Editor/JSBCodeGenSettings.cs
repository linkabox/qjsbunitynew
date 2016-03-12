using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Runtime.Serialization;
using System.Text;
using System.Xml;
using System.Xml.XPath;
using UnityEditorInternal;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

#region C#导出接口特殊处理
[assembly: CsExportedMethod(TargetType = typeof(GameObjectHelper), TargetMethodName = "GetOrAddComponent", JsCode = @"
/* static T  */
_jstype.staticDefinition.GetOrAddComponent$1 = function(T, go) { 
    var t = go.GetComponent$1(T);
    if (t == null){
        t = go.AddComponent$1(T);
    }
    return t;
}")]

#endregion
public static class JSBCodeGenSettings
{
    /// <summary>
    ///     导出指定Assembly内的指定命名空间下的类型，若没有指定命名空间列表则导出这个dll的所有接口
    ///     导出dll内的根命名空间用null来表示
    /// </summary>
    private static readonly Dictionary<string, List<string>> _customAssemblyConfig = new Dictionary
        <string, List<string>>
    {
        {"UnityEngine", new List<string> {"UnityEngine"}},
        //{"UnityEngine.UI", null},
        //{"DOTween", new List<string> {"DG.Tweening"}},
        {"Assembly-CSharp-firstpass", new List<string> {null, "GameResource"}}
    };

    /// <summary>
    ///     导出指定类型
    /// </summary>
    private static readonly List<Type> _customTypeConfig = new List<Type>
    {
        //Custom
        typeof(GameObjectHelper),
        typeof (PerTest),
        typeof (PerTest.RefObject),
        //Custom
        
        //mscorlib
        typeof (IEnumerator),
        typeof (ICollection),
        typeof (IDisposable),
        typeof (IConvertible),
        typeof (Stopwatch),
        typeof (StringBuilder),
        typeof (TimeSpan),
        typeof (DateTime),

        typeof (XmlNode),
        typeof (ISerializable),
        typeof (_Exception),
        typeof (ISurrogateSelector),
        typeof (IXPathNavigable),
        typeof (ICloneable),
        typeof (IEnumerable),
        typeof (XmlDocument),
        typeof (XmlNodeList),
        typeof (XmlElement),
        typeof (XmlLinkedNode),
        typeof (XmlAttributeCollection),
        typeof (XmlNamedNodeMap),
        typeof (XmlAttribute)
        //mscorlib
    };

    // if uselist return a white list, don't check noUseList(black list) again
    /// <summary>
    ///     类型白名单，在白名单内的类型一定会导出，忽略所有过滤条件
    /// </summary>
    private static readonly HashSet<Type> _typeWhiteSet = new HashSet<Type>();

    /// <summary>
    ///     类型黑名单，忽略导出一下类型
    /// </summary>
    private static readonly List<string> _typeBlackSet = new List<string>
    {
        "HideInInspector",
        "ExecuteInEditMode",
        "AddComponentMenu",
        "ContextMenu",
        "RequireComponent",
        "DisallowMultipleComponent",
        "SerializeField",
        "AssemblyIsEditorAssembly",
        "Attribute",
        "Types",
        "UnitySurrogateSelector",
        //"TrackedReference",
        "TypeInferenceRules",
        "FFTWindow",
        "RPC",
        "Network",
        "MasterServer",
        "BitStream",
        "HostData",
        "ConnectionTesterStatus",
        "GUI",
        "EventType",
        "EventModifiers",
        "FontStyle",
        "TextAlignment",
        "TextEditor",
        "TextEditorDblClickSnapping",
        "TextGenerator",
        "TextClipping",
        "Gizmos",
        "ADBannerView",
        "ADInterstitialAd",
        "Android",
        "Tizen",
        "jvalue",
        "iPhone",
        "iOS",
        "CalendarIdentifier",
        "CalendarUnit",
        "CalendarUnit",
        "ClusterInput",
        "FullScreenMovieControlMode",
        "FullScreenMovieScalingMode",
        "Handheld",
        "LocalNotification",
        "NotificationServices",
        "RemoteNotificationType",
        "RemoteNotification",
        "SamsungTV",
        "TextureCompressionQuality",
        "TouchScreenKeyboardType",
        "TouchScreenKeyboard",
        "MovieTexture",
        "UnityEngineInternal",
        "Terrain",
        "Tree",
        "SplatPrototype",
        "DetailPrototype",
        "DetailRenderMode",
        "MeshSubsetCombineUtility",
        "AOT",
        "Social",
        "SendMouseEvents",
        "Cursor",
        "Flash",
        "ActionScript",
        "OnRequestRebuild",
        "Ping",
        "ShaderVariantCollection",
        "SimpleJson.Reflection",
        "CoroutineTween",
        "GraphicRebuildTracker",
        "Advertisements",
        "UnityEditor",
        "WSA",
        "EventProvider",
        "Apple",
        "ClusterInput"
    };

    /// <summary>
    ///     过滤指定类型的成员信息，大多数是移动平台不支持的接口
    /// </summary>
    private static readonly Dictionary<Type, HashSet<string>> _typeMemberFilterConfig = new Dictionary
        <Type, HashSet<string>>
    {
        {typeof (StreamReader), new HashSet<string> {"CreateObjRef", "GetLifetimeService", "InitializeLifetimeService"}},
        {typeof (StreamWriter), new HashSet<string> {"CreateObjRef", "GetLifetimeService", "InitializeLifetimeService"}},
        {typeof (WWW), new HashSet<string> {"movie"}},
        {
            typeof (AnimationClip),
            new HashSet<string>
            {
                "averageDuration",
                "averageAngularSpeed",
                "averageSpeed",
                "apparentSpeed",
                "isLooping",
                "isAnimatorMotion",
                "isHumanMotion"
            }
        },
        {typeof (AnimatorOverrideController), new HashSet<string> {"PerformOverrideClipListCleanup"}},
        {typeof (Caching), new HashSet<string> {"SetNoBackupFlag", "ResetNoBackupFlag"}},
        {typeof (Light), new HashSet<string> {"areaSize"}},
        {typeof (Security), new HashSet<string> {"GetChainOfTrustValue"}},
        {typeof (Texture2D), new HashSet<string> {"alphaIsTransparency"}},
        {typeof (WebCamTexture), new HashSet<string> {"MarkNonReadable", "isReadable"}},
        {typeof (Application), new HashSet<string> {"ExternalEval"}},
        {typeof (GameObject), new HashSet<string> {"networkView"}},
        {typeof (Component), new HashSet<string> {"networkView"}},
        // unity5
        {typeof (AnimatorControllerParameter), new HashSet<string> {"name"}},
        {typeof (Resources), new HashSet<string> {"LoadAssetAtPath"}},
        {typeof (Input), new HashSet<string> {"IsJoystickPreconfigured"}},
#if UNITY_4_6
        {typeof (PointerEventData), new HashSet<string> {"lastPress"}},
        {typeof (InputField), new HashSet<string> {"onValidateInput"}},
        {typeof (Graphic), new HashSet<string> {"OnRebuildRequested"}},
        {typeof (Text), new HashSet<string> {"OnRebuildRequested"}},
        {
            typeof (Motion),
            new HashSet<string>
            {
                "ValidateIfRetargetable",
                "averageDuration",
                "averageAngularSpeed",
                "averageSpeed",
                "apparentSpeed",
                "isLooping",
                "isAnimatorMotion",
                "isHumanMotion"
            }
        }
#endif
    };

    public static Dictionary<Type, HashSet<string>> TypeMemberFilterConfig
    {
        get { return _typeMemberFilterConfig; }
    }

    /// <summary>
    ///     类型黑名单，忽略导出一下类型
    /// </summary>
    public static List<string> TypeBlackSet
    {
        get { return _typeBlackSet; }
    }

    /// <summary>
    ///     类型白名单，在白名单内的类型一定会导出
    /// </summary>
    public static HashSet<Type> TypeWhiteSet
    {
        get { return _typeWhiteSet; }
    }

    public static List<Type> CustomTypeConfig
    {
        get { return _customTypeConfig; }
    }

    /// <summary>
    ///     导出指定Assembly内的指定命名空间下的类型，若没有指定命名空间列表则导出这个dll的所有接口
    ///     导出dll内的根命名空间用null来表示
    /// </summary>
    public static Dictionary<string, List<string>> CustomAssemblyConfig
    {
        get { return _customAssemblyConfig; }
    }

    public static bool IsDiscardMemberInfo(Type type, MemberInfo memberInfo)
    {
        if (typeof (
            Delegate).IsAssignableFrom(type))
        {
            return true;
        }

        if (_typeMemberFilterConfig.ContainsKey(type))
        {
            var filterList = _typeMemberFilterConfig[type];
            if (filterList.Contains(memberInfo.Name))
                return true;
        }

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
}