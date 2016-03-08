using UnityEngine;
using System.Collections;

public class PerTest
{
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