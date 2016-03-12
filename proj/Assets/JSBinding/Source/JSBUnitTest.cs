using UnityEngine;
using System.Collections;

public static class GameObjectExt
{
//    [CsExportedMethod(JsCode = @"
///* static T  */
//_jstype.staticDefinition.GetMissingComponent$1 = function(T, go) { 
//    var t = go.GetComponent$1(T);
//    if (t == null){
//        t = go.AddComponent$1(T);
//    }
//    return t;
//}")]
    public static T GetMissingComponent<T>(this GameObject go) where T : Component
    {
        T t = go.GetComponent<T>();
        if (t == null)
        {
            t = go.AddComponent<T>();
        }
        return t;
    }
}

public class PerTest
{
    public event System.Action<MonoBehaviour> OnEventFinish;
    public static event System.Action OnStaticEventFinish;
    public System.Action OnDelegateFinish;
    public static System.Action OnStaticDelegateFinish;

    public static int StaticID { get; set; }
    public int ID { get; set; }

    public void AddDelegate(System.Action action)
    {
        OnDelegateFinish += action;
    }

    public void RemoveDelegate(System.Action action)
    {
        OnDelegateFinish -= action;
    }
    public void AddEvent(System.Action<MonoBehaviour> action)
    {
        OnEventFinish += action;
    }

    public void RemoveEvent(System.Action<MonoBehaviour> action)
    {
        OnEventFinish -= action;
    }
    public void SendEvent()
    {
        if (OnEventFinish != null)
            OnEventFinish(null);
    }

    public static void SendStaticEvent()
    {
        if (OnStaticEventFinish != null)
            OnStaticEventFinish();
    }

    public bool toggle;
    public PerTest()
    {
        Debug.LogError("Default Ctor");
    }
    public PerTest(int capacity)
    {
        Debug.LogError("Ctor with Capacity: "+capacity);
    }

    public PerTest(IEnumerable enumerable)
    {
        Debug.LogError("Ctor with Enumerable: " + enumerable);
    }
    public class RefObject
    {
        public string String =
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

        public int x = 1;
        public int y = 2;
    }

    public static RefObject StaticObject = new RefObject();

    public static void test123(params object[] ts)
    {
        if (ts != null && ts.Length > 0)
        {
            for (int i = 0; i < ts.Length; i++)
            {
                Debug.LogError("[" + i + "] = " + ts[i]);
            }
        }

    }

    public static void testString(params string[] ts)
    {
        if (ts != null && ts.Length > 0)
        {
            for (int i = 0; i < ts.Length; i++)
            {
                Debug.LogError("[" + i + "] = " + ts[i]);
            }
        }

    }

    public static void testRefParams(ref string a, out string b)
    {
        a = "HelloWorld";
        b = "GameOver";
    }
}


class QiucwCup<T>
{
    public void Add(int a, int b) { }
    public void Add(ref int a, ref int b) { }
    public void Add(int a, out int b) { a = 0; b = 0; }
}