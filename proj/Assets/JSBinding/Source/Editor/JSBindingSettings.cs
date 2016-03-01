using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Text;
using System.Xml;
using System.Xml.XPath;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using Debug = UnityEngine.Debug;
using Object = UnityEngine.Object;
using Random = UnityEngine.Random;

//using UnityEditor;

public class JSBindingSettings
{
    public static Type[] enums =
    {
        /*
         * No need to export enum anymore
         * Enum should be 'compilied' by SharpKit only
         */
    };

    public static Dictionary<string, string> customAssembly = new Dictionary<string, string>
    {
        // add your custom assembly here
        // you can build a dll for 3rd library like ngui titled assembly name "NGUI", put it in Assets folder
        // add its name into list, slua will generate all exported interface automatically for you

        //{"TestLib","TestNameSpaceA|TestNameSpaceB"},
        //{"DOTween", "DG.Tweening"}
    };

    //
    // types to export to JavaSciprt
    // only for samples!
    //
    // below there is another classes(commented out) having almost all types in UnityEngine
    //
    public static Type[] classes =
    {
        //Custom
        typeof (PerTest),
        typeof (PerTest.RefObject),
        //Custom
        
        //mscorlib
        typeof (IEnumerator),
        typeof (ICollection),
        typeof (IDisposable),
        typeof (IConvertible),
        //typeof(List<>),
        //typeof(List<>.Enumerator),
        //typeof(Dictionary<,>),
        //typeof(Dictionary<,>.KeyCollection), 
        //typeof(Dictionary<,>.ValueCollection), 
        //typeof(Dictionary<,>.Enumerator), 
        //typeof(KeyValuePair<,>), 
        
        typeof (Stopwatch),
        typeof (StringBuilder),
        typeof (TimeSpan),
        typeof (DateTime),

        typeof (XmlNode),
        typeof (System.Runtime.Serialization.ISerializable),
        typeof (System.Runtime.InteropServices._Exception),
        typeof (System.Runtime.Serialization.ISurrogateSelector),
        typeof (IXPathNavigable),
        typeof (ICloneable),
        typeof (IEnumerable),
        typeof (XmlDocument),
        typeof (XmlNodeList),
        typeof (XmlElement),
        typeof (XmlLinkedNode),
        typeof (XmlAttributeCollection),
        typeof (XmlNamedNodeMap),
        typeof (XmlAttribute),
        //mscorlib

        //UnityEngine
        typeof (ISerializationCallbackReceiver),
        typeof (UnityException),
        typeof (ScriptableObject),
        typeof (Debug),
        typeof (Input),
        typeof (GameObject),
        typeof (Transform),
        typeof (Vector2),
        typeof (Vector3),
        typeof (Vector4),
        typeof (Quaternion),
        typeof (MonoBehaviour),
        typeof (Behaviour),
        typeof (Component),
        typeof (Object),
        typeof (YieldInstruction),
        typeof (WaitForSeconds),
        typeof (WWW), //modify by senkay at 2015-08-13
        typeof (Application),
        typeof (Time),
        typeof (Resources),
        typeof (TextAsset),
        typeof (Random),
        typeof (LayerMask),
        typeof (AudioClip),
        typeof (AudioSource),
        typeof (ParticleSystem),
        typeof (Renderer),
        typeof (ParticleSystemRenderer),
        typeof (Animator),
        typeof (Camera),
        typeof (Mathf),
        typeof (Material),
        typeof (Color),
        typeof (Color32),
        typeof (Light),
        typeof (NavMeshAgent),
        typeof (NavMeshPath),
        typeof (Bounds),
        typeof (Rect),
        typeof (RectOffset),
        typeof (Physics),
        typeof (RaycastHit),
        typeof (Rigidbody),
        typeof (Collider),
        typeof (SphereCollider),
        typeof (BoxCollider),
        typeof (CapsuleCollider),
        typeof (MeshCollider),
        typeof (LineRenderer),
        typeof (MeshRenderer),
        typeof (Screen),
        typeof (AnimatorStateInfo),
        //UnityEngine

        //UGUI
        //typeof(GUIElement),
        //typeof(GUIText),
        //typeof(GUITexture),
        //typeof(SpriteRenderer),
        //typeof(Sprite),
        //typeof(Physics2D),
        //typeof(Rigidbody2D),
        //typeof(Collision2D),
        //typeof(RaycastHit2D),
        //typeof(Collider2D),
        //typeof(BoxCollider2D),
        //typeof(CircleCollider2D),
        //typeof(PolygonCollider2D),
        //UGUI

        ////NGUI
        ////typeof(LanguageSelection),
        ////typeof(TypewriterEffect),
        //typeof (UIButton),
        //typeof (UIButtonActivate),
        //typeof (UIButtonColor),
        //typeof (UIButtonMessage),
        //typeof (UIButtonOffset),
        //typeof (UIButtonRotation),
        //typeof (UIButtonScale),
        //typeof (UICenterOnChild),
        //typeof (UICenterOnClick),
        //typeof (UIDragCamera),
        //typeof (UIDragDropContainer),
        //typeof (UIDragDropItem),
        //typeof (UIDragDropRoot),
        //typeof (UIDraggableCamera),
        //typeof (UIDragObject),
        ////typeof(UIDragResize),
        //typeof (UIDragScrollView),
        //typeof (UIEventTrigger),
        ////typeof(UIForwardEvents),
        //typeof (UIGrid),
        ////typeof(UIImageButton),
        ////typeof(UIKeyBinding),
        ////typeof(UIKeyNavigation),
        //typeof (UIPlayAnimation),
        //typeof (UIPlaySound),
        //typeof (UIPlayTween),
        //typeof (UIPopupList),
        //typeof (UIProgressBar),
        ////typeof(UISavedOption),
        //typeof (UIScrollBar),
        //typeof (UIScrollView),
        //typeof (UISlider),
        //typeof (UISoundVolume),
        //typeof (UITable),
        //typeof (UIToggle),
        ////typeof(UIToggledComponents),
        ////typeof(UIToggledObjects),
        //typeof (UIWidgetContainer),
        //typeof (UIWrapContent),
        //typeof (ActiveAnimation),
        ////typeof(AnimationOrTween<>),
        //typeof (BetterList<>),
        //typeof (BMFont),
        //typeof (BMGlyph),
        //typeof (BMSymbol),
        ////typeof(ByteReader),
        //typeof (EventDelegate),
        ////typeof(Localization),
        //typeof (NGUIDebug),
        //typeof (NGUIMath),
        //typeof (NGUIText),
        //typeof (NGUITools),
        ////typeof(PropertyBinding),
        ////typeof(PropertyReference),
        //typeof (RealTime),
        //typeof (SpringPanel),
        //typeof (UIBasicSprite),
        //typeof (UIDrawCall), //modify by senkay at 2015-08-13
        //typeof (UIEventListener),
        //typeof (UIGeometry),
        //typeof (UIRect),
        ////typeof(UISnapshotPoint),
        //typeof (UIWidget),
        ////typeof(AnimatedAlpha),
        ////typeof(AnimatedColor),
        ////typeof(AnimatedWidget),
        //typeof (SpringPosition),
        //typeof (TweenAlpha),
        //typeof (TweenColor),
        //typeof (TweenFOV),
        //typeof (TweenHeight),
        //typeof (TweenOrthoSize),
        //typeof (TweenPosition),
        //typeof (TweenRotation),
        //typeof (TweenScale),
        //typeof (TweenTransform),
        //typeof (TweenVolume),
        //typeof (TweenWidth),
        //typeof (UITweener),
        //typeof (UI2DSprite),
        //typeof (UI2DSpriteAnimation),
        //typeof (UIAnchor),
        //typeof (UIAtlas),
        //typeof (UICamera),
        //typeof (UIFont),
        //typeof (UIInput), //modify by senkay at 2015-08-13
        ////typeof(UIInputOnGUI),
        //typeof (UILabel),
        ////typeof(UILocalize),
        ////typeof(UIOrthoCamera),
        //typeof (UIPanel),
        //typeof (UIRoot),
        //typeof (UISprite),
        //typeof (UISpriteAnimation),
        //typeof (UISpriteData),
        ////typeof(UIStretch),
        //typeof (UITextList),
        //typeof (UITexture),
        ////typeof(UITooltip),
        //typeof (UIViewport),
        ////NGUI
    };

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