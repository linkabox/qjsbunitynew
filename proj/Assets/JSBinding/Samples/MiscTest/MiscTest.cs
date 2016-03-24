using SharpKit.JavaScript;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;


public class MiscTest : MonoBehaviour {

	// Use this for initialization
	void Start () {
//        PerTest.test123(1.5, 1.3);
        PerTest.testString(null, "abc");
		PerTest.testArray (new int[]{11,99,231});
		PerTest.testList (new List<int>{66,77,88});

		var config = Resources.Load ("shopconfig");
		Debug.LogError ("Resources.Load: "+ config);

		config = Resources.Load<TextAsset> ("shopconfig");
		Debug.LogError ("Resources.Load<T>: "+ config);

		var obj = new PerTest ();
		obj.IDs.Add (123);
		obj.IDs.Add (345);
		Debug.LogError ("======ForEach List======");
		foreach (int i in obj.IDs) {
			Debug.LogError (i);
		}
		Debug.LogError ("======For List======");
		for (int i = 0; i < obj.IDs.Count; ++i) {
			Debug.LogError (obj.IDs[i]);
		}
        //PrintStrings("a", "b", "c");
        //print(null);
	}
    void PrintStrings(string s, params string[] strs)
    {
        foreach (var v in strs)
            print(v);
    }
}
