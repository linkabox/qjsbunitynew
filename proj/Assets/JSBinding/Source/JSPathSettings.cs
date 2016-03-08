using UnityEngine;
using System.Collections;

public class JSPathSettings
{
	// extension (including ".")
	public const string jsExtension = ".javascript";
	public const string jscExtension = ".jsc";
	// directory to save js files
	public static string jsDir = Application.streamingAssetsPath + "/JavaScript";
	public static string mergedJsDir = Application.dataPath + "/../Temp/JavaScript_js";
	public static string jscDir = Application.streamingAssetsPath + "/JavaScript_jsc";


	// directory to save generated js files (gen by JSGenerateor2)
	//public static string jsGeneratedDir{ get { return jsDir + "/Generated"; } }
	// a file to save generated js file names
	public static string jsGeneratedFiles { get { return jsDir + "/GeneratedFiles" + jsExtension; } }
	// 
    public static string csGeneratedDir = Application.dataPath + "/JSBinding/Generated";
	//public static string sharpkitGeneratedFiles = JSPathSettings.jsDir + "/SharpKitGeneratedFiles.javascript";
	public static string Mono2JsComConfig = JSPathSettings.jsDir + "/Mono2JsComConfig.json";
    //public static string sharpKitGenFileDir = "StreamingAssets/JavaScript/SharpKitGenerated/";
}
