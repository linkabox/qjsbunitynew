this.Enum = {};

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// PerTest
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "PerTest", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 0, 0, true, this); }
_jstype.definition.ctor$$Int32 = function(a0) { CS.Call(5, 0, 1, true, this, a0); }
_jstype.definition.ctor$$IEnumerable = function(a0) { CS.Call(5, 0, 2, true, this, a0); }

// fields

_jstype.fields.toggle =  { 
            get: function() { return CS.Call(0, 0, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 0, 0, false, this, v); } 
        };

_jstype.staticFields.StaticObject =  { 
            get: function() { return CS.Call(0, 0, 1, true); }, 
            set: function(v) { return CS.Call(1, 0, 1, true, v); } 
        };

// properties

// methods

/* static Void  */
_jstype.staticDefinition.test123 = function(a0/*Object[]*/) { 
    
    return CS.Call(4, 0, 0, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.testRefParams = function(a0/*String&*/, a1/*String&*/) { 
    
    return CS.Call(4, 0, 1, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.testString = function(a0/*String[]*/) { 
    
    return CS.Call(4, 0, 2, true, jsb_formatParamsArray(0, a0, arguments)); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// PerTest$RefObject
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "PerTest.RefObject", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 1, 0, true, this); }

// fields

_jstype.fields.String =  { 
            get: function() { return CS.Call(0, 1, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 1, 0, false, this, v); } 
        };

_jstype.fields.x =  { 
            get: function() { return CS.Call(0, 1, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 1, 1, false, this, v); } 
        };

_jstype.fields.y =  { 
            get: function() { return CS.Call(0, 1, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 1, 2, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Collections$IEnumerator
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.Collections.IEnumerator", 
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Current = function() { return CS.Call(2, 2, 0, false, this); }
_jstype.definition.set_Current = function(v) { return CS.Call(3, 2, 0, false, this, v); }

// methods

/* Boolean */
_jstype.definition.MoveNext = function() { 
    
    return CS.Call(4, 2, 0, false, this); 
}
/* Void */
_jstype.definition.Reset = function() { 
    
    return CS.Call(4, 2, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Collections$ICollection
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.Collections.ICollection", 
    interfaceNames: ["System.Collections.IEnumerable"],
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Count = function() { return CS.Call(2, 3, 0, false, this); }
_jstype.definition.set_Count = function(v) { return CS.Call(3, 3, 0, false, this, v); }

_jstype.definition.get_IsSynchronized = function() { return CS.Call(2, 3, 1, false, this); }
_jstype.definition.set_IsSynchronized = function(v) { return CS.Call(3, 3, 1, false, this, v); }

_jstype.definition.get_SyncRoot = function() { return CS.Call(2, 3, 2, false, this); }
_jstype.definition.set_SyncRoot = function(v) { return CS.Call(3, 3, 2, false, this, v); }

// methods

/* Void */
_jstype.definition.CopyTo = function(a0/*Array*/, a1/*Int32*/) { 
    
    return CS.Call(4, 3, 0, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$IDisposable
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.IDisposable", 
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.Dispose = function() { 
    
    return CS.Call(4, 4, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$IConvertible
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.IConvertible", 
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* TypeCode */
_jstype.definition.GetTypeCode = function() { 
    
    return CS.Call(4, 5, 0, false, this); 
}
/* Boolean */
_jstype.definition.ToBoolean = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 1, false, this, a0); 
}
/* Byte */
_jstype.definition.ToByte = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 2, false, this, a0); 
}
/* Char */
_jstype.definition.ToChar = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 3, false, this, a0); 
}
/* DateTime */
_jstype.definition.ToDateTime = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 4, false, this, a0); 
}
/* Decimal */
_jstype.definition.ToDecimal = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 5, false, this, a0); 
}
/* Double */
_jstype.definition.ToDouble = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 6, false, this, a0); 
}
/* Int16 */
_jstype.definition.ToInt16 = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 7, false, this, a0); 
}
/* Int32 */
_jstype.definition.ToInt32 = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 8, false, this, a0); 
}
/* Int64 */
_jstype.definition.ToInt64 = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 9, false, this, a0); 
}
/* SByte */
_jstype.definition.ToSByte = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 10, false, this, a0); 
}
/* Single */
_jstype.definition.ToSingle = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 11, false, this, a0); 
}
/* String */
_jstype.definition.toString = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 12, false, this, a0); 
}
/* Object */
_jstype.definition.ToType = function(a0/*Type*/, a1/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 13, false, this, a0, a1); 
}
/* UInt16 */
_jstype.definition.ToUInt16 = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 14, false, this, a0); 
}
/* UInt32 */
_jstype.definition.ToUInt32 = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 15, false, this, a0); 
}
/* UInt64 */
_jstype.definition.ToUInt64 = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 5, 16, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Diagnostics$Stopwatch
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Diagnostics.Stopwatch", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 6, 0, true, this); }

// fields

_jstype.staticFields.Frequency =  { 
            get: function() { return CS.Call(0, 6, 0, true); }, 
            set: function(v) { return CS.Call(1, 6, 0, true, v); } 
        };

_jstype.staticFields.IsHighResolution =  { 
            get: function() { return CS.Call(0, 6, 1, true); }, 
            set: function(v) { return CS.Call(1, 6, 1, true, v); } 
        };

// properties

_jstype.definition.get_Elapsed = function() { return CS.Call(2, 6, 0, false, this); }
_jstype.definition.set_Elapsed = function(v) { return CS.Call(3, 6, 0, false, this, v); }

_jstype.definition.get_ElapsedMilliseconds = function() { return CS.Call(2, 6, 1, false, this); }
_jstype.definition.set_ElapsedMilliseconds = function(v) { return CS.Call(3, 6, 1, false, this, v); }

_jstype.definition.get_ElapsedTicks = function() { return CS.Call(2, 6, 2, false, this); }
_jstype.definition.set_ElapsedTicks = function(v) { return CS.Call(3, 6, 2, false, this, v); }

_jstype.definition.get_IsRunning = function() { return CS.Call(2, 6, 3, false, this); }
_jstype.definition.set_IsRunning = function(v) { return CS.Call(3, 6, 3, false, this, v); }

// methods

/* Void */
_jstype.definition.Reset = function() { 
    
    return CS.Call(4, 6, 0, false, this); 
}
/* Void */
_jstype.definition.Start = function() { 
    
    return CS.Call(4, 6, 1, false, this); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 6, 2, false, this); 
}
/* static Int64  */
_jstype.staticDefinition.GetTimestamp = function() { 
    
    return CS.Call(4, 6, 3, true); 
}
/* static Stopwatch  */
_jstype.staticDefinition.StartNew = function() { 
    
    return CS.Call(4, 6, 4, true); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Text$StringBuilder
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Text.StringBuilder", 
    interfaceNames: ["System.Runtime.Serialization.ISerializable"],
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$String$$Int32$$Int32$$Int32 = function(a0, a1, a2, a3) { CS.Call(5, 7, 0, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor = function() { CS.Call(5, 7, 1, true, this); }
_jstype.definition.ctor$$Int32 = function(a0) { CS.Call(5, 7, 2, true, this, a0); }
_jstype.definition.ctor$$Int32$$Int32 = function(a0, a1) { CS.Call(5, 7, 3, true, this, a0, a1); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 7, 4, true, this, a0); }
_jstype.definition.ctor$$String$$Int32 = function(a0, a1) { CS.Call(5, 7, 5, true, this, a0, a1); }

// fields

// properties

_jstype.definition.get_MaxCapacity = function() { return CS.Call(2, 7, 0, false, this); }
_jstype.definition.set_MaxCapacity = function(v) { return CS.Call(3, 7, 0, false, this, v); }

_jstype.definition.get_Capacity = function() { return CS.Call(2, 7, 1, false, this); }
_jstype.definition.set_Capacity = function(v) { return CS.Call(3, 7, 1, false, this, v); }

_jstype.definition.get_Length = function() { return CS.Call(2, 7, 2, false, this); }
_jstype.definition.set_Length = function(v) { return CS.Call(3, 7, 2, false, this, v); }

_jstype.definition.get_Chars$$Int32 = function(ind0) { return CS.Call(2, 7, 3, false, this, ind0); }
_jstype.definition.set_Chars$$Int32 = function(ind0, v) { return CS.Call(3, 7, 3, false, this, ind0, v); }

// methods

/* StringBuilder */
_jstype.definition.Append$$Char$Array$$Int32$$Int32 = function(a0/*Char[]*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 7, 0, false, this, a0, a1, a2); 
}
/* StringBuilder */
_jstype.definition.Append$$String$$Int32$$Int32 = function(a0/*String*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 7, 1, false, this, a0, a1, a2); 
}
/* StringBuilder */
_jstype.definition.Append$$Char$$Int32 = function(a0/*Char*/, a1/*Int32*/) { 
    
    return CS.Call(4, 7, 2, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Append$$Int64 = function(a0/*Int64*/) { 
    
    return CS.Call(4, 7, 3, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 7, 4, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 7, 5, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Double = function(a0/*Double*/) { 
    
    return CS.Call(4, 7, 6, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Int16 = function(a0/*Int16*/) { 
    
    return CS.Call(4, 7, 7, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$SByte = function(a0/*SByte*/) { 
    
    return CS.Call(4, 7, 8, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$UInt64 = function(a0/*UInt64*/) { 
    
    return CS.Call(4, 7, 9, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Char = function(a0/*Char*/) { 
    
    return CS.Call(4, 7, 10, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$UInt32 = function(a0/*UInt32*/) { 
    
    return CS.Call(4, 7, 11, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 7, 12, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$UInt16 = function(a0/*UInt16*/) { 
    
    return CS.Call(4, 7, 13, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 7, 14, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Char$Array = function(a0/*Char[]*/) { 
    
    return CS.Call(4, 7, 15, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 7, 16, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Decimal = function(a0/*Decimal*/) { 
    
    return CS.Call(4, 7, 17, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Byte = function(a0/*Byte*/) { 
    
    return CS.Call(4, 7, 18, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.AppendFormat$$String$$Object$$Object$$Object = function(a0/*String*/, a1/*Object*/, a2/*Object*/, a3/*Object*/) { 
    
    return CS.Call(4, 7, 19, false, this, a0, a1, a2, a3); 
}
/* StringBuilder */
_jstype.definition.AppendFormat$$IFormatProvider$$String$$Object$Array = function(a0/*IFormatProvider*/, a1/*String*/, a2/*Object[]*/) { 
    
    return CS.Call(4, 7, 20, false, this, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* StringBuilder */
_jstype.definition.AppendFormat$$String$$Object$$Object = function(a0/*String*/, a1/*Object*/, a2/*Object*/) { 
    
    return CS.Call(4, 7, 21, false, this, a0, a1, a2); 
}
/* StringBuilder */
_jstype.definition.AppendFormat$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 7, 22, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.AppendFormat$$String$$Object$Array = function(a0/*String*/, a1/*Object[]*/) { 
    
    return CS.Call(4, 7, 23, false, this, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* StringBuilder */
_jstype.definition.AppendLine$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 7, 24, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.AppendLine = function() { 
    
    return CS.Call(4, 7, 25, false, this); 
}
/* Void */
_jstype.definition.CopyTo = function(a0/*Int32*/, a1/*Char[]*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 7, 26, false, this, a0, a1, a2, a3); 
}
/* Int32 */
_jstype.definition.EnsureCapacity = function(a0/*Int32*/) { 
    
    return CS.Call(4, 7, 27, false, this, a0); 
}
/* Boolean */
_jstype.definition.Equals$$StringBuilder = function(a0/*StringBuilder*/) { 
    
    return CS.Call(4, 7, 28, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Char$Array$$Int32$$Int32 = function(a0/*Int32*/, a1/*Char[]*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 7, 29, false, this, a0, a1, a2, a3); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$String$$Int32 = function(a0/*Int32*/, a1/*String*/, a2/*Int32*/) { 
    
    return CS.Call(4, 7, 30, false, this, a0, a1, a2); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Int64 = function(a0/*Int32*/, a1/*Int64*/) { 
    
    return CS.Call(4, 7, 31, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Object = function(a0/*Int32*/, a1/*Object*/) { 
    
    return CS.Call(4, 7, 32, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Double = function(a0/*Int32*/, a1/*Double*/) { 
    
    return CS.Call(4, 7, 33, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Int16 = function(a0/*Int32*/, a1/*Int16*/) { 
    
    return CS.Call(4, 7, 34, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 7, 35, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$UInt16 = function(a0/*Int32*/, a1/*UInt16*/) { 
    
    return CS.Call(4, 7, 36, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$UInt32 = function(a0/*Int32*/, a1/*UInt32*/) { 
    
    return CS.Call(4, 7, 37, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 7, 38, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$SByte = function(a0/*Int32*/, a1/*SByte*/) { 
    
    return CS.Call(4, 7, 39, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$UInt64 = function(a0/*Int32*/, a1/*UInt64*/) { 
    
    return CS.Call(4, 7, 40, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Boolean = function(a0/*Int32*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 7, 41, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$String = function(a0/*Int32*/, a1/*String*/) { 
    
    return CS.Call(4, 7, 42, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Char$Array = function(a0/*Int32*/, a1/*Char[]*/) { 
    
    return CS.Call(4, 7, 43, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Decimal = function(a0/*Int32*/, a1/*Decimal*/) { 
    
    return CS.Call(4, 7, 44, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Char = function(a0/*Int32*/, a1/*Char*/) { 
    
    return CS.Call(4, 7, 45, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Byte = function(a0/*Int32*/, a1/*Byte*/) { 
    
    return CS.Call(4, 7, 46, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Remove = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 7, 47, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Replace$$Char$$Char$$Int32$$Int32 = function(a0/*Char*/, a1/*Char*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 7, 48, false, this, a0, a1, a2, a3); 
}
/* StringBuilder */
_jstype.definition.Replace$$String$$String$$Int32$$Int32 = function(a0/*String*/, a1/*String*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 7, 49, false, this, a0, a1, a2, a3); 
}
/* StringBuilder */
_jstype.definition.Replace$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 7, 50, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Replace$$Char$$Char = function(a0/*Char*/, a1/*Char*/) { 
    
    return CS.Call(4, 7, 51, false, this, a0, a1); 
}
/* String */
_jstype.definition.toString$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 7, 52, false, this, a0, a1); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 7, 53, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$TimeSpan
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "System.TimeSpan", 
    interfaceNames: ["System.IComparable", "System.IComparable$1", "System.IEquatable$1"],
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 8, 0, true, this); }
_jstype.definition.ctor$$Int64 = function(a0) { CS.Call(5, 8, 1, true, this, a0); }
_jstype.definition.ctor$$Int32$$Int32$$Int32 = function(a0, a1, a2) { CS.Call(5, 8, 2, true, this, a0, a1, a2); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32 = function(a0, a1, a2, a3) { CS.Call(5, 8, 3, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32$$Int32 = function(a0, a1, a2, a3, a4) { CS.Call(5, 8, 4, true, this, a0, a1, a2, a3, a4); }

// fields

_jstype.staticFields.TicksPerDay =  { 
            get: function() { return CS.Call(0, 8, 0, true); }, 
            set: function(v) { return CS.Call(1, 8, 0, true, v); } 
        };

_jstype.staticFields.TicksPerHour =  { 
            get: function() { return CS.Call(0, 8, 1, true); }, 
            set: function(v) { return CS.Call(1, 8, 1, true, v); } 
        };

_jstype.staticFields.TicksPerMillisecond =  { 
            get: function() { return CS.Call(0, 8, 2, true); }, 
            set: function(v) { return CS.Call(1, 8, 2, true, v); } 
        };

_jstype.staticFields.TicksPerMinute =  { 
            get: function() { return CS.Call(0, 8, 3, true); }, 
            set: function(v) { return CS.Call(1, 8, 3, true, v); } 
        };

_jstype.staticFields.TicksPerSecond =  { 
            get: function() { return CS.Call(0, 8, 4, true); }, 
            set: function(v) { return CS.Call(1, 8, 4, true, v); } 
        };

_jstype.staticFields.MaxValue =  { 
            get: function() { return CS.Call(0, 8, 5, true); }, 
            set: function(v) { return CS.Call(1, 8, 5, true, v); } 
        };

_jstype.staticFields.MinValue =  { 
            get: function() { return CS.Call(0, 8, 6, true); }, 
            set: function(v) { return CS.Call(1, 8, 6, true, v); } 
        };

_jstype.staticFields.Zero =  { 
            get: function() { return CS.Call(0, 8, 7, true); }, 
            set: function(v) { return CS.Call(1, 8, 7, true, v); } 
        };

// properties

_jstype.definition.get_Days = function() { return CS.Call(2, 8, 0, false, this); }
_jstype.definition.set_Days = function(v) { return CS.Call(3, 8, 0, false, this, v); }

_jstype.definition.get_Hours = function() { return CS.Call(2, 8, 1, false, this); }
_jstype.definition.set_Hours = function(v) { return CS.Call(3, 8, 1, false, this, v); }

_jstype.definition.get_Milliseconds = function() { return CS.Call(2, 8, 2, false, this); }
_jstype.definition.set_Milliseconds = function(v) { return CS.Call(3, 8, 2, false, this, v); }

_jstype.definition.get_Minutes = function() { return CS.Call(2, 8, 3, false, this); }
_jstype.definition.set_Minutes = function(v) { return CS.Call(3, 8, 3, false, this, v); }

_jstype.definition.get_Seconds = function() { return CS.Call(2, 8, 4, false, this); }
_jstype.definition.set_Seconds = function(v) { return CS.Call(3, 8, 4, false, this, v); }

_jstype.definition.get_Ticks = function() { return CS.Call(2, 8, 5, false, this); }
_jstype.definition.set_Ticks = function(v) { return CS.Call(3, 8, 5, false, this, v); }

_jstype.definition.get_TotalDays = function() { return CS.Call(2, 8, 6, false, this); }
_jstype.definition.set_TotalDays = function(v) { return CS.Call(3, 8, 6, false, this, v); }

_jstype.definition.get_TotalHours = function() { return CS.Call(2, 8, 7, false, this); }
_jstype.definition.set_TotalHours = function(v) { return CS.Call(3, 8, 7, false, this, v); }

_jstype.definition.get_TotalMilliseconds = function() { return CS.Call(2, 8, 8, false, this); }
_jstype.definition.set_TotalMilliseconds = function(v) { return CS.Call(3, 8, 8, false, this, v); }

_jstype.definition.get_TotalMinutes = function() { return CS.Call(2, 8, 9, false, this); }
_jstype.definition.set_TotalMinutes = function(v) { return CS.Call(3, 8, 9, false, this, v); }

_jstype.definition.get_TotalSeconds = function() { return CS.Call(2, 8, 10, false, this); }
_jstype.definition.set_TotalSeconds = function(v) { return CS.Call(3, 8, 10, false, this, v); }

// methods

/* TimeSpan */
_jstype.definition.Add = function(a0/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.CompareTo$$TimeSpan = function(a0/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 1, false, this, a0); 
}
/* Int32 */
_jstype.definition.CompareTo$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 8, 2, false, this, a0); 
}
/* TimeSpan */
_jstype.definition.Duration = function() { 
    
    return CS.Call(4, 8, 3, false, this); 
}
/* Boolean */
_jstype.definition.Equals$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 8, 4, false, this, a0); 
}
/* Boolean */
_jstype.definition.Equals$$TimeSpan = function(a0/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 5, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 8, 6, false, this); 
}
/* TimeSpan */
_jstype.definition.Negate = function() { 
    
    return CS.Call(4, 8, 7, false, this); 
}
/* TimeSpan */
_jstype.definition.Subtract = function(a0/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 8, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 8, 9, false, this); 
}
/* static Int32  */
_jstype.staticDefinition.Compare = function(a0/*TimeSpan*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 10, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Equals$$TimeSpan$$TimeSpan = function(a0/*TimeSpan*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 11, true, a0, a1); 
}
/* static TimeSpan  */
_jstype.staticDefinition.FromDays = function(a0/*Double*/) { 
    
    return CS.Call(4, 8, 12, true, a0); 
}
/* static TimeSpan  */
_jstype.staticDefinition.FromHours = function(a0/*Double*/) { 
    
    return CS.Call(4, 8, 13, true, a0); 
}
/* static TimeSpan  */
_jstype.staticDefinition.FromMilliseconds = function(a0/*Double*/) { 
    
    return CS.Call(4, 8, 14, true, a0); 
}
/* static TimeSpan  */
_jstype.staticDefinition.FromMinutes = function(a0/*Double*/) { 
    
    return CS.Call(4, 8, 15, true, a0); 
}
/* static TimeSpan  */
_jstype.staticDefinition.FromSeconds = function(a0/*Double*/) { 
    
    return CS.Call(4, 8, 16, true, a0); 
}
/* static TimeSpan  */
_jstype.staticDefinition.FromTicks = function(a0/*Int64*/) { 
    
    return CS.Call(4, 8, 17, true, a0); 
}
/* static TimeSpan  */
_jstype.staticDefinition.op_Addition = function(a0/*TimeSpan*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 18, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*TimeSpan*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 19, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_GreaterThan = function(a0/*TimeSpan*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 20, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_GreaterThanOrEqual = function(a0/*TimeSpan*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 21, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*TimeSpan*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 22, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_LessThan = function(a0/*TimeSpan*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 23, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_LessThanOrEqual = function(a0/*TimeSpan*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 24, true, a0, a1); 
}
/* static TimeSpan  */
_jstype.staticDefinition.op_Subtraction = function(a0/*TimeSpan*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 25, true, a0, a1); 
}
/* static TimeSpan  */
_jstype.staticDefinition.op_UnaryNegation = function(a0/*TimeSpan*/) { 
    
    return CS.Call(4, 8, 26, true, a0); 
}
/* static TimeSpan  */
_jstype.staticDefinition.Parse = function(a0/*String*/) { 
    
    return CS.Call(4, 8, 27, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.TryParse = function(a0/*String*/, a1/*TimeSpan&*/) { 
    
    return CS.Call(4, 8, 28, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$DateTime
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "System.DateTime", 
    interfaceNames: ["System.IFormattable", "System.IConvertible", "System.IComparable", "System.IComparable$1", "System.IEquatable$1"],
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$Int64 = function(a0) { CS.Call(5, 9, 0, true, this, a0); }
_jstype.definition.ctor$$Int32$$Int32$$Int32 = function(a0, a1, a2) { CS.Call(5, 9, 1, true, this, a0, a1, a2); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32 = function(a0, a1, a2, a3, a4, a5) { CS.Call(5, 9, 2, true, this, a0, a1, a2, a3, a4, a5); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32 = function(a0, a1, a2, a3, a4, a5, a6) { CS.Call(5, 9, 3, true, this, a0, a1, a2, a3, a4, a5, a6); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Calendar = function(a0, a1, a2, a3) { CS.Call(5, 9, 4, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32$$Calendar = function(a0, a1, a2, a3, a4, a5, a6) { CS.Call(5, 9, 5, true, this, a0, a1, a2, a3, a4, a5, a6); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32$$Calendar = function(a0, a1, a2, a3, a4, a5, a6, a7) { CS.Call(5, 9, 6, true, this, a0, a1, a2, a3, a4, a5, a6, a7); }
_jstype.definition.ctor$$Int64$$DateTimeKind = function(a0, a1) { CS.Call(5, 9, 7, true, this, a0, a1); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32$$DateTimeKind = function(a0, a1, a2, a3, a4, a5, a6) { CS.Call(5, 9, 8, true, this, a0, a1, a2, a3, a4, a5, a6); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32$$DateTimeKind = function(a0, a1, a2, a3, a4, a5, a6, a7) { CS.Call(5, 9, 9, true, this, a0, a1, a2, a3, a4, a5, a6, a7); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32$$Int32$$Calendar$$DateTimeKind = function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { CS.Call(5, 9, 10, true, this, a0, a1, a2, a3, a4, a5, a6, a7, a8); }

// fields

_jstype.staticFields.MaxValue =  { 
            get: function() { return CS.Call(0, 9, 0, true); }, 
            set: function(v) { return CS.Call(1, 9, 0, true, v); } 
        };

_jstype.staticFields.MinValue =  { 
            get: function() { return CS.Call(0, 9, 1, true); }, 
            set: function(v) { return CS.Call(1, 9, 1, true, v); } 
        };

// properties

_jstype.definition.get_Date = function() { return CS.Call(2, 9, 0, false, this); }
_jstype.definition.set_Date = function(v) { return CS.Call(3, 9, 0, false, this, v); }

_jstype.definition.get_Month = function() { return CS.Call(2, 9, 1, false, this); }
_jstype.definition.set_Month = function(v) { return CS.Call(3, 9, 1, false, this, v); }

_jstype.definition.get_Day = function() { return CS.Call(2, 9, 2, false, this); }
_jstype.definition.set_Day = function(v) { return CS.Call(3, 9, 2, false, this, v); }

_jstype.definition.get_DayOfWeek = function() { return CS.Call(2, 9, 3, false, this); }
_jstype.definition.set_DayOfWeek = function(v) { return CS.Call(3, 9, 3, false, this, v); }

_jstype.definition.get_DayOfYear = function() { return CS.Call(2, 9, 4, false, this); }
_jstype.definition.set_DayOfYear = function(v) { return CS.Call(3, 9, 4, false, this, v); }

_jstype.definition.get_TimeOfDay = function() { return CS.Call(2, 9, 5, false, this); }
_jstype.definition.set_TimeOfDay = function(v) { return CS.Call(3, 9, 5, false, this, v); }

_jstype.definition.get_Hour = function() { return CS.Call(2, 9, 6, false, this); }
_jstype.definition.set_Hour = function(v) { return CS.Call(3, 9, 6, false, this, v); }

_jstype.definition.get_Minute = function() { return CS.Call(2, 9, 7, false, this); }
_jstype.definition.set_Minute = function(v) { return CS.Call(3, 9, 7, false, this, v); }

_jstype.definition.get_Second = function() { return CS.Call(2, 9, 8, false, this); }
_jstype.definition.set_Second = function(v) { return CS.Call(3, 9, 8, false, this, v); }

_jstype.definition.get_Millisecond = function() { return CS.Call(2, 9, 9, false, this); }
_jstype.definition.set_Millisecond = function(v) { return CS.Call(3, 9, 9, false, this, v); }

_jstype.staticDefinition.get_Now = function() { return CS.Call(2, 9, 10, true); }
_jstype.staticDefinition.set_Now = function(v) { return CS.Call(3, 9, 10, true, v); }

_jstype.definition.get_Ticks = function() { return CS.Call(2, 9, 11, false, this); }
_jstype.definition.set_Ticks = function(v) { return CS.Call(3, 9, 11, false, this, v); }

_jstype.staticDefinition.get_Today = function() { return CS.Call(2, 9, 12, true); }
_jstype.staticDefinition.set_Today = function(v) { return CS.Call(3, 9, 12, true, v); }

_jstype.staticDefinition.get_UtcNow = function() { return CS.Call(2, 9, 13, true); }
_jstype.staticDefinition.set_UtcNow = function(v) { return CS.Call(3, 9, 13, true, v); }

_jstype.definition.get_Year = function() { return CS.Call(2, 9, 14, false, this); }
_jstype.definition.set_Year = function(v) { return CS.Call(3, 9, 14, false, this, v); }

_jstype.definition.get_Kind = function() { return CS.Call(2, 9, 15, false, this); }
_jstype.definition.set_Kind = function(v) { return CS.Call(3, 9, 15, false, this, v); }

// methods

/* DateTime */
_jstype.definition.Add = function(a0/*TimeSpan*/) { 
    
    return CS.Call(4, 9, 0, false, this, a0); 
}
/* DateTime */
_jstype.definition.AddDays = function(a0/*Double*/) { 
    
    return CS.Call(4, 9, 1, false, this, a0); 
}
/* DateTime */
_jstype.definition.AddHours = function(a0/*Double*/) { 
    
    return CS.Call(4, 9, 2, false, this, a0); 
}
/* DateTime */
_jstype.definition.AddMilliseconds = function(a0/*Double*/) { 
    
    return CS.Call(4, 9, 3, false, this, a0); 
}
/* DateTime */
_jstype.definition.AddMinutes = function(a0/*Double*/) { 
    
    return CS.Call(4, 9, 4, false, this, a0); 
}
/* DateTime */
_jstype.definition.AddMonths = function(a0/*Int32*/) { 
    
    return CS.Call(4, 9, 5, false, this, a0); 
}
/* DateTime */
_jstype.definition.AddSeconds = function(a0/*Double*/) { 
    
    return CS.Call(4, 9, 6, false, this, a0); 
}
/* DateTime */
_jstype.definition.AddTicks = function(a0/*Int64*/) { 
    
    return CS.Call(4, 9, 7, false, this, a0); 
}
/* DateTime */
_jstype.definition.AddYears = function(a0/*Int32*/) { 
    
    return CS.Call(4, 9, 8, false, this, a0); 
}
/* Int32 */
_jstype.definition.CompareTo$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 9, 9, false, this, a0); 
}
/* Int32 */
_jstype.definition.CompareTo$$DateTime = function(a0/*DateTime*/) { 
    
    return CS.Call(4, 9, 10, false, this, a0); 
}
/* Boolean */
_jstype.definition.Equals$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 9, 11, false, this, a0); 
}
/* Boolean */
_jstype.definition.Equals$$DateTime = function(a0/*DateTime*/) { 
    
    return CS.Call(4, 9, 12, false, this, a0); 
}
/* String[] */
_jstype.definition.GetDateTimeFormats$$Char$$IFormatProvider = function(a0/*Char*/, a1/*IFormatProvider*/) { 
    
    return CS.Call(4, 9, 13, false, this, a0, a1); 
}
/* String[] */
_jstype.definition.GetDateTimeFormats$$IFormatProvider = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 9, 14, false, this, a0); 
}
/* String[] */
_jstype.definition.GetDateTimeFormats$$Char = function(a0/*Char*/) { 
    
    return CS.Call(4, 9, 15, false, this, a0); 
}
/* String[] */
_jstype.definition.GetDateTimeFormats = function() { 
    
    return CS.Call(4, 9, 16, false, this); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 9, 17, false, this); 
}
/* TypeCode */
_jstype.definition.GetTypeCode = function() { 
    
    return CS.Call(4, 9, 18, false, this); 
}
/* Boolean */
_jstype.definition.IsDaylightSavingTime = function() { 
    
    return CS.Call(4, 9, 19, false, this); 
}
/* TimeSpan */
_jstype.definition.Subtract$$DateTime = function(a0/*DateTime*/) { 
    
    return CS.Call(4, 9, 20, false, this, a0); 
}
/* DateTime */
_jstype.definition.Subtract$$TimeSpan = function(a0/*TimeSpan*/) { 
    
    return CS.Call(4, 9, 21, false, this, a0); 
}
/* Int64 */
_jstype.definition.ToBinary = function() { 
    
    return CS.Call(4, 9, 22, false, this); 
}
/* Int64 */
_jstype.definition.ToFileTime = function() { 
    
    return CS.Call(4, 9, 23, false, this); 
}
/* Int64 */
_jstype.definition.ToFileTimeUtc = function() { 
    
    return CS.Call(4, 9, 24, false, this); 
}
/* DateTime */
_jstype.definition.ToLocalTime = function() { 
    
    return CS.Call(4, 9, 25, false, this); 
}
/* String */
_jstype.definition.ToLongDateString = function() { 
    
    return CS.Call(4, 9, 26, false, this); 
}
/* String */
_jstype.definition.ToLongTimeString = function() { 
    
    return CS.Call(4, 9, 27, false, this); 
}
/* Double */
_jstype.definition.ToOADate = function() { 
    
    return CS.Call(4, 9, 28, false, this); 
}
/* String */
_jstype.definition.ToShortDateString = function() { 
    
    return CS.Call(4, 9, 29, false, this); 
}
/* String */
_jstype.definition.ToShortTimeString = function() { 
    
    return CS.Call(4, 9, 30, false, this); 
}
/* String */
_jstype.definition.toString$$String$$IFormatProvider = function(a0/*String*/, a1/*IFormatProvider*/) { 
    
    return CS.Call(4, 9, 31, false, this, a0, a1); 
}
/* String */
_jstype.definition.toString$$IFormatProvider = function(a0/*IFormatProvider*/) { 
    
    return CS.Call(4, 9, 32, false, this, a0); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 9, 33, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 9, 34, false, this); 
}
/* DateTime */
_jstype.definition.ToUniversalTime = function() { 
    
    return CS.Call(4, 9, 35, false, this); 
}
/* static Int32  */
_jstype.staticDefinition.Compare = function(a0/*DateTime*/, a1/*DateTime*/) { 
    
    return CS.Call(4, 9, 36, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.DaysInMonth = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 9, 37, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Equals$$DateTime$$DateTime = function(a0/*DateTime*/, a1/*DateTime*/) { 
    
    return CS.Call(4, 9, 38, true, a0, a1); 
}
/* static DateTime  */
_jstype.staticDefinition.FromBinary = function(a0/*Int64*/) { 
    
    return CS.Call(4, 9, 39, true, a0); 
}
/* static DateTime  */
_jstype.staticDefinition.FromFileTime = function(a0/*Int64*/) { 
    
    return CS.Call(4, 9, 40, true, a0); 
}
/* static DateTime  */
_jstype.staticDefinition.FromFileTimeUtc = function(a0/*Int64*/) { 
    
    return CS.Call(4, 9, 41, true, a0); 
}
/* static DateTime  */
_jstype.staticDefinition.FromOADate = function(a0/*Double*/) { 
    
    return CS.Call(4, 9, 42, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.IsLeapYear = function(a0/*Int32*/) { 
    
    return CS.Call(4, 9, 43, true, a0); 
}
/* static DateTime  */
_jstype.staticDefinition.op_Addition = function(a0/*DateTime*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 9, 44, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*DateTime*/, a1/*DateTime*/) { 
    
    return CS.Call(4, 9, 45, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_GreaterThan = function(a0/*DateTime*/, a1/*DateTime*/) { 
    
    return CS.Call(4, 9, 46, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_GreaterThanOrEqual = function(a0/*DateTime*/, a1/*DateTime*/) { 
    
    return CS.Call(4, 9, 47, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*DateTime*/, a1/*DateTime*/) { 
    
    return CS.Call(4, 9, 48, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_LessThan = function(a0/*DateTime*/, a1/*DateTime*/) { 
    
    return CS.Call(4, 9, 49, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_LessThanOrEqual = function(a0/*DateTime*/, a1/*DateTime*/) { 
    
    return CS.Call(4, 9, 50, true, a0, a1); 
}
/* static DateTime  */
_jstype.staticDefinition.op_Subtraction$$DateTime$$TimeSpan = function(a0/*DateTime*/, a1/*TimeSpan*/) { 
    
    return CS.Call(4, 9, 51, true, a0, a1); 
}
/* static TimeSpan  */
_jstype.staticDefinition.op_Subtraction$$DateTime$$DateTime = function(a0/*DateTime*/, a1/*DateTime*/) { 
    
    return CS.Call(4, 9, 52, true, a0, a1); 
}
/* static DateTime  */
_jstype.staticDefinition.Parse$$String$$IFormatProvider$$DateTimeStyles = function(a0/*String*/, a1/*IFormatProvider*/, a2/*DateTimeStyles*/) { 
    
    return CS.Call(4, 9, 53, true, a0, a1, a2); 
}
/* static DateTime  */
_jstype.staticDefinition.Parse$$String$$IFormatProvider = function(a0/*String*/, a1/*IFormatProvider*/) { 
    
    return CS.Call(4, 9, 54, true, a0, a1); 
}
/* static DateTime  */
_jstype.staticDefinition.Parse$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 9, 55, true, a0); 
}
/* static DateTime  */
_jstype.staticDefinition.ParseExact$$String$$String$Array$$IFormatProvider$$DateTimeStyles = function(a0/*String*/, a1/*String[]*/, a2/*IFormatProvider*/, a3/*DateTimeStyles*/) { 
    
    return CS.Call(4, 9, 56, true, a0, a1, a2, a3); 
}
/* static DateTime  */
_jstype.staticDefinition.ParseExact$$String$$String$$IFormatProvider$$DateTimeStyles = function(a0/*String*/, a1/*String*/, a2/*IFormatProvider*/, a3/*DateTimeStyles*/) { 
    
    return CS.Call(4, 9, 57, true, a0, a1, a2, a3); 
}
/* static DateTime  */
_jstype.staticDefinition.ParseExact$$String$$String$$IFormatProvider = function(a0/*String*/, a1/*String*/, a2/*IFormatProvider*/) { 
    
    return CS.Call(4, 9, 58, true, a0, a1, a2); 
}
/* static DateTime  */
_jstype.staticDefinition.SpecifyKind = function(a0/*DateTime*/, a1/*DateTimeKind*/) { 
    
    return CS.Call(4, 9, 59, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.TryParse$$String$$IFormatProvider$$DateTimeStyles$$DateTime = function(a0/*String*/, a1/*IFormatProvider*/, a2/*DateTimeStyles*/, a3/*DateTime&*/) { 
    
    return CS.Call(4, 9, 60, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.TryParse$$String$$DateTime = function(a0/*String*/, a1/*DateTime&*/) { 
    
    return CS.Call(4, 9, 61, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.TryParseExact$$String$$String$Array$$IFormatProvider$$DateTimeStyles$$DateTime = function(a0/*String*/, a1/*String[]*/, a2/*IFormatProvider*/, a3/*DateTimeStyles*/, a4/*DateTime&*/) { 
    
    return CS.Call(4, 9, 62, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.TryParseExact$$String$$String$$IFormatProvider$$DateTimeStyles$$DateTime = function(a0/*String*/, a1/*String*/, a2/*IFormatProvider*/, a3/*DateTimeStyles*/, a4/*DateTime&*/) { 
    
    return CS.Call(4, 9, 63, true, a0, a1, a2, a3, a4); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlNode
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlNode", 
    interfaceNames: ["System.Collections.IEnumerable", "System.ICloneable", "System.Xml.XPath.IXPathNavigable"],
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Attributes = function() { return CS.Call(2, 10, 0, false, this); }
_jstype.definition.set_Attributes = function(v) { return CS.Call(3, 10, 0, false, this, v); }

_jstype.definition.get_BaseURI = function() { return CS.Call(2, 10, 1, false, this); }
_jstype.definition.set_BaseURI = function(v) { return CS.Call(3, 10, 1, false, this, v); }

_jstype.definition.get_ChildNodes = function() { return CS.Call(2, 10, 2, false, this); }
_jstype.definition.set_ChildNodes = function(v) { return CS.Call(3, 10, 2, false, this, v); }

_jstype.definition.get_FirstChild = function() { return CS.Call(2, 10, 3, false, this); }
_jstype.definition.set_FirstChild = function(v) { return CS.Call(3, 10, 3, false, this, v); }

_jstype.definition.get_HasChildNodes = function() { return CS.Call(2, 10, 4, false, this); }
_jstype.definition.set_HasChildNodes = function(v) { return CS.Call(3, 10, 4, false, this, v); }

_jstype.definition.get_InnerText = function() { return CS.Call(2, 10, 5, false, this); }
_jstype.definition.set_InnerText = function(v) { return CS.Call(3, 10, 5, false, this, v); }

_jstype.definition.get_InnerXml = function() { return CS.Call(2, 10, 6, false, this); }
_jstype.definition.set_InnerXml = function(v) { return CS.Call(3, 10, 6, false, this, v); }

_jstype.definition.get_IsReadOnly = function() { return CS.Call(2, 10, 7, false, this); }
_jstype.definition.set_IsReadOnly = function(v) { return CS.Call(3, 10, 7, false, this, v); }

_jstype.definition.get_Item$$String = function(ind0) { return CS.Call(2, 10, 8, false, this, ind0); }
_jstype.definition.set_Item$$String = function(ind0, v) { return CS.Call(3, 10, 8, false, this, ind0, v); }

_jstype.definition.get_Item$$String$$String = function(ind0, ind1) { return CS.Call(2, 10, 9, false, this, ind0, ind1); }
_jstype.definition.set_Item$$String$$String = function(ind0, ind1, v) { return CS.Call(3, 10, 9, false, this, ind0, ind1, v); }

_jstype.definition.get_LastChild = function() { return CS.Call(2, 10, 10, false, this); }
_jstype.definition.set_LastChild = function(v) { return CS.Call(3, 10, 10, false, this, v); }

_jstype.definition.get_LocalName = function() { return CS.Call(2, 10, 11, false, this); }
_jstype.definition.set_LocalName = function(v) { return CS.Call(3, 10, 11, false, this, v); }

_jstype.definition.get_Name = function() { return CS.Call(2, 10, 12, false, this); }
_jstype.definition.set_Name = function(v) { return CS.Call(3, 10, 12, false, this, v); }

_jstype.definition.get_NamespaceURI = function() { return CS.Call(2, 10, 13, false, this); }
_jstype.definition.set_NamespaceURI = function(v) { return CS.Call(3, 10, 13, false, this, v); }

_jstype.definition.get_NextSibling = function() { return CS.Call(2, 10, 14, false, this); }
_jstype.definition.set_NextSibling = function(v) { return CS.Call(3, 10, 14, false, this, v); }

_jstype.definition.get_NodeType = function() { return CS.Call(2, 10, 15, false, this); }
_jstype.definition.set_NodeType = function(v) { return CS.Call(3, 10, 15, false, this, v); }

_jstype.definition.get_OuterXml = function() { return CS.Call(2, 10, 16, false, this); }
_jstype.definition.set_OuterXml = function(v) { return CS.Call(3, 10, 16, false, this, v); }

_jstype.definition.get_OwnerDocument = function() { return CS.Call(2, 10, 17, false, this); }
_jstype.definition.set_OwnerDocument = function(v) { return CS.Call(3, 10, 17, false, this, v); }

_jstype.definition.get_ParentNode = function() { return CS.Call(2, 10, 18, false, this); }
_jstype.definition.set_ParentNode = function(v) { return CS.Call(3, 10, 18, false, this, v); }

_jstype.definition.get_Prefix = function() { return CS.Call(2, 10, 19, false, this); }
_jstype.definition.set_Prefix = function(v) { return CS.Call(3, 10, 19, false, this, v); }

_jstype.definition.get_PreviousSibling = function() { return CS.Call(2, 10, 20, false, this); }
_jstype.definition.set_PreviousSibling = function(v) { return CS.Call(3, 10, 20, false, this, v); }

_jstype.definition.get_Value = function() { return CS.Call(2, 10, 21, false, this); }
_jstype.definition.set_Value = function(v) { return CS.Call(3, 10, 21, false, this, v); }

_jstype.definition.get_SchemaInfo = function() { return CS.Call(2, 10, 22, false, this); }
_jstype.definition.set_SchemaInfo = function(v) { return CS.Call(3, 10, 22, false, this, v); }

// methods

/* XmlNode */
_jstype.definition.AppendChild$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 10, 0, false, this, a0); 
}
/* XmlNode */
_jstype.definition.Clone = function() { 
    
    return CS.Call(4, 10, 1, false, this); 
}
/* XmlNode */
_jstype.definition.CloneNode = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 10, 2, false, this, a0); 
}
/* XPathNavigator */
_jstype.definition.CreateNavigator = function() { 
    
    return CS.Call(4, 10, 3, false, this); 
}
/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 10, 4, false, this); 
}
/* String */
_jstype.definition.GetNamespaceOfPrefix = function(a0/*String*/) { 
    
    return CS.Call(4, 10, 5, false, this, a0); 
}
/* String */
_jstype.definition.GetPrefixOfNamespace = function(a0/*String*/) { 
    
    return CS.Call(4, 10, 6, false, this, a0); 
}
/* XmlNode */
_jstype.definition.InsertAfter = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 10, 7, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.InsertBefore$$XmlNode$$XmlNode = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 10, 8, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Normalize = function() { 
    
    return CS.Call(4, 10, 9, false, this); 
}
/* XmlNode */
_jstype.definition.PrependChild = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 10, 10, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveAll = function() { 
    
    return CS.Call(4, 10, 11, false, this); 
}
/* XmlNode */
_jstype.definition.RemoveChild$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 10, 12, false, this, a0); 
}
/* XmlNode */
_jstype.definition.ReplaceChild = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 10, 13, false, this, a0, a1); 
}
/* XmlNodeList */
_jstype.definition.SelectNodes$$String$$XmlNamespaceManager = function(a0/*String*/, a1/*XmlNamespaceManager*/) { 
    
    return CS.Call(4, 10, 14, false, this, a0, a1); 
}
/* XmlNodeList */
_jstype.definition.SelectNodes$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 10, 15, false, this, a0); 
}
/* XmlNode */
_jstype.definition.SelectSingleNode$$String$$XmlNamespaceManager = function(a0/*String*/, a1/*XmlNamespaceManager*/) { 
    
    return CS.Call(4, 10, 16, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.SelectSingleNode$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 10, 17, false, this, a0); 
}
/* Boolean */
_jstype.definition.Supports = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 10, 18, false, this, a0, a1); 
}
/* Void */
_jstype.definition.WriteContentTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 10, 19, false, this, a0); 
}
/* Void */
_jstype.definition.WriteTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 10, 20, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Runtime$Serialization$ISerializable
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.Runtime.Serialization.ISerializable", 
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.GetObjectData = function(a0/*SerializationInfo*/, a1/*StreamingContext*/) { 
    
    return CS.Call(4, 11, 0, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Runtime$InteropServices$_Exception
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.Runtime.InteropServices._Exception", 
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_HelpLink = function() { return CS.Call(2, 12, 0, false, this); }
_jstype.definition.set_HelpLink = function(v) { return CS.Call(3, 12, 0, false, this, v); }

_jstype.definition.get_InnerException = function() { return CS.Call(2, 12, 1, false, this); }
_jstype.definition.set_InnerException = function(v) { return CS.Call(3, 12, 1, false, this, v); }

_jstype.definition.get_Message = function() { return CS.Call(2, 12, 2, false, this); }
_jstype.definition.set_Message = function(v) { return CS.Call(3, 12, 2, false, this, v); }

_jstype.definition.get_Source = function() { return CS.Call(2, 12, 3, false, this); }
_jstype.definition.set_Source = function(v) { return CS.Call(3, 12, 3, false, this, v); }

_jstype.definition.get_StackTrace = function() { return CS.Call(2, 12, 4, false, this); }
_jstype.definition.set_StackTrace = function(v) { return CS.Call(3, 12, 4, false, this, v); }

_jstype.definition.get_TargetSite = function() { return CS.Call(2, 12, 5, false, this); }
_jstype.definition.set_TargetSite = function(v) { return CS.Call(3, 12, 5, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 12, 0, false, this, a0); 
}
/* Exception */
_jstype.definition.GetBaseException = function() { 
    
    return CS.Call(4, 12, 1, false, this); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 12, 2, false, this); 
}
/* Void */
_jstype.definition.GetObjectData = function(a0/*SerializationInfo*/, a1/*StreamingContext*/) { 
    
    return CS.Call(4, 12, 3, false, this, a0, a1); 
}
/* Type */
_jstype.definition.GetType = function() { 
    
    return CS.Call(4, 12, 4, false, this); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 12, 5, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Runtime$Serialization$ISurrogateSelector
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.Runtime.Serialization.ISurrogateSelector", 
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.ChainSelector = function(a0/*ISurrogateSelector*/) { 
    
    return CS.Call(4, 13, 0, false, this, a0); 
}
/* ISurrogateSelector */
_jstype.definition.GetNextSelector = function() { 
    
    return CS.Call(4, 13, 1, false, this); 
}
/* ISerializationSurrogate */
_jstype.definition.GetSurrogate = function(a0/*Type*/, a1/*StreamingContext*/, a2/*ISurrogateSelector&*/) { 
    
    return CS.Call(4, 13, 2, false, this, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XPath$IXPathNavigable
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.Xml.XPath.IXPathNavigable", 
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* XPathNavigator */
_jstype.definition.CreateNavigator = function() { 
    
    return CS.Call(4, 14, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$ICloneable
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.ICloneable", 
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Object */
_jstype.definition.Clone = function() { 
    
    return CS.Call(4, 15, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Collections$IEnumerable
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.Collections.IEnumerable", 
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 16, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlDocument
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlDocument", 
    interfaceNames: ["System.Xml.IHasXmlChildNode", "System.Collections.IEnumerable", "System.ICloneable", "System.Xml.XPath.IXPathNavigable"],
    baseTypeName: "System.Xml.XmlNode"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 17, 0, true, this); }
_jstype.definition.ctor$$XmlNameTable = function(a0) { CS.Call(5, 17, 1, true, this, a0); }

// fields

// properties

_jstype.definition.get_BaseURI = function() { return CS.Call(2, 17, 0, false, this); }
_jstype.definition.set_BaseURI = function(v) { return CS.Call(3, 17, 0, false, this, v); }

_jstype.definition.get_DocumentElement = function() { return CS.Call(2, 17, 1, false, this); }
_jstype.definition.set_DocumentElement = function(v) { return CS.Call(3, 17, 1, false, this, v); }

_jstype.definition.get_DocumentType = function() { return CS.Call(2, 17, 2, false, this); }
_jstype.definition.set_DocumentType = function(v) { return CS.Call(3, 17, 2, false, this, v); }

_jstype.definition.get_Implementation = function() { return CS.Call(2, 17, 3, false, this); }
_jstype.definition.set_Implementation = function(v) { return CS.Call(3, 17, 3, false, this, v); }

_jstype.definition.get_InnerXml = function() { return CS.Call(2, 17, 4, false, this); }
_jstype.definition.set_InnerXml = function(v) { return CS.Call(3, 17, 4, false, this, v); }

_jstype.definition.get_IsReadOnly = function() { return CS.Call(2, 17, 5, false, this); }
_jstype.definition.set_IsReadOnly = function(v) { return CS.Call(3, 17, 5, false, this, v); }

_jstype.definition.get_LocalName = function() { return CS.Call(2, 17, 6, false, this); }
_jstype.definition.set_LocalName = function(v) { return CS.Call(3, 17, 6, false, this, v); }

_jstype.definition.get_Name = function() { return CS.Call(2, 17, 7, false, this); }
_jstype.definition.set_Name = function(v) { return CS.Call(3, 17, 7, false, this, v); }

_jstype.definition.get_NameTable = function() { return CS.Call(2, 17, 8, false, this); }
_jstype.definition.set_NameTable = function(v) { return CS.Call(3, 17, 8, false, this, v); }

_jstype.definition.get_NodeType = function() { return CS.Call(2, 17, 9, false, this); }
_jstype.definition.set_NodeType = function(v) { return CS.Call(3, 17, 9, false, this, v); }

_jstype.definition.get_OwnerDocument = function() { return CS.Call(2, 17, 10, false, this); }
_jstype.definition.set_OwnerDocument = function(v) { return CS.Call(3, 17, 10, false, this, v); }

_jstype.definition.get_PreserveWhitespace = function() { return CS.Call(2, 17, 11, false, this); }
_jstype.definition.set_PreserveWhitespace = function(v) { return CS.Call(3, 17, 11, false, this, v); }

_jstype.definition.get_XmlResolver = function() { return CS.Call(2, 17, 12, false, this); }
_jstype.definition.set_XmlResolver = function(v) { return CS.Call(3, 17, 12, false, this, v); }

_jstype.definition.get_ParentNode = function() { return CS.Call(2, 17, 13, false, this); }
_jstype.definition.set_ParentNode = function(v) { return CS.Call(3, 17, 13, false, this, v); }

_jstype.definition.get_Schemas = function() { return CS.Call(2, 17, 14, false, this); }
_jstype.definition.set_Schemas = function(v) { return CS.Call(3, 17, 14, false, this, v); }

_jstype.definition.get_SchemaInfo = function() { return CS.Call(2, 17, 15, false, this); }
_jstype.definition.set_SchemaInfo = function(v) { return CS.Call(3, 17, 15, false, this, v); }

// methods

/* XmlNode */
_jstype.definition.CloneNode = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 17, 0, false, this, a0); 
}
/* XmlAttribute */
_jstype.definition.CreateAttribute$$String$$String$$String = function(a0/*String*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 17, 1, false, this, a0, a1, a2); 
}
/* XmlAttribute */
_jstype.definition.CreateAttribute$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 17, 2, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.CreateAttribute$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 3, false, this, a0); 
}
/* XmlCDataSection */
_jstype.definition.CreateCDataSection = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 4, false, this, a0); 
}
/* XmlComment */
_jstype.definition.CreateComment = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 5, false, this, a0); 
}
/* XmlDocumentFragment */
_jstype.definition.CreateDocumentFragment = function() { 
    
    return CS.Call(4, 17, 6, false, this); 
}
/* XmlDocumentType */
_jstype.definition.CreateDocumentType$$String$$String$$String$$String = function(a0/*String*/, a1/*String*/, a2/*String*/, a3/*String*/) { 
    
    return CS.Call(4, 17, 7, false, this, a0, a1, a2, a3); 
}
/* XmlElement */
_jstype.definition.CreateElement$$String$$String$$String = function(a0/*String*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 17, 8, false, this, a0, a1, a2); 
}
/* XmlElement */
_jstype.definition.CreateElement$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 17, 9, false, this, a0, a1); 
}
/* XmlElement */
_jstype.definition.CreateElement$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 10, false, this, a0); 
}
/* XmlEntityReference */
_jstype.definition.CreateEntityReference = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 11, false, this, a0); 
}
/* XPathNavigator */
_jstype.definition.CreateNavigator = function() { 
    
    return CS.Call(4, 17, 12, false, this); 
}
/* XmlNode */
_jstype.definition.CreateNode$$XmlNodeType$$String$$String$$String = function(a0/*XmlNodeType*/, a1/*String*/, a2/*String*/, a3/*String*/) { 
    
    return CS.Call(4, 17, 13, false, this, a0, a1, a2, a3); 
}
/* XmlNode */
_jstype.definition.CreateNode$$XmlNodeType$$String$$String = function(a0/*XmlNodeType*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 17, 14, false, this, a0, a1, a2); 
}
/* XmlNode */
_jstype.definition.CreateNode$$String$$String$$String = function(a0/*String*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 17, 15, false, this, a0, a1, a2); 
}
/* XmlProcessingInstruction */
_jstype.definition.CreateProcessingInstruction = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 17, 16, false, this, a0, a1); 
}
/* XmlSignificantWhitespace */
_jstype.definition.CreateSignificantWhitespace = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 17, false, this, a0); 
}
/* XmlText */
_jstype.definition.CreateTextNode = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 18, false, this, a0); 
}
/* XmlWhitespace */
_jstype.definition.CreateWhitespace = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 19, false, this, a0); 
}
/* XmlDeclaration */
_jstype.definition.CreateXmlDeclaration = function(a0/*String*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 17, 20, false, this, a0, a1, a2); 
}
/* XmlElement */
_jstype.definition.GetElementById = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 21, false, this, a0); 
}
/* XmlNodeList */
_jstype.definition.GetElementsByTagName$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 17, 22, false, this, a0, a1); 
}
/* XmlNodeList */
_jstype.definition.GetElementsByTagName$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 23, false, this, a0); 
}
/* XmlNode */
_jstype.definition.ImportNode = function(a0/*XmlNode*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 17, 24, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Load$$TextReader = function(a0/*TextReader*/) { 
    
    return CS.Call(4, 17, 25, false, this, a0); 
}
/* Void */
_jstype.definition.Load$$XmlReader = function(a0/*XmlReader*/) { 
    
    return CS.Call(4, 17, 26, false, this, a0); 
}
/* Void */
_jstype.definition.Load$$Stream = function(a0/*Stream*/) { 
    
    return CS.Call(4, 17, 27, false, this, a0); 
}
/* Void */
_jstype.definition.Load$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 28, false, this, a0); 
}
/* Void */
_jstype.definition.LoadXml = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 29, false, this, a0); 
}
/* XmlNode */
_jstype.definition.ReadNode = function(a0/*XmlReader*/) { 
    
    return CS.Call(4, 17, 30, false, this, a0); 
}
/* Void */
_jstype.definition.Save$$TextWriter = function(a0/*TextWriter*/) { 
    
    return CS.Call(4, 17, 31, false, this, a0); 
}
/* Void */
_jstype.definition.Save$$XmlWriter = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 17, 32, false, this, a0); 
}
/* Void */
_jstype.definition.Save$$Stream = function(a0/*Stream*/) { 
    
    return CS.Call(4, 17, 33, false, this, a0); 
}
/* Void */
_jstype.definition.Save$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 17, 34, false, this, a0); 
}
/* Void */
_jstype.definition.Validate$$ValidationEventHandler$$XmlNode = function(a0/*ValidationEventHandler*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 17, 35, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Validate$$ValidationEventHandler = function(a0/*ValidationEventHandler*/) { 
    
    return CS.Call(4, 17, 36, false, this, a0); 
}
/* Void */
_jstype.definition.WriteContentTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 17, 37, false, this, a0); 
}
/* Void */
_jstype.definition.WriteTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 17, 38, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlNodeList
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlNodeList", 
    interfaceNames: ["System.Collections.IEnumerable"],
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Count = function() { return CS.Call(2, 18, 0, false, this); }
_jstype.definition.set_Count = function(v) { return CS.Call(3, 18, 0, false, this, v); }

_jstype.definition.get_ItemOf$$Int32 = function(ind0) { return CS.Call(2, 18, 1, false, this, ind0); }
_jstype.definition.set_ItemOf$$Int32 = function(ind0, v) { return CS.Call(3, 18, 1, false, this, ind0, v); }

// methods

/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 18, 0, false, this); 
}
/* XmlNode */
_jstype.definition.Item = function(a0/*Int32*/) { 
    
    return CS.Call(4, 18, 1, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlElement
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlElement", 
    interfaceNames: ["System.Xml.IHasXmlChildNode", "System.Collections.IEnumerable", "System.ICloneable", "System.Xml.XPath.IXPathNavigable"],
    baseTypeName: "System.Xml.XmlLinkedNode"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Attributes = function() { return CS.Call(2, 19, 0, false, this); }
_jstype.definition.set_Attributes = function(v) { return CS.Call(3, 19, 0, false, this, v); }

_jstype.definition.get_HasAttributes = function() { return CS.Call(2, 19, 1, false, this); }
_jstype.definition.set_HasAttributes = function(v) { return CS.Call(3, 19, 1, false, this, v); }

_jstype.definition.get_InnerText = function() { return CS.Call(2, 19, 2, false, this); }
_jstype.definition.set_InnerText = function(v) { return CS.Call(3, 19, 2, false, this, v); }

_jstype.definition.get_InnerXml = function() { return CS.Call(2, 19, 3, false, this); }
_jstype.definition.set_InnerXml = function(v) { return CS.Call(3, 19, 3, false, this, v); }

_jstype.definition.get_IsEmpty = function() { return CS.Call(2, 19, 4, false, this); }
_jstype.definition.set_IsEmpty = function(v) { return CS.Call(3, 19, 4, false, this, v); }

_jstype.definition.get_LocalName = function() { return CS.Call(2, 19, 5, false, this); }
_jstype.definition.set_LocalName = function(v) { return CS.Call(3, 19, 5, false, this, v); }

_jstype.definition.get_Name = function() { return CS.Call(2, 19, 6, false, this); }
_jstype.definition.set_Name = function(v) { return CS.Call(3, 19, 6, false, this, v); }

_jstype.definition.get_NamespaceURI = function() { return CS.Call(2, 19, 7, false, this); }
_jstype.definition.set_NamespaceURI = function(v) { return CS.Call(3, 19, 7, false, this, v); }

_jstype.definition.get_NextSibling = function() { return CS.Call(2, 19, 8, false, this); }
_jstype.definition.set_NextSibling = function(v) { return CS.Call(3, 19, 8, false, this, v); }

_jstype.definition.get_NodeType = function() { return CS.Call(2, 19, 9, false, this); }
_jstype.definition.set_NodeType = function(v) { return CS.Call(3, 19, 9, false, this, v); }

_jstype.definition.get_OwnerDocument = function() { return CS.Call(2, 19, 10, false, this); }
_jstype.definition.set_OwnerDocument = function(v) { return CS.Call(3, 19, 10, false, this, v); }

_jstype.definition.get_Prefix = function() { return CS.Call(2, 19, 11, false, this); }
_jstype.definition.set_Prefix = function(v) { return CS.Call(3, 19, 11, false, this, v); }

_jstype.definition.get_ParentNode = function() { return CS.Call(2, 19, 12, false, this); }
_jstype.definition.set_ParentNode = function(v) { return CS.Call(3, 19, 12, false, this, v); }

_jstype.definition.get_SchemaInfo = function() { return CS.Call(2, 19, 13, false, this); }
_jstype.definition.set_SchemaInfo = function(v) { return CS.Call(3, 19, 13, false, this, v); }

// methods

/* XmlNode */
_jstype.definition.CloneNode = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 19, 0, false, this, a0); 
}
/* String */
_jstype.definition.GetAttribute$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 19, 1, false, this, a0, a1); 
}
/* String */
_jstype.definition.GetAttribute$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 19, 2, false, this, a0); 
}
/* XmlAttribute */
_jstype.definition.GetAttributeNode$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 19, 3, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.GetAttributeNode$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 19, 4, false, this, a0); 
}
/* XmlNodeList */
_jstype.definition.GetElementsByTagName$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 19, 5, false, this, a0, a1); 
}
/* XmlNodeList */
_jstype.definition.GetElementsByTagName$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 19, 6, false, this, a0); 
}
/* Boolean */
_jstype.definition.HasAttribute$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 19, 7, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.HasAttribute$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 19, 8, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveAll = function() { 
    
    return CS.Call(4, 19, 9, false, this); 
}
/* Void */
_jstype.definition.RemoveAllAttributes = function() { 
    
    return CS.Call(4, 19, 10, false, this); 
}
/* Void */
_jstype.definition.RemoveAttribute$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 19, 11, false, this, a0, a1); 
}
/* Void */
_jstype.definition.RemoveAttribute$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 19, 12, false, this, a0); 
}
/* XmlNode */
_jstype.definition.RemoveAttributeAt = function(a0/*Int32*/) { 
    
    return CS.Call(4, 19, 13, false, this, a0); 
}
/* XmlAttribute */
_jstype.definition.RemoveAttributeNode$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 19, 14, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.RemoveAttributeNode$$XmlAttribute = function(a0/*XmlAttribute*/) { 
    
    return CS.Call(4, 19, 15, false, this, a0); 
}
/* String */
_jstype.definition.SetAttribute$$String$$String$$String = function(a0/*String*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 19, 16, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetAttribute$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 19, 17, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.SetAttributeNode$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 19, 18, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.SetAttributeNode$$XmlAttribute = function(a0/*XmlAttribute*/) { 
    
    return CS.Call(4, 19, 19, false, this, a0); 
}
/* Void */
_jstype.definition.WriteContentTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 19, 20, false, this, a0); 
}
/* Void */
_jstype.definition.WriteTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 19, 21, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlLinkedNode
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlLinkedNode", 
    interfaceNames: ["System.Collections.IEnumerable", "System.ICloneable", "System.Xml.XPath.IXPathNavigable"],
    baseTypeName: "System.Xml.XmlNode"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_NextSibling = function() { return CS.Call(2, 20, 0, false, this); }
_jstype.definition.set_NextSibling = function(v) { return CS.Call(3, 20, 0, false, this, v); }

_jstype.definition.get_PreviousSibling = function() { return CS.Call(2, 20, 1, false, this); }
_jstype.definition.set_PreviousSibling = function(v) { return CS.Call(3, 20, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlAttributeCollection
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlAttributeCollection", 
    interfaceNames: ["System.Collections.IEnumerable", "System.Collections.ICollection"],
    baseTypeName: "System.Xml.XmlNamedNodeMap"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_ItemOf$$String = function(ind0) { return CS.Call(2, 21, 0, false, this, ind0); }
_jstype.definition.set_ItemOf$$String = function(ind0, v) { return CS.Call(3, 21, 0, false, this, ind0, v); }

_jstype.definition.get_ItemOf$$Int32 = function(ind0) { return CS.Call(2, 21, 1, false, this, ind0); }
_jstype.definition.set_ItemOf$$Int32 = function(ind0, v) { return CS.Call(3, 21, 1, false, this, ind0, v); }

_jstype.definition.get_ItemOf$$String$$String = function(ind0, ind1) { return CS.Call(2, 21, 2, false, this, ind0, ind1); }
_jstype.definition.set_ItemOf$$String$$String = function(ind0, ind1, v) { return CS.Call(3, 21, 2, false, this, ind0, ind1, v); }

// methods

/* XmlAttribute */
_jstype.definition.Append = function(a0/*XmlAttribute*/) { 
    
    return CS.Call(4, 21, 0, false, this, a0); 
}
/* Void */
_jstype.definition.CopyTo = function(a0/*XmlAttribute[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 21, 1, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.InsertAfter = function(a0/*XmlAttribute*/, a1/*XmlAttribute*/) { 
    
    return CS.Call(4, 21, 2, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.InsertBefore = function(a0/*XmlAttribute*/, a1/*XmlAttribute*/) { 
    
    return CS.Call(4, 21, 3, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.Prepend = function(a0/*XmlAttribute*/) { 
    
    return CS.Call(4, 21, 4, false, this, a0); 
}
/* XmlAttribute */
_jstype.definition.Remove = function(a0/*XmlAttribute*/) { 
    
    return CS.Call(4, 21, 5, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveAll = function() { 
    
    return CS.Call(4, 21, 6, false, this); 
}
/* XmlAttribute */
_jstype.definition.RemoveAt = function(a0/*Int32*/) { 
    
    return CS.Call(4, 21, 7, false, this, a0); 
}
/* XmlNode */
_jstype.definition.SetNamedItem$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 21, 8, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlNamedNodeMap
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlNamedNodeMap", 
    interfaceNames: ["System.Collections.IEnumerable"],
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Count = function() { return CS.Call(2, 22, 0, false, this); }
_jstype.definition.set_Count = function(v) { return CS.Call(3, 22, 0, false, this, v); }

// methods

/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 22, 0, false, this); 
}
/* XmlNode */
_jstype.definition.GetNamedItem$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 22, 1, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.GetNamedItem$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 22, 2, false, this, a0); 
}
/* XmlNode */
_jstype.definition.Item = function(a0/*Int32*/) { 
    
    return CS.Call(4, 22, 3, false, this, a0); 
}
/* XmlNode */
_jstype.definition.RemoveNamedItem$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 22, 4, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.RemoveNamedItem$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 22, 5, false, this, a0); 
}
/* XmlNode */
_jstype.definition.SetNamedItem$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 22, 6, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlAttribute
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlAttribute", 
    interfaceNames: ["System.Xml.IHasXmlChildNode", "System.Collections.IEnumerable", "System.ICloneable", "System.Xml.XPath.IXPathNavigable"],
    baseTypeName: "System.Xml.XmlNode"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_BaseURI = function() { return CS.Call(2, 23, 0, false, this); }
_jstype.definition.set_BaseURI = function(v) { return CS.Call(3, 23, 0, false, this, v); }

_jstype.definition.get_InnerText = function() { return CS.Call(2, 23, 1, false, this); }
_jstype.definition.set_InnerText = function(v) { return CS.Call(3, 23, 1, false, this, v); }

_jstype.definition.get_InnerXml = function() { return CS.Call(2, 23, 2, false, this); }
_jstype.definition.set_InnerXml = function(v) { return CS.Call(3, 23, 2, false, this, v); }

_jstype.definition.get_LocalName = function() { return CS.Call(2, 23, 3, false, this); }
_jstype.definition.set_LocalName = function(v) { return CS.Call(3, 23, 3, false, this, v); }

_jstype.definition.get_Name = function() { return CS.Call(2, 23, 4, false, this); }
_jstype.definition.set_Name = function(v) { return CS.Call(3, 23, 4, false, this, v); }

_jstype.definition.get_NamespaceURI = function() { return CS.Call(2, 23, 5, false, this); }
_jstype.definition.set_NamespaceURI = function(v) { return CS.Call(3, 23, 5, false, this, v); }

_jstype.definition.get_NodeType = function() { return CS.Call(2, 23, 6, false, this); }
_jstype.definition.set_NodeType = function(v) { return CS.Call(3, 23, 6, false, this, v); }

_jstype.definition.get_OwnerDocument = function() { return CS.Call(2, 23, 7, false, this); }
_jstype.definition.set_OwnerDocument = function(v) { return CS.Call(3, 23, 7, false, this, v); }

_jstype.definition.get_OwnerElement = function() { return CS.Call(2, 23, 8, false, this); }
_jstype.definition.set_OwnerElement = function(v) { return CS.Call(3, 23, 8, false, this, v); }

_jstype.definition.get_ParentNode = function() { return CS.Call(2, 23, 9, false, this); }
_jstype.definition.set_ParentNode = function(v) { return CS.Call(3, 23, 9, false, this, v); }

_jstype.definition.get_Prefix = function() { return CS.Call(2, 23, 10, false, this); }
_jstype.definition.set_Prefix = function(v) { return CS.Call(3, 23, 10, false, this, v); }

_jstype.definition.get_SchemaInfo = function() { return CS.Call(2, 23, 11, false, this); }
_jstype.definition.set_SchemaInfo = function(v) { return CS.Call(3, 23, 11, false, this, v); }

_jstype.definition.get_Specified = function() { return CS.Call(2, 23, 12, false, this); }
_jstype.definition.set_Specified = function(v) { return CS.Call(3, 23, 12, false, this, v); }

_jstype.definition.get_Value = function() { return CS.Call(2, 23, 13, false, this); }
_jstype.definition.set_Value = function(v) { return CS.Call(3, 23, 13, false, this, v); }

// methods

/* XmlNode */
_jstype.definition.AppendChild$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 23, 0, false, this, a0); 
}
/* XmlNode */
_jstype.definition.CloneNode = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 23, 1, false, this, a0); 
}
/* XmlNode */
_jstype.definition.InsertAfter = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 23, 2, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.InsertBefore$$XmlNode$$XmlNode = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 23, 3, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.PrependChild = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 23, 4, false, this, a0); 
}
/* XmlNode */
_jstype.definition.RemoveChild$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 23, 5, false, this, a0); 
}
/* XmlNode */
_jstype.definition.ReplaceChild = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 23, 6, false, this, a0, a1); 
}
/* Void */
_jstype.definition.WriteContentTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 23, 7, false, this, a0); 
}
/* Void */
_jstype.definition.WriteTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 23, 8, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ISerializationCallbackReceiver
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.ISerializationCallbackReceiver", 
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnAfterDeserialize = function() { 
    
    return CS.Call(4, 24, 0, false, this); 
}
/* Void */
_jstype.definition.OnBeforeSerialize = function() { 
    
    return CS.Call(4, 24, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UnityException
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UnityException", 
    interfaceNames: ["System.Runtime.Serialization.ISerializable", "System.Runtime.InteropServices._Exception"],
    baseTypeName: "System.SystemException"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 25, 0, true, this); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 25, 1, true, this, a0); }
_jstype.definition.ctor$$String$$Exception = function(a0, a1) { CS.Call(5, 25, 2, true, this, a0, a1); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ScriptableObject
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ScriptableObject", 
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 26, 0, true, this); }

// fields

// properties

// methods

/* static ScriptableObject  */
_jstype.staticDefinition.CreateInstance$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 26, 0, true, a0); 
}
/* static ScriptableObject  */
_jstype.staticDefinition.CreateInstance$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 26, 1, true, a0); 
}
/* static T  */
_jstype.staticDefinition.CreateInstance$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 26, 2, true, native_t0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Debug
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Debug", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 27, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_developerConsoleVisible = function() { return CS.Call(2, 27, 0, true); }
_jstype.staticDefinition.set_developerConsoleVisible = function(v) { return CS.Call(3, 27, 0, true, v); }

_jstype.staticDefinition.get_isDebugBuild = function() { return CS.Call(2, 27, 1, true); }
_jstype.staticDefinition.set_isDebugBuild = function(v) { return CS.Call(3, 27, 1, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.Break = function() { 
    
    return CS.Call(4, 27, 0, true); 
}
/* static Void  */
_jstype.staticDefinition.ClearDeveloperConsole = function() { 
    
    return CS.Call(4, 27, 1, true); 
}
/* static Void  */
_jstype.staticDefinition.DebugBreak = function() { 
    
    return CS.Call(4, 27, 2, true); 
}
/* static Void  */
_jstype.staticDefinition.DrawLine$$Vector3$$Vector3$$Color$$Single$$Boolean = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/, a3/*Single*/, a4/*Boolean*/) { 
    
    return CS.Call(4, 27, 3, true, a0, a1, a2, a3, a4); 
}
/* static Void  */
_jstype.staticDefinition.DrawLine$$Vector3$$Vector3$$Color$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/, a3/*Single*/) { 
    
    return CS.Call(4, 27, 4, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.DrawLine$$Vector3$$Vector3$$Color = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/) { 
    
    return CS.Call(4, 27, 5, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawLine$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 27, 6, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawRay$$Vector3$$Vector3$$Color$$Single$$Boolean = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/, a3/*Single*/, a4/*Boolean*/) { 
    
    return CS.Call(4, 27, 7, true, a0, a1, a2, a3, a4); 
}
/* static Void  */
_jstype.staticDefinition.DrawRay$$Vector3$$Vector3$$Color$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/, a3/*Single*/) { 
    
    return CS.Call(4, 27, 8, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.DrawRay$$Vector3$$Vector3$$Color = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/) { 
    
    return CS.Call(4, 27, 9, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawRay$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 27, 10, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Log$$Object$$Object = function(a0/*Object*/, a1/*Object*/) { 
    
    return CS.Call(4, 27, 11, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Log$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 27, 12, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LogError$$Object$$Object = function(a0/*Object*/, a1/*Object*/) { 
    
    return CS.Call(4, 27, 13, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.LogError$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 27, 14, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LogException$$Exception$$Object = function(a0/*Exception*/, a1/*Object*/) { 
    
    return CS.Call(4, 27, 15, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.LogException$$Exception = function(a0/*Exception*/) { 
    
    return CS.Call(4, 27, 16, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LogWarning$$Object$$Object = function(a0/*Object*/, a1/*Object*/) { 
    
    return CS.Call(4, 27, 17, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.LogWarning$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 27, 18, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Input
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Input", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 28, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_compensateSensors = function() { return CS.Call(2, 28, 0, true); }
_jstype.staticDefinition.set_compensateSensors = function(v) { return CS.Call(3, 28, 0, true, v); }

_jstype.staticDefinition.get_gyro = function() { return CS.Call(2, 28, 1, true); }
_jstype.staticDefinition.set_gyro = function(v) { return CS.Call(3, 28, 1, true, v); }

_jstype.staticDefinition.get_mousePosition = function() { return CS.Call(2, 28, 2, true); }
_jstype.staticDefinition.set_mousePosition = function(v) { return CS.Call(3, 28, 2, true, v); }

_jstype.staticDefinition.get_mouseScrollDelta = function() { return CS.Call(2, 28, 3, true); }
_jstype.staticDefinition.set_mouseScrollDelta = function(v) { return CS.Call(3, 28, 3, true, v); }

_jstype.staticDefinition.get_mousePresent = function() { return CS.Call(2, 28, 4, true); }
_jstype.staticDefinition.set_mousePresent = function(v) { return CS.Call(3, 28, 4, true, v); }

_jstype.staticDefinition.get_simulateMouseWithTouches = function() { return CS.Call(2, 28, 5, true); }
_jstype.staticDefinition.set_simulateMouseWithTouches = function(v) { return CS.Call(3, 28, 5, true, v); }

_jstype.staticDefinition.get_anyKey = function() { return CS.Call(2, 28, 6, true); }
_jstype.staticDefinition.set_anyKey = function(v) { return CS.Call(3, 28, 6, true, v); }

_jstype.staticDefinition.get_anyKeyDown = function() { return CS.Call(2, 28, 7, true); }
_jstype.staticDefinition.set_anyKeyDown = function(v) { return CS.Call(3, 28, 7, true, v); }

_jstype.staticDefinition.get_inputString = function() { return CS.Call(2, 28, 8, true); }
_jstype.staticDefinition.set_inputString = function(v) { return CS.Call(3, 28, 8, true, v); }

_jstype.staticDefinition.get_acceleration = function() { return CS.Call(2, 28, 9, true); }
_jstype.staticDefinition.set_acceleration = function(v) { return CS.Call(3, 28, 9, true, v); }

_jstype.staticDefinition.get_accelerationEvents = function() { return CS.Call(2, 28, 10, true); }
_jstype.staticDefinition.set_accelerationEvents = function(v) { return CS.Call(3, 28, 10, true, v); }

_jstype.staticDefinition.get_accelerationEventCount = function() { return CS.Call(2, 28, 11, true); }
_jstype.staticDefinition.set_accelerationEventCount = function(v) { return CS.Call(3, 28, 11, true, v); }

_jstype.staticDefinition.get_touches = function() { return CS.Call(2, 28, 12, true); }
_jstype.staticDefinition.set_touches = function(v) { return CS.Call(3, 28, 12, true, v); }

_jstype.staticDefinition.get_touchCount = function() { return CS.Call(2, 28, 13, true); }
_jstype.staticDefinition.set_touchCount = function(v) { return CS.Call(3, 28, 13, true, v); }

_jstype.staticDefinition.get_touchSupported = function() { return CS.Call(2, 28, 14, true); }
_jstype.staticDefinition.set_touchSupported = function(v) { return CS.Call(3, 28, 14, true, v); }

_jstype.staticDefinition.get_multiTouchEnabled = function() { return CS.Call(2, 28, 15, true); }
_jstype.staticDefinition.set_multiTouchEnabled = function(v) { return CS.Call(3, 28, 15, true, v); }

_jstype.staticDefinition.get_location = function() { return CS.Call(2, 28, 16, true); }
_jstype.staticDefinition.set_location = function(v) { return CS.Call(3, 28, 16, true, v); }

_jstype.staticDefinition.get_compass = function() { return CS.Call(2, 28, 17, true); }
_jstype.staticDefinition.set_compass = function(v) { return CS.Call(3, 28, 17, true, v); }

_jstype.staticDefinition.get_deviceOrientation = function() { return CS.Call(2, 28, 18, true); }
_jstype.staticDefinition.set_deviceOrientation = function(v) { return CS.Call(3, 28, 18, true, v); }

_jstype.staticDefinition.get_imeCompositionMode = function() { return CS.Call(2, 28, 19, true); }
_jstype.staticDefinition.set_imeCompositionMode = function(v) { return CS.Call(3, 28, 19, true, v); }

_jstype.staticDefinition.get_compositionString = function() { return CS.Call(2, 28, 20, true); }
_jstype.staticDefinition.set_compositionString = function(v) { return CS.Call(3, 28, 20, true, v); }

_jstype.staticDefinition.get_imeIsSelected = function() { return CS.Call(2, 28, 21, true); }
_jstype.staticDefinition.set_imeIsSelected = function(v) { return CS.Call(3, 28, 21, true, v); }

_jstype.staticDefinition.get_compositionCursorPos = function() { return CS.Call(2, 28, 22, true); }
_jstype.staticDefinition.set_compositionCursorPos = function(v) { return CS.Call(3, 28, 22, true, v); }

// methods

/* static AccelerationEvent  */
_jstype.staticDefinition.GetAccelerationEvent = function(a0/*Int32*/) { 
    
    return CS.Call(4, 28, 0, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetAxis = function(a0/*String*/) { 
    
    return CS.Call(4, 28, 1, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetAxisRaw = function(a0/*String*/) { 
    
    return CS.Call(4, 28, 2, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetButton = function(a0/*String*/) { 
    
    return CS.Call(4, 28, 3, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetButtonDown = function(a0/*String*/) { 
    
    return CS.Call(4, 28, 4, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetButtonUp = function(a0/*String*/) { 
    
    return CS.Call(4, 28, 5, true, a0); 
}
/* static String[]  */
_jstype.staticDefinition.GetJoystickNames = function() { 
    
    return CS.Call(4, 28, 6, true); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKey$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 28, 7, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKey$$KeyCode = function(a0/*KeyCode*/) { 
    
    return CS.Call(4, 28, 8, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKeyDown$$KeyCode = function(a0/*KeyCode*/) { 
    
    return CS.Call(4, 28, 9, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKeyDown$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 28, 10, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKeyUp$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 28, 11, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKeyUp$$KeyCode = function(a0/*KeyCode*/) { 
    
    return CS.Call(4, 28, 12, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetMouseButton = function(a0/*Int32*/) { 
    
    return CS.Call(4, 28, 13, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetMouseButtonDown = function(a0/*Int32*/) { 
    
    return CS.Call(4, 28, 14, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetMouseButtonUp = function(a0/*Int32*/) { 
    
    return CS.Call(4, 28, 15, true, a0); 
}
/* static Touch  */
_jstype.staticDefinition.GetTouch = function(a0/*Int32*/) { 
    
    return CS.Call(4, 28, 16, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.ResetInputAxes = function() { 
    
    return CS.Call(4, 28, 17, true); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GameObject
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GameObject", 
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 29, 0, true, this, a0); }
_jstype.definition.ctor = function() { CS.Call(5, 29, 1, true, this); }
_jstype.definition.ctor$$String$$Type$Array = function(a0, a1) { CS.Call(5, 29, 2, true, this, a0, a1); }

// fields

// properties

_jstype.definition.get_isStatic = function() { return CS.Call(2, 29, 0, false, this); }
_jstype.definition.set_isStatic = function(v) { return CS.Call(3, 29, 0, false, this, v); }

_jstype.definition.get_transform = function() { return CS.Call(2, 29, 1, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 29, 1, false, this, v); }

_jstype.definition.get_rigidbody = function() { return CS.Call(2, 29, 2, false, this); }
_jstype.definition.set_rigidbody = function(v) { return CS.Call(3, 29, 2, false, this, v); }

_jstype.definition.get_rigidbody2D = function() { return CS.Call(2, 29, 3, false, this); }
_jstype.definition.set_rigidbody2D = function(v) { return CS.Call(3, 29, 3, false, this, v); }

_jstype.definition.get_camera = function() { return CS.Call(2, 29, 4, false, this); }
_jstype.definition.set_camera = function(v) { return CS.Call(3, 29, 4, false, this, v); }

_jstype.definition.get_light = function() { return CS.Call(2, 29, 5, false, this); }
_jstype.definition.set_light = function(v) { return CS.Call(3, 29, 5, false, this, v); }

_jstype.definition.get_animation = function() { return CS.Call(2, 29, 6, false, this); }
_jstype.definition.set_animation = function(v) { return CS.Call(3, 29, 6, false, this, v); }

_jstype.definition.get_constantForce = function() { return CS.Call(2, 29, 7, false, this); }
_jstype.definition.set_constantForce = function(v) { return CS.Call(3, 29, 7, false, this, v); }

_jstype.definition.get_renderer = function() { return CS.Call(2, 29, 8, false, this); }
_jstype.definition.set_renderer = function(v) { return CS.Call(3, 29, 8, false, this, v); }

_jstype.definition.get_audio = function() { return CS.Call(2, 29, 9, false, this); }
_jstype.definition.set_audio = function(v) { return CS.Call(3, 29, 9, false, this, v); }

_jstype.definition.get_guiText = function() { return CS.Call(2, 29, 10, false, this); }
_jstype.definition.set_guiText = function(v) { return CS.Call(3, 29, 10, false, this, v); }

_jstype.definition.get_guiTexture = function() { return CS.Call(2, 29, 11, false, this); }
_jstype.definition.set_guiTexture = function(v) { return CS.Call(3, 29, 11, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 29, 12, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 29, 12, false, this, v); }

_jstype.definition.get_collider2D = function() { return CS.Call(2, 29, 13, false, this); }
_jstype.definition.set_collider2D = function(v) { return CS.Call(3, 29, 13, false, this, v); }

_jstype.definition.get_hingeJoint = function() { return CS.Call(2, 29, 14, false, this); }
_jstype.definition.set_hingeJoint = function(v) { return CS.Call(3, 29, 14, false, this, v); }

_jstype.definition.get_particleEmitter = function() { return CS.Call(2, 29, 15, false, this); }
_jstype.definition.set_particleEmitter = function(v) { return CS.Call(3, 29, 15, false, this, v); }

_jstype.definition.get_particleSystem = function() { return CS.Call(2, 29, 16, false, this); }
_jstype.definition.set_particleSystem = function(v) { return CS.Call(3, 29, 16, false, this, v); }

_jstype.definition.get_layer = function() { return CS.Call(2, 29, 17, false, this); }
_jstype.definition.set_layer = function(v) { return CS.Call(3, 29, 17, false, this, v); }

_jstype.definition.get_activeSelf = function() { return CS.Call(2, 29, 18, false, this); }
_jstype.definition.set_activeSelf = function(v) { return CS.Call(3, 29, 18, false, this, v); }

_jstype.definition.get_activeInHierarchy = function() { return CS.Call(2, 29, 19, false, this); }
_jstype.definition.set_activeInHierarchy = function(v) { return CS.Call(3, 29, 19, false, this, v); }

_jstype.definition.get_tag = function() { return CS.Call(2, 29, 20, false, this); }
_jstype.definition.set_tag = function(v) { return CS.Call(3, 29, 20, false, this, v); }

_jstype.definition.get_gameObject = function() { return CS.Call(2, 29, 21, false, this); }
_jstype.definition.set_gameObject = function(v) { return CS.Call(3, 29, 21, false, this, v); }

// methods

/* Component */
_jstype.definition.AddComponent$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 29, 0, false, this, a0); 
}
/* Component */
_jstype.definition.AddComponent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 29, 1, false, this, a0); 
}
/* T */
_jstype.definition.AddComponent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 2, false, this, native_t0); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 29, 3, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 29, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 29, 5, false, this, a0, a1); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 29, 6, false, this, a0); 
}
/* Boolean */
_jstype.definition.CompareTag = function(a0/*String*/) { 
    
    return CS.Call(4, 29, 7, false, this, a0); 
}
/* Component */
_jstype.definition.GetComponent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 29, 8, false, this, a0); 
}
/* Component */
_jstype.definition.GetComponent$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 29, 9, false, this, a0); 
}
/* T */
_jstype.definition.GetComponent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 10, false, this, native_t0); 
}
/* Component */
_jstype.definition.GetComponentInChildren$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 29, 11, false, this, a0); 
}
/* T */
_jstype.definition.GetComponentInChildren$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 12, false, this, native_t0); 
}
/* Component */
_jstype.definition.GetComponentInParent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 29, 13, false, this, a0); 
}
/* T */
_jstype.definition.GetComponentInParent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 14, false, this, native_t0); 
}
/* Void */
_jstype.definition.GetComponents$$Type$$List$1$Component = function(a0/*Type*/, a1/*List`1*/) { 
    
    return CS.Call(4, 29, 15, false, this, a0, a1); 
}
/* Void */
_jstype.definition.GetComponents$1$$List$1 = function(t0, a0/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 16, false, this, native_t0, a0); 
}
/* Component[] */
_jstype.definition.GetComponents$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 29, 17, false, this, a0); 
}
/* T[] */
_jstype.definition.GetComponents$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 18, false, this, native_t0); 
}
/* Component[] */
_jstype.definition.GetComponentsInChildren$$Type$$Boolean = function(a0/*Type*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 29, 19, false, this, a0, a1); 
}
/* Void */
_jstype.definition.GetComponentsInChildren$1$$Boolean$$List$1 = function(t0, a0/*Boolean*/, a1/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 20, false, this, native_t0, a0, a1); 
}
/* T[] */
_jstype.definition.GetComponentsInChildren$1$$Boolean = function(t0, a0/*Boolean*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 21, false, this, native_t0, a0); 
}
/* Component[] */
_jstype.definition.GetComponentsInChildren$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 29, 22, false, this, a0); 
}
/* Void */
_jstype.definition.GetComponentsInChildren$1$$List$1 = function(t0, a0/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 23, false, this, native_t0, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInChildren$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 24, false, this, native_t0); 
}
/* Void */
_jstype.definition.GetComponentsInParent$1$$Boolean$$List$1 = function(t0, a0/*Boolean*/, a1/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 25, false, this, native_t0, a0, a1); 
}
/* Component[] */
_jstype.definition.GetComponentsInParent$$Type$$Boolean = function(a0/*Type*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 29, 26, false, this, a0, a1); 
}
/* T[] */
_jstype.definition.GetComponentsInParent$1$$Boolean = function(t0, a0/*Boolean*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 27, false, this, native_t0, a0); 
}
/* Component[] */
_jstype.definition.GetComponentsInParent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 29, 28, false, this, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInParent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 29, 29, false, this, native_t0); 
}
/* Void */
_jstype.definition.SampleAnimation = function(a0/*AnimationClip*/, a1/*Single*/) { 
    
    return CS.Call(4, 29, 30, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessage$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 29, 31, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SendMessage$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 29, 32, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessage$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 29, 33, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessage$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 29, 34, false, this, a0); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 29, 35, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 29, 36, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 29, 37, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 29, 38, false, this, a0); 
}
/* Void */
_jstype.definition.SetActive = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 29, 39, false, this, a0); 
}
/* static GameObject  */
_jstype.staticDefinition.CreatePrimitive = function(a0/*PrimitiveType*/) { 
    
    return CS.Call(4, 29, 40, true, a0); 
}
/* static GameObject  */
_jstype.staticDefinition.Find = function(a0/*String*/) { 
    
    return CS.Call(4, 29, 41, true, a0); 
}
/* static GameObject[]  */
_jstype.staticDefinition.FindGameObjectsWithTag = function(a0/*String*/) { 
    
    return CS.Call(4, 29, 42, true, a0); 
}
/* static GameObject  */
_jstype.staticDefinition.FindGameObjectWithTag = function(a0/*String*/) { 
    
    return CS.Call(4, 29, 43, true, a0); 
}
/* static GameObject  */
_jstype.staticDefinition.FindWithTag = function(a0/*String*/) { 
    
    return CS.Call(4, 29, 44, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Transform
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Transform", 
    interfaceNames: ["System.Collections.IEnumerable"],
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_position = function() { return CS.Call(2, 30, 0, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 30, 0, false, this, v); }

_jstype.definition.get_localPosition = function() { return CS.Call(2, 30, 1, false, this); }
_jstype.definition.set_localPosition = function(v) { return CS.Call(3, 30, 1, false, this, v); }

_jstype.definition.get_eulerAngles = function() { return CS.Call(2, 30, 2, false, this); }
_jstype.definition.set_eulerAngles = function(v) { return CS.Call(3, 30, 2, false, this, v); }

_jstype.definition.get_localEulerAngles = function() { return CS.Call(2, 30, 3, false, this); }
_jstype.definition.set_localEulerAngles = function(v) { return CS.Call(3, 30, 3, false, this, v); }

_jstype.definition.get_right = function() { return CS.Call(2, 30, 4, false, this); }
_jstype.definition.set_right = function(v) { return CS.Call(3, 30, 4, false, this, v); }

_jstype.definition.get_up = function() { return CS.Call(2, 30, 5, false, this); }
_jstype.definition.set_up = function(v) { return CS.Call(3, 30, 5, false, this, v); }

_jstype.definition.get_forward = function() { return CS.Call(2, 30, 6, false, this); }
_jstype.definition.set_forward = function(v) { return CS.Call(3, 30, 6, false, this, v); }

_jstype.definition.get_rotation = function() { return CS.Call(2, 30, 7, false, this); }
_jstype.definition.set_rotation = function(v) { return CS.Call(3, 30, 7, false, this, v); }

_jstype.definition.get_localRotation = function() { return CS.Call(2, 30, 8, false, this); }
_jstype.definition.set_localRotation = function(v) { return CS.Call(3, 30, 8, false, this, v); }

_jstype.definition.get_localScale = function() { return CS.Call(2, 30, 9, false, this); }
_jstype.definition.set_localScale = function(v) { return CS.Call(3, 30, 9, false, this, v); }

_jstype.definition.get_parent = function() { return CS.Call(2, 30, 10, false, this); }
_jstype.definition.set_parent = function(v) { return CS.Call(3, 30, 10, false, this, v); }

_jstype.definition.get_worldToLocalMatrix = function() { return CS.Call(2, 30, 11, false, this); }
_jstype.definition.set_worldToLocalMatrix = function(v) { return CS.Call(3, 30, 11, false, this, v); }

_jstype.definition.get_localToWorldMatrix = function() { return CS.Call(2, 30, 12, false, this); }
_jstype.definition.set_localToWorldMatrix = function(v) { return CS.Call(3, 30, 12, false, this, v); }

_jstype.definition.get_root = function() { return CS.Call(2, 30, 13, false, this); }
_jstype.definition.set_root = function(v) { return CS.Call(3, 30, 13, false, this, v); }

_jstype.definition.get_childCount = function() { return CS.Call(2, 30, 14, false, this); }
_jstype.definition.set_childCount = function(v) { return CS.Call(3, 30, 14, false, this, v); }

_jstype.definition.get_lossyScale = function() { return CS.Call(2, 30, 15, false, this); }
_jstype.definition.set_lossyScale = function(v) { return CS.Call(3, 30, 15, false, this, v); }

_jstype.definition.get_hasChanged = function() { return CS.Call(2, 30, 16, false, this); }
_jstype.definition.set_hasChanged = function(v) { return CS.Call(3, 30, 16, false, this, v); }

// methods

/* Void */
_jstype.definition.DetachChildren = function() { 
    
    return CS.Call(4, 30, 0, false, this); 
}
/* Transform */
_jstype.definition.Find = function(a0/*String*/) { 
    
    return CS.Call(4, 30, 1, false, this, a0); 
}
/* Transform */
_jstype.definition.FindChild = function(a0/*String*/) { 
    
    return CS.Call(4, 30, 2, false, this, a0); 
}
/* Transform */
_jstype.definition.GetChild = function(a0/*Int32*/) { 
    
    return CS.Call(4, 30, 3, false, this, a0); 
}
/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 30, 4, false, this); 
}
/* Int32 */
_jstype.definition.GetSiblingIndex = function() { 
    
    return CS.Call(4, 30, 5, false, this); 
}
/* Vector3 */
_jstype.definition.InverseTransformDirection$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 30, 6, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.InverseTransformDirection$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 30, 7, false, this, a0); 
}
/* Vector3 */
_jstype.definition.InverseTransformPoint$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 30, 8, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.InverseTransformPoint$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 30, 9, false, this, a0); 
}
/* Vector3 */
_jstype.definition.InverseTransformVector$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 30, 10, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.InverseTransformVector$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 30, 11, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsChildOf = function(a0/*Transform*/) { 
    
    return CS.Call(4, 30, 12, false, this, a0); 
}
/* Void */
_jstype.definition.LookAt$$Transform$$Vector3 = function(a0/*Transform*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 30, 13, false, this, a0, a1); 
}
/* Void */
_jstype.definition.LookAt$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 30, 14, false, this, a0, a1); 
}
/* Void */
_jstype.definition.LookAt$$Transform = function(a0/*Transform*/) { 
    
    return CS.Call(4, 30, 15, false, this, a0); 
}
/* Void */
_jstype.definition.LookAt$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 30, 16, false, this, a0); 
}
/* Void */
_jstype.definition.Rotate$$Single$$Single$$Single$$Space = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Space*/) { 
    
    return CS.Call(4, 30, 17, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.Rotate$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 30, 18, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Rotate$$Vector3$$Single$$Space = function(a0/*Vector3*/, a1/*Single*/, a2/*Space*/) { 
    
    return CS.Call(4, 30, 19, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Rotate$$Vector3$$Space = function(a0/*Vector3*/, a1/*Space*/) { 
    
    return CS.Call(4, 30, 20, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Rotate$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 30, 21, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Rotate$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 30, 22, false, this, a0); 
}
/* Void */
_jstype.definition.RotateAround$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 30, 23, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetAsFirstSibling = function() { 
    
    return CS.Call(4, 30, 24, false, this); 
}
/* Void */
_jstype.definition.SetAsLastSibling = function() { 
    
    return CS.Call(4, 30, 25, false, this); 
}
/* Void */
_jstype.definition.SetParent$$Transform$$Boolean = function(a0/*Transform*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 30, 26, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetParent$$Transform = function(a0/*Transform*/) { 
    
    return CS.Call(4, 30, 27, false, this, a0); 
}
/* Void */
_jstype.definition.SetSiblingIndex = function(a0/*Int32*/) { 
    
    return CS.Call(4, 30, 28, false, this, a0); 
}
/* Vector3 */
_jstype.definition.TransformDirection$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 30, 29, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.TransformDirection$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 30, 30, false, this, a0); 
}
/* Vector3 */
_jstype.definition.TransformPoint$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 30, 31, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.TransformPoint$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 30, 32, false, this, a0); 
}
/* Vector3 */
_jstype.definition.TransformVector$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 30, 33, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.TransformVector$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 30, 34, false, this, a0); 
}
/* Void */
_jstype.definition.Translate$$Single$$Single$$Single$$Space = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Space*/) { 
    
    return CS.Call(4, 30, 35, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.Translate$$Single$$Single$$Single$$Transform = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Transform*/) { 
    
    return CS.Call(4, 30, 36, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.Translate$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 30, 37, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Translate$$Vector3$$Space = function(a0/*Vector3*/, a1/*Space*/) { 
    
    return CS.Call(4, 30, 38, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Translate$$Vector3$$Transform = function(a0/*Vector3*/, a1/*Transform*/) { 
    
    return CS.Call(4, 30, 39, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Translate$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 30, 40, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Vector2
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Vector2", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 31, 0, true, this); }
_jstype.definition.ctor$$Single$$Single = function(a0, a1) { CS.Call(5, 31, 1, true, this, a0, a1); }

// fields

_jstype.staticFields.kEpsilon =  { 
            get: function() { return CS.Call(0, 31, 0, true); }, 
            set: function(v) { return CS.Call(1, 31, 0, true, v); } 
        };

_jstype.fields.x =  { 
            get: function() { return CS.Call(0, 31, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 31, 1, false, this, v); } 
        };

_jstype.fields.y =  { 
            get: function() { return CS.Call(0, 31, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 31, 2, false, this, v); } 
        };

// properties

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 31, 0, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 31, 0, false, this, ind0, v); }

_jstype.definition.get_normalized = function() { return CS.Call(2, 31, 1, false, this); }
_jstype.definition.set_normalized = function(v) { return CS.Call(3, 31, 1, false, this, v); }

_jstype.definition.get_magnitude = function() { return CS.Call(2, 31, 2, false, this); }
_jstype.definition.set_magnitude = function(v) { return CS.Call(3, 31, 2, false, this, v); }

_jstype.definition.get_sqrMagnitude = function() { return CS.Call(2, 31, 3, false, this); }
_jstype.definition.set_sqrMagnitude = function(v) { return CS.Call(3, 31, 3, false, this, v); }

_jstype.staticDefinition.get_zero = function() { return CS.Call(2, 31, 4, true); }
_jstype.staticDefinition.set_zero = function(v) { return CS.Call(3, 31, 4, true, v); }

_jstype.staticDefinition.get_one = function() { return CS.Call(2, 31, 5, true); }
_jstype.staticDefinition.set_one = function(v) { return CS.Call(3, 31, 5, true, v); }

_jstype.staticDefinition.get_up = function() { return CS.Call(2, 31, 6, true); }
_jstype.staticDefinition.set_up = function(v) { return CS.Call(3, 31, 6, true, v); }

_jstype.staticDefinition.get_right = function() { return CS.Call(2, 31, 7, true); }
_jstype.staticDefinition.set_right = function(v) { return CS.Call(3, 31, 7, true, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 31, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 31, 1, false, this); 
}
/* Void */
_jstype.definition.Normalize = function() { 
    
    return CS.Call(4, 31, 2, false, this); 
}
/* Void */
_jstype.definition.Scale$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 31, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 31, 4, false, this, a0, a1); 
}
/* Single */
_jstype.definition.SqrMagnitude = function() { 
    
    return CS.Call(4, 31, 5, false, this); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 31, 6, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 31, 7, false, this); 
}
/* static Single  */
_jstype.staticDefinition.Angle = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 8, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.ClampMagnitude = function(a0/*Vector2*/, a1/*Single*/) { 
    
    return CS.Call(4, 31, 9, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Distance = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 10, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Dot = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 11, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.Lerp = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/) { 
    
    return CS.Call(4, 31, 12, true, a0, a1, a2); 
}
/* static Vector2  */
_jstype.staticDefinition.Max = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 13, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.Min = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 14, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.MoveTowards = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/) { 
    
    return CS.Call(4, 31, 15, true, a0, a1, a2); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Addition = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 16, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Division = function(a0/*Vector2*/, a1/*Single*/) { 
    
    return CS.Call(4, 31, 17, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 18, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Implicit$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 31, 19, true, a0); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Implicit$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 31, 20, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 21, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Multiply$$Vector2$$Single = function(a0/*Vector2*/, a1/*Single*/) { 
    
    return CS.Call(4, 31, 22, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Multiply$$Single$$Vector2 = function(a0/*Single*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 23, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Subtraction = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 24, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.op_UnaryNegation = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 31, 25, true, a0); 
}
/* static Vector2  */
_jstype.staticDefinition.Scale$$Vector2$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 31, 26, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.SmoothDamp$$Vector2$$Vector2$$Vector2$$Single$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Vector2&*/, a3/*Single*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 31, 27, true, a0, a1, a2, a3, a4, a5); 
}
/* static Vector2  */
_jstype.staticDefinition.SmoothDamp$$Vector2$$Vector2$$Vector2$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Vector2&*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 31, 28, true, a0, a1, a2, a3, a4); 
}
/* static Vector2  */
_jstype.staticDefinition.SmoothDamp$$Vector2$$Vector2$$Vector2$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Vector2&*/, a3/*Single*/) { 
    
    return CS.Call(4, 31, 29, true, a0, a1, a2, a3); 
}
/* static Single  */
_jstype.staticDefinition.SqrMagnitude$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 31, 30, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Vector3
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Vector3", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 32, 0, true, this); }
_jstype.definition.ctor$$Single$$Single$$Single = function(a0, a1, a2) { CS.Call(5, 32, 1, true, this, a0, a1, a2); }
_jstype.definition.ctor$$Single$$Single = function(a0, a1) { CS.Call(5, 32, 2, true, this, a0, a1); }

// fields

_jstype.staticFields.kEpsilon =  { 
            get: function() { return CS.Call(0, 32, 0, true); }, 
            set: function(v) { return CS.Call(1, 32, 0, true, v); } 
        };

_jstype.fields.x =  { 
            get: function() { return CS.Call(0, 32, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 32, 1, false, this, v); } 
        };

_jstype.fields.y =  { 
            get: function() { return CS.Call(0, 32, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 32, 2, false, this, v); } 
        };

_jstype.fields.z =  { 
            get: function() { return CS.Call(0, 32, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 32, 3, false, this, v); } 
        };

// properties

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 32, 0, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 32, 0, false, this, ind0, v); }

_jstype.definition.get_normalized = function() { return CS.Call(2, 32, 1, false, this); }
_jstype.definition.set_normalized = function(v) { return CS.Call(3, 32, 1, false, this, v); }

_jstype.definition.get_magnitude = function() { return CS.Call(2, 32, 2, false, this); }
_jstype.definition.set_magnitude = function(v) { return CS.Call(3, 32, 2, false, this, v); }

_jstype.definition.get_sqrMagnitude = function() { return CS.Call(2, 32, 3, false, this); }
_jstype.definition.set_sqrMagnitude = function(v) { return CS.Call(3, 32, 3, false, this, v); }

_jstype.staticDefinition.get_zero = function() { return CS.Call(2, 32, 4, true); }
_jstype.staticDefinition.set_zero = function(v) { return CS.Call(3, 32, 4, true, v); }

_jstype.staticDefinition.get_one = function() { return CS.Call(2, 32, 5, true); }
_jstype.staticDefinition.set_one = function(v) { return CS.Call(3, 32, 5, true, v); }

_jstype.staticDefinition.get_forward = function() { return CS.Call(2, 32, 6, true); }
_jstype.staticDefinition.set_forward = function(v) { return CS.Call(3, 32, 6, true, v); }

_jstype.staticDefinition.get_back = function() { return CS.Call(2, 32, 7, true); }
_jstype.staticDefinition.set_back = function(v) { return CS.Call(3, 32, 7, true, v); }

_jstype.staticDefinition.get_up = function() { return CS.Call(2, 32, 8, true); }
_jstype.staticDefinition.set_up = function(v) { return CS.Call(3, 32, 8, true, v); }

_jstype.staticDefinition.get_down = function() { return CS.Call(2, 32, 9, true); }
_jstype.staticDefinition.set_down = function(v) { return CS.Call(3, 32, 9, true, v); }

_jstype.staticDefinition.get_left = function() { return CS.Call(2, 32, 10, true); }
_jstype.staticDefinition.set_left = function(v) { return CS.Call(3, 32, 10, true, v); }

_jstype.staticDefinition.get_right = function() { return CS.Call(2, 32, 11, true); }
_jstype.staticDefinition.set_right = function(v) { return CS.Call(3, 32, 11, true, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 32, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 32, 1, false, this); 
}
/* Void */
_jstype.definition.Normalize = function() { 
    
    return CS.Call(4, 32, 2, false, this); 
}
/* Void */
_jstype.definition.Scale$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 32, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 32, 4, false, this, a0, a1, a2); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 32, 5, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 32, 6, false, this); 
}
/* static Single  */
_jstype.staticDefinition.Angle = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 7, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.ClampMagnitude = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 32, 8, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Cross = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 9, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Distance = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 10, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Dot = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 11, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Lerp = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 32, 12, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.Magnitude = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 32, 13, true, a0); 
}
/* static Vector3  */
_jstype.staticDefinition.Max = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 14, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Min = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 15, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.MoveTowards = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 32, 16, true, a0, a1, a2); 
}
/* static Vector3  */
_jstype.staticDefinition.Normalize$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 32, 17, true, a0); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Addition = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 18, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Division = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 32, 19, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 20, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 21, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Multiply$$Single$$Vector3 = function(a0/*Single*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 22, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Multiply$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 32, 23, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Subtraction = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 24, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_UnaryNegation = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 32, 25, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.OrthoNormalize$$Vector3$$Vector3$$Vector3 = function(a0/*Vector3&*/, a1/*Vector3&*/, a2/*Vector3&*/) { 
    
    return CS.Call(4, 32, 26, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.OrthoNormalize$$Vector3$$Vector3 = function(a0/*Vector3&*/, a1/*Vector3&*/) { 
    
    return CS.Call(4, 32, 27, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Project = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 28, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.ProjectOnPlane = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 29, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Reflect = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 30, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.RotateTowards = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 32, 31, true, a0, a1, a2, a3); 
}
/* static Vector3  */
_jstype.staticDefinition.Scale$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 32, 32, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Slerp = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 32, 33, true, a0, a1, a2); 
}
/* static Vector3  */
_jstype.staticDefinition.SmoothDamp$$Vector3$$Vector3$$Vector3$$Single$$Single$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Vector3&*/, a3/*Single*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 32, 34, true, a0, a1, a2, a3, a4, a5); 
}
/* static Vector3  */
_jstype.staticDefinition.SmoothDamp$$Vector3$$Vector3$$Vector3$$Single$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Vector3&*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 32, 35, true, a0, a1, a2, a3, a4); 
}
/* static Vector3  */
_jstype.staticDefinition.SmoothDamp$$Vector3$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Vector3&*/, a3/*Single*/) { 
    
    return CS.Call(4, 32, 36, true, a0, a1, a2, a3); 
}
/* static Single  */
_jstype.staticDefinition.SqrMagnitude = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 32, 37, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Vector4
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Vector4", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 33, 0, true, this); }
_jstype.definition.ctor$$Single$$Single$$Single$$Single = function(a0, a1, a2, a3) { CS.Call(5, 33, 1, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Single$$Single$$Single = function(a0, a1, a2) { CS.Call(5, 33, 2, true, this, a0, a1, a2); }
_jstype.definition.ctor$$Single$$Single = function(a0, a1) { CS.Call(5, 33, 3, true, this, a0, a1); }

// fields

_jstype.staticFields.kEpsilon =  { 
            get: function() { return CS.Call(0, 33, 0, true); }, 
            set: function(v) { return CS.Call(1, 33, 0, true, v); } 
        };

_jstype.fields.x =  { 
            get: function() { return CS.Call(0, 33, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 33, 1, false, this, v); } 
        };

_jstype.fields.y =  { 
            get: function() { return CS.Call(0, 33, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 33, 2, false, this, v); } 
        };

_jstype.fields.z =  { 
            get: function() { return CS.Call(0, 33, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 33, 3, false, this, v); } 
        };

_jstype.fields.w =  { 
            get: function() { return CS.Call(0, 33, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 33, 4, false, this, v); } 
        };

// properties

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 33, 0, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 33, 0, false, this, ind0, v); }

_jstype.definition.get_normalized = function() { return CS.Call(2, 33, 1, false, this); }
_jstype.definition.set_normalized = function(v) { return CS.Call(3, 33, 1, false, this, v); }

_jstype.definition.get_magnitude = function() { return CS.Call(2, 33, 2, false, this); }
_jstype.definition.set_magnitude = function(v) { return CS.Call(3, 33, 2, false, this, v); }

_jstype.definition.get_sqrMagnitude = function() { return CS.Call(2, 33, 3, false, this); }
_jstype.definition.set_sqrMagnitude = function(v) { return CS.Call(3, 33, 3, false, this, v); }

_jstype.staticDefinition.get_zero = function() { return CS.Call(2, 33, 4, true); }
_jstype.staticDefinition.set_zero = function(v) { return CS.Call(3, 33, 4, true, v); }

_jstype.staticDefinition.get_one = function() { return CS.Call(2, 33, 5, true); }
_jstype.staticDefinition.set_one = function(v) { return CS.Call(3, 33, 5, true, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 33, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 33, 1, false, this); 
}
/* Void */
_jstype.definition.Normalize = function() { 
    
    return CS.Call(4, 33, 2, false, this); 
}
/* Void */
_jstype.definition.Scale$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 33, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 33, 4, false, this, a0, a1, a2, a3); 
}
/* Single */
_jstype.definition.SqrMagnitude = function() { 
    
    return CS.Call(4, 33, 5, false, this); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 33, 6, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 33, 7, false, this); 
}
/* static Single  */
_jstype.staticDefinition.Distance = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 8, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Dot = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 9, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.Lerp = function(a0/*Vector4*/, a1/*Vector4*/, a2/*Single*/) { 
    
    return CS.Call(4, 33, 10, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.Magnitude = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 33, 11, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.Max = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 12, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.Min = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 13, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.MoveTowards = function(a0/*Vector4*/, a1/*Vector4*/, a2/*Single*/) { 
    
    return CS.Call(4, 33, 14, true, a0, a1, a2); 
}
/* static Vector4  */
_jstype.staticDefinition.Normalize$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 33, 15, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Addition = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 16, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Division = function(a0/*Vector4*/, a1/*Single*/) { 
    
    return CS.Call(4, 33, 17, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 18, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Implicit$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 33, 19, true, a0); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Implicit$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 33, 20, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Implicit$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 33, 21, true, a0); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Implicit$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 33, 22, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 23, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Multiply$$Vector4$$Single = function(a0/*Vector4*/, a1/*Single*/) { 
    
    return CS.Call(4, 33, 24, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Multiply$$Single$$Vector4 = function(a0/*Single*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 25, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Subtraction = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 26, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_UnaryNegation = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 33, 27, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.Project = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 28, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.Scale$$Vector4$$Vector4 = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 33, 29, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.SqrMagnitude$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 33, 30, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Quaternion
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Quaternion", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 34, 0, true, this); }
_jstype.definition.ctor$$Single$$Single$$Single$$Single = function(a0, a1, a2, a3) { CS.Call(5, 34, 1, true, this, a0, a1, a2, a3); }

// fields

_jstype.staticFields.kEpsilon =  { 
            get: function() { return CS.Call(0, 34, 0, true); }, 
            set: function(v) { return CS.Call(1, 34, 0, true, v); } 
        };

_jstype.fields.x =  { 
            get: function() { return CS.Call(0, 34, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 34, 1, false, this, v); } 
        };

_jstype.fields.y =  { 
            get: function() { return CS.Call(0, 34, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 34, 2, false, this, v); } 
        };

_jstype.fields.z =  { 
            get: function() { return CS.Call(0, 34, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 34, 3, false, this, v); } 
        };

_jstype.fields.w =  { 
            get: function() { return CS.Call(0, 34, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 34, 4, false, this, v); } 
        };

// properties

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 34, 0, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 34, 0, false, this, ind0, v); }

_jstype.staticDefinition.get_identity = function() { return CS.Call(2, 34, 1, true); }
_jstype.staticDefinition.set_identity = function(v) { return CS.Call(3, 34, 1, true, v); }

_jstype.definition.get_eulerAngles = function() { return CS.Call(2, 34, 2, false, this); }
_jstype.definition.set_eulerAngles = function(v) { return CS.Call(3, 34, 2, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 34, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 34, 1, false, this); 
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 34, 2, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.SetFromToRotation = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 34, 3, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetLookRotation$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 34, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetLookRotation$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 34, 5, false, this, a0); 
}
/* Void */
_jstype.definition.ToAngleAxis = function(a0/*Single&*/, a1/*Vector3&*/) { 
    
    return CS.Call(4, 34, 6, false, this, a0, a1); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 34, 7, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 34, 8, false, this); 
}
/* static Single  */
_jstype.staticDefinition.Angle = function(a0/*Quaternion*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 34, 9, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.AngleAxis = function(a0/*Single*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 34, 10, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Dot = function(a0/*Quaternion*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 34, 11, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.Euler$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 34, 12, true, a0, a1, a2); 
}
/* static Quaternion  */
_jstype.staticDefinition.Euler$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 34, 13, true, a0); 
}
/* static Quaternion  */
_jstype.staticDefinition.FromToRotation = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 34, 14, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.Inverse = function(a0/*Quaternion*/) { 
    
    return CS.Call(4, 34, 15, true, a0); 
}
/* static Quaternion  */
_jstype.staticDefinition.Lerp = function(a0/*Quaternion*/, a1/*Quaternion*/, a2/*Single*/) { 
    
    return CS.Call(4, 34, 16, true, a0, a1, a2); 
}
/* static Quaternion  */
_jstype.staticDefinition.LookRotation$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 34, 17, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.LookRotation$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 34, 18, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Quaternion*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 34, 19, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Quaternion*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 34, 20, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Multiply$$Quaternion$$Vector3 = function(a0/*Quaternion*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 34, 21, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.op_Multiply$$Quaternion$$Quaternion = function(a0/*Quaternion*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 34, 22, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.RotateTowards = function(a0/*Quaternion*/, a1/*Quaternion*/, a2/*Single*/) { 
    
    return CS.Call(4, 34, 23, true, a0, a1, a2); 
}
/* static Quaternion  */
_jstype.staticDefinition.Slerp = function(a0/*Quaternion*/, a1/*Quaternion*/, a2/*Single*/) { 
    
    return CS.Call(4, 34, 24, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MonoBehaviour
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MonoBehaviour", 
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_useGUILayout = function() { return CS.Call(2, 35, 0, false, this); }
_jstype.definition.set_useGUILayout = function(v) { return CS.Call(3, 35, 0, false, this, v); }

// methods

/* Void */
_jstype.definition.CancelInvoke$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 35, 0, false, this, a0); 
}
/* Void */
_jstype.definition.CancelInvoke = function() { 
    
    return CS.Call(4, 35, 1, false, this); 
}
/* Void */
_jstype.definition.Invoke = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 35, 2, false, this, a0, a1); 
}
/* Void */
_jstype.definition.InvokeRepeating = function(a0/*String*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 35, 3, false, this, a0, a1, a2); 
}
/* Boolean */
_jstype.definition.IsInvoking$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 35, 4, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsInvoking = function() { 
    
    return CS.Call(4, 35, 5, false, this); 
}
/* Coroutine */
_jstype.definition.StartCoroutine$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 35, 6, false, this, a0, a1); 
}
/* Coroutine */
_jstype.definition.StartCoroutine$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 35, 7, false, this, a0); 
}
/* Coroutine */
_jstype.definition.StartCoroutine$$IEnumerator = function(a0/*IEnumerator*/) { 
    
    return CS.Call(4, 35, 8, false, this, a0); 
}
/* Coroutine */
_jstype.definition.StartCoroutine_Auto = function(a0/*IEnumerator*/) { 
    
    return CS.Call(4, 35, 9, false, this, a0); 
}
/* Void */
_jstype.definition.StopAllCoroutines = function() { 
    
    return CS.Call(4, 35, 10, false, this); 
}
/* Void */
_jstype.definition.StopCoroutine$$Coroutine = function(a0/*Coroutine*/) { 
    
    return CS.Call(4, 35, 11, false, this, a0); 
}
/* Void */
_jstype.definition.StopCoroutine$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 35, 12, false, this, a0); 
}
/* Void */
_jstype.definition.StopCoroutine$$IEnumerator = function(a0/*IEnumerator*/) { 
    
    return CS.Call(4, 35, 13, false, this, a0); 
}
/* static Void  */
_jstype.staticDefinition.print = function(a0/*Object*/) { 
    
    return CS.Call(4, 35, 14, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Behaviour
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Behaviour", 
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 36, 0, true, this); }

// fields

// properties

_jstype.definition.get_enabled = function() { return CS.Call(2, 36, 0, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 36, 0, false, this, v); }

_jstype.definition.get_isActiveAndEnabled = function() { return CS.Call(2, 36, 1, false, this); }
_jstype.definition.set_isActiveAndEnabled = function(v) { return CS.Call(3, 36, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Component
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Component", 
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 37, 0, true, this); }

// fields

// properties

_jstype.definition.get_transform = function() { return CS.Call(2, 37, 0, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 37, 0, false, this, v); }

_jstype.definition.get_rigidbody = function() { return CS.Call(2, 37, 1, false, this); }
_jstype.definition.set_rigidbody = function(v) { return CS.Call(3, 37, 1, false, this, v); }

_jstype.definition.get_rigidbody2D = function() { return CS.Call(2, 37, 2, false, this); }
_jstype.definition.set_rigidbody2D = function(v) { return CS.Call(3, 37, 2, false, this, v); }

_jstype.definition.get_camera = function() { return CS.Call(2, 37, 3, false, this); }
_jstype.definition.set_camera = function(v) { return CS.Call(3, 37, 3, false, this, v); }

_jstype.definition.get_light = function() { return CS.Call(2, 37, 4, false, this); }
_jstype.definition.set_light = function(v) { return CS.Call(3, 37, 4, false, this, v); }

_jstype.definition.get_animation = function() { return CS.Call(2, 37, 5, false, this); }
_jstype.definition.set_animation = function(v) { return CS.Call(3, 37, 5, false, this, v); }

_jstype.definition.get_constantForce = function() { return CS.Call(2, 37, 6, false, this); }
_jstype.definition.set_constantForce = function(v) { return CS.Call(3, 37, 6, false, this, v); }

_jstype.definition.get_renderer = function() { return CS.Call(2, 37, 7, false, this); }
_jstype.definition.set_renderer = function(v) { return CS.Call(3, 37, 7, false, this, v); }

_jstype.definition.get_audio = function() { return CS.Call(2, 37, 8, false, this); }
_jstype.definition.set_audio = function(v) { return CS.Call(3, 37, 8, false, this, v); }

_jstype.definition.get_guiText = function() { return CS.Call(2, 37, 9, false, this); }
_jstype.definition.set_guiText = function(v) { return CS.Call(3, 37, 9, false, this, v); }

_jstype.definition.get_guiTexture = function() { return CS.Call(2, 37, 10, false, this); }
_jstype.definition.set_guiTexture = function(v) { return CS.Call(3, 37, 10, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 37, 11, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 37, 11, false, this, v); }

_jstype.definition.get_collider2D = function() { return CS.Call(2, 37, 12, false, this); }
_jstype.definition.set_collider2D = function(v) { return CS.Call(3, 37, 12, false, this, v); }

_jstype.definition.get_hingeJoint = function() { return CS.Call(2, 37, 13, false, this); }
_jstype.definition.set_hingeJoint = function(v) { return CS.Call(3, 37, 13, false, this, v); }

_jstype.definition.get_particleEmitter = function() { return CS.Call(2, 37, 14, false, this); }
_jstype.definition.set_particleEmitter = function(v) { return CS.Call(3, 37, 14, false, this, v); }

_jstype.definition.get_particleSystem = function() { return CS.Call(2, 37, 15, false, this); }
_jstype.definition.set_particleSystem = function(v) { return CS.Call(3, 37, 15, false, this, v); }

_jstype.definition.get_gameObject = function() { return CS.Call(2, 37, 16, false, this); }
_jstype.definition.set_gameObject = function(v) { return CS.Call(3, 37, 16, false, this, v); }

_jstype.definition.get_tag = function() { return CS.Call(2, 37, 17, false, this); }
_jstype.definition.set_tag = function(v) { return CS.Call(3, 37, 17, false, this, v); }

// methods

/* Void */
_jstype.definition.BroadcastMessage$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 37, 0, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 37, 1, false, this, a0, a1); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 37, 2, false, this, a0, a1); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 37, 3, false, this, a0); 
}
/* Boolean */
_jstype.definition.CompareTag = function(a0/*String*/) { 
    
    return CS.Call(4, 37, 4, false, this, a0); 
}
/* Component */
_jstype.definition.GetComponent$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 37, 5, false, this, a0); 
}
/* Component */
_jstype.definition.GetComponent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 37, 6, false, this, a0); 
}
/* T */
_jstype.definition.GetComponent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 7, false, this, native_t0); 
}
/* Component */
_jstype.definition.GetComponentInChildren$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 37, 8, false, this, a0); 
}
/* T */
_jstype.definition.GetComponentInChildren$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 9, false, this, native_t0); 
}
/* Component */
_jstype.definition.GetComponentInParent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 37, 10, false, this, a0); 
}
/* T */
_jstype.definition.GetComponentInParent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 11, false, this, native_t0); 
}
/* Void */
_jstype.definition.GetComponents$$Type$$List$1$Component = function(a0/*Type*/, a1/*List`1*/) { 
    
    return CS.Call(4, 37, 12, false, this, a0, a1); 
}
/* Component[] */
_jstype.definition.GetComponents$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 37, 13, false, this, a0); 
}
/* Void */
_jstype.definition.GetComponents$1$$List$1 = function(t0, a0/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 14, false, this, native_t0, a0); 
}
/* T[] */
_jstype.definition.GetComponents$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 15, false, this, native_t0); 
}
/* Void */
_jstype.definition.GetComponentsInChildren$1$$Boolean$$List$1 = function(t0, a0/*Boolean*/, a1/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 16, false, this, native_t0, a0, a1); 
}
/* Component[] */
_jstype.definition.GetComponentsInChildren$$Type$$Boolean = function(a0/*Type*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 37, 17, false, this, a0, a1); 
}
/* Component[] */
_jstype.definition.GetComponentsInChildren$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 37, 18, false, this, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInChildren$1$$Boolean = function(t0, a0/*Boolean*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 19, false, this, native_t0, a0); 
}
/* Void */
_jstype.definition.GetComponentsInChildren$1$$List$1 = function(t0, a0/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 20, false, this, native_t0, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInChildren$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 21, false, this, native_t0); 
}
/* Component[] */
_jstype.definition.GetComponentsInParent$$Type$$Boolean = function(a0/*Type*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 37, 22, false, this, a0, a1); 
}
/* Component[] */
_jstype.definition.GetComponentsInParent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 37, 23, false, this, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInParent$1$$Boolean = function(t0, a0/*Boolean*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 24, false, this, native_t0, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInParent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 37, 25, false, this, native_t0); 
}
/* Void */
_jstype.definition.SendMessage$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 37, 26, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SendMessage$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 37, 27, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessage$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 37, 28, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessage$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 37, 29, false, this, a0); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 37, 30, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 37, 31, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 37, 32, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 37, 33, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Object
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Object", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 38, 0, true, this); }

// fields

// properties

_jstype.definition.get_name = function() { return CS.Call(2, 38, 0, false, this); }
_jstype.definition.set_name = function(v) { return CS.Call(3, 38, 0, false, this, v); }

_jstype.definition.get_hideFlags = function() { return CS.Call(2, 38, 1, false, this); }
_jstype.definition.set_hideFlags = function(v) { return CS.Call(3, 38, 1, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 38, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 38, 1, false, this); 
}
/* Int32 */
_jstype.definition.GetInstanceID = function() { 
    
    return CS.Call(4, 38, 2, false, this); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 38, 3, false, this); 
}
/* static Void  */
_jstype.staticDefinition.Destroy$$Object$$Single = function(a0/*Object*/, a1/*Single*/) { 
    
    return CS.Call(4, 38, 4, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Destroy$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 38, 5, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.DestroyImmediate$$Object$$Boolean = function(a0/*Object*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 38, 6, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DestroyImmediate$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 38, 7, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.DestroyObject$$Object$$Single = function(a0/*Object*/, a1/*Single*/) { 
    
    return CS.Call(4, 38, 8, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DestroyObject$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 38, 9, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.DontDestroyOnLoad = function(a0/*Object*/) { 
    
    return CS.Call(4, 38, 10, true, a0); 
}
/* static Object  */
_jstype.staticDefinition.FindObjectOfType$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 38, 11, true, a0); 
}
/* static T  */
_jstype.staticDefinition.FindObjectOfType$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 38, 12, true, native_t0); 
}
/* static Object[]  */
_jstype.staticDefinition.FindObjectsOfType$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 38, 13, true, a0); 
}
/* static T[]  */
_jstype.staticDefinition.FindObjectsOfType$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 38, 14, true, native_t0); 
}
/* static Object  */
_jstype.staticDefinition.Instantiate$$Object$$Vector3$$Quaternion = function(a0/*Object*/, a1/*Vector3*/, a2/*Quaternion*/) { 
    
    return CS.Call(4, 38, 15, true, a0, a1, a2); 
}
/* static Object  */
_jstype.staticDefinition.Instantiate$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 38, 16, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Object*/, a1/*Object*/) { 
    
    return CS.Call(4, 38, 17, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Implicit = function(a0/*Object*/) { 
    
    return CS.Call(4, 38, 18, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Object*/, a1/*Object*/) { 
    
    return CS.Call(4, 38, 19, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$YieldInstruction
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.YieldInstruction", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 39, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WaitForSeconds
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.WaitForSeconds", 
    baseTypeName: "UnityEngine.YieldInstruction"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function(a0) { CS.Call(5, 40, 0, true, this, a0); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WWW
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.WWW", 
    interfaceNames: ["System.IDisposable"],
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 41, 0, true, this, a0); }
_jstype.definition.ctor$$String$$WWWForm = function(a0, a1) { CS.Call(5, 41, 1, true, this, a0, a1); }
_jstype.definition.ctor$$String$$Byte$Array = function(a0, a1) { CS.Call(5, 41, 2, true, this, a0, a1); }
_jstype.definition.ctor$$String$$Byte$Array$$Dictionary$2$String$String = function(a0, a1, a2) { CS.Call(5, 41, 3, true, this, a0, a1, a2); }

// fields

// properties

_jstype.definition.get_responseHeaders = function() { return CS.Call(2, 41, 0, false, this); }
_jstype.definition.set_responseHeaders = function(v) { return CS.Call(3, 41, 0, false, this, v); }

_jstype.definition.get_text = function() { return CS.Call(2, 41, 1, false, this); }
_jstype.definition.set_text = function(v) { return CS.Call(3, 41, 1, false, this, v); }

_jstype.definition.get_bytes = function() { return CS.Call(2, 41, 2, false, this); }
_jstype.definition.set_bytes = function(v) { return CS.Call(3, 41, 2, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 41, 3, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 41, 3, false, this, v); }

_jstype.definition.get_error = function() { return CS.Call(2, 41, 4, false, this); }
_jstype.definition.set_error = function(v) { return CS.Call(3, 41, 4, false, this, v); }

_jstype.definition.get_texture = function() { return CS.Call(2, 41, 5, false, this); }
_jstype.definition.set_texture = function(v) { return CS.Call(3, 41, 5, false, this, v); }

_jstype.definition.get_textureNonReadable = function() { return CS.Call(2, 41, 6, false, this); }
_jstype.definition.set_textureNonReadable = function(v) { return CS.Call(3, 41, 6, false, this, v); }

_jstype.definition.get_audioClip = function() { return CS.Call(2, 41, 7, false, this); }
_jstype.definition.set_audioClip = function(v) { return CS.Call(3, 41, 7, false, this, v); }

_jstype.definition.get_isDone = function() { return CS.Call(2, 41, 8, false, this); }
_jstype.definition.set_isDone = function(v) { return CS.Call(3, 41, 8, false, this, v); }

_jstype.definition.get_progress = function() { return CS.Call(2, 41, 9, false, this); }
_jstype.definition.set_progress = function(v) { return CS.Call(3, 41, 9, false, this, v); }

_jstype.definition.get_uploadProgress = function() { return CS.Call(2, 41, 10, false, this); }
_jstype.definition.set_uploadProgress = function(v) { return CS.Call(3, 41, 10, false, this, v); }

_jstype.definition.get_bytesDownloaded = function() { return CS.Call(2, 41, 11, false, this); }
_jstype.definition.set_bytesDownloaded = function(v) { return CS.Call(3, 41, 11, false, this, v); }

_jstype.definition.get_url = function() { return CS.Call(2, 41, 12, false, this); }
_jstype.definition.set_url = function(v) { return CS.Call(3, 41, 12, false, this, v); }

_jstype.definition.get_assetBundle = function() { return CS.Call(2, 41, 13, false, this); }
_jstype.definition.set_assetBundle = function(v) { return CS.Call(3, 41, 13, false, this, v); }

_jstype.definition.get_threadPriority = function() { return CS.Call(2, 41, 14, false, this); }
_jstype.definition.set_threadPriority = function(v) { return CS.Call(3, 41, 14, false, this, v); }

// methods

/* Void */
_jstype.definition.Dispose = function() { 
    
    return CS.Call(4, 41, 0, false, this); 
}
/* AudioClip */
_jstype.definition.GetAudioClip$$Boolean$$Boolean$$AudioType = function(a0/*Boolean*/, a1/*Boolean*/, a2/*AudioType*/) { 
    
    return CS.Call(4, 41, 1, false, this, a0, a1, a2); 
}
/* AudioClip */
_jstype.definition.GetAudioClip$$Boolean$$Boolean = function(a0/*Boolean*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 41, 2, false, this, a0, a1); 
}
/* AudioClip */
_jstype.definition.GetAudioClip$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 41, 3, false, this, a0); 
}
/* AudioClip */
_jstype.definition.GetAudioClipCompressed$$Boolean$$AudioType = function(a0/*Boolean*/, a1/*AudioType*/) { 
    
    return CS.Call(4, 41, 4, false, this, a0, a1); 
}
/* AudioClip */
_jstype.definition.GetAudioClipCompressed$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 41, 5, false, this, a0); 
}
/* AudioClip */
_jstype.definition.GetAudioClipCompressed = function() { 
    
    return CS.Call(4, 41, 6, false, this); 
}
/* Void */
_jstype.definition.InitWWW = function(a0/*String*/, a1/*Byte[]*/, a2/*String[]*/) { 
    
    return CS.Call(4, 41, 7, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.LoadImageIntoTexture = function(a0/*Texture2D*/) { 
    
    return CS.Call(4, 41, 8, false, this, a0); 
}
/* Void */
_jstype.definition.LoadUnityWeb = function() { 
    
    return CS.Call(4, 41, 9, false, this); 
}
/* static String  */
_jstype.staticDefinition.EscapeURL$$String$$Encoding = function(a0/*String*/, a1/*Encoding*/) { 
    
    return CS.Call(4, 41, 10, true, a0, a1); 
}
/* static String  */
_jstype.staticDefinition.EscapeURL$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 41, 11, true, a0); 
}
/* static WWW  */
_jstype.staticDefinition.LoadFromCacheOrDownload$$String$$Int32$$UInt32 = function(a0/*String*/, a1/*Int32*/, a2/*UInt32*/) { 
    
    return CS.Call(4, 41, 12, true, a0, a1, a2); 
}
/* static WWW  */
_jstype.staticDefinition.LoadFromCacheOrDownload$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 41, 13, true, a0, a1); 
}
/* static String  */
_jstype.staticDefinition.UnEscapeURL$$String$$Encoding = function(a0/*String*/, a1/*Encoding*/) { 
    
    return CS.Call(4, 41, 14, true, a0, a1); 
}
/* static String  */
_jstype.staticDefinition.UnEscapeURL$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 41, 15, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Application
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Application", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 42, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_loadedLevel = function() { return CS.Call(2, 42, 0, true); }
_jstype.staticDefinition.set_loadedLevel = function(v) { return CS.Call(3, 42, 0, true, v); }

_jstype.staticDefinition.get_loadedLevelName = function() { return CS.Call(2, 42, 1, true); }
_jstype.staticDefinition.set_loadedLevelName = function(v) { return CS.Call(3, 42, 1, true, v); }

_jstype.staticDefinition.get_isLoadingLevel = function() { return CS.Call(2, 42, 2, true); }
_jstype.staticDefinition.set_isLoadingLevel = function(v) { return CS.Call(3, 42, 2, true, v); }

_jstype.staticDefinition.get_levelCount = function() { return CS.Call(2, 42, 3, true); }
_jstype.staticDefinition.set_levelCount = function(v) { return CS.Call(3, 42, 3, true, v); }

_jstype.staticDefinition.get_streamedBytes = function() { return CS.Call(2, 42, 4, true); }
_jstype.staticDefinition.set_streamedBytes = function(v) { return CS.Call(3, 42, 4, true, v); }

_jstype.staticDefinition.get_isPlaying = function() { return CS.Call(2, 42, 5, true); }
_jstype.staticDefinition.set_isPlaying = function(v) { return CS.Call(3, 42, 5, true, v); }

_jstype.staticDefinition.get_isEditor = function() { return CS.Call(2, 42, 6, true); }
_jstype.staticDefinition.set_isEditor = function(v) { return CS.Call(3, 42, 6, true, v); }

_jstype.staticDefinition.get_isWebPlayer = function() { return CS.Call(2, 42, 7, true); }
_jstype.staticDefinition.set_isWebPlayer = function(v) { return CS.Call(3, 42, 7, true, v); }

_jstype.staticDefinition.get_platform = function() { return CS.Call(2, 42, 8, true); }
_jstype.staticDefinition.set_platform = function(v) { return CS.Call(3, 42, 8, true, v); }

_jstype.staticDefinition.get_isMobilePlatform = function() { return CS.Call(2, 42, 9, true); }
_jstype.staticDefinition.set_isMobilePlatform = function(v) { return CS.Call(3, 42, 9, true, v); }

_jstype.staticDefinition.get_isConsolePlatform = function() { return CS.Call(2, 42, 10, true); }
_jstype.staticDefinition.set_isConsolePlatform = function(v) { return CS.Call(3, 42, 10, true, v); }

_jstype.staticDefinition.get_runInBackground = function() { return CS.Call(2, 42, 11, true); }
_jstype.staticDefinition.set_runInBackground = function(v) { return CS.Call(3, 42, 11, true, v); }

_jstype.staticDefinition.get_dataPath = function() { return CS.Call(2, 42, 12, true); }
_jstype.staticDefinition.set_dataPath = function(v) { return CS.Call(3, 42, 12, true, v); }

_jstype.staticDefinition.get_streamingAssetsPath = function() { return CS.Call(2, 42, 13, true); }
_jstype.staticDefinition.set_streamingAssetsPath = function(v) { return CS.Call(3, 42, 13, true, v); }

_jstype.staticDefinition.get_persistentDataPath = function() { return CS.Call(2, 42, 14, true); }
_jstype.staticDefinition.set_persistentDataPath = function(v) { return CS.Call(3, 42, 14, true, v); }

_jstype.staticDefinition.get_temporaryCachePath = function() { return CS.Call(2, 42, 15, true); }
_jstype.staticDefinition.set_temporaryCachePath = function(v) { return CS.Call(3, 42, 15, true, v); }

_jstype.staticDefinition.get_srcValue = function() { return CS.Call(2, 42, 16, true); }
_jstype.staticDefinition.set_srcValue = function(v) { return CS.Call(3, 42, 16, true, v); }

_jstype.staticDefinition.get_absoluteURL = function() { return CS.Call(2, 42, 17, true); }
_jstype.staticDefinition.set_absoluteURL = function(v) { return CS.Call(3, 42, 17, true, v); }

_jstype.staticDefinition.get_unityVersion = function() { return CS.Call(2, 42, 18, true); }
_jstype.staticDefinition.set_unityVersion = function(v) { return CS.Call(3, 42, 18, true, v); }

_jstype.staticDefinition.get_webSecurityEnabled = function() { return CS.Call(2, 42, 19, true); }
_jstype.staticDefinition.set_webSecurityEnabled = function(v) { return CS.Call(3, 42, 19, true, v); }

_jstype.staticDefinition.get_webSecurityHostUrl = function() { return CS.Call(2, 42, 20, true); }
_jstype.staticDefinition.set_webSecurityHostUrl = function(v) { return CS.Call(3, 42, 20, true, v); }

_jstype.staticDefinition.get_targetFrameRate = function() { return CS.Call(2, 42, 21, true); }
_jstype.staticDefinition.set_targetFrameRate = function(v) { return CS.Call(3, 42, 21, true, v); }

_jstype.staticDefinition.get_systemLanguage = function() { return CS.Call(2, 42, 22, true); }
_jstype.staticDefinition.set_systemLanguage = function(v) { return CS.Call(3, 42, 22, true, v); }

_jstype.staticDefinition.get_backgroundLoadingPriority = function() { return CS.Call(2, 42, 23, true); }
_jstype.staticDefinition.set_backgroundLoadingPriority = function(v) { return CS.Call(3, 42, 23, true, v); }

_jstype.staticDefinition.get_internetReachability = function() { return CS.Call(2, 42, 24, true); }
_jstype.staticDefinition.set_internetReachability = function(v) { return CS.Call(3, 42, 24, true, v); }

_jstype.staticDefinition.get_genuine = function() { return CS.Call(2, 42, 25, true); }
_jstype.staticDefinition.set_genuine = function(v) { return CS.Call(3, 42, 25, true, v); }

_jstype.staticDefinition.get_genuineCheckAvailable = function() { return CS.Call(2, 42, 26, true); }
_jstype.staticDefinition.set_genuineCheckAvailable = function(v) { return CS.Call(3, 42, 26, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.CancelQuit = function() { 
    
    return CS.Call(4, 42, 0, true); 
}
/* static Boolean  */
_jstype.staticDefinition.CanStreamedLevelBeLoaded$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 42, 1, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.CanStreamedLevelBeLoaded$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 42, 2, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.CaptureScreenshot$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 42, 3, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.CaptureScreenshot$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 42, 4, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.ExternalCall = function(a0/*String*/, a1/*Object[]*/) { 
    
    return CS.Call(4, 42, 5, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.GetStreamProgressForLevel$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 42, 6, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetStreamProgressForLevel$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 42, 7, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.HasProLicense = function() { 
    
    return CS.Call(4, 42, 8, true); 
}
/* static Boolean  */
_jstype.staticDefinition.HasUserAuthorization = function(a0/*UserAuthorization*/) { 
    
    return CS.Call(4, 42, 9, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LoadLevel$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 42, 10, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LoadLevel$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 42, 11, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LoadLevelAdditive$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 42, 12, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LoadLevelAdditive$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 42, 13, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.LoadLevelAdditiveAsync$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 42, 14, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.LoadLevelAdditiveAsync$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 42, 15, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.LoadLevelAsync$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 42, 16, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.LoadLevelAsync$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 42, 17, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.OpenURL = function(a0/*String*/) { 
    
    return CS.Call(4, 42, 18, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.Quit = function() { 
    
    return CS.Call(4, 42, 19, true); 
}
/* static Void  */
_jstype.staticDefinition.RegisterLogCallback = function(a0/*LogCallback*/) { 
    
    return CS.Call(4, 42, 20, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.RegisterLogCallbackThreaded = function(a0/*LogCallback*/) { 
    
    return CS.Call(4, 42, 21, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.RequestUserAuthorization = function(a0/*UserAuthorization*/) { 
    
    return CS.Call(4, 42, 22, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Time
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Time", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 43, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_time = function() { return CS.Call(2, 43, 0, true); }
_jstype.staticDefinition.set_time = function(v) { return CS.Call(3, 43, 0, true, v); }

_jstype.staticDefinition.get_timeSinceLevelLoad = function() { return CS.Call(2, 43, 1, true); }
_jstype.staticDefinition.set_timeSinceLevelLoad = function(v) { return CS.Call(3, 43, 1, true, v); }

_jstype.staticDefinition.get_deltaTime = function() { return CS.Call(2, 43, 2, true); }
_jstype.staticDefinition.set_deltaTime = function(v) { return CS.Call(3, 43, 2, true, v); }

_jstype.staticDefinition.get_fixedTime = function() { return CS.Call(2, 43, 3, true); }
_jstype.staticDefinition.set_fixedTime = function(v) { return CS.Call(3, 43, 3, true, v); }

_jstype.staticDefinition.get_unscaledTime = function() { return CS.Call(2, 43, 4, true); }
_jstype.staticDefinition.set_unscaledTime = function(v) { return CS.Call(3, 43, 4, true, v); }

_jstype.staticDefinition.get_unscaledDeltaTime = function() { return CS.Call(2, 43, 5, true); }
_jstype.staticDefinition.set_unscaledDeltaTime = function(v) { return CS.Call(3, 43, 5, true, v); }

_jstype.staticDefinition.get_fixedDeltaTime = function() { return CS.Call(2, 43, 6, true); }
_jstype.staticDefinition.set_fixedDeltaTime = function(v) { return CS.Call(3, 43, 6, true, v); }

_jstype.staticDefinition.get_maximumDeltaTime = function() { return CS.Call(2, 43, 7, true); }
_jstype.staticDefinition.set_maximumDeltaTime = function(v) { return CS.Call(3, 43, 7, true, v); }

_jstype.staticDefinition.get_smoothDeltaTime = function() { return CS.Call(2, 43, 8, true); }
_jstype.staticDefinition.set_smoothDeltaTime = function(v) { return CS.Call(3, 43, 8, true, v); }

_jstype.staticDefinition.get_timeScale = function() { return CS.Call(2, 43, 9, true); }
_jstype.staticDefinition.set_timeScale = function(v) { return CS.Call(3, 43, 9, true, v); }

_jstype.staticDefinition.get_frameCount = function() { return CS.Call(2, 43, 10, true); }
_jstype.staticDefinition.set_frameCount = function(v) { return CS.Call(3, 43, 10, true, v); }

_jstype.staticDefinition.get_renderedFrameCount = function() { return CS.Call(2, 43, 11, true); }
_jstype.staticDefinition.set_renderedFrameCount = function(v) { return CS.Call(3, 43, 11, true, v); }

_jstype.staticDefinition.get_realtimeSinceStartup = function() { return CS.Call(2, 43, 12, true); }
_jstype.staticDefinition.set_realtimeSinceStartup = function(v) { return CS.Call(3, 43, 12, true, v); }

_jstype.staticDefinition.get_captureFramerate = function() { return CS.Call(2, 43, 13, true); }
_jstype.staticDefinition.set_captureFramerate = function(v) { return CS.Call(3, 43, 13, true, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Resources
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Resources", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 44, 0, true, this); }

// fields

// properties

// methods

/* static Object[]  */
_jstype.staticDefinition.FindObjectsOfTypeAll$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 44, 0, true, a0); 
}
/* static T[]  */
_jstype.staticDefinition.FindObjectsOfTypeAll$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 44, 1, true, native_t0); 
}
/* static Object  */
_jstype.staticDefinition.GetBuiltinResource$$Type$$String = function(a0/*Type*/, a1/*String*/) { 
    
    return CS.Call(4, 44, 2, true, a0, a1); 
}
/* static T  */
_jstype.staticDefinition.GetBuiltinResource$1$$String = function(t0, a0/*String*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 44, 3, true, native_t0, a0); 
}
/* static Object  */
_jstype.staticDefinition.Load$$String$$Type = function(a0/*String*/, a1/*Type*/) { 
    
    return CS.Call(4, 44, 4, true, a0, a1); 
}
/* static Object  */
_jstype.staticDefinition.Load$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 44, 5, true, a0); 
}
/* static T  */
_jstype.staticDefinition.Load$1$$String = function(t0, a0/*String*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 44, 6, true, native_t0, a0); 
}
/* static Object[]  */
_jstype.staticDefinition.LoadAll$$String$$Type = function(a0/*String*/, a1/*Type*/) { 
    
    return CS.Call(4, 44, 7, true, a0, a1); 
}
/* static T[]  */
_jstype.staticDefinition.LoadAll$1$$String = function(t0, a0/*String*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 44, 8, true, native_t0, a0); 
}
/* static Object[]  */
_jstype.staticDefinition.LoadAll$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 44, 9, true, a0); 
}
/* static Object  */
_jstype.staticDefinition.LoadAssetAtPath$$String$$Type = function(a0/*String*/, a1/*Type*/) { 
    
    return CS.Call(4, 44, 10, true, a0, a1); 
}
/* static T  */
_jstype.staticDefinition.LoadAssetAtPath$1$$String = function(t0, a0/*String*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 44, 11, true, native_t0, a0); 
}
/* static ResourceRequest  */
_jstype.staticDefinition.LoadAsync$$String$$Type = function(a0/*String*/, a1/*Type*/) { 
    
    return CS.Call(4, 44, 12, true, a0, a1); 
}
/* static ResourceRequest  */
_jstype.staticDefinition.LoadAsync$1$$String = function(t0, a0/*String*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 44, 13, true, native_t0, a0); 
}
/* static ResourceRequest  */
_jstype.staticDefinition.LoadAsync$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 44, 14, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.UnloadAsset = function(a0/*Object*/) { 
    
    return CS.Call(4, 44, 15, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.UnloadUnusedAssets = function() { 
    
    return CS.Call(4, 44, 16, true); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TextAsset
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.TextAsset", 
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 45, 0, true, this); }

// fields

// properties

_jstype.definition.get_text = function() { return CS.Call(2, 45, 0, false, this); }
_jstype.definition.set_text = function(v) { return CS.Call(3, 45, 0, false, this, v); }

_jstype.definition.get_bytes = function() { return CS.Call(2, 45, 1, false, this); }
_jstype.definition.set_bytes = function(v) { return CS.Call(3, 45, 1, false, this, v); }

// methods

/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 45, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Random
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Random", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 46, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_seed = function() { return CS.Call(2, 46, 0, true); }
_jstype.staticDefinition.set_seed = function(v) { return CS.Call(3, 46, 0, true, v); }

_jstype.staticDefinition.get_value = function() { return CS.Call(2, 46, 1, true); }
_jstype.staticDefinition.set_value = function(v) { return CS.Call(3, 46, 1, true, v); }

_jstype.staticDefinition.get_insideUnitSphere = function() { return CS.Call(2, 46, 2, true); }
_jstype.staticDefinition.set_insideUnitSphere = function(v) { return CS.Call(3, 46, 2, true, v); }

_jstype.staticDefinition.get_insideUnitCircle = function() { return CS.Call(2, 46, 3, true); }
_jstype.staticDefinition.set_insideUnitCircle = function(v) { return CS.Call(3, 46, 3, true, v); }

_jstype.staticDefinition.get_onUnitSphere = function() { return CS.Call(2, 46, 4, true); }
_jstype.staticDefinition.set_onUnitSphere = function(v) { return CS.Call(3, 46, 4, true, v); }

_jstype.staticDefinition.get_rotation = function() { return CS.Call(2, 46, 5, true); }
_jstype.staticDefinition.set_rotation = function(v) { return CS.Call(3, 46, 5, true, v); }

_jstype.staticDefinition.get_rotationUniform = function() { return CS.Call(2, 46, 6, true); }
_jstype.staticDefinition.set_rotationUniform = function(v) { return CS.Call(3, 46, 6, true, v); }

// methods

/* static Int32  */
_jstype.staticDefinition.Range$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 46, 0, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Range$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 46, 1, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LayerMask
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.LayerMask", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 47, 0, true, this); }

// fields

// properties

_jstype.definition.get_value = function() { return CS.Call(2, 47, 0, false, this); }
_jstype.definition.set_value = function(v) { return CS.Call(3, 47, 0, false, this, v); }

// methods

/* static Int32  */
_jstype.staticDefinition.GetMask = function(a0/*String[]*/) { 
    
    return CS.Call(4, 47, 0, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static String  */
_jstype.staticDefinition.LayerToName = function(a0/*Int32*/) { 
    
    return CS.Call(4, 47, 1, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.NameToLayer = function(a0/*String*/) { 
    
    return CS.Call(4, 47, 2, true, a0); 
}
/* static LayerMask  */
_jstype.staticDefinition.op_Implicit$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 47, 3, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.op_Implicit$$LayerMask = function(a0/*LayerMask*/) { 
    
    return CS.Call(4, 47, 4, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioClip
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioClip", 
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 48, 0, true, this); }

// fields

// properties

_jstype.definition.get_length = function() { return CS.Call(2, 48, 0, false, this); }
_jstype.definition.set_length = function(v) { return CS.Call(3, 48, 0, false, this, v); }

_jstype.definition.get_samples = function() { return CS.Call(2, 48, 1, false, this); }
_jstype.definition.set_samples = function(v) { return CS.Call(3, 48, 1, false, this, v); }

_jstype.definition.get_channels = function() { return CS.Call(2, 48, 2, false, this); }
_jstype.definition.set_channels = function(v) { return CS.Call(3, 48, 2, false, this, v); }

_jstype.definition.get_frequency = function() { return CS.Call(2, 48, 3, false, this); }
_jstype.definition.set_frequency = function(v) { return CS.Call(3, 48, 3, false, this, v); }

_jstype.definition.get_isReadyToPlay = function() { return CS.Call(2, 48, 4, false, this); }
_jstype.definition.set_isReadyToPlay = function(v) { return CS.Call(3, 48, 4, false, this, v); }

// methods

/* Void */
_jstype.definition.GetData = function(a0/*Single[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 48, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetData = function(a0/*Single[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 48, 1, false, this, a0, a1); 
}
/* static AudioClip  */
_jstype.staticDefinition.Create$$String$$Int32$$Int32$$Int32$$Boolean$$Boolean$$PCMReaderCallback$$PCMSetPositionCallback = function(a0/*String*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/, a4/*Boolean*/, a5/*Boolean*/, a6/*PCMReaderCallback*/, a7/*PCMSetPositionCallback*/) { 
    
    return CS.Call(4, 48, 2, true, a0, a1, a2, a3, a4, a5, a6, a7); 
}
/* static AudioClip  */
_jstype.staticDefinition.Create$$String$$Int32$$Int32$$Int32$$Boolean$$Boolean$$PCMReaderCallback = function(a0/*String*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/, a4/*Boolean*/, a5/*Boolean*/, a6/*PCMReaderCallback*/) { 
    
    return CS.Call(4, 48, 3, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static AudioClip  */
_jstype.staticDefinition.Create$$String$$Int32$$Int32$$Int32$$Boolean$$Boolean = function(a0/*String*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/, a4/*Boolean*/, a5/*Boolean*/) { 
    
    return CS.Call(4, 48, 4, true, a0, a1, a2, a3, a4, a5); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioSource
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioSource", 
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 49, 0, true, this); }

// fields

// properties

_jstype.definition.get_volume = function() { return CS.Call(2, 49, 0, false, this); }
_jstype.definition.set_volume = function(v) { return CS.Call(3, 49, 0, false, this, v); }

_jstype.definition.get_pitch = function() { return CS.Call(2, 49, 1, false, this); }
_jstype.definition.set_pitch = function(v) { return CS.Call(3, 49, 1, false, this, v); }

_jstype.definition.get_time = function() { return CS.Call(2, 49, 2, false, this); }
_jstype.definition.set_time = function(v) { return CS.Call(3, 49, 2, false, this, v); }

_jstype.definition.get_timeSamples = function() { return CS.Call(2, 49, 3, false, this); }
_jstype.definition.set_timeSamples = function(v) { return CS.Call(3, 49, 3, false, this, v); }

_jstype.definition.get_clip = function() { return CS.Call(2, 49, 4, false, this); }
_jstype.definition.set_clip = function(v) { return CS.Call(3, 49, 4, false, this, v); }

_jstype.definition.get_isPlaying = function() { return CS.Call(2, 49, 5, false, this); }
_jstype.definition.set_isPlaying = function(v) { return CS.Call(3, 49, 5, false, this, v); }

_jstype.definition.get_loop = function() { return CS.Call(2, 49, 6, false, this); }
_jstype.definition.set_loop = function(v) { return CS.Call(3, 49, 6, false, this, v); }

_jstype.definition.get_ignoreListenerVolume = function() { return CS.Call(2, 49, 7, false, this); }
_jstype.definition.set_ignoreListenerVolume = function(v) { return CS.Call(3, 49, 7, false, this, v); }

_jstype.definition.get_playOnAwake = function() { return CS.Call(2, 49, 8, false, this); }
_jstype.definition.set_playOnAwake = function(v) { return CS.Call(3, 49, 8, false, this, v); }

_jstype.definition.get_ignoreListenerPause = function() { return CS.Call(2, 49, 9, false, this); }
_jstype.definition.set_ignoreListenerPause = function(v) { return CS.Call(3, 49, 9, false, this, v); }

_jstype.definition.get_velocityUpdateMode = function() { return CS.Call(2, 49, 10, false, this); }
_jstype.definition.set_velocityUpdateMode = function(v) { return CS.Call(3, 49, 10, false, this, v); }

_jstype.definition.get_panLevel = function() { return CS.Call(2, 49, 11, false, this); }
_jstype.definition.set_panLevel = function(v) { return CS.Call(3, 49, 11, false, this, v); }

_jstype.definition.get_bypassEffects = function() { return CS.Call(2, 49, 12, false, this); }
_jstype.definition.set_bypassEffects = function(v) { return CS.Call(3, 49, 12, false, this, v); }

_jstype.definition.get_bypassListenerEffects = function() { return CS.Call(2, 49, 13, false, this); }
_jstype.definition.set_bypassListenerEffects = function(v) { return CS.Call(3, 49, 13, false, this, v); }

_jstype.definition.get_bypassReverbZones = function() { return CS.Call(2, 49, 14, false, this); }
_jstype.definition.set_bypassReverbZones = function(v) { return CS.Call(3, 49, 14, false, this, v); }

_jstype.definition.get_dopplerLevel = function() { return CS.Call(2, 49, 15, false, this); }
_jstype.definition.set_dopplerLevel = function(v) { return CS.Call(3, 49, 15, false, this, v); }

_jstype.definition.get_spread = function() { return CS.Call(2, 49, 16, false, this); }
_jstype.definition.set_spread = function(v) { return CS.Call(3, 49, 16, false, this, v); }

_jstype.definition.get_priority = function() { return CS.Call(2, 49, 17, false, this); }
_jstype.definition.set_priority = function(v) { return CS.Call(3, 49, 17, false, this, v); }

_jstype.definition.get_mute = function() { return CS.Call(2, 49, 18, false, this); }
_jstype.definition.set_mute = function(v) { return CS.Call(3, 49, 18, false, this, v); }

_jstype.definition.get_minDistance = function() { return CS.Call(2, 49, 19, false, this); }
_jstype.definition.set_minDistance = function(v) { return CS.Call(3, 49, 19, false, this, v); }

_jstype.definition.get_maxDistance = function() { return CS.Call(2, 49, 20, false, this); }
_jstype.definition.set_maxDistance = function(v) { return CS.Call(3, 49, 20, false, this, v); }

_jstype.definition.get_pan = function() { return CS.Call(2, 49, 21, false, this); }
_jstype.definition.set_pan = function(v) { return CS.Call(3, 49, 21, false, this, v); }

_jstype.definition.get_rolloffMode = function() { return CS.Call(2, 49, 22, false, this); }
_jstype.definition.set_rolloffMode = function(v) { return CS.Call(3, 49, 22, false, this, v); }

// methods

/* Void */
_jstype.definition.GetOutputData$$Single$Array$$Int32 = function(a0/*Single[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 49, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.GetSpectrumData$$Single$Array$$Int32$$FFTWindow = function(a0/*Single[]*/, a1/*Int32*/, a2/*FFTWindow*/) { 
    
    return CS.Call(4, 49, 1, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Pause = function() { 
    
    return CS.Call(4, 49, 2, false, this); 
}
/* Void */
_jstype.definition.Play$$UInt64 = function(a0/*UInt64*/) { 
    
    return CS.Call(4, 49, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Play = function() { 
    
    return CS.Call(4, 49, 4, false, this); 
}
/* Void */
_jstype.definition.PlayDelayed = function(a0/*Single*/) { 
    
    return CS.Call(4, 49, 5, false, this, a0); 
}
/* Void */
_jstype.definition.PlayOneShot$$AudioClip$$Single = function(a0/*AudioClip*/, a1/*Single*/) { 
    
    return CS.Call(4, 49, 6, false, this, a0, a1); 
}
/* Void */
_jstype.definition.PlayOneShot$$AudioClip = function(a0/*AudioClip*/) { 
    
    return CS.Call(4, 49, 7, false, this, a0); 
}
/* Void */
_jstype.definition.PlayScheduled = function(a0/*Double*/) { 
    
    return CS.Call(4, 49, 8, false, this, a0); 
}
/* Void */
_jstype.definition.SetScheduledEndTime = function(a0/*Double*/) { 
    
    return CS.Call(4, 49, 9, false, this, a0); 
}
/* Void */
_jstype.definition.SetScheduledStartTime = function(a0/*Double*/) { 
    
    return CS.Call(4, 49, 10, false, this, a0); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 49, 11, false, this); 
}
/* static Void  */
_jstype.staticDefinition.PlayClipAtPoint$$AudioClip$$Vector3$$Single = function(a0/*AudioClip*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 49, 12, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.PlayClipAtPoint$$AudioClip$$Vector3 = function(a0/*AudioClip*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 49, 13, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ParticleSystem
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ParticleSystem", 
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 50, 0, true, this); }

// fields

// properties

_jstype.definition.get_startDelay = function() { return CS.Call(2, 50, 0, false, this); }
_jstype.definition.set_startDelay = function(v) { return CS.Call(3, 50, 0, false, this, v); }

_jstype.definition.get_isPlaying = function() { return CS.Call(2, 50, 1, false, this); }
_jstype.definition.set_isPlaying = function(v) { return CS.Call(3, 50, 1, false, this, v); }

_jstype.definition.get_isStopped = function() { return CS.Call(2, 50, 2, false, this); }
_jstype.definition.set_isStopped = function(v) { return CS.Call(3, 50, 2, false, this, v); }

_jstype.definition.get_isPaused = function() { return CS.Call(2, 50, 3, false, this); }
_jstype.definition.set_isPaused = function(v) { return CS.Call(3, 50, 3, false, this, v); }

_jstype.definition.get_loop = function() { return CS.Call(2, 50, 4, false, this); }
_jstype.definition.set_loop = function(v) { return CS.Call(3, 50, 4, false, this, v); }

_jstype.definition.get_playOnAwake = function() { return CS.Call(2, 50, 5, false, this); }
_jstype.definition.set_playOnAwake = function(v) { return CS.Call(3, 50, 5, false, this, v); }

_jstype.definition.get_time = function() { return CS.Call(2, 50, 6, false, this); }
_jstype.definition.set_time = function(v) { return CS.Call(3, 50, 6, false, this, v); }

_jstype.definition.get_duration = function() { return CS.Call(2, 50, 7, false, this); }
_jstype.definition.set_duration = function(v) { return CS.Call(3, 50, 7, false, this, v); }

_jstype.definition.get_playbackSpeed = function() { return CS.Call(2, 50, 8, false, this); }
_jstype.definition.set_playbackSpeed = function(v) { return CS.Call(3, 50, 8, false, this, v); }

_jstype.definition.get_particleCount = function() { return CS.Call(2, 50, 9, false, this); }
_jstype.definition.set_particleCount = function(v) { return CS.Call(3, 50, 9, false, this, v); }

_jstype.definition.get_safeCollisionEventSize = function() { return CS.Call(2, 50, 10, false, this); }
_jstype.definition.set_safeCollisionEventSize = function(v) { return CS.Call(3, 50, 10, false, this, v); }

_jstype.definition.get_enableEmission = function() { return CS.Call(2, 50, 11, false, this); }
_jstype.definition.set_enableEmission = function(v) { return CS.Call(3, 50, 11, false, this, v); }

_jstype.definition.get_emissionRate = function() { return CS.Call(2, 50, 12, false, this); }
_jstype.definition.set_emissionRate = function(v) { return CS.Call(3, 50, 12, false, this, v); }

_jstype.definition.get_startSpeed = function() { return CS.Call(2, 50, 13, false, this); }
_jstype.definition.set_startSpeed = function(v) { return CS.Call(3, 50, 13, false, this, v); }

_jstype.definition.get_startSize = function() { return CS.Call(2, 50, 14, false, this); }
_jstype.definition.set_startSize = function(v) { return CS.Call(3, 50, 14, false, this, v); }

_jstype.definition.get_startColor = function() { return CS.Call(2, 50, 15, false, this); }
_jstype.definition.set_startColor = function(v) { return CS.Call(3, 50, 15, false, this, v); }

_jstype.definition.get_startRotation = function() { return CS.Call(2, 50, 16, false, this); }
_jstype.definition.set_startRotation = function(v) { return CS.Call(3, 50, 16, false, this, v); }

_jstype.definition.get_startLifetime = function() { return CS.Call(2, 50, 17, false, this); }
_jstype.definition.set_startLifetime = function(v) { return CS.Call(3, 50, 17, false, this, v); }

_jstype.definition.get_gravityModifier = function() { return CS.Call(2, 50, 18, false, this); }
_jstype.definition.set_gravityModifier = function(v) { return CS.Call(3, 50, 18, false, this, v); }

_jstype.definition.get_maxParticles = function() { return CS.Call(2, 50, 19, false, this); }
_jstype.definition.set_maxParticles = function(v) { return CS.Call(3, 50, 19, false, this, v); }

_jstype.definition.get_simulationSpace = function() { return CS.Call(2, 50, 20, false, this); }
_jstype.definition.set_simulationSpace = function(v) { return CS.Call(3, 50, 20, false, this, v); }

_jstype.definition.get_randomSeed = function() { return CS.Call(2, 50, 21, false, this); }
_jstype.definition.set_randomSeed = function(v) { return CS.Call(3, 50, 21, false, this, v); }

// methods

/* Void */
_jstype.definition.Clear$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 50, 0, false, this, a0); 
}
/* Void */
_jstype.definition.Clear = function() { 
    
    return CS.Call(4, 50, 1, false, this); 
}
/* Void */
_jstype.definition.Emit$$Vector3$$Vector3$$Single$$Single$$Color32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/, a4/*Color32*/) { 
    
    return CS.Call(4, 50, 2, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.Emit$$Particle = function(a0/*Particle*/) { 
    
    return CS.Call(4, 50, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Emit$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 50, 4, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetCollisionEvents = function(a0/*GameObject*/, a1/*CollisionEvent[]*/) { 
    
    return CS.Call(4, 50, 5, false, this, a0, a1); 
}
/* Int32 */
_jstype.definition.GetParticles = function(a0/*Particle[]*/) { 
    
    return CS.Call(4, 50, 6, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsAlive$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 50, 7, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsAlive = function() { 
    
    return CS.Call(4, 50, 8, false, this); 
}
/* Void */
_jstype.definition.Pause$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 50, 9, false, this, a0); 
}
/* Void */
_jstype.definition.Pause = function() { 
    
    return CS.Call(4, 50, 10, false, this); 
}
/* Void */
_jstype.definition.Play$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 50, 11, false, this, a0); 
}
/* Void */
_jstype.definition.Play = function() { 
    
    return CS.Call(4, 50, 12, false, this); 
}
/* Void */
_jstype.definition.SetParticles = function(a0/*Particle[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 50, 13, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Simulate$$Single$$Boolean$$Boolean = function(a0/*Single*/, a1/*Boolean*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 50, 14, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Simulate$$Single$$Boolean = function(a0/*Single*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 50, 15, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Simulate$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 50, 16, false, this, a0); 
}
/* Void */
_jstype.definition.Stop$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 50, 17, false, this, a0); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 50, 18, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Renderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Renderer", 
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 51, 0, true, this); }

// fields

// properties

_jstype.definition.get_isPartOfStaticBatch = function() { return CS.Call(2, 51, 0, false, this); }
_jstype.definition.set_isPartOfStaticBatch = function(v) { return CS.Call(3, 51, 0, false, this, v); }

_jstype.definition.get_worldToLocalMatrix = function() { return CS.Call(2, 51, 1, false, this); }
_jstype.definition.set_worldToLocalMatrix = function(v) { return CS.Call(3, 51, 1, false, this, v); }

_jstype.definition.get_localToWorldMatrix = function() { return CS.Call(2, 51, 2, false, this); }
_jstype.definition.set_localToWorldMatrix = function(v) { return CS.Call(3, 51, 2, false, this, v); }

_jstype.definition.get_enabled = function() { return CS.Call(2, 51, 3, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 51, 3, false, this, v); }

_jstype.definition.get_castShadows = function() { return CS.Call(2, 51, 4, false, this); }
_jstype.definition.set_castShadows = function(v) { return CS.Call(3, 51, 4, false, this, v); }

_jstype.definition.get_receiveShadows = function() { return CS.Call(2, 51, 5, false, this); }
_jstype.definition.set_receiveShadows = function(v) { return CS.Call(3, 51, 5, false, this, v); }

_jstype.definition.get_material = function() { return CS.Call(2, 51, 6, false, this); }
_jstype.definition.set_material = function(v) { return CS.Call(3, 51, 6, false, this, v); }

_jstype.definition.get_sharedMaterial = function() { return CS.Call(2, 51, 7, false, this); }
_jstype.definition.set_sharedMaterial = function(v) { return CS.Call(3, 51, 7, false, this, v); }

_jstype.definition.get_sharedMaterials = function() { return CS.Call(2, 51, 8, false, this); }
_jstype.definition.set_sharedMaterials = function(v) { return CS.Call(3, 51, 8, false, this, v); }

_jstype.definition.get_materials = function() { return CS.Call(2, 51, 9, false, this); }
_jstype.definition.set_materials = function(v) { return CS.Call(3, 51, 9, false, this, v); }

_jstype.definition.get_bounds = function() { return CS.Call(2, 51, 10, false, this); }
_jstype.definition.set_bounds = function(v) { return CS.Call(3, 51, 10, false, this, v); }

_jstype.definition.get_lightmapIndex = function() { return CS.Call(2, 51, 11, false, this); }
_jstype.definition.set_lightmapIndex = function(v) { return CS.Call(3, 51, 11, false, this, v); }

_jstype.definition.get_lightmapTilingOffset = function() { return CS.Call(2, 51, 12, false, this); }
_jstype.definition.set_lightmapTilingOffset = function(v) { return CS.Call(3, 51, 12, false, this, v); }

_jstype.definition.get_isVisible = function() { return CS.Call(2, 51, 13, false, this); }
_jstype.definition.set_isVisible = function(v) { return CS.Call(3, 51, 13, false, this, v); }

_jstype.definition.get_useLightProbes = function() { return CS.Call(2, 51, 14, false, this); }
_jstype.definition.set_useLightProbes = function(v) { return CS.Call(3, 51, 14, false, this, v); }

_jstype.definition.get_lightProbeAnchor = function() { return CS.Call(2, 51, 15, false, this); }
_jstype.definition.set_lightProbeAnchor = function(v) { return CS.Call(3, 51, 15, false, this, v); }

_jstype.definition.get_sortingLayerName = function() { return CS.Call(2, 51, 16, false, this); }
_jstype.definition.set_sortingLayerName = function(v) { return CS.Call(3, 51, 16, false, this, v); }

_jstype.definition.get_sortingLayerID = function() { return CS.Call(2, 51, 17, false, this); }
_jstype.definition.set_sortingLayerID = function(v) { return CS.Call(3, 51, 17, false, this, v); }

_jstype.definition.get_sortingOrder = function() { return CS.Call(2, 51, 18, false, this); }
_jstype.definition.set_sortingOrder = function(v) { return CS.Call(3, 51, 18, false, this, v); }

// methods

/* Void */
_jstype.definition.GetPropertyBlock = function(a0/*MaterialPropertyBlock*/) { 
    
    return CS.Call(4, 51, 0, false, this, a0); 
}
/* Void */
_jstype.definition.Render = function(a0/*Int32*/) { 
    
    return CS.Call(4, 51, 1, false, this, a0); 
}
/* Void */
_jstype.definition.SetPropertyBlock = function(a0/*MaterialPropertyBlock*/) { 
    
    return CS.Call(4, 51, 2, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ParticleSystemRenderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ParticleSystemRenderer", 
    baseTypeName: "UnityEngine.Renderer"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 52, 0, true, this); }

// fields

// properties

_jstype.definition.get_renderMode = function() { return CS.Call(2, 52, 0, false, this); }
_jstype.definition.set_renderMode = function(v) { return CS.Call(3, 52, 0, false, this, v); }

_jstype.definition.get_lengthScale = function() { return CS.Call(2, 52, 1, false, this); }
_jstype.definition.set_lengthScale = function(v) { return CS.Call(3, 52, 1, false, this, v); }

_jstype.definition.get_velocityScale = function() { return CS.Call(2, 52, 2, false, this); }
_jstype.definition.set_velocityScale = function(v) { return CS.Call(3, 52, 2, false, this, v); }

_jstype.definition.get_cameraVelocityScale = function() { return CS.Call(2, 52, 3, false, this); }
_jstype.definition.set_cameraVelocityScale = function(v) { return CS.Call(3, 52, 3, false, this, v); }

_jstype.definition.get_maxParticleSize = function() { return CS.Call(2, 52, 4, false, this); }
_jstype.definition.set_maxParticleSize = function(v) { return CS.Call(3, 52, 4, false, this, v); }

_jstype.definition.get_mesh = function() { return CS.Call(2, 52, 5, false, this); }
_jstype.definition.set_mesh = function(v) { return CS.Call(3, 52, 5, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Animator
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Animator", 
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 53, 0, true, this); }

// fields

// properties

_jstype.definition.get_isOptimizable = function() { return CS.Call(2, 53, 0, false, this); }
_jstype.definition.set_isOptimizable = function(v) { return CS.Call(3, 53, 0, false, this, v); }

_jstype.definition.get_isHuman = function() { return CS.Call(2, 53, 1, false, this); }
_jstype.definition.set_isHuman = function(v) { return CS.Call(3, 53, 1, false, this, v); }

_jstype.definition.get_hasRootMotion = function() { return CS.Call(2, 53, 2, false, this); }
_jstype.definition.set_hasRootMotion = function(v) { return CS.Call(3, 53, 2, false, this, v); }

_jstype.definition.get_humanScale = function() { return CS.Call(2, 53, 3, false, this); }
_jstype.definition.set_humanScale = function(v) { return CS.Call(3, 53, 3, false, this, v); }

_jstype.definition.get_deltaPosition = function() { return CS.Call(2, 53, 4, false, this); }
_jstype.definition.set_deltaPosition = function(v) { return CS.Call(3, 53, 4, false, this, v); }

_jstype.definition.get_deltaRotation = function() { return CS.Call(2, 53, 5, false, this); }
_jstype.definition.set_deltaRotation = function(v) { return CS.Call(3, 53, 5, false, this, v); }

_jstype.definition.get_rootPosition = function() { return CS.Call(2, 53, 6, false, this); }
_jstype.definition.set_rootPosition = function(v) { return CS.Call(3, 53, 6, false, this, v); }

_jstype.definition.get_rootRotation = function() { return CS.Call(2, 53, 7, false, this); }
_jstype.definition.set_rootRotation = function(v) { return CS.Call(3, 53, 7, false, this, v); }

_jstype.definition.get_applyRootMotion = function() { return CS.Call(2, 53, 8, false, this); }
_jstype.definition.set_applyRootMotion = function(v) { return CS.Call(3, 53, 8, false, this, v); }

_jstype.definition.get_updateMode = function() { return CS.Call(2, 53, 9, false, this); }
_jstype.definition.set_updateMode = function(v) { return CS.Call(3, 53, 9, false, this, v); }

_jstype.definition.get_hasTransformHierarchy = function() { return CS.Call(2, 53, 10, false, this); }
_jstype.definition.set_hasTransformHierarchy = function(v) { return CS.Call(3, 53, 10, false, this, v); }

_jstype.definition.get_gravityWeight = function() { return CS.Call(2, 53, 11, false, this); }
_jstype.definition.set_gravityWeight = function(v) { return CS.Call(3, 53, 11, false, this, v); }

_jstype.definition.get_bodyPosition = function() { return CS.Call(2, 53, 12, false, this); }
_jstype.definition.set_bodyPosition = function(v) { return CS.Call(3, 53, 12, false, this, v); }

_jstype.definition.get_bodyRotation = function() { return CS.Call(2, 53, 13, false, this); }
_jstype.definition.set_bodyRotation = function(v) { return CS.Call(3, 53, 13, false, this, v); }

_jstype.definition.get_stabilizeFeet = function() { return CS.Call(2, 53, 14, false, this); }
_jstype.definition.set_stabilizeFeet = function(v) { return CS.Call(3, 53, 14, false, this, v); }

_jstype.definition.get_layerCount = function() { return CS.Call(2, 53, 15, false, this); }
_jstype.definition.set_layerCount = function(v) { return CS.Call(3, 53, 15, false, this, v); }

_jstype.definition.get_feetPivotActive = function() { return CS.Call(2, 53, 16, false, this); }
_jstype.definition.set_feetPivotActive = function(v) { return CS.Call(3, 53, 16, false, this, v); }

_jstype.definition.get_pivotWeight = function() { return CS.Call(2, 53, 17, false, this); }
_jstype.definition.set_pivotWeight = function(v) { return CS.Call(3, 53, 17, false, this, v); }

_jstype.definition.get_pivotPosition = function() { return CS.Call(2, 53, 18, false, this); }
_jstype.definition.set_pivotPosition = function(v) { return CS.Call(3, 53, 18, false, this, v); }

_jstype.definition.get_isMatchingTarget = function() { return CS.Call(2, 53, 19, false, this); }
_jstype.definition.set_isMatchingTarget = function(v) { return CS.Call(3, 53, 19, false, this, v); }

_jstype.definition.get_speed = function() { return CS.Call(2, 53, 20, false, this); }
_jstype.definition.set_speed = function(v) { return CS.Call(3, 53, 20, false, this, v); }

_jstype.definition.get_targetPosition = function() { return CS.Call(2, 53, 21, false, this); }
_jstype.definition.set_targetPosition = function(v) { return CS.Call(3, 53, 21, false, this, v); }

_jstype.definition.get_targetRotation = function() { return CS.Call(2, 53, 22, false, this); }
_jstype.definition.set_targetRotation = function(v) { return CS.Call(3, 53, 22, false, this, v); }

_jstype.definition.get_cullingMode = function() { return CS.Call(2, 53, 23, false, this); }
_jstype.definition.set_cullingMode = function(v) { return CS.Call(3, 53, 23, false, this, v); }

_jstype.definition.get_playbackTime = function() { return CS.Call(2, 53, 24, false, this); }
_jstype.definition.set_playbackTime = function(v) { return CS.Call(3, 53, 24, false, this, v); }

_jstype.definition.get_recorderStartTime = function() { return CS.Call(2, 53, 25, false, this); }
_jstype.definition.set_recorderStartTime = function(v) { return CS.Call(3, 53, 25, false, this, v); }

_jstype.definition.get_recorderStopTime = function() { return CS.Call(2, 53, 26, false, this); }
_jstype.definition.set_recorderStopTime = function(v) { return CS.Call(3, 53, 26, false, this, v); }

_jstype.definition.get_runtimeAnimatorController = function() { return CS.Call(2, 53, 27, false, this); }
_jstype.definition.set_runtimeAnimatorController = function(v) { return CS.Call(3, 53, 27, false, this, v); }

_jstype.definition.get_avatar = function() { return CS.Call(2, 53, 28, false, this); }
_jstype.definition.set_avatar = function(v) { return CS.Call(3, 53, 28, false, this, v); }

_jstype.definition.get_layersAffectMassCenter = function() { return CS.Call(2, 53, 29, false, this); }
_jstype.definition.set_layersAffectMassCenter = function(v) { return CS.Call(3, 53, 29, false, this, v); }

_jstype.definition.get_leftFeetBottomHeight = function() { return CS.Call(2, 53, 30, false, this); }
_jstype.definition.set_leftFeetBottomHeight = function(v) { return CS.Call(3, 53, 30, false, this, v); }

_jstype.definition.get_rightFeetBottomHeight = function() { return CS.Call(2, 53, 31, false, this); }
_jstype.definition.set_rightFeetBottomHeight = function(v) { return CS.Call(3, 53, 31, false, this, v); }

_jstype.definition.get_logWarnings = function() { return CS.Call(2, 53, 32, false, this); }
_jstype.definition.set_logWarnings = function(v) { return CS.Call(3, 53, 32, false, this, v); }

_jstype.definition.get_fireEvents = function() { return CS.Call(2, 53, 33, false, this); }
_jstype.definition.set_fireEvents = function(v) { return CS.Call(3, 53, 33, false, this, v); }

// methods

/* Void */
_jstype.definition.CrossFade$$String$$Single$$Int32$$Single = function(a0/*String*/, a1/*Single*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 53, 0, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.CrossFade$$Int32$$Single$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 53, 1, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.CrossFade$$String$$Single$$Int32 = function(a0/*String*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 53, 2, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.CrossFade$$Int32$$Single$$Int32 = function(a0/*Int32*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 53, 3, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.CrossFade$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 53, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.CrossFade$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 53, 5, false, this, a0, a1); 
}
/* AnimatorTransitionInfo */
_jstype.definition.GetAnimatorTransitionInfo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 6, false, this, a0); 
}
/* Transform */
_jstype.definition.GetBoneTransform = function(a0/*HumanBodyBones*/) { 
    
    return CS.Call(4, 53, 7, false, this, a0); 
}
/* Boolean */
_jstype.definition.GetBool$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 53, 8, false, this, a0); 
}
/* Boolean */
_jstype.definition.GetBool$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 9, false, this, a0); 
}
/* AnimationInfo[] */
_jstype.definition.GetCurrentAnimationClipState = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 10, false, this, a0); 
}
/* AnimatorStateInfo */
_jstype.definition.GetCurrentAnimatorStateInfo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 11, false, this, a0); 
}
/* Single */
_jstype.definition.GetFloat$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 12, false, this, a0); 
}
/* Single */
_jstype.definition.GetFloat$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 53, 13, false, this, a0); 
}
/* Vector3 */
_jstype.definition.GetIKPosition = function(a0/*AvatarIKGoal*/) { 
    
    return CS.Call(4, 53, 14, false, this, a0); 
}
/* Single */
_jstype.definition.GetIKPositionWeight = function(a0/*AvatarIKGoal*/) { 
    
    return CS.Call(4, 53, 15, false, this, a0); 
}
/* Quaternion */
_jstype.definition.GetIKRotation = function(a0/*AvatarIKGoal*/) { 
    
    return CS.Call(4, 53, 16, false, this, a0); 
}
/* Single */
_jstype.definition.GetIKRotationWeight = function(a0/*AvatarIKGoal*/) { 
    
    return CS.Call(4, 53, 17, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetInteger$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 18, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetInteger$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 53, 19, false, this, a0); 
}
/* String */
_jstype.definition.GetLayerName = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 20, false, this, a0); 
}
/* Single */
_jstype.definition.GetLayerWeight = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 21, false, this, a0); 
}
/* AnimationInfo[] */
_jstype.definition.GetNextAnimationClipState = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 22, false, this, a0); 
}
/* AnimatorStateInfo */
_jstype.definition.GetNextAnimatorStateInfo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 23, false, this, a0); 
}
/* Void */
_jstype.definition.InterruptMatchTarget$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 53, 24, false, this, a0); 
}
/* Void */
_jstype.definition.InterruptMatchTarget = function() { 
    
    return CS.Call(4, 53, 25, false, this); 
}
/* Boolean */
_jstype.definition.IsInTransition = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 26, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsParameterControlledByCurve$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 27, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsParameterControlledByCurve$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 53, 28, false, this, a0); 
}
/* Void */
_jstype.definition.MatchTarget$$Vector3$$Quaternion$$AvatarTarget$$MatchTargetWeightMask$$Single$$Single = function(a0/*Vector3*/, a1/*Quaternion*/, a2/*AvatarTarget*/, a3/*MatchTargetWeightMask*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 53, 29, false, this, a0, a1, a2, a3, a4, a5); 
}
/* Void */
_jstype.definition.MatchTarget$$Vector3$$Quaternion$$AvatarTarget$$MatchTargetWeightMask$$Single = function(a0/*Vector3*/, a1/*Quaternion*/, a2/*AvatarTarget*/, a3/*MatchTargetWeightMask*/, a4/*Single*/) { 
    
    return CS.Call(4, 53, 30, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.Play$$String$$Int32$$Single = function(a0/*String*/, a1/*Int32*/, a2/*Single*/) { 
    
    return CS.Call(4, 53, 31, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Play$$Int32$$Int32$$Single = function(a0/*Int32*/, a1/*Int32*/, a2/*Single*/) { 
    
    return CS.Call(4, 53, 32, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Play$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 53, 33, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Play$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 53, 34, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Play$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 53, 35, false, this, a0); 
}
/* Void */
_jstype.definition.Play$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 36, false, this, a0); 
}
/* Void */
_jstype.definition.Rebind = function() { 
    
    return CS.Call(4, 53, 37, false, this); 
}
/* Void */
_jstype.definition.ResetTrigger$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 38, false, this, a0); 
}
/* Void */
_jstype.definition.ResetTrigger$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 53, 39, false, this, a0); 
}
/* Void */
_jstype.definition.SetBool$$Int32$$Boolean = function(a0/*Int32*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 53, 40, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetBool$$String$$Boolean = function(a0/*String*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 53, 41, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloat$$Int32$$Single$$Single$$Single = function(a0/*Int32*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 53, 42, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.SetFloat$$String$$Single$$Single$$Single = function(a0/*String*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 53, 43, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.SetFloat$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 53, 44, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloat$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 53, 45, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetIKPosition = function(a0/*AvatarIKGoal*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 53, 46, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetIKPositionWeight = function(a0/*AvatarIKGoal*/, a1/*Single*/) { 
    
    return CS.Call(4, 53, 47, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetIKRotation = function(a0/*AvatarIKGoal*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 53, 48, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetIKRotationWeight = function(a0/*AvatarIKGoal*/, a1/*Single*/) { 
    
    return CS.Call(4, 53, 49, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetInteger$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 53, 50, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetInteger$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 53, 51, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetLayerWeight = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 53, 52, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetLookAtPosition = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 53, 53, false, this, a0); 
}
/* Void */
_jstype.definition.SetLookAtWeight$$Single$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 53, 54, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.SetLookAtWeight$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 53, 55, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.SetLookAtWeight$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 53, 56, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetLookAtWeight$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 53, 57, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetLookAtWeight$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 53, 58, false, this, a0); 
}
/* Void */
_jstype.definition.SetTarget = function(a0/*AvatarTarget*/, a1/*Single*/) { 
    
    return CS.Call(4, 53, 59, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTrigger$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 53, 60, false, this, a0); 
}
/* Void */
_jstype.definition.SetTrigger$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 61, false, this, a0); 
}
/* Void */
_jstype.definition.StartPlayback = function() { 
    
    return CS.Call(4, 53, 62, false, this); 
}
/* Void */
_jstype.definition.StartRecording = function(a0/*Int32*/) { 
    
    return CS.Call(4, 53, 63, false, this, a0); 
}
/* Void */
_jstype.definition.StopPlayback = function() { 
    
    return CS.Call(4, 53, 64, false, this); 
}
/* Void */
_jstype.definition.StopRecording = function() { 
    
    return CS.Call(4, 53, 65, false, this); 
}
/* Void */
_jstype.definition.Update = function(a0/*Single*/) { 
    
    return CS.Call(4, 53, 66, false, this, a0); 
}
/* static Int32  */
_jstype.staticDefinition.StringToHash = function(a0/*String*/) { 
    
    return CS.Call(4, 53, 67, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Camera
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Camera", 
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 54, 0, true, this); }

// fields

// properties

_jstype.definition.get_fieldOfView = function() { return CS.Call(2, 54, 0, false, this); }
_jstype.definition.set_fieldOfView = function(v) { return CS.Call(3, 54, 0, false, this, v); }

_jstype.definition.get_nearClipPlane = function() { return CS.Call(2, 54, 1, false, this); }
_jstype.definition.set_nearClipPlane = function(v) { return CS.Call(3, 54, 1, false, this, v); }

_jstype.definition.get_farClipPlane = function() { return CS.Call(2, 54, 2, false, this); }
_jstype.definition.set_farClipPlane = function(v) { return CS.Call(3, 54, 2, false, this, v); }

_jstype.definition.get_renderingPath = function() { return CS.Call(2, 54, 3, false, this); }
_jstype.definition.set_renderingPath = function(v) { return CS.Call(3, 54, 3, false, this, v); }

_jstype.definition.get_actualRenderingPath = function() { return CS.Call(2, 54, 4, false, this); }
_jstype.definition.set_actualRenderingPath = function(v) { return CS.Call(3, 54, 4, false, this, v); }

_jstype.definition.get_hdr = function() { return CS.Call(2, 54, 5, false, this); }
_jstype.definition.set_hdr = function(v) { return CS.Call(3, 54, 5, false, this, v); }

_jstype.definition.get_orthographicSize = function() { return CS.Call(2, 54, 6, false, this); }
_jstype.definition.set_orthographicSize = function(v) { return CS.Call(3, 54, 6, false, this, v); }

_jstype.definition.get_orthographic = function() { return CS.Call(2, 54, 7, false, this); }
_jstype.definition.set_orthographic = function(v) { return CS.Call(3, 54, 7, false, this, v); }

_jstype.definition.get_transparencySortMode = function() { return CS.Call(2, 54, 8, false, this); }
_jstype.definition.set_transparencySortMode = function(v) { return CS.Call(3, 54, 8, false, this, v); }

_jstype.definition.get_isOrthoGraphic = function() { return CS.Call(2, 54, 9, false, this); }
_jstype.definition.set_isOrthoGraphic = function(v) { return CS.Call(3, 54, 9, false, this, v); }

_jstype.definition.get_depth = function() { return CS.Call(2, 54, 10, false, this); }
_jstype.definition.set_depth = function(v) { return CS.Call(3, 54, 10, false, this, v); }

_jstype.definition.get_aspect = function() { return CS.Call(2, 54, 11, false, this); }
_jstype.definition.set_aspect = function(v) { return CS.Call(3, 54, 11, false, this, v); }

_jstype.definition.get_cullingMask = function() { return CS.Call(2, 54, 12, false, this); }
_jstype.definition.set_cullingMask = function(v) { return CS.Call(3, 54, 12, false, this, v); }

_jstype.definition.get_eventMask = function() { return CS.Call(2, 54, 13, false, this); }
_jstype.definition.set_eventMask = function(v) { return CS.Call(3, 54, 13, false, this, v); }

_jstype.definition.get_backgroundColor = function() { return CS.Call(2, 54, 14, false, this); }
_jstype.definition.set_backgroundColor = function(v) { return CS.Call(3, 54, 14, false, this, v); }

_jstype.definition.get_rect = function() { return CS.Call(2, 54, 15, false, this); }
_jstype.definition.set_rect = function(v) { return CS.Call(3, 54, 15, false, this, v); }

_jstype.definition.get_pixelRect = function() { return CS.Call(2, 54, 16, false, this); }
_jstype.definition.set_pixelRect = function(v) { return CS.Call(3, 54, 16, false, this, v); }

_jstype.definition.get_targetTexture = function() { return CS.Call(2, 54, 17, false, this); }
_jstype.definition.set_targetTexture = function(v) { return CS.Call(3, 54, 17, false, this, v); }

_jstype.definition.get_pixelWidth = function() { return CS.Call(2, 54, 18, false, this); }
_jstype.definition.set_pixelWidth = function(v) { return CS.Call(3, 54, 18, false, this, v); }

_jstype.definition.get_pixelHeight = function() { return CS.Call(2, 54, 19, false, this); }
_jstype.definition.set_pixelHeight = function(v) { return CS.Call(3, 54, 19, false, this, v); }

_jstype.definition.get_cameraToWorldMatrix = function() { return CS.Call(2, 54, 20, false, this); }
_jstype.definition.set_cameraToWorldMatrix = function(v) { return CS.Call(3, 54, 20, false, this, v); }

_jstype.definition.get_worldToCameraMatrix = function() { return CS.Call(2, 54, 21, false, this); }
_jstype.definition.set_worldToCameraMatrix = function(v) { return CS.Call(3, 54, 21, false, this, v); }

_jstype.definition.get_projectionMatrix = function() { return CS.Call(2, 54, 22, false, this); }
_jstype.definition.set_projectionMatrix = function(v) { return CS.Call(3, 54, 22, false, this, v); }

_jstype.definition.get_velocity = function() { return CS.Call(2, 54, 23, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 54, 23, false, this, v); }

_jstype.definition.get_clearFlags = function() { return CS.Call(2, 54, 24, false, this); }
_jstype.definition.set_clearFlags = function(v) { return CS.Call(3, 54, 24, false, this, v); }

_jstype.definition.get_stereoEnabled = function() { return CS.Call(2, 54, 25, false, this); }
_jstype.definition.set_stereoEnabled = function(v) { return CS.Call(3, 54, 25, false, this, v); }

_jstype.definition.get_stereoSeparation = function() { return CS.Call(2, 54, 26, false, this); }
_jstype.definition.set_stereoSeparation = function(v) { return CS.Call(3, 54, 26, false, this, v); }

_jstype.definition.get_stereoConvergence = function() { return CS.Call(2, 54, 27, false, this); }
_jstype.definition.set_stereoConvergence = function(v) { return CS.Call(3, 54, 27, false, this, v); }

_jstype.staticDefinition.get_main = function() { return CS.Call(2, 54, 28, true); }
_jstype.staticDefinition.set_main = function(v) { return CS.Call(3, 54, 28, true, v); }

_jstype.staticDefinition.get_current = function() { return CS.Call(2, 54, 29, true); }
_jstype.staticDefinition.set_current = function(v) { return CS.Call(3, 54, 29, true, v); }

_jstype.staticDefinition.get_allCameras = function() { return CS.Call(2, 54, 30, true); }
_jstype.staticDefinition.set_allCameras = function(v) { return CS.Call(3, 54, 30, true, v); }

_jstype.staticDefinition.get_allCamerasCount = function() { return CS.Call(2, 54, 31, true); }
_jstype.staticDefinition.set_allCamerasCount = function(v) { return CS.Call(3, 54, 31, true, v); }

_jstype.definition.get_useOcclusionCulling = function() { return CS.Call(2, 54, 32, false, this); }
_jstype.definition.set_useOcclusionCulling = function(v) { return CS.Call(3, 54, 32, false, this, v); }

_jstype.definition.get_layerCullDistances = function() { return CS.Call(2, 54, 33, false, this); }
_jstype.definition.set_layerCullDistances = function(v) { return CS.Call(3, 54, 33, false, this, v); }

_jstype.definition.get_layerCullSpherical = function() { return CS.Call(2, 54, 34, false, this); }
_jstype.definition.set_layerCullSpherical = function(v) { return CS.Call(3, 54, 34, false, this, v); }

_jstype.definition.get_depthTextureMode = function() { return CS.Call(2, 54, 35, false, this); }
_jstype.definition.set_depthTextureMode = function(v) { return CS.Call(3, 54, 35, false, this, v); }

_jstype.definition.get_clearStencilAfterLightingPass = function() { return CS.Call(2, 54, 36, false, this); }
_jstype.definition.set_clearStencilAfterLightingPass = function(v) { return CS.Call(3, 54, 36, false, this, v); }

// methods

/* Matrix4x4 */
_jstype.definition.CalculateObliqueMatrix = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 54, 0, false, this, a0); 
}
/* Void */
_jstype.definition.CopyFrom = function(a0/*Camera*/) { 
    
    return CS.Call(4, 54, 1, false, this, a0); 
}
/* Void */
_jstype.definition.Render = function() { 
    
    return CS.Call(4, 54, 2, false, this); 
}
/* Void */
_jstype.definition.RenderDontRestore = function() { 
    
    return CS.Call(4, 54, 3, false, this); 
}
/* Boolean */
_jstype.definition.RenderToCubemap$$Cubemap$$Int32 = function(a0/*Cubemap*/, a1/*Int32*/) { 
    
    return CS.Call(4, 54, 4, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.RenderToCubemap$$RenderTexture$$Int32 = function(a0/*RenderTexture*/, a1/*Int32*/) { 
    
    return CS.Call(4, 54, 5, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.RenderToCubemap$$Cubemap = function(a0/*Cubemap*/) { 
    
    return CS.Call(4, 54, 6, false, this, a0); 
}
/* Boolean */
_jstype.definition.RenderToCubemap$$RenderTexture = function(a0/*RenderTexture*/) { 
    
    return CS.Call(4, 54, 7, false, this, a0); 
}
/* Void */
_jstype.definition.RenderWithShader = function(a0/*Shader*/, a1/*String*/) { 
    
    return CS.Call(4, 54, 8, false, this, a0, a1); 
}
/* Void */
_jstype.definition.ResetAspect = function() { 
    
    return CS.Call(4, 54, 9, false, this); 
}
/* Void */
_jstype.definition.ResetProjectionMatrix = function() { 
    
    return CS.Call(4, 54, 10, false, this); 
}
/* Void */
_jstype.definition.ResetReplacementShader = function() { 
    
    return CS.Call(4, 54, 11, false, this); 
}
/* Void */
_jstype.definition.ResetWorldToCameraMatrix = function() { 
    
    return CS.Call(4, 54, 12, false, this); 
}
/* Ray */
_jstype.definition.ScreenPointToRay = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 54, 13, false, this, a0); 
}
/* Vector3 */
_jstype.definition.ScreenToViewportPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 54, 14, false, this, a0); 
}
/* Vector3 */
_jstype.definition.ScreenToWorldPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 54, 15, false, this, a0); 
}
/* Void */
_jstype.definition.SetReplacementShader = function(a0/*Shader*/, a1/*String*/) { 
    
    return CS.Call(4, 54, 16, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTargetBuffers$$RenderBuffer$$RenderBuffer = function(a0/*RenderBuffer*/, a1/*RenderBuffer*/) { 
    
    return CS.Call(4, 54, 17, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTargetBuffers$$RenderBuffer$Array$$RenderBuffer = function(a0/*RenderBuffer[]*/, a1/*RenderBuffer*/) { 
    
    return CS.Call(4, 54, 18, false, this, a0, a1); 
}
/* Ray */
_jstype.definition.ViewportPointToRay = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 54, 19, false, this, a0); 
}
/* Vector3 */
_jstype.definition.ViewportToScreenPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 54, 20, false, this, a0); 
}
/* Vector3 */
_jstype.definition.ViewportToWorldPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 54, 21, false, this, a0); 
}
/* Vector3 */
_jstype.definition.WorldToScreenPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 54, 22, false, this, a0); 
}
/* Vector3 */
_jstype.definition.WorldToViewportPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 54, 23, false, this, a0); 
}
/* static Int32  */
_jstype.staticDefinition.GetAllCameras = function(a0/*Camera[]*/) { 
    
    return CS.Call(4, 54, 24, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.SetupCurrent = function(a0/*Camera*/) { 
    
    return CS.Call(4, 54, 25, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Mathf
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Mathf", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 55, 0, true, this); }

// fields

_jstype.staticFields.PI =  { 
            get: function() { return CS.Call(0, 55, 0, true); }, 
            set: function(v) { return CS.Call(1, 55, 0, true, v); } 
        };

_jstype.staticFields.Infinity =  { 
            get: function() { return CS.Call(0, 55, 1, true); }, 
            set: function(v) { return CS.Call(1, 55, 1, true, v); } 
        };

_jstype.staticFields.NegativeInfinity =  { 
            get: function() { return CS.Call(0, 55, 2, true); }, 
            set: function(v) { return CS.Call(1, 55, 2, true, v); } 
        };

_jstype.staticFields.Deg2Rad =  { 
            get: function() { return CS.Call(0, 55, 3, true); }, 
            set: function(v) { return CS.Call(1, 55, 3, true, v); } 
        };

_jstype.staticFields.Rad2Deg =  { 
            get: function() { return CS.Call(0, 55, 4, true); }, 
            set: function(v) { return CS.Call(1, 55, 4, true, v); } 
        };

_jstype.staticFields.Epsilon =  { 
            get: function() { return CS.Call(0, 55, 5, true); }, 
            set: function(v) { return CS.Call(1, 55, 5, true, v); } 
        };

// properties

// methods

/* static Single  */
_jstype.staticDefinition.Abs$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 0, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.Abs$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 55, 1, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Acos = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 2, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.Approximately = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 55, 3, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Asin = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 4, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Atan = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 5, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Atan2 = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 55, 6, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Ceil = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 7, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.CeilToInt = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 8, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.Clamp$$Int32$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 55, 9, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.Clamp$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 55, 10, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.Clamp01 = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 11, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.ClosestPowerOfTwo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 55, 12, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Cos = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 13, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.DeltaAngle = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 55, 14, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Exp = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 15, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Floor = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 16, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.FloorToInt = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 17, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Gamma = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 55, 18, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.GammaToLinearSpace = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 19, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.InverseLerp = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 55, 20, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.IsPowerOfTwo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 55, 21, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Lerp = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 55, 22, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.LerpAngle = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 55, 23, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.LinearToGammaSpace = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 24, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Log$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 55, 25, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Log$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 26, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Log10 = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 27, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Max$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 55, 28, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.Max$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 55, 29, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Max$$Single$Array = function(a0/*Single[]*/) { 
    
    return CS.Call(4, 55, 30, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.Max$$Int32$Array = function(a0/*Int32[]*/) { 
    
    return CS.Call(4, 55, 31, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.Min$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 55, 32, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.Min$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 55, 33, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.Min$$Int32$Array = function(a0/*Int32[]*/) { 
    
    return CS.Call(4, 55, 34, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.Min$$Single$Array = function(a0/*Single[]*/) { 
    
    return CS.Call(4, 55, 35, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.MoveTowards = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 55, 36, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.MoveTowardsAngle = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 55, 37, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.NextPowerOfTwo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 55, 38, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.PerlinNoise = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 55, 39, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.PingPong = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 55, 40, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Pow = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 55, 41, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Repeat = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 55, 42, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Round = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 43, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.RoundToInt = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 44, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Sign = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 45, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Sin = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 46, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDamp$$Single$$Single$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 55, 47, true, a0, a1, a2, a3, a4, a5); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDamp$$Single$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 55, 48, true, a0, a1, a2, a3, a4); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDamp$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/) { 
    
    return CS.Call(4, 55, 49, true, a0, a1, a2, a3); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDampAngle$$Single$$Single$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 55, 50, true, a0, a1, a2, a3, a4, a5); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDampAngle$$Single$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 55, 51, true, a0, a1, a2, a3, a4); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDampAngle$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/) { 
    
    return CS.Call(4, 55, 52, true, a0, a1, a2, a3); 
}
/* static Single  */
_jstype.staticDefinition.SmoothStep = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 55, 53, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.Sqrt = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 54, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Tan = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 55, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Material
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Material", 
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 56, 0, true, this, a0); }
_jstype.definition.ctor$$Shader = function(a0) { CS.Call(5, 56, 1, true, this, a0); }
_jstype.definition.ctor$$Material = function(a0) { CS.Call(5, 56, 2, true, this, a0); }

// fields

// properties

_jstype.definition.get_shader = function() { return CS.Call(2, 56, 0, false, this); }
_jstype.definition.set_shader = function(v) { return CS.Call(3, 56, 0, false, this, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 56, 1, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 56, 1, false, this, v); }

_jstype.definition.get_mainTexture = function() { return CS.Call(2, 56, 2, false, this); }
_jstype.definition.set_mainTexture = function(v) { return CS.Call(3, 56, 2, false, this, v); }

_jstype.definition.get_mainTextureOffset = function() { return CS.Call(2, 56, 3, false, this); }
_jstype.definition.set_mainTextureOffset = function(v) { return CS.Call(3, 56, 3, false, this, v); }

_jstype.definition.get_mainTextureScale = function() { return CS.Call(2, 56, 4, false, this); }
_jstype.definition.set_mainTextureScale = function(v) { return CS.Call(3, 56, 4, false, this, v); }

_jstype.definition.get_passCount = function() { return CS.Call(2, 56, 5, false, this); }
_jstype.definition.set_passCount = function(v) { return CS.Call(3, 56, 5, false, this, v); }

_jstype.definition.get_renderQueue = function() { return CS.Call(2, 56, 6, false, this); }
_jstype.definition.set_renderQueue = function(v) { return CS.Call(3, 56, 6, false, this, v); }

_jstype.definition.get_shaderKeywords = function() { return CS.Call(2, 56, 7, false, this); }
_jstype.definition.set_shaderKeywords = function(v) { return CS.Call(3, 56, 7, false, this, v); }

// methods

/* Void */
_jstype.definition.CopyPropertiesFromMaterial = function(a0/*Material*/) { 
    
    return CS.Call(4, 56, 0, false, this, a0); 
}
/* Void */
_jstype.definition.DisableKeyword = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 1, false, this, a0); 
}
/* Void */
_jstype.definition.EnableKeyword = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 2, false, this, a0); 
}
/* Color */
_jstype.definition.GetColor$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 56, 3, false, this, a0); 
}
/* Color */
_jstype.definition.GetColor$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 4, false, this, a0); 
}
/* Single */
_jstype.definition.GetFloat$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 56, 5, false, this, a0); 
}
/* Single */
_jstype.definition.GetFloat$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 6, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetInt$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 56, 7, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetInt$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 8, false, this, a0); 
}
/* Matrix4x4 */
_jstype.definition.GetMatrix$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 9, false, this, a0); 
}
/* Matrix4x4 */
_jstype.definition.GetMatrix$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 56, 10, false, this, a0); 
}
/* String */
_jstype.definition.GetTag$$String$$Boolean$$String = function(a0/*String*/, a1/*Boolean*/, a2/*String*/) { 
    
    return CS.Call(4, 56, 11, false, this, a0, a1, a2); 
}
/* String */
_jstype.definition.GetTag$$String$$Boolean = function(a0/*String*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 56, 12, false, this, a0, a1); 
}
/* Texture */
_jstype.definition.GetTexture$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 13, false, this, a0); 
}
/* Texture */
_jstype.definition.GetTexture$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 56, 14, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetTextureOffset = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 15, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetTextureScale = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 16, false, this, a0); 
}
/* Vector4 */
_jstype.definition.GetVector$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 56, 17, false, this, a0); 
}
/* Vector4 */
_jstype.definition.GetVector$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 18, false, this, a0); 
}
/* Boolean */
_jstype.definition.HasProperty$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 56, 19, false, this, a0); 
}
/* Boolean */
_jstype.definition.HasProperty$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 56, 20, false, this, a0); 
}
/* Void */
_jstype.definition.Lerp = function(a0/*Material*/, a1/*Material*/, a2/*Single*/) { 
    
    return CS.Call(4, 56, 21, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetBuffer = function(a0/*String*/, a1/*ComputeBuffer*/) { 
    
    return CS.Call(4, 56, 22, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetColor$$String$$Color = function(a0/*String*/, a1/*Color*/) { 
    
    return CS.Call(4, 56, 23, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetColor$$Int32$$Color = function(a0/*Int32*/, a1/*Color*/) { 
    
    return CS.Call(4, 56, 24, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloat$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 56, 25, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloat$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 56, 26, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetInt$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 56, 27, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetInt$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 56, 28, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetMatrix$$Int32$$Matrix4x4 = function(a0/*Int32*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 56, 29, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetMatrix$$String$$Matrix4x4 = function(a0/*String*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 56, 30, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.SetPass = function(a0/*Int32*/) { 
    
    return CS.Call(4, 56, 31, false, this, a0); 
}
/* Void */
_jstype.definition.SetTexture$$Int32$$Texture = function(a0/*Int32*/, a1/*Texture*/) { 
    
    return CS.Call(4, 56, 32, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTexture$$String$$Texture = function(a0/*String*/, a1/*Texture*/) { 
    
    return CS.Call(4, 56, 33, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTextureOffset = function(a0/*String*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 56, 34, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTextureScale = function(a0/*String*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 56, 35, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetVector$$Int32$$Vector4 = function(a0/*Int32*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 56, 36, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetVector$$String$$Vector4 = function(a0/*String*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 56, 37, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Color
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Color", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 57, 0, true, this); }
_jstype.definition.ctor$$Single$$Single$$Single$$Single = function(a0, a1, a2, a3) { CS.Call(5, 57, 1, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Single$$Single$$Single = function(a0, a1, a2) { CS.Call(5, 57, 2, true, this, a0, a1, a2); }

// fields

_jstype.fields.r =  { 
            get: function() { return CS.Call(0, 57, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 57, 0, false, this, v); } 
        };

_jstype.fields.g =  { 
            get: function() { return CS.Call(0, 57, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 57, 1, false, this, v); } 
        };

_jstype.fields.b =  { 
            get: function() { return CS.Call(0, 57, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 57, 2, false, this, v); } 
        };

_jstype.fields.a =  { 
            get: function() { return CS.Call(0, 57, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 57, 3, false, this, v); } 
        };

// properties

_jstype.staticDefinition.get_red = function() { return CS.Call(2, 57, 0, true); }
_jstype.staticDefinition.set_red = function(v) { return CS.Call(3, 57, 0, true, v); }

_jstype.staticDefinition.get_green = function() { return CS.Call(2, 57, 1, true); }
_jstype.staticDefinition.set_green = function(v) { return CS.Call(3, 57, 1, true, v); }

_jstype.staticDefinition.get_blue = function() { return CS.Call(2, 57, 2, true); }
_jstype.staticDefinition.set_blue = function(v) { return CS.Call(3, 57, 2, true, v); }

_jstype.staticDefinition.get_white = function() { return CS.Call(2, 57, 3, true); }
_jstype.staticDefinition.set_white = function(v) { return CS.Call(3, 57, 3, true, v); }

_jstype.staticDefinition.get_black = function() { return CS.Call(2, 57, 4, true); }
_jstype.staticDefinition.set_black = function(v) { return CS.Call(3, 57, 4, true, v); }

_jstype.staticDefinition.get_yellow = function() { return CS.Call(2, 57, 5, true); }
_jstype.staticDefinition.set_yellow = function(v) { return CS.Call(3, 57, 5, true, v); }

_jstype.staticDefinition.get_cyan = function() { return CS.Call(2, 57, 6, true); }
_jstype.staticDefinition.set_cyan = function(v) { return CS.Call(3, 57, 6, true, v); }

_jstype.staticDefinition.get_magenta = function() { return CS.Call(2, 57, 7, true); }
_jstype.staticDefinition.set_magenta = function(v) { return CS.Call(3, 57, 7, true, v); }

_jstype.staticDefinition.get_gray = function() { return CS.Call(2, 57, 8, true); }
_jstype.staticDefinition.set_gray = function(v) { return CS.Call(3, 57, 8, true, v); }

_jstype.staticDefinition.get_grey = function() { return CS.Call(2, 57, 9, true); }
_jstype.staticDefinition.set_grey = function(v) { return CS.Call(3, 57, 9, true, v); }

_jstype.staticDefinition.get_clear = function() { return CS.Call(2, 57, 10, true); }
_jstype.staticDefinition.set_clear = function(v) { return CS.Call(3, 57, 10, true, v); }

_jstype.definition.get_grayscale = function() { return CS.Call(2, 57, 11, false, this); }
_jstype.definition.set_grayscale = function(v) { return CS.Call(3, 57, 11, false, this, v); }

_jstype.definition.get_linear = function() { return CS.Call(2, 57, 12, false, this); }
_jstype.definition.set_linear = function(v) { return CS.Call(3, 57, 12, false, this, v); }

_jstype.definition.get_gamma = function() { return CS.Call(2, 57, 13, false, this); }
_jstype.definition.set_gamma = function(v) { return CS.Call(3, 57, 13, false, this, v); }

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 57, 14, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 57, 14, false, this, ind0, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 57, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 57, 1, false, this); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 57, 2, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 57, 3, false, this); 
}
/* static Color  */
_jstype.staticDefinition.Lerp = function(a0/*Color*/, a1/*Color*/, a2/*Single*/) { 
    
    return CS.Call(4, 57, 4, true, a0, a1, a2); 
}
/* static Color  */
_jstype.staticDefinition.op_Addition = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 57, 5, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Division = function(a0/*Color*/, a1/*Single*/) { 
    
    return CS.Call(4, 57, 6, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 57, 7, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Implicit$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 57, 8, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Implicit$$Color = function(a0/*Color*/) { 
    
    return CS.Call(4, 57, 9, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 57, 10, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Multiply$$Color$$Color = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 57, 11, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Multiply$$Color$$Single = function(a0/*Color*/, a1/*Single*/) { 
    
    return CS.Call(4, 57, 12, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Multiply$$Single$$Color = function(a0/*Single*/, a1/*Color*/) { 
    
    return CS.Call(4, 57, 13, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Subtraction = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 57, 14, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Color32
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Color32", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 58, 0, true, this); }
_jstype.definition.ctor$$Byte$$Byte$$Byte$$Byte = function(a0, a1, a2, a3) { CS.Call(5, 58, 1, true, this, a0, a1, a2, a3); }

// fields

_jstype.fields.r =  { 
            get: function() { return CS.Call(0, 58, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 58, 0, false, this, v); } 
        };

_jstype.fields.g =  { 
            get: function() { return CS.Call(0, 58, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 58, 1, false, this, v); } 
        };

_jstype.fields.b =  { 
            get: function() { return CS.Call(0, 58, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 58, 2, false, this, v); } 
        };

_jstype.fields.a =  { 
            get: function() { return CS.Call(0, 58, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 58, 3, false, this, v); } 
        };

// properties

// methods

/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 58, 0, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 58, 1, false, this); 
}
/* static Color32  */
_jstype.staticDefinition.Lerp = function(a0/*Color32*/, a1/*Color32*/, a2/*Single*/) { 
    
    return CS.Call(4, 58, 2, true, a0, a1, a2); 
}
/* static Color  */
_jstype.staticDefinition.op_Implicit$$Color32 = function(a0/*Color32*/) { 
    
    return CS.Call(4, 58, 3, true, a0); 
}
/* static Color32  */
_jstype.staticDefinition.op_Implicit$$Color = function(a0/*Color*/) { 
    
    return CS.Call(4, 58, 4, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Light
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Light", 
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 59, 0, true, this); }

// fields

// properties

_jstype.definition.get_type = function() { return CS.Call(2, 59, 0, false, this); }
_jstype.definition.set_type = function(v) { return CS.Call(3, 59, 0, false, this, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 59, 1, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 59, 1, false, this, v); }

_jstype.definition.get_intensity = function() { return CS.Call(2, 59, 2, false, this); }
_jstype.definition.set_intensity = function(v) { return CS.Call(3, 59, 2, false, this, v); }

_jstype.definition.get_shadows = function() { return CS.Call(2, 59, 3, false, this); }
_jstype.definition.set_shadows = function(v) { return CS.Call(3, 59, 3, false, this, v); }

_jstype.definition.get_shadowStrength = function() { return CS.Call(2, 59, 4, false, this); }
_jstype.definition.set_shadowStrength = function(v) { return CS.Call(3, 59, 4, false, this, v); }

_jstype.definition.get_shadowBias = function() { return CS.Call(2, 59, 5, false, this); }
_jstype.definition.set_shadowBias = function(v) { return CS.Call(3, 59, 5, false, this, v); }

_jstype.definition.get_shadowSoftness = function() { return CS.Call(2, 59, 6, false, this); }
_jstype.definition.set_shadowSoftness = function(v) { return CS.Call(3, 59, 6, false, this, v); }

_jstype.definition.get_shadowSoftnessFade = function() { return CS.Call(2, 59, 7, false, this); }
_jstype.definition.set_shadowSoftnessFade = function(v) { return CS.Call(3, 59, 7, false, this, v); }

_jstype.definition.get_range = function() { return CS.Call(2, 59, 8, false, this); }
_jstype.definition.set_range = function(v) { return CS.Call(3, 59, 8, false, this, v); }

_jstype.definition.get_spotAngle = function() { return CS.Call(2, 59, 9, false, this); }
_jstype.definition.set_spotAngle = function(v) { return CS.Call(3, 59, 9, false, this, v); }

_jstype.definition.get_cookieSize = function() { return CS.Call(2, 59, 10, false, this); }
_jstype.definition.set_cookieSize = function(v) { return CS.Call(3, 59, 10, false, this, v); }

_jstype.definition.get_cookie = function() { return CS.Call(2, 59, 11, false, this); }
_jstype.definition.set_cookie = function(v) { return CS.Call(3, 59, 11, false, this, v); }

_jstype.definition.get_flare = function() { return CS.Call(2, 59, 12, false, this); }
_jstype.definition.set_flare = function(v) { return CS.Call(3, 59, 12, false, this, v); }

_jstype.definition.get_renderMode = function() { return CS.Call(2, 59, 13, false, this); }
_jstype.definition.set_renderMode = function(v) { return CS.Call(3, 59, 13, false, this, v); }

_jstype.definition.get_alreadyLightmapped = function() { return CS.Call(2, 59, 14, false, this); }
_jstype.definition.set_alreadyLightmapped = function(v) { return CS.Call(3, 59, 14, false, this, v); }

_jstype.definition.get_cullingMask = function() { return CS.Call(2, 59, 15, false, this); }
_jstype.definition.set_cullingMask = function(v) { return CS.Call(3, 59, 15, false, this, v); }

// methods

/* static Light[]  */
_jstype.staticDefinition.GetLights = function(a0/*LightType*/, a1/*Int32*/) { 
    
    return CS.Call(4, 59, 0, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$NavMeshAgent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.NavMeshAgent", 
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 60, 0, true, this); }

// fields

// properties

_jstype.definition.get_destination = function() { return CS.Call(2, 60, 0, false, this); }
_jstype.definition.set_destination = function(v) { return CS.Call(3, 60, 0, false, this, v); }

_jstype.definition.get_stoppingDistance = function() { return CS.Call(2, 60, 1, false, this); }
_jstype.definition.set_stoppingDistance = function(v) { return CS.Call(3, 60, 1, false, this, v); }

_jstype.definition.get_velocity = function() { return CS.Call(2, 60, 2, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 60, 2, false, this, v); }

_jstype.definition.get_nextPosition = function() { return CS.Call(2, 60, 3, false, this); }
_jstype.definition.set_nextPosition = function(v) { return CS.Call(3, 60, 3, false, this, v); }

_jstype.definition.get_steeringTarget = function() { return CS.Call(2, 60, 4, false, this); }
_jstype.definition.set_steeringTarget = function(v) { return CS.Call(3, 60, 4, false, this, v); }

_jstype.definition.get_desiredVelocity = function() { return CS.Call(2, 60, 5, false, this); }
_jstype.definition.set_desiredVelocity = function(v) { return CS.Call(3, 60, 5, false, this, v); }

_jstype.definition.get_remainingDistance = function() { return CS.Call(2, 60, 6, false, this); }
_jstype.definition.set_remainingDistance = function(v) { return CS.Call(3, 60, 6, false, this, v); }

_jstype.definition.get_baseOffset = function() { return CS.Call(2, 60, 7, false, this); }
_jstype.definition.set_baseOffset = function(v) { return CS.Call(3, 60, 7, false, this, v); }

_jstype.definition.get_isOnOffMeshLink = function() { return CS.Call(2, 60, 8, false, this); }
_jstype.definition.set_isOnOffMeshLink = function(v) { return CS.Call(3, 60, 8, false, this, v); }

_jstype.definition.get_currentOffMeshLinkData = function() { return CS.Call(2, 60, 9, false, this); }
_jstype.definition.set_currentOffMeshLinkData = function(v) { return CS.Call(3, 60, 9, false, this, v); }

_jstype.definition.get_nextOffMeshLinkData = function() { return CS.Call(2, 60, 10, false, this); }
_jstype.definition.set_nextOffMeshLinkData = function(v) { return CS.Call(3, 60, 10, false, this, v); }

_jstype.definition.get_autoTraverseOffMeshLink = function() { return CS.Call(2, 60, 11, false, this); }
_jstype.definition.set_autoTraverseOffMeshLink = function(v) { return CS.Call(3, 60, 11, false, this, v); }

_jstype.definition.get_autoBraking = function() { return CS.Call(2, 60, 12, false, this); }
_jstype.definition.set_autoBraking = function(v) { return CS.Call(3, 60, 12, false, this, v); }

_jstype.definition.get_autoRepath = function() { return CS.Call(2, 60, 13, false, this); }
_jstype.definition.set_autoRepath = function(v) { return CS.Call(3, 60, 13, false, this, v); }

_jstype.definition.get_hasPath = function() { return CS.Call(2, 60, 14, false, this); }
_jstype.definition.set_hasPath = function(v) { return CS.Call(3, 60, 14, false, this, v); }

_jstype.definition.get_pathPending = function() { return CS.Call(2, 60, 15, false, this); }
_jstype.definition.set_pathPending = function(v) { return CS.Call(3, 60, 15, false, this, v); }

_jstype.definition.get_isPathStale = function() { return CS.Call(2, 60, 16, false, this); }
_jstype.definition.set_isPathStale = function(v) { return CS.Call(3, 60, 16, false, this, v); }

_jstype.definition.get_pathStatus = function() { return CS.Call(2, 60, 17, false, this); }
_jstype.definition.set_pathStatus = function(v) { return CS.Call(3, 60, 17, false, this, v); }

_jstype.definition.get_pathEndPosition = function() { return CS.Call(2, 60, 18, false, this); }
_jstype.definition.set_pathEndPosition = function(v) { return CS.Call(3, 60, 18, false, this, v); }

_jstype.definition.get_path = function() { return CS.Call(2, 60, 19, false, this); }
_jstype.definition.set_path = function(v) { return CS.Call(3, 60, 19, false, this, v); }

_jstype.definition.get_walkableMask = function() { return CS.Call(2, 60, 20, false, this); }
_jstype.definition.set_walkableMask = function(v) { return CS.Call(3, 60, 20, false, this, v); }

_jstype.definition.get_speed = function() { return CS.Call(2, 60, 21, false, this); }
_jstype.definition.set_speed = function(v) { return CS.Call(3, 60, 21, false, this, v); }

_jstype.definition.get_angularSpeed = function() { return CS.Call(2, 60, 22, false, this); }
_jstype.definition.set_angularSpeed = function(v) { return CS.Call(3, 60, 22, false, this, v); }

_jstype.definition.get_acceleration = function() { return CS.Call(2, 60, 23, false, this); }
_jstype.definition.set_acceleration = function(v) { return CS.Call(3, 60, 23, false, this, v); }

_jstype.definition.get_updatePosition = function() { return CS.Call(2, 60, 24, false, this); }
_jstype.definition.set_updatePosition = function(v) { return CS.Call(3, 60, 24, false, this, v); }

_jstype.definition.get_updateRotation = function() { return CS.Call(2, 60, 25, false, this); }
_jstype.definition.set_updateRotation = function(v) { return CS.Call(3, 60, 25, false, this, v); }

_jstype.definition.get_radius = function() { return CS.Call(2, 60, 26, false, this); }
_jstype.definition.set_radius = function(v) { return CS.Call(3, 60, 26, false, this, v); }

_jstype.definition.get_height = function() { return CS.Call(2, 60, 27, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 60, 27, false, this, v); }

_jstype.definition.get_obstacleAvoidanceType = function() { return CS.Call(2, 60, 28, false, this); }
_jstype.definition.set_obstacleAvoidanceType = function(v) { return CS.Call(3, 60, 28, false, this, v); }

_jstype.definition.get_avoidancePriority = function() { return CS.Call(2, 60, 29, false, this); }
_jstype.definition.set_avoidancePriority = function(v) { return CS.Call(3, 60, 29, false, this, v); }

// methods

/* Void */
_jstype.definition.ActivateCurrentOffMeshLink = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 60, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.CalculatePath = function(a0/*Vector3*/, a1/*NavMeshPath*/) { 
    
    return CS.Call(4, 60, 1, false, this, a0, a1); 
}
/* Void */
_jstype.definition.CompleteOffMeshLink = function() { 
    
    return CS.Call(4, 60, 2, false, this); 
}
/* Boolean */
_jstype.definition.FindClosestEdge = function(a0/*NavMeshHit&*/) { 
    
    return CS.Call(4, 60, 3, false, this, a0); 
}
/* Single */
_jstype.definition.GetLayerCost = function(a0/*Int32*/) { 
    
    return CS.Call(4, 60, 4, false, this, a0); 
}
/* Void */
_jstype.definition.Move = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 60, 5, false, this, a0); 
}
/* Boolean */
_jstype.definition.Raycast = function(a0/*Vector3*/, a1/*NavMeshHit&*/) { 
    
    return CS.Call(4, 60, 6, false, this, a0, a1); 
}
/* Void */
_jstype.definition.ResetPath = function() { 
    
    return CS.Call(4, 60, 7, false, this); 
}
/* Void */
_jstype.definition.Resume = function() { 
    
    return CS.Call(4, 60, 8, false, this); 
}
/* Boolean */
_jstype.definition.SamplePathPosition = function(a0/*Int32*/, a1/*Single*/, a2/*NavMeshHit&*/) { 
    
    return CS.Call(4, 60, 9, false, this, a0, a1, a2); 
}
/* Boolean */
_jstype.definition.SetDestination = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 60, 10, false, this, a0); 
}
/* Void */
_jstype.definition.SetLayerCost = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 60, 11, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.SetPath = function(a0/*NavMeshPath*/) { 
    
    return CS.Call(4, 60, 12, false, this, a0); 
}
/* Void */
_jstype.definition.Stop$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 60, 13, false, this, a0); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 60, 14, false, this); 
}
/* Boolean */
_jstype.definition.Warp = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 60, 15, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$NavMeshPath
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.NavMeshPath", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 61, 0, true, this); }

// fields

// properties

_jstype.definition.get_corners = function() { return CS.Call(2, 61, 0, false, this); }
_jstype.definition.set_corners = function(v) { return CS.Call(3, 61, 0, false, this, v); }

_jstype.definition.get_status = function() { return CS.Call(2, 61, 1, false, this); }
_jstype.definition.set_status = function(v) { return CS.Call(3, 61, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.ClearCorners = function() { 
    
    return CS.Call(4, 61, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Bounds
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Bounds", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 62, 0, true, this); }
_jstype.definition.ctor$$Vector3$$Vector3 = function(a0, a1) { CS.Call(5, 62, 1, true, this, a0, a1); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 62, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 62, 0, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 62, 1, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 62, 1, false, this, v); }

_jstype.definition.get_extents = function() { return CS.Call(2, 62, 2, false, this); }
_jstype.definition.set_extents = function(v) { return CS.Call(3, 62, 2, false, this, v); }

_jstype.definition.get_min = function() { return CS.Call(2, 62, 3, false, this); }
_jstype.definition.set_min = function(v) { return CS.Call(3, 62, 3, false, this, v); }

_jstype.definition.get_max = function() { return CS.Call(2, 62, 4, false, this); }
_jstype.definition.set_max = function(v) { return CS.Call(3, 62, 4, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Contains = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 62, 0, false, this, a0); 
}
/* Void */
_jstype.definition.Encapsulate$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 62, 1, false, this, a0); 
}
/* Void */
_jstype.definition.Encapsulate$$Bounds = function(a0/*Bounds*/) { 
    
    return CS.Call(4, 62, 2, false, this, a0); 
}
/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 62, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Expand$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 62, 4, false, this, a0); 
}
/* Void */
_jstype.definition.Expand$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 62, 5, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 62, 6, false, this); 
}
/* Boolean */
_jstype.definition.IntersectRay$$Ray$$Single = function(a0/*Ray*/, a1/*Single&*/) { 
    
    return CS.Call(4, 62, 7, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.IntersectRay$$Ray = function(a0/*Ray*/) { 
    
    return CS.Call(4, 62, 8, false, this, a0); 
}
/* Boolean */
_jstype.definition.Intersects = function(a0/*Bounds*/) { 
    
    return CS.Call(4, 62, 9, false, this, a0); 
}
/* Void */
_jstype.definition.SetMinMax = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 62, 10, false, this, a0, a1); 
}
/* Single */
_jstype.definition.SqrDistance = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 62, 11, false, this, a0); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 62, 12, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 62, 13, false, this); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Bounds*/, a1/*Bounds*/) { 
    
    return CS.Call(4, 62, 14, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Bounds*/, a1/*Bounds*/) { 
    
    return CS.Call(4, 62, 15, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Rect
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Rect", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 63, 0, true, this); }
_jstype.definition.ctor$$Single$$Single$$Single$$Single = function(a0, a1, a2, a3) { CS.Call(5, 63, 1, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Rect = function(a0) { CS.Call(5, 63, 2, true, this, a0); }

// fields

// properties

_jstype.definition.get_x = function() { return CS.Call(2, 63, 0, false, this); }
_jstype.definition.set_x = function(v) { return CS.Call(3, 63, 0, false, this, v); }

_jstype.definition.get_y = function() { return CS.Call(2, 63, 1, false, this); }
_jstype.definition.set_y = function(v) { return CS.Call(3, 63, 1, false, this, v); }

_jstype.definition.get_position = function() { return CS.Call(2, 63, 2, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 63, 2, false, this, v); }

_jstype.definition.get_center = function() { return CS.Call(2, 63, 3, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 63, 3, false, this, v); }

_jstype.definition.get_min = function() { return CS.Call(2, 63, 4, false, this); }
_jstype.definition.set_min = function(v) { return CS.Call(3, 63, 4, false, this, v); }

_jstype.definition.get_max = function() { return CS.Call(2, 63, 5, false, this); }
_jstype.definition.set_max = function(v) { return CS.Call(3, 63, 5, false, this, v); }

_jstype.definition.get_width = function() { return CS.Call(2, 63, 6, false, this); }
_jstype.definition.set_width = function(v) { return CS.Call(3, 63, 6, false, this, v); }

_jstype.definition.get_height = function() { return CS.Call(2, 63, 7, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 63, 7, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 63, 8, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 63, 8, false, this, v); }

_jstype.definition.get_xMin = function() { return CS.Call(2, 63, 9, false, this); }
_jstype.definition.set_xMin = function(v) { return CS.Call(3, 63, 9, false, this, v); }

_jstype.definition.get_yMin = function() { return CS.Call(2, 63, 10, false, this); }
_jstype.definition.set_yMin = function(v) { return CS.Call(3, 63, 10, false, this, v); }

_jstype.definition.get_xMax = function() { return CS.Call(2, 63, 11, false, this); }
_jstype.definition.set_xMax = function(v) { return CS.Call(3, 63, 11, false, this, v); }

_jstype.definition.get_yMax = function() { return CS.Call(2, 63, 12, false, this); }
_jstype.definition.set_yMax = function(v) { return CS.Call(3, 63, 12, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Contains$$Vector3$$Boolean = function(a0/*Vector3*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 63, 0, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.Contains$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 63, 1, false, this, a0); 
}
/* Boolean */
_jstype.definition.Contains$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 63, 2, false, this, a0); 
}
/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 63, 3, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 63, 4, false, this); 
}
/* Boolean */
_jstype.definition.Overlaps$$Rect$$Boolean = function(a0/*Rect*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 63, 5, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.Overlaps$$Rect = function(a0/*Rect*/) { 
    
    return CS.Call(4, 63, 6, false, this, a0); 
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 63, 7, false, this, a0, a1, a2, a3); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 63, 8, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 63, 9, false, this); 
}
/* static Rect  */
_jstype.staticDefinition.MinMaxRect = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 63, 10, true, a0, a1, a2, a3); 
}
/* static Vector2  */
_jstype.staticDefinition.NormalizedToPoint = function(a0/*Rect*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 63, 11, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Rect*/, a1/*Rect*/) { 
    
    return CS.Call(4, 63, 12, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Rect*/, a1/*Rect*/) { 
    
    return CS.Call(4, 63, 13, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.PointToNormalized = function(a0/*Rect*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 63, 14, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$RectOffset
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.RectOffset", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 64, 0, true, this); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32 = function(a0, a1, a2, a3) { CS.Call(5, 64, 1, true, this, a0, a1, a2, a3); }

// fields

// properties

_jstype.definition.get_left = function() { return CS.Call(2, 64, 0, false, this); }
_jstype.definition.set_left = function(v) { return CS.Call(3, 64, 0, false, this, v); }

_jstype.definition.get_right = function() { return CS.Call(2, 64, 1, false, this); }
_jstype.definition.set_right = function(v) { return CS.Call(3, 64, 1, false, this, v); }

_jstype.definition.get_top = function() { return CS.Call(2, 64, 2, false, this); }
_jstype.definition.set_top = function(v) { return CS.Call(3, 64, 2, false, this, v); }

_jstype.definition.get_bottom = function() { return CS.Call(2, 64, 3, false, this); }
_jstype.definition.set_bottom = function(v) { return CS.Call(3, 64, 3, false, this, v); }

_jstype.definition.get_horizontal = function() { return CS.Call(2, 64, 4, false, this); }
_jstype.definition.set_horizontal = function(v) { return CS.Call(3, 64, 4, false, this, v); }

_jstype.definition.get_vertical = function() { return CS.Call(2, 64, 5, false, this); }
_jstype.definition.set_vertical = function(v) { return CS.Call(3, 64, 5, false, this, v); }

// methods

/* Rect */
_jstype.definition.Add = function(a0/*Rect*/) { 
    
    return CS.Call(4, 64, 0, false, this, a0); 
}
/* Rect */
_jstype.definition.Remove = function(a0/*Rect*/) { 
    
    return CS.Call(4, 64, 1, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 64, 2, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Physics
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Physics", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 65, 0, true, this); }

// fields

_jstype.staticFields.kIgnoreRaycastLayer =  { 
            get: function() { return CS.Call(0, 65, 0, true); }, 
            set: function(v) { return CS.Call(1, 65, 0, true, v); } 
        };

_jstype.staticFields.kDefaultRaycastLayers =  { 
            get: function() { return CS.Call(0, 65, 1, true); }, 
            set: function(v) { return CS.Call(1, 65, 1, true, v); } 
        };

_jstype.staticFields.kAllLayers =  { 
            get: function() { return CS.Call(0, 65, 2, true); }, 
            set: function(v) { return CS.Call(1, 65, 2, true, v); } 
        };

_jstype.staticFields.IgnoreRaycastLayer =  { 
            get: function() { return CS.Call(0, 65, 3, true); }, 
            set: function(v) { return CS.Call(1, 65, 3, true, v); } 
        };

_jstype.staticFields.DefaultRaycastLayers =  { 
            get: function() { return CS.Call(0, 65, 4, true); }, 
            set: function(v) { return CS.Call(1, 65, 4, true, v); } 
        };

_jstype.staticFields.AllLayers =  { 
            get: function() { return CS.Call(0, 65, 5, true); }, 
            set: function(v) { return CS.Call(1, 65, 5, true, v); } 
        };

// properties

_jstype.staticDefinition.get_gravity = function() { return CS.Call(2, 65, 0, true); }
_jstype.staticDefinition.set_gravity = function(v) { return CS.Call(3, 65, 0, true, v); }

_jstype.staticDefinition.get_minPenetrationForPenalty = function() { return CS.Call(2, 65, 1, true); }
_jstype.staticDefinition.set_minPenetrationForPenalty = function(v) { return CS.Call(3, 65, 1, true, v); }

_jstype.staticDefinition.get_bounceThreshold = function() { return CS.Call(2, 65, 2, true); }
_jstype.staticDefinition.set_bounceThreshold = function(v) { return CS.Call(3, 65, 2, true, v); }

_jstype.staticDefinition.get_sleepVelocity = function() { return CS.Call(2, 65, 3, true); }
_jstype.staticDefinition.set_sleepVelocity = function(v) { return CS.Call(3, 65, 3, true, v); }

_jstype.staticDefinition.get_sleepAngularVelocity = function() { return CS.Call(2, 65, 4, true); }
_jstype.staticDefinition.set_sleepAngularVelocity = function(v) { return CS.Call(3, 65, 4, true, v); }

_jstype.staticDefinition.get_maxAngularVelocity = function() { return CS.Call(2, 65, 5, true); }
_jstype.staticDefinition.set_maxAngularVelocity = function(v) { return CS.Call(3, 65, 5, true, v); }

_jstype.staticDefinition.get_solverIterationCount = function() { return CS.Call(2, 65, 6, true); }
_jstype.staticDefinition.set_solverIterationCount = function(v) { return CS.Call(3, 65, 6, true, v); }

// methods

/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3$$RaycastHit$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*RaycastHit&*/, a5/*Single*/, a6/*Int32*/) { 
    
    return CS.Call(4, 65, 0, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*Single*/, a5/*Int32*/) { 
    
    return CS.Call(4, 65, 1, true, a0, a1, a2, a3, a4, a5); 
}
/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3$$RaycastHit$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*RaycastHit&*/, a5/*Single*/) { 
    
    return CS.Call(4, 65, 2, true, a0, a1, a2, a3, a4, a5); 
}
/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*Single*/) { 
    
    return CS.Call(4, 65, 3, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3$$RaycastHit = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*RaycastHit&*/) { 
    
    return CS.Call(4, 65, 4, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/) { 
    
    return CS.Call(4, 65, 5, true, a0, a1, a2, a3); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.CapsuleCastAll$$Vector3$$Vector3$$Single$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*Single*/, a5/*Int32*/) { 
    
    return CS.Call(4, 65, 6, true, a0, a1, a2, a3, a4, a5); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.CapsuleCastAll$$Vector3$$Vector3$$Single$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*Single*/) { 
    
    return CS.Call(4, 65, 7, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.CapsuleCastAll$$Vector3$$Vector3$$Single$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/) { 
    
    return CS.Call(4, 65, 8, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.CheckCapsule$$Vector3$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 65, 9, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.CheckCapsule$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 65, 10, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.CheckSphere$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 65, 11, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.CheckSphere$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 65, 12, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.GetIgnoreLayerCollision = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 65, 13, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreCollision$$Collider$$Collider$$Boolean = function(a0/*Collider*/, a1/*Collider*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 65, 14, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreCollision$$Collider$$Collider = function(a0/*Collider*/, a1/*Collider*/) { 
    
    return CS.Call(4, 65, 15, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreLayerCollision$$Int32$$Int32$$Boolean = function(a0/*Int32*/, a1/*Int32*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 65, 16, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreLayerCollision$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 65, 17, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Linecast$$Vector3$$Vector3$$RaycastHit$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*RaycastHit&*/, a3/*Int32*/) { 
    
    return CS.Call(4, 65, 18, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Linecast$$Vector3$$Vector3$$RaycastHit = function(a0/*Vector3*/, a1/*Vector3*/, a2/*RaycastHit&*/) { 
    
    return CS.Call(4, 65, 19, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Linecast$$Vector3$$Vector3$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Int32*/) { 
    
    return CS.Call(4, 65, 20, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Linecast$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 65, 21, true, a0, a1); 
}
/* static Collider[]  */
_jstype.staticDefinition.OverlapSphere$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 65, 22, true, a0, a1, a2); 
}
/* static Collider[]  */
_jstype.staticDefinition.OverlapSphere$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 65, 23, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3$$RaycastHit$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*RaycastHit&*/, a3/*Single*/, a4/*Int32*/) { 
    
    return CS.Call(4, 65, 24, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 65, 25, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray$$RaycastHit$$Single$$Int32 = function(a0/*Ray*/, a1/*RaycastHit&*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 65, 26, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3$$RaycastHit$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*RaycastHit&*/, a3/*Single*/) { 
    
    return CS.Call(4, 65, 27, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray$$RaycastHit$$Single = function(a0/*Ray*/, a1/*RaycastHit&*/, a2/*Single*/) { 
    
    return CS.Call(4, 65, 28, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 65, 29, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3$$RaycastHit = function(a0/*Vector3*/, a1/*Vector3*/, a2/*RaycastHit&*/) { 
    
    return CS.Call(4, 65, 30, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 65, 31, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray$$RaycastHit = function(a0/*Ray*/, a1/*RaycastHit&*/) { 
    
    return CS.Call(4, 65, 32, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray$$Single = function(a0/*Ray*/, a1/*Single*/) { 
    
    return CS.Call(4, 65, 33, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 65, 34, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray = function(a0/*Ray*/) { 
    
    return CS.Call(4, 65, 35, true, a0); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Vector3$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 65, 36, true, a0, a1, a2, a3); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Ray$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 65, 37, true, a0, a1, a2); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 65, 38, true, a0, a1, a2); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Ray$$Single = function(a0/*Ray*/, a1/*Single*/) { 
    
    return CS.Call(4, 65, 39, true, a0, a1); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 65, 40, true, a0, a1); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Ray = function(a0/*Ray*/) { 
    
    return CS.Call(4, 65, 41, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Vector3$$Single$$Vector3$$RaycastHit$$Single$$Int32 = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/, a3/*RaycastHit&*/, a4/*Single*/, a5/*Int32*/) { 
    
    return CS.Call(4, 65, 42, true, a0, a1, a2, a3, a4, a5); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single$$RaycastHit$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*RaycastHit&*/, a3/*Single*/, a4/*Int32*/) { 
    
    return CS.Call(4, 65, 43, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Vector3$$Single$$Vector3$$RaycastHit$$Single = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/, a3/*RaycastHit&*/, a4/*Single*/) { 
    
    return CS.Call(4, 65, 44, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 65, 45, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single$$RaycastHit$$Single = function(a0/*Ray*/, a1/*Single*/, a2/*RaycastHit&*/, a3/*Single*/) { 
    
    return CS.Call(4, 65, 46, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Vector3$$Single$$Vector3$$RaycastHit = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/, a3/*RaycastHit&*/) { 
    
    return CS.Call(4, 65, 47, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single$$RaycastHit = function(a0/*Ray*/, a1/*Single*/, a2/*RaycastHit&*/) { 
    
    return CS.Call(4, 65, 48, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single$$Single = function(a0/*Ray*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 65, 49, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single = function(a0/*Ray*/, a1/*Single*/) { 
    
    return CS.Call(4, 65, 50, true, a0, a1); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Vector3$$Single$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/, a3/*Single*/, a4/*Int32*/) { 
    
    return CS.Call(4, 65, 51, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Vector3$$Single$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/, a3/*Single*/) { 
    
    return CS.Call(4, 65, 52, true, a0, a1, a2, a3); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Ray$$Single$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 65, 53, true, a0, a1, a2, a3); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Ray$$Single$$Single = function(a0/*Ray*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 65, 54, true, a0, a1, a2); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Vector3$$Single$$Vector3 = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/) { 
    
    return CS.Call(4, 65, 55, true, a0, a1, a2); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Ray$$Single = function(a0/*Ray*/, a1/*Single*/) { 
    
    return CS.Call(4, 65, 56, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$RaycastHit
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.RaycastHit", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 66, 0, true, this); }

// fields

// properties

_jstype.definition.get_point = function() { return CS.Call(2, 66, 0, false, this); }
_jstype.definition.set_point = function(v) { return CS.Call(3, 66, 0, false, this, v); }

_jstype.definition.get_normal = function() { return CS.Call(2, 66, 1, false, this); }
_jstype.definition.set_normal = function(v) { return CS.Call(3, 66, 1, false, this, v); }

_jstype.definition.get_barycentricCoordinate = function() { return CS.Call(2, 66, 2, false, this); }
_jstype.definition.set_barycentricCoordinate = function(v) { return CS.Call(3, 66, 2, false, this, v); }

_jstype.definition.get_distance = function() { return CS.Call(2, 66, 3, false, this); }
_jstype.definition.set_distance = function(v) { return CS.Call(3, 66, 3, false, this, v); }

_jstype.definition.get_triangleIndex = function() { return CS.Call(2, 66, 4, false, this); }
_jstype.definition.set_triangleIndex = function(v) { return CS.Call(3, 66, 4, false, this, v); }

_jstype.definition.get_textureCoord = function() { return CS.Call(2, 66, 5, false, this); }
_jstype.definition.set_textureCoord = function(v) { return CS.Call(3, 66, 5, false, this, v); }

_jstype.definition.get_textureCoord2 = function() { return CS.Call(2, 66, 6, false, this); }
_jstype.definition.set_textureCoord2 = function(v) { return CS.Call(3, 66, 6, false, this, v); }

_jstype.definition.get_lightmapCoord = function() { return CS.Call(2, 66, 7, false, this); }
_jstype.definition.set_lightmapCoord = function(v) { return CS.Call(3, 66, 7, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 66, 8, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 66, 8, false, this, v); }

_jstype.definition.get_rigidbody = function() { return CS.Call(2, 66, 9, false, this); }
_jstype.definition.set_rigidbody = function(v) { return CS.Call(3, 66, 9, false, this, v); }

_jstype.definition.get_transform = function() { return CS.Call(2, 66, 10, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 66, 10, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Rigidbody
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Rigidbody", 
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 67, 0, true, this); }

// fields

// properties

_jstype.definition.get_velocity = function() { return CS.Call(2, 67, 0, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 67, 0, false, this, v); }

_jstype.definition.get_angularVelocity = function() { return CS.Call(2, 67, 1, false, this); }
_jstype.definition.set_angularVelocity = function(v) { return CS.Call(3, 67, 1, false, this, v); }

_jstype.definition.get_drag = function() { return CS.Call(2, 67, 2, false, this); }
_jstype.definition.set_drag = function(v) { return CS.Call(3, 67, 2, false, this, v); }

_jstype.definition.get_angularDrag = function() { return CS.Call(2, 67, 3, false, this); }
_jstype.definition.set_angularDrag = function(v) { return CS.Call(3, 67, 3, false, this, v); }

_jstype.definition.get_mass = function() { return CS.Call(2, 67, 4, false, this); }
_jstype.definition.set_mass = function(v) { return CS.Call(3, 67, 4, false, this, v); }

_jstype.definition.get_useGravity = function() { return CS.Call(2, 67, 5, false, this); }
_jstype.definition.set_useGravity = function(v) { return CS.Call(3, 67, 5, false, this, v); }

_jstype.definition.get_isKinematic = function() { return CS.Call(2, 67, 6, false, this); }
_jstype.definition.set_isKinematic = function(v) { return CS.Call(3, 67, 6, false, this, v); }

_jstype.definition.get_freezeRotation = function() { return CS.Call(2, 67, 7, false, this); }
_jstype.definition.set_freezeRotation = function(v) { return CS.Call(3, 67, 7, false, this, v); }

_jstype.definition.get_constraints = function() { return CS.Call(2, 67, 8, false, this); }
_jstype.definition.set_constraints = function(v) { return CS.Call(3, 67, 8, false, this, v); }

_jstype.definition.get_collisionDetectionMode = function() { return CS.Call(2, 67, 9, false, this); }
_jstype.definition.set_collisionDetectionMode = function(v) { return CS.Call(3, 67, 9, false, this, v); }

_jstype.definition.get_centerOfMass = function() { return CS.Call(2, 67, 10, false, this); }
_jstype.definition.set_centerOfMass = function(v) { return CS.Call(3, 67, 10, false, this, v); }

_jstype.definition.get_worldCenterOfMass = function() { return CS.Call(2, 67, 11, false, this); }
_jstype.definition.set_worldCenterOfMass = function(v) { return CS.Call(3, 67, 11, false, this, v); }

_jstype.definition.get_inertiaTensorRotation = function() { return CS.Call(2, 67, 12, false, this); }
_jstype.definition.set_inertiaTensorRotation = function(v) { return CS.Call(3, 67, 12, false, this, v); }

_jstype.definition.get_inertiaTensor = function() { return CS.Call(2, 67, 13, false, this); }
_jstype.definition.set_inertiaTensor = function(v) { return CS.Call(3, 67, 13, false, this, v); }

_jstype.definition.get_detectCollisions = function() { return CS.Call(2, 67, 14, false, this); }
_jstype.definition.set_detectCollisions = function(v) { return CS.Call(3, 67, 14, false, this, v); }

_jstype.definition.get_useConeFriction = function() { return CS.Call(2, 67, 15, false, this); }
_jstype.definition.set_useConeFriction = function(v) { return CS.Call(3, 67, 15, false, this, v); }

_jstype.definition.get_position = function() { return CS.Call(2, 67, 16, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 67, 16, false, this, v); }

_jstype.definition.get_rotation = function() { return CS.Call(2, 67, 17, false, this); }
_jstype.definition.set_rotation = function(v) { return CS.Call(3, 67, 17, false, this, v); }

_jstype.definition.get_interpolation = function() { return CS.Call(2, 67, 18, false, this); }
_jstype.definition.set_interpolation = function(v) { return CS.Call(3, 67, 18, false, this, v); }

_jstype.definition.get_solverIterationCount = function() { return CS.Call(2, 67, 19, false, this); }
_jstype.definition.set_solverIterationCount = function(v) { return CS.Call(3, 67, 19, false, this, v); }

_jstype.definition.get_sleepVelocity = function() { return CS.Call(2, 67, 20, false, this); }
_jstype.definition.set_sleepVelocity = function(v) { return CS.Call(3, 67, 20, false, this, v); }

_jstype.definition.get_sleepAngularVelocity = function() { return CS.Call(2, 67, 21, false, this); }
_jstype.definition.set_sleepAngularVelocity = function(v) { return CS.Call(3, 67, 21, false, this, v); }

_jstype.definition.get_maxAngularVelocity = function() { return CS.Call(2, 67, 22, false, this); }
_jstype.definition.set_maxAngularVelocity = function(v) { return CS.Call(3, 67, 22, false, this, v); }

// methods

/* Void */
_jstype.definition.AddExplosionForce$$Single$$Vector3$$Single$$Single$$ForceMode = function(a0/*Single*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/, a4/*ForceMode*/) { 
    
    return CS.Call(4, 67, 0, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.AddExplosionForce$$Single$$Vector3$$Single$$Single = function(a0/*Single*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 67, 1, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddExplosionForce$$Single$$Vector3$$Single = function(a0/*Single*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 67, 2, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddForce$$Single$$Single$$Single$$ForceMode = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*ForceMode*/) { 
    
    return CS.Call(4, 67, 3, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddForce$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 67, 4, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddForce$$Vector3$$ForceMode = function(a0/*Vector3*/, a1/*ForceMode*/) { 
    
    return CS.Call(4, 67, 5, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddForce$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 67, 6, false, this, a0); 
}
/* Void */
_jstype.definition.AddForceAtPosition$$Vector3$$Vector3$$ForceMode = function(a0/*Vector3*/, a1/*Vector3*/, a2/*ForceMode*/) { 
    
    return CS.Call(4, 67, 7, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddForceAtPosition$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 67, 8, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddRelativeForce$$Single$$Single$$Single$$ForceMode = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*ForceMode*/) { 
    
    return CS.Call(4, 67, 9, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddRelativeForce$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 67, 10, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddRelativeForce$$Vector3$$ForceMode = function(a0/*Vector3*/, a1/*ForceMode*/) { 
    
    return CS.Call(4, 67, 11, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddRelativeForce$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 67, 12, false, this, a0); 
}
/* Void */
_jstype.definition.AddRelativeTorque$$Single$$Single$$Single$$ForceMode = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*ForceMode*/) { 
    
    return CS.Call(4, 67, 13, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddRelativeTorque$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 67, 14, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddRelativeTorque$$Vector3$$ForceMode = function(a0/*Vector3*/, a1/*ForceMode*/) { 
    
    return CS.Call(4, 67, 15, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddRelativeTorque$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 67, 16, false, this, a0); 
}
/* Void */
_jstype.definition.AddTorque$$Single$$Single$$Single$$ForceMode = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*ForceMode*/) { 
    
    return CS.Call(4, 67, 17, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddTorque$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 67, 18, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddTorque$$Vector3$$ForceMode = function(a0/*Vector3*/, a1/*ForceMode*/) { 
    
    return CS.Call(4, 67, 19, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddTorque$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 67, 20, false, this, a0); 
}
/* Vector3 */
_jstype.definition.ClosestPointOnBounds = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 67, 21, false, this, a0); 
}
/* Vector3 */
_jstype.definition.GetPointVelocity = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 67, 22, false, this, a0); 
}
/* Vector3 */
_jstype.definition.GetRelativePointVelocity = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 67, 23, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsSleeping = function() { 
    
    return CS.Call(4, 67, 24, false, this); 
}
/* Void */
_jstype.definition.MovePosition = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 67, 25, false, this, a0); 
}
/* Void */
_jstype.definition.MoveRotation = function(a0/*Quaternion*/) { 
    
    return CS.Call(4, 67, 26, false, this, a0); 
}
/* Void */
_jstype.definition.SetDensity = function(a0/*Single*/) { 
    
    return CS.Call(4, 67, 27, false, this, a0); 
}
/* Void */
_jstype.definition.Sleep = function() { 
    
    return CS.Call(4, 67, 28, false, this); 
}
/* Boolean */
_jstype.definition.SweepTest$$Vector3$$RaycastHit$$Single = function(a0/*Vector3*/, a1/*RaycastHit&*/, a2/*Single*/) { 
    
    return CS.Call(4, 67, 29, false, this, a0, a1, a2); 
}
/* Boolean */
_jstype.definition.SweepTest$$Vector3$$RaycastHit = function(a0/*Vector3*/, a1/*RaycastHit&*/) { 
    
    return CS.Call(4, 67, 30, false, this, a0, a1); 
}
/* RaycastHit[] */
_jstype.definition.SweepTestAll$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 67, 31, false, this, a0, a1); 
}
/* RaycastHit[] */
_jstype.definition.SweepTestAll$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 67, 32, false, this, a0); 
}
/* Void */
_jstype.definition.WakeUp = function() { 
    
    return CS.Call(4, 67, 33, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Collider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Collider", 
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 68, 0, true, this); }

// fields

// properties

_jstype.definition.get_enabled = function() { return CS.Call(2, 68, 0, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 68, 0, false, this, v); }

_jstype.definition.get_attachedRigidbody = function() { return CS.Call(2, 68, 1, false, this); }
_jstype.definition.set_attachedRigidbody = function(v) { return CS.Call(3, 68, 1, false, this, v); }

_jstype.definition.get_isTrigger = function() { return CS.Call(2, 68, 2, false, this); }
_jstype.definition.set_isTrigger = function(v) { return CS.Call(3, 68, 2, false, this, v); }

_jstype.definition.get_material = function() { return CS.Call(2, 68, 3, false, this); }
_jstype.definition.set_material = function(v) { return CS.Call(3, 68, 3, false, this, v); }

_jstype.definition.get_sharedMaterial = function() { return CS.Call(2, 68, 4, false, this); }
_jstype.definition.set_sharedMaterial = function(v) { return CS.Call(3, 68, 4, false, this, v); }

_jstype.definition.get_bounds = function() { return CS.Call(2, 68, 5, false, this); }
_jstype.definition.set_bounds = function(v) { return CS.Call(3, 68, 5, false, this, v); }

// methods

/* Vector3 */
_jstype.definition.ClosestPointOnBounds = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 68, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.Raycast = function(a0/*Ray*/, a1/*RaycastHit&*/, a2/*Single*/) { 
    
    return CS.Call(4, 68, 1, false, this, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SphereCollider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SphereCollider", 
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 69, 0, true, this); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 69, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 69, 0, false, this, v); }

_jstype.definition.get_radius = function() { return CS.Call(2, 69, 1, false, this); }
_jstype.definition.set_radius = function(v) { return CS.Call(3, 69, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$BoxCollider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.BoxCollider", 
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 70, 0, true, this); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 70, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 70, 0, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 70, 1, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 70, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$CapsuleCollider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.CapsuleCollider", 
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 71, 0, true, this); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 71, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 71, 0, false, this, v); }

_jstype.definition.get_radius = function() { return CS.Call(2, 71, 1, false, this); }
_jstype.definition.set_radius = function(v) { return CS.Call(3, 71, 1, false, this, v); }

_jstype.definition.get_height = function() { return CS.Call(2, 71, 2, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 71, 2, false, this, v); }

_jstype.definition.get_direction = function() { return CS.Call(2, 71, 3, false, this); }
_jstype.definition.set_direction = function(v) { return CS.Call(3, 71, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MeshCollider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MeshCollider", 
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 72, 0, true, this); }

// fields

// properties

_jstype.definition.get_sharedMesh = function() { return CS.Call(2, 72, 0, false, this); }
_jstype.definition.set_sharedMesh = function(v) { return CS.Call(3, 72, 0, false, this, v); }

_jstype.definition.get_convex = function() { return CS.Call(2, 72, 1, false, this); }
_jstype.definition.set_convex = function(v) { return CS.Call(3, 72, 1, false, this, v); }

_jstype.definition.get_smoothSphereCollisions = function() { return CS.Call(2, 72, 2, false, this); }
_jstype.definition.set_smoothSphereCollisions = function(v) { return CS.Call(3, 72, 2, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LineRenderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.LineRenderer", 
    baseTypeName: "UnityEngine.Renderer"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 73, 0, true, this); }

// fields

// properties

_jstype.definition.get_useWorldSpace = function() { return CS.Call(2, 73, 0, false, this); }
_jstype.definition.set_useWorldSpace = function(v) { return CS.Call(3, 73, 0, false, this, v); }

// methods

/* Void */
_jstype.definition.SetColors = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 73, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetPosition = function(a0/*Int32*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 73, 1, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetVertexCount = function(a0/*Int32*/) { 
    
    return CS.Call(4, 73, 2, false, this, a0); 
}
/* Void */
_jstype.definition.SetWidth = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 73, 3, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MeshRenderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MeshRenderer", 
    baseTypeName: "UnityEngine.Renderer"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 74, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Screen
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Screen", 
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 75, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_resolutions = function() { return CS.Call(2, 75, 0, true); }
_jstype.staticDefinition.set_resolutions = function(v) { return CS.Call(3, 75, 0, true, v); }

_jstype.staticDefinition.get_GetResolution = function() { return CS.Call(2, 75, 1, true); }
_jstype.staticDefinition.set_GetResolution = function(v) { return CS.Call(3, 75, 1, true, v); }

_jstype.staticDefinition.get_currentResolution = function() { return CS.Call(2, 75, 2, true); }
_jstype.staticDefinition.set_currentResolution = function(v) { return CS.Call(3, 75, 2, true, v); }

_jstype.staticDefinition.get_showCursor = function() { return CS.Call(2, 75, 3, true); }
_jstype.staticDefinition.set_showCursor = function(v) { return CS.Call(3, 75, 3, true, v); }

_jstype.staticDefinition.get_lockCursor = function() { return CS.Call(2, 75, 4, true); }
_jstype.staticDefinition.set_lockCursor = function(v) { return CS.Call(3, 75, 4, true, v); }

_jstype.staticDefinition.get_width = function() { return CS.Call(2, 75, 5, true); }
_jstype.staticDefinition.set_width = function(v) { return CS.Call(3, 75, 5, true, v); }

_jstype.staticDefinition.get_height = function() { return CS.Call(2, 75, 6, true); }
_jstype.staticDefinition.set_height = function(v) { return CS.Call(3, 75, 6, true, v); }

_jstype.staticDefinition.get_dpi = function() { return CS.Call(2, 75, 7, true); }
_jstype.staticDefinition.set_dpi = function(v) { return CS.Call(3, 75, 7, true, v); }

_jstype.staticDefinition.get_fullScreen = function() { return CS.Call(2, 75, 8, true); }
_jstype.staticDefinition.set_fullScreen = function(v) { return CS.Call(3, 75, 8, true, v); }

_jstype.staticDefinition.get_autorotateToPortrait = function() { return CS.Call(2, 75, 9, true); }
_jstype.staticDefinition.set_autorotateToPortrait = function(v) { return CS.Call(3, 75, 9, true, v); }

_jstype.staticDefinition.get_autorotateToPortraitUpsideDown = function() { return CS.Call(2, 75, 10, true); }
_jstype.staticDefinition.set_autorotateToPortraitUpsideDown = function(v) { return CS.Call(3, 75, 10, true, v); }

_jstype.staticDefinition.get_autorotateToLandscapeLeft = function() { return CS.Call(2, 75, 11, true); }
_jstype.staticDefinition.set_autorotateToLandscapeLeft = function(v) { return CS.Call(3, 75, 11, true, v); }

_jstype.staticDefinition.get_autorotateToLandscapeRight = function() { return CS.Call(2, 75, 12, true); }
_jstype.staticDefinition.set_autorotateToLandscapeRight = function(v) { return CS.Call(3, 75, 12, true, v); }

_jstype.staticDefinition.get_orientation = function() { return CS.Call(2, 75, 13, true); }
_jstype.staticDefinition.set_orientation = function(v) { return CS.Call(3, 75, 13, true, v); }

_jstype.staticDefinition.get_sleepTimeout = function() { return CS.Call(2, 75, 14, true); }
_jstype.staticDefinition.set_sleepTimeout = function(v) { return CS.Call(3, 75, 14, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.SetResolution$$Int32$$Int32$$Boolean$$Int32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Boolean*/, a3/*Int32*/) { 
    
    return CS.Call(4, 75, 0, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.SetResolution$$Int32$$Int32$$Boolean = function(a0/*Int32*/, a1/*Int32*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 75, 1, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnimatorStateInfo
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.AnimatorStateInfo", 
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 76, 0, true, this); }

// fields

// properties

_jstype.definition.get_nameHash = function() { return CS.Call(2, 76, 0, false, this); }
_jstype.definition.set_nameHash = function(v) { return CS.Call(3, 76, 0, false, this, v); }

_jstype.definition.get_normalizedTime = function() { return CS.Call(2, 76, 1, false, this); }
_jstype.definition.set_normalizedTime = function(v) { return CS.Call(3, 76, 1, false, this, v); }

_jstype.definition.get_length = function() { return CS.Call(2, 76, 2, false, this); }
_jstype.definition.set_length = function(v) { return CS.Call(3, 76, 2, false, this, v); }

_jstype.definition.get_tagHash = function() { return CS.Call(2, 76, 3, false, this); }
_jstype.definition.set_tagHash = function(v) { return CS.Call(3, 76, 3, false, this, v); }

_jstype.definition.get_loop = function() { return CS.Call(2, 76, 4, false, this); }
_jstype.definition.set_loop = function(v) { return CS.Call(3, 76, 4, false, this, v); }

// methods

/* Boolean */
_jstype.definition.IsName = function(a0/*String*/) { 
    
    return CS.Call(4, 76, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsTag = function(a0/*String*/) { 
    
    return CS.Call(4, 76, 1, false, this, a0); 
}
