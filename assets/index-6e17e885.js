function nx(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const o in n)
                if (o !== "default" && !(o in e)) {
                    const l = Object.getOwnPropertyDescriptor(n, o);
                    l && Object.defineProperty(e, o, l.get ? l : {
                        enumerable: !0,
                        get: ()=>n[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        n(o);
    new MutationObserver(o=>{
        for (const l of o)
            if (l.type === "childList")
                for (const i of l.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && n(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(o) {
        const l = {};
        return o.integrity && (l.integrity = o.integrity),
        o.referrerpolicy && (l.referrerPolicy = o.referrerpolicy),
        o.crossorigin === "use-credentials" ? l.credentials = "include" : o.crossorigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function n(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const l = r(o);
        fetch(o.href, l)
    }
}
)();
function ox(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Qo = {}
  , lx = {
    get exports() {
        return Qo
    },
    set exports(e) {
        Qo = e
    }
}
  , ls = {}
  , p = {}
  , ix = {
    get exports() {
        return p
    },
    set exports(e) {
        p = e
    }
}
  , H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wl = Symbol.for("react.element")
  , ax = Symbol.for("react.portal")
  , sx = Symbol.for("react.fragment")
  , cx = Symbol.for("react.strict_mode")
  , ux = Symbol.for("react.profiler")
  , fx = Symbol.for("react.provider")
  , dx = Symbol.for("react.context")
  , px = Symbol.for("react.forward_ref")
  , mx = Symbol.for("react.suspense")
  , gx = Symbol.for("react.memo")
  , vx = Symbol.for("react.lazy")
  , Yd = Symbol.iterator;
function hx(e) {
    return e === null || typeof e != "object" ? null : (e = Yd && e[Yd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var uh = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , fh = Object.assign
  , dh = {};
function lo(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = dh,
    this.updater = r || uh
}
lo.prototype.isReactComponent = {};
lo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
lo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function ph() {}
ph.prototype = lo.prototype;
function af(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = dh,
    this.updater = r || uh
}
var sf = af.prototype = new ph;
sf.constructor = af;
fh(sf, lo.prototype);
sf.isPureReactComponent = !0;
var Gd = Array.isArray
  , mh = Object.prototype.hasOwnProperty
  , cf = {
    current: null
}
  , gh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function vh(e, t, r) {
    var n, o = {}, l = null, i = null;
    if (t != null)
        for (n in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (l = "" + t.key),
        t)
            mh.call(t, n) && !gh.hasOwnProperty(n) && (o[n] = t[n]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = r;
    else if (1 < a) {
        for (var s = Array(a), c = 0; c < a; c++)
            s[c] = arguments[c + 2];
        o.children = s
    }
    if (e && e.defaultProps)
        for (n in a = e.defaultProps,
        a)
            o[n] === void 0 && (o[n] = a[n]);
    return {
        $$typeof: wl,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: cf.current
    }
}
function yx(e, t) {
    return {
        $$typeof: wl,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function uf(e) {
    return typeof e == "object" && e !== null && e.$$typeof === wl
}
function wx(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var Qd = /\/+/g;
function tc(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? wx("" + e.key) : t.toString(36)
}
function gi(e, t, r, n, o) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (l) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case wl:
            case ax:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = n === "" ? "." + tc(i, 0) : n,
        Gd(o) ? (r = "",
        e != null && (r = e.replace(Qd, "$&/") + "/"),
        gi(o, t, r, "", function(c) {
            return c
        })) : o != null && (uf(o) && (o = yx(o, r + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Qd, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    n = n === "" ? "." : n + ":",
    Gd(e))
        for (var a = 0; a < e.length; a++) {
            l = e[a];
            var s = n + tc(l, a);
            i += gi(l, t, r, s, o)
        }
    else if (s = hx(e),
    typeof s == "function")
        for (e = s.call(e),
        a = 0; !(l = e.next()).done; )
            l = l.value,
            s = n + tc(l, a++),
            i += gi(l, t, r, s, o);
    else if (l === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Ll(e, t, r) {
    if (e == null)
        return e;
    var n = []
      , o = 0;
    return gi(e, n, "", "", function(l) {
        return t.call(r, l, o++)
    }),
    n
}
function _x(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = r)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Be = {
    current: null
}
  , vi = {
    transition: null
}
  , Sx = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: vi,
    ReactCurrentOwner: cf
};
H.Children = {
    map: Ll,
    forEach: function(e, t, r) {
        Ll(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return Ll(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ll(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!uf(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
H.Component = lo;
H.Fragment = sx;
H.Profiler = ux;
H.PureComponent = af;
H.StrictMode = cx;
H.Suspense = mx;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sx;
H.cloneElement = function(e, t, r) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = fh({}, e.props)
      , o = e.key
      , l = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (l = t.ref,
        i = cf.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (s in t)
            mh.call(t, s) && !gh.hasOwnProperty(s) && (n[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        n.children = r;
    else if (1 < s) {
        a = Array(s);
        for (var c = 0; c < s; c++)
            a[c] = arguments[c + 2];
        n.children = a
    }
    return {
        $$typeof: wl,
        type: e.type,
        key: o,
        ref: l,
        props: n,
        _owner: i
    }
}
;
H.createContext = function(e) {
    return e = {
        $$typeof: dx,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: fx,
        _context: e
    },
    e.Consumer = e
}
;
H.createElement = vh;
H.createFactory = function(e) {
    var t = vh.bind(null, e);
    return t.type = e,
    t
}
;
H.createRef = function() {
    return {
        current: null
    }
}
;
H.forwardRef = function(e) {
    return {
        $$typeof: px,
        render: e
    }
}
;
H.isValidElement = uf;
H.lazy = function(e) {
    return {
        $$typeof: vx,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: _x
    }
}
;
H.memo = function(e, t) {
    return {
        $$typeof: gx,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
H.startTransition = function(e) {
    var t = vi.transition;
    vi.transition = {};
    try {
        e()
    } finally {
        vi.transition = t
    }
}
;
H.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
H.useCallback = function(e, t) {
    return Be.current.useCallback(e, t)
}
;
H.useContext = function(e) {
    return Be.current.useContext(e)
}
;
H.useDebugValue = function() {}
;
H.useDeferredValue = function(e) {
    return Be.current.useDeferredValue(e)
}
;
H.useEffect = function(e, t) {
    return Be.current.useEffect(e, t)
}
;
H.useId = function() {
    return Be.current.useId()
}
;
H.useImperativeHandle = function(e, t, r) {
    return Be.current.useImperativeHandle(e, t, r)
}
;
H.useInsertionEffect = function(e, t) {
    return Be.current.useInsertionEffect(e, t)
}
;
H.useLayoutEffect = function(e, t) {
    return Be.current.useLayoutEffect(e, t)
}
;
H.useMemo = function(e, t) {
    return Be.current.useMemo(e, t)
}
;
H.useReducer = function(e, t, r) {
    return Be.current.useReducer(e, t, r)
}
;
H.useRef = function(e) {
    return Be.current.useRef(e)
}
;
H.useState = function(e) {
    return Be.current.useState(e)
}
;
H.useSyncExternalStore = function(e, t, r) {
    return Be.current.useSyncExternalStore(e, t, r)
}
;
H.useTransition = function() {
    return Be.current.useTransition()
}
;
H.version = "18.2.0";
(function(e) {
    e.exports = H
}
)(ix);
const _ = ox(p)
  , nn = nx({
    __proto__: null,
    default: _
}, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xx = p
  , Px = Symbol.for("react.element")
  , bx = Symbol.for("react.fragment")
  , Ox = Object.prototype.hasOwnProperty
  , $x = xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Ex = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function hh(e, t, r) {
    var n, o = {}, l = null, i = null;
    r !== void 0 && (l = "" + r),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (n in t)
        Ox.call(t, n) && !Ex.hasOwnProperty(n) && (o[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps,
        t)
            o[n] === void 0 && (o[n] = t[n]);
    return {
        $$typeof: Px,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: $x.current
    }
}
ls.Fragment = bx;
ls.jsx = hh;
ls.jsxs = hh;
(function(e) {
    e.exports = ls
}
)(lx);
const yh = Qo.Fragment
  , C = Qo.jsx
  , V = Qo.jsxs;
var Uc = {}
  , Yn = {}
  , Cx = {
    get exports() {
        return Yn
    },
    set exports(e) {
        Yn = e
    }
}
  , lt = {}
  , Yc = {}
  , kx = {
    get exports() {
        return Yc
    },
    set exports(e) {
        Yc = e
    }
}
  , wh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(R, z) {
        var D = R.length;
        R.push(z);
        e: for (; 0 < D; ) {
            var W = D - 1 >>> 1
              , ee = R[W];
            if (0 < o(ee, z))
                R[W] = z,
                R[D] = ee,
                D = W;
            else
                break e
        }
    }
    function r(R) {
        return R.length === 0 ? null : R[0]
    }
    function n(R) {
        if (R.length === 0)
            return null;
        var z = R[0]
          , D = R.pop();
        if (D !== z) {
            R[0] = D;
            e: for (var W = 0, ee = R.length, Z = ee >>> 1; W < Z; ) {
                var $e = 2 * (W + 1) - 1
                  , Ee = R[$e]
                  , ne = $e + 1
                  , Me = R[ne];
                if (0 > o(Ee, D))
                    ne < ee && 0 > o(Me, Ee) ? (R[W] = Me,
                    R[ne] = D,
                    W = ne) : (R[W] = Ee,
                    R[$e] = D,
                    W = $e);
                else if (ne < ee && 0 > o(Me, D))
                    R[W] = Me,
                    R[ne] = D,
                    W = ne;
                else
                    break e
            }
        }
        return z
    }
    function o(R, z) {
        var D = R.sortIndex - z.sortIndex;
        return D !== 0 ? D : R.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function() {
            return l.now()
        }
    } else {
        var i = Date
          , a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var s = []
      , c = []
      , f = 1
      , u = null
      , d = 3
      , m = !1
      , g = !1
      , y = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , h = typeof clearTimeout == "function" ? clearTimeout : null
      , v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function w(R) {
        for (var z = r(c); z !== null; ) {
            if (z.callback === null)
                n(c);
            else if (z.startTime <= R)
                n(c),
                z.sortIndex = z.expirationTime,
                t(s, z);
            else
                break;
            z = r(c)
        }
    }
    function S(R) {
        if (y = !1,
        w(R),
        !g)
            if (r(s) !== null)
                g = !0,
                U(P);
            else {
                var z = r(c);
                z !== null && Q(S, z.startTime - R)
            }
    }
    function P(R, z) {
        g = !1,
        y && (y = !1,
        h($),
        $ = -1),
        m = !0;
        var D = d;
        try {
            for (w(z),
            u = r(s); u !== null && (!(u.expirationTime > z) || R && !j()); ) {
                var W = u.callback;
                if (typeof W == "function") {
                    u.callback = null,
                    d = u.priorityLevel;
                    var ee = W(u.expirationTime <= z);
                    z = e.unstable_now(),
                    typeof ee == "function" ? u.callback = ee : u === r(s) && n(s),
                    w(z)
                } else
                    n(s);
                u = r(s)
            }
            if (u !== null)
                var Z = !0;
            else {
                var $e = r(c);
                $e !== null && Q(S, $e.startTime - z),
                Z = !1
            }
            return Z
        } finally {
            u = null,
            d = D,
            m = !1
        }
    }
    var O = !1
      , b = null
      , $ = -1
      , E = 5
      , k = -1;
    function j() {
        return !(e.unstable_now() - k < E)
    }
    function T() {
        if (b !== null) {
            var R = e.unstable_now();
            k = R;
            var z = !0;
            try {
                z = b(!0, R)
            } finally {
                z ? L() : (O = !1,
                b = null)
            }
        } else
            O = !1
    }
    var L;
    if (typeof v == "function")
        L = function() {
            v(T)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var A = new MessageChannel
          , B = A.port2;
        A.port1.onmessage = T,
        L = function() {
            B.postMessage(null)
        }
    } else
        L = function() {
            x(T, 0)
        }
        ;
    function U(R) {
        b = R,
        O || (O = !0,
        L())
    }
    function Q(R, z) {
        $ = x(function() {
            R(e.unstable_now())
        }, z)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(R) {
        R.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        g || m || (g = !0,
        U(P))
    }
    ,
    e.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < R ? Math.floor(1e3 / R) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return r(s)
    }
    ,
    e.unstable_next = function(R) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var z = 3;
            break;
        default:
            z = d
        }
        var D = d;
        d = z;
        try {
            return R()
        } finally {
            d = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(R, z) {
        switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            R = 3
        }
        var D = d;
        d = R;
        try {
            return z()
        } finally {
            d = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(R, z, D) {
        var W = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? W + D : W) : D = W,
        R) {
        case 1:
            var ee = -1;
            break;
        case 2:
            ee = 250;
            break;
        case 5:
            ee = 1073741823;
            break;
        case 4:
            ee = 1e4;
            break;
        default:
            ee = 5e3
        }
        return ee = D + ee,
        R = {
            id: f++,
            callback: z,
            priorityLevel: R,
            startTime: D,
            expirationTime: ee,
            sortIndex: -1
        },
        D > W ? (R.sortIndex = D,
        t(c, R),
        r(s) === null && R === r(c) && (y ? (h($),
        $ = -1) : y = !0,
        Q(S, D - W))) : (R.sortIndex = ee,
        t(s, R),
        g || m || (g = !0,
        U(P))),
        R
    }
    ,
    e.unstable_shouldYield = j,
    e.unstable_wrapCallback = function(R) {
        var z = d;
        return function() {
            var D = d;
            d = z;
            try {
                return R.apply(this, arguments)
            } finally {
                d = D
            }
        }
    }
}
)(wh);
(function(e) {
    e.exports = wh
}
)(kx);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _h = p
  , ot = Yc;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Sh = new Set
  , Xo = {};
function fn(e, t) {
    Gn(e, t),
    Gn(e + "Capture", t)
}
function Gn(e, t) {
    for (Xo[e] = t,
    e = 0; e < t.length; e++)
        Sh.add(t[e])
}
var Zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Gc = Object.prototype.hasOwnProperty
  , Rx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Xd = {}
  , Kd = {};
function Nx(e) {
    return Gc.call(Kd, e) ? !0 : Gc.call(Xd, e) ? !1 : Rx.test(e) ? Kd[e] = !0 : (Xd[e] = !0,
    !1)
}
function zx(e, t, r, n) {
    if (r !== null && r.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Ix(e, t, r, n) {
    if (t === null || typeof t > "u" || zx(e, t, r, n))
        return !0;
    if (n)
        return !1;
    if (r !== null)
        switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function He(e, t, r, n, o, l, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = n,
    this.attributeNamespace = o,
    this.mustUseProperty = r,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = l,
    this.removeEmptyString = i
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ze[e] = new He(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ze[t] = new He(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ze[e] = new He(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ze[e] = new He(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ze[e] = new He(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ze[e] = new He(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ze[e] = new He(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ze[e] = new He(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ze[e] = new He(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ff = /[\-:]([a-z])/g;
function df(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ff, df);
    ze[t] = new He(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ff, df);
    ze[t] = new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ff, df);
    ze[t] = new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ze[e] = new He(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ze.xlinkHref = new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ze[e] = new He(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function pf(e, t, r, n) {
    var o = ze.hasOwnProperty(t) ? ze[t] : null;
    (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ix(t, r, o, n) && (r = null),
    n || o === null ? Nx(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName,
    n = o.attributeNamespace,
    r === null ? e.removeAttribute(t) : (o = o.type,
    r = o === 3 || o === 4 && r === !0 ? "" : "" + r,
    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var rr = _h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Al = Symbol.for("react.element")
  , $n = Symbol.for("react.portal")
  , En = Symbol.for("react.fragment")
  , mf = Symbol.for("react.strict_mode")
  , Qc = Symbol.for("react.profiler")
  , xh = Symbol.for("react.provider")
  , Ph = Symbol.for("react.context")
  , gf = Symbol.for("react.forward_ref")
  , Xc = Symbol.for("react.suspense")
  , Kc = Symbol.for("react.suspense_list")
  , vf = Symbol.for("react.memo")
  , dr = Symbol.for("react.lazy")
  , bh = Symbol.for("react.offscreen")
  , Zd = Symbol.iterator;
function ho(e) {
    return e === null || typeof e != "object" ? null : (e = Zd && e[Zd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var de = Object.assign, rc;
function Ro(e) {
    if (rc === void 0)
        try {
            throw Error()
        } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            rc = t && t[1] || ""
        }
    return `
` + rc + e
}
var nc = !1;
function oc(e, t) {
    if (!e || nc)
        return "";
    nc = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var n = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    n = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                n = c
            }
            e()
        }
    } catch (c) {
        if (c && n && typeof c.stack == "string") {
            for (var o = c.stack.split(`
`), l = n.stack.split(`
`), i = o.length - 1, a = l.length - 1; 1 <= i && 0 <= a && o[i] !== l[a]; )
                a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (o[i] !== l[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || o[i] !== l[a]) {
                                var s = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        nc = !1,
        Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? Ro(e) : ""
}
function Tx(e) {
    switch (e.tag) {
    case 5:
        return Ro(e.type);
    case 16:
        return Ro("Lazy");
    case 13:
        return Ro("Suspense");
    case 19:
        return Ro("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = oc(e.type, !1),
        e;
    case 11:
        return e = oc(e.type.render, !1),
        e;
    case 1:
        return e = oc(e.type, !0),
        e;
    default:
        return ""
    }
}
function Zc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case En:
        return "Fragment";
    case $n:
        return "Portal";
    case Qc:
        return "Profiler";
    case mf:
        return "StrictMode";
    case Xc:
        return "Suspense";
    case Kc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ph:
            return (e.displayName || "Context") + ".Consumer";
        case xh:
            return (e._context.displayName || "Context") + ".Provider";
        case gf:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case vf:
            return t = e.displayName || null,
            t !== null ? t : Zc(e.type) || "Memo";
        case dr:
            t = e._payload,
            e = e._init;
            try {
                return Zc(e(t))
            } catch {}
        }
    return null
}
function Dx(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Zc(t);
    case 8:
        return t === mf ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Nr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Oh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function jx(e) {
    var t = Oh(e) ? "checked" : "value"
      , r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var o = r.get
          , l = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                n = "" + i,
                l.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }),
        {
            getValue: function() {
                return n
            },
            setValue: function(i) {
                n = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ml(e) {
    e._valueTracker || (e._valueTracker = jx(e))
}
function $h(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var r = t.getValue()
      , n = "";
    return e && (n = Oh(e) ? e.checked ? "true" : "false" : e.value),
    e = n,
    e !== r ? (t.setValue(e),
    !0) : !1
}
function Ni(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Jc(e, t) {
    var r = t.checked;
    return de({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}
function Jd(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue
      , n = t.checked != null ? t.checked : t.defaultChecked;
    r = Nr(t.value != null ? t.value : r),
    e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Eh(e, t) {
    t = t.checked,
    t != null && pf(e, "checked", t, !1)
}
function qc(e, t) {
    Eh(e, t);
    var r = Nr(t.value)
      , n = t.type;
    if (r != null)
        n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? eu(e, t.type, r) : t.hasOwnProperty("defaultValue") && eu(e, t.type, Nr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function qd(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        r || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    r = e.name,
    r !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    r !== "" && (e.name = r)
}
function eu(e, t, r) {
    (t !== "number" || Ni(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var No = Array.isArray;
function An(e, t, r, n) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < r.length; o++)
            t["$" + r[o]] = !0;
        for (r = 0; r < e.length; r++)
            o = t.hasOwnProperty("$" + e[r].value),
            e[r].selected !== o && (e[r].selected = o),
            o && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + Nr(r),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === r) {
                e[o].selected = !0,
                n && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function tu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return de({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function ep(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children,
        t = t.defaultValue,
        r != null) {
            if (t != null)
                throw Error(N(92));
            if (No(r)) {
                if (1 < r.length)
                    throw Error(N(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""),
        r = t
    }
    e._wrapperState = {
        initialValue: Nr(r)
    }
}
function Ch(e, t) {
    var r = Nr(t.value)
      , n = Nr(t.defaultValue);
    r != null && (r = "" + r,
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n)
}
function tp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function kh(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ru(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? kh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Fl, Rh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, r, n, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Fl = Fl || document.createElement("div"),
        Fl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Fl.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ko(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var jo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Lx = ["Webkit", "ms", "Moz", "O"];
Object.keys(jo).forEach(function(e) {
    Lx.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        jo[t] = jo[e]
    })
});
function Nh(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || jo.hasOwnProperty(e) && jo[e] ? ("" + t).trim() : t + "px"
}
function zh(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0
              , o = Nh(r, t[r], n);
            r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, o) : e[r] = o
        }
}
var Ax = de({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function nu(e, t) {
    if (t) {
        if (Ax[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function ou(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var lu = null;
function hf(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var iu = null
  , Mn = null
  , Fn = null;
function rp(e) {
    if (e = xl(e)) {
        if (typeof iu != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = us(t),
        iu(e.stateNode, e.type, t))
    }
}
function Ih(e) {
    Mn ? Fn ? Fn.push(e) : Fn = [e] : Mn = e
}
function Th() {
    if (Mn) {
        var e = Mn
          , t = Fn;
        if (Fn = Mn = null,
        rp(e),
        t)
            for (e = 0; e < t.length; e++)
                rp(t[e])
    }
}
function Dh(e, t) {
    return e(t)
}
function jh() {}
var lc = !1;
function Lh(e, t, r) {
    if (lc)
        return e(t, r);
    lc = !0;
    try {
        return Dh(e, t, r)
    } finally {
        lc = !1,
        (Mn !== null || Fn !== null) && (jh(),
        Th())
    }
}
function Zo(e, t) {
    var r = e.stateNode;
    if (r === null)
        return null;
    var n = us(r);
    if (n === null)
        return null;
    r = n[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (n = !n.disabled) || (e = e.type,
        n = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !n;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (r && typeof r != "function")
        throw Error(N(231, t, typeof r));
    return r
}
var au = !1;
if (Zt)
    try {
        var yo = {};
        Object.defineProperty(yo, "passive", {
            get: function() {
                au = !0
            }
        }),
        window.addEventListener("test", yo, yo),
        window.removeEventListener("test", yo, yo)
    } catch {
        au = !1
    }
function Mx(e, t, r, n, o, l, i, a, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, c)
    } catch (f) {
        this.onError(f)
    }
}
var Lo = !1
  , zi = null
  , Ii = !1
  , su = null
  , Fx = {
    onError: function(e) {
        Lo = !0,
        zi = e
    }
};
function Vx(e, t, r, n, o, l, i, a, s) {
    Lo = !1,
    zi = null,
    Mx.apply(Fx, arguments)
}
function Bx(e, t, r, n, o, l, i, a, s) {
    if (Vx.apply(this, arguments),
    Lo) {
        if (Lo) {
            var c = zi;
            Lo = !1,
            zi = null
        } else
            throw Error(N(198));
        Ii || (Ii = !0,
        su = c)
    }
}
function dn(e) {
    var t = e
      , r = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (r = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? r : null
}
function Ah(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function np(e) {
    if (dn(e) !== e)
        throw Error(N(188))
}
function Hx(e) {
    var t = e.alternate;
    if (!t) {
        if (t = dn(e),
        t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t; ; ) {
        var o = r.return;
        if (o === null)
            break;
        var l = o.alternate;
        if (l === null) {
            if (n = o.return,
            n !== null) {
                r = n;
                continue
            }
            break
        }
        if (o.child === l.child) {
            for (l = o.child; l; ) {
                if (l === r)
                    return np(o),
                    e;
                if (l === n)
                    return np(o),
                    t;
                l = l.sibling
            }
            throw Error(N(188))
        }
        if (r.return !== n.return)
            r = o,
            n = l;
        else {
            for (var i = !1, a = o.child; a; ) {
                if (a === r) {
                    i = !0,
                    r = o,
                    n = l;
                    break
                }
                if (a === n) {
                    i = !0,
                    n = o,
                    r = l;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = l.child; a; ) {
                    if (a === r) {
                        i = !0,
                        r = l,
                        n = o;
                        break
                    }
                    if (a === n) {
                        i = !0,
                        n = l,
                        r = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(N(189))
            }
        }
        if (r.alternate !== n)
            throw Error(N(190))
    }
    if (r.tag !== 3)
        throw Error(N(188));
    return r.stateNode.current === r ? e : t
}
function Mh(e) {
    return e = Hx(e),
    e !== null ? Fh(e) : null
}
function Fh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Fh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Vh = ot.unstable_scheduleCallback
  , op = ot.unstable_cancelCallback
  , Wx = ot.unstable_shouldYield
  , Ux = ot.unstable_requestPaint
  , ge = ot.unstable_now
  , Yx = ot.unstable_getCurrentPriorityLevel
  , yf = ot.unstable_ImmediatePriority
  , Bh = ot.unstable_UserBlockingPriority
  , Ti = ot.unstable_NormalPriority
  , Gx = ot.unstable_LowPriority
  , Hh = ot.unstable_IdlePriority
  , is = null
  , Dt = null;
function Qx(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
            Dt.onCommitFiberRoot(is, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Pt = Math.clz32 ? Math.clz32 : Zx
  , Xx = Math.log
  , Kx = Math.LN2;
function Zx(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Xx(e) / Kx | 0) | 0
}
var Vl = 64
  , Bl = 4194304;
function zo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Di(e, t) {
    var r = e.pendingLanes;
    if (r === 0)
        return 0;
    var n = 0
      , o = e.suspendedLanes
      , l = e.pingedLanes
      , i = r & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? n = zo(a) : (l &= i,
        l !== 0 && (n = zo(l)))
    } else
        i = r & ~o,
        i !== 0 ? n = zo(i) : l !== 0 && (n = zo(l));
    if (n === 0)
        return 0;
    if (t !== 0 && t !== n && !(t & o) && (o = n & -n,
    l = t & -t,
    o >= l || o === 16 && (l & 4194240) !== 0))
        return t;
    if (n & 4 && (n |= r & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= n; 0 < t; )
            r = 31 - Pt(t),
            o = 1 << r,
            n |= e[r],
            t &= ~o;
    return n
}
function Jx(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function qx(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
        var i = 31 - Pt(l)
          , a = 1 << i
          , s = o[i];
        s === -1 ? (!(a & r) || a & n) && (o[i] = Jx(a, t)) : s <= t && (e.expiredLanes |= a),
        l &= ~a
    }
}
function cu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Wh() {
    var e = Vl;
    return Vl <<= 1,
    !(Vl & 4194240) && (Vl = 64),
    e
}
function ic(e) {
    for (var t = [], r = 0; 31 > r; r++)
        t.push(e);
    return t
}
function _l(e, t, r) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Pt(t),
    e[t] = r
}
function eP(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
        var o = 31 - Pt(r)
          , l = 1 << o;
        t[o] = 0,
        n[o] = -1,
        e[o] = -1,
        r &= ~l
    }
}
function wf(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
        var n = 31 - Pt(r)
          , o = 1 << n;
        o & t | e[n] & t && (e[n] |= t),
        r &= ~o
    }
}
var te = 0;
function Uh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Yh, _f, Gh, Qh, Xh, uu = !1, Hl = [], Sr = null, xr = null, Pr = null, Jo = new Map, qo = new Map, gr = [], tP = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function lp(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Sr = null;
        break;
    case "dragenter":
    case "dragleave":
        xr = null;
        break;
    case "mouseover":
    case "mouseout":
        Pr = null;
        break;
    case "pointerover":
    case "pointerout":
        Jo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        qo.delete(t.pointerId)
    }
}
function wo(e, t, r, n, o, l) {
    return e === null || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: l,
        targetContainers: [o]
    },
    t !== null && (t = xl(t),
    t !== null && _f(t)),
    e) : (e.eventSystemFlags |= n,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function rP(e, t, r, n, o) {
    switch (t) {
    case "focusin":
        return Sr = wo(Sr, e, t, r, n, o),
        !0;
    case "dragenter":
        return xr = wo(xr, e, t, r, n, o),
        !0;
    case "mouseover":
        return Pr = wo(Pr, e, t, r, n, o),
        !0;
    case "pointerover":
        var l = o.pointerId;
        return Jo.set(l, wo(Jo.get(l) || null, e, t, r, n, o)),
        !0;
    case "gotpointercapture":
        return l = o.pointerId,
        qo.set(l, wo(qo.get(l) || null, e, t, r, n, o)),
        !0
    }
    return !1
}
function Kh(e) {
    var t = Kr(e.target);
    if (t !== null) {
        var r = dn(t);
        if (r !== null) {
            if (t = r.tag,
            t === 13) {
                if (t = Ah(r),
                t !== null) {
                    e.blockedOn = t,
                    Xh(e.priority, function() {
                        Gh(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function hi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var r = fu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type,r);
            lu = n,
            r.target.dispatchEvent(n),
            lu = null
        } else
            return t = xl(r),
            t !== null && _f(t),
            e.blockedOn = r,
            !1;
        t.shift()
    }
    return !0
}
function ip(e, t, r) {
    hi(e) && r.delete(t)
}
function nP() {
    uu = !1,
    Sr !== null && hi(Sr) && (Sr = null),
    xr !== null && hi(xr) && (xr = null),
    Pr !== null && hi(Pr) && (Pr = null),
    Jo.forEach(ip),
    qo.forEach(ip)
}
function _o(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    uu || (uu = !0,
    ot.unstable_scheduleCallback(ot.unstable_NormalPriority, nP)))
}
function el(e) {
    function t(o) {
        return _o(o, e)
    }
    if (0 < Hl.length) {
        _o(Hl[0], e);
        for (var r = 1; r < Hl.length; r++) {
            var n = Hl[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Sr !== null && _o(Sr, e),
    xr !== null && _o(xr, e),
    Pr !== null && _o(Pr, e),
    Jo.forEach(t),
    qo.forEach(t),
    r = 0; r < gr.length; r++)
        n = gr[r],
        n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < gr.length && (r = gr[0],
    r.blockedOn === null); )
        Kh(r),
        r.blockedOn === null && gr.shift()
}
var Vn = rr.ReactCurrentBatchConfig
  , ji = !0;
function oP(e, t, r, n) {
    var o = te
      , l = Vn.transition;
    Vn.transition = null;
    try {
        te = 1,
        Sf(e, t, r, n)
    } finally {
        te = o,
        Vn.transition = l
    }
}
function lP(e, t, r, n) {
    var o = te
      , l = Vn.transition;
    Vn.transition = null;
    try {
        te = 4,
        Sf(e, t, r, n)
    } finally {
        te = o,
        Vn.transition = l
    }
}
function Sf(e, t, r, n) {
    if (ji) {
        var o = fu(e, t, r, n);
        if (o === null)
            vc(e, t, n, Li, r),
            lp(e, n);
        else if (rP(o, e, t, r, n))
            n.stopPropagation();
        else if (lp(e, n),
        t & 4 && -1 < tP.indexOf(e)) {
            for (; o !== null; ) {
                var l = xl(o);
                if (l !== null && Yh(l),
                l = fu(e, t, r, n),
                l === null && vc(e, t, n, Li, r),
                l === o)
                    break;
                o = l
            }
            o !== null && n.stopPropagation()
        } else
            vc(e, t, n, null, r)
    }
}
var Li = null;
function fu(e, t, r, n) {
    if (Li = null,
    e = hf(n),
    e = Kr(e),
    e !== null)
        if (t = dn(e),
        t === null)
            e = null;
        else if (r = t.tag,
        r === 13) {
            if (e = Ah(t),
            e !== null)
                return e;
            e = null
        } else if (r === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Li = e,
    null
}
function Zh(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Yx()) {
        case yf:
            return 1;
        case Bh:
            return 4;
        case Ti:
        case Gx:
            return 16;
        case Hh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var yr = null
  , xf = null
  , yi = null;
function Jh() {
    if (yi)
        return yi;
    var e, t = xf, r = t.length, n, o = "value"in yr ? yr.value : yr.textContent, l = o.length;
    for (e = 0; e < r && t[e] === o[e]; e++)
        ;
    var i = r - e;
    for (n = 1; n <= i && t[r - n] === o[l - n]; n++)
        ;
    return yi = o.slice(e, 1 < n ? 1 - n : void 0)
}
function wi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Wl() {
    return !0
}
function ap() {
    return !1
}
function it(e) {
    function t(r, n, o, l, i) {
        this._reactName = r,
        this._targetInst = o,
        this.type = n,
        this.nativeEvent = l,
        this.target = i,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (r = e[a],
            this[a] = r ? r(l) : l[a]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Wl : ap,
        this.isPropagationStopped = ap,
        this
    }
    return de(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            this.isDefaultPrevented = Wl)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            this.isPropagationStopped = Wl)
        },
        persist: function() {},
        isPersistent: Wl
    }),
    t
}
var io = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Pf = it(io), Sl = de({}, io, {
    view: 0,
    detail: 0
}), iP = it(Sl), ac, sc, So, as = de({}, Sl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bf,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== So && (So && e.type === "mousemove" ? (ac = e.screenX - So.screenX,
        sc = e.screenY - So.screenY) : sc = ac = 0,
        So = e),
        ac)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : sc
    }
}), sp = it(as), aP = de({}, as, {
    dataTransfer: 0
}), sP = it(aP), cP = de({}, Sl, {
    relatedTarget: 0
}), cc = it(cP), uP = de({}, io, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), fP = it(uP), dP = de({}, io, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), pP = it(dP), mP = de({}, io, {
    data: 0
}), cp = it(mP), gP = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, vP = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, hP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function yP(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hP[e]) ? !!t[e] : !1
}
function bf() {
    return yP
}
var wP = de({}, Sl, {
    key: function(e) {
        if (e.key) {
            var t = gP[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = wi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vP[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bf,
    charCode: function(e) {
        return e.type === "keypress" ? wi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? wi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , _P = it(wP)
  , SP = de({}, as, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , up = it(SP)
  , xP = de({}, Sl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bf
})
  , PP = it(xP)
  , bP = de({}, io, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , OP = it(bP)
  , $P = de({}, as, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , EP = it($P)
  , CP = [9, 13, 27, 32]
  , Of = Zt && "CompositionEvent"in window
  , Ao = null;
Zt && "documentMode"in document && (Ao = document.documentMode);
var kP = Zt && "TextEvent"in window && !Ao
  , qh = Zt && (!Of || Ao && 8 < Ao && 11 >= Ao)
  , fp = String.fromCharCode(32)
  , dp = !1;
function ey(e, t) {
    switch (e) {
    case "keyup":
        return CP.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function ty(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Cn = !1;
function RP(e, t) {
    switch (e) {
    case "compositionend":
        return ty(t);
    case "keypress":
        return t.which !== 32 ? null : (dp = !0,
        fp);
    case "textInput":
        return e = t.data,
        e === fp && dp ? null : e;
    default:
        return null
    }
}
function NP(e, t) {
    if (Cn)
        return e === "compositionend" || !Of && ey(e, t) ? (e = Jh(),
        yi = xf = yr = null,
        Cn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return qh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var zP = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function pp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zP[e.type] : t === "textarea"
}
function ry(e, t, r, n) {
    Ih(n),
    t = Ai(t, "onChange"),
    0 < t.length && (r = new Pf("onChange","change",null,r,n),
    e.push({
        event: r,
        listeners: t
    }))
}
var Mo = null
  , tl = null;
function IP(e) {
    py(e, 0)
}
function ss(e) {
    var t = Nn(e);
    if ($h(t))
        return e
}
function TP(e, t) {
    if (e === "change")
        return t
}
var ny = !1;
if (Zt) {
    var uc;
    if (Zt) {
        var fc = "oninput"in document;
        if (!fc) {
            var mp = document.createElement("div");
            mp.setAttribute("oninput", "return;"),
            fc = typeof mp.oninput == "function"
        }
        uc = fc
    } else
        uc = !1;
    ny = uc && (!document.documentMode || 9 < document.documentMode)
}
function gp() {
    Mo && (Mo.detachEvent("onpropertychange", oy),
    tl = Mo = null)
}
function oy(e) {
    if (e.propertyName === "value" && ss(tl)) {
        var t = [];
        ry(t, tl, e, hf(e)),
        Lh(IP, t)
    }
}
function DP(e, t, r) {
    e === "focusin" ? (gp(),
    Mo = t,
    tl = r,
    Mo.attachEvent("onpropertychange", oy)) : e === "focusout" && gp()
}
function jP(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ss(tl)
}
function LP(e, t) {
    if (e === "click")
        return ss(t)
}
function AP(e, t) {
    if (e === "input" || e === "change")
        return ss(t)
}
function MP(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var $t = typeof Object.is == "function" ? Object.is : MP;
function rl(e, t) {
    if ($t(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var r = Object.keys(e)
      , n = Object.keys(t);
    if (r.length !== n.length)
        return !1;
    for (n = 0; n < r.length; n++) {
        var o = r[n];
        if (!Gc.call(t, o) || !$t(e[o], t[o]))
            return !1
    }
    return !0
}
function vp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function hp(e, t) {
    var r = vp(e);
    e = 0;
    for (var n; r; ) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length,
            e <= t && n >= t)
                return {
                    node: r,
                    offset: t - e
                };
            e = n
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = vp(r)
    }
}
function ly(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ly(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function iy() {
    for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r)
            e = t.contentWindow;
        else
            break;
        t = Ni(e.document)
    }
    return t
}
function $f(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function FP(e) {
    var t = iy()
      , r = e.focusedElem
      , n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && ly(r.ownerDocument.documentElement, r)) {
        if (n !== null && $f(r)) {
            if (t = n.start,
            e = n.end,
            e === void 0 && (e = t),
            "selectionStart"in r)
                r.selectionStart = t,
                r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = r.textContent.length
                  , l = Math.min(n.start, o);
                n = n.end === void 0 ? l : Math.min(n.end, o),
                !e.extend && l > n && (o = n,
                n = l,
                l = o),
                o = hp(r, l);
                var i = hp(r, n);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                l > n ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = r; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof r.focus == "function" && r.focus(),
        r = 0; r < t.length; r++)
            e = t[r],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var VP = Zt && "documentMode"in document && 11 >= document.documentMode
  , kn = null
  , du = null
  , Fo = null
  , pu = !1;
function yp(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    pu || kn == null || kn !== Ni(n) || (n = kn,
    "selectionStart"in n && $f(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
    n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }),
    Fo && rl(Fo, n) || (Fo = n,
    n = Ai(du, "onSelect"),
    0 < n.length && (t = new Pf("onSelect","select",null,t,r),
    e.push({
        event: t,
        listeners: n
    }),
    t.target = kn)))
}
function Ul(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(),
    r["Webkit" + e] = "webkit" + t,
    r["Moz" + e] = "moz" + t,
    r
}
var Rn = {
    animationend: Ul("Animation", "AnimationEnd"),
    animationiteration: Ul("Animation", "AnimationIteration"),
    animationstart: Ul("Animation", "AnimationStart"),
    transitionend: Ul("Transition", "TransitionEnd")
}
  , dc = {}
  , ay = {};
Zt && (ay = document.createElement("div").style,
"AnimationEvent"in window || (delete Rn.animationend.animation,
delete Rn.animationiteration.animation,
delete Rn.animationstart.animation),
"TransitionEvent"in window || delete Rn.transitionend.transition);
function cs(e) {
    if (dc[e])
        return dc[e];
    if (!Rn[e])
        return e;
    var t = Rn[e], r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in ay)
            return dc[e] = t[r];
    return e
}
var sy = cs("animationend")
  , cy = cs("animationiteration")
  , uy = cs("animationstart")
  , fy = cs("transitionend")
  , dy = new Map
  , wp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dr(e, t) {
    dy.set(e, t),
    fn(t, [e])
}
for (var pc = 0; pc < wp.length; pc++) {
    var mc = wp[pc]
      , BP = mc.toLowerCase()
      , HP = mc[0].toUpperCase() + mc.slice(1);
    Dr(BP, "on" + HP)
}
Dr(sy, "onAnimationEnd");
Dr(cy, "onAnimationIteration");
Dr(uy, "onAnimationStart");
Dr("dblclick", "onDoubleClick");
Dr("focusin", "onFocus");
Dr("focusout", "onBlur");
Dr(fy, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Io = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , WP = new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));
function _p(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r,
    Bx(n, t, void 0, e),
    e.currentTarget = null
}
function py(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r]
          , o = n.event;
        n = n.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var i = n.length - 1; 0 <= i; i--) {
                    var a = n[i]
                      , s = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    s !== l && o.isPropagationStopped())
                        break e;
                    _p(o, a, c),
                    l = s
                }
            else
                for (i = 0; i < n.length; i++) {
                    if (a = n[i],
                    s = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    s !== l && o.isPropagationStopped())
                        break e;
                    _p(o, a, c),
                    l = s
                }
        }
    }
    if (Ii)
        throw e = su,
        Ii = !1,
        su = null,
        e
}
function ie(e, t) {
    var r = t[yu];
    r === void 0 && (r = t[yu] = new Set);
    var n = e + "__bubble";
    r.has(n) || (my(t, e, 2, !1),
    r.add(n))
}
function gc(e, t, r) {
    var n = 0;
    t && (n |= 4),
    my(r, e, n, t)
}
var Yl = "_reactListening" + Math.random().toString(36).slice(2);
function nl(e) {
    if (!e[Yl]) {
        e[Yl] = !0,
        Sh.forEach(function(r) {
            r !== "selectionchange" && (WP.has(r) || gc(r, !1, e),
            gc(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Yl] || (t[Yl] = !0,
        gc("selectionchange", !1, t))
    }
}
function my(e, t, r, n) {
    switch (Zh(t)) {
    case 1:
        var o = oP;
        break;
    case 4:
        o = lP;
        break;
    default:
        o = Sf
    }
    r = o.bind(null, t, r, e),
    o = void 0,
    !au || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    n ? o !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, {
        passive: o
    }) : e.addEventListener(t, r, !1)
}
function vc(e, t, r, n, o) {
    var l = n;
    if (!(t & 1) && !(t & 2) && n !== null)
        e: for (; ; ) {
            if (n === null)
                return;
            var i = n.tag;
            if (i === 3 || i === 4) {
                var a = n.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (i === 4)
                    for (i = n.return; i !== null; ) {
                        var s = i.tag;
                        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo,
                        s === o || s.nodeType === 8 && s.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; a !== null; ) {
                    if (i = Kr(a),
                    i === null)
                        return;
                    if (s = i.tag,
                    s === 5 || s === 6) {
                        n = l = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            n = n.return
        }
    Lh(function() {
        var c = l
          , f = hf(r)
          , u = [];
        e: {
            var d = dy.get(e);
            if (d !== void 0) {
                var m = Pf
                  , g = e;
                switch (e) {
                case "keypress":
                    if (wi(r) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = _P;
                    break;
                case "focusin":
                    g = "focus",
                    m = cc;
                    break;
                case "focusout":
                    g = "blur",
                    m = cc;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = cc;
                    break;
                case "click":
                    if (r.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = sp;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = sP;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = PP;
                    break;
                case sy:
                case cy:
                case uy:
                    m = fP;
                    break;
                case fy:
                    m = OP;
                    break;
                case "scroll":
                    m = iP;
                    break;
                case "wheel":
                    m = EP;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = pP;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = up
                }
                var y = (t & 4) !== 0
                  , x = !y && e === "scroll"
                  , h = y ? d !== null ? d + "Capture" : null : d;
                y = [];
                for (var v = c, w; v !== null; ) {
                    w = v;
                    var S = w.stateNode;
                    if (w.tag === 5 && S !== null && (w = S,
                    h !== null && (S = Zo(v, h),
                    S != null && y.push(ol(v, S, w)))),
                    x)
                        break;
                    v = v.return
                }
                0 < y.length && (d = new m(d,g,null,r,f),
                u.push({
                    event: d,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                m = e === "mouseout" || e === "pointerout",
                d && r !== lu && (g = r.relatedTarget || r.fromElement) && (Kr(g) || g[Jt]))
                    break e;
                if ((m || d) && (d = f.window === f ? f : (d = f.ownerDocument) ? d.defaultView || d.parentWindow : window,
                m ? (g = r.relatedTarget || r.toElement,
                m = c,
                g = g ? Kr(g) : null,
                g !== null && (x = dn(g),
                g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (m = null,
                g = c),
                m !== g)) {
                    if (y = sp,
                    S = "onMouseLeave",
                    h = "onMouseEnter",
                    v = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = up,
                    S = "onPointerLeave",
                    h = "onPointerEnter",
                    v = "pointer"),
                    x = m == null ? d : Nn(m),
                    w = g == null ? d : Nn(g),
                    d = new y(S,v + "leave",m,r,f),
                    d.target = x,
                    d.relatedTarget = w,
                    S = null,
                    Kr(f) === c && (y = new y(h,v + "enter",g,r,f),
                    y.target = w,
                    y.relatedTarget = x,
                    S = y),
                    x = S,
                    m && g)
                        t: {
                            for (y = m,
                            h = g,
                            v = 0,
                            w = y; w; w = xn(w))
                                v++;
                            for (w = 0,
                            S = h; S; S = xn(S))
                                w++;
                            for (; 0 < v - w; )
                                y = xn(y),
                                v--;
                            for (; 0 < w - v; )
                                h = xn(h),
                                w--;
                            for (; v--; ) {
                                if (y === h || h !== null && y === h.alternate)
                                    break t;
                                y = xn(y),
                                h = xn(h)
                            }
                            y = null
                        }
                    else
                        y = null;
                    m !== null && Sp(u, d, m, y, !1),
                    g !== null && x !== null && Sp(u, x, g, y, !0)
                }
            }
            e: {
                if (d = c ? Nn(c) : window,
                m = d.nodeName && d.nodeName.toLowerCase(),
                m === "select" || m === "input" && d.type === "file")
                    var P = TP;
                else if (pp(d))
                    if (ny)
                        P = AP;
                    else {
                        P = jP;
                        var O = DP
                    }
                else
                    (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (P = LP);
                if (P && (P = P(e, c))) {
                    ry(u, P, r, f);
                    break e
                }
                O && O(e, d, c),
                e === "focusout" && (O = d._wrapperState) && O.controlled && d.type === "number" && eu(d, "number", d.value)
            }
            switch (O = c ? Nn(c) : window,
            e) {
            case "focusin":
                (pp(O) || O.contentEditable === "true") && (kn = O,
                du = c,
                Fo = null);
                break;
            case "focusout":
                Fo = du = kn = null;
                break;
            case "mousedown":
                pu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                pu = !1,
                yp(u, r, f);
                break;
            case "selectionchange":
                if (VP)
                    break;
            case "keydown":
            case "keyup":
                yp(u, r, f)
            }
            var b;
            if (Of)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var $ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        $ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        $ = "onCompositionUpdate";
                        break e
                    }
                    $ = void 0
                }
            else
                Cn ? ey(e, r) && ($ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
            $ && (qh && r.locale !== "ko" && (Cn || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Cn && (b = Jh()) : (yr = f,
            xf = "value"in yr ? yr.value : yr.textContent,
            Cn = !0)),
            O = Ai(c, $),
            0 < O.length && ($ = new cp($,e,null,r,f),
            u.push({
                event: $,
                listeners: O
            }),
            b ? $.data = b : (b = ty(r),
            b !== null && ($.data = b)))),
            (b = kP ? RP(e, r) : NP(e, r)) && (c = Ai(c, "onBeforeInput"),
            0 < c.length && (f = new cp("onBeforeInput","beforeinput",null,r,f),
            u.push({
                event: f,
                listeners: c
            }),
            f.data = b))
        }
        py(u, t)
    })
}
function ol(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}
function Ai(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
        var o = e
          , l = o.stateNode;
        o.tag === 5 && l !== null && (o = l,
        l = Zo(e, r),
        l != null && n.unshift(ol(e, l, o)),
        l = Zo(e, t),
        l != null && n.push(ol(e, l, o))),
        e = e.return
    }
    return n
}
function xn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Sp(e, t, r, n, o) {
    for (var l = t._reactName, i = []; r !== null && r !== n; ) {
        var a = r
          , s = a.alternate
          , c = a.stateNode;
        if (s !== null && s === n)
            break;
        a.tag === 5 && c !== null && (a = c,
        o ? (s = Zo(r, l),
        s != null && i.unshift(ol(r, s, a))) : o || (s = Zo(r, l),
        s != null && i.push(ol(r, s, a)))),
        r = r.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var UP = /\r\n?/g
  , YP = /\u0000|\uFFFD/g;
function xp(e) {
    return (typeof e == "string" ? e : "" + e).replace(UP, `
`).replace(YP, "")
}
function Gl(e, t, r) {
    if (t = xp(t),
    xp(e) !== t && r)
        throw Error(N(425))
}
function Mi() {}
var mu = null
  , gu = null;
function vu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var hu = typeof setTimeout == "function" ? setTimeout : void 0
  , GP = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Pp = typeof Promise == "function" ? Promise : void 0
  , QP = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pp < "u" ? function(e) {
    return Pp.resolve(null).then(e).catch(XP)
}
: hu;
function XP(e) {
    setTimeout(function() {
        throw e
    })
}
function hc(e, t) {
    var r = t
      , n = 0;
    do {
        var o = r.nextSibling;
        if (e.removeChild(r),
        o && o.nodeType === 8)
            if (r = o.data,
            r === "/$") {
                if (n === 0) {
                    e.removeChild(o),
                    el(t);
                    return
                }
                n--
            } else
                r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = o
    } while (r);
    el(t)
}
function br(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function bp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ao = Math.random().toString(36).slice(2)
  , Tt = "__reactFiber$" + ao
  , ll = "__reactProps$" + ao
  , Jt = "__reactContainer$" + ao
  , yu = "__reactEvents$" + ao
  , KP = "__reactListeners$" + ao
  , ZP = "__reactHandles$" + ao;
function Kr(e) {
    var t = e[Tt];
    if (t)
        return t;
    for (var r = e.parentNode; r; ) {
        if (t = r[Jt] || r[Tt]) {
            if (r = t.alternate,
            t.child !== null || r !== null && r.child !== null)
                for (e = bp(e); e !== null; ) {
                    if (r = e[Tt])
                        return r;
                    e = bp(e)
                }
            return t
        }
        e = r,
        r = e.parentNode
    }
    return null
}
function xl(e) {
    return e = e[Tt] || e[Jt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Nn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function us(e) {
    return e[ll] || null
}
var wu = []
  , zn = -1;
function jr(e) {
    return {
        current: e
    }
}
function ae(e) {
    0 > zn || (e.current = wu[zn],
    wu[zn] = null,
    zn--)
}
function le(e, t) {
    zn++,
    wu[zn] = e.current,
    e.current = t
}
var zr = {}
  , Ae = jr(zr)
  , Xe = jr(!1)
  , on = zr;
function Qn(e, t) {
    var r = e.type.contextTypes;
    if (!r)
        return zr;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext;
    var o = {}, l;
    for (l in r)
        o[l] = t[l];
    return n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Ke(e) {
    return e = e.childContextTypes,
    e != null
}
function Fi() {
    ae(Xe),
    ae(Ae)
}
function Op(e, t, r) {
    if (Ae.current !== zr)
        throw Error(N(168));
    le(Ae, t),
    le(Xe, r)
}
function gy(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes,
    typeof n.getChildContext != "function")
        return r;
    n = n.getChildContext();
    for (var o in n)
        if (!(o in t))
            throw Error(N(108, Dx(e) || "Unknown", o));
    return de({}, r, n)
}
function Vi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zr,
    on = Ae.current,
    le(Ae, e),
    le(Xe, Xe.current),
    !0
}
function $p(e, t, r) {
    var n = e.stateNode;
    if (!n)
        throw Error(N(169));
    r ? (e = gy(e, t, on),
    n.__reactInternalMemoizedMergedChildContext = e,
    ae(Xe),
    ae(Ae),
    le(Ae, e)) : ae(Xe),
    le(Xe, r)
}
var Wt = null
  , fs = !1
  , yc = !1;
function vy(e) {
    Wt === null ? Wt = [e] : Wt.push(e)
}
function JP(e) {
    fs = !0,
    vy(e)
}
function Lr() {
    if (!yc && Wt !== null) {
        yc = !0;
        var e = 0
          , t = te;
        try {
            var r = Wt;
            for (te = 1; e < r.length; e++) {
                var n = r[e];
                do
                    n = n(!0);
                while (n !== null)
            }
            Wt = null,
            fs = !1
        } catch (o) {
            throw Wt !== null && (Wt = Wt.slice(e + 1)),
            Vh(yf, Lr),
            o
        } finally {
            te = t,
            yc = !1
        }
    }
    return null
}
var In = []
  , Tn = 0
  , Bi = null
  , Hi = 0
  , st = []
  , ct = 0
  , ln = null
  , Ut = 1
  , Yt = "";
function Yr(e, t) {
    In[Tn++] = Hi,
    In[Tn++] = Bi,
    Bi = e,
    Hi = t
}
function hy(e, t, r) {
    st[ct++] = Ut,
    st[ct++] = Yt,
    st[ct++] = ln,
    ln = e;
    var n = Ut;
    e = Yt;
    var o = 32 - Pt(n) - 1;
    n &= ~(1 << o),
    r += 1;
    var l = 32 - Pt(t) + o;
    if (30 < l) {
        var i = o - o % 5;
        l = (n & (1 << i) - 1).toString(32),
        n >>= i,
        o -= i,
        Ut = 1 << 32 - Pt(t) + o | r << o | n,
        Yt = l + e
    } else
        Ut = 1 << l | r << o | n,
        Yt = e
}
function Ef(e) {
    e.return !== null && (Yr(e, 1),
    hy(e, 1, 0))
}
function Cf(e) {
    for (; e === Bi; )
        Bi = In[--Tn],
        In[Tn] = null,
        Hi = In[--Tn],
        In[Tn] = null;
    for (; e === ln; )
        ln = st[--ct],
        st[ct] = null,
        Yt = st[--ct],
        st[ct] = null,
        Ut = st[--ct],
        st[ct] = null
}
var rt = null
  , tt = null
  , se = !1
  , xt = null;
function yy(e, t) {
    var r = ut(5, null, null, 0);
    r.elementType = "DELETED",
    r.stateNode = t,
    r.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [r],
    e.flags |= 16) : t.push(r)
}
function Ep(e, t) {
    switch (e.tag) {
    case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        rt = e,
        tt = br(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        rt = e,
        tt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (r = ln !== null ? {
            id: Ut,
            overflow: Yt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: r,
            retryLane: 1073741824
        },
        r = ut(18, null, null, 0),
        r.stateNode = t,
        r.return = e,
        e.child = r,
        rt = e,
        tt = null,
        !0) : !1;
    default:
        return !1
    }
}
function _u(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Su(e) {
    if (se) {
        var t = tt;
        if (t) {
            var r = t;
            if (!Ep(e, t)) {
                if (_u(e))
                    throw Error(N(418));
                t = br(r.nextSibling);
                var n = rt;
                t && Ep(e, t) ? yy(n, r) : (e.flags = e.flags & -4097 | 2,
                se = !1,
                rt = e)
            }
        } else {
            if (_u(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
            se = !1,
            rt = e
        }
    }
}
function Cp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    rt = e
}
function Ql(e) {
    if (e !== rt)
        return !1;
    if (!se)
        return Cp(e),
        se = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !vu(e.type, e.memoizedProps)),
    t && (t = tt)) {
        if (_u(e))
            throw wy(),
            Error(N(418));
        for (; t; )
            yy(e, t),
            t = br(t.nextSibling)
    }
    if (Cp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            tt = br(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            tt = null
        }
    } else
        tt = rt ? br(e.stateNode.nextSibling) : null;
    return !0
}
function wy() {
    for (var e = tt; e; )
        e = br(e.nextSibling)
}
function Xn() {
    tt = rt = null,
    se = !1
}
function kf(e) {
    xt === null ? xt = [e] : xt.push(e)
}
var qP = rr.ReactCurrentBatchConfig;
function _t(e, t) {
    if (e && e.defaultProps) {
        t = de({}, t),
        e = e.defaultProps;
        for (var r in e)
            t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}
var Wi = jr(null)
  , Ui = null
  , Dn = null
  , Rf = null;
function Nf() {
    Rf = Dn = Ui = null
}
function zf(e) {
    var t = Wi.current;
    ae(Wi),
    e._currentValue = t
}
function xu(e, t, r) {
    for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
            break;
        e = e.return
    }
}
function Bn(e, t) {
    Ui = e,
    Rf = Dn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Qe = !0),
    e.firstContext = null)
}
function pt(e) {
    var t = e._currentValue;
    if (Rf !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Dn === null) {
            if (Ui === null)
                throw Error(N(308));
            Dn = e,
            Ui.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Dn = Dn.next = e;
    return t
}
var Zr = null;
function If(e) {
    Zr === null ? Zr = [e] : Zr.push(e)
}
function _y(e, t, r, n) {
    var o = t.interleaved;
    return o === null ? (r.next = r,
    If(t)) : (r.next = o.next,
    o.next = r),
    t.interleaved = r,
    qt(e, n)
}
function qt(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t),
    r = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        r = e.alternate,
        r !== null && (r.childLanes |= t),
        r = e,
        e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var pr = !1;
function Tf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Sy(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Gt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Or(e, t, r) {
    var n = e.updateQueue;
    if (n === null)
        return null;
    if (n = n.shared,
    Y & 2) {
        var o = n.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        n.pending = t,
        qt(e, r)
    }
    return o = n.interleaved,
    o === null ? (t.next = t,
    If(n)) : (t.next = o.next,
    o.next = t),
    n.interleaved = t,
    qt(e, r)
}
function _i(e, t, r) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        wf(e, r)
    }
}
function kp(e, t) {
    var r = e.updateQueue
      , n = e.alternate;
    if (n !== null && (n = n.updateQueue,
    r === n)) {
        var o = null
          , l = null;
        if (r = r.firstBaseUpdate,
        r !== null) {
            do {
                var i = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                l === null ? o = l = i : l = l.next = i,
                r = r.next
            } while (r !== null);
            l === null ? o = l = t : l = l.next = t
        } else
            o = l = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: l,
            shared: n.shared,
            effects: n.effects
        },
        e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate,
    e === null ? r.firstBaseUpdate = t : e.next = t,
    r.lastBaseUpdate = t
}
function Yi(e, t, r, n) {
    var o = e.updateQueue;
    pr = !1;
    var l = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var s = a
          , c = s.next;
        s.next = null,
        i === null ? l = c : i.next = c,
        i = s;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        a = f.lastBaseUpdate,
        a !== i && (a === null ? f.firstBaseUpdate = c : a.next = c,
        f.lastBaseUpdate = s))
    }
    if (l !== null) {
        var u = o.baseState;
        i = 0,
        f = c = s = null,
        a = l;
        do {
            var d = a.lane
              , m = a.eventTime;
            if ((n & d) === d) {
                f !== null && (f = f.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var g = e
                      , y = a;
                    switch (d = t,
                    m = r,
                    y.tag) {
                    case 1:
                        if (g = y.payload,
                        typeof g == "function") {
                            u = g.call(m, u, d);
                            break e
                        }
                        u = g;
                        break e;
                    case 3:
                        g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = y.payload,
                        d = typeof g == "function" ? g.call(m, u, d) : g,
                        d == null)
                            break e;
                        u = de({}, u, d);
                        break e;
                    case 2:
                        pr = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                d = o.effects,
                d === null ? o.effects = [a] : d.push(a))
            } else
                m = {
                    eventTime: m,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                f === null ? (c = f = m,
                s = u) : f = f.next = m,
                i |= d;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                d = a,
                a = d.next,
                d.next = null,
                o.lastBaseUpdate = d,
                o.shared.pending = null
            }
        } while (1);
        if (f === null && (s = u),
        o.baseState = s,
        o.firstBaseUpdate = c,
        o.lastBaseUpdate = f,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            l === null && (o.shared.lanes = 0);
        sn |= i,
        e.lanes = i,
        e.memoizedState = u
    }
}
function Rp(e, t, r) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t]
              , o = n.callback;
            if (o !== null) {
                if (n.callback = null,
                n = r,
                typeof o != "function")
                    throw Error(N(191, o));
                o.call(n)
            }
        }
}
var xy = new _h.Component().refs;
function Pu(e, t, r, n) {
    t = e.memoizedState,
    r = r(n, t),
    r = r == null ? t : de({}, t, r),
    e.memoizedState = r,
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var ds = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? dn(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = Ve()
          , o = Er(e)
          , l = Gt(n, o);
        l.payload = t,
        r != null && (l.callback = r),
        t = Or(e, l, o),
        t !== null && (bt(t, e, o, n),
        _i(t, e, o))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = Ve()
          , o = Er(e)
          , l = Gt(n, o);
        l.tag = 1,
        l.payload = t,
        r != null && (l.callback = r),
        t = Or(e, l, o),
        t !== null && (bt(t, e, o, n),
        _i(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = Ve()
          , n = Er(e)
          , o = Gt(r, n);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Or(e, o, n),
        t !== null && (bt(t, e, n, r),
        _i(t, e, n))
    }
};
function Np(e, t, r, n, o, l, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, l, i) : t.prototype && t.prototype.isPureReactComponent ? !rl(r, n) || !rl(o, l) : !0
}
function Py(e, t, r) {
    var n = !1
      , o = zr
      , l = t.contextType;
    return typeof l == "object" && l !== null ? l = pt(l) : (o = Ke(t) ? on : Ae.current,
    n = t.contextTypes,
    l = (n = n != null) ? Qn(e, o) : zr),
    t = new t(r,l),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ds,
    e.stateNode = t,
    t._reactInternals = e,
    n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = l),
    t
}
function zp(e, t, r, n) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && ds.enqueueReplaceState(t, t.state, null)
}
function bu(e, t, r, n) {
    var o = e.stateNode;
    o.props = r,
    o.state = e.memoizedState,
    o.refs = xy,
    Tf(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? o.context = pt(l) : (l = Ke(t) ? on : Ae.current,
    o.context = Qn(e, l)),
    o.state = e.memoizedState,
    l = t.getDerivedStateFromProps,
    typeof l == "function" && (Pu(e, t, l, r),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && ds.enqueueReplaceState(o, o.state, null),
    Yi(e, r, o, n),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function xo(e, t, r) {
    if (e = r.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner,
            r) {
                if (r.tag !== 1)
                    throw Error(N(309));
                var n = r.stateNode
            }
            if (!n)
                throw Error(N(147, e));
            var o = n
              , l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
                var a = o.refs;
                a === xy && (a = o.refs = {}),
                i === null ? delete a[l] : a[l] = i
            }
            ,
            t._stringRef = l,
            t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!r._owner)
            throw Error(N(290, e))
    }
    return e
}
function Xl(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ip(e) {
    var t = e._init;
    return t(e._payload)
}
function by(e) {
    function t(h, v) {
        if (e) {
            var w = h.deletions;
            w === null ? (h.deletions = [v],
            h.flags |= 16) : w.push(v)
        }
    }
    function r(h, v) {
        if (!e)
            return null;
        for (; v !== null; )
            t(h, v),
            v = v.sibling;
        return null
    }
    function n(h, v) {
        for (h = new Map; v !== null; )
            v.key !== null ? h.set(v.key, v) : h.set(v.index, v),
            v = v.sibling;
        return h
    }
    function o(h, v) {
        return h = Cr(h, v),
        h.index = 0,
        h.sibling = null,
        h
    }
    function l(h, v, w) {
        return h.index = w,
        e ? (w = h.alternate,
        w !== null ? (w = w.index,
        w < v ? (h.flags |= 2,
        v) : w) : (h.flags |= 2,
        v)) : (h.flags |= 1048576,
        v)
    }
    function i(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function a(h, v, w, S) {
        return v === null || v.tag !== 6 ? (v = Oc(w, h.mode, S),
        v.return = h,
        v) : (v = o(v, w),
        v.return = h,
        v)
    }
    function s(h, v, w, S) {
        var P = w.type;
        return P === En ? f(h, v, w.props.children, S, w.key) : v !== null && (v.elementType === P || typeof P == "object" && P !== null && P.$$typeof === dr && Ip(P) === v.type) ? (S = o(v, w.props),
        S.ref = xo(h, v, w),
        S.return = h,
        S) : (S = $i(w.type, w.key, w.props, null, h.mode, S),
        S.ref = xo(h, v, w),
        S.return = h,
        S)
    }
    function c(h, v, w, S) {
        return v === null || v.tag !== 4 || v.stateNode.containerInfo !== w.containerInfo || v.stateNode.implementation !== w.implementation ? (v = $c(w, h.mode, S),
        v.return = h,
        v) : (v = o(v, w.children || []),
        v.return = h,
        v)
    }
    function f(h, v, w, S, P) {
        return v === null || v.tag !== 7 ? (v = tn(w, h.mode, S, P),
        v.return = h,
        v) : (v = o(v, w),
        v.return = h,
        v)
    }
    function u(h, v, w) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return v = Oc("" + v, h.mode, w),
            v.return = h,
            v;
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Al:
                return w = $i(v.type, v.key, v.props, null, h.mode, w),
                w.ref = xo(h, null, v),
                w.return = h,
                w;
            case $n:
                return v = $c(v, h.mode, w),
                v.return = h,
                v;
            case dr:
                var S = v._init;
                return u(h, S(v._payload), w)
            }
            if (No(v) || ho(v))
                return v = tn(v, h.mode, w, null),
                v.return = h,
                v;
            Xl(h, v)
        }
        return null
    }
    function d(h, v, w, S) {
        var P = v !== null ? v.key : null;
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return P !== null ? null : a(h, v, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Al:
                return w.key === P ? s(h, v, w, S) : null;
            case $n:
                return w.key === P ? c(h, v, w, S) : null;
            case dr:
                return P = w._init,
                d(h, v, P(w._payload), S)
            }
            if (No(w) || ho(w))
                return P !== null ? null : f(h, v, w, S, null);
            Xl(h, w)
        }
        return null
    }
    function m(h, v, w, S, P) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return h = h.get(w) || null,
            a(v, h, "" + S, P);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Al:
                return h = h.get(S.key === null ? w : S.key) || null,
                s(v, h, S, P);
            case $n:
                return h = h.get(S.key === null ? w : S.key) || null,
                c(v, h, S, P);
            case dr:
                var O = S._init;
                return m(h, v, w, O(S._payload), P)
            }
            if (No(S) || ho(S))
                return h = h.get(w) || null,
                f(v, h, S, P, null);
            Xl(v, S)
        }
        return null
    }
    function g(h, v, w, S) {
        for (var P = null, O = null, b = v, $ = v = 0, E = null; b !== null && $ < w.length; $++) {
            b.index > $ ? (E = b,
            b = null) : E = b.sibling;
            var k = d(h, b, w[$], S);
            if (k === null) {
                b === null && (b = E);
                break
            }
            e && b && k.alternate === null && t(h, b),
            v = l(k, v, $),
            O === null ? P = k : O.sibling = k,
            O = k,
            b = E
        }
        if ($ === w.length)
            return r(h, b),
            se && Yr(h, $),
            P;
        if (b === null) {
            for (; $ < w.length; $++)
                b = u(h, w[$], S),
                b !== null && (v = l(b, v, $),
                O === null ? P = b : O.sibling = b,
                O = b);
            return se && Yr(h, $),
            P
        }
        for (b = n(h, b); $ < w.length; $++)
            E = m(b, h, $, w[$], S),
            E !== null && (e && E.alternate !== null && b.delete(E.key === null ? $ : E.key),
            v = l(E, v, $),
            O === null ? P = E : O.sibling = E,
            O = E);
        return e && b.forEach(function(j) {
            return t(h, j)
        }),
        se && Yr(h, $),
        P
    }
    function y(h, v, w, S) {
        var P = ho(w);
        if (typeof P != "function")
            throw Error(N(150));
        if (w = P.call(w),
        w == null)
            throw Error(N(151));
        for (var O = P = null, b = v, $ = v = 0, E = null, k = w.next(); b !== null && !k.done; $++,
        k = w.next()) {
            b.index > $ ? (E = b,
            b = null) : E = b.sibling;
            var j = d(h, b, k.value, S);
            if (j === null) {
                b === null && (b = E);
                break
            }
            e && b && j.alternate === null && t(h, b),
            v = l(j, v, $),
            O === null ? P = j : O.sibling = j,
            O = j,
            b = E
        }
        if (k.done)
            return r(h, b),
            se && Yr(h, $),
            P;
        if (b === null) {
            for (; !k.done; $++,
            k = w.next())
                k = u(h, k.value, S),
                k !== null && (v = l(k, v, $),
                O === null ? P = k : O.sibling = k,
                O = k);
            return se && Yr(h, $),
            P
        }
        for (b = n(h, b); !k.done; $++,
        k = w.next())
            k = m(b, h, $, k.value, S),
            k !== null && (e && k.alternate !== null && b.delete(k.key === null ? $ : k.key),
            v = l(k, v, $),
            O === null ? P = k : O.sibling = k,
            O = k);
        return e && b.forEach(function(T) {
            return t(h, T)
        }),
        se && Yr(h, $),
        P
    }
    function x(h, v, w, S) {
        if (typeof w == "object" && w !== null && w.type === En && w.key === null && (w = w.props.children),
        typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Al:
                e: {
                    for (var P = w.key, O = v; O !== null; ) {
                        if (O.key === P) {
                            if (P = w.type,
                            P === En) {
                                if (O.tag === 7) {
                                    r(h, O.sibling),
                                    v = o(O, w.props.children),
                                    v.return = h,
                                    h = v;
                                    break e
                                }
                            } else if (O.elementType === P || typeof P == "object" && P !== null && P.$$typeof === dr && Ip(P) === O.type) {
                                r(h, O.sibling),
                                v = o(O, w.props),
                                v.ref = xo(h, O, w),
                                v.return = h,
                                h = v;
                                break e
                            }
                            r(h, O);
                            break
                        } else
                            t(h, O);
                        O = O.sibling
                    }
                    w.type === En ? (v = tn(w.props.children, h.mode, S, w.key),
                    v.return = h,
                    h = v) : (S = $i(w.type, w.key, w.props, null, h.mode, S),
                    S.ref = xo(h, v, w),
                    S.return = h,
                    h = S)
                }
                return i(h);
            case $n:
                e: {
                    for (O = w.key; v !== null; ) {
                        if (v.key === O)
                            if (v.tag === 4 && v.stateNode.containerInfo === w.containerInfo && v.stateNode.implementation === w.implementation) {
                                r(h, v.sibling),
                                v = o(v, w.children || []),
                                v.return = h,
                                h = v;
                                break e
                            } else {
                                r(h, v);
                                break
                            }
                        else
                            t(h, v);
                        v = v.sibling
                    }
                    v = $c(w, h.mode, S),
                    v.return = h,
                    h = v
                }
                return i(h);
            case dr:
                return O = w._init,
                x(h, v, O(w._payload), S)
            }
            if (No(w))
                return g(h, v, w, S);
            if (ho(w))
                return y(h, v, w, S);
            Xl(h, w)
        }
        return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w,
        v !== null && v.tag === 6 ? (r(h, v.sibling),
        v = o(v, w),
        v.return = h,
        h = v) : (r(h, v),
        v = Oc(w, h.mode, S),
        v.return = h,
        h = v),
        i(h)) : r(h, v)
    }
    return x
}
var Kn = by(!0)
  , Oy = by(!1)
  , Pl = {}
  , jt = jr(Pl)
  , il = jr(Pl)
  , al = jr(Pl);
function Jr(e) {
    if (e === Pl)
        throw Error(N(174));
    return e
}
function Df(e, t) {
    switch (le(al, t),
    le(il, e),
    le(jt, Pl),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ru(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ru(t, e)
    }
    ae(jt),
    le(jt, t)
}
function Zn() {
    ae(jt),
    ae(il),
    ae(al)
}
function $y(e) {
    Jr(al.current);
    var t = Jr(jt.current)
      , r = ru(t, e.type);
    t !== r && (le(il, e),
    le(jt, r))
}
function jf(e) {
    il.current === e && (ae(jt),
    ae(il))
}
var ue = jr(0);
function Gi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated,
            r === null || r.data === "$?" || r.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var wc = [];
function Lf() {
    for (var e = 0; e < wc.length; e++)
        wc[e]._workInProgressVersionPrimary = null;
    wc.length = 0
}
var Si = rr.ReactCurrentDispatcher
  , _c = rr.ReactCurrentBatchConfig
  , an = 0
  , fe = null
  , we = null
  , Pe = null
  , Qi = !1
  , Vo = !1
  , sl = 0
  , eb = 0;
function Te() {
    throw Error(N(321))
}
function Af(e, t) {
    if (t === null)
        return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!$t(e[r], t[r]))
            return !1;
    return !0
}
function Mf(e, t, r, n, o, l) {
    if (an = l,
    fe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Si.current = e === null || e.memoizedState === null ? ob : lb,
    e = r(n, o),
    Vo) {
        l = 0;
        do {
            if (Vo = !1,
            sl = 0,
            25 <= l)
                throw Error(N(301));
            l += 1,
            Pe = we = null,
            t.updateQueue = null,
            Si.current = ib,
            e = r(n, o)
        } while (Vo)
    }
    if (Si.current = Xi,
    t = we !== null && we.next !== null,
    an = 0,
    Pe = we = fe = null,
    Qi = !1,
    t)
        throw Error(N(300));
    return e
}
function Ff() {
    var e = sl !== 0;
    return sl = 0,
    e
}
function Nt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Pe === null ? fe.memoizedState = Pe = e : Pe = Pe.next = e,
    Pe
}
function mt() {
    if (we === null) {
        var e = fe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = we.next;
    var t = Pe === null ? fe.memoizedState : Pe.next;
    if (t !== null)
        Pe = t,
        we = e;
    else {
        if (e === null)
            throw Error(N(310));
        we = e,
        e = {
            memoizedState: we.memoizedState,
            baseState: we.baseState,
            baseQueue: we.baseQueue,
            queue: we.queue,
            next: null
        },
        Pe === null ? fe.memoizedState = Pe = e : Pe = Pe.next = e
    }
    return Pe
}
function cl(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Sc(e) {
    var t = mt()
      , r = t.queue;
    if (r === null)
        throw Error(N(311));
    r.lastRenderedReducer = e;
    var n = we
      , o = n.baseQueue
      , l = r.pending;
    if (l !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = l.next,
            l.next = i
        }
        n.baseQueue = o = l,
        r.pending = null
    }
    if (o !== null) {
        l = o.next,
        n = n.baseState;
        var a = i = null
          , s = null
          , c = l;
        do {
            var f = c.lane;
            if ((an & f) === f)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                n = c.hasEagerState ? c.eagerState : e(n, c.action);
            else {
                var u = {
                    lane: f,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                s === null ? (a = s = u,
                i = n) : s = s.next = u,
                fe.lanes |= f,
                sn |= f
            }
            c = c.next
        } while (c !== null && c !== l);
        s === null ? i = n : s.next = a,
        $t(n, t.memoizedState) || (Qe = !0),
        t.memoizedState = n,
        t.baseState = i,
        t.baseQueue = s,
        r.lastRenderedState = n
    }
    if (e = r.interleaved,
    e !== null) {
        o = e;
        do
            l = o.lane,
            fe.lanes |= l,
            sn |= l,
            o = o.next;
        while (o !== e)
    } else
        o === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}
function xc(e) {
    var t = mt()
      , r = t.queue;
    if (r === null)
        throw Error(N(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch
      , o = r.pending
      , l = t.memoizedState;
    if (o !== null) {
        r.pending = null;
        var i = o = o.next;
        do
            l = e(l, i.action),
            i = i.next;
        while (i !== o);
        $t(l, t.memoizedState) || (Qe = !0),
        t.memoizedState = l,
        t.baseQueue === null && (t.baseState = l),
        r.lastRenderedState = l
    }
    return [l, n]
}
function Ey() {}
function Cy(e, t) {
    var r = fe
      , n = mt()
      , o = t()
      , l = !$t(n.memoizedState, o);
    if (l && (n.memoizedState = o,
    Qe = !0),
    n = n.queue,
    Vf(Ny.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || l || Pe !== null && Pe.memoizedState.tag & 1) {
        if (r.flags |= 2048,
        ul(9, Ry.bind(null, r, n, o, t), void 0, null),
        be === null)
            throw Error(N(349));
        an & 30 || ky(r, t, o)
    }
    return o
}
function ky(e, t, r) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: r
    },
    t = fe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    fe.updateQueue = t,
    t.stores = [e]) : (r = t.stores,
    r === null ? t.stores = [e] : r.push(e))
}
function Ry(e, t, r, n) {
    t.value = r,
    t.getSnapshot = n,
    zy(t) && Iy(e)
}
function Ny(e, t, r) {
    return r(function() {
        zy(t) && Iy(e)
    })
}
function zy(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !$t(e, r)
    } catch {
        return !0
    }
}
function Iy(e) {
    var t = qt(e, 1);
    t !== null && bt(t, e, 1, -1)
}
function Tp(e) {
    var t = Nt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cl,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = nb.bind(null, fe, e),
    [t.memoizedState, e]
}
function ul(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    },
    t = fe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    fe.updateQueue = t,
    t.lastEffect = e.next = e) : (r = t.lastEffect,
    r === null ? t.lastEffect = e.next = e : (n = r.next,
    r.next = e,
    e.next = n,
    t.lastEffect = e)),
    e
}
function Ty() {
    return mt().memoizedState
}
function xi(e, t, r, n) {
    var o = Nt();
    fe.flags |= e,
    o.memoizedState = ul(1 | t, r, void 0, n === void 0 ? null : n)
}
function ps(e, t, r, n) {
    var o = mt();
    n = n === void 0 ? null : n;
    var l = void 0;
    if (we !== null) {
        var i = we.memoizedState;
        if (l = i.destroy,
        n !== null && Af(n, i.deps)) {
            o.memoizedState = ul(t, r, l, n);
            return
        }
    }
    fe.flags |= e,
    o.memoizedState = ul(1 | t, r, l, n)
}
function Dp(e, t) {
    return xi(8390656, 8, e, t)
}
function Vf(e, t) {
    return ps(2048, 8, e, t)
}
function Dy(e, t) {
    return ps(4, 2, e, t)
}
function jy(e, t) {
    return ps(4, 4, e, t)
}
function Ly(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Ay(e, t, r) {
    return r = r != null ? r.concat([e]) : null,
    ps(4, 4, Ly.bind(null, t, e), r)
}
function Bf() {}
function My(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Af(t, n[1]) ? n[0] : (r.memoizedState = [e, t],
    e)
}
function Fy(e, t) {
    var r = mt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Af(t, n[1]) ? n[0] : (e = e(),
    r.memoizedState = [e, t],
    e)
}
function Vy(e, t, r) {
    return an & 21 ? ($t(r, t) || (r = Wh(),
    fe.lanes |= r,
    sn |= r,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Qe = !0),
    e.memoizedState = r)
}
function tb(e, t) {
    var r = te;
    te = r !== 0 && 4 > r ? r : 4,
    e(!0);
    var n = _c.transition;
    _c.transition = {};
    try {
        e(!1),
        t()
    } finally {
        te = r,
        _c.transition = n
    }
}
function By() {
    return mt().memoizedState
}
function rb(e, t, r) {
    var n = Er(e);
    if (r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Hy(e))
        Wy(t, r);
    else if (r = _y(e, t, r, n),
    r !== null) {
        var o = Ve();
        bt(r, e, n, o),
        Uy(r, t, n)
    }
}
function nb(e, t, r) {
    var n = Er(e)
      , o = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Hy(e))
        Wy(t, o);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer,
        l !== null))
            try {
                var i = t.lastRenderedState
                  , a = l(i, r);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                $t(a, i)) {
                    var s = t.interleaved;
                    s === null ? (o.next = o,
                    If(t)) : (o.next = s.next,
                    s.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        r = _y(e, t, o, n),
        r !== null && (o = Ve(),
        bt(r, e, n, o),
        Uy(r, t, n))
    }
}
function Hy(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe
}
function Wy(e, t) {
    Vo = Qi = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next,
    r.next = t),
    e.pending = t
}
function Uy(e, t, r) {
    if (r & 4194240) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        wf(e, r)
    }
}
var Xi = {
    readContext: pt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1
}
  , ob = {
    readContext: pt,
    useCallback: function(e, t) {
        return Nt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: pt,
    useEffect: Dp,
    useImperativeHandle: function(e, t, r) {
        return r = r != null ? r.concat([e]) : null,
        xi(4194308, 4, Ly.bind(null, t, e), r)
    },
    useLayoutEffect: function(e, t) {
        return xi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return xi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var r = Nt();
        return t = t === void 0 ? null : t,
        e = e(),
        r.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, r) {
        var n = Nt();
        return t = r !== void 0 ? r(t) : t,
        n.memoizedState = n.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        n.queue = e,
        e = e.dispatch = rb.bind(null, fe, e),
        [n.memoizedState, e]
    },
    useRef: function(e) {
        var t = Nt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Tp,
    useDebugValue: Bf,
    useDeferredValue: function(e) {
        return Nt().memoizedState = e
    },
    useTransition: function() {
        var e = Tp(!1)
          , t = e[0];
        return e = tb.bind(null, e[1]),
        Nt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, r) {
        var n = fe
          , o = Nt();
        if (se) {
            if (r === void 0)
                throw Error(N(407));
            r = r()
        } else {
            if (r = t(),
            be === null)
                throw Error(N(349));
            an & 30 || ky(n, t, r)
        }
        o.memoizedState = r;
        var l = {
            value: r,
            getSnapshot: t
        };
        return o.queue = l,
        Dp(Ny.bind(null, n, l, e), [e]),
        n.flags |= 2048,
        ul(9, Ry.bind(null, n, l, r, t), void 0, null),
        r
    },
    useId: function() {
        var e = Nt()
          , t = be.identifierPrefix;
        if (se) {
            var r = Yt
              , n = Ut;
            r = (n & ~(1 << 32 - Pt(n) - 1)).toString(32) + r,
            t = ":" + t + "R" + r,
            r = sl++,
            0 < r && (t += "H" + r.toString(32)),
            t += ":"
        } else
            r = eb++,
            t = ":" + t + "r" + r.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , lb = {
    readContext: pt,
    useCallback: My,
    useContext: pt,
    useEffect: Vf,
    useImperativeHandle: Ay,
    useInsertionEffect: Dy,
    useLayoutEffect: jy,
    useMemo: Fy,
    useReducer: Sc,
    useRef: Ty,
    useState: function() {
        return Sc(cl)
    },
    useDebugValue: Bf,
    useDeferredValue: function(e) {
        var t = mt();
        return Vy(t, we.memoizedState, e)
    },
    useTransition: function() {
        var e = Sc(cl)[0]
          , t = mt().memoizedState;
        return [e, t]
    },
    useMutableSource: Ey,
    useSyncExternalStore: Cy,
    useId: By,
    unstable_isNewReconciler: !1
}
  , ib = {
    readContext: pt,
    useCallback: My,
    useContext: pt,
    useEffect: Vf,
    useImperativeHandle: Ay,
    useInsertionEffect: Dy,
    useLayoutEffect: jy,
    useMemo: Fy,
    useReducer: xc,
    useRef: Ty,
    useState: function() {
        return xc(cl)
    },
    useDebugValue: Bf,
    useDeferredValue: function(e) {
        var t = mt();
        return we === null ? t.memoizedState = e : Vy(t, we.memoizedState, e)
    },
    useTransition: function() {
        var e = xc(cl)[0]
          , t = mt().memoizedState;
        return [e, t]
    },
    useMutableSource: Ey,
    useSyncExternalStore: Cy,
    useId: By,
    unstable_isNewReconciler: !1
};
function Jn(e, t) {
    try {
        var r = ""
          , n = t;
        do
            r += Tx(n),
            n = n.return;
        while (n);
        var o = r
    } catch (l) {
        o = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Pc(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
    }
}
function Ou(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var ab = typeof WeakMap == "function" ? WeakMap : Map;
function Yy(e, t, r) {
    r = Gt(-1, r),
    r.tag = 3,
    r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function() {
        Zi || (Zi = !0,
        Du = n),
        Ou(e, t)
    }
    ,
    r
}
function Gy(e, t, r) {
    r = Gt(-1, r),
    r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var o = t.value;
        r.payload = function() {
            return n(o)
        }
        ,
        r.callback = function() {
            Ou(e, t)
        }
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (r.callback = function() {
        Ou(e, t),
        typeof n != "function" && ($r === null ? $r = new Set([this]) : $r.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    r
}
function jp(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new ab;
        var o = new Set;
        n.set(t, o)
    } else
        o = n.get(t),
        o === void 0 && (o = new Set,
        n.set(t, o));
    o.has(r) || (o.add(r),
    e = Sb.bind(null, e, t, r),
    t.then(e, e))
}
function Lp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ap(e, t, r, n, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    r.flags |= 131072,
    r.flags &= -52805,
    r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Gt(-1, 1),
    t.tag = 2,
    Or(r, t, 1))),
    r.lanes |= 1),
    e)
}
var sb = rr.ReactCurrentOwner
  , Qe = !1;
function Fe(e, t, r, n) {
    t.child = e === null ? Oy(t, null, r, n) : Kn(t, e.child, r, n)
}
function Mp(e, t, r, n, o) {
    r = r.render;
    var l = t.ref;
    return Bn(t, o),
    n = Mf(e, t, r, n, l, o),
    r = Ff(),
    e !== null && !Qe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    er(e, t, o)) : (se && r && Ef(t),
    t.flags |= 1,
    Fe(e, t, n, o),
    t.child)
}
function Fp(e, t, r, n, o) {
    if (e === null) {
        var l = r.type;
        return typeof l == "function" && !Kf(l) && l.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15,
        t.type = l,
        Qy(e, t, l, n, o)) : (e = $i(r.type, null, n, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (l = e.child,
    !(e.lanes & o)) {
        var i = l.memoizedProps;
        if (r = r.compare,
        r = r !== null ? r : rl,
        r(i, n) && e.ref === t.ref)
            return er(e, t, o)
    }
    return t.flags |= 1,
    e = Cr(l, n),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Qy(e, t, r, n, o) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (rl(l, n) && e.ref === t.ref)
            if (Qe = !1,
            t.pendingProps = n = l,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Qe = !0);
            else
                return t.lanes = e.lanes,
                er(e, t, o)
    }
    return $u(e, t, r, n, o)
}
function Xy(e, t, r) {
    var n = t.pendingProps
      , o = n.children
      , l = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            le(Ln, et),
            et |= r;
        else {
            if (!(r & 1073741824))
                return e = l !== null ? l.baseLanes | r : r,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                le(Ln, et),
                et |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            n = l !== null ? l.baseLanes : r,
            le(Ln, et),
            et |= n
        }
    else
        l !== null ? (n = l.baseLanes | r,
        t.memoizedState = null) : n = r,
        le(Ln, et),
        et |= n;
    return Fe(e, t, o, r),
    t.child
}
function Ky(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512,
    t.flags |= 2097152)
}
function $u(e, t, r, n, o) {
    var l = Ke(r) ? on : Ae.current;
    return l = Qn(t, l),
    Bn(t, o),
    r = Mf(e, t, r, n, l, o),
    n = Ff(),
    e !== null && !Qe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    er(e, t, o)) : (se && n && Ef(t),
    t.flags |= 1,
    Fe(e, t, r, o),
    t.child)
}
function Vp(e, t, r, n, o) {
    if (Ke(r)) {
        var l = !0;
        Vi(t)
    } else
        l = !1;
    if (Bn(t, o),
    t.stateNode === null)
        Pi(e, t),
        Py(t, r, n),
        bu(t, r, n, o),
        n = !0;
    else if (e === null) {
        var i = t.stateNode
          , a = t.memoizedProps;
        i.props = a;
        var s = i.context
          , c = r.contextType;
        typeof c == "object" && c !== null ? c = pt(c) : (c = Ke(r) ? on : Ae.current,
        c = Qn(t, c));
        var f = r.getDerivedStateFromProps
          , u = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        u || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== n || s !== c) && zp(t, i, n, c),
        pr = !1;
        var d = t.memoizedState;
        i.state = d,
        Yi(t, n, i, o),
        s = t.memoizedState,
        a !== n || d !== s || Xe.current || pr ? (typeof f == "function" && (Pu(t, r, f, n),
        s = t.memoizedState),
        (a = pr || Np(t, r, a, n, d, s, c)) ? (u || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = n,
        t.memoizedState = s),
        i.props = n,
        i.state = s,
        i.context = c,
        n = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        n = !1)
    } else {
        i = t.stateNode,
        Sy(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : _t(t.type, a),
        i.props = c,
        u = t.pendingProps,
        d = i.context,
        s = r.contextType,
        typeof s == "object" && s !== null ? s = pt(s) : (s = Ke(r) ? on : Ae.current,
        s = Qn(t, s));
        var m = r.getDerivedStateFromProps;
        (f = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== u || d !== s) && zp(t, i, n, s),
        pr = !1,
        d = t.memoizedState,
        i.state = d,
        Yi(t, n, i, o);
        var g = t.memoizedState;
        a !== u || d !== g || Xe.current || pr ? (typeof m == "function" && (Pu(t, r, m, n),
        g = t.memoizedState),
        (c = pr || Np(t, r, c, n, d, g, s) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, g, s),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, g, s)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = n,
        t.memoizedState = g),
        i.props = n,
        i.state = g,
        i.context = s,
        n = c) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        n = !1)
    }
    return Eu(e, t, r, n, l, o)
}
function Eu(e, t, r, n, o, l) {
    Ky(e, t);
    var i = (t.flags & 128) !== 0;
    if (!n && !i)
        return o && $p(t, r, !1),
        er(e, t, l);
    n = t.stateNode,
    sb.current = t;
    var a = i && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = Kn(t, e.child, null, l),
    t.child = Kn(t, null, a, l)) : Fe(e, t, a, l),
    t.memoizedState = n.state,
    o && $p(t, r, !0),
    t.child
}
function Zy(e) {
    var t = e.stateNode;
    t.pendingContext ? Op(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Op(e, t.context, !1),
    Df(e, t.containerInfo)
}
function Bp(e, t, r, n, o) {
    return Xn(),
    kf(o),
    t.flags |= 256,
    Fe(e, t, r, n),
    t.child
}
var Cu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ku(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Jy(e, t, r) {
    var n = t.pendingProps, o = ue.current, l = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (l = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    le(ue, o & 1),
    e === null)
        return Su(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = n.children,
        e = n.fallback,
        l ? (n = t.mode,
        l = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(n & 1) && l !== null ? (l.childLanes = 0,
        l.pendingProps = i) : l = vs(i, n, 0, null),
        e = tn(e, n, r, null),
        l.return = t,
        e.return = t,
        l.sibling = e,
        t.child = l,
        t.child.memoizedState = ku(r),
        t.memoizedState = Cu,
        e) : Hf(t, i));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return cb(e, t, i, n, a, o, r);
    if (l) {
        l = n.fallback,
        i = t.mode,
        o = e.child,
        a = o.sibling;
        var s = {
            mode: "hidden",
            children: n.children
        };
        return !(i & 1) && t.child !== o ? (n = t.child,
        n.childLanes = 0,
        n.pendingProps = s,
        t.deletions = null) : (n = Cr(o, s),
        n.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? l = Cr(a, l) : (l = tn(l, i, r, null),
        l.flags |= 2),
        l.return = t,
        n.return = t,
        n.sibling = l,
        t.child = n,
        n = l,
        l = t.child,
        i = e.child.memoizedState,
        i = i === null ? ku(r) : {
            baseLanes: i.baseLanes | r,
            cachePool: null,
            transitions: i.transitions
        },
        l.memoizedState = i,
        l.childLanes = e.childLanes & ~r,
        t.memoizedState = Cu,
        n
    }
    return l = e.child,
    e = l.sibling,
    n = Cr(l, {
        mode: "visible",
        children: n.children
    }),
    !(t.mode & 1) && (n.lanes = r),
    n.return = t,
    n.sibling = null,
    e !== null && (r = t.deletions,
    r === null ? (t.deletions = [e],
    t.flags |= 16) : r.push(e)),
    t.child = n,
    t.memoizedState = null,
    n
}
function Hf(e, t) {
    return t = vs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Kl(e, t, r, n) {
    return n !== null && kf(n),
    Kn(t, e.child, null, r),
    e = Hf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function cb(e, t, r, n, o, l, i) {
    if (r)
        return t.flags & 256 ? (t.flags &= -257,
        n = Pc(Error(N(422))),
        Kl(e, t, i, n)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (l = n.fallback,
        o = t.mode,
        n = vs({
            mode: "visible",
            children: n.children
        }, o, 0, null),
        l = tn(l, o, i, null),
        l.flags |= 2,
        n.return = t,
        l.return = t,
        n.sibling = l,
        t.child = n,
        t.mode & 1 && Kn(t, e.child, null, i),
        t.child.memoizedState = ku(i),
        t.memoizedState = Cu,
        l);
    if (!(t.mode & 1))
        return Kl(e, t, i, null);
    if (o.data === "$!") {
        if (n = o.nextSibling && o.nextSibling.dataset,
        n)
            var a = n.dgst;
        return n = a,
        l = Error(N(419)),
        n = Pc(l, n, void 0),
        Kl(e, t, i, n)
    }
    if (a = (i & e.childLanes) !== 0,
    Qe || a) {
        if (n = be,
        n !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (n.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== l.retryLane && (l.retryLane = o,
            qt(e, o),
            bt(n, e, o, -1))
        }
        return Xf(),
        n = Pc(Error(N(421))),
        Kl(e, t, i, n)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = xb.bind(null, e),
    o._reactRetry = t,
    null) : (e = l.treeContext,
    tt = br(o.nextSibling),
    rt = t,
    se = !0,
    xt = null,
    e !== null && (st[ct++] = Ut,
    st[ct++] = Yt,
    st[ct++] = ln,
    Ut = e.id,
    Yt = e.overflow,
    ln = t),
    t = Hf(t, n.children),
    t.flags |= 4096,
    t)
}
function Hp(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t),
    xu(e.return, t, r)
}
function bc(e, t, r, n, o) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o
    } : (l.isBackwards = t,
    l.rendering = null,
    l.renderingStartTime = 0,
    l.last = n,
    l.tail = r,
    l.tailMode = o)
}
function qy(e, t, r) {
    var n = t.pendingProps
      , o = n.revealOrder
      , l = n.tail;
    if (Fe(e, t, n.children, r),
    n = ue.current,
    n & 2)
        n = n & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Hp(e, r, t);
                else if (e.tag === 19)
                    Hp(e, r, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        n &= 1
    }
    if (le(ue, n),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (r = t.child,
            o = null; r !== null; )
                e = r.alternate,
                e !== null && Gi(e) === null && (o = r),
                r = r.sibling;
            r = o,
            r === null ? (o = t.child,
            t.child = null) : (o = r.sibling,
            r.sibling = null),
            bc(t, !1, o, r, l);
            break;
        case "backwards":
            for (r = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Gi(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = r,
                r = o,
                o = e
            }
            bc(t, !0, r, null, l);
            break;
        case "together":
            bc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Pi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function er(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies),
    sn |= t.lanes,
    !(r & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
        r = Cr(e, e.pendingProps),
        t.child = r,
        r.return = t; e.sibling !== null; )
            e = e.sibling,
            r = r.sibling = Cr(e, e.pendingProps),
            r.return = t;
        r.sibling = null
    }
    return t.child
}
function ub(e, t, r) {
    switch (t.tag) {
    case 3:
        Zy(t),
        Xn();
        break;
    case 5:
        $y(t);
        break;
    case 1:
        Ke(t.type) && Vi(t);
        break;
    case 4:
        Df(t, t.stateNode.containerInfo);
        break;
    case 10:
        var n = t.type._context
          , o = t.memoizedProps.value;
        le(Wi, n._currentValue),
        n._currentValue = o;
        break;
    case 13:
        if (n = t.memoizedState,
        n !== null)
            return n.dehydrated !== null ? (le(ue, ue.current & 1),
            t.flags |= 128,
            null) : r & t.child.childLanes ? Jy(e, t, r) : (le(ue, ue.current & 1),
            e = er(e, t, r),
            e !== null ? e.sibling : null);
        le(ue, ue.current & 1);
        break;
    case 19:
        if (n = (r & t.childLanes) !== 0,
        e.flags & 128) {
            if (n)
                return qy(e, t, r);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        le(ue, ue.current),
        n)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Xy(e, t, r)
    }
    return er(e, t, r)
}
var e0, Ru, t0, r0;
e0 = function(e, t) {
    for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6)
            e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r,
            r = r.child;
            continue
        }
        if (r === t)
            break;
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === t)
                return;
            r = r.return
        }
        r.sibling.return = r.return,
        r = r.sibling
    }
}
;
Ru = function() {}
;
t0 = function(e, t, r, n) {
    var o = e.memoizedProps;
    if (o !== n) {
        e = t.stateNode,
        Jr(jt.current);
        var l = null;
        switch (r) {
        case "input":
            o = Jc(e, o),
            n = Jc(e, n),
            l = [];
            break;
        case "select":
            o = de({}, o, {
                value: void 0
            }),
            n = de({}, n, {
                value: void 0
            }),
            l = [];
            break;
        case "textarea":
            o = tu(e, o),
            n = tu(e, n),
            l = [];
            break;
        default:
            typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Mi)
        }
        nu(r, n);
        var i;
        r = null;
        for (c in o)
            if (!n.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
                if (c === "style") {
                    var a = o[c];
                    for (i in a)
                        a.hasOwnProperty(i) && (r || (r = {}),
                        r[i] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Xo.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
        for (c in n) {
            var s = n[c];
            if (a = o != null ? o[c] : void 0,
            n.hasOwnProperty(c) && s !== a && (s != null || a != null))
                if (c === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (r || (r = {}),
                            r[i] = "");
                        for (i in s)
                            s.hasOwnProperty(i) && a[i] !== s[i] && (r || (r = {}),
                            r[i] = s[i])
                    } else
                        r || (l || (l = []),
                        l.push(c, r)),
                        r = s;
                else
                    c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    a = a ? a.__html : void 0,
                    s != null && a !== s && (l = l || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Xo.hasOwnProperty(c) ? (s != null && c === "onScroll" && ie("scroll", e),
                    l || a === s || (l = [])) : (l = l || []).push(c, s))
        }
        r && (l = l || []).push("style", r);
        var c = l;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
r0 = function(e, t, r, n) {
    r !== n && (t.flags |= 4)
}
;
function Po(e, t) {
    if (!se)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null; )
                t.alternate !== null && (r = t),
                t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var n = null; r !== null; )
                r.alternate !== null && (n = r),
                r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
}
function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , r = 0
      , n = 0;
    if (t)
        for (var o = e.child; o !== null; )
            r |= o.lanes | o.childLanes,
            n |= o.subtreeFlags & 14680064,
            n |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            r |= o.lanes | o.childLanes,
            n |= o.subtreeFlags,
            n |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= n,
    e.childLanes = r,
    t
}
function fb(e, t, r) {
    var n = t.pendingProps;
    switch (Cf(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return De(t),
        null;
    case 1:
        return Ke(t.type) && Fi(),
        De(t),
        null;
    case 3:
        return n = t.stateNode,
        Zn(),
        ae(Xe),
        ae(Ae),
        Lf(),
        n.pendingContext && (n.context = n.pendingContext,
        n.pendingContext = null),
        (e === null || e.child === null) && (Ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        xt !== null && (Au(xt),
        xt = null))),
        Ru(e, t),
        De(t),
        null;
    case 5:
        jf(t);
        var o = Jr(al.current);
        if (r = t.type,
        e !== null && t.stateNode != null)
            t0(e, t, r, n, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!n) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return De(t),
                null
            }
            if (e = Jr(jt.current),
            Ql(t)) {
                n = t.stateNode,
                r = t.type;
                var l = t.memoizedProps;
                switch (n[Tt] = t,
                n[ll] = l,
                e = (t.mode & 1) !== 0,
                r) {
                case "dialog":
                    ie("cancel", n),
                    ie("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ie("load", n);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Io.length; o++)
                        ie(Io[o], n);
                    break;
                case "source":
                    ie("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    ie("error", n),
                    ie("load", n);
                    break;
                case "details":
                    ie("toggle", n);
                    break;
                case "input":
                    Jd(n, l),
                    ie("invalid", n);
                    break;
                case "select":
                    n._wrapperState = {
                        wasMultiple: !!l.multiple
                    },
                    ie("invalid", n);
                    break;
                case "textarea":
                    ep(n, l),
                    ie("invalid", n)
                }
                nu(r, l),
                o = null;
                for (var i in l)
                    if (l.hasOwnProperty(i)) {
                        var a = l[i];
                        i === "children" ? typeof a == "string" ? n.textContent !== a && (l.suppressHydrationWarning !== !0 && Gl(n.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (l.suppressHydrationWarning !== !0 && Gl(n.textContent, a, e),
                        o = ["children", "" + a]) : Xo.hasOwnProperty(i) && a != null && i === "onScroll" && ie("scroll", n)
                    }
                switch (r) {
                case "input":
                    Ml(n),
                    qd(n, l, !0);
                    break;
                case "textarea":
                    Ml(n),
                    tp(n);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof l.onClick == "function" && (n.onclick = Mi)
                }
                n = o,
                t.updateQueue = n,
                n !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = kh(r)),
                e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = i.createElement(r, {
                    is: n.is
                }) : (e = i.createElement(r),
                r === "select" && (i = e,
                n.multiple ? i.multiple = !0 : n.size && (i.size = n.size))) : e = i.createElementNS(e, r),
                e[Tt] = t,
                e[ll] = n,
                e0(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = ou(r, n),
                    r) {
                    case "dialog":
                        ie("cancel", e),
                        ie("close", e),
                        o = n;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ie("load", e),
                        o = n;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Io.length; o++)
                            ie(Io[o], e);
                        o = n;
                        break;
                    case "source":
                        ie("error", e),
                        o = n;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ie("error", e),
                        ie("load", e),
                        o = n;
                        break;
                    case "details":
                        ie("toggle", e),
                        o = n;
                        break;
                    case "input":
                        Jd(e, n),
                        o = Jc(e, n),
                        ie("invalid", e);
                        break;
                    case "option":
                        o = n;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!n.multiple
                        },
                        o = de({}, n, {
                            value: void 0
                        }),
                        ie("invalid", e);
                        break;
                    case "textarea":
                        ep(e, n),
                        o = tu(e, n),
                        ie("invalid", e);
                        break;
                    default:
                        o = n
                    }
                    nu(r, o),
                    a = o;
                    for (l in a)
                        if (a.hasOwnProperty(l)) {
                            var s = a[l];
                            l === "style" ? zh(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && Rh(e, s)) : l === "children" ? typeof s == "string" ? (r !== "textarea" || s !== "") && Ko(e, s) : typeof s == "number" && Ko(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Xo.hasOwnProperty(l) ? s != null && l === "onScroll" && ie("scroll", e) : s != null && pf(e, l, s, i))
                        }
                    switch (r) {
                    case "input":
                        Ml(e),
                        qd(e, n, !1);
                        break;
                    case "textarea":
                        Ml(e),
                        tp(e);
                        break;
                    case "option":
                        n.value != null && e.setAttribute("value", "" + Nr(n.value));
                        break;
                    case "select":
                        e.multiple = !!n.multiple,
                        l = n.value,
                        l != null ? An(e, !!n.multiple, l, !1) : n.defaultValue != null && An(e, !!n.multiple, n.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Mi)
                    }
                    switch (r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n = !!n.autoFocus;
                        break e;
                    case "img":
                        n = !0;
                        break e;
                    default:
                        n = !1
                    }
                }
                n && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return De(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            r0(e, t, e.memoizedProps, n);
        else {
            if (typeof n != "string" && t.stateNode === null)
                throw Error(N(166));
            if (r = Jr(al.current),
            Jr(jt.current),
            Ql(t)) {
                if (n = t.stateNode,
                r = t.memoizedProps,
                n[Tt] = t,
                (l = n.nodeValue !== r) && (e = rt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Gl(n.nodeValue, r, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Gl(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                l && (t.flags |= 4)
            } else
                n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n),
                n[Tt] = t,
                t.stateNode = n
        }
        return De(t),
        null;
    case 13:
        if (ae(ue),
        n = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (se && tt !== null && t.mode & 1 && !(t.flags & 128))
                wy(),
                Xn(),
                t.flags |= 98560,
                l = !1;
            else if (l = Ql(t),
            n !== null && n.dehydrated !== null) {
                if (e === null) {
                    if (!l)
                        throw Error(N(318));
                    if (l = t.memoizedState,
                    l = l !== null ? l.dehydrated : null,
                    !l)
                        throw Error(N(317));
                    l[Tt] = t
                } else
                    Xn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                De(t),
                l = !1
            } else
                xt !== null && (Au(xt),
                xt = null),
                l = !0;
            if (!l)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = r,
        t) : (n = n !== null,
        n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ue.current & 1 ? _e === 0 && (_e = 3) : Xf())),
        t.updateQueue !== null && (t.flags |= 4),
        De(t),
        null);
    case 4:
        return Zn(),
        Ru(e, t),
        e === null && nl(t.stateNode.containerInfo),
        De(t),
        null;
    case 10:
        return zf(t.type._context),
        De(t),
        null;
    case 17:
        return Ke(t.type) && Fi(),
        De(t),
        null;
    case 19:
        if (ae(ue),
        l = t.memoizedState,
        l === null)
            return De(t),
            null;
        if (n = (t.flags & 128) !== 0,
        i = l.rendering,
        i === null)
            if (n)
                Po(l, !1);
            else {
                if (_e !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = Gi(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Po(l, !1),
                            n = i.updateQueue,
                            n !== null && (t.updateQueue = n,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            n = r,
                            r = t.child; r !== null; )
                                l = r,
                                e = n,
                                l.flags &= 14680066,
                                i = l.alternate,
                                i === null ? (l.childLanes = 0,
                                l.lanes = e,
                                l.child = null,
                                l.subtreeFlags = 0,
                                l.memoizedProps = null,
                                l.memoizedState = null,
                                l.updateQueue = null,
                                l.dependencies = null,
                                l.stateNode = null) : (l.childLanes = i.childLanes,
                                l.lanes = i.lanes,
                                l.child = i.child,
                                l.subtreeFlags = 0,
                                l.deletions = null,
                                l.memoizedProps = i.memoizedProps,
                                l.memoizedState = i.memoizedState,
                                l.updateQueue = i.updateQueue,
                                l.type = i.type,
                                e = i.dependencies,
                                l.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                r = r.sibling;
                            return le(ue, ue.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                l.tail !== null && ge() > qn && (t.flags |= 128,
                n = !0,
                Po(l, !1),
                t.lanes = 4194304)
            }
        else {
            if (!n)
                if (e = Gi(i),
                e !== null) {
                    if (t.flags |= 128,
                    n = !0,
                    r = e.updateQueue,
                    r !== null && (t.updateQueue = r,
                    t.flags |= 4),
                    Po(l, !0),
                    l.tail === null && l.tailMode === "hidden" && !i.alternate && !se)
                        return De(t),
                        null
                } else
                    2 * ge() - l.renderingStartTime > qn && r !== 1073741824 && (t.flags |= 128,
                    n = !0,
                    Po(l, !1),
                    t.lanes = 4194304);
            l.isBackwards ? (i.sibling = t.child,
            t.child = i) : (r = l.last,
            r !== null ? r.sibling = i : t.child = i,
            l.last = i)
        }
        return l.tail !== null ? (t = l.tail,
        l.rendering = t,
        l.tail = t.sibling,
        l.renderingStartTime = ge(),
        t.sibling = null,
        r = ue.current,
        le(ue, n ? r & 1 | 2 : r & 1),
        t) : (De(t),
        null);
    case 22:
    case 23:
        return Qf(),
        n = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== n && (t.flags |= 8192),
        n && t.mode & 1 ? et & 1073741824 && (De(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(N(156, t.tag))
}
function db(e, t) {
    switch (Cf(t),
    t.tag) {
    case 1:
        return Ke(t.type) && Fi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Zn(),
        ae(Xe),
        ae(Ae),
        Lf(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return jf(t),
        null;
    case 13:
        if (ae(ue),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            Xn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ae(ue),
        null;
    case 4:
        return Zn(),
        null;
    case 10:
        return zf(t.type._context),
        null;
    case 22:
    case 23:
        return Qf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Zl = !1
  , Le = !1
  , pb = typeof WeakSet == "function" ? WeakSet : Set
  , I = null;
function jn(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function")
            try {
                r(null)
            } catch (n) {
                pe(e, t, n)
            }
        else
            r.current = null
}
function Nu(e, t, r) {
    try {
        r()
    } catch (n) {
        pe(e, t, n)
    }
}
var Wp = !1;
function mb(e, t) {
    if (mu = ji,
    e = iy(),
    $f(e)) {
        if ("selectionStart"in e)
            var r = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                r = (r = e.ownerDocument) && r.defaultView || window;
                var n = r.getSelection && r.getSelection();
                if (n && n.rangeCount !== 0) {
                    r = n.anchorNode;
                    var o = n.anchorOffset
                      , l = n.focusNode;
                    n = n.focusOffset;
                    try {
                        r.nodeType,
                        l.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var i = 0
                      , a = -1
                      , s = -1
                      , c = 0
                      , f = 0
                      , u = e
                      , d = null;
                    t: for (; ; ) {
                        for (var m; u !== r || o !== 0 && u.nodeType !== 3 || (a = i + o),
                        u !== l || n !== 0 && u.nodeType !== 3 || (s = i + n),
                        u.nodeType === 3 && (i += u.nodeValue.length),
                        (m = u.firstChild) !== null; )
                            d = u,
                            u = m;
                        for (; ; ) {
                            if (u === e)
                                break t;
                            if (d === r && ++c === o && (a = i),
                            d === l && ++f === n && (s = i),
                            (m = u.nextSibling) !== null)
                                break;
                            u = d,
                            d = u.parentNode
                        }
                        u = m
                    }
                    r = a === -1 || s === -1 ? null : {
                        start: a,
                        end: s
                    }
                } else
                    r = null
            }
        r = r || {
            start: 0,
            end: 0
        }
    } else
        r = null;
    for (gu = {
        focusedElem: e,
        selectionRange: r
    },
    ji = !1,
    I = t; I !== null; )
        if (t = I,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            I = e;
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var y = g.memoizedProps
                                  , x = g.memoizedState
                                  , h = t.stateNode
                                  , v = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : _t(t.type, y), x);
                                h.__reactInternalSnapshotBeforeUpdate = v
                            }
                            break;
                        case 3:
                            var w = t.stateNode.containerInfo;
                            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                        }
                } catch (S) {
                    pe(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    I = e;
                    break
                }
                I = t.return
            }
    return g = Wp,
    Wp = !1,
    g
}
function Bo(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null,
    n !== null) {
        var o = n = n.next;
        do {
            if ((o.tag & e) === e) {
                var l = o.destroy;
                o.destroy = void 0,
                l !== void 0 && Nu(t, r, l)
            }
            o = o.next
        } while (o !== n)
    }
}
function ms(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}
function zu(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
        case 5:
            e = r;
            break;
        default:
            e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function n0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    n0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Tt],
    delete t[ll],
    delete t[yu],
    delete t[KP],
    delete t[ZP])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function o0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Up(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || o0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Iu(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode,
        t.insertBefore(e, r)) : (t = r,
        t.appendChild(e)),
        r = r._reactRootContainer,
        r != null || t.onclick !== null || (t.onclick = Mi));
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (Iu(e, t, r),
        e = e.sibling; e !== null; )
            Iu(e, t, r),
            e = e.sibling
}
function Tu(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (Tu(e, t, r),
        e = e.sibling; e !== null; )
            Tu(e, t, r),
            e = e.sibling
}
var ke = null
  , St = !1;
function cr(e, t, r) {
    for (r = r.child; r !== null; )
        l0(e, t, r),
        r = r.sibling
}
function l0(e, t, r) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
        try {
            Dt.onCommitFiberUnmount(is, r)
        } catch {}
    switch (r.tag) {
    case 5:
        Le || jn(r, t);
    case 6:
        var n = ke
          , o = St;
        ke = null,
        cr(e, t, r),
        ke = n,
        St = o,
        ke !== null && (St ? (e = ke,
        r = r.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : ke.removeChild(r.stateNode));
        break;
    case 18:
        ke !== null && (St ? (e = ke,
        r = r.stateNode,
        e.nodeType === 8 ? hc(e.parentNode, r) : e.nodeType === 1 && hc(e, r),
        el(e)) : hc(ke, r.stateNode));
        break;
    case 4:
        n = ke,
        o = St,
        ke = r.stateNode.containerInfo,
        St = !0,
        cr(e, t, r),
        ke = n,
        St = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Le && (n = r.updateQueue,
        n !== null && (n = n.lastEffect,
        n !== null))) {
            o = n = n.next;
            do {
                var l = o
                  , i = l.destroy;
                l = l.tag,
                i !== void 0 && (l & 2 || l & 4) && Nu(r, t, i),
                o = o.next
            } while (o !== n)
        }
        cr(e, t, r);
        break;
    case 1:
        if (!Le && (jn(r, t),
        n = r.stateNode,
        typeof n.componentWillUnmount == "function"))
            try {
                n.props = r.memoizedProps,
                n.state = r.memoizedState,
                n.componentWillUnmount()
            } catch (a) {
                pe(r, t, a)
            }
        cr(e, t, r);
        break;
    case 21:
        cr(e, t, r);
        break;
    case 22:
        r.mode & 1 ? (Le = (n = Le) || r.memoizedState !== null,
        cr(e, t, r),
        Le = n) : cr(e, t, r);
        break;
    default:
        cr(e, t, r)
    }
}
function Yp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new pb),
        t.forEach(function(n) {
            var o = Pb.bind(null, e, n);
            r.has(n) || (r.add(n),
            n.then(o, o))
        })
    }
}
function wt(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var o = r[n];
            try {
                var l = e
                  , i = t
                  , a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        ke = a.stateNode,
                        St = !1;
                        break e;
                    case 3:
                        ke = a.stateNode.containerInfo,
                        St = !0;
                        break e;
                    case 4:
                        ke = a.stateNode.containerInfo,
                        St = !0;
                        break e
                    }
                    a = a.return
                }
                if (ke === null)
                    throw Error(N(160));
                l0(l, i, o),
                ke = null,
                St = !1;
                var s = o.alternate;
                s !== null && (s.return = null),
                o.return = null
            } catch (c) {
                pe(o, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            i0(t, e),
            t = t.sibling
}
function i0(e, t) {
    var r = e.alternate
      , n = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (wt(t, e),
        Rt(e),
        n & 4) {
            try {
                Bo(3, e, e.return),
                ms(3, e)
            } catch (y) {
                pe(e, e.return, y)
            }
            try {
                Bo(5, e, e.return)
            } catch (y) {
                pe(e, e.return, y)
            }
        }
        break;
    case 1:
        wt(t, e),
        Rt(e),
        n & 512 && r !== null && jn(r, r.return);
        break;
    case 5:
        if (wt(t, e),
        Rt(e),
        n & 512 && r !== null && jn(r, r.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Ko(o, "")
            } catch (y) {
                pe(e, e.return, y)
            }
        }
        if (n & 4 && (o = e.stateNode,
        o != null)) {
            var l = e.memoizedProps
              , i = r !== null ? r.memoizedProps : l
              , a = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    a === "input" && l.type === "radio" && l.name != null && Eh(o, l),
                    ou(a, i);
                    var c = ou(a, l);
                    for (i = 0; i < s.length; i += 2) {
                        var f = s[i]
                          , u = s[i + 1];
                        f === "style" ? zh(o, u) : f === "dangerouslySetInnerHTML" ? Rh(o, u) : f === "children" ? Ko(o, u) : pf(o, f, u, c)
                    }
                    switch (a) {
                    case "input":
                        qc(o, l);
                        break;
                    case "textarea":
                        Ch(o, l);
                        break;
                    case "select":
                        var d = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!l.multiple;
                        var m = l.value;
                        m != null ? An(o, !!l.multiple, m, !1) : d !== !!l.multiple && (l.defaultValue != null ? An(o, !!l.multiple, l.defaultValue, !0) : An(o, !!l.multiple, l.multiple ? [] : "", !1))
                    }
                    o[ll] = l
                } catch (y) {
                    pe(e, e.return, y)
                }
        }
        break;
    case 6:
        if (wt(t, e),
        Rt(e),
        n & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            o = e.stateNode,
            l = e.memoizedProps;
            try {
                o.nodeValue = l
            } catch (y) {
                pe(e, e.return, y)
            }
        }
        break;
    case 3:
        if (wt(t, e),
        Rt(e),
        n & 4 && r !== null && r.memoizedState.isDehydrated)
            try {
                el(t.containerInfo)
            } catch (y) {
                pe(e, e.return, y)
            }
        break;
    case 4:
        wt(t, e),
        Rt(e);
        break;
    case 13:
        wt(t, e),
        Rt(e),
        o = e.child,
        o.flags & 8192 && (l = o.memoizedState !== null,
        o.stateNode.isHidden = l,
        !l || o.alternate !== null && o.alternate.memoizedState !== null || (Yf = ge())),
        n & 4 && Yp(e);
        break;
    case 22:
        if (f = r !== null && r.memoizedState !== null,
        e.mode & 1 ? (Le = (c = Le) || f,
        wt(t, e),
        Le = c) : wt(t, e),
        Rt(e),
        n & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !f && e.mode & 1)
                for (I = e,
                f = e.child; f !== null; ) {
                    for (u = I = f; I !== null; ) {
                        switch (d = I,
                        m = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Bo(4, d, d.return);
                            break;
                        case 1:
                            jn(d, d.return);
                            var g = d.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                n = d,
                                r = d.return;
                                try {
                                    t = n,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (y) {
                                    pe(n, r, y)
                                }
                            }
                            break;
                        case 5:
                            jn(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                Qp(u);
                                continue
                            }
                        }
                        m !== null ? (m.return = d,
                        I = m) : Qp(u)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            u = e; ; ) {
                if (u.tag === 5) {
                    if (f === null) {
                        f = u;
                        try {
                            o = u.stateNode,
                            c ? (l = o.style,
                            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (a = u.stateNode,
                            s = u.memoizedProps.style,
                            i = s != null && s.hasOwnProperty("display") ? s.display : null,
                            a.style.display = Nh("display", i))
                        } catch (y) {
                            pe(e, e.return, y)
                        }
                    }
                } else if (u.tag === 6) {
                    if (f === null)
                        try {
                            u.stateNode.nodeValue = c ? "" : u.memoizedProps
                        } catch (y) {
                            pe(e, e.return, y)
                        }
                } else if ((u.tag !== 22 && u.tag !== 23 || u.memoizedState === null || u === e) && u.child !== null) {
                    u.child.return = u,
                    u = u.child;
                    continue
                }
                if (u === e)
                    break e;
                for (; u.sibling === null; ) {
                    if (u.return === null || u.return === e)
                        break e;
                    f === u && (f = null),
                    u = u.return
                }
                f === u && (f = null),
                u.sibling.return = u.return,
                u = u.sibling
            }
        }
        break;
    case 19:
        wt(t, e),
        Rt(e),
        n & 4 && Yp(e);
        break;
    case 21:
        break;
    default:
        wt(t, e),
        Rt(e)
    }
}
function Rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null; ) {
                    if (o0(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(N(160))
            }
            switch (n.tag) {
            case 5:
                var o = n.stateNode;
                n.flags & 32 && (Ko(o, ""),
                n.flags &= -33);
                var l = Up(e);
                Tu(e, l, o);
                break;
            case 3:
            case 4:
                var i = n.stateNode.containerInfo
                  , a = Up(e);
                Iu(e, a, i);
                break;
            default:
                throw Error(N(161))
            }
        } catch (s) {
            pe(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function gb(e, t, r) {
    I = e,
    a0(e)
}
function a0(e, t, r) {
    for (var n = (e.mode & 1) !== 0; I !== null; ) {
        var o = I
          , l = o.child;
        if (o.tag === 22 && n) {
            var i = o.memoizedState !== null || Zl;
            if (!i) {
                var a = o.alternate
                  , s = a !== null && a.memoizedState !== null || Le;
                a = Zl;
                var c = Le;
                if (Zl = i,
                (Le = s) && !c)
                    for (I = o; I !== null; )
                        i = I,
                        s = i.child,
                        i.tag === 22 && i.memoizedState !== null ? Xp(o) : s !== null ? (s.return = i,
                        I = s) : Xp(o);
                for (; l !== null; )
                    I = l,
                    a0(l),
                    l = l.sibling;
                I = o,
                Zl = a,
                Le = c
            }
            Gp(e)
        } else
            o.subtreeFlags & 8772 && l !== null ? (l.return = o,
            I = l) : Gp(e)
    }
}
function Gp(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Le || ms(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !Le)
                            if (r === null)
                                n.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? r.memoizedProps : _t(t.type, r.memoizedProps);
                                n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var l = t.updateQueue;
                        l !== null && Rp(t, l, n);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (r = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                                }
                            Rp(t, i, r)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && r.focus();
                                break;
                            case "img":
                                s.src && (r.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var f = c.memoizedState;
                                if (f !== null) {
                                    var u = f.dehydrated;
                                    u !== null && el(u)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                    }
                Le || t.flags & 512 && zu(t)
            } catch (d) {
                pe(t, t.return, d)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (r = t.sibling,
        r !== null) {
            r.return = t.return,
            I = r;
            break
        }
        I = t.return
    }
}
function Qp(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return,
            I = r;
            break
        }
        I = t.return
    }
}
function Xp(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var r = t.return;
                try {
                    ms(4, t)
                } catch (s) {
                    pe(t, r, s)
                }
                break;
            case 1:
                var n = t.stateNode;
                if (typeof n.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        n.componentDidMount()
                    } catch (s) {
                        pe(t, o, s)
                    }
                }
                var l = t.return;
                try {
                    zu(t)
                } catch (s) {
                    pe(t, l, s)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    zu(t)
                } catch (s) {
                    pe(t, i, s)
                }
            }
        } catch (s) {
            pe(t, t.return, s)
        }
        if (t === e) {
            I = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            I = a;
            break
        }
        I = t.return
    }
}
var vb = Math.ceil
  , Ki = rr.ReactCurrentDispatcher
  , Wf = rr.ReactCurrentOwner
  , dt = rr.ReactCurrentBatchConfig
  , Y = 0
  , be = null
  , he = null
  , Ne = 0
  , et = 0
  , Ln = jr(0)
  , _e = 0
  , fl = null
  , sn = 0
  , gs = 0
  , Uf = 0
  , Ho = null
  , Ge = null
  , Yf = 0
  , qn = 1 / 0
  , Ht = null
  , Zi = !1
  , Du = null
  , $r = null
  , Jl = !1
  , wr = null
  , Ji = 0
  , Wo = 0
  , ju = null
  , bi = -1
  , Oi = 0;
function Ve() {
    return Y & 6 ? ge() : bi !== -1 ? bi : bi = ge()
}
function Er(e) {
    return e.mode & 1 ? Y & 2 && Ne !== 0 ? Ne & -Ne : qP.transition !== null ? (Oi === 0 && (Oi = Wh()),
    Oi) : (e = te,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Zh(e.type)),
    e) : 1
}
function bt(e, t, r, n) {
    if (50 < Wo)
        throw Wo = 0,
        ju = null,
        Error(N(185));
    _l(e, r, n),
    (!(Y & 2) || e !== be) && (e === be && (!(Y & 2) && (gs |= r),
    _e === 4 && vr(e, Ne)),
    Ze(e, n),
    r === 1 && Y === 0 && !(t.mode & 1) && (qn = ge() + 500,
    fs && Lr()))
}
function Ze(e, t) {
    var r = e.callbackNode;
    qx(e, t);
    var n = Di(e, e === be ? Ne : 0);
    if (n === 0)
        r !== null && op(r),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = n & -n,
    e.callbackPriority !== t) {
        if (r != null && op(r),
        t === 1)
            e.tag === 0 ? JP(Kp.bind(null, e)) : vy(Kp.bind(null, e)),
            QP(function() {
                !(Y & 6) && Lr()
            }),
            r = null;
        else {
            switch (Uh(n)) {
            case 1:
                r = yf;
                break;
            case 4:
                r = Bh;
                break;
            case 16:
                r = Ti;
                break;
            case 536870912:
                r = Hh;
                break;
            default:
                r = Ti
            }
            r = g0(r, s0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = r
    }
}
function s0(e, t) {
    if (bi = -1,
    Oi = 0,
    Y & 6)
        throw Error(N(327));
    var r = e.callbackNode;
    if (Hn() && e.callbackNode !== r)
        return null;
    var n = Di(e, e === be ? Ne : 0);
    if (n === 0)
        return null;
    if (n & 30 || n & e.expiredLanes || t)
        t = qi(e, n);
    else {
        t = n;
        var o = Y;
        Y |= 2;
        var l = u0();
        (be !== e || Ne !== t) && (Ht = null,
        qn = ge() + 500,
        en(e, t));
        do
            try {
                wb();
                break
            } catch (a) {
                c0(e, a)
            }
        while (1);
        Nf(),
        Ki.current = l,
        Y = o,
        he !== null ? t = 0 : (be = null,
        Ne = 0,
        t = _e)
    }
    if (t !== 0) {
        if (t === 2 && (o = cu(e),
        o !== 0 && (n = o,
        t = Lu(e, o))),
        t === 1)
            throw r = fl,
            en(e, 0),
            vr(e, n),
            Ze(e, ge()),
            r;
        if (t === 6)
            vr(e, n);
        else {
            if (o = e.current.alternate,
            !(n & 30) && !hb(o) && (t = qi(e, n),
            t === 2 && (l = cu(e),
            l !== 0 && (n = l,
            t = Lu(e, l))),
            t === 1))
                throw r = fl,
                en(e, 0),
                vr(e, n),
                Ze(e, ge()),
                r;
            switch (e.finishedWork = o,
            e.finishedLanes = n,
            t) {
            case 0:
            case 1:
                throw Error(N(345));
            case 2:
                Gr(e, Ge, Ht);
                break;
            case 3:
                if (vr(e, n),
                (n & 130023424) === n && (t = Yf + 500 - ge(),
                10 < t)) {
                    if (Di(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & n) !== n) {
                        Ve(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = hu(Gr.bind(null, e, Ge, Ht), t);
                    break
                }
                Gr(e, Ge, Ht);
                break;
            case 4:
                if (vr(e, n),
                (n & 4194240) === n)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < n; ) {
                    var i = 31 - Pt(n);
                    l = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    n &= ~l
                }
                if (n = o,
                n = ge() - n,
                n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * vb(n / 1960)) - n,
                10 < n) {
                    e.timeoutHandle = hu(Gr.bind(null, e, Ge, Ht), n);
                    break
                }
                Gr(e, Ge, Ht);
                break;
            case 5:
                Gr(e, Ge, Ht);
                break;
            default:
                throw Error(N(329))
            }
        }
    }
    return Ze(e, ge()),
    e.callbackNode === r ? s0.bind(null, e) : null
}
function Lu(e, t) {
    var r = Ho;
    return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256),
    e = qi(e, t),
    e !== 2 && (t = Ge,
    Ge = r,
    t !== null && Au(t)),
    e
}
function Au(e) {
    Ge === null ? Ge = e : Ge.push.apply(Ge, e)
}
function hb(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores,
            r !== null))
                for (var n = 0; n < r.length; n++) {
                    var o = r[n]
                      , l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!$t(l(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child,
        t.subtreeFlags & 16384 && r !== null)
            r.return = t,
            t = r;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function vr(e, t) {
    for (t &= ~Uf,
    t &= ~gs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var r = 31 - Pt(t)
          , n = 1 << r;
        e[r] = -1,
        t &= ~n
    }
}
function Kp(e) {
    if (Y & 6)
        throw Error(N(327));
    Hn();
    var t = Di(e, 0);
    if (!(t & 1))
        return Ze(e, ge()),
        null;
    var r = qi(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = cu(e);
        n !== 0 && (t = n,
        r = Lu(e, n))
    }
    if (r === 1)
        throw r = fl,
        en(e, 0),
        vr(e, t),
        Ze(e, ge()),
        r;
    if (r === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Gr(e, Ge, Ht),
    Ze(e, ge()),
    null
}
function Gf(e, t) {
    var r = Y;
    Y |= 1;
    try {
        return e(t)
    } finally {
        Y = r,
        Y === 0 && (qn = ge() + 500,
        fs && Lr())
    }
}
function cn(e) {
    wr !== null && wr.tag === 0 && !(Y & 6) && Hn();
    var t = Y;
    Y |= 1;
    var r = dt.transition
      , n = te;
    try {
        if (dt.transition = null,
        te = 1,
        e)
            return e()
    } finally {
        te = n,
        dt.transition = r,
        Y = t,
        !(Y & 6) && Lr()
    }
}
function Qf() {
    et = Ln.current,
    ae(Ln)
}
function en(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1,
    GP(r)),
    he !== null)
        for (r = he.return; r !== null; ) {
            var n = r;
            switch (Cf(n),
            n.tag) {
            case 1:
                n = n.type.childContextTypes,
                n != null && Fi();
                break;
            case 3:
                Zn(),
                ae(Xe),
                ae(Ae),
                Lf();
                break;
            case 5:
                jf(n);
                break;
            case 4:
                Zn();
                break;
            case 13:
                ae(ue);
                break;
            case 19:
                ae(ue);
                break;
            case 10:
                zf(n.type._context);
                break;
            case 22:
            case 23:
                Qf()
            }
            r = r.return
        }
    if (be = e,
    he = e = Cr(e.current, null),
    Ne = et = t,
    _e = 0,
    fl = null,
    Uf = gs = sn = 0,
    Ge = Ho = null,
    Zr !== null) {
        for (t = 0; t < Zr.length; t++)
            if (r = Zr[t],
            n = r.interleaved,
            n !== null) {
                r.interleaved = null;
                var o = n.next
                  , l = r.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o,
                    n.next = i
                }
                r.pending = n
            }
        Zr = null
    }
    return e
}
function c0(e, t) {
    do {
        var r = he;
        try {
            if (Nf(),
            Si.current = Xi,
            Qi) {
                for (var n = fe.memoizedState; n !== null; ) {
                    var o = n.queue;
                    o !== null && (o.pending = null),
                    n = n.next
                }
                Qi = !1
            }
            if (an = 0,
            Pe = we = fe = null,
            Vo = !1,
            sl = 0,
            Wf.current = null,
            r === null || r.return === null) {
                _e = 1,
                fl = t,
                he = null;
                break
            }
            e: {
                var l = e
                  , i = r.return
                  , a = r
                  , s = t;
                if (t = Ne,
                a.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var c = s
                      , f = a
                      , u = f.tag;
                    if (!(f.mode & 1) && (u === 0 || u === 11 || u === 15)) {
                        var d = f.alternate;
                        d ? (f.updateQueue = d.updateQueue,
                        f.memoizedState = d.memoizedState,
                        f.lanes = d.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var m = Lp(i);
                    if (m !== null) {
                        m.flags &= -257,
                        Ap(m, i, a, l, t),
                        m.mode & 1 && jp(l, c, t),
                        t = m,
                        s = c;
                        var g = t.updateQueue;
                        if (g === null) {
                            var y = new Set;
                            y.add(s),
                            t.updateQueue = y
                        } else
                            g.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            jp(l, c, t),
                            Xf();
                            break e
                        }
                        s = Error(N(426))
                    }
                } else if (se && a.mode & 1) {
                    var x = Lp(i);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        Ap(x, i, a, l, t),
                        kf(Jn(s, a));
                        break e
                    }
                }
                l = s = Jn(s, a),
                _e !== 4 && (_e = 2),
                Ho === null ? Ho = [l] : Ho.push(l),
                l = i;
                do {
                    switch (l.tag) {
                    case 3:
                        l.flags |= 65536,
                        t &= -t,
                        l.lanes |= t;
                        var h = Yy(l, s, t);
                        kp(l, h);
                        break e;
                    case 1:
                        a = s;
                        var v = l.type
                          , w = l.stateNode;
                        if (!(l.flags & 128) && (typeof v.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && ($r === null || !$r.has(w)))) {
                            l.flags |= 65536,
                            t &= -t,
                            l.lanes |= t;
                            var S = Gy(l, a, t);
                            kp(l, S);
                            break e
                        }
                    }
                    l = l.return
                } while (l !== null)
            }
            d0(r)
        } catch (P) {
            t = P,
            he === r && r !== null && (he = r = r.return);
            continue
        }
        break
    } while (1)
}
function u0() {
    var e = Ki.current;
    return Ki.current = Xi,
    e === null ? Xi : e
}
function Xf() {
    (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
    be === null || !(sn & 268435455) && !(gs & 268435455) || vr(be, Ne)
}
function qi(e, t) {
    var r = Y;
    Y |= 2;
    var n = u0();
    (be !== e || Ne !== t) && (Ht = null,
    en(e, t));
    do
        try {
            yb();
            break
        } catch (o) {
            c0(e, o)
        }
    while (1);
    if (Nf(),
    Y = r,
    Ki.current = n,
    he !== null)
        throw Error(N(261));
    return be = null,
    Ne = 0,
    _e
}
function yb() {
    for (; he !== null; )
        f0(he)
}
function wb() {
    for (; he !== null && !Wx(); )
        f0(he)
}
function f0(e) {
    var t = m0(e.alternate, e, et);
    e.memoizedProps = e.pendingProps,
    t === null ? d0(e) : he = t,
    Wf.current = null
}
function d0(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (r = db(r, t),
            r !== null) {
                r.flags &= 32767,
                he = r;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                _e = 6,
                he = null;
                return
            }
        } else if (r = fb(r, t, et),
        r !== null) {
            he = r;
            return
        }
        if (t = t.sibling,
        t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    _e === 0 && (_e = 5)
}
function Gr(e, t, r) {
    var n = te
      , o = dt.transition;
    try {
        dt.transition = null,
        te = 1,
        _b(e, t, r, n)
    } finally {
        dt.transition = o,
        te = n
    }
    return null
}
function _b(e, t, r, n) {
    do
        Hn();
    while (wr !== null);
    if (Y & 6)
        throw Error(N(327));
    r = e.finishedWork;
    var o = e.finishedLanes;
    if (r === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    r === e.current)
        throw Error(N(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var l = r.lanes | r.childLanes;
    if (eP(e, l),
    e === be && (he = be = null,
    Ne = 0),
    !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Jl || (Jl = !0,
    g0(Ti, function() {
        return Hn(),
        null
    })),
    l = (r.flags & 15990) !== 0,
    r.subtreeFlags & 15990 || l) {
        l = dt.transition,
        dt.transition = null;
        var i = te;
        te = 1;
        var a = Y;
        Y |= 4,
        Wf.current = null,
        mb(e, r),
        i0(r, e),
        FP(gu),
        ji = !!mu,
        gu = mu = null,
        e.current = r,
        gb(r),
        Ux(),
        Y = a,
        te = i,
        dt.transition = l
    } else
        e.current = r;
    if (Jl && (Jl = !1,
    wr = e,
    Ji = o),
    l = e.pendingLanes,
    l === 0 && ($r = null),
    Qx(r.stateNode),
    Ze(e, ge()),
    t !== null)
        for (n = e.onRecoverableError,
        r = 0; r < t.length; r++)
            o = t[r],
            n(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Zi)
        throw Zi = !1,
        e = Du,
        Du = null,
        e;
    return Ji & 1 && e.tag !== 0 && Hn(),
    l = e.pendingLanes,
    l & 1 ? e === ju ? Wo++ : (Wo = 0,
    ju = e) : Wo = 0,
    Lr(),
    null
}
function Hn() {
    if (wr !== null) {
        var e = Uh(Ji)
          , t = dt.transition
          , r = te;
        try {
            if (dt.transition = null,
            te = 16 > e ? 16 : e,
            wr === null)
                var n = !1;
            else {
                if (e = wr,
                wr = null,
                Ji = 0,
                Y & 6)
                    throw Error(N(331));
                var o = Y;
                for (Y |= 4,
                I = e.current; I !== null; ) {
                    var l = I
                      , i = l.child;
                    if (I.flags & 16) {
                        var a = l.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var c = a[s];
                                for (I = c; I !== null; ) {
                                    var f = I;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Bo(8, f, l)
                                    }
                                    var u = f.child;
                                    if (u !== null)
                                        u.return = f,
                                        I = u;
                                    else
                                        for (; I !== null; ) {
                                            f = I;
                                            var d = f.sibling
                                              , m = f.return;
                                            if (n0(f),
                                            f === c) {
                                                I = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = m,
                                                I = d;
                                                break
                                            }
                                            I = m
                                        }
                                }
                            }
                            var g = l.alternate;
                            if (g !== null) {
                                var y = g.child;
                                if (y !== null) {
                                    g.child = null;
                                    do {
                                        var x = y.sibling;
                                        y.sibling = null,
                                        y = x
                                    } while (y !== null)
                                }
                            }
                            I = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && i !== null)
                        i.return = l,
                        I = i;
                    else
                        e: for (; I !== null; ) {
                            if (l = I,
                            l.flags & 2048)
                                switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Bo(9, l, l.return)
                                }
                            var h = l.sibling;
                            if (h !== null) {
                                h.return = l.return,
                                I = h;
                                break e
                            }
                            I = l.return
                        }
                }
                var v = e.current;
                for (I = v; I !== null; ) {
                    i = I;
                    var w = i.child;
                    if (i.subtreeFlags & 2064 && w !== null)
                        w.return = i,
                        I = w;
                    else
                        e: for (i = v; I !== null; ) {
                            if (a = I,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ms(9, a)
                                    }
                                } catch (P) {
                                    pe(a, a.return, P)
                                }
                            if (a === i) {
                                I = null;
                                break e
                            }
                            var S = a.sibling;
                            if (S !== null) {
                                S.return = a.return,
                                I = S;
                                break e
                            }
                            I = a.return
                        }
                }
                if (Y = o,
                Lr(),
                Dt && typeof Dt.onPostCommitFiberRoot == "function")
                    try {
                        Dt.onPostCommitFiberRoot(is, e)
                    } catch {}
                n = !0
            }
            return n
        } finally {
            te = r,
            dt.transition = t
        }
    }
    return !1
}
function Zp(e, t, r) {
    t = Jn(r, t),
    t = Yy(e, t, 1),
    e = Or(e, t, 1),
    t = Ve(),
    e !== null && (_l(e, 1, t),
    Ze(e, t))
}
function pe(e, t, r) {
    if (e.tag === 3)
        Zp(e, e, r);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Zp(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && ($r === null || !$r.has(n))) {
                    e = Jn(r, e),
                    e = Gy(t, e, 1),
                    t = Or(t, e, 1),
                    e = Ve(),
                    t !== null && (_l(t, 1, e),
                    Ze(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Sb(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
    t = Ve(),
    e.pingedLanes |= e.suspendedLanes & r,
    be === e && (Ne & r) === r && (_e === 4 || _e === 3 && (Ne & 130023424) === Ne && 500 > ge() - Yf ? en(e, 0) : Uf |= r),
    Ze(e, t)
}
function p0(e, t) {
    t === 0 && (e.mode & 1 ? (t = Bl,
    Bl <<= 1,
    !(Bl & 130023424) && (Bl = 4194304)) : t = 1);
    var r = Ve();
    e = qt(e, t),
    e !== null && (_l(e, t, r),
    Ze(e, r))
}
function xb(e) {
    var t = e.memoizedState
      , r = 0;
    t !== null && (r = t.retryLane),
    p0(e, r)
}
function Pb(e, t) {
    var r = 0;
    switch (e.tag) {
    case 13:
        var n = e.stateNode
          , o = e.memoizedState;
        o !== null && (r = o.retryLane);
        break;
    case 19:
        n = e.stateNode;
        break;
    default:
        throw Error(N(314))
    }
    n !== null && n.delete(t),
    p0(e, r)
}
var m0;
m0 = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Xe.current)
            Qe = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128))
                return Qe = !1,
                ub(e, t, r);
            Qe = !!(e.flags & 131072)
        }
    else
        Qe = !1,
        se && t.flags & 1048576 && hy(t, Hi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var n = t.type;
        Pi(e, t),
        e = t.pendingProps;
        var o = Qn(t, Ae.current);
        Bn(t, r),
        o = Mf(null, t, n, e, o, r);
        var l = Ff();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ke(n) ? (l = !0,
        Vi(t)) : l = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Tf(t),
        o.updater = ds,
        t.stateNode = o,
        o._reactInternals = t,
        bu(t, n, e, r),
        t = Eu(null, t, n, !0, l, r)) : (t.tag = 0,
        se && l && Ef(t),
        Fe(null, t, o, r),
        t = t.child),
        t;
    case 16:
        n = t.elementType;
        e: {
            switch (Pi(e, t),
            e = t.pendingProps,
            o = n._init,
            n = o(n._payload),
            t.type = n,
            o = t.tag = Ob(n),
            e = _t(n, e),
            o) {
            case 0:
                t = $u(null, t, n, e, r);
                break e;
            case 1:
                t = Vp(null, t, n, e, r);
                break e;
            case 11:
                t = Mp(null, t, n, e, r);
                break e;
            case 14:
                t = Fp(null, t, n, _t(n.type, e), r);
                break e
            }
            throw Error(N(306, n, ""))
        }
        return t;
    case 0:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : _t(n, o),
        $u(e, t, n, o, r);
    case 1:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : _t(n, o),
        Vp(e, t, n, o, r);
    case 3:
        e: {
            if (Zy(t),
            e === null)
                throw Error(N(387));
            n = t.pendingProps,
            l = t.memoizedState,
            o = l.element,
            Sy(e, t),
            Yi(t, n, null, r);
            var i = t.memoizedState;
            if (n = i.element,
            l.isDehydrated)
                if (l = {
                    element: n,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = l,
                t.memoizedState = l,
                t.flags & 256) {
                    o = Jn(Error(N(423)), t),
                    t = Bp(e, t, n, r, o);
                    break e
                } else if (n !== o) {
                    o = Jn(Error(N(424)), t),
                    t = Bp(e, t, n, r, o);
                    break e
                } else
                    for (tt = br(t.stateNode.containerInfo.firstChild),
                    rt = t,
                    se = !0,
                    xt = null,
                    r = Oy(t, null, n, r),
                    t.child = r; r; )
                        r.flags = r.flags & -3 | 4096,
                        r = r.sibling;
            else {
                if (Xn(),
                n === o) {
                    t = er(e, t, r);
                    break e
                }
                Fe(e, t, n, r)
            }
            t = t.child
        }
        return t;
    case 5:
        return $y(t),
        e === null && Su(t),
        n = t.type,
        o = t.pendingProps,
        l = e !== null ? e.memoizedProps : null,
        i = o.children,
        vu(n, o) ? i = null : l !== null && vu(n, l) && (t.flags |= 32),
        Ky(e, t),
        Fe(e, t, i, r),
        t.child;
    case 6:
        return e === null && Su(t),
        null;
    case 13:
        return Jy(e, t, r);
    case 4:
        return Df(t, t.stateNode.containerInfo),
        n = t.pendingProps,
        e === null ? t.child = Kn(t, null, n, r) : Fe(e, t, n, r),
        t.child;
    case 11:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : _t(n, o),
        Mp(e, t, n, o, r);
    case 7:
        return Fe(e, t, t.pendingProps, r),
        t.child;
    case 8:
        return Fe(e, t, t.pendingProps.children, r),
        t.child;
    case 12:
        return Fe(e, t, t.pendingProps.children, r),
        t.child;
    case 10:
        e: {
            if (n = t.type._context,
            o = t.pendingProps,
            l = t.memoizedProps,
            i = o.value,
            le(Wi, n._currentValue),
            n._currentValue = i,
            l !== null)
                if ($t(l.value, i)) {
                    if (l.children === o.children && !Xe.current) {
                        t = er(e, t, r);
                        break e
                    }
                } else
                    for (l = t.child,
                    l !== null && (l.return = t); l !== null; ) {
                        var a = l.dependencies;
                        if (a !== null) {
                            i = l.child;
                            for (var s = a.firstContext; s !== null; ) {
                                if (s.context === n) {
                                    if (l.tag === 1) {
                                        s = Gt(-1, r & -r),
                                        s.tag = 2;
                                        var c = l.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var f = c.pending;
                                            f === null ? s.next = s : (s.next = f.next,
                                            f.next = s),
                                            c.pending = s
                                        }
                                    }
                                    l.lanes |= r,
                                    s = l.alternate,
                                    s !== null && (s.lanes |= r),
                                    xu(l.return, r, t),
                                    a.lanes |= r;
                                    break
                                }
                                s = s.next
                            }
                        } else if (l.tag === 10)
                            i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return,
                            i === null)
                                throw Error(N(341));
                            i.lanes |= r,
                            a = i.alternate,
                            a !== null && (a.lanes |= r),
                            xu(i, r, t),
                            i = l.sibling
                        } else
                            i = l.child;
                        if (i !== null)
                            i.return = l;
                        else
                            for (i = l; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (l = i.sibling,
                                l !== null) {
                                    l.return = i.return,
                                    i = l;
                                    break
                                }
                                i = i.return
                            }
                        l = i
                    }
            Fe(e, t, o.children, r),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        n = t.pendingProps.children,
        Bn(t, r),
        o = pt(o),
        n = n(o),
        t.flags |= 1,
        Fe(e, t, n, r),
        t.child;
    case 14:
        return n = t.type,
        o = _t(n, t.pendingProps),
        o = _t(n.type, o),
        Fp(e, t, n, o, r);
    case 15:
        return Qy(e, t, t.type, t.pendingProps, r);
    case 17:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : _t(n, o),
        Pi(e, t),
        t.tag = 1,
        Ke(n) ? (e = !0,
        Vi(t)) : e = !1,
        Bn(t, r),
        Py(t, n, o),
        bu(t, n, o, r),
        Eu(null, t, n, !0, e, r);
    case 19:
        return qy(e, t, r);
    case 22:
        return Xy(e, t, r)
    }
    throw Error(N(156, t.tag))
}
;
function g0(e, t) {
    return Vh(e, t)
}
function bb(e, t, r, n) {
    this.tag = e,
    this.key = r,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = n,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ut(e, t, r, n) {
    return new bb(e,t,r,n)
}
function Kf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Ob(e) {
    if (typeof e == "function")
        return Kf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === gf)
            return 11;
        if (e === vf)
            return 14
    }
    return 2
}
function Cr(e, t) {
    var r = e.alternate;
    return r === null ? (r = ut(e.tag, t, e.key, e.mode),
    r.elementType = e.elementType,
    r.type = e.type,
    r.stateNode = e.stateNode,
    r.alternate = e,
    e.alternate = r) : (r.pendingProps = t,
    r.type = e.type,
    r.flags = 0,
    r.subtreeFlags = 0,
    r.deletions = null),
    r.flags = e.flags & 14680064,
    r.childLanes = e.childLanes,
    r.lanes = e.lanes,
    r.child = e.child,
    r.memoizedProps = e.memoizedProps,
    r.memoizedState = e.memoizedState,
    r.updateQueue = e.updateQueue,
    t = e.dependencies,
    r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    r.sibling = e.sibling,
    r.index = e.index,
    r.ref = e.ref,
    r
}
function $i(e, t, r, n, o, l) {
    var i = 2;
    if (n = e,
    typeof e == "function")
        Kf(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case En:
            return tn(r.children, o, l, t);
        case mf:
            i = 8,
            o |= 8;
            break;
        case Qc:
            return e = ut(12, r, t, o | 2),
            e.elementType = Qc,
            e.lanes = l,
            e;
        case Xc:
            return e = ut(13, r, t, o),
            e.elementType = Xc,
            e.lanes = l,
            e;
        case Kc:
            return e = ut(19, r, t, o),
            e.elementType = Kc,
            e.lanes = l,
            e;
        case bh:
            return vs(r, o, l, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case xh:
                    i = 10;
                    break e;
                case Ph:
                    i = 9;
                    break e;
                case gf:
                    i = 11;
                    break e;
                case vf:
                    i = 14;
                    break e;
                case dr:
                    i = 16,
                    n = null;
                    break e
                }
            throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = ut(i, r, t, o),
    t.elementType = e,
    t.type = n,
    t.lanes = l,
    t
}
function tn(e, t, r, n) {
    return e = ut(7, e, n, t),
    e.lanes = r,
    e
}
function vs(e, t, r, n) {
    return e = ut(22, e, n, t),
    e.elementType = bh,
    e.lanes = r,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Oc(e, t, r) {
    return e = ut(6, e, null, t),
    e.lanes = r,
    e
}
function $c(e, t, r) {
    return t = ut(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = r,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function $b(e, t, r, n, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ic(0),
    this.expirationTimes = ic(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ic(0),
    this.identifierPrefix = n,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Zf(e, t, r, n, o, l, i, a, s) {
    return e = new $b(e,t,r,a,s),
    t === 1 ? (t = 1,
    l === !0 && (t |= 8)) : t = 0,
    l = ut(3, null, null, t),
    e.current = l,
    l.stateNode = e,
    l.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Tf(l),
    e
}
function Eb(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: $n,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}
function v0(e) {
    if (!e)
        return zr;
    e = e._reactInternals;
    e: {
        if (dn(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ke(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (Ke(r))
            return gy(e, r, t)
    }
    return t
}
function h0(e, t, r, n, o, l, i, a, s) {
    return e = Zf(r, n, !0, e, o, l, i, a, s),
    e.context = v0(null),
    r = e.current,
    n = Ve(),
    o = Er(r),
    l = Gt(n, o),
    l.callback = t ?? null,
    Or(r, l, o),
    e.current.lanes = o,
    _l(e, o, n),
    Ze(e, n),
    e
}
function hs(e, t, r, n) {
    var o = t.current
      , l = Ve()
      , i = Er(o);
    return r = v0(r),
    t.context === null ? t.context = r : t.pendingContext = r,
    t = Gt(l, i),
    t.payload = {
        element: e
    },
    n = n === void 0 ? null : n,
    n !== null && (t.callback = n),
    e = Or(o, t, i),
    e !== null && (bt(e, o, i, l),
    _i(e, o, i)),
    i
}
function ea(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Jp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}
function Jf(e, t) {
    Jp(e, t),
    (e = e.alternate) && Jp(e, t)
}
function Cb() {
    return null
}
var y0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function qf(e) {
    this._internalRoot = e
}
ys.prototype.render = qf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    hs(e, t, null, null)
}
;
ys.prototype.unmount = qf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        cn(function() {
            hs(null, e, null, null)
        }),
        t[Jt] = null
    }
}
;
function ys(e) {
    this._internalRoot = e
}
ys.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Qh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < gr.length && t !== 0 && t < gr[r].priority; r++)
            ;
        gr.splice(r, 0, e),
        r === 0 && Kh(e)
    }
}
;
function ed(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ws(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function qp() {}
function kb(e, t, r, n, o) {
    if (o) {
        if (typeof n == "function") {
            var l = n;
            n = function() {
                var c = ea(i);
                l.call(c)
            }
        }
        var i = h0(t, n, e, 0, null, !1, !1, "", qp);
        return e._reactRootContainer = i,
        e[Jt] = i.current,
        nl(e.nodeType === 8 ? e.parentNode : e),
        cn(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof n == "function") {
        var a = n;
        n = function() {
            var c = ea(s);
            a.call(c)
        }
    }
    var s = Zf(e, 0, !1, null, null, !1, !1, "", qp);
    return e._reactRootContainer = s,
    e[Jt] = s.current,
    nl(e.nodeType === 8 ? e.parentNode : e),
    cn(function() {
        hs(t, s, r, n)
    }),
    s
}
function _s(e, t, r, n, o) {
    var l = r._reactRootContainer;
    if (l) {
        var i = l;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var s = ea(i);
                a.call(s)
            }
        }
        hs(t, i, e, o)
    } else
        i = kb(r, t, e, o, n);
    return ea(i)
}
Yh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var r = zo(t.pendingLanes);
            r !== 0 && (wf(t, r | 1),
            Ze(t, ge()),
            !(Y & 6) && (qn = ge() + 500,
            Lr()))
        }
        break;
    case 13:
        cn(function() {
            var n = qt(e, 1);
            if (n !== null) {
                var o = Ve();
                bt(n, e, 1, o)
            }
        }),
        Jf(e, 1)
    }
}
;
_f = function(e) {
    if (e.tag === 13) {
        var t = qt(e, 134217728);
        if (t !== null) {
            var r = Ve();
            bt(t, e, 134217728, r)
        }
        Jf(e, 134217728)
    }
}
;
Gh = function(e) {
    if (e.tag === 13) {
        var t = Er(e)
          , r = qt(e, t);
        if (r !== null) {
            var n = Ve();
            bt(r, e, t, n)
        }
        Jf(e, t)
    }
}
;
Qh = function() {
    return te
}
;
Xh = function(e, t) {
    var r = te;
    try {
        return te = e,
        t()
    } finally {
        te = r
    }
}
;
iu = function(e, t, r) {
    switch (t) {
    case "input":
        if (qc(e, r),
        t = r.name,
        r.type === "radio" && t != null) {
            for (r = e; r.parentNode; )
                r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < r.length; t++) {
                var n = r[t];
                if (n !== e && n.form === e.form) {
                    var o = us(n);
                    if (!o)
                        throw Error(N(90));
                    $h(n),
                    qc(n, o)
                }
            }
        }
        break;
    case "textarea":
        Ch(e, r);
        break;
    case "select":
        t = r.value,
        t != null && An(e, !!r.multiple, t, !1)
    }
}
;
Dh = Gf;
jh = cn;
var Rb = {
    usingClientEntryPoint: !1,
    Events: [xl, Nn, us, Ih, Th, Gf]
}
  , bo = {
    findFiberByHostInstance: Kr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , Nb = {
    bundleType: bo.bundleType,
    version: bo.version,
    rendererPackageName: bo.rendererPackageName,
    rendererConfig: bo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Mh(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: bo.findFiberByHostInstance || Cb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ql.isDisabled && ql.supportsFiber)
        try {
            is = ql.inject(Nb),
            Dt = ql
        } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rb;
lt.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ed(t))
        throw Error(N(200));
    return Eb(e, t, null, r)
}
;
lt.createRoot = function(e, t) {
    if (!ed(e))
        throw Error(N(299));
    var r = !1
      , n = ""
      , o = y0;
    return t != null && (t.unstable_strictMode === !0 && (r = !0),
    t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Zf(e, 1, !1, null, null, r, !1, n, o),
    e[Jt] = t.current,
    nl(e.nodeType === 8 ? e.parentNode : e),
    new qf(t)
}
;
lt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
        Error(N(268, e)));
    return e = Mh(t),
    e = e === null ? null : e.stateNode,
    e
}
;
lt.flushSync = function(e) {
    return cn(e)
}
;
lt.hydrate = function(e, t, r) {
    if (!ws(t))
        throw Error(N(200));
    return _s(null, e, t, !0, r)
}
;
lt.hydrateRoot = function(e, t, r) {
    if (!ed(e))
        throw Error(N(405));
    var n = r != null && r.hydratedSources || null
      , o = !1
      , l = ""
      , i = y0;
    if (r != null && (r.unstable_strictMode === !0 && (o = !0),
    r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
    r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
    t = h0(t, null, e, 1, r ?? null, o, !1, l, i),
    e[Jt] = t.current,
    nl(e),
    n)
        for (e = 0; e < n.length; e++)
            r = n[e],
            o = r._getVersion,
            o = o(r._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(r, o);
    return new ys(t)
}
;
lt.render = function(e, t, r) {
    if (!ws(t))
        throw Error(N(200));
    return _s(null, e, t, !1, r)
}
;
lt.unmountComponentAtNode = function(e) {
    if (!ws(e))
        throw Error(N(40));
    return e._reactRootContainer ? (cn(function() {
        _s(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Jt] = null
        })
    }),
    !0) : !1
}
;
lt.unstable_batchedUpdates = Gf;
lt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!ws(r))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return _s(e, t, r, !1, n)
}
;
lt.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (r) {
                console.error(r)
            }
    }
    t(),
    e.exports = lt
}
)(Cx);
var em = Yn;
Uc.createRoot = em.createRoot,
Uc.hydrateRoot = em.hydrateRoot;
function zb(e) {
    const t = p.createContext(null);
    return [({children: o, value: l})=>_.createElement(t.Provider, {
        value: l
    }, o), ()=>{
        const o = p.useContext(t);
        if (o === null)
            throw new Error(e);
        return o
    }
    ]
}
function eo(e) {
    return Array.isArray(e) ? e : [e]
}
const Ib = ()=>{}
;
function Tb(e, t={
    active: !0
}) {
    return typeof e != "function" || !t.active ? t.onKeyDown || Ib : r=>{
        var n;
        r.key === "Escape" && (e(r),
        (n = t.onTrigger) == null || n.call(t))
    }
}
function Db({data: e}) {
    const t = []
      , r = []
      , n = e.reduce((o,l,i)=>(l.group ? o[l.group] ? o[l.group].push(i) : o[l.group] = [i] : r.push(i),
    o), {});
    return Object.keys(n).forEach(o=>{
        t.push(...n[o].map(l=>e[l]))
    }
    ),
    t.push(...r.map(o=>e[o])),
    t
}
function Ss(e) {
    return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== _.Fragment : !1
}
function w0(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number")
        n += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (r = w0(e[t])) && (n && (n += " "),
                n += r);
        else
            for (t in e)
                e[t] && (n && (n += " "),
                n += t);
    return n
}
function _0() {
    for (var e = 0, t, r, n = ""; e < arguments.length; )
        (t = arguments[e++]) && (r = w0(t)) && (n && (n += " "),
        n += r);
    return n
}
const S0 = {
    dark: ["#C1C2C5", "#A6A7AB", "#909296", "#5c5f66", "#373A40", "#2C2E33", "#25262b", "#1A1B1E", "#141517", "#101113"],
    gray: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"],
    red: ["#fff5f5", "#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787", "#ff6b6b", "#fa5252", "#f03e3e", "#e03131", "#c92a2a"],
    pink: ["#fff0f6", "#ffdeeb", "#fcc2d7", "#faa2c1", "#f783ac", "#f06595", "#e64980", "#d6336c", "#c2255c", "#a61e4d"],
    grape: ["#f8f0fc", "#f3d9fa", "#eebefa", "#e599f7", "#da77f2", "#cc5de8", "#be4bdb", "#ae3ec9", "#9c36b5", "#862e9c"],
    violet: ["#f3f0ff", "#e5dbff", "#d0bfff", "#b197fc", "#9775fa", "#845ef7", "#7950f2", "#7048e8", "#6741d9", "#5f3dc4"],
    indigo: ["#edf2ff", "#dbe4ff", "#bac8ff", "#91a7ff", "#748ffc", "#5c7cfa", "#4c6ef5", "#4263eb", "#3b5bdb", "#364fc7"],
    blue: ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"],
    cyan: ["#e3fafc", "#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db", "#22b8cf", "#15aabf", "#1098ad", "#0c8599", "#0b7285"],
    teal: ["#e6fcf5", "#c3fae8", "#96f2d7", "#63e6be", "#38d9a9", "#20c997", "#12b886", "#0ca678", "#099268", "#087f5b"],
    green: ["#ebfbee", "#d3f9d8", "#b2f2bb", "#8ce99a", "#69db7c", "#51cf66", "#40c057", "#37b24d", "#2f9e44", "#2b8a3e"],
    lime: ["#f4fce3", "#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b", "#94d82d", "#82c91e", "#74b816", "#66a80f", "#5c940d"],
    yellow: ["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"],
    orange: ["#fff4e6", "#ffe8cc", "#ffd8a8", "#ffc078", "#ffa94d", "#ff922b", "#fd7e14", "#f76707", "#e8590c", "#d9480f"]
};
function jb(e) {
    return ()=>({
        fontFamily: e.fontFamily || "sans-serif"
    })
}
var Lb = Object.defineProperty
  , tm = Object.getOwnPropertySymbols
  , Ab = Object.prototype.hasOwnProperty
  , Mb = Object.prototype.propertyIsEnumerable
  , rm = (e,t,r)=>t in e ? Lb(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , nm = (e,t)=>{
    for (var r in t || (t = {}))
        Ab.call(t, r) && rm(e, r, t[r]);
    if (tm)
        for (var r of tm(t))
            Mb.call(t, r) && rm(e, r, t[r]);
    return e
}
;
function Fb(e) {
    return t=>({
        WebkitTapHighlightColor: "transparent",
        [t || "&:focus"]: nm({}, e.focusRing === "always" || e.focusRing === "auto" ? e.focusRingStyles.styles(e) : e.focusRingStyles.resetStyles(e)),
        [t ? t.replace(":focus", ":focus:not(:focus-visible)") : "&:focus:not(:focus-visible)"]: nm({}, e.focusRing === "auto" || e.focusRing === "never" ? e.focusRingStyles.resetStyles(e) : null)
    })
}
function bl(e) {
    return t=>typeof e.primaryShade == "number" ? e.primaryShade : e.primaryShade[t || e.colorScheme]
}
function td(e) {
    const t = bl(e);
    return (r,n,o=!0,l=!0)=>{
        if (typeof r == "string" && r.includes(".")) {
            const [a,s] = r.split(".")
              , c = parseInt(s, 10);
            if (a in e.colors && c >= 0 && c < 10)
                return e.colors[a][typeof n == "number" && !l ? n : c]
        }
        const i = typeof n == "number" ? n : t();
        return r in e.colors ? e.colors[r][i] : o ? e.colors[e.primaryColor][i] : r
    }
}
function x0(e) {
    let t = "";
    for (let r = 1; r < e.length - 1; r += 1)
        t += `${e[r]} ${r / (e.length - 1) * 100}%, `;
    return `${e[0]} 0%, ${t}${e[e.length - 1]} 100%`
}
function Vb(e, ...t) {
    return `linear-gradient(${e}deg, ${x0(t)})`
}
function Bb(...e) {
    return `radial-gradient(circle, ${x0(e)})`
}
function P0(e) {
    const t = td(e)
      , r = bl(e);
    return n=>{
        const o = {
            from: (n == null ? void 0 : n.from) || e.defaultGradient.from,
            to: (n == null ? void 0 : n.to) || e.defaultGradient.to,
            deg: (n == null ? void 0 : n.deg) || e.defaultGradient.deg
        };
        return `linear-gradient(${o.deg}deg, ${t(o.from, r(), !1)} 0%, ${t(o.to, r(), !1)} 100%)`
    }
}
function rd(e) {
    if (typeof e.size == "number")
        return e.size;
    const t = e.sizes[e.size];
    return t !== void 0 ? t : e.size || e.sizes.md
}
function Hb(e) {
    return t=>`@media (min-width: ${rd({
        size: t,
        sizes: e.breakpoints
    })}px)`
}
function Wb(e) {
    return t=>`@media (max-width: ${rd({
        size: t,
        sizes: e.breakpoints
    }) - 1}px)`
}
function Ub(e) {
    return /^#?([0-9A-F]{3}){1,2}$/i.test(e)
}
function Yb(e) {
    let t = e.replace("#", "");
    if (t.length === 3) {
        const i = t.split("");
        t = [i[0], i[0], i[1], i[1], i[2], i[2]].join("")
    }
    const r = parseInt(t, 16)
      , n = r >> 16 & 255
      , o = r >> 8 & 255
      , l = r & 255;
    return {
        r: n,
        g: o,
        b: l,
        a: 1
    }
}
function Gb(e) {
    const [t,r,n,o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
    return {
        r: t,
        g: r,
        b: n,
        a: o || 1
    }
}
function nd(e) {
    return Ub(e) ? Yb(e) : e.startsWith("rgb") ? Gb(e) : {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    }
}
function On(e, t) {
    if (typeof e != "string" || t > 1 || t < 0)
        return "rgba(0, 0, 0, 1)";
    const {r, g: n, b: o} = nd(e);
    return `rgba(${r}, ${n}, ${o}, ${t})`
}
function Qb(e=0) {
    return {
        position: "absolute",
        top: e,
        right: e,
        left: e,
        bottom: e
    }
}
function Xb(e, t) {
    const {r, g: n, b: o, a: l} = nd(e)
      , i = 1 - t
      , a = s=>Math.round(s * i);
    return `rgba(${a(r)}, ${a(n)}, ${a(o)}, ${l})`
}
function Kb(e, t) {
    const {r, g: n, b: o, a: l} = nd(e)
      , i = a=>Math.round(a + (255 - a) * t);
    return `rgba(${i(r)}, ${i(n)}, ${i(o)}, ${l})`
}
function Zb(e) {
    return t=>{
        if (typeof t == "number")
            return t;
        const r = typeof e.defaultRadius == "number" ? e.defaultRadius : e.radius[e.defaultRadius] || e.defaultRadius;
        return e.radius[t] || t || r
    }
}
function Jb(e, t) {
    if (typeof e == "string" && e.includes(".")) {
        const [r,n] = e.split(".")
          , o = parseInt(n, 10);
        if (r in t.colors && o >= 0 && o < 10)
            return {
                isSplittedColor: !0,
                key: r,
                shade: o
            }
    }
    return {
        isSplittedColor: !1
    }
}
function qb(e) {
    const t = td(e)
      , r = bl(e)
      , n = P0(e);
    return ({variant: o, color: l, gradient: i, primaryFallback: a})=>{
        const s = Jb(l, e);
        switch (o) {
        case "light":
            return {
                border: "transparent",
                background: On(t(l, e.colorScheme === "dark" ? 8 : 0, a, !1), e.colorScheme === "dark" ? .2 : 1),
                color: l === "dark" ? e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9] : t(l, e.colorScheme === "dark" ? 2 : r("light")),
                hover: On(t(l, e.colorScheme === "dark" ? 7 : 1, a, !1), e.colorScheme === "dark" ? .25 : .65)
            };
        case "subtle":
            return {
                border: "transparent",
                background: "transparent",
                color: l === "dark" ? e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9] : t(l, e.colorScheme === "dark" ? 2 : r("light")),
                hover: On(t(l, e.colorScheme === "dark" ? 8 : 0, a, !1), e.colorScheme === "dark" ? .2 : 1)
            };
        case "outline":
            return {
                border: t(l, e.colorScheme === "dark" ? 5 : r("light")),
                background: "transparent",
                color: t(l, e.colorScheme === "dark" ? 5 : r("light")),
                hover: e.colorScheme === "dark" ? On(t(l, 5, a, !1), .05) : On(t(l, 0, a, !1), .35)
            };
        case "default":
            return {
                border: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4],
                background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
                color: e.colorScheme === "dark" ? e.white : e.black,
                hover: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[0]
            };
        case "white":
            return {
                border: "transparent",
                background: e.white,
                color: t(l, r()),
                hover: null
            };
        case "transparent":
            return {
                border: "transparent",
                color: l === "dark" ? e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9] : t(l, e.colorScheme === "dark" ? 2 : r("light")),
                background: "transparent",
                hover: null
            };
        case "gradient":
            return {
                background: n(i),
                color: e.white,
                border: "transparent",
                hover: null
            };
        default:
            {
                const c = r()
                  , f = s.isSplittedColor ? s.shade : c
                  , u = s.isSplittedColor ? s.key : l;
                return {
                    border: "transparent",
                    background: t(u, f, a),
                    color: e.white,
                    hover: t(u, f === 9 ? 8 : f + 1)
                }
            }
        }
    }
}
function eO(e) {
    return t=>{
        const r = bl(e)(t);
        return e.colors[e.primaryColor][r]
    }
}
function tO(e) {
    return {
        "@media (hover: hover)": {
            "&:hover": e
        },
        "@media (hover: none)": {
            "&:active": e
        }
    }
}
function rO(e) {
    return ()=>({
        userSelect: "none",
        color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5]
    })
}
const ye = {
    fontStyles: jb,
    themeColor: td,
    focusStyles: Fb,
    linearGradient: Vb,
    radialGradient: Bb,
    smallerThan: Wb,
    largerThan: Hb,
    rgba: On,
    size: rd,
    cover: Qb,
    darken: Xb,
    lighten: Kb,
    radius: Zb,
    variant: qb,
    primaryShade: bl,
    hover: tO,
    gradient: P0,
    primaryColor: eO,
    placeholderStyles: rO
};
var nO = Object.defineProperty
  , oO = Object.defineProperties
  , lO = Object.getOwnPropertyDescriptors
  , om = Object.getOwnPropertySymbols
  , iO = Object.prototype.hasOwnProperty
  , aO = Object.prototype.propertyIsEnumerable
  , lm = (e,t,r)=>t in e ? nO(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , sO = (e,t)=>{
    for (var r in t || (t = {}))
        iO.call(t, r) && lm(e, r, t[r]);
    if (om)
        for (var r of om(t))
            aO.call(t, r) && lm(e, r, t[r]);
    return e
}
  , cO = (e,t)=>oO(e, lO(t));
function b0(e) {
    return cO(sO({}, e), {
        fn: {
            fontStyles: ye.fontStyles(e),
            themeColor: ye.themeColor(e),
            focusStyles: ye.focusStyles(e),
            largerThan: ye.largerThan(e),
            smallerThan: ye.smallerThan(e),
            radialGradient: ye.radialGradient,
            linearGradient: ye.linearGradient,
            gradient: ye.gradient(e),
            rgba: ye.rgba,
            size: ye.size,
            cover: ye.cover,
            lighten: ye.lighten,
            darken: ye.darken,
            primaryShade: ye.primaryShade(e),
            radius: ye.radius(e),
            variant: ye.variant(e),
            hover: ye.hover,
            primaryColor: ye.primaryColor(e),
            placeholderStyles: ye.placeholderStyles(e)
        }
    })
}
Object.keys(S0);
const uO = {
    dir: "ltr",
    primaryShade: {
        light: 6,
        dark: 8
    },
    focusRing: "auto",
    loader: "oval",
    dateFormat: "MMMM D, YYYY",
    colorScheme: "light",
    white: "#fff",
    black: "#000",
    defaultRadius: "sm",
    transitionTimingFunction: "ease",
    colors: S0,
    lineHeight: 1.55,
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    primaryColor: "blue",
    respectReducedMotion: !0,
    cursorType: "default",
    defaultGradient: {
        from: "indigo",
        to: "cyan",
        deg: 45
    },
    shadows: {
        xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
        sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
        md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
        xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20
    },
    radius: {
        xs: 2,
        sm: 4,
        md: 8,
        lg: 16,
        xl: 32
    },
    spacing: {
        xs: 10,
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24
    },
    breakpoints: {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1400
    },
    headings: {
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
        fontWeight: 700,
        sizes: {
            h1: {
                fontSize: 34,
                lineHeight: 1.3,
                fontWeight: void 0
            },
            h2: {
                fontSize: 26,
                lineHeight: 1.35,
                fontWeight: void 0
            },
            h3: {
                fontSize: 22,
                lineHeight: 1.4,
                fontWeight: void 0
            },
            h4: {
                fontSize: 18,
                lineHeight: 1.45,
                fontWeight: void 0
            },
            h5: {
                fontSize: 16,
                lineHeight: 1.5,
                fontWeight: void 0
            },
            h6: {
                fontSize: 14,
                lineHeight: 1.5,
                fontWeight: void 0
            }
        }
    },
    other: {},
    components: {},
    activeStyles: {
        transform: "translateY(1px)"
    },
    datesLocale: "en",
    globalStyles: void 0,
    focusRingStyles: {
        styles: e=>({
            outlineOffset: 2,
            outline: `2px solid ${e.colors[e.primaryColor][e.colorScheme === "dark" ? 7 : 5]}`
        }),
        resetStyles: ()=>({
            outline: "none"
        }),
        inputStyles: e=>({
            outline: "none",
            borderColor: e.colors[e.primaryColor][typeof e.primaryShade == "object" ? e.primaryShade[e.colorScheme] : e.primaryShade]
        })
    }
}
  , od = b0(uO);
function fO(e) {
    if (e.sheet)
        return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t]
}
function dO(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
}
var pO = function() {
    function e(r) {
        var n = this;
        this._insertTag = function(o) {
            var l;
            n.tags.length === 0 ? n.insertionPoint ? l = n.insertionPoint.nextSibling : n.prepend ? l = n.container.firstChild : l = n.before : l = n.tags[n.tags.length - 1].nextSibling,
            n.container.insertBefore(o, l),
            n.tags.push(o)
        }
        ,
        this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy,
        this.tags = [],
        this.ctr = 0,
        this.nonce = r.nonce,
        this.key = r.key,
        this.container = r.container,
        this.prepend = r.prepend,
        this.insertionPoint = r.insertionPoint,
        this.before = null
    }
    var t = e.prototype;
    return t.hydrate = function(n) {
        n.forEach(this._insertTag)
    }
    ,
    t.insert = function(n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(dO(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
            var l = fO(o);
            try {
                l.insertRule(n, l.cssRules.length)
            } catch {}
        } else
            o.appendChild(document.createTextNode(n));
        this.ctr++
    }
    ,
    t.flush = function() {
        this.tags.forEach(function(n) {
            return n.parentNode && n.parentNode.removeChild(n)
        }),
        this.tags = [],
        this.ctr = 0
    }
    ,
    e
}()
  , je = "-ms-"
  , ta = "-moz-"
  , X = "-webkit-"
  , O0 = "comm"
  , ld = "rule"
  , id = "decl"
  , mO = "@import"
  , $0 = "@keyframes"
  , gO = Math.abs
  , xs = String.fromCharCode
  , vO = Object.assign;
function hO(e, t) {
    return Re(e, 0) ^ 45 ? (((t << 2 ^ Re(e, 0)) << 2 ^ Re(e, 1)) << 2 ^ Re(e, 2)) << 2 ^ Re(e, 3) : 0
}
function E0(e) {
    return e.trim()
}
function yO(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}
function J(e, t, r) {
    return e.replace(t, r)
}
function Mu(e, t) {
    return e.indexOf(t)
}
function Re(e, t) {
    return e.charCodeAt(t) | 0
}
function dl(e, t, r) {
    return e.slice(t, r)
}
function zt(e) {
    return e.length
}
function ad(e) {
    return e.length
}
function ei(e, t) {
    return t.push(e),
    e
}
function wO(e, t) {
    return e.map(t).join("")
}
var Ps = 1
  , to = 1
  , C0 = 0
  , Je = 0
  , ve = 0
  , so = "";
function bs(e, t, r, n, o, l, i) {
    return {
        value: e,
        root: t,
        parent: r,
        type: n,
        props: o,
        children: l,
        line: Ps,
        column: to,
        length: i,
        return: ""
    }
}
function Oo(e, t) {
    return vO(bs("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t)
}
function _O() {
    return ve
}
function SO() {
    return ve = Je > 0 ? Re(so, --Je) : 0,
    to--,
    ve === 10 && (to = 1,
    Ps--),
    ve
}
function nt() {
    return ve = Je < C0 ? Re(so, Je++) : 0,
    to++,
    ve === 10 && (to = 1,
    Ps++),
    ve
}
function Lt() {
    return Re(so, Je)
}
function Ei() {
    return Je
}
function Ol(e, t) {
    return dl(so, e, t)
}
function pl(e) {
    switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function k0(e) {
    return Ps = to = 1,
    C0 = zt(so = e),
    Je = 0,
    []
}
function R0(e) {
    return so = "",
    e
}
function Ci(e) {
    return E0(Ol(Je - 1, Fu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function xO(e) {
    for (; (ve = Lt()) && ve < 33; )
        nt();
    return pl(e) > 2 || pl(ve) > 3 ? "" : " "
}
function PO(e, t) {
    for (; --t && nt() && !(ve < 48 || ve > 102 || ve > 57 && ve < 65 || ve > 70 && ve < 97); )
        ;
    return Ol(e, Ei() + (t < 6 && Lt() == 32 && nt() == 32))
}
function Fu(e) {
    for (; nt(); )
        switch (ve) {
        case e:
            return Je;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Fu(ve);
            break;
        case 40:
            e === 41 && Fu(e);
            break;
        case 92:
            nt();
            break
        }
    return Je
}
function bO(e, t) {
    for (; nt() && e + ve !== 47 + 10; )
        if (e + ve === 42 + 42 && Lt() === 47)
            break;
    return "/*" + Ol(t, Je - 1) + "*" + xs(e === 47 ? e : nt())
}
function OO(e) {
    for (; !pl(Lt()); )
        nt();
    return Ol(e, Je)
}
function $O(e) {
    return R0(ki("", null, null, null, [""], e = k0(e), 0, [0], e))
}
function ki(e, t, r, n, o, l, i, a, s) {
    for (var c = 0, f = 0, u = i, d = 0, m = 0, g = 0, y = 1, x = 1, h = 1, v = 0, w = "", S = o, P = l, O = n, b = w; x; )
        switch (g = v,
        v = nt()) {
        case 40:
            if (g != 108 && Re(b, u - 1) == 58) {
                Mu(b += J(Ci(v), "&", "&\f"), "&\f") != -1 && (h = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            b += Ci(v);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            b += xO(g);
            break;
        case 92:
            b += PO(Ei() - 1, 7);
            continue;
        case 47:
            switch (Lt()) {
            case 42:
            case 47:
                ei(EO(bO(nt(), Ei()), t, r), s);
                break;
            default:
                b += "/"
            }
            break;
        case 123 * y:
            a[c++] = zt(b) * h;
        case 125 * y:
        case 59:
        case 0:
            switch (v) {
            case 0:
            case 125:
                x = 0;
            case 59 + f:
                m > 0 && zt(b) - u && ei(m > 32 ? am(b + ";", n, r, u - 1) : am(J(b, " ", "") + ";", n, r, u - 2), s);
                break;
            case 59:
                b += ";";
            default:
                if (ei(O = im(b, t, r, c, f, o, a, w, S = [], P = [], u), l),
                v === 123)
                    if (f === 0)
                        ki(b, t, O, O, S, l, u, a, P);
                    else
                        switch (d === 99 && Re(b, 3) === 110 ? 100 : d) {
                        case 100:
                        case 109:
                        case 115:
                            ki(e, O, O, n && ei(im(e, O, O, 0, 0, o, a, w, o, S = [], u), P), o, P, u, a, n ? S : P);
                            break;
                        default:
                            ki(b, O, O, O, [""], P, 0, a, P)
                        }
            }
            c = f = m = 0,
            y = h = 1,
            w = b = "",
            u = i;
            break;
        case 58:
            u = 1 + zt(b),
            m = g;
        default:
            if (y < 1) {
                if (v == 123)
                    --y;
                else if (v == 125 && y++ == 0 && SO() == 125)
                    continue
            }
            switch (b += xs(v),
            v * y) {
            case 38:
                h = f > 0 ? 1 : (b += "\f",
                -1);
                break;
            case 44:
                a[c++] = (zt(b) - 1) * h,
                h = 1;
                break;
            case 64:
                Lt() === 45 && (b += Ci(nt())),
                d = Lt(),
                f = u = zt(w = b += OO(Ei())),
                v++;
                break;
            case 45:
                g === 45 && zt(b) == 2 && (y = 0)
            }
        }
    return l
}
function im(e, t, r, n, o, l, i, a, s, c, f) {
    for (var u = o - 1, d = o === 0 ? l : [""], m = ad(d), g = 0, y = 0, x = 0; g < n; ++g)
        for (var h = 0, v = dl(e, u + 1, u = gO(y = i[g])), w = e; h < m; ++h)
            (w = E0(y > 0 ? d[h] + " " + v : J(v, /&\f/g, d[h]))) && (s[x++] = w);
    return bs(e, t, r, o === 0 ? ld : a, s, c, f)
}
function EO(e, t, r) {
    return bs(e, t, r, O0, xs(_O()), dl(e, 2, -2), 0)
}
function am(e, t, r, n) {
    return bs(e, t, r, id, dl(e, 0, n), dl(e, n + 1, -1), n)
}
function Wn(e, t) {
    for (var r = "", n = ad(e), o = 0; o < n; o++)
        r += t(e[o], o, e, t) || "";
    return r
}
function CO(e, t, r, n) {
    switch (e.type) {
    case mO:
    case id:
        return e.return = e.return || e.value;
    case O0:
        return "";
    case $0:
        return e.return = e.value + "{" + Wn(e.children, n) + "}";
    case ld:
        e.value = e.props.join(",")
    }
    return zt(r = Wn(e.children, n)) ? e.return = e.value + "{" + r + "}" : ""
}
function kO(e) {
    var t = ad(e);
    return function(r, n, o, l) {
        for (var i = "", a = 0; a < t; a++)
            i += e[a](r, n, o, l) || "";
        return i
    }
}
function RO(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
var sm = function(t) {
    var r = new WeakMap;
    return function(n) {
        if (r.has(n))
            return r.get(n);
        var o = t(n);
        return r.set(n, o),
        o
    }
};
function NO(e) {
    var t = Object.create(null);
    return function(r) {
        return t[r] === void 0 && (t[r] = e(r)),
        t[r]
    }
}
var zO = function(t, r, n) {
    for (var o = 0, l = 0; o = l,
    l = Lt(),
    o === 38 && l === 12 && (r[n] = 1),
    !pl(l); )
        nt();
    return Ol(t, Je)
}
  , IO = function(t, r) {
    var n = -1
      , o = 44;
    do
        switch (pl(o)) {
        case 0:
            o === 38 && Lt() === 12 && (r[n] = 1),
            t[n] += zO(Je - 1, r, n);
            break;
        case 2:
            t[n] += Ci(o);
            break;
        case 4:
            if (o === 44) {
                t[++n] = Lt() === 58 ? "&\f" : "",
                r[n] = t[n].length;
                break
            }
        default:
            t[n] += xs(o)
        }
    while (o = nt());
    return t
}
  , TO = function(t, r) {
    return R0(IO(k0(t), r))
}
  , cm = new WeakMap
  , DO = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
        for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
            if (n = n.parent,
            !n)
                return;
        if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !cm.get(n)) && !o) {
            cm.set(t, !0);
            for (var l = [], i = TO(r, l), a = n.props, s = 0, c = 0; s < i.length; s++)
                for (var f = 0; f < a.length; f++,
                c++)
                    t.props[c] = l[s] ? i[s].replace(/&\f/g, a[f]) : a[f] + " " + i[s]
        }
    }
}
  , jO = function(t) {
    if (t.type === "decl") {
        var r = t.value;
        r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "",
        t.value = "")
    }
};
function N0(e, t) {
    switch (hO(e, t)) {
    case 5103:
        return X + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
        return X + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
        return X + e + ta + e + je + e + e;
    case 6828:
    case 4268:
        return X + e + je + e + e;
    case 6165:
        return X + e + je + "flex-" + e + e;
    case 5187:
        return X + e + J(e, /(\w+).+(:[^]+)/, X + "box-$1$2" + je + "flex-$1$2") + e;
    case 5443:
        return X + e + je + "flex-item-" + J(e, /flex-|-self/, "") + e;
    case 4675:
        return X + e + je + "flex-line-pack" + J(e, /align-content|flex-|-self/, "") + e;
    case 5548:
        return X + e + je + J(e, "shrink", "negative") + e;
    case 5292:
        return X + e + je + J(e, "basis", "preferred-size") + e;
    case 6060:
        return X + "box-" + J(e, "-grow", "") + X + e + je + J(e, "grow", "positive") + e;
    case 4554:
        return X + J(e, /([^-])(transform)/g, "$1" + X + "$2") + e;
    case 6187:
        return J(J(J(e, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), e, "") + e;
    case 5495:
    case 3959:
        return J(e, /(image-set\([^]*)/, X + "$1$`$1");
    case 4968:
        return J(J(e, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + je + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + X + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return J(e, /(.+)-inline(.+)/, X + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (zt(e) - 1 - t > 6)
            switch (Re(e, t + 1)) {
            case 109:
                if (Re(e, t + 4) !== 45)
                    break;
            case 102:
                return J(e, /(.+:)(.+)-([^]+)/, "$1" + X + "$2-$3$1" + ta + (Re(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
            case 115:
                return ~Mu(e, "stretch") ? N0(J(e, "stretch", "fill-available"), t) + e : e
            }
        break;
    case 4949:
        if (Re(e, t + 1) !== 115)
            break;
    case 6444:
        switch (Re(e, zt(e) - 3 - (~Mu(e, "!important") && 10))) {
        case 107:
            return J(e, ":", ":" + X) + e;
        case 101:
            return J(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + X + (Re(e, 14) === 45 ? "inline-" : "") + "box$3$1" + X + "$2$3$1" + je + "$2box$3") + e
        }
        break;
    case 5936:
        switch (Re(e, t + 11)) {
        case 114:
            return X + e + je + J(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
            return X + e + je + J(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
            return X + e + je + J(e, /[svh]\w+-[tblr]{2}/, "lr") + e
        }
        return X + e + je + e + e
    }
    return e
}
var LO = function(t, r, n, o) {
    if (t.length > -1 && !t.return)
        switch (t.type) {
        case id:
            t.return = N0(t.value, t.length);
            break;
        case $0:
            return Wn([Oo(t, {
                value: J(t.value, "@", "@" + X)
            })], o);
        case ld:
            if (t.length)
                return wO(t.props, function(l) {
                    switch (yO(l, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return Wn([Oo(t, {
                            props: [J(l, /:(read-\w+)/, ":" + ta + "$1")]
                        })], o);
                    case "::placeholder":
                        return Wn([Oo(t, {
                            props: [J(l, /:(plac\w+)/, ":" + X + "input-$1")]
                        }), Oo(t, {
                            props: [J(l, /:(plac\w+)/, ":" + ta + "$1")]
                        }), Oo(t, {
                            props: [J(l, /:(plac\w+)/, je + "input-$1")]
                        })], o)
                    }
                    return ""
                })
        }
}
  , AO = [LO]
  , z0 = function(t) {
    var r = t.key;
    if (r === "css") {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function(y) {
            var x = y.getAttribute("data-emotion");
            x.indexOf(" ") !== -1 && (document.head.appendChild(y),
            y.setAttribute("data-s", ""))
        })
    }
    var o = t.stylisPlugins || AO, l = {}, i, a = [];
    i = t.container || document.head,
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(y) {
        for (var x = y.getAttribute("data-emotion").split(" "), h = 1; h < x.length; h++)
            l[x[h]] = !0;
        a.push(y)
    });
    var s, c = [DO, jO];
    {
        var f, u = [CO, RO(function(y) {
            f.insert(y)
        })], d = kO(c.concat(o, u)), m = function(x) {
            return Wn($O(x), d)
        };
        s = function(x, h, v, w) {
            f = v,
            m(x ? x + "{" + h.styles + "}" : h.styles),
            w && (g.inserted[h.name] = !0)
        }
    }
    var g = {
        key: r,
        sheet: new pO({
            key: r,
            container: i,
            nonce: t.nonce,
            speedy: t.speedy,
            prepend: t.prepend,
            insertionPoint: t.insertionPoint
        }),
        nonce: t.nonce,
        inserted: l,
        registered: {},
        insert: s
    };
    return g.sheet.hydrate(a),
    g
};
function ce() {
    return ce = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ce.apply(this, arguments)
}
var Vu = {}
  , MO = {
    get exports() {
        return Vu
    },
    set exports(e) {
        Vu = e
    }
}
  , re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe = typeof Symbol == "function" && Symbol.for
  , sd = Oe ? Symbol.for("react.element") : 60103
  , cd = Oe ? Symbol.for("react.portal") : 60106
  , Os = Oe ? Symbol.for("react.fragment") : 60107
  , $s = Oe ? Symbol.for("react.strict_mode") : 60108
  , Es = Oe ? Symbol.for("react.profiler") : 60114
  , Cs = Oe ? Symbol.for("react.provider") : 60109
  , ks = Oe ? Symbol.for("react.context") : 60110
  , ud = Oe ? Symbol.for("react.async_mode") : 60111
  , Rs = Oe ? Symbol.for("react.concurrent_mode") : 60111
  , Ns = Oe ? Symbol.for("react.forward_ref") : 60112
  , zs = Oe ? Symbol.for("react.suspense") : 60113
  , FO = Oe ? Symbol.for("react.suspense_list") : 60120
  , Is = Oe ? Symbol.for("react.memo") : 60115
  , Ts = Oe ? Symbol.for("react.lazy") : 60116
  , VO = Oe ? Symbol.for("react.block") : 60121
  , BO = Oe ? Symbol.for("react.fundamental") : 60117
  , HO = Oe ? Symbol.for("react.responder") : 60118
  , WO = Oe ? Symbol.for("react.scope") : 60119;
function at(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case sd:
            switch (e = e.type,
            e) {
            case ud:
            case Rs:
            case Os:
            case Es:
            case $s:
            case zs:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case ks:
                case Ns:
                case Ts:
                case Is:
                case Cs:
                    return e;
                default:
                    return t
                }
            }
        case cd:
            return t
        }
    }
}
function I0(e) {
    return at(e) === Rs
}
re.AsyncMode = ud;
re.ConcurrentMode = Rs;
re.ContextConsumer = ks;
re.ContextProvider = Cs;
re.Element = sd;
re.ForwardRef = Ns;
re.Fragment = Os;
re.Lazy = Ts;
re.Memo = Is;
re.Portal = cd;
re.Profiler = Es;
re.StrictMode = $s;
re.Suspense = zs;
re.isAsyncMode = function(e) {
    return I0(e) || at(e) === ud
}
;
re.isConcurrentMode = I0;
re.isContextConsumer = function(e) {
    return at(e) === ks
}
;
re.isContextProvider = function(e) {
    return at(e) === Cs
}
;
re.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === sd
}
;
re.isForwardRef = function(e) {
    return at(e) === Ns
}
;
re.isFragment = function(e) {
    return at(e) === Os
}
;
re.isLazy = function(e) {
    return at(e) === Ts
}
;
re.isMemo = function(e) {
    return at(e) === Is
}
;
re.isPortal = function(e) {
    return at(e) === cd
}
;
re.isProfiler = function(e) {
    return at(e) === Es
}
;
re.isStrictMode = function(e) {
    return at(e) === $s
}
;
re.isSuspense = function(e) {
    return at(e) === zs
}
;
re.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Os || e === Rs || e === Es || e === $s || e === zs || e === FO || typeof e == "object" && e !== null && (e.$$typeof === Ts || e.$$typeof === Is || e.$$typeof === Cs || e.$$typeof === ks || e.$$typeof === Ns || e.$$typeof === BO || e.$$typeof === HO || e.$$typeof === WO || e.$$typeof === VO)
}
;
re.typeOf = at;
(function(e) {
    e.exports = re
}
)(MO);
var T0 = Vu
  , UO = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , YO = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , D0 = {};
D0[T0.ForwardRef] = UO;
D0[T0.Memo] = YO;
var GO = !0;
function QO(e, t, r) {
    var n = "";
    return r.split(" ").forEach(function(o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " "
    }),
    n
}
var XO = function(t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || GO === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles)
}
  , j0 = function(t, r, n) {
    XO(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
        var l = r;
        do
            t.insert(r === l ? "." + o : "", l, t.sheet, !0),
            l = l.next;
        while (l !== void 0)
    }
};
function KO(e) {
    for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n,
    o -= 4)
        r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24,
        r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16),
        r ^= r >>> 24,
        t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
    case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
        t ^= e.charCodeAt(n) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13,
    t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
    ((t ^ t >>> 15) >>> 0).toString(36)
}
var ZO = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}
  , JO = /[A-Z]|^ms/g
  , qO = /_EMO_([^_]+?)_([^]*?)_EMO_/g
  , L0 = function(t) {
    return t.charCodeAt(1) === 45
}
  , um = function(t) {
    return t != null && typeof t != "boolean"
}
  , Ec = NO(function(e) {
    return L0(e) ? e : e.replace(JO, "-$&").toLowerCase()
})
  , fm = function(t, r) {
    switch (t) {
    case "animation":
    case "animationName":
        if (typeof r == "string")
            return r.replace(qO, function(n, o, l) {
                return It = {
                    name: o,
                    styles: l,
                    next: It
                },
                o
            })
    }
    return ZO[t] !== 1 && !L0(t) && typeof r == "number" && r !== 0 ? r + "px" : r
};
function ml(e, t, r) {
    if (r == null)
        return "";
    if (r.__emotion_styles !== void 0)
        return r;
    switch (typeof r) {
    case "boolean":
        return "";
    case "object":
        {
            if (r.anim === 1)
                return It = {
                    name: r.name,
                    styles: r.styles,
                    next: It
                },
                r.name;
            if (r.styles !== void 0) {
                var n = r.next;
                if (n !== void 0)
                    for (; n !== void 0; )
                        It = {
                            name: n.name,
                            styles: n.styles,
                            next: It
                        },
                        n = n.next;
                var o = r.styles + ";";
                return o
            }
            return e$(e, t, r)
        }
    case "function":
        {
            if (e !== void 0) {
                var l = It
                  , i = r(e);
                return It = l,
                ml(e, t, i)
            }
            break
        }
    }
    if (t == null)
        return r;
    var a = t[r];
    return a !== void 0 ? a : r
}
function e$(e, t, r) {
    var n = "";
    if (Array.isArray(r))
        for (var o = 0; o < r.length; o++)
            n += ml(e, t, r[o]) + ";";
    else
        for (var l in r) {
            var i = r[l];
            if (typeof i != "object")
                t != null && t[i] !== void 0 ? n += l + "{" + t[i] + "}" : um(i) && (n += Ec(l) + ":" + fm(l, i) + ";");
            else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
                for (var a = 0; a < i.length; a++)
                    um(i[a]) && (n += Ec(l) + ":" + fm(l, i[a]) + ";");
            else {
                var s = ml(e, t, i);
                switch (l) {
                case "animation":
                case "animationName":
                    {
                        n += Ec(l) + ":" + s + ";";
                        break
                    }
                default:
                    n += l + "{" + s + "}"
                }
            }
        }
    return n
}
var dm = /label:\s*([^\s;\n{]+)\s*(;|$)/g, It, fd = function(t, r, n) {
    if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
        return t[0];
    var o = !0
      , l = "";
    It = void 0;
    var i = t[0];
    i == null || i.raw === void 0 ? (o = !1,
    l += ml(n, r, i)) : l += i[0];
    for (var a = 1; a < t.length; a++)
        l += ml(n, r, t[a]),
        o && (l += i[a]);
    dm.lastIndex = 0;
    for (var s = "", c; (c = dm.exec(l)) !== null; )
        s += "-" + c[1];
    var f = KO(l) + s;
    return {
        name: f,
        styles: l,
        next: It
    }
}, t$ = nn["useInsertionEffect"] ? nn["useInsertionEffect"] : !1, pm = t$ || p.useLayoutEffect, A0 = p.createContext(typeof HTMLElement < "u" ? z0({
    key: "css"
}) : null);
A0.Provider;
var r$ = function(t) {
    return p.forwardRef(function(r, n) {
        var o = p.useContext(A0);
        return t(r, o, n)
    })
}
  , Bu = p.createContext({})
  , n$ = function(t, r) {
    if (typeof r == "function") {
        var n = r(t);
        return n
    }
    return ce({}, t, r)
}
  , o$ = sm(function(e) {
    return sm(function(t) {
        return n$(e, t)
    })
})
  , l$ = function(t) {
    var r = p.useContext(Bu);
    return t.theme !== r && (r = o$(r)(t.theme)),
    p.createElement(Bu.Provider, {
        value: r
    }, t.children)
}
  , $l = r$(function(e, t) {
    var r = e.styles
      , n = fd([r], void 0, p.useContext(Bu))
      , o = p.useRef();
    return pm(function() {
        var l = t.key + "-global"
          , i = new t.sheet.constructor({
            key: l,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy
        })
          , a = !1
          , s = document.querySelector('style[data-emotion="' + l + " " + n.name + '"]');
        return t.sheet.tags.length && (i.before = t.sheet.tags[0]),
        s !== null && (a = !0,
        s.setAttribute("data-emotion", l),
        i.hydrate([s])),
        o.current = [i, a],
        function() {
            i.flush()
        }
    }, [t]),
    pm(function() {
        var l = o.current
          , i = l[0]
          , a = l[1];
        if (a) {
            l[1] = !1;
            return
        }
        if (n.next !== void 0 && j0(t, n.next, !0),
        i.tags.length) {
            var s = i.tags[i.tags.length - 1].nextElementSibling;
            i.before = s,
            i.flush()
        }
        t.insert("", n, i, !1)
    }, [t, n.name]),
    null
});
function i$() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return fd(t)
}
var a$ = Object.defineProperty
  , s$ = Object.defineProperties
  , c$ = Object.getOwnPropertyDescriptors
  , mm = Object.getOwnPropertySymbols
  , u$ = Object.prototype.hasOwnProperty
  , f$ = Object.prototype.propertyIsEnumerable
  , gm = (e,t,r)=>t in e ? a$(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , d$ = (e,t)=>{
    for (var r in t || (t = {}))
        u$.call(t, r) && gm(e, r, t[r]);
    if (mm)
        for (var r of mm(t))
            f$.call(t, r) && gm(e, r, t[r]);
    return e
}
  , p$ = (e,t)=>s$(e, c$(t));
function m$({theme: e}) {
    return _.createElement($l, {
        styles: {
            "*, *::before, *::after": {
                boxSizing: "border-box"
            },
            html: {
                colorScheme: e.colorScheme === "dark" ? "dark" : "light"
            },
            body: p$(d$({}, e.fn.fontStyles()), {
                backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
                color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
                lineHeight: e.lineHeight,
                fontSize: e.fontSizes.md,
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
            })
        }
    })
}
function ti(e, t, r) {
    Object.keys(t).forEach(n=>{
        e[`--mantine-${r}-${n}`] = typeof t[n] == "number" ? `${t[n]}px` : t[n]
    }
    )
}
function g$({theme: e}) {
    const t = {
        "--mantine-color-white": e.white,
        "--mantine-color-black": e.black,
        "--mantine-transition-timing-function": e.transitionTimingFunction,
        "--mantine-line-height": `${e.lineHeight}`,
        "--mantine-font-family": e.fontFamily,
        "--mantine-font-family-monospace": e.fontFamilyMonospace,
        "--mantine-font-family-headings": e.headings.fontFamily,
        "--mantine-heading-font-weight": `${e.headings.fontWeight}`
    };
    ti(t, e.shadows, "shadow"),
    ti(t, e.fontSizes, "font-size"),
    ti(t, e.radius, "radius"),
    ti(t, e.spacing, "spacing"),
    Object.keys(e.colors).forEach(n=>{
        e.colors[n].forEach((o,l)=>{
            t[`--mantine-color-${n}-${l}`] = o
        }
        )
    }
    );
    const r = e.headings.sizes;
    return Object.keys(r).forEach(n=>{
        t[`--mantine-${n}-font-size`] = `${r[n].fontSize}px`,
        t[`--mantine-${n}-line-height`] = `${r[n].lineHeight}`
    }
    ),
    _.createElement($l, {
        styles: {
            ":root": t
        }
    })
}
var v$ = Object.defineProperty
  , h$ = Object.defineProperties
  , y$ = Object.getOwnPropertyDescriptors
  , vm = Object.getOwnPropertySymbols
  , w$ = Object.prototype.hasOwnProperty
  , _$ = Object.prototype.propertyIsEnumerable
  , hm = (e,t,r)=>t in e ? v$(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Ur = (e,t)=>{
    for (var r in t || (t = {}))
        w$.call(t, r) && hm(e, r, t[r]);
    if (vm)
        for (var r of vm(t))
            _$.call(t, r) && hm(e, r, t[r]);
    return e
}
  , ym = (e,t)=>h$(e, y$(t));
function S$(e, t) {
    if (!t)
        return e;
    const r = Object.keys(e).reduce((n,o)=>{
        if (o === "headings" && t.headings) {
            const l = t.headings.sizes ? Object.keys(e.headings.sizes).reduce((i,a)=>(i[a] = Ur(Ur({}, e.headings.sizes[a]), t.headings.sizes[a]),
            i), {}) : e.headings.sizes;
            return ym(Ur({}, n), {
                headings: ym(Ur(Ur({}, e.headings), t.headings), {
                    sizes: l
                })
            })
        }
        return n[o] = typeof t[o] == "object" ? Ur(Ur({}, e[o]), t[o]) : typeof t[o] == "number" || typeof t[o] == "boolean" || typeof t[o] == "function" ? t[o] : t[o] || e[o],
        n
    }
    , {});
    if (!(r.primaryColor in r.colors))
        throw new Error("MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");
    return r
}
function x$(e, t) {
    return b0(S$(e, t))
}
function M0(e) {
    return Object.keys(e).reduce((t,r)=>(e[r] !== void 0 && (t[r] = e[r]),
    t), {})
}
const P$ = {
    html: {
        fontFamily: "sans-serif",
        lineHeight: "1.15",
        textSizeAdjust: "100%"
    },
    body: {
        margin: 0
    },
    "article, aside, footer, header, nav, section, figcaption, figure, main": {
        display: "block"
    },
    h1: {
        fontSize: "2em"
    },
    hr: {
        boxSizing: "content-box",
        height: 0,
        overflow: "visible"
    },
    pre: {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
    },
    a: {
        background: "transparent",
        textDecorationSkip: "objects"
    },
    "a:active, a:hover": {
        outlineWidth: 0
    },
    "abbr[title]": {
        borderBottom: "none",
        textDecoration: "underline"
    },
    "b, strong": {
        fontWeight: "bolder"
    },
    "code, kbp, samp": {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
    },
    dfn: {
        fontStyle: "italic"
    },
    mark: {
        backgroundColor: "#ff0",
        color: "#000"
    },
    small: {
        fontSize: "80%"
    },
    "sub, sup": {
        fontSize: "75%",
        lineHeight: 0,
        position: "relative",
        verticalAlign: "baseline"
    },
    sup: {
        top: "-0.5em"
    },
    sub: {
        bottom: "-0.25em"
    },
    "audio, video": {
        display: "inline-block"
    },
    "audio:not([controls])": {
        display: "none",
        height: 0
    },
    img: {
        borderStyle: "none",
        verticalAlign: "middle"
    },
    "svg:not(:root)": {
        overflow: "hidden"
    },
    "button, input, optgroup, select, textarea": {
        fontFamily: "sans-serif",
        fontSize: "100%",
        lineHeight: "1.15",
        margin: 0
    },
    "button, input": {
        overflow: "visible"
    },
    "button, select": {
        textTransform: "none"
    },
    "button, [type=reset], [type=submit]": {
        WebkitAppearance: "button"
    },
    "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner": {
        borderStyle: "none",
        padding: 0
    },
    "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring": {
        outline: "1px dotted ButtonText"
    },
    legend: {
        boxSizing: "border-box",
        color: "inherit",
        display: "table",
        maxWidth: "100%",
        padding: 0,
        whiteSpace: "normal"
    },
    progress: {
        display: "inline-block",
        verticalAlign: "baseline"
    },
    textarea: {
        overflow: "auto"
    },
    "[type=checkbox], [type=radio]": {
        boxSizing: "border-box",
        padding: 0
    },
    "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button": {
        height: "auto"
    },
    "[type=search]": {
        appearance: "none"
    },
    "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration": {
        appearance: "none"
    },
    "::-webkit-file-upload-button": {
        appearance: "button",
        font: "inherit"
    },
    "details, menu": {
        display: "block"
    },
    summary: {
        display: "list-item"
    },
    canvas: {
        display: "inline-block"
    },
    template: {
        display: "none"
    },
    "[hidden]": {
        display: "none"
    }
};
function b$() {
    return _.createElement($l, {
        styles: P$
    })
}
var O$ = Object.defineProperty
  , wm = Object.getOwnPropertySymbols
  , $$ = Object.prototype.hasOwnProperty
  , E$ = Object.prototype.propertyIsEnumerable
  , _m = (e,t,r)=>t in e ? O$(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Uo = (e,t)=>{
    for (var r in t || (t = {}))
        $$.call(t, r) && _m(e, r, t[r]);
    if (wm)
        for (var r of wm(t))
            E$.call(t, r) && _m(e, r, t[r]);
    return e
}
;
const ra = p.createContext({
    theme: od
});
function qe() {
    var e;
    return ((e = p.useContext(ra)) == null ? void 0 : e.theme) || od
}
function C$(e) {
    const t = qe()
      , r = n=>{
        var o, l;
        return {
            styles: ((o = t.components[n]) == null ? void 0 : o.styles) || {},
            classNames: ((l = t.components[n]) == null ? void 0 : l.classNames) || {}
        }
    }
    ;
    return Array.isArray(e) ? e.map(r) : [r(e)]
}
function F0() {
    var e;
    return (e = p.useContext(ra)) == null ? void 0 : e.emotionCache
}
function F(e, t, r) {
    var n;
    const o = qe()
      , l = (n = o.components[e]) == null ? void 0 : n.defaultProps
      , i = typeof l == "function" ? l(o) : l;
    return Uo(Uo(Uo({}, t), i), M0(r))
}
function dd({theme: e, emotionCache: t, withNormalizeCSS: r=!1, withGlobalStyles: n=!1, withCSSVariables: o=!1, inherit: l=!1, children: i}) {
    const a = p.useContext(ra)
      , s = x$(od, l ? Uo(Uo({}, a.theme), e) : e);
    return _.createElement(l$, {
        theme: s
    }, _.createElement(ra.Provider, {
        value: {
            theme: s,
            emotionCache: t
        }
    }, r && _.createElement(b$, null), n && _.createElement(m$, {
        theme: s
    }), o && _.createElement(g$, {
        theme: s
    }), typeof s.globalStyles == "function" && _.createElement($l, {
        styles: s.globalStyles(s)
    }), i))
}
dd.displayName = "@mantine/core/MantineProvider";
const V0 = p.createContext(null);
function k$() {
    const e = p.useContext(V0);
    if (!e)
        throw new Error("useMantineColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");
    return e
}
function B0({colorScheme: e, toggleColorScheme: t, children: r}) {
    return _.createElement(V0.Provider, {
        value: {
            colorScheme: e,
            toggleColorScheme: t
        }
    }, r)
}
B0.displayName = "@mantine/core/ColorSchemeProvider";
const R$ = {
    app: 100,
    modal: 200,
    popover: 300,
    overlay: 400,
    max: 9999
};
function Ar(e) {
    return R$[e]
}
function N$(e, t) {
    const r = p.useRef();
    return (!r.current || t.length !== r.current.prevDeps.length || r.current.prevDeps.map((n,o)=>n === t[o]).indexOf(!1) >= 0) && (r.current = {
        v: e(),
        prevDeps: [...t]
    }),
    r.current.v
}
const z$ = z0({
    key: "mantine",
    prepend: !0
});
function I$() {
    return F0() || z$
}
var T$ = Object.defineProperty
  , Sm = Object.getOwnPropertySymbols
  , D$ = Object.prototype.hasOwnProperty
  , j$ = Object.prototype.propertyIsEnumerable
  , xm = (e,t,r)=>t in e ? T$(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , L$ = (e,t)=>{
    for (var r in t || (t = {}))
        D$.call(t, r) && xm(e, r, t[r]);
    if (Sm)
        for (var r of Sm(t))
            j$.call(t, r) && xm(e, r, t[r]);
    return e
}
;
const Cc = "ref";
function A$(e) {
    let t;
    if (e.length !== 1)
        return {
            args: e,
            ref: t
        };
    const [r] = e;
    if (!(r instanceof Object))
        return {
            args: e,
            ref: t
        };
    if (!(Cc in r))
        return {
            args: e,
            ref: t
        };
    t = r[Cc];
    const n = L$({}, r);
    return delete n[Cc],
    {
        args: [n],
        ref: t
    }
}
const {cssFactory: M$} = (()=>{
    function e(r, n, o) {
        const l = []
          , i = QO(r, l, o);
        return l.length < 2 ? o : i + n(l)
    }
    function t(r) {
        const {cache: n} = r
          , o = (...i)=>{
            const {ref: a, args: s} = A$(i)
              , c = fd(s, n.registered);
            return j0(n, c, !1),
            `${n.key}-${c.name}${a === void 0 ? "" : ` ${a}`}`
        }
        ;
        return {
            css: o,
            cx: (...i)=>e(n.registered, o, _0(i))
        }
    }
    return {
        cssFactory: t
    }
}
)();
function H0() {
    const e = I$();
    return N$(()=>M$({
        cache: e
    }), [e])
}
function F$({cx: e, classes: t, context: r, classNames: n, name: o, cache: l}) {
    const i = r.reduce((a,s)=>(Object.keys(s.classNames).forEach(c=>{
        typeof a[c] != "string" ? a[c] = `${s.classNames[c]}` : a[c] = `${a[c]} ${s.classNames[c]}`
    }
    ),
    a), {});
    return Object.keys(t).reduce((a,s)=>(a[s] = e(t[s], i[s], n != null && n[s], Array.isArray(o) ? o.filter(Boolean).map(c=>`${(l == null ? void 0 : l.key) || "mantine"}-${c}-${s}`).join(" ") : o ? `${(l == null ? void 0 : l.key) || "mantine"}-${o}-${s}` : null),
    a), {})
}
var V$ = Object.defineProperty
  , Pm = Object.getOwnPropertySymbols
  , B$ = Object.prototype.hasOwnProperty
  , H$ = Object.prototype.propertyIsEnumerable
  , bm = (e,t,r)=>t in e ? V$(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , kc = (e,t)=>{
    for (var r in t || (t = {}))
        B$.call(t, r) && bm(e, r, t[r]);
    if (Pm)
        for (var r of Pm(t))
            H$.call(t, r) && bm(e, r, t[r]);
    return e
}
;
function W$(e) {
    return `__mantine-ref-${e || ""}`
}
function Om(e, t, r) {
    const n = o=>typeof o == "function" ? o(t, r || {}) : o || {};
    return Array.isArray(e) ? e.map(o=>n(o.styles)).reduce((o,l)=>(Object.keys(l).forEach(i=>{
        o[i] ? o[i] = kc(kc({}, o[i]), l[i]) : o[i] = kc({}, l[i])
    }
    ),
    o), {}) : n(e)
}
function G(e) {
    const t = typeof e == "function" ? e : ()=>e;
    function r(n, o) {
        const l = qe()
          , i = C$(o == null ? void 0 : o.name)
          , a = F0()
          , {css: s, cx: c} = H0()
          , f = t(l, n, W$)
          , u = Om(o == null ? void 0 : o.styles, l, n)
          , d = Om(i, l, n)
          , m = Object.fromEntries(Object.keys(f).map(g=>{
            const y = c({
                [s(f[g])]: !(o != null && o.unstyled)
            }, s(d[g]), s(u[g]));
            return [g, y]
        }
        ));
        return {
            classes: F$({
                cx: c,
                classes: m,
                context: i,
                classNames: o == null ? void 0 : o.classNames,
                name: o == null ? void 0 : o.name,
                cache: a
            }),
            cx: c,
            theme: l
        }
    }
    return r
}
function W0({styles: e}) {
    const t = qe();
    return _.createElement($l, {
        styles: i$(typeof e == "function" ? e(t) : e)
    })
}
var U$ = Object.defineProperty
  , Y$ = Object.defineProperties
  , G$ = Object.getOwnPropertyDescriptors
  , $m = Object.getOwnPropertySymbols
  , Q$ = Object.prototype.hasOwnProperty
  , X$ = Object.prototype.propertyIsEnumerable
  , Em = (e,t,r)=>t in e ? U$(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , $o = (e,t)=>{
    for (var r in t || (t = {}))
        Q$.call(t, r) && Em(e, r, t[r]);
    if ($m)
        for (var r of $m(t))
            X$.call(t, r) && Em(e, r, t[r]);
    return e
}
  , Eo = (e,t)=>Y$(e, G$(t));
const Co = {
    in: {
        opacity: 1,
        transform: "scale(1)"
    },
    out: {
        opacity: 0,
        transform: "scale(.9) translateY(10px)"
    },
    transitionProperty: "transform, opacity"
}
  , ri = {
    fade: {
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        },
        transitionProperty: "opacity"
    },
    scale: {
        in: {
            opacity: 1,
            transform: "scale(1)"
        },
        out: {
            opacity: 0,
            transform: "scale(0)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "scale-y": {
        in: {
            opacity: 1,
            transform: "scaleY(1)"
        },
        out: {
            opacity: 0,
            transform: "scaleY(0)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "scale-x": {
        in: {
            opacity: 1,
            transform: "scaleX(1)"
        },
        out: {
            opacity: 0,
            transform: "scaleX(0)"
        },
        common: {
            transformOrigin: "left"
        },
        transitionProperty: "transform, opacity"
    },
    "skew-up": {
        in: {
            opacity: 1,
            transform: "translateY(0) skew(0deg, 0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(-20px) skew(-10deg, -5deg)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "skew-down": {
        in: {
            opacity: 1,
            transform: "translateY(0) skew(0deg, 0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(20px) skew(-10deg, -5deg)"
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "rotate-left": {
        in: {
            opacity: 1,
            transform: "translateY(0) rotate(0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(20px) rotate(-5deg)"
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "rotate-right": {
        in: {
            opacity: 1,
            transform: "translateY(0) rotate(0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(20px) rotate(5deg)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-down": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(-100%)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-up": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(100%)"
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-left": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(100%)"
        },
        common: {
            transformOrigin: "left"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-right": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(-100%)"
        },
        common: {
            transformOrigin: "right"
        },
        transitionProperty: "transform, opacity"
    },
    pop: Eo($o({}, Co), {
        common: {
            transformOrigin: "center center"
        }
    }),
    "pop-bottom-left": Eo($o({}, Co), {
        common: {
            transformOrigin: "bottom left"
        }
    }),
    "pop-bottom-right": Eo($o({}, Co), {
        common: {
            transformOrigin: "bottom right"
        }
    }),
    "pop-top-left": Eo($o({}, Co), {
        common: {
            transformOrigin: "top left"
        }
    }),
    "pop-top-right": Eo($o({}, Co), {
        common: {
            transformOrigin: "top right"
        }
    })
}
  , Cm = ["mousedown", "touchstart"];
function K$(e, t, r) {
    const n = p.useRef();
    return p.useEffect(()=>{
        const o = l=>{
            const {target: i} = l ?? {};
            if (Array.isArray(r)) {
                const a = (i == null ? void 0 : i.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(i) && i.tagName !== "HTML";
                r.every(c=>!!c && !l.composedPath().includes(c)) && !a && e()
            } else
                n.current && !n.current.contains(i) && e()
        }
        ;
        return (t || Cm).forEach(l=>document.addEventListener(l, o)),
        ()=>{
            (t || Cm).forEach(l=>document.removeEventListener(l, o))
        }
    }
    , [n, e, r]),
    n
}
function Z$(e, t) {
    try {
        return e.addEventListener("change", t),
        ()=>e.removeEventListener("change", t)
    } catch {
        return e.addListener(t),
        ()=>e.removeListener(t)
    }
}
function J$(e, t) {
    return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia"in window ? window.matchMedia(e).matches : !1
}
function q$(e, t, {getInitialValueInEffect: r}={
    getInitialValueInEffect: !0
}) {
    const [n,o] = p.useState(r ? t : J$(e, t))
      , l = p.useRef();
    return p.useEffect(()=>{
        if ("matchMedia"in window)
            return l.current = window.matchMedia(e),
            o(l.current.matches),
            Z$(l.current, i=>o(i.matches))
    }
    , [e]),
    n
}
const U0 = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function Qt(e, t) {
    const r = p.useRef(!1);
    p.useEffect(()=>()=>{
        r.current = !1
    }
    , []),
    p.useEffect(()=>{
        if (r.current)
            return e();
        r.current = !0
    }
    , t)
}
function Y0({opened: e, shouldReturnFocus: t=!0}) {
    const r = p.useRef()
      , n = ()=>{
        var o;
        r.current && "focus"in r.current && typeof r.current.focus == "function" && ((o = r.current) == null || o.focus({
            preventScroll: !0
        }))
    }
    ;
    return Qt(()=>{
        let o = -1;
        const l = i=>{
            i.key === "Tab" && window.clearTimeout(o)
        }
        ;
        return document.addEventListener("keydown", l),
        e ? r.current = document.activeElement : t && (o = window.setTimeout(n, 10)),
        ()=>{
            window.clearTimeout(o),
            document.removeEventListener("keydown", l)
        }
    }
    , [e, t]),
    n
}
const eE = /input|select|textarea|button|object/
  , G0 = "a, input, select, textarea, button, object, [tabindex]";
function tE(e) {
    return e.style.display === "none"
}
function rE(e) {
    if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
        return !1;
    let r = e;
    for (; r && !(r === document.body || r.nodeType === 11); ) {
        if (tE(r))
            return !1;
        r = r.parentNode
    }
    return !0
}
function Q0(e) {
    let t = e.getAttribute("tabindex");
    return t === null && (t = void 0),
    parseInt(t, 10)
}
function Hu(e) {
    const t = e.nodeName.toLowerCase()
      , r = !Number.isNaN(Q0(e));
    return (eE.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || r) && rE(e)
}
function X0(e) {
    const t = Q0(e);
    return (Number.isNaN(t) || t >= 0) && Hu(e)
}
function nE(e) {
    return Array.from(e.querySelectorAll(G0)).filter(X0)
}
function oE(e, t) {
    const r = nE(e);
    if (!r.length) {
        t.preventDefault();
        return
    }
    const n = r[t.shiftKey ? 0 : r.length - 1]
      , o = e.getRootNode();
    if (!(n === o.activeElement || e === o.activeElement))
        return;
    t.preventDefault();
    const i = r[t.shiftKey ? r.length - 1 : 0];
    i && i.focus()
}
function lE(e, t="body > :not(script)") {
    const r = Array.from(document.querySelectorAll(t)).map(n=>{
        var o;
        if ((o = n == null ? void 0 : n.shadowRoot) != null && o.contains(e) || n.contains(e))
            return;
        const l = n.getAttribute("aria-hidden");
        return (l === null || l === "false") && n.setAttribute("aria-hidden", "true"),
        {
            node: n,
            ariaHidden: l
        }
    }
    );
    return ()=>{
        r.forEach(n=>{
            n && (n.ariaHidden === null ? n.node.removeAttribute("aria-hidden") : n.node.setAttribute("aria-hidden", n.ariaHidden))
        }
        )
    }
}
function K0(e=!0) {
    const t = p.useRef()
      , r = p.useRef(null)
      , n = p.useCallback(o=>{
        if (e && o !== null && (r.current = lE(o),
        t.current !== o))
            if (o) {
                const l = ()=>{
                    let i = o.querySelector("[data-autofocus]");
                    if (!i) {
                        const a = Array.from(o.querySelectorAll(G0));
                        i = a.find(X0) || a.find(Hu) || null,
                        !i && Hu(o) && (i = o)
                    }
                    i && i.focus({
                        preventScroll: !0
                    })
                }
                ;
                setTimeout(()=>{
                    o.getRootNode() && l()
                }
                ),
                t.current = o
            } else
                t.current = null
    }
    , [e]);
    return p.useEffect(()=>{
        if (!e)
            return;
        const o = l=>{
            l.key === "Tab" && t.current && oE(t.current, l)
        }
        ;
        return document.addEventListener("keydown", o),
        ()=>{
            document.removeEventListener("keydown", o),
            r.current && r.current()
        }
    }
    , [e]),
    n
}
const iE = ()=>`mantine-${Math.random().toString(36).slice(2, 11)}`
  , aE = _["useId".toString()] || (()=>{}
);
function sE() {
    const [e,t] = p.useState("");
    return U0(()=>{
        t(iE())
    }
    , []),
    e
}
function cE() {
    const e = aE();
    return e ? `mantine-${e.replace(/:/g, "")}` : ""
}
function El(e) {
    return typeof e == "string" ? e : cE() || sE()
}
function gl(e, t, r) {
    p.useEffect(()=>(window.addEventListener(e, t, r),
    ()=>window.removeEventListener(e, t, r)), [e, t])
}
function uE(e, t) {
    try {
        return JSON.stringify(e)
    } catch {
        throw new Error(`@mantine/hooks ${t}: Failed to serialize the value`)
    }
}
function fE(e) {
    try {
        return JSON.parse(e)
    } catch {
        return e
    }
}
function dE(e, t) {
    const r = e === "localStorage" ? "mantine-local-storage" : "mantine-session-storage";
    return function({key: o, defaultValue: l=void 0, getInitialValueInEffect: i=!0, deserialize: a=fE, serialize: s=c=>uE(c, t)}) {
        const c = p.useCallback(g=>{
            if (typeof window > "u" || !(e in window) || window[e] === null || g)
                return l;
            const y = window[e].getItem(o);
            return y !== null ? a(y) : l
        }
        , [o, l])
          , [f,u] = p.useState(c(i))
          , d = p.useCallback(g=>{
            g instanceof Function ? u(y=>{
                const x = g(y);
                return window[e].setItem(o, s(x)),
                window.dispatchEvent(new CustomEvent(r,{
                    detail: {
                        key: o,
                        value: g(y)
                    }
                })),
                x
            }
            ) : (window[e].setItem(o, s(g)),
            window.dispatchEvent(new CustomEvent(r,{
                detail: {
                    key: o,
                    value: g
                }
            })),
            u(g))
        }
        , [o])
          , m = p.useCallback(()=>{
            window[e].removeItem(o)
        }
        , []);
        return gl("storage", g=>{
            var y;
            g.storageArea === window[e] && g.key === o && u(a((y = g.newValue) != null ? y : void 0))
        }
        ),
        gl(r, g=>{
            g.detail.key === o && u(g.detail.value)
        }
        ),
        p.useEffect(()=>{
            l !== void 0 && f === void 0 && d(l)
        }
        , [l, f, d]),
        p.useEffect(()=>{
            i && u(c())
        }
        , []),
        [f === void 0 ? l : f, d, m]
    }
}
function Ds(e) {
    return dE("localStorage", "use-local-storage")(e)
}
function pE(e, t) {
    typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current"in e && (e.current = t)
}
function mE(...e) {
    return t=>{
        e.forEach(r=>pE(r, t))
    }
}
function co(...e) {
    return p.useCallback(mE(...e), e)
}
function Wu({value: e, defaultValue: t, finalValue: r, onChange: n=()=>{}
}) {
    const [o,l] = p.useState(t !== void 0 ? t : r)
      , i = a=>{
        l(a),
        n == null || n(a)
    }
    ;
    return e !== void 0 ? [e, n, !0] : [o, i, !1]
}
function Z0(e, t) {
    return q$("(prefers-reduced-motion: reduce)", e, t)
}
const gE = e=>e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
  , vE = ({axis: e, target: t, parent: r, alignment: n, offset: o, isList: l})=>{
    if (!t || !r && typeof document > "u")
        return 0;
    const i = !!r
      , s = (r || document.body).getBoundingClientRect()
      , c = t.getBoundingClientRect()
      , f = u=>c[u] - s[u];
    if (e === "y") {
        const u = f("top");
        if (u === 0)
            return 0;
        if (n === "start") {
            const m = u - o;
            return m <= c.height * (l ? 0 : 1) || !l ? m : 0
        }
        const d = i ? s.height : window.innerHeight;
        if (n === "end") {
            const m = u + o - d + c.height;
            return m >= -c.height * (l ? 0 : 1) || !l ? m : 0
        }
        return n === "center" ? u - d / 2 + c.height / 2 : 0
    }
    if (e === "x") {
        const u = f("left");
        if (u === 0)
            return 0;
        if (n === "start") {
            const m = u - o;
            return m <= c.width || !l ? m : 0
        }
        const d = i ? s.width : window.innerWidth;
        if (n === "end") {
            const m = u + o - d + c.width;
            return m >= -c.width || !l ? m : 0
        }
        return n === "center" ? u - d / 2 + c.width / 2 : 0
    }
    return 0
}
  , hE = ({axis: e, parent: t})=>{
    if (!t && typeof document > "u")
        return 0;
    const r = e === "y" ? "scrollTop" : "scrollLeft";
    if (t)
        return t[r];
    const {body: n, documentElement: o} = document;
    return n[r] + o[r]
}
  , yE = ({axis: e, parent: t, distance: r})=>{
    if (!t && typeof document > "u")
        return;
    const n = e === "y" ? "scrollTop" : "scrollLeft";
    if (t)
        t[n] = r;
    else {
        const {body: o, documentElement: l} = document;
        o[n] = r,
        l[n] = r
    }
}
;
function wE({duration: e=1250, axis: t="y", onScrollFinish: r, easing: n=gE, offset: o=0, cancelable: l=!0, isList: i=!1}={}) {
    const a = p.useRef(0)
      , s = p.useRef(0)
      , c = p.useRef(!1)
      , f = p.useRef(null)
      , u = p.useRef(null)
      , d = Z0()
      , m = ()=>{
        a.current && cancelAnimationFrame(a.current)
    }
      , g = p.useCallback(({alignment: x="start"}={})=>{
        var h;
        c.current = !1,
        a.current && m();
        const v = (h = hE({
            parent: f.current,
            axis: t
        })) != null ? h : 0
          , w = vE({
            parent: f.current,
            target: u.current,
            axis: t,
            alignment: x,
            offset: o,
            isList: i
        }) - (f.current ? 0 : v);
        function S() {
            s.current === 0 && (s.current = performance.now());
            const O = performance.now() - s.current
              , b = d || e === 0 ? 1 : O / e
              , $ = v + w * n(b);
            yE({
                parent: f.current,
                axis: t,
                distance: $
            }),
            !c.current && b < 1 ? a.current = requestAnimationFrame(S) : (typeof r == "function" && r(),
            s.current = 0,
            a.current = 0,
            m())
        }
        S()
    }
    , [t, e, n, i, o, r, d])
      , y = ()=>{
        l && (c.current = !0)
    }
    ;
    return gl("wheel", y, {
        passive: !0
    }),
    gl("touchmove", y, {
        passive: !0
    }),
    p.useEffect(()=>m, []),
    {
        scrollableRef: f,
        targetRef: u,
        scrollIntoView: g,
        cancel: m
    }
}
function _E() {
    if (typeof window > "u" || typeof document > "u")
        return 0;
    const e = parseInt(window.getComputedStyle(document.body).paddingRight, 10)
      , t = window.innerWidth - document.documentElement.clientWidth;
    return e + t
}
const SE = ({disableBodyPadding: e})=>{
    const t = e ? null : _E();
    return `body {
        --removed-scroll-width: ${t}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${t ? "padding-right: var(--removed-scroll-width) !important;" : ""}
        `
}
;
function xE(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function PE(e) {
    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
}
function bE() {
    const e = document.createElement("style");
    return e.type = "text/css",
    e.setAttribute("mantine-scroll-lock", ""),
    e
}
function OE(e, t={
    disableBodyPadding: !1
}) {
    const [r,n] = p.useState(e || !1)
      , o = p.useRef(0)
      , {disableBodyPadding: l} = t
      , i = p.useRef(null)
      , a = ()=>{
        o.current = window.scrollY;
        const c = SE({
            disableBodyPadding: l
        })
          , f = bE();
        xE(f, c),
        PE(f),
        i.current = f
    }
      , s = ()=>{
        i != null && i.current && (i.current.parentNode.removeChild(i.current),
        i.current = null)
    }
    ;
    return p.useEffect(()=>(r ? a() : s(),
    s), [r]),
    p.useEffect(()=>{
        e !== void 0 && n(e)
    }
    , [e]),
    p.useEffect(()=>{
        e === void 0 && typeof window < "u" && window.document.body.style.overflow === "hidden" && n(!0)
    }
    , [n]),
    [r, n]
}
function $E() {
    return `mantine-${Math.random().toString(36).slice(2, 11)}`
}
var km = Object.getOwnPropertySymbols
  , EE = Object.prototype.hasOwnProperty
  , CE = Object.prototype.propertyIsEnumerable
  , kE = (e,t)=>{
    var r = {};
    for (var n in e)
        EE.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && km)
        for (var n of km(e))
            t.indexOf(n) < 0 && CE.call(e, n) && (r[n] = e[n]);
    return r
}
;
function js(e) {
    const t = e
      , {m: r, mx: n, my: o, mt: l, mb: i, ml: a, mr: s, p: c, px: f, py: u, pt: d, pb: m, pl: g, pr: y, bg: x, c: h, opacity: v, ff: w, fz: S, fw: P, lts: O, ta: b, lh: $, fs: E, tt: k, td: j, w: T, miw: L, maw: A, h: B, mih: U, mah: Q, bgsz: R, bgp: z, bgr: D, bga: W, pos: ee, top: Z, left: $e, bottom: Ee, right: ne, inset: Me, display: Mt} = t
      , vt = kE(t, ["m", "mx", "my", "mt", "mb", "ml", "mr", "p", "px", "py", "pt", "pb", "pl", "pr", "bg", "c", "opacity", "ff", "fz", "fw", "lts", "ta", "lh", "fs", "tt", "td", "w", "miw", "maw", "h", "mih", "mah", "bgsz", "bgp", "bgr", "bga", "pos", "top", "left", "bottom", "right", "inset", "display"]);
    return {
        systemStyles: M0({
            m: r,
            mx: n,
            my: o,
            mt: l,
            mb: i,
            ml: a,
            mr: s,
            p: c,
            px: f,
            py: u,
            pt: d,
            pb: m,
            pl: g,
            pr: y,
            bg: x,
            c: h,
            opacity: v,
            ff: w,
            fz: S,
            fw: P,
            lts: O,
            ta: b,
            lh: $,
            fs: E,
            tt: k,
            td: j,
            w: T,
            miw: L,
            maw: A,
            h: B,
            mih: U,
            mah: Q,
            bgsz: R,
            bgp: z,
            bgr: D,
            bga: W,
            pos: ee,
            top: Z,
            left: $e,
            bottom: Ee,
            right: ne,
            inset: Me,
            display: Mt
        }),
        rest: vt
    }
}
function RE(e, t) {
    const r = Object.keys(e).filter(n=>n !== "base").sort((n,o)=>t.fn.size({
        size: n,
        sizes: t.breakpoints
    }) - t.fn.size({
        size: o,
        sizes: t.breakpoints
    }));
    return "base"in e ? ["base", ...r] : r
}
function NE({value: e, theme: t, getValue: r, property: n}) {
    if (e == null)
        return;
    if (typeof e == "object")
        return RE(e, t).reduce((i,a)=>{
            if (a === "base" && e.base !== void 0) {
                const c = r(e.base, t);
                return Array.isArray(n) ? (n.forEach(f=>{
                    i[f] = c
                }
                ),
                i) : (i[n] = c,
                i)
            }
            const s = r(e[a], t);
            return Array.isArray(n) ? (i[t.fn.largerThan(a)] = {},
            n.forEach(c=>{
                i[t.fn.largerThan(a)][c] = s
            }
            ),
            i) : (i[t.fn.largerThan(a)] = {
                [n]: s
            },
            i)
        }
        , {});
    const o = r(e, t);
    return Array.isArray(n) ? n.reduce((l,i)=>(l[i] = o,
    l), {}) : {
        [n]: o
    }
}
function zE(e, t) {
    return e === "dimmed" ? t.colorScheme === "dark" ? t.colors.dark[2] : t.colors.gray[6] : t.fn.variant({
        variant: "filled",
        color: e,
        primaryFallback: !1
    }).background
}
function IE(e) {
    return e
}
function TE(e, t) {
    return t.fn.size({
        size: e,
        sizes: t.fontSizes
    })
}
const DE = ["-xs", "-sm", "-md", "-lg", "-xl"];
function jE(e, t) {
    return DE.includes(e) ? t.fn.size({
        size: e.replace("-", ""),
        sizes: t.spacing
    }) * -1 : t.fn.size({
        size: e,
        sizes: t.spacing
    })
}
const LE = {
    color: zE,
    default: IE,
    fontSize: TE,
    spacing: jE
}
  , AE = {
    m: {
        type: "spacing",
        property: "margin"
    },
    mt: {
        type: "spacing",
        property: "marginTop"
    },
    mb: {
        type: "spacing",
        property: "marginBottom"
    },
    ml: {
        type: "spacing",
        property: "marginLeft"
    },
    mr: {
        type: "spacing",
        property: "marginRight"
    },
    mx: {
        type: "spacing",
        property: ["marginRight", "marginLeft"]
    },
    my: {
        type: "spacing",
        property: ["marginTop", "marginBottom"]
    },
    p: {
        type: "spacing",
        property: "padding"
    },
    pt: {
        type: "spacing",
        property: "paddingTop"
    },
    pb: {
        type: "spacing",
        property: "paddingBottom"
    },
    pl: {
        type: "spacing",
        property: "paddingLeft"
    },
    pr: {
        type: "spacing",
        property: "paddingRight"
    },
    px: {
        type: "spacing",
        property: ["paddingRight", "paddingLeft"]
    },
    py: {
        type: "spacing",
        property: ["paddingTop", "paddingBottom"]
    },
    bg: {
        type: "color",
        property: "background"
    },
    c: {
        type: "color",
        property: "color"
    },
    opacity: {
        type: "default",
        property: "opacity"
    },
    ff: {
        type: "default",
        property: "fontFamily"
    },
    fz: {
        type: "fontSize",
        property: "fontSize"
    },
    fw: {
        type: "default",
        property: "fontWeight"
    },
    lts: {
        type: "default",
        property: "letterSpacing"
    },
    ta: {
        type: "default",
        property: "textAlign"
    },
    lh: {
        type: "default",
        property: "lineHeight"
    },
    fs: {
        type: "default",
        property: "fontStyle"
    },
    tt: {
        type: "default",
        property: "textTransform"
    },
    td: {
        type: "default",
        property: "textDecoration"
    },
    w: {
        type: "spacing",
        property: "width"
    },
    miw: {
        type: "spacing",
        property: "minWidth"
    },
    maw: {
        type: "spacing",
        property: "maxWidth"
    },
    h: {
        type: "spacing",
        property: "height"
    },
    mih: {
        type: "spacing",
        property: "minHeight"
    },
    mah: {
        type: "spacing",
        property: "maxHeight"
    },
    bgsz: {
        type: "default",
        property: "background-size"
    },
    bgp: {
        type: "default",
        property: "background-position"
    },
    bgr: {
        type: "default",
        property: "background-repeat"
    },
    bga: {
        type: "default",
        property: "background-attachment"
    },
    pos: {
        type: "default",
        property: "position"
    },
    top: {
        type: "default",
        property: "top"
    },
    left: {
        type: "default",
        property: "left"
    },
    bottom: {
        type: "default",
        property: "bottom"
    },
    right: {
        type: "default",
        property: "right"
    },
    inset: {
        type: "default",
        property: "inset"
    },
    display: {
        type: "default",
        property: "display"
    }
};
var ME = Object.defineProperty
  , Rm = Object.getOwnPropertySymbols
  , FE = Object.prototype.hasOwnProperty
  , VE = Object.prototype.propertyIsEnumerable
  , Nm = (e,t,r)=>t in e ? ME(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , zm = (e,t)=>{
    for (var r in t || (t = {}))
        FE.call(t, r) && Nm(e, r, t[r]);
    if (Rm)
        for (var r of Rm(t))
            VE.call(t, r) && Nm(e, r, t[r]);
    return e
}
;
function Uu(e, t, r=AE) {
    return Object.keys(r).reduce((o,l)=>(l in e && e[l] !== void 0 && o.push(NE({
        value: e[l],
        getValue: LE[r[l].type],
        property: r[l].property,
        theme: t
    })),
    o), []).reduce((o,l)=>(Object.keys(l).forEach(i=>{
        typeof l[i] == "object" && l[i] !== null && i in o ? o[i] = zm(zm({}, o[i]), l[i]) : o[i] = l[i]
    }
    ),
    o), {})
}
function Im(e, t) {
    return typeof e == "function" ? e(t) : e
}
function BE(e, t, r) {
    const n = qe()
      , {css: o, cx: l} = H0();
    return Array.isArray(e) ? l(r, o(Uu(t, n)), e.map(i=>o(Im(i, n)))) : l(r, o(Im(e, n)), o(Uu(t, n)))
}
var HE = Object.defineProperty
  , na = Object.getOwnPropertySymbols
  , J0 = Object.prototype.hasOwnProperty
  , q0 = Object.prototype.propertyIsEnumerable
  , Tm = (e,t,r)=>t in e ? HE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , WE = (e,t)=>{
    for (var r in t || (t = {}))
        J0.call(t, r) && Tm(e, r, t[r]);
    if (na)
        for (var r of na(t))
            q0.call(t, r) && Tm(e, r, t[r]);
    return e
}
  , UE = (e,t)=>{
    var r = {};
    for (var n in e)
        J0.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && na)
        for (var n of na(e))
            t.indexOf(n) < 0 && q0.call(e, n) && (r[n] = e[n]);
    return r
}
;
const e1 = p.forwardRef((e,t)=>{
    var r = e
      , {className: n, component: o, style: l, sx: i} = r
      , a = UE(r, ["className", "component", "style", "sx"]);
    const {systemStyles: s, rest: c} = js(a)
      , f = o || "div";
    return _.createElement(f, WE({
        ref: t,
        className: BE(i, s, n),
        style: l
    }, c))
}
);
e1.displayName = "@mantine/core/Box";
const K = e1;
var YE = Object.defineProperty
  , GE = Object.defineProperties
  , QE = Object.getOwnPropertyDescriptors
  , Dm = Object.getOwnPropertySymbols
  , XE = Object.prototype.hasOwnProperty
  , KE = Object.prototype.propertyIsEnumerable
  , jm = (e,t,r)=>t in e ? YE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Lm = (e,t)=>{
    for (var r in t || (t = {}))
        XE.call(t, r) && jm(e, r, t[r]);
    if (Dm)
        for (var r of Dm(t))
            KE.call(t, r) && jm(e, r, t[r]);
    return e
}
  , ZE = (e,t)=>GE(e, QE(t))
  , JE = G(e=>({
    root: ZE(Lm(Lm({}, e.fn.focusStyles()), e.fn.fontStyles()), {
        cursor: "pointer",
        border: 0,
        padding: 0,
        appearance: "none",
        fontSize: e.fontSizes.md,
        backgroundColor: "transparent",
        textAlign: "left",
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        textDecoration: "none",
        boxSizing: "border-box"
    })
}));
const qE = JE;
var e2 = Object.defineProperty
  , oa = Object.getOwnPropertySymbols
  , t1 = Object.prototype.hasOwnProperty
  , r1 = Object.prototype.propertyIsEnumerable
  , Am = (e,t,r)=>t in e ? e2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , t2 = (e,t)=>{
    for (var r in t || (t = {}))
        t1.call(t, r) && Am(e, r, t[r]);
    if (oa)
        for (var r of oa(t))
            r1.call(t, r) && Am(e, r, t[r]);
    return e
}
  , r2 = (e,t)=>{
    var r = {};
    for (var n in e)
        t1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && oa)
        for (var n of oa(e))
            t.indexOf(n) < 0 && r1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const n1 = p.forwardRef((e,t)=>{
    const r = F("UnstyledButton", {}, e)
      , {className: n, component: o="button", unstyled: l} = r
      , i = r2(r, ["className", "component", "unstyled"])
      , {classes: a, cx: s} = qE(null, {
        name: "UnstyledButton",
        unstyled: l
    });
    return _.createElement(K, t2({
        component: o,
        ref: t,
        className: s(a.root, n),
        type: o === "button" ? "button" : void 0
    }, i))
}
);
n1.displayName = "@mantine/core/UnstyledButton";
const Ls = n1;
var n2 = Object.defineProperty
  , o2 = Object.defineProperties
  , l2 = Object.getOwnPropertyDescriptors
  , Mm = Object.getOwnPropertySymbols
  , i2 = Object.prototype.hasOwnProperty
  , a2 = Object.prototype.propertyIsEnumerable
  , Fm = (e,t,r)=>t in e ? n2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , o1 = (e,t)=>{
    for (var r in t || (t = {}))
        i2.call(t, r) && Fm(e, r, t[r]);
    if (Mm)
        for (var r of Mm(t))
            a2.call(t, r) && Fm(e, r, t[r]);
    return e
}
  , s2 = (e,t)=>o2(e, l2(t));
const To = {
    xs: 18,
    sm: 22,
    md: 28,
    lg: 34,
    xl: 44
};
function c2({variant: e, theme: t, color: r, gradient: n}) {
    const o = t.fn.variant({
        color: r,
        variant: e,
        gradient: n
    });
    return e === "gradient" ? {
        border: 0,
        backgroundImage: o.background,
        color: o.color,
        "&:hover": t.fn.hover({
            backgroundSize: "200%"
        })
    } : o1({
        border: `1px solid ${o.border}`,
        backgroundColor: o.background,
        color: o.color
    }, t.fn.hover({
        backgroundColor: o.hover
    }))
}
var u2 = G((e,{color: t, size: r, radius: n, variant: o, gradient: l})=>({
    root: s2(o1({}, c2({
        variant: o,
        theme: e,
        color: t,
        gradient: l
    })), {
        position: "relative",
        height: e.fn.size({
            size: r,
            sizes: To
        }),
        minHeight: e.fn.size({
            size: r,
            sizes: To
        }),
        width: e.fn.size({
            size: r,
            sizes: To
        }),
        minWidth: e.fn.size({
            size: r,
            sizes: To
        }),
        borderRadius: e.fn.radius(n),
        padding: 0,
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:active": e.activeStyles,
        "&:disabled, &[data-disabled]": {
            color: e.colors.gray[e.colorScheme === "dark" ? 6 : 4],
            cursor: "not-allowed",
            backgroundColor: o === "transparent" ? void 0 : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
            borderColor: o === "transparent" ? void 0 : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
            backgroundImage: "none",
            pointerEvents: "none",
            "&:active": {
                transform: "none"
            }
        },
        "&[data-loading]": {
            pointerEvents: "none",
            "&::before": {
                content: '""',
                position: "absolute",
                top: -1,
                left: -1,
                right: -1,
                bottom: -1,
                backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.colors.dark[7], .5) : "rgba(255, 255, 255, .5)",
                borderRadius: e.fn.radius(n),
                cursor: "not-allowed"
            }
        }
    })
}));
const f2 = u2;
var d2 = Object.defineProperty
  , la = Object.getOwnPropertySymbols
  , l1 = Object.prototype.hasOwnProperty
  , i1 = Object.prototype.propertyIsEnumerable
  , Vm = (e,t,r)=>t in e ? d2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , p2 = (e,t)=>{
    for (var r in t || (t = {}))
        l1.call(t, r) && Vm(e, r, t[r]);
    if (la)
        for (var r of la(t))
            i1.call(t, r) && Vm(e, r, t[r]);
    return e
}
  , m2 = (e,t)=>{
    var r = {};
    for (var n in e)
        l1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && la)
        for (var n of la(e))
            t.indexOf(n) < 0 && i1.call(e, n) && (r[n] = e[n]);
    return r
}
;
function g2(e) {
    var t = e
      , {size: r, color: n} = t
      , o = m2(t, ["size", "color"]);
    return _.createElement("svg", p2({
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        fill: n,
        width: `${r}px`
    }, o), _.createElement("rect", {
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, _.createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), _.createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), _.createElement("rect", {
        x: "30",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, _.createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), _.createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), _.createElement("rect", {
        x: "60",
        width: "15",
        height: "140",
        rx: "6"
    }, _.createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), _.createElement("animate", {
        attributeName: "y",
        begin: "0s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), _.createElement("rect", {
        x: "90",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, _.createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), _.createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), _.createElement("rect", {
        x: "120",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, _.createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), _.createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })))
}
var v2 = Object.defineProperty
  , ia = Object.getOwnPropertySymbols
  , a1 = Object.prototype.hasOwnProperty
  , s1 = Object.prototype.propertyIsEnumerable
  , Bm = (e,t,r)=>t in e ? v2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , h2 = (e,t)=>{
    for (var r in t || (t = {}))
        a1.call(t, r) && Bm(e, r, t[r]);
    if (ia)
        for (var r of ia(t))
            s1.call(t, r) && Bm(e, r, t[r]);
    return e
}
  , y2 = (e,t)=>{
    var r = {};
    for (var n in e)
        a1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ia)
        for (var n of ia(e))
            t.indexOf(n) < 0 && s1.call(e, n) && (r[n] = e[n]);
    return r
}
;
function w2(e) {
    var t = e
      , {size: r, color: n} = t
      , o = y2(t, ["size", "color"]);
    return _.createElement("svg", h2({
        width: `${r}px`,
        height: `${r}px`,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: n
    }, o), _.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, _.createElement("g", {
        transform: "translate(2.5 2.5)",
        strokeWidth: "5"
    }, _.createElement("circle", {
        strokeOpacity: ".5",
        cx: "16",
        cy: "16",
        r: "16"
    }), _.createElement("path", {
        d: "M32 16c0-9.94-8.06-16-16-16"
    }, _.createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 16 16",
        to: "360 16 16",
        dur: "1s",
        repeatCount: "indefinite"
    })))))
}
var _2 = Object.defineProperty
  , aa = Object.getOwnPropertySymbols
  , c1 = Object.prototype.hasOwnProperty
  , u1 = Object.prototype.propertyIsEnumerable
  , Hm = (e,t,r)=>t in e ? _2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , S2 = (e,t)=>{
    for (var r in t || (t = {}))
        c1.call(t, r) && Hm(e, r, t[r]);
    if (aa)
        for (var r of aa(t))
            u1.call(t, r) && Hm(e, r, t[r]);
    return e
}
  , x2 = (e,t)=>{
    var r = {};
    for (var n in e)
        c1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && aa)
        for (var n of aa(e))
            t.indexOf(n) < 0 && u1.call(e, n) && (r[n] = e[n]);
    return r
}
;
function P2(e) {
    var t = e
      , {size: r, color: n} = t
      , o = x2(t, ["size", "color"]);
    return _.createElement("svg", S2({
        width: `${r}px`,
        height: `${r / 4}px`,
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: n
    }, o), _.createElement("circle", {
        cx: "15",
        cy: "15",
        r: "15"
    }, _.createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), _.createElement("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), _.createElement("circle", {
        cx: "60",
        cy: "15",
        r: "9",
        fillOpacity: "0.3"
    }, _.createElement("animate", {
        attributeName: "r",
        from: "9",
        to: "9",
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), _.createElement("animate", {
        attributeName: "fill-opacity",
        from: "0.5",
        to: "0.5",
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite"
    })), _.createElement("circle", {
        cx: "105",
        cy: "15",
        r: "15"
    }, _.createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), _.createElement("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })))
}
var b2 = Object.defineProperty
  , sa = Object.getOwnPropertySymbols
  , f1 = Object.prototype.hasOwnProperty
  , d1 = Object.prototype.propertyIsEnumerable
  , Wm = (e,t,r)=>t in e ? b2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , O2 = (e,t)=>{
    for (var r in t || (t = {}))
        f1.call(t, r) && Wm(e, r, t[r]);
    if (sa)
        for (var r of sa(t))
            d1.call(t, r) && Wm(e, r, t[r]);
    return e
}
  , $2 = (e,t)=>{
    var r = {};
    for (var n in e)
        f1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && sa)
        for (var n of sa(e))
            t.indexOf(n) < 0 && d1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const Rc = {
    bars: g2,
    oval: w2,
    dots: P2
}
  , E2 = {
    xs: 18,
    sm: 22,
    md: 36,
    lg: 44,
    xl: 58
}
  , C2 = {
    size: "md"
};
function pd(e) {
    const t = F("Loader", C2, e)
      , {size: r, color: n, variant: o} = t
      , l = $2(t, ["size", "color", "variant"])
      , i = qe()
      , a = o in Rc ? o : i.loader;
    return _.createElement(K, O2({
        role: "presentation",
        component: Rc[a] || Rc.bars,
        size: i.fn.size({
            size: r,
            sizes: E2
        }),
        color: i.fn.variant({
            variant: "filled",
            primaryFallback: !1,
            color: n || i.primaryColor
        }).background
    }, l))
}
pd.displayName = "@mantine/core/Loader";
var k2 = Object.defineProperty
  , ca = Object.getOwnPropertySymbols
  , p1 = Object.prototype.hasOwnProperty
  , m1 = Object.prototype.propertyIsEnumerable
  , Um = (e,t,r)=>t in e ? k2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Ym = (e,t)=>{
    for (var r in t || (t = {}))
        p1.call(t, r) && Um(e, r, t[r]);
    if (ca)
        for (var r of ca(t))
            m1.call(t, r) && Um(e, r, t[r]);
    return e
}
  , R2 = (e,t)=>{
    var r = {};
    for (var n in e)
        p1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ca)
        for (var n of ca(e))
            t.indexOf(n) < 0 && m1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const N2 = {
    color: "gray",
    size: "md",
    variant: "subtle",
    loading: !1
}
  , g1 = p.forwardRef((e,t)=>{
    const r = F("ActionIcon", N2, e)
      , {className: n, color: o, children: l, radius: i, size: a, variant: s, gradient: c, disabled: f, loaderProps: u, loading: d, unstyled: m} = r
      , g = R2(r, ["className", "color", "children", "radius", "size", "variant", "gradient", "disabled", "loaderProps", "loading", "unstyled"])
      , {classes: y, cx: x, theme: h} = f2({
        size: a,
        radius: i,
        color: o,
        variant: s,
        gradient: c
    }, {
        name: "ActionIcon",
        unstyled: m
    })
      , v = h.fn.variant({
        color: o,
        variant: s
    })
      , w = _.createElement(pd, Ym({
        color: v.color,
        size: h.fn.size({
            size: a,
            sizes: To
        }) - 12
    }, u));
    return _.createElement(Ls, Ym({
        className: x(y.root, n),
        ref: t,
        disabled: f,
        "data-disabled": f || void 0,
        "data-loading": d || void 0,
        unstyled: m
    }, g), d ? w : l)
}
);
g1.displayName = "@mantine/core/ActionIcon";
const md = g1;
function v1(e) {
    const {children: t, target: r, className: n} = F("Portal", {}, e)
      , o = qe()
      , [l,i] = p.useState(!1)
      , a = p.useRef();
    return U0(()=>(i(!0),
    a.current = r ? typeof r == "string" ? document.querySelector(r) : r : document.createElement("div"),
    r || document.body.appendChild(a.current),
    ()=>{
        !r && document.body.removeChild(a.current)
    }
    ), [r]),
    l ? Yn.createPortal(_.createElement("div", {
        className: n,
        dir: o.dir
    }, t), a.current) : null
}
v1.displayName = "@mantine/core/Portal";
var z2 = Object.defineProperty
  , ua = Object.getOwnPropertySymbols
  , h1 = Object.prototype.hasOwnProperty
  , y1 = Object.prototype.propertyIsEnumerable
  , Gm = (e,t,r)=>t in e ? z2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , I2 = (e,t)=>{
    for (var r in t || (t = {}))
        h1.call(t, r) && Gm(e, r, t[r]);
    if (ua)
        for (var r of ua(t))
            y1.call(t, r) && Gm(e, r, t[r]);
    return e
}
  , T2 = (e,t)=>{
    var r = {};
    for (var n in e)
        h1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ua)
        for (var n of ua(e))
            t.indexOf(n) < 0 && y1.call(e, n) && (r[n] = e[n]);
    return r
}
;
function Cl(e) {
    var t = e
      , {withinPortal: r=!0, children: n} = t
      , o = T2(t, ["withinPortal", "children"]);
    return r ? _.createElement(v1, I2({}, o), n) : _.createElement(_.Fragment, null, n)
}
Cl.displayName = "@mantine/core/OptionalPortal";
var D2 = Object.defineProperty
  , Qm = Object.getOwnPropertySymbols
  , j2 = Object.prototype.hasOwnProperty
  , L2 = Object.prototype.propertyIsEnumerable
  , Xm = (e,t,r)=>t in e ? D2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , A2 = (e,t)=>{
    for (var r in t || (t = {}))
        j2.call(t, r) && Xm(e, r, t[r]);
    if (Qm)
        for (var r of Qm(t))
            L2.call(t, r) && Xm(e, r, t[r]);
    return e
}
;
function w1(e) {
    return _.createElement("svg", A2({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), _.createElement("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
    }))
}
w1.displayName = "@mantine/core/CloseIcon";
var M2 = Object.defineProperty
  , fa = Object.getOwnPropertySymbols
  , _1 = Object.prototype.hasOwnProperty
  , S1 = Object.prototype.propertyIsEnumerable
  , Km = (e,t,r)=>t in e ? M2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , F2 = (e,t)=>{
    for (var r in t || (t = {}))
        _1.call(t, r) && Km(e, r, t[r]);
    if (fa)
        for (var r of fa(t))
            S1.call(t, r) && Km(e, r, t[r]);
    return e
}
  , V2 = (e,t)=>{
    var r = {};
    for (var n in e)
        _1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && fa)
        for (var n of fa(e))
            t.indexOf(n) < 0 && S1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const B2 = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
}
  , H2 = {
    size: "md"
}
  , x1 = p.forwardRef((e,t)=>{
    const r = F("CloseButton", H2, e)
      , {iconSize: n, size: o="md"} = r
      , l = V2(r, ["iconSize", "size"])
      , i = qe()
      , a = n || i.fn.size({
        size: o,
        sizes: B2
    });
    return _.createElement(md, F2({
        size: o,
        ref: t
    }, l), _.createElement(w1, {
        width: a,
        height: a
    }))
}
);
x1.displayName = "@mantine/core/CloseButton";
const gd = x1;
var W2 = Object.defineProperty
  , U2 = Object.defineProperties
  , Y2 = Object.getOwnPropertyDescriptors
  , Zm = Object.getOwnPropertySymbols
  , G2 = Object.prototype.hasOwnProperty
  , Q2 = Object.prototype.propertyIsEnumerable
  , Jm = (e,t,r)=>t in e ? W2(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , ni = (e,t)=>{
    for (var r in t || (t = {}))
        G2.call(t, r) && Jm(e, r, t[r]);
    if (Zm)
        for (var r of Zm(t))
            Q2.call(t, r) && Jm(e, r, t[r]);
    return e
}
  , X2 = (e,t)=>U2(e, Y2(t));
function K2({underline: e, strikethrough: t}) {
    const r = [];
    return e && r.push("underline"),
    t && r.push("line-through"),
    r.length > 0 ? r.join(" ") : "none"
}
function Z2({theme: e, color: t, variant: r}) {
    return t === "dimmed" ? e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6] : typeof t == "string" && (t in e.colors || t.split(".")[0]in e.colors) ? e.fn.variant({
        variant: "filled",
        color: t
    }).background : r === "link" ? e.colors[e.primaryColor][e.colorScheme === "dark" ? 4 : 7] : t || "inherit"
}
function J2(e) {
    return typeof e == "number" ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: e,
        WebkitBoxOrient: "vertical"
    } : null
}
var q2 = G((e,{color: t, variant: r, size: n, lineClamp: o, inline: l, inherit: i, underline: a, gradient: s, weight: c, transform: f, align: u, strikethrough: d, italic: m})=>{
    const g = e.fn.variant({
        variant: "gradient",
        gradient: s
    });
    return {
        root: ni(X2(ni(ni(ni({}, e.fn.fontStyles()), e.fn.focusStyles()), J2(o)), {
            color: Z2({
                color: t,
                theme: e,
                variant: r
            }),
            fontFamily: i ? "inherit" : e.fontFamily,
            fontSize: i || n === void 0 ? "inherit" : e.fn.size({
                size: n,
                sizes: e.fontSizes
            }),
            lineHeight: i ? "inherit" : l ? 1 : e.lineHeight,
            textDecoration: K2({
                underline: a,
                strikethrough: d
            }),
            WebkitTapHighlightColor: "transparent",
            fontWeight: i ? "inherit" : c,
            textTransform: f,
            textAlign: u,
            fontStyle: m ? "italic" : void 0
        }), e.fn.hover(r === "link" && a === void 0 ? {
            textDecoration: "underline"
        } : void 0)),
        gradient: {
            backgroundImage: g.background,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }
    }
}
);
const eC = q2;
var tC = Object.defineProperty
  , da = Object.getOwnPropertySymbols
  , P1 = Object.prototype.hasOwnProperty
  , b1 = Object.prototype.propertyIsEnumerable
  , qm = (e,t,r)=>t in e ? tC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , rC = (e,t)=>{
    for (var r in t || (t = {}))
        P1.call(t, r) && qm(e, r, t[r]);
    if (da)
        for (var r of da(t))
            b1.call(t, r) && qm(e, r, t[r]);
    return e
}
  , nC = (e,t)=>{
    var r = {};
    for (var n in e)
        P1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && da)
        for (var n of da(e))
            t.indexOf(n) < 0 && b1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const oC = {
    variant: "text"
}
  , O1 = p.forwardRef((e,t)=>{
    const r = F("Text", oC, e)
      , {className: n, size: o, weight: l, transform: i, color: a, align: s, variant: c, lineClamp: f, gradient: u, inline: d, inherit: m, underline: g, strikethrough: y, italic: x, classNames: h, styles: v, unstyled: w, span: S} = r
      , P = nC(r, ["className", "size", "weight", "transform", "color", "align", "variant", "lineClamp", "gradient", "inline", "inherit", "underline", "strikethrough", "italic", "classNames", "styles", "unstyled", "span"])
      , {classes: O, cx: b} = eC({
        variant: c,
        color: a,
        size: o,
        lineClamp: f,
        inline: d,
        inherit: m,
        underline: g,
        strikethrough: y,
        italic: x,
        weight: l,
        transform: i,
        align: s,
        gradient: u
    }, {
        unstyled: w,
        name: "Text"
    });
    return _.createElement(K, rC({
        ref: t,
        className: b(O.root, {
            [O.gradient]: c === "gradient"
        }, n),
        component: S ? "span" : "div"
    }, P))
}
);
O1.displayName = "@mantine/core/Text";
const q = O1
  , $1 = p.createContext({
    zIndex: 1e3,
    fixed: !1,
    layout: "default"
})
  , lC = $1.Provider;
function E1() {
    return p.useContext($1)
}
function As(e, t) {
    if (!e)
        return [];
    const r = Object.keys(e).filter(n=>n !== "base").map(n=>[t.fn.size({
        size: n,
        sizes: t.breakpoints
    }), e[n]]);
    return r.sort((n,o)=>n[0] - o[0]),
    r
}
var iC = Object.defineProperty
  , aC = Object.defineProperties
  , sC = Object.getOwnPropertyDescriptors
  , eg = Object.getOwnPropertySymbols
  , cC = Object.prototype.hasOwnProperty
  , uC = Object.prototype.propertyIsEnumerable
  , tg = (e,t,r)=>t in e ? iC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , oi = (e,t)=>{
    for (var r in t || (t = {}))
        cC.call(t, r) && tg(e, r, t[r]);
    if (eg)
        for (var r of eg(t))
            uC.call(t, r) && tg(e, r, t[r]);
    return e
}
  , rg = (e,t)=>aC(e, sC(t))
  , fC = G((e,{height: t, width: r, fixed: n, position: o, hiddenBreakpoint: l, zIndex: i, section: a, withBorder: s, layout: c})=>{
    const f = typeof r == "object" && r !== null ? As(r, e).reduce((d,[m,g])=>(d[`@media (min-width: ${m}px)`] = {
        width: g,
        minWidth: g
    },
    d), {}) : null
      , u = s ? {
        [a === "navbar" ? "borderRight" : "borderLeft"]: `1px solid ${e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[2]}`
    } : {};
    return {
        root: rg(oi(oi(rg(oi(oi({}, e.fn.fontStyles()), o), {
            top: c === "alt" ? 0 : (o == null ? void 0 : o.top) || "var(--mantine-header-height)",
            bottom: 0,
            zIndex: i,
            height: t || (c === "alt" ? "auto" : "calc(100vh - var(--mantine-header-height, 0px) - var(--mantine-footer-height, 0px))"),
            width: (r == null ? void 0 : r.base) || "100%",
            position: n ? "fixed" : "static",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white
        }), u), f), {
            "&[data-hidden]": {
                [`@media (max-width: ${e.fn.size({
                    size: l,
                    sizes: e.breakpoints
                }) - 1}px)`]: {
                    display: "none"
                }
            }
        })
    }
}
);
const dC = fC;
var pC = Object.defineProperty
  , pa = Object.getOwnPropertySymbols
  , C1 = Object.prototype.hasOwnProperty
  , k1 = Object.prototype.propertyIsEnumerable
  , ng = (e,t,r)=>t in e ? pC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , og = (e,t)=>{
    for (var r in t || (t = {}))
        C1.call(t, r) && ng(e, r, t[r]);
    if (pa)
        for (var r of pa(t))
            k1.call(t, r) && ng(e, r, t[r]);
    return e
}
  , mC = (e,t)=>{
    var r = {};
    for (var n in e)
        C1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && pa)
        for (var n of pa(e))
            t.indexOf(n) < 0 && k1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const R1 = p.forwardRef((e,t)=>{
    var r = e
      , {width: n, height: o, fixed: l=!1, position: i, zIndex: a, hiddenBreakpoint: s="md", hidden: c=!1, withBorder: f=!0, className: u, classNames: d, styles: m, children: g, section: y, __staticSelector: x, unstyled: h} = r
      , v = mC(r, ["width", "height", "fixed", "position", "zIndex", "hiddenBreakpoint", "hidden", "withBorder", "className", "classNames", "styles", "children", "section", "__staticSelector", "unstyled"]);
    const w = E1()
      , {classes: S, cx: P, theme: O} = dC({
        width: n,
        height: o,
        fixed: w.fixed || l,
        position: i,
        hiddenBreakpoint: s,
        zIndex: a || w.zIndex || Ar("app"),
        section: y,
        withBorder: f,
        layout: w.layout
    }, {
        classNames: d,
        styles: m,
        name: x,
        unstyled: h
    })
      , b = As(n, O).reduce(($,[E,k])=>($[`@media (min-width: ${E}px)`] = {
        [`--mantine-${y}-width`]: `${k}px`
    },
    $), {});
    return _.createElement(K, og({
        component: y === "navbar" ? "nav" : "aside",
        ref: t,
        "data-hidden": c || void 0,
        className: P(S.root, u)
    }, v), g, _.createElement(W0, {
        styles: ()=>({
            ":root": og({
                [`--mantine-${y}-width`]: n != null && n.base ? `${n.base}px` : "0px"
            }, b)
        })
    }))
}
);
R1.displayName = "@mantine/core/HorizontalSection";
var gC = Object.defineProperty
  , ma = Object.getOwnPropertySymbols
  , N1 = Object.prototype.hasOwnProperty
  , z1 = Object.prototype.propertyIsEnumerable
  , lg = (e,t,r)=>t in e ? gC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , vC = (e,t)=>{
    for (var r in t || (t = {}))
        N1.call(t, r) && lg(e, r, t[r]);
    if (ma)
        for (var r of ma(t))
            z1.call(t, r) && lg(e, r, t[r]);
    return e
}
  , hC = (e,t)=>{
    var r = {};
    for (var n in e)
        N1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ma)
        for (var n of ma(e))
            t.indexOf(n) < 0 && z1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const I1 = p.forwardRef((e,t)=>{
    var r = e
      , {children: n, grow: o=!1, sx: l} = r
      , i = hC(r, ["children", "grow", "sx"]);
    return _.createElement(K, vC({
        ref: t,
        sx: [{
            flex: o ? 1 : 0,
            boxSizing: "border-box"
        }, ...eo(l)]
    }, i), n)
}
);
I1.displayName = "@mantine/core/Section";
const yC = I1;
var wC = Object.defineProperty
  , ig = Object.getOwnPropertySymbols
  , _C = Object.prototype.hasOwnProperty
  , SC = Object.prototype.propertyIsEnumerable
  , ag = (e,t,r)=>t in e ? wC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , xC = (e,t)=>{
    for (var r in t || (t = {}))
        _C.call(t, r) && ag(e, r, t[r]);
    if (ig)
        for (var r of ig(t))
            SC.call(t, r) && ag(e, r, t[r]);
    return e
}
;
const PC = {
    fixed: !1,
    position: {
        top: 0,
        left: 0
    },
    hiddenBreakpoint: "md",
    hidden: !1
}
  , vd = p.forwardRef((e,t)=>{
    const r = F("Navbar", PC, e);
    return _.createElement(R1, xC({
        section: "navbar",
        __staticSelector: "Navbar",
        ref: t
    }, r))
}
);
vd.Section = yC;
vd.displayName = "@mantine/core/Navbar";
var bC = Object.defineProperty
  , OC = Object.defineProperties
  , $C = Object.getOwnPropertyDescriptors
  , sg = Object.getOwnPropertySymbols
  , EC = Object.prototype.hasOwnProperty
  , CC = Object.prototype.propertyIsEnumerable
  , cg = (e,t,r)=>t in e ? bC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Nc = (e,t)=>{
    for (var r in t || (t = {}))
        EC.call(t, r) && cg(e, r, t[r]);
    if (sg)
        for (var r of sg(t))
            CC.call(t, r) && cg(e, r, t[r]);
    return e
}
  , ug = (e,t)=>OC(e, $C(t))
  , kC = G((e,{height: t, fixed: r, position: n, zIndex: o, borderPosition: l, layout: i})=>{
    const a = typeof t == "object" && t !== null ? As(t, e).reduce((s,[c,f])=>(s[`@media (min-width: ${c}px)`] = {
        height: f,
        minHeight: f
    },
    s), {}) : null;
    return {
        root: ug(Nc(ug(Nc(Nc({}, e.fn.fontStyles()), n), {
            zIndex: o,
            left: i === "alt" ? "var(--mantine-navbar-width, 0)" : 0,
            right: i === "alt" ? "var(--mantine-aside-width, 0)" : 0,
            height: typeof t == "object" ? (t == null ? void 0 : t.base) || "100%" : t,
            maxHeight: typeof t == "object" ? (t == null ? void 0 : t.base) || "100%" : t,
            position: r ? "fixed" : "static",
            boxSizing: "border-box",
            backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white
        }), a), {
            borderBottom: l === "bottom" ? `1px solid ${e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[2]}` : void 0,
            borderTop: l === "top" ? `1px solid ${e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[2]}` : void 0
        })
    }
}
);
const RC = kC;
var NC = Object.defineProperty
  , ga = Object.getOwnPropertySymbols
  , T1 = Object.prototype.hasOwnProperty
  , D1 = Object.prototype.propertyIsEnumerable
  , fg = (e,t,r)=>t in e ? NC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , dg = (e,t)=>{
    for (var r in t || (t = {}))
        T1.call(t, r) && fg(e, r, t[r]);
    if (ga)
        for (var r of ga(t))
            D1.call(t, r) && fg(e, r, t[r]);
    return e
}
  , zC = (e,t)=>{
    var r = {};
    for (var n in e)
        T1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ga)
        for (var n of ga(e))
            t.indexOf(n) < 0 && D1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const j1 = p.forwardRef((e,t)=>{
    var r = e
      , {children: n, className: o, classNames: l, styles: i, height: a, fixed: s=!1, withBorder: c=!0, position: f, zIndex: u, section: d, unstyled: m, __staticSelector: g} = r
      , y = zC(r, ["children", "className", "classNames", "styles", "height", "fixed", "withBorder", "position", "zIndex", "section", "unstyled", "__staticSelector"]);
    const x = E1()
      , h = u || x.zIndex || Ar("app")
      , {classes: v, cx: w, theme: S} = RC({
        height: a,
        fixed: x.fixed || s,
        position: f,
        zIndex: typeof h == "number" && x.layout === "default" ? h + 1 : h,
        layout: x.layout,
        borderPosition: c ? d === "header" ? "bottom" : "top" : "none"
    }, {
        name: g,
        classNames: l,
        styles: i,
        unstyled: m
    })
      , P = typeof a == "object" && a !== null ? As(a, S).reduce((O,[b,$])=>(O[`@media (min-width: ${b}px)`] = {
        [`--mantine-${d}-height`]: `${$}px`
    },
    O), {}) : null;
    return _.createElement(K, dg({
        component: d === "header" ? "header" : "footer",
        className: w(v.root, o),
        ref: t
    }, y), n, _.createElement(W0, {
        styles: ()=>({
            ":root": dg({
                [`--mantine-${d}-height`]: typeof a == "object" ? `${a == null ? void 0 : a.base}px` || "100%" : `${a}px`
            }, P)
        })
    }))
}
);
j1.displayName = "@mantine/core/VerticalSection";
var IC = Object.defineProperty
  , TC = Object.defineProperties
  , DC = Object.getOwnPropertyDescriptors
  , pg = Object.getOwnPropertySymbols
  , jC = Object.prototype.hasOwnProperty
  , LC = Object.prototype.propertyIsEnumerable
  , mg = (e,t,r)=>t in e ? IC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , AC = (e,t)=>{
    for (var r in t || (t = {}))
        jC.call(t, r) && mg(e, r, t[r]);
    if (pg)
        for (var r of pg(t))
            LC.call(t, r) && mg(e, r, t[r]);
    return e
}
  , MC = (e,t)=>TC(e, DC(t));
const FC = {
    fixed: !1,
    position: {
        top: 0,
        left: 0,
        right: 0
    }
}
  , L1 = p.forwardRef((e,t)=>{
    const r = F("Header", FC, e);
    return _.createElement(j1, MC(AC({
        section: "header",
        __staticSelector: "Header"
    }, r), {
        ref: t
    }))
}
);
L1.displayName = "@mantine/core/Header";
var VC = Object.defineProperty
  , gg = Object.getOwnPropertySymbols
  , BC = Object.prototype.hasOwnProperty
  , HC = Object.prototype.propertyIsEnumerable
  , vg = (e,t,r)=>t in e ? VC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , WC = (e,t)=>{
    for (var r in t || (t = {}))
        BC.call(t, r) && vg(e, r, t[r]);
    if (gg)
        for (var r of gg(t))
            HC.call(t, r) && vg(e, r, t[r]);
    return e
}
;
function UC(e, t) {
    const r = t.fn.size({
        size: e.padding,
        sizes: t.spacing
    })
      , n = e.navbarOffsetBreakpoint ? t.fn.size({
        size: e.navbarOffsetBreakpoint,
        sizes: t.breakpoints
    }) : null
      , o = e.asideOffsetBreakpoint ? t.fn.size({
        size: e.asideOffsetBreakpoint,
        sizes: t.breakpoints
    }) : null;
    return e.fixed ? {
        minHeight: "100vh",
        paddingTop: `calc(var(--mantine-header-height, 0px) + ${r}px)`,
        paddingBottom: `calc(var(--mantine-footer-height, 0px) + ${r}px)`,
        paddingLeft: `calc(var(--mantine-navbar-width, 0px) + ${r}px)`,
        paddingRight: `calc(var(--mantine-aside-width, 0px) + ${r}px)`,
        [`@media (max-width: ${n - 1}px)`]: {
            paddingLeft: r
        },
        [`@media (max-width: ${o - 1}px)`]: {
            paddingRight: r
        }
    } : {
        padding: r
    }
}
var YC = G((e,t)=>({
    root: {
        boxSizing: "border-box"
    },
    body: {
        display: "flex",
        boxSizing: "border-box"
    },
    main: WC({
        flex: 1,
        width: "100vw",
        boxSizing: "border-box"
    }, UC(t, e))
}));
const GC = YC;
var QC = Object.defineProperty
  , va = Object.getOwnPropertySymbols
  , A1 = Object.prototype.hasOwnProperty
  , M1 = Object.prototype.propertyIsEnumerable
  , hg = (e,t,r)=>t in e ? QC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , XC = (e,t)=>{
    for (var r in t || (t = {}))
        A1.call(t, r) && hg(e, r, t[r]);
    if (va)
        for (var r of va(t))
            M1.call(t, r) && hg(e, r, t[r]);
    return e
}
  , KC = (e,t)=>{
    var r = {};
    for (var n in e)
        A1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && va)
        for (var n of va(e))
            t.indexOf(n) < 0 && M1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const ZC = {
    fixed: !0,
    padding: "md"
}
  , F1 = p.forwardRef((e,t)=>{
    const r = F("AppShell", ZC, e)
      , {children: n, navbar: o, header: l, footer: i, aside: a, fixed: s, zIndex: c, padding: f, navbarOffsetBreakpoint: u, asideOffsetBreakpoint: d, className: m, styles: g, classNames: y, unstyled: x, hidden: h, layout: v} = r
      , w = KC(r, ["children", "navbar", "header", "footer", "aside", "fixed", "zIndex", "padding", "navbarOffsetBreakpoint", "asideOffsetBreakpoint", "className", "styles", "classNames", "unstyled", "hidden", "layout"])
      , {classes: S, cx: P} = GC({
        padding: f,
        fixed: s,
        navbarOffsetBreakpoint: u,
        asideOffsetBreakpoint: d
    }, {
        styles: g,
        classNames: y,
        unstyled: x,
        name: "AppShell"
    });
    return h ? _.createElement(_.Fragment, null, n) : _.createElement(lC, {
        value: {
            fixed: s,
            zIndex: c,
            layout: v
        }
    }, _.createElement(K, XC({
        className: P(S.root, m),
        ref: t
    }, w), l, _.createElement("div", {
        className: S.body
    }, o, _.createElement("main", {
        className: S.main
    }, n), a), i))
}
);
F1.displayName = "@mantine/core/AppShell";
const li = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
};
function ii(e, t) {
    const r = e.fn.variant({
        variant: "outline",
        color: t
    }).border;
    return typeof t == "string" && (t in e.colors || t.split(".")[0]in e.colors) ? r : t === void 0 ? e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4] : t
}
var JC = G((e,{size: t, variant: r, color: n})=>({
    root: {},
    withLabel: {
        borderTop: "0 !important"
    },
    left: {
        "&::before": {
            display: "none"
        }
    },
    right: {
        "&::after": {
            display: "none"
        }
    },
    label: {
        display: "flex",
        alignItems: "center",
        "&::before": {
            content: '""',
            flex: 1,
            height: 1,
            borderTop: `${e.fn.size({
                size: t,
                sizes: li
            })}px ${r} ${ii(e, n)}`,
            marginRight: e.spacing.xs
        },
        "&::after": {
            content: '""',
            flex: 1,
            borderTop: `${e.fn.size({
                size: t,
                sizes: li
            })}px ${r} ${ii(e, n)}`,
            marginLeft: e.spacing.xs
        }
    },
    labelDefaultStyles: {
        color: n === "dark" ? e.colors.dark[1] : e.fn.themeColor(n, e.colorScheme === "dark" ? 5 : e.fn.primaryShade(), !1)
    },
    horizontal: {
        border: 0,
        borderTopWidth: e.fn.size({
            size: t,
            sizes: li
        }),
        borderTopColor: ii(e, n),
        borderTopStyle: r,
        margin: 0
    },
    vertical: {
        border: 0,
        alignSelf: "stretch",
        height: "auto",
        borderLeftWidth: e.fn.size({
            size: t,
            sizes: li
        }),
        borderLeftColor: ii(e, n),
        borderLeftStyle: r
    }
}));
const qC = JC;
var ek = Object.defineProperty
  , tk = Object.defineProperties
  , rk = Object.getOwnPropertyDescriptors
  , ha = Object.getOwnPropertySymbols
  , V1 = Object.prototype.hasOwnProperty
  , B1 = Object.prototype.propertyIsEnumerable
  , yg = (e,t,r)=>t in e ? ek(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , wg = (e,t)=>{
    for (var r in t || (t = {}))
        V1.call(t, r) && yg(e, r, t[r]);
    if (ha)
        for (var r of ha(t))
            B1.call(t, r) && yg(e, r, t[r]);
    return e
}
  , nk = (e,t)=>tk(e, rk(t))
  , ok = (e,t)=>{
    var r = {};
    for (var n in e)
        V1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ha)
        for (var n of ha(e))
            t.indexOf(n) < 0 && B1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const lk = {
    orientation: "horizontal",
    size: "xs",
    labelPosition: "left",
    variant: "solid"
}
  , Ir = p.forwardRef((e,t)=>{
    const r = F("Divider", lk, e)
      , {className: n, color: o, orientation: l, size: i, label: a, labelPosition: s, labelProps: c, variant: f, styles: u, classNames: d, unstyled: m} = r
      , g = ok(r, ["className", "color", "orientation", "size", "label", "labelPosition", "labelProps", "variant", "styles", "classNames", "unstyled"])
      , {classes: y, cx: x} = qC({
        color: o,
        size: i,
        variant: f
    }, {
        classNames: d,
        styles: u,
        unstyled: m,
        name: "Divider"
    })
      , h = l === "vertical"
      , v = l === "horizontal"
      , w = !!a && v
      , S = !(c != null && c.color);
    return _.createElement(K, wg({
        ref: t,
        className: x(y.root, {
            [y.vertical]: h,
            [y.horizontal]: v,
            [y.withLabel]: w
        }, n),
        role: "separator"
    }, g), w && _.createElement(q, nk(wg({}, c), {
        size: (c == null ? void 0 : c.size) || "xs",
        sx: {
            marginTop: 2
        },
        className: x(y.label, y[s], {
            [y.labelDefaultStyles]: S
        })
    }), a))
}
);
Ir.displayName = "@mantine/core/Divider";
var ik = Object.defineProperty
  , ak = Object.defineProperties
  , sk = Object.getOwnPropertyDescriptors
  , _g = Object.getOwnPropertySymbols
  , ck = Object.prototype.hasOwnProperty
  , uk = Object.prototype.propertyIsEnumerable
  , Sg = (e,t,r)=>t in e ? ik(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , xg = (e,t)=>{
    for (var r in t || (t = {}))
        ck.call(t, r) && Sg(e, r, t[r]);
    if (_g)
        for (var r of _g(t))
            uk.call(t, r) && Sg(e, r, t[r]);
    return e
}
  , fk = (e,t)=>ak(e, sk(t))
  , dk = G((e,{size: t})=>({
    item: fk(xg({}, e.fn.fontStyles()), {
        boxSizing: "border-box",
        textAlign: "left",
        width: "100%",
        padding: `${e.fn.size({
            size: t,
            sizes: e.spacing
        }) / 1.5}px ${e.fn.size({
            size: t,
            sizes: e.spacing
        })}px`,
        cursor: "pointer",
        fontSize: e.fn.size({
            size: t,
            sizes: e.fontSizes
        }),
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        borderRadius: e.fn.radius(),
        "&[data-hovered]": {
            backgroundColor: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[1]
        },
        "&[data-selected]": xg({
            backgroundColor: e.fn.variant({
                variant: "filled"
            }).background,
            color: e.fn.variant({
                variant: "filled"
            }).color
        }, e.fn.hover({
            backgroundColor: e.fn.variant({
                variant: "filled"
            }).hover
        })),
        "&[data-disabled]": {
            cursor: "default",
            color: e.colors.dark[2]
        }
    }),
    nothingFound: {
        boxSizing: "border-box",
        color: e.colors.gray[6],
        paddingTop: e.fn.size({
            size: t,
            sizes: e.spacing
        }) / 2,
        paddingBottom: e.fn.size({
            size: t,
            sizes: e.spacing
        }) / 2,
        textAlign: "center"
    },
    separator: {
        boxSizing: "border-box",
        textAlign: "left",
        width: "100%",
        padding: `${e.fn.size({
            size: t,
            sizes: e.spacing
        }) / 1.5}px ${e.fn.size({
            size: t,
            sizes: e.spacing
        })}px`
    },
    separatorLabel: {
        color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5]
    }
}));
const pk = dk;
var mk = Object.defineProperty
  , Pg = Object.getOwnPropertySymbols
  , gk = Object.prototype.hasOwnProperty
  , vk = Object.prototype.propertyIsEnumerable
  , bg = (e,t,r)=>t in e ? mk(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , hk = (e,t)=>{
    for (var r in t || (t = {}))
        gk.call(t, r) && bg(e, r, t[r]);
    if (Pg)
        for (var r of Pg(t))
            vk.call(t, r) && bg(e, r, t[r]);
    return e
}
;
function H1({data: e, hovered: t, classNames: r, styles: n, isItemSelected: o, uuid: l, __staticSelector: i, onItemHover: a, onItemSelect: s, itemsRefs: c, itemComponent: f, size: u, nothingFound: d, creatable: m, createLabel: g, unstyled: y}) {
    const {classes: x} = pk({
        size: u
    }, {
        classNames: r,
        styles: n,
        unstyled: y,
        name: i
    })
      , h = []
      , v = [];
    let w = null;
    const S = (O,b)=>{
        const $ = typeof o == "function" ? o(O.value) : !1;
        return _.createElement(f, hk({
            key: O.value,
            className: x.item,
            "data-disabled": O.disabled || void 0,
            "data-hovered": !O.disabled && t === b || void 0,
            "data-selected": !O.disabled && $ || void 0,
            onMouseEnter: ()=>a(b),
            id: `${l}-${b}`,
            role: "option",
            tabIndex: -1,
            "aria-selected": t === b,
            ref: E=>{
                c && c.current && (c.current[O.value] = E)
            }
            ,
            onMouseDown: O.disabled ? null : E=>{
                E.preventDefault(),
                s(O)
            }
            ,
            disabled: O.disabled
        }, O))
    }
    ;
    let P = null;
    if (e.forEach((O,b)=>{
        O.creatable ? w = b : O.group ? (P !== O.group && (P = O.group,
        v.push(_.createElement("div", {
            className: x.separator,
            key: `__mantine-divider-${b}`
        }, _.createElement(Ir, {
            classNames: {
                label: x.separatorLabel
            },
            label: O.group
        })))),
        v.push(S(O, b))) : h.push(S(O, b))
    }
    ),
    m) {
        const O = e[w];
        h.push(_.createElement("div", {
            key: $E(),
            className: x.item,
            "data-hovered": t === w || void 0,
            onMouseEnter: ()=>a(w),
            onMouseDown: b=>{
                b.preventDefault(),
                s(O)
            }
            ,
            tabIndex: -1,
            ref: b=>{
                c && c.current && (c.current[O.value] = b)
            }
        }, g))
    }
    return v.length > 0 && h.length > 0 && h.unshift(_.createElement("div", {
        className: x.separator,
        key: "empty-group-separator"
    }, _.createElement(Ir, null))),
    v.length > 0 || h.length > 0 ? _.createElement(_.Fragment, null, v, h) : _.createElement(q, {
        size: u,
        unstyled: y,
        className: x.nothingFound
    }, d)
}
H1.displayName = "@mantine/core/SelectItems";
var yk = Object.defineProperty
  , ya = Object.getOwnPropertySymbols
  , W1 = Object.prototype.hasOwnProperty
  , U1 = Object.prototype.propertyIsEnumerable
  , Og = (e,t,r)=>t in e ? yk(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , wk = (e,t)=>{
    for (var r in t || (t = {}))
        W1.call(t, r) && Og(e, r, t[r]);
    if (ya)
        for (var r of ya(t))
            U1.call(t, r) && Og(e, r, t[r]);
    return e
}
  , _k = (e,t)=>{
    var r = {};
    for (var n in e)
        W1.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ya)
        for (var n of ya(e))
            t.indexOf(n) < 0 && U1.call(e, n) && (r[n] = e[n]);
    return r
}
;
const Y1 = p.forwardRef((e,t)=>{
    var r = e
      , {label: n, value: o} = r
      , l = _k(r, ["label", "value"]);
    return _.createElement("div", wk({
        ref: t
    }, l), n || o)
}
);
Y1.displayName = "@mantine/core/DefaultItem";
function Sk(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function G1(...e) {
    return t=>e.forEach(r=>Sk(r, t))
}
function pn(...e) {
    return p.useCallback(G1(...e), e)
}
const Q1 = p.forwardRef((e,t)=>{
    const {children: r, ...n} = e
      , o = p.Children.toArray(r)
      , l = o.find(Pk);
    if (l) {
        const i = l.props.children
          , a = o.map(s=>s === l ? p.Children.count(i) > 1 ? p.Children.only(null) : p.isValidElement(i) ? i.props.children : null : s);
        return p.createElement(Yu, ce({}, n, {
            ref: t
        }), p.isValidElement(i) ? p.cloneElement(i, void 0, a) : null)
    }
    return p.createElement(Yu, ce({}, n, {
        ref: t
    }), r)
}
);
Q1.displayName = "Slot";
const Yu = p.forwardRef((e,t)=>{
    const {children: r, ...n} = e;
    return p.isValidElement(r) ? p.cloneElement(r, {
        ...bk(n, r.props),
        ref: G1(t, r.ref)
    }) : p.Children.count(r) > 1 ? p.Children.only(null) : null
}
);
Yu.displayName = "SlotClone";
const xk = ({children: e})=>p.createElement(p.Fragment, null, e);
function Pk(e) {
    return p.isValidElement(e) && e.type === xk
}
function bk(e, t) {
    const r = {
        ...t
    };
    for (const n in t) {
        const o = e[n]
          , l = t[n];
        /^on[A-Z]/.test(n) ? o && l ? r[n] = (...a)=>{
            l(...a),
            o(...a)
        }
        : o && (r[n] = o) : n === "style" ? r[n] = {
            ...o,
            ...l
        } : n === "className" && (r[n] = [o, l].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...r
    }
}
const Ok = ["a", "button", "div", "h2", "h3", "img", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , kl = Ok.reduce((e,t)=>{
    const r = p.forwardRef((n,o)=>{
        const {asChild: l, ...i} = n
          , a = l ? Q1 : t;
        return p.useEffect(()=>{
            window[Symbol.for("radix-ui")] = !0
        }
        , []),
        p.createElement(a, ce({}, i, {
            ref: o
        }))
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {})
  , Gu = Boolean(globalThis == null ? void 0 : globalThis.document) ? p.useLayoutEffect : ()=>{}
;
function $k(e, t) {
    return p.useReducer((r,n)=>{
        const o = t[r][n];
        return o ?? r
    }
    , e)
}
const Rl = e=>{
    const {present: t, children: r} = e
      , n = Ek(t)
      , o = typeof r == "function" ? r({
        present: n.isPresent
    }) : p.Children.only(r)
      , l = pn(n.ref, o.ref);
    return typeof r == "function" || n.isPresent ? p.cloneElement(o, {
        ref: l
    }) : null
}
;
Rl.displayName = "Presence";
function Ek(e) {
    const [t,r] = p.useState()
      , n = p.useRef({})
      , o = p.useRef(e)
      , l = p.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [a,s] = $k(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return p.useEffect(()=>{
        const c = ai(n.current);
        l.current = a === "mounted" ? c : "none"
    }
    , [a]),
    Gu(()=>{
        const c = n.current
          , f = o.current;
        if (f !== e) {
            const d = l.current
              , m = ai(c);
            e ? s("MOUNT") : m === "none" || (c == null ? void 0 : c.display) === "none" ? s("UNMOUNT") : s(f && d !== m ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, s]),
    Gu(()=>{
        if (t) {
            const c = u=>{
                const m = ai(n.current).includes(u.animationName);
                u.target === t && m && Yn.flushSync(()=>s("ANIMATION_END"))
            }
              , f = u=>{
                u.target === t && (l.current = ai(n.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", c),
            t.addEventListener("animationend", c),
            ()=>{
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", c),
                t.removeEventListener("animationend", c)
            }
        } else
            s("ANIMATION_END")
    }
    , [t, s]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: p.useCallback(c=>{
            c && (n.current = getComputedStyle(c)),
            r(c)
        }
        , [])
    }
}
function ai(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Ck(e, t=[]) {
    let r = [];
    function n(l, i) {
        const a = p.createContext(i)
          , s = r.length;
        r = [...r, i];
        function c(u) {
            const {scope: d, children: m, ...g} = u
              , y = (d == null ? void 0 : d[e][s]) || a
              , x = p.useMemo(()=>g, Object.values(g));
            return p.createElement(y.Provider, {
                value: x
            }, m)
        }
        function f(u, d) {
            const m = (d == null ? void 0 : d[e][s]) || a
              , g = p.useContext(m);
            if (g)
                return g;
            if (i !== void 0)
                return i;
            throw new Error(`\`${u}\` must be used within \`${l}\``)
        }
        return c.displayName = l + "Provider",
        [c, f]
    }
    const o = ()=>{
        const l = r.map(i=>p.createContext(i));
        return function(a) {
            const s = (a == null ? void 0 : a[e]) || l;
            return p.useMemo(()=>({
                [`__scope${e}`]: {
                    ...a,
                    [e]: s
                }
            }), [a, s])
        }
    }
    ;
    return o.scopeName = e,
    [n, kk(o, ...t)]
}
function kk(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const r = ()=>{
        const n = e.map(o=>({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(l) {
            const i = n.reduce((a,{useScope: s, scopeName: c})=>{
                const u = s(l)[`__scope${c}`];
                return {
                    ...a,
                    ...u
                }
            }
            , {});
            return p.useMemo(()=>({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return r.scopeName = t.scopeName,
    r
}
function Qr(e) {
    const t = p.useRef(e);
    return p.useEffect(()=>{
        t.current = e
    }
    ),
    p.useMemo(()=>(...r)=>{
        var n;
        return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r)
    }
    , [])
}
const Rk = p.createContext(void 0);
function Nk(e) {
    const t = p.useContext(Rk);
    return e || t || "ltr"
}
function zk(e, [t,r]) {
    return Math.min(r, Math.max(t, e))
}
function rn(e, t, {checkForDefaultPrevented: r=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        r === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Ik(e, t) {
    return p.useReducer((r,n)=>{
        const o = t[r][n];
        return o ?? r
    }
    , e)
}
const X1 = "ScrollArea"
  , [K1,W8] = Ck(X1)
  , [Tk,gt] = K1(X1)
  , Dk = p.forwardRef((e,t)=>{
    const {__scopeScrollArea: r, type: n="hover", dir: o, scrollHideDelay: l=600, ...i} = e
      , [a,s] = p.useState(null)
      , [c,f] = p.useState(null)
      , [u,d] = p.useState(null)
      , [m,g] = p.useState(null)
      , [y,x] = p.useState(null)
      , [h,v] = p.useState(0)
      , [w,S] = p.useState(0)
      , [P,O] = p.useState(!1)
      , [b,$] = p.useState(!1)
      , E = pn(t, j=>s(j))
      , k = Nk(o);
    return p.createElement(Tk, {
        scope: r,
        type: n,
        dir: k,
        scrollHideDelay: l,
        scrollArea: a,
        viewport: c,
        onViewportChange: f,
        content: u,
        onContentChange: d,
        scrollbarX: m,
        onScrollbarXChange: g,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: O,
        scrollbarY: y,
        onScrollbarYChange: x,
        scrollbarYEnabled: b,
        onScrollbarYEnabledChange: $,
        onCornerWidthChange: v,
        onCornerHeightChange: S
    }, p.createElement(kl.div, ce({
        dir: k
    }, i, {
        ref: E,
        style: {
            position: "relative",
            ["--radix-scroll-area-corner-width"]: h + "px",
            ["--radix-scroll-area-corner-height"]: w + "px",
            ...e.style
        }
    })))
}
)
  , jk = "ScrollAreaViewport"
  , Lk = p.forwardRef((e,t)=>{
    const {__scopeScrollArea: r, children: n, ...o} = e
      , l = gt(jk, r)
      , i = p.useRef(null)
      , a = pn(t, i, l.onViewportChange);
    return p.createElement(p.Fragment, null, p.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
        }
    }), p.createElement(kl.div, ce({
        "data-radix-scroll-area-viewport": ""
    }, o, {
        ref: a,
        style: {
            overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
        }
    }), p.createElement("div", {
        ref: l.onContentChange,
        style: {
            minWidth: "100%",
            display: "table"
        }
    }, n)))
}
)
  , nr = "ScrollAreaScrollbar"
  , Ak = p.forwardRef((e,t)=>{
    const {forceMount: r, ...n} = e
      , o = gt(nr, e.__scopeScrollArea)
      , {onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: i} = o
      , a = e.orientation === "horizontal";
    return p.useEffect(()=>(a ? l(!0) : i(!0),
    ()=>{
        a ? l(!1) : i(!1)
    }
    ), [a, l, i]),
    o.type === "hover" ? p.createElement(Mk, ce({}, n, {
        ref: t,
        forceMount: r
    })) : o.type === "scroll" ? p.createElement(Fk, ce({}, n, {
        ref: t,
        forceMount: r
    })) : o.type === "auto" ? p.createElement(Z1, ce({}, n, {
        ref: t,
        forceMount: r
    })) : o.type === "always" ? p.createElement(hd, ce({}, n, {
        ref: t
    })) : null
}
)
  , Mk = p.forwardRef((e,t)=>{
    const {forceMount: r, ...n} = e
      , o = gt(nr, e.__scopeScrollArea)
      , [l,i] = p.useState(!1);
    return p.useEffect(()=>{
        const a = o.scrollArea;
        let s = 0;
        if (a) {
            const c = ()=>{
                window.clearTimeout(s),
                i(!0)
            }
              , f = ()=>{
                s = window.setTimeout(()=>i(!1), o.scrollHideDelay)
            }
            ;
            return a.addEventListener("pointerenter", c),
            a.addEventListener("pointerleave", f),
            ()=>{
                window.clearTimeout(s),
                a.removeEventListener("pointerenter", c),
                a.removeEventListener("pointerleave", f)
            }
        }
    }
    , [o.scrollArea, o.scrollHideDelay]),
    p.createElement(Rl, {
        present: r || l
    }, p.createElement(Z1, ce({
        "data-state": l ? "visible" : "hidden"
    }, n, {
        ref: t
    })))
}
)
  , Fk = p.forwardRef((e,t)=>{
    const {forceMount: r, ...n} = e
      , o = gt(nr, e.__scopeScrollArea)
      , l = e.orientation === "horizontal"
      , i = Fs(()=>s("SCROLL_END"), 100)
      , [a,s] = Ik("hidden", {
        hidden: {
            SCROLL: "scrolling"
        },
        scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
        },
        interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
        },
        idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
        }
    });
    return p.useEffect(()=>{
        if (a === "idle") {
            const c = window.setTimeout(()=>s("HIDE"), o.scrollHideDelay);
            return ()=>window.clearTimeout(c)
        }
    }
    , [a, o.scrollHideDelay, s]),
    p.useEffect(()=>{
        const c = o.viewport
          , f = l ? "scrollLeft" : "scrollTop";
        if (c) {
            let u = c[f];
            const d = ()=>{
                const m = c[f];
                u !== m && (s("SCROLL"),
                i()),
                u = m
            }
            ;
            return c.addEventListener("scroll", d),
            ()=>c.removeEventListener("scroll", d)
        }
    }
    , [o.viewport, l, s, i]),
    p.createElement(Rl, {
        present: r || a !== "hidden"
    }, p.createElement(hd, ce({
        "data-state": a === "hidden" ? "hidden" : "visible"
    }, n, {
        ref: t,
        onPointerEnter: rn(e.onPointerEnter, ()=>s("POINTER_ENTER")),
        onPointerLeave: rn(e.onPointerLeave, ()=>s("POINTER_LEAVE"))
    })))
}
)
  , Z1 = p.forwardRef((e,t)=>{
    const r = gt(nr, e.__scopeScrollArea)
      , {forceMount: n, ...o} = e
      , [l,i] = p.useState(!1)
      , a = e.orientation === "horizontal"
      , s = Fs(()=>{
        if (r.viewport) {
            const c = r.viewport.offsetWidth < r.viewport.scrollWidth
              , f = r.viewport.offsetHeight < r.viewport.scrollHeight;
            i(a ? c : f)
        }
    }
    , 10);
    return ro(r.viewport, s),
    ro(r.content, s),
    p.createElement(Rl, {
        present: n || l
    }, p.createElement(hd, ce({
        "data-state": l ? "visible" : "hidden"
    }, o, {
        ref: t
    })))
}
)
  , hd = p.forwardRef((e,t)=>{
    const {orientation: r="vertical", ...n} = e
      , o = gt(nr, e.__scopeScrollArea)
      , l = p.useRef(null)
      , i = p.useRef(0)
      , [a,s] = p.useState({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    })
      , c = tw(a.viewport, a.content)
      , f = {
        ...n,
        sizes: a,
        onSizesChange: s,
        hasThumb: Boolean(c > 0 && c < 1),
        onThumbChange: d=>l.current = d,
        onThumbPointerUp: ()=>i.current = 0,
        onThumbPointerDown: d=>i.current = d
    };
    function u(d, m) {
        return Qk(d, i.current, a, m)
    }
    return r === "horizontal" ? p.createElement(Vk, ce({}, f, {
        ref: t,
        onThumbPositionChange: ()=>{
            if (o.viewport && l.current) {
                const d = o.viewport.scrollLeft
                  , m = $g(d, a, o.dir);
                l.current.style.transform = `translate3d(${m}px, 0, 0)`
            }
        }
        ,
        onWheelScroll: d=>{
            o.viewport && (o.viewport.scrollLeft = d)
        }
        ,
        onDragScroll: d=>{
            o.viewport && (o.viewport.scrollLeft = u(d, o.dir))
        }
    })) : r === "vertical" ? p.createElement(Bk, ce({}, f, {
        ref: t,
        onThumbPositionChange: ()=>{
            if (o.viewport && l.current) {
                const d = o.viewport.scrollTop
                  , m = $g(d, a);
                l.current.style.transform = `translate3d(0, ${m}px, 0)`
            }
        }
        ,
        onWheelScroll: d=>{
            o.viewport && (o.viewport.scrollTop = d)
        }
        ,
        onDragScroll: d=>{
            o.viewport && (o.viewport.scrollTop = u(d))
        }
    })) : null
}
)
  , Vk = p.forwardRef((e,t)=>{
    const {sizes: r, onSizesChange: n, ...o} = e
      , l = gt(nr, e.__scopeScrollArea)
      , [i,a] = p.useState()
      , s = p.useRef(null)
      , c = pn(t, s, l.onScrollbarXChange);
    return p.useEffect(()=>{
        s.current && a(getComputedStyle(s.current))
    }
    , [s]),
    p.createElement(q1, ce({
        "data-orientation": "horizontal"
    }, o, {
        ref: c,
        sizes: r,
        style: {
            bottom: 0,
            left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            ["--radix-scroll-area-thumb-width"]: Ms(r) + "px",
            ...e.style
        },
        onThumbPointerDown: f=>e.onThumbPointerDown(f.x),
        onDragScroll: f=>e.onDragScroll(f.x),
        onWheelScroll: (f,u)=>{
            if (l.viewport) {
                const d = l.viewport.scrollLeft + f.deltaX;
                e.onWheelScroll(d),
                nw(d, u) && f.preventDefault()
            }
        }
        ,
        onResize: ()=>{
            s.current && l.viewport && i && n({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                    size: s.current.clientWidth,
                    paddingStart: wa(i.paddingLeft),
                    paddingEnd: wa(i.paddingRight)
                }
            })
        }
    }))
}
)
  , Bk = p.forwardRef((e,t)=>{
    const {sizes: r, onSizesChange: n, ...o} = e
      , l = gt(nr, e.__scopeScrollArea)
      , [i,a] = p.useState()
      , s = p.useRef(null)
      , c = pn(t, s, l.onScrollbarYChange);
    return p.useEffect(()=>{
        s.current && a(getComputedStyle(s.current))
    }
    , [s]),
    p.createElement(q1, ce({
        "data-orientation": "vertical"
    }, o, {
        ref: c,
        sizes: r,
        style: {
            top: 0,
            right: l.dir === "ltr" ? 0 : void 0,
            left: l.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            ["--radix-scroll-area-thumb-height"]: Ms(r) + "px",
            ...e.style
        },
        onThumbPointerDown: f=>e.onThumbPointerDown(f.y),
        onDragScroll: f=>e.onDragScroll(f.y),
        onWheelScroll: (f,u)=>{
            if (l.viewport) {
                const d = l.viewport.scrollTop + f.deltaY;
                e.onWheelScroll(d),
                nw(d, u) && f.preventDefault()
            }
        }
        ,
        onResize: ()=>{
            s.current && l.viewport && i && n({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                    size: s.current.clientHeight,
                    paddingStart: wa(i.paddingTop),
                    paddingEnd: wa(i.paddingBottom)
                }
            })
        }
    }))
}
)
  , [Hk,J1] = K1(nr)
  , q1 = p.forwardRef((e,t)=>{
    const {__scopeScrollArea: r, sizes: n, hasThumb: o, onThumbChange: l, onThumbPointerUp: i, onThumbPointerDown: a, onThumbPositionChange: s, onDragScroll: c, onWheelScroll: f, onResize: u, ...d} = e
      , m = gt(nr, r)
      , [g,y] = p.useState(null)
      , x = pn(t, E=>y(E))
      , h = p.useRef(null)
      , v = p.useRef("")
      , w = m.viewport
      , S = n.content - n.viewport
      , P = Qr(f)
      , O = Qr(s)
      , b = Fs(u, 10);
    function $(E) {
        if (h.current) {
            const k = E.clientX - h.current.left
              , j = E.clientY - h.current.top;
            c({
                x: k,
                y: j
            })
        }
    }
    return p.useEffect(()=>{
        const E = k=>{
            const j = k.target;
            (g == null ? void 0 : g.contains(j)) && P(k, S)
        }
        ;
        return document.addEventListener("wheel", E, {
            passive: !1
        }),
        ()=>document.removeEventListener("wheel", E, {
            passive: !1
        })
    }
    , [w, g, S, P]),
    p.useEffect(O, [n, O]),
    ro(g, b),
    ro(m.content, b),
    p.createElement(Hk, {
        scope: r,
        scrollbar: g,
        hasThumb: o,
        onThumbChange: Qr(l),
        onThumbPointerUp: Qr(i),
        onThumbPositionChange: O,
        onThumbPointerDown: Qr(a)
    }, p.createElement(kl.div, ce({}, d, {
        ref: x,
        style: {
            position: "absolute",
            ...d.style
        },
        onPointerDown: rn(e.onPointerDown, E=>{
            E.button === 0 && (E.target.setPointerCapture(E.pointerId),
            h.current = g.getBoundingClientRect(),
            v.current = document.body.style.webkitUserSelect,
            document.body.style.webkitUserSelect = "none",
            $(E))
        }
        ),
        onPointerMove: rn(e.onPointerMove, $),
        onPointerUp: rn(e.onPointerUp, E=>{
            const k = E.target;
            k.hasPointerCapture(E.pointerId) && k.releasePointerCapture(E.pointerId),
            document.body.style.webkitUserSelect = v.current,
            h.current = null
        }
        )
    })))
}
)
  , Qu = "ScrollAreaThumb"
  , Wk = p.forwardRef((e,t)=>{
    const {forceMount: r, ...n} = e
      , o = J1(Qu, e.__scopeScrollArea);
    return p.createElement(Rl, {
        present: r || o.hasThumb
    }, p.createElement(Uk, ce({
        ref: t
    }, n)))
}
)
  , Uk = p.forwardRef((e,t)=>{
    const {__scopeScrollArea: r, style: n, ...o} = e
      , l = gt(Qu, r)
      , i = J1(Qu, r)
      , {onThumbPositionChange: a} = i
      , s = pn(t, u=>i.onThumbChange(u))
      , c = p.useRef()
      , f = Fs(()=>{
        c.current && (c.current(),
        c.current = void 0)
    }
    , 100);
    return p.useEffect(()=>{
        const u = l.viewport;
        if (u) {
            const d = ()=>{
                if (f(),
                !c.current) {
                    const m = Xk(u, a);
                    c.current = m,
                    a()
                }
            }
            ;
            return a(),
            u.addEventListener("scroll", d),
            ()=>u.removeEventListener("scroll", d)
        }
    }
    , [l.viewport, f, a]),
    p.createElement(kl.div, ce({
        "data-state": i.hasThumb ? "visible" : "hidden"
    }, o, {
        ref: s,
        style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...n
        },
        onPointerDownCapture: rn(e.onPointerDownCapture, u=>{
            const m = u.target.getBoundingClientRect()
              , g = u.clientX - m.left
              , y = u.clientY - m.top;
            i.onThumbPointerDown({
                x: g,
                y
            })
        }
        ),
        onPointerUp: rn(e.onPointerUp, i.onThumbPointerUp)
    }))
}
)
  , ew = "ScrollAreaCorner"
  , Yk = p.forwardRef((e,t)=>{
    const r = gt(ew, e.__scopeScrollArea)
      , n = Boolean(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? p.createElement(Gk, ce({}, e, {
        ref: t
    })) : null
}
)
  , Gk = p.forwardRef((e,t)=>{
    const {__scopeScrollArea: r, ...n} = e
      , o = gt(ew, r)
      , [l,i] = p.useState(0)
      , [a,s] = p.useState(0)
      , c = Boolean(l && a);
    return ro(o.scrollbarX, ()=>{
        var f;
        const u = ((f = o.scrollbarX) === null || f === void 0 ? void 0 : f.offsetHeight) || 0;
        o.onCornerHeightChange(u),
        s(u)
    }
    ),
    ro(o.scrollbarY, ()=>{
        var f;
        const u = ((f = o.scrollbarY) === null || f === void 0 ? void 0 : f.offsetWidth) || 0;
        o.onCornerWidthChange(u),
        i(u)
    }
    ),
    c ? p.createElement(kl.div, ce({}, n, {
        ref: t,
        style: {
            width: l,
            height: a,
            position: "absolute",
            right: o.dir === "ltr" ? 0 : void 0,
            left: o.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...e.style
        }
    })) : null
}
);
function wa(e) {
    return e ? parseInt(e, 10) : 0
}
function tw(e, t) {
    const r = e / t;
    return isNaN(r) ? 0 : r
}
function Ms(e) {
    const t = tw(e.viewport, e.content)
      , r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd
      , n = (e.scrollbar.size - r) * t;
    return Math.max(n, 18)
}
function Qk(e, t, r, n="ltr") {
    const o = Ms(r)
      , l = o / 2
      , i = t || l
      , a = o - i
      , s = r.scrollbar.paddingStart + i
      , c = r.scrollbar.size - r.scrollbar.paddingEnd - a
      , f = r.content - r.viewport
      , u = n === "ltr" ? [0, f] : [f * -1, 0];
    return rw([s, c], u)(e)
}
function $g(e, t, r="ltr") {
    const n = Ms(t)
      , o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd
      , l = t.scrollbar.size - o
      , i = t.content - t.viewport
      , a = l - n
      , s = r === "ltr" ? [0, i] : [i * -1, 0]
      , c = zk(e, s);
    return rw([0, i], [0, a])(c)
}
function rw(e, t) {
    return r=>{
        if (e[0] === e[1] || t[0] === t[1])
            return t[0];
        const n = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + n * (r - e[0])
    }
}
function nw(e, t) {
    return e > 0 && e < t
}
const Xk = (e,t=()=>{}
)=>{
    let r = {
        left: e.scrollLeft,
        top: e.scrollTop
    }
      , n = 0;
    return function o() {
        const l = {
            left: e.scrollLeft,
            top: e.scrollTop
        }
          , i = r.left !== l.left
          , a = r.top !== l.top;
        (i || a) && t(),
        r = l,
        n = window.requestAnimationFrame(o)
    }(),
    ()=>window.cancelAnimationFrame(n)
}
;
function Fs(e, t) {
    const r = Qr(e)
      , n = p.useRef(0);
    return p.useEffect(()=>()=>window.clearTimeout(n.current), []),
    p.useCallback(()=>{
        window.clearTimeout(n.current),
        n.current = window.setTimeout(r, t)
    }
    , [r, t])
}
function ro(e, t) {
    const r = Qr(t);
    Gu(()=>{
        let n = 0;
        if (e) {
            const o = new ResizeObserver(()=>{
                cancelAnimationFrame(n),
                n = window.requestAnimationFrame(r)
            }
            );
            return o.observe(e),
            ()=>{
                window.cancelAnimationFrame(n),
                o.unobserve(e)
            }
        }
    }
    , [e, r])
}
const Kk = Dk
  , Zk = Lk
  , Eg = Ak
  , Cg = Wk
  , Jk = Yk;
var qk = G((e,{scrollbarSize: t, offsetScrollbars: r, scrollbarHovered: n, hidden: o},l)=>({
    root: {
        overflow: "hidden"
    },
    viewport: {
        width: "100%",
        height: "100%",
        paddingRight: r ? t : void 0,
        paddingBottom: r ? t : void 0
    },
    scrollbar: {
        display: o ? "none" : "flex",
        userSelect: "none",
        touchAction: "none",
        boxSizing: "border-box",
        padding: t / 5,
        transition: "background-color 150ms ease, opacity 150ms ease",
        "&:hover": {
            backgroundColor: e.colorScheme === "dark" ? e.colors.dark[8] : e.colors.gray[0],
            [`& .${l("thumb")}`]: {
                backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.white, .5) : e.fn.rgba(e.black, .5)
            }
        },
        '&[data-orientation="vertical"]': {
            width: t
        },
        '&[data-orientation="horizontal"]': {
            flexDirection: "column",
            height: t
        },
        '&[data-state="hidden"]': {
            display: "none",
            opacity: 0
        }
    },
    thumb: {
        ref: l("thumb"),
        flex: 1,
        backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.white, .4) : e.fn.rgba(e.black, .4),
        borderRadius: t,
        position: "relative",
        transition: "background-color 150ms ease",
        display: o ? "none" : void 0,
        overflow: "hidden",
        "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            minWidth: 44,
            minHeight: 44
        }
    },
    corner: {
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[0],
        transition: "opacity 150ms ease",
        opacity: n ? 1 : 0,
        display: o ? "none" : void 0
    }
}));
const e5 = qk;
var t5 = Object.defineProperty
  , r5 = Object.defineProperties
  , n5 = Object.getOwnPropertyDescriptors
  , _a = Object.getOwnPropertySymbols
  , ow = Object.prototype.hasOwnProperty
  , lw = Object.prototype.propertyIsEnumerable
  , kg = (e,t,r)=>t in e ? t5(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Xu = (e,t)=>{
    for (var r in t || (t = {}))
        ow.call(t, r) && kg(e, r, t[r]);
    if (_a)
        for (var r of _a(t))
            lw.call(t, r) && kg(e, r, t[r]);
    return e
}
  , iw = (e,t)=>r5(e, n5(t))
  , aw = (e,t)=>{
    var r = {};
    for (var n in e)
        ow.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && _a)
        for (var n of _a(e))
            t.indexOf(n) < 0 && lw.call(e, n) && (r[n] = e[n]);
    return r
}
;
const sw = {
    scrollbarSize: 12,
    scrollHideDelay: 1e3,
    type: "hover",
    offsetScrollbars: !1
}
  , Vs = p.forwardRef((e,t)=>{
    const r = F("ScrollArea", sw, e)
      , {children: n, className: o, classNames: l, styles: i, scrollbarSize: a, scrollHideDelay: s, type: c, dir: f, offsetScrollbars: u, viewportRef: d, onScrollPositionChange: m, unstyled: g, viewportProps: y} = r
      , x = aw(r, ["children", "className", "classNames", "styles", "scrollbarSize", "scrollHideDelay", "type", "dir", "offsetScrollbars", "viewportRef", "onScrollPositionChange", "unstyled", "viewportProps"])
      , [h,v] = p.useState(!1)
      , w = qe()
      , {classes: S, cx: P} = e5({
        scrollbarSize: a,
        offsetScrollbars: u,
        scrollbarHovered: h,
        hidden: c === "never"
    }, {
        name: "ScrollArea",
        classNames: l,
        styles: i,
        unstyled: g
    });
    return _.createElement(Kk, {
        type: c === "never" ? "always" : c,
        scrollHideDelay: s,
        dir: f || w.dir,
        ref: t,
        asChild: !0
    }, _.createElement(K, Xu({
        className: P(S.root, o)
    }, x), _.createElement(Zk, iw(Xu({}, y), {
        className: S.viewport,
        ref: d,
        onScroll: typeof m == "function" ? ({currentTarget: O})=>m({
            x: O.scrollLeft,
            y: O.scrollTop
        }) : void 0
    }), n), _.createElement(Eg, {
        orientation: "horizontal",
        className: S.scrollbar,
        forceMount: !0,
        onMouseEnter: ()=>v(!0),
        onMouseLeave: ()=>v(!1)
    }, _.createElement(Cg, {
        className: S.thumb
    })), _.createElement(Eg, {
        orientation: "vertical",
        className: S.scrollbar,
        forceMount: !0,
        onMouseEnter: ()=>v(!0),
        onMouseLeave: ()=>v(!1)
    }, _.createElement(Cg, {
        className: S.thumb
    })), _.createElement(Jk, {
        className: S.corner
    })))
}
)
  , cw = p.forwardRef((e,t)=>{
    const r = F("ScrollAreaAutosize", sw, e)
      , {maxHeight: n, children: o, classNames: l, styles: i, scrollbarSize: a, scrollHideDelay: s, type: c, dir: f, offsetScrollbars: u, viewportRef: d, onScrollPositionChange: m, unstyled: g, sx: y} = r
      , x = aw(r, ["maxHeight", "children", "classNames", "styles", "scrollbarSize", "scrollHideDelay", "type", "dir", "offsetScrollbars", "viewportRef", "onScrollPositionChange", "unstyled", "sx"]);
    return _.createElement(K, iw(Xu({}, x), {
        ref: t,
        sx: [{
            display: "flex",
            maxHeight: n
        }, ...eo(y)]
    }), _.createElement(K, {
        sx: {
            display: "flex",
            flexDirection: "column",
            flex: 1
        }
    }, _.createElement(Vs, {
        classNames: l,
        styles: i,
        scrollHideDelay: s,
        scrollbarSize: a,
        type: c,
        dir: f,
        offsetScrollbars: u,
        viewportRef: d,
        onScrollPositionChange: m,
        unstyled: g
    }, o)))
}
);
cw.displayName = "@mantine/core/ScrollAreaAutosize";
Vs.displayName = "@mantine/core/ScrollArea";
Vs.Autosize = cw;
const uw = Vs;
var o5 = Object.defineProperty
  , l5 = Object.defineProperties
  , i5 = Object.getOwnPropertyDescriptors
  , Sa = Object.getOwnPropertySymbols
  , fw = Object.prototype.hasOwnProperty
  , dw = Object.prototype.propertyIsEnumerable
  , Rg = (e,t,r)=>t in e ? o5(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Ng = (e,t)=>{
    for (var r in t || (t = {}))
        fw.call(t, r) && Rg(e, r, t[r]);
    if (Sa)
        for (var r of Sa(t))
            dw.call(t, r) && Rg(e, r, t[r]);
    return e
}
  , a5 = (e,t)=>l5(e, i5(t))
  , s5 = (e,t)=>{
    var r = {};
    for (var n in e)
        fw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Sa)
        for (var n of Sa(e))
            t.indexOf(n) < 0 && dw.call(e, n) && (r[n] = e[n]);
    return r
}
;
const yd = p.forwardRef((e,t)=>{
    var r = e
      , {style: n} = r
      , o = s5(r, ["style"]);
    return _.createElement(uw, a5(Ng({}, o), {
        style: Ng({
            width: "100%"
        }, n),
        viewportRef: t
    }), o.children)
}
);
yd.displayName = "@mantine/core/SelectScrollArea";
var c5 = G(()=>({
    dropdown: {},
    itemsWrapper: {
        padding: 4,
        display: "flex",
        width: "100%",
        boxSizing: "border-box"
    }
}));
const u5 = c5;
function uo(e) {
    return e.split("-")[1]
}
function wd(e) {
    return e === "y" ? "height" : "width"
}
function Et(e) {
    return e.split("-")[0]
}
function mn(e) {
    return ["top", "bottom"].includes(Et(e)) ? "x" : "y"
}
function zg(e, t, r) {
    let {reference: n, floating: o} = e;
    const l = n.x + n.width / 2 - o.width / 2
      , i = n.y + n.height / 2 - o.height / 2
      , a = mn(t)
      , s = wd(a)
      , c = n[s] / 2 - o[s] / 2
      , f = Et(t)
      , u = a === "x";
    let d;
    switch (f) {
    case "top":
        d = {
            x: l,
            y: n.y - o.height
        };
        break;
    case "bottom":
        d = {
            x: l,
            y: n.y + n.height
        };
        break;
    case "right":
        d = {
            x: n.x + n.width,
            y: i
        };
        break;
    case "left":
        d = {
            x: n.x - o.width,
            y: i
        };
        break;
    default:
        d = {
            x: n.x,
            y: n.y
        }
    }
    switch (uo(t)) {
    case "start":
        d[a] -= c * (r && u ? -1 : 1);
        break;
    case "end":
        d[a] += c * (r && u ? -1 : 1);
        break
    }
    return d
}
const f5 = async(e,t,r)=>{
    const {placement: n="bottom", strategy: o="absolute", middleware: l=[], platform: i} = r
      , a = l.filter(Boolean)
      , s = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let c = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: f, y: u} = zg(c, n, s)
      , d = n
      , m = {}
      , g = 0;
    for (let y = 0; y < a.length; y++) {
        const {name: x, fn: h} = a[y]
          , {x: v, y: w, data: S, reset: P} = await h({
            x: f,
            y: u,
            initialPlacement: n,
            placement: d,
            strategy: o,
            middlewareData: m,
            rects: c,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        if (f = v ?? f,
        u = w ?? u,
        m = {
            ...m,
            [x]: {
                ...m[x],
                ...S
            }
        },
        P && g <= 50) {
            g++,
            typeof P == "object" && (P.placement && (d = P.placement),
            P.rects && (c = P.rects === !0 ? await i.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            }) : P.rects),
            {x: f, y: u} = zg(c, d, s)),
            y = -1;
            continue
        }
    }
    return {
        x: f,
        y: u,
        placement: d,
        strategy: o,
        middlewareData: m
    }
}
;
function d5(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function _d(e) {
    return typeof e != "number" ? d5(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function vl(e) {
    return {
        ...e,
        top: e.y,
        left: e.x,
        right: e.x + e.width,
        bottom: e.y + e.height
    }
}
async function Sd(e, t) {
    var r;
    t === void 0 && (t = {});
    const {x: n, y: o, platform: l, rects: i, elements: a, strategy: s} = e
      , {boundary: c="clippingAncestors", rootBoundary: f="viewport", elementContext: u="floating", altBoundary: d=!1, padding: m=0} = t
      , g = _d(m)
      , x = a[d ? u === "floating" ? "reference" : "floating" : u]
      , h = vl(await l.getClippingRect({
        element: (r = await (l.isElement == null ? void 0 : l.isElement(x))) == null || r ? x : x.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(a.floating)),
        boundary: c,
        rootBoundary: f,
        strategy: s
    }))
      , v = u === "floating" ? {
        ...i.floating,
        x: n,
        y: o
    } : i.reference
      , w = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(a.floating))
      , S = await (l.isElement == null ? void 0 : l.isElement(w)) ? await (l.getScale == null ? void 0 : l.getScale(w)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , P = vl(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: v,
        offsetParent: w,
        strategy: s
    }) : v);
    return {
        top: (h.top - P.top + g.top) / S.y,
        bottom: (P.bottom - h.bottom + g.bottom) / S.y,
        left: (h.left - P.left + g.left) / S.x,
        right: (P.right - h.right + g.right) / S.x
    }
}
const pw = Math.min
  , mr = Math.max;
function Ku(e, t, r) {
    return mr(e, pw(t, r))
}
const Ig = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {element: r, padding: n=0} = e || {}
          , {x: o, y: l, placement: i, rects: a, platform: s} = t;
        if (r == null)
            return {};
        const c = _d(n)
          , f = {
            x: o,
            y: l
        }
          , u = mn(i)
          , d = wd(u)
          , m = await s.getDimensions(r)
          , g = u === "y" ? "top" : "left"
          , y = u === "y" ? "bottom" : "right"
          , x = a.reference[d] + a.reference[u] - f[u] - a.floating[d]
          , h = f[u] - a.reference[u]
          , v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(r));
        let w = v ? u === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
        w === 0 && (w = a.floating[d]);
        const S = x / 2 - h / 2
          , P = c[g]
          , O = w - m[d] - c[y]
          , b = w / 2 - m[d] / 2 + S
          , $ = Ku(P, b, O)
          , k = uo(i) != null && b != $ && a.reference[d] / 2 - (b < P ? c[g] : c[y]) - m[d] / 2 < 0 ? b < P ? P - b : O - b : 0;
        return {
            [u]: f[u] - k,
            data: {
                [u]: $,
                centerOffset: b - $
            }
        }
    }
})
  , p5 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function xa(e) {
    return e.replace(/left|right|bottom|top/g, t=>p5[t])
}
function m5(e, t, r) {
    r === void 0 && (r = !1);
    const n = uo(e)
      , o = mn(e)
      , l = wd(o);
    let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
    return t.reference[l] > t.floating[l] && (i = xa(i)),
    {
        main: i,
        cross: xa(i)
    }
}
const g5 = {
    start: "end",
    end: "start"
};
function Zu(e) {
    return e.replace(/start|end/g, t=>g5[t])
}
function v5(e) {
    const t = xa(e);
    return [Zu(e), t, Zu(t)]
}
function h5(e, t, r) {
    const n = ["left", "right"]
      , o = ["right", "left"]
      , l = ["top", "bottom"]
      , i = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return r ? t ? o : n : t ? n : o;
    case "left":
    case "right":
        return t ? l : i;
    default:
        return []
    }
}
function y5(e, t, r, n) {
    const o = uo(e);
    let l = h5(Et(e), r === "start", n);
    return o && (l = l.map(i=>i + "-" + o),
    t && (l = l.concat(l.map(Zu)))),
    l
}
const mw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var r;
            const {placement: n, middlewareData: o, rects: l, initialPlacement: i, platform: a, elements: s} = t
              , {mainAxis: c=!0, crossAxis: f=!0, fallbackPlacements: u, fallbackStrategy: d="bestFit", fallbackAxisSideDirection: m="none", flipAlignment: g=!0, ...y} = e
              , x = Et(n)
              , h = Et(i) === i
              , v = await (a.isRTL == null ? void 0 : a.isRTL(s.floating))
              , w = u || (h || !g ? [xa(i)] : v5(i));
            !u && m !== "none" && w.push(...y5(i, g, m, v));
            const S = [i, ...w]
              , P = await Sd(t, y)
              , O = [];
            let b = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (c && O.push(P[x]),
            f) {
                const {main: k, cross: j} = m5(n, l, v);
                O.push(P[k], P[j])
            }
            if (b = [...b, {
                placement: n,
                overflows: O
            }],
            !O.every(k=>k <= 0)) {
                var $;
                const k = ((($ = o.flip) == null ? void 0 : $.index) || 0) + 1
                  , j = S[k];
                if (j)
                    return {
                        data: {
                            index: k,
                            overflows: b
                        },
                        reset: {
                            placement: j
                        }
                    };
                let T = "bottom";
                switch (d) {
                case "bestFit":
                    {
                        var E;
                        const L = (E = b.map(A=>[A, A.overflows.filter(B=>B > 0).reduce((B,U)=>B + U, 0)]).sort((A,B)=>A[1] - B[1])[0]) == null ? void 0 : E[0].placement;
                        L && (T = L);
                        break
                    }
                case "initialPlacement":
                    T = i;
                    break
                }
                if (n !== T)
                    return {
                        reset: {
                            placement: T
                        }
                    }
            }
            return {}
        }
    }
}
  , gw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "inline",
        options: e,
        async fn(t) {
            const {placement: r, elements: n, rects: o, platform: l, strategy: i} = t
              , {padding: a=2, x: s, y: c} = e
              , f = vl(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                rect: o.reference,
                offsetParent: await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n.floating)),
                strategy: i
            }) : o.reference)
              , u = await (l.getClientRects == null ? void 0 : l.getClientRects(n.reference)) || []
              , d = _d(a);
            function m() {
                if (u.length === 2 && u[0].left > u[1].right && s != null && c != null)
                    return u.find(y=>s > y.left - d.left && s < y.right + d.right && c > y.top - d.top && c < y.bottom + d.bottom) || f;
                if (u.length >= 2) {
                    if (mn(r) === "x") {
                        const E = u[0]
                          , k = u[u.length - 1]
                          , j = Et(r) === "top"
                          , T = E.top
                          , L = k.bottom
                          , A = j ? E.left : k.left
                          , B = j ? E.right : k.right
                          , U = B - A
                          , Q = L - T;
                        return {
                            top: T,
                            bottom: L,
                            left: A,
                            right: B,
                            width: U,
                            height: Q,
                            x: A,
                            y: T
                        }
                    }
                    const y = Et(r) === "left"
                      , x = mr(...u.map(E=>E.right))
                      , h = pw(...u.map(E=>E.left))
                      , v = u.filter(E=>y ? E.left === h : E.right === x)
                      , w = v[0].top
                      , S = v[v.length - 1].bottom
                      , P = h
                      , O = x
                      , b = O - P
                      , $ = S - w;
                    return {
                        top: w,
                        bottom: S,
                        left: P,
                        right: O,
                        width: b,
                        height: $,
                        x: P,
                        y: w
                    }
                }
                return f
            }
            const g = await l.getElementRects({
                reference: {
                    getBoundingClientRect: m
                },
                floating: n.floating,
                strategy: i
            });
            return o.reference.x !== g.reference.x || o.reference.y !== g.reference.y || o.reference.width !== g.reference.width || o.reference.height !== g.reference.height ? {
                reset: {
                    rects: g
                }
            } : {}
        }
    }
};
async function w5(e, t) {
    const {placement: r, platform: n, elements: o} = e
      , l = await (n.isRTL == null ? void 0 : n.isRTL(o.floating))
      , i = Et(r)
      , a = uo(r)
      , s = mn(r) === "x"
      , c = ["left", "top"].includes(i) ? -1 : 1
      , f = l && s ? -1 : 1
      , u = typeof t == "function" ? t(e) : t;
    let {mainAxis: d, crossAxis: m, alignmentAxis: g} = typeof u == "number" ? {
        mainAxis: u,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...u
    };
    return a && typeof g == "number" && (m = a === "end" ? g * -1 : g),
    s ? {
        x: m * f,
        y: d * c
    } : {
        x: d * c,
        y: m * f
    }
}
const vw = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            const {x: r, y: n} = t
              , o = await w5(t, e);
            return {
                x: r + o.x,
                y: n + o.y,
                data: o
            }
        }
    }
};
function hw(e) {
    return e === "x" ? "y" : "x"
}
const xd = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: r, y: n, placement: o} = t
              , {mainAxis: l=!0, crossAxis: i=!1, limiter: a={
                fn: x=>{
                    let {x: h, y: v} = x;
                    return {
                        x: h,
                        y: v
                    }
                }
            }, ...s} = e
              , c = {
                x: r,
                y: n
            }
              , f = await Sd(t, s)
              , u = mn(Et(o))
              , d = hw(u);
            let m = c[u]
              , g = c[d];
            if (l) {
                const x = u === "y" ? "top" : "left"
                  , h = u === "y" ? "bottom" : "right"
                  , v = m + f[x]
                  , w = m - f[h];
                m = Ku(v, m, w)
            }
            if (i) {
                const x = d === "y" ? "top" : "left"
                  , h = d === "y" ? "bottom" : "right"
                  , v = g + f[x]
                  , w = g - f[h];
                g = Ku(v, g, w)
            }
            const y = a.fn({
                ...t,
                [u]: m,
                [d]: g
            });
            return {
                ...y,
                data: {
                    x: y.x - r,
                    y: y.y - n
                }
            }
        }
    }
}
  , _5 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: r, y: n, placement: o, rects: l, middlewareData: i} = t
              , {offset: a=0, mainAxis: s=!0, crossAxis: c=!0} = e
              , f = {
                x: r,
                y: n
            }
              , u = mn(o)
              , d = hw(u);
            let m = f[u]
              , g = f[d];
            const y = typeof a == "function" ? a(t) : a
              , x = typeof y == "number" ? {
                mainAxis: y,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...y
            };
            if (s) {
                const w = u === "y" ? "height" : "width"
                  , S = l.reference[u] - l.floating[w] + x.mainAxis
                  , P = l.reference[u] + l.reference[w] - x.mainAxis;
                m < S ? m = S : m > P && (m = P)
            }
            if (c) {
                var h, v;
                const w = u === "y" ? "width" : "height"
                  , S = ["top", "left"].includes(Et(o))
                  , P = l.reference[d] - l.floating[w] + (S && ((h = i.offset) == null ? void 0 : h[d]) || 0) + (S ? 0 : x.crossAxis)
                  , O = l.reference[d] + l.reference[w] + (S ? 0 : ((v = i.offset) == null ? void 0 : v[d]) || 0) - (S ? x.crossAxis : 0);
                g < P ? g = P : g > O && (g = O)
            }
            return {
                [u]: m,
                [d]: g
            }
        }
    }
}
  , S5 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: r, rects: n, platform: o, elements: l} = t
              , {apply: i=()=>{}
            , ...a} = e
              , s = await Sd(t, a)
              , c = Et(r)
              , f = uo(r);
            let u, d;
            c === "top" || c === "bottom" ? (u = c,
            d = f === (await (o.isRTL == null ? void 0 : o.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (d = c,
            u = f === "end" ? "top" : "bottom");
            const m = mr(s.left, 0)
              , g = mr(s.right, 0)
              , y = mr(s.top, 0)
              , x = mr(s.bottom, 0)
              , h = {
                availableHeight: n.floating.height - (["left", "right"].includes(r) ? 2 * (y !== 0 || x !== 0 ? y + x : mr(s.top, s.bottom)) : s[u]),
                availableWidth: n.floating.width - (["top", "bottom"].includes(r) ? 2 * (m !== 0 || g !== 0 ? m + g : mr(s.left, s.right)) : s[d])
            };
            await i({
                ...t,
                ...h
            });
            const v = await o.getDimensions(l.floating);
            return n.floating.width !== v.width || n.floating.height !== v.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function ft(e) {
    var t;
    return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function At(e) {
    return ft(e).getComputedStyle(e)
}
function Tr(e) {
    return ww(e) ? (e.nodeName || "").toLowerCase() : ""
}
let si;
function yw() {
    if (si)
        return si;
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? (si = e.brands.map(t=>t.brand + "/" + t.version).join(" "),
    si) : navigator.userAgent
}
function tr(e) {
    return e instanceof ft(e).HTMLElement
}
function Ot(e) {
    return e instanceof ft(e).Element
}
function ww(e) {
    return e instanceof ft(e).Node
}
function Tg(e) {
    if (typeof ShadowRoot > "u")
        return !1;
    const t = ft(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
function Bs(e) {
    const {overflow: t, overflowX: r, overflowY: n, display: o} = At(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
}
function x5(e) {
    return ["table", "td", "th"].includes(Tr(e))
}
function Pd(e) {
    const t = /firefox/i.test(yw())
      , r = At(e)
      , n = r.backdropFilter || r.WebkitBackdropFilter;
    return r.transform !== "none" || r.perspective !== "none" || (n ? n !== "none" : !1) || t && r.willChange === "filter" || t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective"].some(o=>r.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(o=>{
        const l = r.contain;
        return l != null ? l.includes(o) : !1
    }
    )
}
function _w() {
    return !/^((?!chrome|android).)*safari/i.test(yw())
}
function bd(e) {
    return ["html", "body", "#document"].includes(Tr(e))
}
const Dg = Math.min
  , Yo = Math.max
  , Pa = Math.round;
function Sw(e) {
    const t = At(e);
    let r = parseFloat(t.width)
      , n = parseFloat(t.height);
    const o = e.offsetWidth
      , l = e.offsetHeight
      , i = Pa(r) !== o || Pa(n) !== l;
    return i && (r = o,
    n = l),
    {
        width: r,
        height: n,
        fallback: i
    }
}
function xw(e) {
    return Ot(e) ? e : e.contextElement
}
const Pw = {
    x: 1,
    y: 1
};
function Un(e) {
    const t = xw(e);
    if (!tr(t))
        return Pw;
    const r = t.getBoundingClientRect()
      , {width: n, height: o, fallback: l} = Sw(t);
    let i = (l ? Pa(r.width) : r.width) / n
      , a = (l ? Pa(r.height) : r.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: i,
        y: a
    }
}
function un(e, t, r, n) {
    var o, l;
    t === void 0 && (t = !1),
    r === void 0 && (r = !1);
    const i = e.getBoundingClientRect()
      , a = xw(e);
    let s = Pw;
    t && (n ? Ot(n) && (s = Un(n)) : s = Un(e));
    const c = a ? ft(a) : window
      , f = !_w() && r;
    let u = (i.left + (f && ((o = c.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / s.x
      , d = (i.top + (f && ((l = c.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / s.y
      , m = i.width / s.x
      , g = i.height / s.y;
    if (a) {
        const y = ft(a)
          , x = n && Ot(n) ? ft(n) : n;
        let h = y.frameElement;
        for (; h && n && x !== y; ) {
            const v = Un(h)
              , w = h.getBoundingClientRect()
              , S = getComputedStyle(h);
            w.x += (h.clientLeft + parseFloat(S.paddingLeft)) * v.x,
            w.y += (h.clientTop + parseFloat(S.paddingTop)) * v.y,
            u *= v.x,
            d *= v.y,
            m *= v.x,
            g *= v.y,
            u += w.x,
            d += w.y,
            h = ft(h).frameElement
        }
    }
    return {
        width: m,
        height: g,
        top: d,
        right: u + m,
        bottom: d + g,
        left: u,
        x: u,
        y: d
    }
}
function Mr(e) {
    return ((ww(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Hs(e) {
    return Ot(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function bw(e) {
    return un(Mr(e)).left + Hs(e).scrollLeft
}
function P5(e, t, r) {
    const n = tr(t)
      , o = Mr(t)
      , l = un(e, !0, r === "fixed", t);
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = {
        x: 0,
        y: 0
    };
    if (n || !n && r !== "fixed")
        if ((Tr(t) !== "body" || Bs(o)) && (i = Hs(t)),
        tr(t)) {
            const s = un(t, !0);
            a.x = s.x + t.clientLeft,
            a.y = s.y + t.clientTop
        } else
            o && (a.x = bw(o));
    return {
        x: l.left + i.scrollLeft - a.x,
        y: l.top + i.scrollTop - a.y,
        width: l.width,
        height: l.height
    }
}
function hl(e) {
    if (Tr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || (Tg(e) ? e.host : null) || Mr(e);
    return Tg(t) ? t.host : t
}
function jg(e) {
    return !tr(e) || At(e).position === "fixed" ? null : e.offsetParent
}
function b5(e) {
    let t = hl(e);
    for (; tr(t) && !bd(t); ) {
        if (Pd(t))
            return t;
        t = hl(t)
    }
    return null
}
function Lg(e) {
    const t = ft(e);
    let r = jg(e);
    for (; r && x5(r) && At(r).position === "static"; )
        r = jg(r);
    return r && (Tr(r) === "html" || Tr(r) === "body" && At(r).position === "static" && !Pd(r)) ? t : r || b5(e) || t
}
function O5(e) {
    return Sw(e)
}
function $5(e) {
    let {rect: t, offsetParent: r, strategy: n} = e;
    const o = tr(r)
      , l = Mr(r);
    if (r === l)
        return t;
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , a = {
        x: 1,
        y: 1
    };
    const s = {
        x: 0,
        y: 0
    };
    if ((o || !o && n !== "fixed") && ((Tr(r) !== "body" || Bs(l)) && (i = Hs(r)),
    tr(r))) {
        const c = un(r);
        a = Un(r),
        s.x = c.x + r.clientLeft,
        s.y = c.y + r.clientTop
    }
    return {
        width: t.width * a.x,
        height: t.height * a.y,
        x: t.x * a.x - i.scrollLeft * a.x + s.x,
        y: t.y * a.y - i.scrollTop * a.y + s.y
    }
}
function E5(e, t) {
    const r = ft(e)
      , n = Mr(e)
      , o = r.visualViewport;
    let l = n.clientWidth
      , i = n.clientHeight
      , a = 0
      , s = 0;
    if (o) {
        l = o.width,
        i = o.height;
        const c = _w();
        (c || !c && t === "fixed") && (a = o.offsetLeft,
        s = o.offsetTop)
    }
    return {
        width: l,
        height: i,
        x: a,
        y: s
    }
}
function C5(e) {
    var t;
    const r = Mr(e)
      , n = Hs(e)
      , o = (t = e.ownerDocument) == null ? void 0 : t.body
      , l = Yo(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0)
      , i = Yo(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
    let a = -n.scrollLeft + bw(e);
    const s = -n.scrollTop;
    return At(o || r).direction === "rtl" && (a += Yo(r.clientWidth, o ? o.clientWidth : 0) - l),
    {
        width: l,
        height: i,
        x: a,
        y: s
    }
}
function Ow(e) {
    const t = hl(e);
    return bd(t) ? e.ownerDocument.body : tr(t) && Bs(t) ? t : Ow(t)
}
function Xt(e, t) {
    var r;
    t === void 0 && (t = []);
    const n = Ow(e)
      , o = n === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , l = ft(n);
    return o ? t.concat(l, l.visualViewport || [], Bs(n) ? n : []) : t.concat(n, Xt(n))
}
function k5(e, t) {
    const r = un(e, !0, t === "fixed")
      , n = r.top + e.clientTop
      , o = r.left + e.clientLeft
      , l = tr(e) ? Un(e) : {
        x: 1,
        y: 1
    }
      , i = e.clientWidth * l.x
      , a = e.clientHeight * l.y
      , s = o * l.x
      , c = n * l.y;
    return {
        top: c,
        left: s,
        right: s + i,
        bottom: c + a,
        x: s,
        y: c,
        width: i,
        height: a
    }
}
function Ag(e, t, r) {
    return t === "viewport" ? vl(E5(e, r)) : Ot(t) ? k5(t, r) : vl(C5(Mr(e)))
}
function R5(e, t) {
    const r = t.get(e);
    if (r)
        return r;
    let n = Xt(e).filter(a=>Ot(a) && Tr(a) !== "body")
      , o = null;
    const l = At(e).position === "fixed";
    let i = l ? hl(e) : e;
    for (; Ot(i) && !bd(i); ) {
        const a = At(i)
          , s = Pd(i);
        (l ? !s && !o : !s && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? n = n.filter(f=>f !== i) : o = a,
        i = hl(i)
    }
    return t.set(e, n),
    n
}
function N5(e) {
    let {element: t, boundary: r, rootBoundary: n, strategy: o} = e;
    const i = [...r === "clippingAncestors" ? R5(t, this._c) : [].concat(r), n]
      , a = i[0]
      , s = i.reduce((c,f)=>{
        const u = Ag(t, f, o);
        return c.top = Yo(u.top, c.top),
        c.right = Dg(u.right, c.right),
        c.bottom = Dg(u.bottom, c.bottom),
        c.left = Yo(u.left, c.left),
        c
    }
    , Ag(t, a, o));
    return {
        width: s.right - s.left,
        height: s.bottom - s.top,
        x: s.left,
        y: s.top
    }
}
const z5 = {
    getClippingRect: N5,
    convertOffsetParentRelativeRectToViewportRelativeRect: $5,
    isElement: Ot,
    getDimensions: O5,
    getOffsetParent: Lg,
    getDocumentElement: Mr,
    getScale: Un,
    async getElementRects(e) {
        let {reference: t, floating: r, strategy: n} = e;
        const o = this.getOffsetParent || Lg
          , l = this.getDimensions;
        return {
            reference: P5(t, await o(r), n),
            floating: {
                x: 0,
                y: 0,
                ...await l(r)
            }
        }
    },
    getClientRects: e=>Array.from(e.getClientRects()),
    isRTL: e=>At(e).direction === "rtl"
};
function I5(e, t, r, n) {
    n === void 0 && (n = {});
    const {ancestorScroll: o=!0, ancestorResize: l=!0, elementResize: i=!0, animationFrame: a=!1} = n
      , s = o && !a
      , c = s || l ? [...Ot(e) ? Xt(e) : e.contextElement ? Xt(e.contextElement) : [], ...Xt(t)] : [];
    c.forEach(g=>{
        s && g.addEventListener("scroll", r, {
            passive: !0
        }),
        l && g.addEventListener("resize", r)
    }
    );
    let f = null;
    if (i) {
        let g = !0;
        f = new ResizeObserver(()=>{
            g || r(),
            g = !1
        }
        ),
        Ot(e) && !a && f.observe(e),
        !Ot(e) && e.contextElement && !a && f.observe(e.contextElement),
        f.observe(t)
    }
    let u, d = a ? un(e) : null;
    a && m();
    function m() {
        const g = un(e);
        d && (g.x !== d.x || g.y !== d.y || g.width !== d.width || g.height !== d.height) && r(),
        d = g,
        u = requestAnimationFrame(m)
    }
    return r(),
    ()=>{
        var g;
        c.forEach(y=>{
            s && y.removeEventListener("scroll", r),
            l && y.removeEventListener("resize", r)
        }
        ),
        (g = f) == null || g.disconnect(),
        f = null,
        a && cancelAnimationFrame(u)
    }
}
const T5 = (e,t,r)=>{
    const n = new Map
      , o = {
        platform: z5,
        ...r
    }
      , l = {
        ...o.platform,
        _c: n
    };
    return f5(e, t, {
        ...o,
        platform: l
    })
}
;
var Ju = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function ba(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let r, n, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (r = e.length,
            r != t.length)
                return !1;
            for (n = r; n-- !== 0; )
                if (!ba(e[n], t[n]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        r = o.length,
        r !== Object.keys(t).length)
            return !1;
        for (n = r; n-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(t, o[n]))
                return !1;
        for (n = r; n-- !== 0; ) {
            const l = o[n];
            if (!(l === "_owner" && e.$$typeof) && !ba(e[l], t[l]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function D5(e) {
    const t = p.useRef(e);
    return Ju(()=>{
        t.current = e
    }
    ),
    t
}
function j5(e) {
    let {middleware: t=[], placement: r="bottom", strategy: n="absolute", whileElementsMounted: o, open: l} = e === void 0 ? {} : e;
    const [i,a] = p.useState({
        x: null,
        y: null,
        strategy: n,
        placement: r,
        middlewareData: {},
        isPositioned: !1
    })
      , [s,c] = p.useState(t);
    ba(s, t) || c(t);
    const f = p.useRef(null)
      , u = p.useRef(null)
      , d = p.useRef(null)
      , m = p.useRef(i)
      , g = D5(o)
      , y = p.useCallback(()=>{
        !f.current || !u.current || T5(f.current, u.current, {
            middleware: s,
            placement: r,
            strategy: n
        }).then(P=>{
            if (x.current && !ba(m.current, P)) {
                const O = {
                    ...P,
                    isPositioned: !0
                };
                m.current = O,
                Yn.flushSync(()=>{
                    a(O)
                }
                )
            }
        }
        )
    }
    , [s, r, n]);
    Ju(()=>{
        l === !1 && m.current.isPositioned && a(P=>({
            ...P,
            isPositioned: !1
        }))
    }
    , [l]);
    const x = p.useRef(!1);
    Ju(()=>(x.current = !0,
    ()=>{
        x.current = !1
    }
    ), []);
    const h = p.useCallback(()=>{
        if (typeof d.current == "function" && (d.current(),
        d.current = null),
        f.current && u.current)
            if (g.current) {
                const P = g.current(f.current, u.current, y);
                d.current = P
            } else
                y()
    }
    , [y, g])
      , v = p.useCallback(P=>{
        f.current = P,
        h()
    }
    , [h])
      , w = p.useCallback(P=>{
        u.current = P,
        h()
    }
    , [h])
      , S = p.useMemo(()=>({
        reference: f,
        floating: u
    }), []);
    return p.useMemo(()=>({
        ...i,
        update: y,
        refs: S,
        reference: v,
        floating: w
    }), [i, y, S, v, w])
}
const $w = e=>{
    const {element: t, padding: r} = e;
    function n(o) {
        return Object.prototype.hasOwnProperty.call(o, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(o) {
            return n(t) ? t.current != null ? Ig({
                element: t.current,
                padding: r
            }).fn(o) : {} : t ? Ig({
                element: t,
                padding: r
            }).fn(o) : {}
        }
    }
}
;
var no = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function L5() {
    const e = new Map;
    return {
        emit(t, r) {
            var n;
            (n = e.get(t)) == null || n.forEach(o=>o(r))
        },
        on(t, r) {
            e.set(t, [...e.get(t) || [], r])
        },
        off(t, r) {
            e.set(t, (e.get(t) || []).filter(n=>n !== r))
        }
    }
}
let zc = !1
  , A5 = 0;
const Mg = ()=>"floating-ui-" + A5++;
function M5() {
    const [e,t] = p.useState(()=>zc ? Mg() : void 0);
    return no(()=>{
        e == null && t(Mg())
    }
    , []),
    p.useEffect(()=>{
        zc || (zc = !0)
    }
    , []),
    e
}
const Fg = nn["useId".toString()]
  , Vg = Fg ?? M5
  , F5 = p.createContext(null)
  , V5 = p.createContext(null)
  , Ew = ()=>{
    var e, t;
    return (e = (t = p.useContext(F5)) == null ? void 0 : t.id) != null ? e : null
}
  , Od = ()=>p.useContext(V5);
function hr(e) {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document
}
function Cw(e) {
    var t;
    return (t = hr(e).defaultView) != null ? t : window
}
function qr(e) {
    return e ? e instanceof Cw(e).Element : !1
}
function B5(e) {
    return e ? e instanceof Cw(e).HTMLElement : !1
}
const Bg = nn["useInsertionEffect".toString()];
function H5(e) {
    const t = p.useRef(()=>{}
    );
    return Bg ? Bg(()=>{
        t.current = e
    }
    ) : t.current = e,
    p.useCallback(function() {
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
        return t.current == null ? void 0 : t.current(...n)
    }, [])
}
function $d(e) {
    let {open: t=!1, onOpenChange: r, whileElementsMounted: n, placement: o, middleware: l, strategy: i, nodeId: a} = e === void 0 ? {} : e;
    const [s,c] = p.useState(null)
      , f = Od()
      , u = p.useRef(null)
      , d = p.useRef({})
      , m = p.useState(()=>L5())[0]
      , g = j5({
        placement: o,
        middleware: l,
        strategy: i,
        whileElementsMounted: n
    })
      , y = H5(r)
      , x = p.useMemo(()=>({
        ...g.refs,
        domReference: u
    }), [g.refs])
      , h = p.useMemo(()=>({
        ...g,
        refs: x,
        dataRef: d,
        nodeId: a,
        events: m,
        open: t,
        onOpenChange: y,
        _: {
            domReference: s
        }
    }), [g, a, m, t, y, x, s]);
    no(()=>{
        const S = f == null ? void 0 : f.nodesRef.current.find(P=>P.id === a);
        S && (S.context = h)
    }
    );
    const {reference: v} = g
      , w = p.useCallback(S=>{
        (qr(S) || S === null) && (h.refs.domReference.current = S,
        c(S)),
        v(S)
    }
    , [v, h.refs]);
    return p.useMemo(()=>({
        ...g,
        context: h,
        refs: x,
        reference: w
    }), [g, x, h, w])
}
function Ic(e, t, r) {
    const n = new Map;
    return {
        ...r === "floating" && {
            tabIndex: -1
        },
        ...e,
        ...t.map(o=>o ? o[r] : null).concat(e).reduce((o,l)=>(l && Object.entries(l).forEach(i=>{
            let[a,s] = i;
            if (a.indexOf("on") === 0) {
                if (n.has(a) || n.set(a, []),
                typeof s == "function") {
                    var c;
                    (c = n.get(a)) == null || c.push(s),
                    o[a] = function() {
                        for (var f, u = arguments.length, d = new Array(u), m = 0; m < u; m++)
                            d[m] = arguments[m];
                        (f = n.get(a)) == null || f.forEach(g=>g(...d))
                    }
                }
            } else
                o[a] = s
        }
        ),
        o), {})
    }
}
const W5 = function(e) {
    e === void 0 && (e = []);
    const t = e
      , r = p.useCallback(l=>Ic(l, e, "reference"), t)
      , n = p.useCallback(l=>Ic(l, e, "floating"), t)
      , o = p.useCallback(l=>Ic(l, e, "item"), t);
    return p.useMemo(()=>({
        getReferenceProps: r,
        getFloatingProps: n,
        getItemProps: o
    }), [r, n, o])
};
function Tc(e, t) {
    var r;
    let n = (r = e.filter(i=>{
        var a;
        return i.parentId === t && ((a = i.context) == null ? void 0 : a.open)
    }
    )) != null ? r : []
      , o = n;
    for (; o.length; ) {
        var l;
        o = (l = e.filter(i=>{
            var a;
            return (a = o) == null ? void 0 : a.some(s=>{
                var c;
                return i.parentId === s.id && ((c = i.context) == null ? void 0 : c.open)
            }
            )
        }
        )) != null ? l : [],
        n = n.concat(o)
    }
    return n
}
function U5(e) {
    return "composedPath"in e ? e.composedPath()[0] : e.target
}
function Hg(e) {
    const t = p.useRef(e);
    return no(()=>{
        t.current = e
    }
    ),
    t
}
function Y5(e) {
    const t = p.useRef();
    return no(()=>{
        t.current = e
    }
    , [e]),
    t.current
}
function Ri(e, t, r) {
    return r && r !== "mouse" ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t]
}
const G5 = function(e, t) {
    let {enabled: r=!0, delay: n=0, handleClose: o=null, mouseOnly: l=!1, restMs: i=0, move: a=!0} = t === void 0 ? {} : t;
    const {open: s, onOpenChange: c, dataRef: f, events: u, refs: d, _: m} = e
      , g = Od()
      , y = Ew()
      , x = Hg(o)
      , h = Hg(n)
      , v = Y5(s)
      , w = p.useRef()
      , S = p.useRef()
      , P = p.useRef()
      , O = p.useRef()
      , b = p.useRef(!0)
      , $ = p.useRef(!1)
      , E = p.useCallback(()=>{
        var L;
        const A = (L = f.current.openEvent) == null ? void 0 : L.type;
        return (A == null ? void 0 : A.includes("mouse")) && A !== "mousedown"
    }
    , [f]);
    p.useEffect(()=>{
        if (!r)
            return;
        function L() {
            clearTimeout(S.current),
            clearTimeout(O.current),
            b.current = !0
        }
        return u.on("dismiss", L),
        ()=>{
            u.off("dismiss", L)
        }
    }
    , [r, u, d]),
    p.useEffect(()=>{
        if (!r || !x.current)
            return;
        function L() {
            E() && c(!1)
        }
        const A = hr(d.floating.current).documentElement;
        return A.addEventListener("mouseleave", L),
        ()=>{
            A.removeEventListener("mouseleave", L)
        }
    }
    , [d, c, r, x, f, E]);
    const k = p.useCallback(function(L) {
        L === void 0 && (L = !0);
        const A = Ri(h.current, "close", w.current);
        A && !P.current ? (clearTimeout(S.current),
        S.current = setTimeout(()=>c(!1), A)) : L && (clearTimeout(S.current),
        c(!1))
    }, [h, c])
      , j = p.useCallback(()=>{
        P.current && (hr(d.floating.current).removeEventListener("pointermove", P.current),
        P.current = void 0)
    }
    , [d])
      , T = p.useCallback(()=>{
        hr(d.floating.current).body.style.pointerEvents = "",
        $.current = !1
    }
    , [d]);
    return p.useEffect(()=>{
        if (!r)
            return;
        function L() {
            return f.current.openEvent ? ["click", "mousedown"].includes(f.current.openEvent.type) : !1
        }
        function A(z) {
            if (clearTimeout(S.current),
            b.current = !1,
            l && w.current !== "mouse" || i > 0 && Ri(h.current, "open") === 0)
                return;
            f.current.openEvent = z;
            const D = Ri(h.current, "open", w.current);
            D ? S.current = setTimeout(()=>{
                c(!0)
            }
            , D) : c(!0)
        }
        function B(z) {
            if (L())
                return;
            const D = hr(d.floating.current);
            if (clearTimeout(O.current),
            x.current) {
                clearTimeout(S.current),
                P.current && D.removeEventListener("pointermove", P.current),
                P.current = x.current({
                    ...e,
                    tree: g,
                    x: z.clientX,
                    y: z.clientY,
                    onClose() {
                        T(),
                        j(),
                        k()
                    }
                }),
                D.addEventListener("pointermove", P.current);
                return
            }
            k()
        }
        function U(z) {
            L() || x.current == null || x.current({
                ...e,
                tree: g,
                x: z.clientX,
                y: z.clientY,
                leave: !0,
                onClose() {
                    T(),
                    j(),
                    k()
                }
            })(z)
        }
        const Q = d.floating.current
          , R = d.domReference.current;
        if (qr(R))
            return s && R.addEventListener("mouseleave", U),
            Q == null || Q.addEventListener("mouseleave", U),
            a && R.addEventListener("mousemove", A, {
                once: !0
            }),
            R.addEventListener("mouseenter", A),
            R.addEventListener("mouseleave", B),
            ()=>{
                s && R.removeEventListener("mouseleave", U),
                Q == null || Q.removeEventListener("mouseleave", U),
                a && R.removeEventListener("mousemove", A),
                R.removeEventListener("mouseenter", A),
                R.removeEventListener("mouseleave", B)
            }
    }
    , [m.domReference, r, e, l, i, a, k, j, T, c, s, g, d, h, x, f]),
    no(()=>{
        if (r && s && x.current && x.current.__options.blockPointerEvents && E()) {
            hr(d.floating.current).body.style.pointerEvents = "none",
            $.current = !0;
            const B = d.domReference.current
              , U = d.floating.current;
            if (qr(B) && U) {
                var L, A;
                const Q = g == null || (L = g.nodesRef.current.find(R=>R.id === y)) == null || (A = L.context) == null ? void 0 : A.refs.floating.current;
                return Q && (Q.style.pointerEvents = ""),
                B.style.pointerEvents = "auto",
                U.style.pointerEvents = "auto",
                ()=>{
                    B.style.pointerEvents = "",
                    U.style.pointerEvents = ""
                }
            }
        }
    }
    , [r, s, y, d, g, x, f, E]),
    no(()=>{
        v && !s && (w.current = void 0,
        j(),
        T())
    }
    ),
    p.useEffect(()=>()=>{
        j(),
        clearTimeout(S.current),
        clearTimeout(O.current),
        $.current && T()
    }
    , [r, j, T]),
    p.useMemo(()=>{
        if (!r)
            return {};
        function L(A) {
            w.current = A.pointerType
        }
        return {
            reference: {
                onPointerDown: L,
                onPointerEnter: L,
                onMouseMove() {
                    s || i === 0 || (clearTimeout(O.current),
                    O.current = setTimeout(()=>{
                        b.current || c(!0)
                    }
                    , i))
                }
            },
            floating: {
                onMouseEnter() {
                    clearTimeout(S.current)
                },
                onMouseLeave() {
                    k(!1)
                }
            }
        }
    }
    , [r, i, s, c, k])
}
  , kw = p.createContext({
    delay: 1e3,
    initialDelay: 1e3,
    currentId: null,
    setCurrentId: ()=>{}
    ,
    setState: ()=>{}
})
  , Rw = ()=>p.useContext(kw)
  , Q5 = e=>{
    let {children: t, delay: r} = e;
    const [n,o] = p.useState({
        delay: r,
        initialDelay: r,
        currentId: null
    })
      , l = p.useCallback(i=>{
        o(a=>({
            ...a,
            currentId: i
        }))
    }
    , []);
    return p.createElement(kw.Provider, {
        value: p.useMemo(()=>({
            ...n,
            setState: o,
            setCurrentId: l
        }), [n, o, l])
    }, t)
}
  , X5 = (e,t)=>{
    let {open: r, onOpenChange: n} = e
      , {id: o} = t;
    const {currentId: l, initialDelay: i, setState: a} = Rw();
    p.useEffect(()=>{
        l && (a(s=>({
            ...s,
            delay: {
                open: 1,
                close: Ri(i, "close")
            }
        })),
        l !== o && n(!1))
    }
    , [o, n, a, l, i]),
    p.useEffect(()=>{
        !r && l === o && (n(!1),
        a(s=>({
            ...s,
            delay: i,
            currentId: null
        })))
    }
    , [r, a, l, o, n, i])
}
  , K5 = function(e, t) {
    let {open: r} = e
      , {enabled: n=!0, role: o="dialog"} = t === void 0 ? {} : t;
    const l = Vg()
      , i = Vg();
    return p.useMemo(()=>{
        const a = {
            id: l,
            role: o
        };
        return n ? o === "tooltip" ? {
            reference: {
                "aria-describedby": r ? l : void 0
            },
            floating: a
        } : {
            reference: {
                "aria-expanded": r ? "true" : "false",
                "aria-haspopup": o === "alertdialog" ? "dialog" : o,
                "aria-controls": r ? l : void 0,
                ...o === "listbox" && {
                    role: "combobox"
                },
                ...o === "menu" && {
                    id: i
                }
            },
            floating: {
                ...a,
                ...o === "menu" && {
                    "aria-labelledby": i
                }
            }
        } : {}
    }
    , [n, o, r, l, i])
};
function Dc(e, t) {
    if (t == null)
        return !1;
    if ("composedPath"in e)
        return e.composedPath().includes(t);
    const r = e;
    return r.target != null && t.contains(r.target)
}
const Z5 = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick"
}
  , J5 = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture"
}
  , q5 = function(e, t) {
    let {open: r, onOpenChange: n, refs: o, events: l, nodeId: i} = e
      , {enabled: a=!0, escapeKey: s=!0, outsidePress: c=!0, outsidePressEvent: f="pointerdown", referencePress: u=!1, referencePressEvent: d="pointerdown", ancestorScroll: m=!1, bubbles: g=!0} = t === void 0 ? {} : t;
    const y = Od()
      , x = Ew() != null
      , h = p.useRef(!1);
    return p.useEffect(()=>{
        if (!r || !a)
            return;
        function v(b) {
            if (b.key === "Escape") {
                if (!g && y && Tc(y.nodesRef.current, i).length > 0)
                    return;
                l.emit("dismiss", {
                    preventScroll: !1
                }),
                n(!1)
            }
        }
        function w(b) {
            const $ = h.current;
            if (h.current = !1,
            $)
                return;
            const E = U5(b);
            if (qr(E) && o.floating.current) {
                var k;
                const T = (k = o.floating.current.ownerDocument.defaultView) != null ? k : window
                  , L = E.scrollWidth > E.clientWidth
                  , A = E.scrollHeight > E.clientHeight;
                let B = A && b.offsetX > E.clientWidth;
                if (A && T.getComputedStyle(E).direction === "rtl" && (B = b.offsetX <= E.offsetWidth - E.clientWidth),
                B || L && b.offsetY > E.clientHeight)
                    return
            }
            const j = y && Tc(y.nodesRef.current, i).some(T=>{
                var L;
                return Dc(b, (L = T.context) == null ? void 0 : L.refs.floating.current)
            }
            );
            Dc(b, o.floating.current) || Dc(b, o.domReference.current) || j || !g && y && Tc(y.nodesRef.current, i).length > 0 || (l.emit("dismiss", x ? {
                preventScroll: !0
            } : !1),
            n(!1))
        }
        function S() {
            n(!1)
        }
        const P = hr(o.floating.current);
        s && P.addEventListener("keydown", v),
        c && P.addEventListener(f, w);
        let O = [];
        return m && (qr(o.domReference.current) && (O = Xt(o.domReference.current)),
        qr(o.floating.current) && (O = O.concat(Xt(o.floating.current))),
        !qr(o.reference.current) && o.reference.current && o.reference.current.contextElement && (O = O.concat(Xt(o.reference.current.contextElement)))),
        O = O.filter(b=>{
            var $;
            return b !== (($ = P.defaultView) == null ? void 0 : $.visualViewport)
        }
        ),
        O.forEach(b=>{
            b.addEventListener("scroll", S, {
                passive: !0
            })
        }
        ),
        ()=>{
            s && P.removeEventListener("keydown", v),
            c && P.removeEventListener(f, w),
            O.forEach(b=>{
                b.removeEventListener("scroll", S)
            }
            )
        }
    }
    , [s, c, f, l, y, i, r, n, m, a, g, o, x]),
    p.useEffect(()=>{
        h.current = !1
    }
    , [c, f]),
    p.useMemo(()=>a ? {
        reference: {
            [Z5[d]]: ()=>{
                u && (l.emit("dismiss"),
                n(!1))
            }
        },
        floating: {
            [J5[f]]: ()=>{
                h.current = !0
            }
        }
    } : {}, [a, l, u, f, d, n])
}
  , e3 = function(e, t) {
    let {open: r, onOpenChange: n, dataRef: o, refs: l, events: i} = e
      , {enabled: a=!0, keyboardOnly: s=!0} = t === void 0 ? {} : t;
    const c = p.useRef("")
      , f = p.useRef(!1)
      , u = p.useRef();
    return p.useEffect(()=>{
        var d;
        if (!a)
            return;
        const g = (d = hr(l.floating.current).defaultView) != null ? d : window;
        function y() {
            !r && B5(l.domReference.current) && l.domReference.current.blur()
        }
        return g.addEventListener("blur", y),
        ()=>{
            g.removeEventListener("blur", y)
        }
    }
    , [l, r, a]),
    p.useEffect(()=>{
        if (!a)
            return;
        function d() {
            f.current = !0
        }
        return i.on("dismiss", d),
        ()=>{
            i.off("dismiss", d)
        }
    }
    , [i, a]),
    p.useEffect(()=>()=>{
        clearTimeout(u.current)
    }
    , []),
    p.useMemo(()=>a ? {
        reference: {
            onPointerDown(d) {
                let {pointerType: m} = d;
                c.current = m,
                f.current = !!(m && s)
            },
            onPointerLeave() {
                f.current = !1
            },
            onFocus(d) {
                var m, g, y;
                f.current || d.type === "focus" && ((m = o.current.openEvent) == null ? void 0 : m.type) === "mousedown" && (g = l.domReference.current) != null && g.contains((y = o.current.openEvent) == null ? void 0 : y.target) || (o.current.openEvent = d.nativeEvent,
                n(!0))
            },
            onBlur(d) {
                const m = d.relatedTarget;
                u.current = setTimeout(()=>{
                    var g, y;
                    (g = l.floating.current) != null && g.contains(m) || (y = l.domReference.current) != null && y.contains(m) || (f.current = !1,
                    n(!1))
                }
                )
            }
        }
    } : {}, [a, s, l, o, n])
};
function Nw({opened: e, floating: t, positionDependencies: r}) {
    const [n,o] = p.useState(0);
    p.useEffect(()=>{
        if (t.refs.reference.current && t.refs.floating.current)
            return I5(t.refs.reference.current, t.refs.floating.current, t.update)
    }
    , [t.refs.reference, t.refs.floating, e, n]),
    Qt(()=>{
        t.update()
    }
    , r),
    Qt(()=>{
        o(l=>l + 1)
    }
    , [e])
}
function t3(e) {
    const t = [vw(e.offset)];
    return e.middlewares.shift && t.push(xd({
        limiter: _5()
    })),
    e.middlewares.flip && t.push(mw()),
    e.middlewares.inline && t.push(gw()),
    t.push($w({
        element: e.arrowRef,
        padding: e.arrowOffset
    })),
    t
}
function r3(e) {
    const [t,r] = Wu({
        value: e.opened,
        defaultValue: e.defaultOpened,
        finalValue: !1,
        onChange: e.onChange
    })
      , n = ()=>{
        var i;
        (i = e.onClose) == null || i.call(e),
        r(!1)
    }
      , o = ()=>{
        var i, a;
        t ? ((i = e.onClose) == null || i.call(e),
        r(!1)) : ((a = e.onOpen) == null || a.call(e),
        r(!0))
    }
      , l = $d({
        placement: e.position,
        middleware: [...t3(e), ...e.width === "target" ? [S5({
            apply({rects: i}) {
                var a, s;
                Object.assign((s = (a = l.refs.floating.current) == null ? void 0 : a.style) != null ? s : {}, {
                    width: `${i.reference.width}px`
                })
            }
        })] : []]
    });
    return Nw({
        opened: e.opened,
        positionDependencies: e.positionDependencies,
        floating: l
    }),
    Qt(()=>{
        var i;
        (i = e.onPositionChange) == null || i.call(e, l.placement)
    }
    , [l.placement]),
    {
        floating: l,
        controlled: typeof e.opened == "boolean",
        opened: t,
        onClose: n,
        onToggle: o
    }
}
const zw = {
    context: "Popover component was not found in the tree",
    children: "Popover.Target component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
}
  , [n3,Iw] = zb(zw.context);
var o3 = Object.defineProperty
  , l3 = Object.defineProperties
  , i3 = Object.getOwnPropertyDescriptors
  , Oa = Object.getOwnPropertySymbols
  , Tw = Object.prototype.hasOwnProperty
  , Dw = Object.prototype.propertyIsEnumerable
  , Wg = (e,t,r)=>t in e ? o3(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , ci = (e,t)=>{
    for (var r in t || (t = {}))
        Tw.call(t, r) && Wg(e, r, t[r]);
    if (Oa)
        for (var r of Oa(t))
            Dw.call(t, r) && Wg(e, r, t[r]);
    return e
}
  , a3 = (e,t)=>l3(e, i3(t))
  , s3 = (e,t)=>{
    var r = {};
    for (var n in e)
        Tw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Oa)
        for (var n of Oa(e))
            t.indexOf(n) < 0 && Dw.call(e, n) && (r[n] = e[n]);
    return r
}
;
const c3 = {
    refProp: "ref",
    popupType: "dialog"
}
  , jw = p.forwardRef((e,t)=>{
    const r = F("PopoverTarget", c3, e)
      , {children: n, refProp: o, popupType: l} = r
      , i = s3(r, ["children", "refProp", "popupType"]);
    if (!Ss(n))
        throw new Error(zw.children);
    const a = i
      , s = Iw()
      , c = co(s.reference, n.ref, t)
      , f = s.withRoles ? {
        "aria-haspopup": l,
        "aria-expanded": s.opened,
        "aria-controls": s.getDropdownId(),
        id: s.getTargetId()
    } : {};
    return p.cloneElement(n, ci(a3(ci(ci(ci({}, a), f), s.targetProps), {
        className: _0(s.targetProps.className, a.className, n.props.className),
        [o]: c
    }), s.controlled ? null : {
        onClick: s.onToggle
    }))
}
);
jw.displayName = "@mantine/core/PopoverTarget";
var u3 = G((e,{radius: t, shadow: r})=>({
    dropdown: {
        position: "absolute",
        backgroundColor: e.white,
        background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
        border: `1px solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]}`,
        padding: `${e.spacing.sm}px ${e.spacing.md}px`,
        boxShadow: e.shadows[r] || r || "none",
        borderRadius: e.fn.radius(t),
        "&:focus": {
            outline: 0
        }
    },
    arrow: {
        backgroundColor: "inherit",
        border: `1px solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]}`,
        zIndex: 1
    }
}));
const f3 = u3;
var d3 = Object.defineProperty
  , Ug = Object.getOwnPropertySymbols
  , p3 = Object.prototype.hasOwnProperty
  , m3 = Object.prototype.propertyIsEnumerable
  , Yg = (e,t,r)=>t in e ? d3(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Pn = (e,t)=>{
    for (var r in t || (t = {}))
        p3.call(t, r) && Yg(e, r, t[r]);
    if (Ug)
        for (var r of Ug(t))
            m3.call(t, r) && Yg(e, r, t[r]);
    return e
}
;
const Gg = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out"
};
function Lw({transition: e, state: t, duration: r, timingFunction: n}) {
    const o = {
        transitionDuration: `${r}ms`,
        transitionTimingFunction: n
    };
    return typeof e == "string" ? e in ri ? Pn(Pn(Pn({
        transitionProperty: ri[e].transitionProperty
    }, o), ri[e].common), ri[e][Gg[t]]) : null : Pn(Pn(Pn({
        transitionProperty: e.transitionProperty
    }, o), e.common), e[Gg[t]])
}
function Aw({duration: e, exitDuration: t, timingFunction: r, mounted: n, onEnter: o, onExit: l, onEntered: i, onExited: a}) {
    const s = qe()
      , c = Z0()
      , f = s.respectReducedMotion ? c : !1
      , [u,d] = p.useState(n ? "entered" : "exited");
    let m = f ? 0 : e;
    const g = p.useRef(-1)
      , y = x=>{
        const h = x ? o : l
          , v = x ? i : a;
        if (d(x ? "pre-entering" : "pre-exiting"),
        window.clearTimeout(g.current),
        m = f ? 0 : x ? e : t,
        m === 0)
            typeof h == "function" && h(),
            typeof v == "function" && v(),
            d(x ? "entered" : "exited");
        else {
            const w = window.setTimeout(()=>{
                typeof h == "function" && h(),
                d(x ? "entering" : "exiting")
            }
            , 10);
            g.current = window.setTimeout(()=>{
                window.clearTimeout(w),
                typeof v == "function" && v(),
                d(x ? "entered" : "exited")
            }
            , m)
        }
    }
    ;
    return Qt(()=>{
        y(n)
    }
    , [n]),
    p.useEffect(()=>()=>window.clearTimeout(g.current), []),
    {
        transitionDuration: m,
        transitionStatus: u,
        transitionTimingFunction: r || s.transitionTimingFunction
    }
}
function Ed({transition: e, duration: t=250, exitDuration: r=t, mounted: n, children: o, timingFunction: l, onExit: i, onEntered: a, onEnter: s, onExited: c}) {
    const {transitionDuration: f, transitionStatus: u, transitionTimingFunction: d} = Aw({
        mounted: n,
        exitDuration: r,
        duration: t,
        timingFunction: l,
        onExit: i,
        onEntered: a,
        onEnter: s,
        onExited: c
    });
    return f === 0 ? n ? _.createElement(_.Fragment, null, o({})) : null : u === "exited" ? null : _.createElement(_.Fragment, null, o(Lw({
        transition: e,
        duration: f,
        state: u,
        timingFunction: d
    })))
}
Ed.displayName = "@mantine/core/Transition";
function Mw({children: e, active: t=!0, refProp: r="ref"}) {
    const n = K0(t)
      , o = co(n, e == null ? void 0 : e.ref);
    return Ss(e) ? p.cloneElement(e, {
        [r]: o
    }) : e
}
Mw.displayName = "@mantine/core/FocusTrap";
var g3 = Object.defineProperty
  , v3 = Object.defineProperties
  , h3 = Object.getOwnPropertyDescriptors
  , Qg = Object.getOwnPropertySymbols
  , y3 = Object.prototype.hasOwnProperty
  , w3 = Object.prototype.propertyIsEnumerable
  , Xg = (e,t,r)=>t in e ? g3(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , ur = (e,t)=>{
    for (var r in t || (t = {}))
        y3.call(t, r) && Xg(e, r, t[r]);
    if (Qg)
        for (var r of Qg(t))
            w3.call(t, r) && Xg(e, r, t[r]);
    return e
}
  , ui = (e,t)=>v3(e, h3(t));
function Kg(e, t, r, n) {
    return e === "center" || n === "center" ? {
        top: t
    } : e === "end" ? {
        bottom: r
    } : e === "start" ? {
        top: r
    } : {}
}
function Zg(e, t, r, n, o) {
    return e === "center" || n === "center" ? {
        left: t
    } : e === "end" ? {
        [o === "ltr" ? "right" : "left"]: r
    } : e === "start" ? {
        [o === "ltr" ? "left" : "right"]: r
    } : {}
}
const _3 = {
    bottom: "borderTopLeftRadius",
    left: "borderTopRightRadius",
    right: "borderBottomLeftRadius",
    top: "borderBottomRightRadius"
};
function S3({position: e, withBorder: t, arrowSize: r, arrowOffset: n, arrowRadius: o, arrowPosition: l, arrowX: i, arrowY: a, dir: s}) {
    const [c,f="center"] = e.split("-")
      , u = {
        width: r,
        height: r,
        transform: "rotate(45deg)",
        position: "absolute",
        [_3[c]]: o
    }
      , d = t ? -r / 2 - 1 : -r / 2;
    return c === "left" ? ui(ur(ur({}, u), Kg(f, a, n, l)), {
        right: d,
        borderLeft: 0,
        borderBottom: 0
    }) : c === "right" ? ui(ur(ur({}, u), Kg(f, a, n, l)), {
        left: d,
        borderRight: 0,
        borderTop: 0
    }) : c === "top" ? ui(ur(ur({}, u), Zg(f, i, n, l, s)), {
        bottom: d,
        borderTop: 0,
        borderLeft: 0
    }) : c === "bottom" ? ui(ur(ur({}, u), Zg(f, i, n, l, s)), {
        top: d,
        borderBottom: 0,
        borderRight: 0
    }) : {}
}
var x3 = Object.defineProperty
  , P3 = Object.defineProperties
  , b3 = Object.getOwnPropertyDescriptors
  , $a = Object.getOwnPropertySymbols
  , Fw = Object.prototype.hasOwnProperty
  , Vw = Object.prototype.propertyIsEnumerable
  , Jg = (e,t,r)=>t in e ? x3(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , O3 = (e,t)=>{
    for (var r in t || (t = {}))
        Fw.call(t, r) && Jg(e, r, t[r]);
    if ($a)
        for (var r of $a(t))
            Vw.call(t, r) && Jg(e, r, t[r]);
    return e
}
  , $3 = (e,t)=>P3(e, b3(t))
  , E3 = (e,t)=>{
    var r = {};
    for (var n in e)
        Fw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && $a)
        for (var n of $a(e))
            t.indexOf(n) < 0 && Vw.call(e, n) && (r[n] = e[n]);
    return r
}
;
const Cd = p.forwardRef((e,t)=>{
    var r = e
      , {withBorder: n, position: o, arrowSize: l, arrowOffset: i, arrowRadius: a, arrowPosition: s, visible: c, arrowX: f, arrowY: u} = r
      , d = E3(r, ["withBorder", "position", "arrowSize", "arrowOffset", "arrowRadius", "arrowPosition", "visible", "arrowX", "arrowY"]);
    const m = qe();
    return c ? _.createElement("div", $3(O3({}, d), {
        ref: t,
        style: S3({
            withBorder: n,
            position: o,
            arrowSize: l,
            arrowOffset: i,
            arrowRadius: a,
            arrowPosition: s,
            dir: m.dir,
            arrowX: f,
            arrowY: u
        })
    })) : null
}
);
Cd.displayName = "@mantine/core/FloatingArrow";
var C3 = Object.defineProperty
  , k3 = Object.defineProperties
  , R3 = Object.getOwnPropertyDescriptors
  , Ea = Object.getOwnPropertySymbols
  , Bw = Object.prototype.hasOwnProperty
  , Hw = Object.prototype.propertyIsEnumerable
  , qg = (e,t,r)=>t in e ? C3(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , fi = (e,t)=>{
    for (var r in t || (t = {}))
        Bw.call(t, r) && qg(e, r, t[r]);
    if (Ea)
        for (var r of Ea(t))
            Hw.call(t, r) && qg(e, r, t[r]);
    return e
}
  , ev = (e,t)=>k3(e, R3(t))
  , N3 = (e,t)=>{
    var r = {};
    for (var n in e)
        Bw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ea)
        for (var n of Ea(e))
            t.indexOf(n) < 0 && Hw.call(e, n) && (r[n] = e[n]);
    return r
}
;
const z3 = {};
function Ww(e) {
    const t = F("PopoverDropdown", z3, e)
      , {style: r, className: n, children: o, onKeyDownCapture: l} = t
      , i = N3(t, ["style", "className", "children", "onKeyDownCapture"])
      , a = Iw()
      , {classes: s, cx: c} = f3({
        radius: a.radius,
        shadow: a.shadow
    }, {
        name: a.__staticSelector,
        classNames: a.classNames,
        styles: a.styles,
        unstyled: a.unstyled
    })
      , f = Y0({
        opened: a.opened,
        shouldReturnFocus: a.returnFocus
    })
      , u = a.withRoles ? {
        "aria-labelledby": a.getTargetId(),
        id: a.getDropdownId(),
        role: "dialog"
    } : {};
    return a.disabled ? null : _.createElement(Cl, {
        withinPortal: a.withinPortal
    }, _.createElement(Ed, {
        mounted: a.opened,
        transition: a.transition,
        duration: a.transitionDuration,
        exitDuration: typeof a.exitTransitionDuration == "number" ? a.exitTransitionDuration : a.transitionDuration
    }, d=>{
        var m, g;
        return _.createElement(Mw, {
            active: a.trapFocus
        }, _.createElement(K, fi(ev(fi({}, u), {
            tabIndex: -1,
            key: a.placement,
            ref: a.floating,
            style: ev(fi(fi({}, r), d), {
                zIndex: a.zIndex,
                top: (m = a.y) != null ? m : 0,
                left: (g = a.x) != null ? g : 0,
                width: a.width === "target" ? void 0 : a.width
            }),
            className: c(s.dropdown, n),
            onKeyDownCapture: Tb(a.onClose, {
                active: a.closeOnEscape,
                onTrigger: f,
                onKeyDown: l
            }),
            "data-position": a.placement
        }), i), o, _.createElement(Cd, {
            ref: a.arrowRef,
            arrowX: a.arrowX,
            arrowY: a.arrowY,
            visible: a.withArrow,
            withBorder: !0,
            position: a.placement,
            arrowSize: a.arrowSize,
            arrowRadius: a.arrowRadius,
            arrowOffset: a.arrowOffset,
            arrowPosition: a.arrowPosition,
            className: s.arrow
        })))
    }
    ))
}
Ww.displayName = "@mantine/core/PopoverDropdown";
function Uw(e, t) {
    if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
        const [r,n] = t.split("-")
          , o = r === "right" ? "left" : "right";
        return n === void 0 ? o : `${o}-${n}`
    }
    return t
}
var tv = Object.getOwnPropertySymbols
  , I3 = Object.prototype.hasOwnProperty
  , T3 = Object.prototype.propertyIsEnumerable
  , D3 = (e,t)=>{
    var r = {};
    for (var n in e)
        I3.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && tv)
        for (var n of tv(e))
            t.indexOf(n) < 0 && T3.call(e, n) && (r[n] = e[n]);
    return r
}
;
const j3 = {
    position: "bottom",
    offset: 8,
    positionDependencies: [],
    transition: "fade",
    transitionDuration: 150,
    middlewares: {
        flip: !0,
        shift: !0,
        inline: !1
    },
    arrowSize: 7,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    closeOnClickOutside: !0,
    withinPortal: !1,
    closeOnEscape: !0,
    trapFocus: !1,
    withRoles: !0,
    returnFocus: !1,
    clickOutsideEvents: ["mousedown", "touchstart"],
    zIndex: Ar("popover"),
    __staticSelector: "Popover",
    width: "max-content"
};
function fo(e) {
    var t, r, n, o, l, i;
    const a = p.useRef(null)
      , s = F("Popover", j3, e)
      , {children: c, position: f, offset: u, onPositionChange: d, positionDependencies: m, opened: g, transition: y, transitionDuration: x, width: h, middlewares: v, withArrow: w, arrowSize: S, arrowOffset: P, arrowRadius: O, arrowPosition: b, unstyled: $, classNames: E, styles: k, closeOnClickOutside: j, withinPortal: T, closeOnEscape: L, clickOutsideEvents: A, trapFocus: B, onClose: U, onOpen: Q, onChange: R, zIndex: z, radius: D, shadow: W, id: ee, defaultOpened: Z, exitTransitionDuration: $e, __staticSelector: Ee, withRoles: ne, disabled: Me, returnFocus: Mt} = s
      , vt = D3(s, ["children", "position", "offset", "onPositionChange", "positionDependencies", "opened", "transition", "transitionDuration", "width", "middlewares", "withArrow", "arrowSize", "arrowOffset", "arrowRadius", "arrowPosition", "unstyled", "classNames", "styles", "closeOnClickOutside", "withinPortal", "closeOnEscape", "clickOutsideEvents", "trapFocus", "onClose", "onOpen", "onChange", "zIndex", "radius", "shadow", "id", "defaultOpened", "exitTransitionDuration", "__staticSelector", "withRoles", "disabled", "returnFocus"])
      , [ht,hn] = p.useState(null)
      , [yn,kt] = p.useState(null)
      , Ft = El(ee)
      , wn = qe()
      , Ce = r3({
        middlewares: v,
        width: h,
        position: Uw(wn.dir, f),
        offset: u + (w ? S / 2 : 0),
        arrowRef: a,
        arrowOffset: P,
        onPositionChange: d,
        positionDependencies: m,
        opened: g,
        defaultOpened: Z,
        onChange: R,
        onOpen: Q,
        onClose: U
    });
    K$(()=>j && Ce.onClose(), A, [ht, yn]);
    const We = p.useCallback(Vr=>{
        hn(Vr),
        Ce.floating.reference(Vr)
    }
    , [Ce.floating.reference])
      , Ks = p.useCallback(Vr=>{
        kt(Vr),
        Ce.floating.floating(Vr)
    }
    , [Ce.floating.floating]);
    return _.createElement(n3, {
        value: {
            returnFocus: Mt,
            disabled: Me,
            controlled: Ce.controlled,
            reference: We,
            floating: Ks,
            x: Ce.floating.x,
            y: Ce.floating.y,
            arrowX: (n = (r = (t = Ce.floating) == null ? void 0 : t.middlewareData) == null ? void 0 : r.arrow) == null ? void 0 : n.x,
            arrowY: (i = (l = (o = Ce.floating) == null ? void 0 : o.middlewareData) == null ? void 0 : l.arrow) == null ? void 0 : i.y,
            opened: Ce.opened,
            arrowRef: a,
            transition: y,
            transitionDuration: x,
            exitTransitionDuration: $e,
            width: h,
            withArrow: w,
            arrowSize: S,
            arrowOffset: P,
            arrowRadius: O,
            arrowPosition: b,
            placement: Ce.floating.placement,
            trapFocus: B,
            withinPortal: T,
            zIndex: z,
            radius: D,
            shadow: W,
            closeOnEscape: L,
            onClose: Ce.onClose,
            onToggle: Ce.onToggle,
            getTargetId: ()=>`${Ft}-target`,
            getDropdownId: ()=>`${Ft}-dropdown`,
            withRoles: ne,
            targetProps: vt,
            __staticSelector: Ee,
            classNames: E,
            styles: k,
            unstyled: $
        }
    }, c)
}
fo.Target = jw;
fo.Dropdown = Ww;
fo.displayName = "@mantine/core/Popover";
var L3 = Object.defineProperty
  , Ca = Object.getOwnPropertySymbols
  , Yw = Object.prototype.hasOwnProperty
  , Gw = Object.prototype.propertyIsEnumerable
  , rv = (e,t,r)=>t in e ? L3(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , A3 = (e,t)=>{
    for (var r in t || (t = {}))
        Yw.call(t, r) && rv(e, r, t[r]);
    if (Ca)
        for (var r of Ca(t))
            Gw.call(t, r) && rv(e, r, t[r]);
    return e
}
  , M3 = (e,t)=>{
    var r = {};
    for (var n in e)
        Yw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ca)
        for (var n of Ca(e))
            t.indexOf(n) < 0 && Gw.call(e, n) && (r[n] = e[n]);
    return r
}
;
function F3(e) {
    var t = e
      , {children: r, component: n="div", maxHeight: o=220, direction: l="column", id: i, innerRef: a, __staticSelector: s, styles: c, classNames: f, unstyled: u} = t
      , d = M3(t, ["children", "component", "maxHeight", "direction", "id", "innerRef", "__staticSelector", "styles", "classNames", "unstyled"]);
    const {classes: m} = u5(null, {
        name: s,
        styles: c,
        classNames: f,
        unstyled: u
    });
    return _.createElement(fo.Dropdown, A3({
        p: 0,
        onMouseDown: g=>g.preventDefault()
    }, d), _.createElement("div", {
        style: {
            maxHeight: o,
            display: "flex"
        }
    }, _.createElement(K, {
        component: n || "div",
        id: `${i}-items`,
        "aria-labelledby": `${i}-label`,
        role: "listbox",
        onMouseDown: g=>g.preventDefault(),
        style: {
            flex: 1,
            overflowY: n !== yd ? "auto" : void 0
        },
        "data-combobox-popover": !0,
        ref: a
    }, _.createElement("div", {
        className: m.itemsWrapper,
        style: {
            flexDirection: l
        }
    }, r))))
}
function Go({opened: e, transition: t="fade", transitionDuration: r=0, shadow: n, withinPortal: o, children: l, __staticSelector: i, onDirectionChange: a, switchDirectionOnFlip: s, zIndex: c, dropdownPosition: f, positionDependencies: u=[], classNames: d, styles: m, unstyled: g, readOnly: y}) {
    return _.createElement(fo, {
        unstyled: g,
        classNames: d,
        styles: m,
        width: "target",
        withRoles: !1,
        opened: e,
        middlewares: {
            flip: f === "flip",
            shift: !1
        },
        position: f === "flip" ? "bottom" : f,
        positionDependencies: u,
        zIndex: c,
        __staticSelector: i,
        withinPortal: o,
        transition: t,
        transitionDuration: r,
        shadow: n,
        disabled: y,
        onPositionChange: x=>s && (a == null ? void 0 : a(x === "top" ? "column-reverse" : "column"))
    }, l)
}
Go.Target = fo.Target;
Go.Dropdown = F3;
var V3 = Object.defineProperty
  , B3 = Object.defineProperties
  , H3 = Object.getOwnPropertyDescriptors
  , ka = Object.getOwnPropertySymbols
  , Qw = Object.prototype.hasOwnProperty
  , Xw = Object.prototype.propertyIsEnumerable
  , nv = (e,t,r)=>t in e ? V3(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , jc = (e,t)=>{
    for (var r in t || (t = {}))
        Qw.call(t, r) && nv(e, r, t[r]);
    if (ka)
        for (var r of ka(t))
            Xw.call(t, r) && nv(e, r, t[r]);
    return e
}
  , W3 = (e,t)=>B3(e, H3(t))
  , U3 = (e,t)=>{
    var r = {};
    for (var n in e)
        Qw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ka)
        for (var n of ka(e))
            t.indexOf(n) < 0 && Xw.call(e, n) && (r[n] = e[n]);
    return r
}
;
function Y3(e, t, r) {
    const n = F(e, t, r)
      , {label: o, description: l, error: i, required: a, classNames: s, styles: c, className: f, unstyled: u, __staticSelector: d, sx: m, errorProps: g, labelProps: y, descriptionProps: x, wrapperProps: h, id: v, size: w, style: S, inputContainer: P, inputWrapperOrder: O, withAsterisk: b} = n
      , $ = U3(n, ["label", "description", "error", "required", "classNames", "styles", "className", "unstyled", "__staticSelector", "sx", "errorProps", "labelProps", "descriptionProps", "wrapperProps", "id", "size", "style", "inputContainer", "inputWrapperOrder", "withAsterisk"])
      , E = El(v)
      , {systemStyles: k, rest: j} = js($);
    return W3(jc({}, j), {
        classNames: s,
        styles: c,
        unstyled: u,
        wrapperProps: jc(jc({
            label: o,
            description: l,
            error: i,
            required: a,
            classNames: s,
            className: f,
            __staticSelector: d,
            sx: m,
            errorProps: g,
            labelProps: y,
            descriptionProps: x,
            unstyled: u,
            styles: c,
            id: E,
            size: w,
            style: S,
            inputContainer: P,
            inputWrapperOrder: O,
            withAsterisk: b
        }, h), k),
        inputProps: {
            required: a,
            classNames: s,
            styles: c,
            unstyled: u,
            id: E,
            size: w,
            __staticSelector: d,
            invalid: !!i
        }
    })
}
var G3 = G((e,{size: t})=>({
    label: {
        display: "inline-block",
        fontSize: e.fn.size({
            size: t,
            sizes: e.fontSizes
        }),
        fontWeight: 500,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.gray[9],
        wordBreak: "break-word",
        cursor: "default",
        WebkitTapHighlightColor: "transparent"
    },
    required: {
        color: e.fn.variant({
            variant: "filled",
            color: "red"
        }).background
    }
}));
const Q3 = G3;
var X3 = Object.defineProperty
  , Ra = Object.getOwnPropertySymbols
  , Kw = Object.prototype.hasOwnProperty
  , Zw = Object.prototype.propertyIsEnumerable
  , ov = (e,t,r)=>t in e ? X3(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , K3 = (e,t)=>{
    for (var r in t || (t = {}))
        Kw.call(t, r) && ov(e, r, t[r]);
    if (Ra)
        for (var r of Ra(t))
            Zw.call(t, r) && ov(e, r, t[r]);
    return e
}
  , Z3 = (e,t)=>{
    var r = {};
    for (var n in e)
        Kw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ra)
        for (var n of Ra(e))
            t.indexOf(n) < 0 && Zw.call(e, n) && (r[n] = e[n]);
    return r
}
;
const J3 = {
    labelElement: "label",
    size: "sm"
}
  , kd = p.forwardRef((e,t)=>{
    const r = F("InputLabel", J3, e)
      , {labelElement: n, children: o, required: l, size: i, classNames: a, styles: s, unstyled: c, className: f, htmlFor: u, __staticSelector: d} = r
      , m = Z3(r, ["labelElement", "children", "required", "size", "classNames", "styles", "unstyled", "className", "htmlFor", "__staticSelector"])
      , {classes: g, cx: y} = Q3({
        size: i
    }, {
        name: ["InputWrapper", d],
        classNames: a,
        styles: s,
        unstyled: c
    });
    return _.createElement(K, K3({
        component: n,
        ref: t,
        className: y(g.label, f),
        htmlFor: n === "label" ? u : void 0
    }, m), o, l && _.createElement("span", {
        className: g.required,
        "aria-hidden": !0
    }, " *"))
}
);
kd.displayName = "@mantine/core/InputLabel";
var q3 = G((e,{size: t})=>({
    error: {
        wordBreak: "break-word",
        color: e.fn.variant({
            variant: "filled",
            color: "red"
        }).background,
        fontSize: e.fn.size({
            size: t,
            sizes: e.fontSizes
        }) - 2,
        lineHeight: 1.2,
        display: "block"
    }
}));
const e4 = q3;
var t4 = Object.defineProperty
  , Na = Object.getOwnPropertySymbols
  , Jw = Object.prototype.hasOwnProperty
  , qw = Object.prototype.propertyIsEnumerable
  , lv = (e,t,r)=>t in e ? t4(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , r4 = (e,t)=>{
    for (var r in t || (t = {}))
        Jw.call(t, r) && lv(e, r, t[r]);
    if (Na)
        for (var r of Na(t))
            qw.call(t, r) && lv(e, r, t[r]);
    return e
}
  , n4 = (e,t)=>{
    var r = {};
    for (var n in e)
        Jw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Na)
        for (var n of Na(e))
            t.indexOf(n) < 0 && qw.call(e, n) && (r[n] = e[n]);
    return r
}
;
const o4 = {
    size: "sm"
}
  , Rd = p.forwardRef((e,t)=>{
    const r = F("InputError", o4, e)
      , {children: n, className: o, classNames: l, styles: i, unstyled: a, size: s, __staticSelector: c} = r
      , f = n4(r, ["children", "className", "classNames", "styles", "unstyled", "size", "__staticSelector"])
      , {classes: u, cx: d} = e4({
        size: s
    }, {
        name: ["InputWrapper", c],
        classNames: l,
        styles: i,
        unstyled: a
    });
    return _.createElement(q, r4({
        className: d(u.error, o),
        ref: t
    }, f), n)
}
);
Rd.displayName = "@mantine/core/InputError";
var l4 = G((e,{size: t})=>({
    description: {
        wordBreak: "break-word",
        color: e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6],
        fontSize: e.fn.size({
            size: t,
            sizes: e.fontSizes
        }) - 2,
        lineHeight: 1.2,
        display: "block"
    }
}));
const i4 = l4;
var a4 = Object.defineProperty
  , za = Object.getOwnPropertySymbols
  , e_ = Object.prototype.hasOwnProperty
  , t_ = Object.prototype.propertyIsEnumerable
  , iv = (e,t,r)=>t in e ? a4(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , s4 = (e,t)=>{
    for (var r in t || (t = {}))
        e_.call(t, r) && iv(e, r, t[r]);
    if (za)
        for (var r of za(t))
            t_.call(t, r) && iv(e, r, t[r]);
    return e
}
  , c4 = (e,t)=>{
    var r = {};
    for (var n in e)
        e_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && za)
        for (var n of za(e))
            t.indexOf(n) < 0 && t_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const u4 = {
    size: "sm"
}
  , Nd = p.forwardRef((e,t)=>{
    const r = F("InputDescription", u4, e)
      , {children: n, className: o, classNames: l, styles: i, unstyled: a, size: s, __staticSelector: c} = r
      , f = c4(r, ["children", "className", "classNames", "styles", "unstyled", "size", "__staticSelector"])
      , {classes: u, cx: d} = i4({
        size: s
    }, {
        name: ["InputWrapper", c],
        classNames: l,
        styles: i,
        unstyled: a
    });
    return _.createElement(q, s4({
        color: "dimmed",
        className: d(u.description, o),
        ref: t,
        unstyled: a
    }, f), n)
}
);
Nd.displayName = "@mantine/core/InputDescription";
const r_ = p.createContext({
    offsetBottom: !1,
    offsetTop: !1,
    describedBy: void 0
})
  , f4 = r_.Provider
  , d4 = ()=>p.useContext(r_);
function p4(e, {hasDescription: t, hasError: r}) {
    const n = e.findIndex(s=>s === "input")
      , o = e[n - 1]
      , l = e[n + 1];
    return {
        offsetBottom: t && l === "description" || r && l === "error",
        offsetTop: t && o === "description" || r && o === "error"
    }
}
var m4 = Object.defineProperty
  , g4 = Object.defineProperties
  , v4 = Object.getOwnPropertyDescriptors
  , av = Object.getOwnPropertySymbols
  , h4 = Object.prototype.hasOwnProperty
  , y4 = Object.prototype.propertyIsEnumerable
  , sv = (e,t,r)=>t in e ? m4(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , w4 = (e,t)=>{
    for (var r in t || (t = {}))
        h4.call(t, r) && sv(e, r, t[r]);
    if (av)
        for (var r of av(t))
            y4.call(t, r) && sv(e, r, t[r]);
    return e
}
  , _4 = (e,t)=>g4(e, v4(t))
  , S4 = G(e=>({
    root: _4(w4({}, e.fn.fontStyles()), {
        lineHeight: e.lineHeight
    })
}));
const x4 = S4;
var P4 = Object.defineProperty
  , b4 = Object.defineProperties
  , O4 = Object.getOwnPropertyDescriptors
  , Ia = Object.getOwnPropertySymbols
  , n_ = Object.prototype.hasOwnProperty
  , o_ = Object.prototype.propertyIsEnumerable
  , cv = (e,t,r)=>t in e ? P4(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , fr = (e,t)=>{
    for (var r in t || (t = {}))
        n_.call(t, r) && cv(e, r, t[r]);
    if (Ia)
        for (var r of Ia(t))
            o_.call(t, r) && cv(e, r, t[r]);
    return e
}
  , uv = (e,t)=>b4(e, O4(t))
  , $4 = (e,t)=>{
    var r = {};
    for (var n in e)
        n_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ia)
        for (var n of Ia(e))
            t.indexOf(n) < 0 && o_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const E4 = {
    labelElement: "label",
    size: "sm",
    inputContainer: e=>e,
    inputWrapperOrder: ["label", "description", "input", "error"]
}
  , l_ = p.forwardRef((e,t)=>{
    const r = F("InputWrapper", E4, e)
      , {className: n, label: o, children: l, required: i, id: a, error: s, description: c, labelElement: f, labelProps: u, descriptionProps: d, errorProps: m, classNames: g, styles: y, size: x, inputContainer: h, __staticSelector: v, unstyled: w, inputWrapperOrder: S, withAsterisk: P} = r
      , O = $4(r, ["className", "label", "children", "required", "id", "error", "description", "labelElement", "labelProps", "descriptionProps", "errorProps", "classNames", "styles", "size", "inputContainer", "__staticSelector", "unstyled", "inputWrapperOrder", "withAsterisk"])
      , {classes: b, cx: $} = x4(null, {
        classNames: g,
        styles: y,
        name: ["InputWrapper", v],
        unstyled: w
    })
      , E = {
        classNames: g,
        styles: y,
        unstyled: w,
        size: x,
        __staticSelector: v
    }
      , k = typeof P == "boolean" ? P : i
      , j = a ? `${a}-error` : m == null ? void 0 : m.id
      , T = a ? `${a}-description` : d == null ? void 0 : d.id
      , A = `${!!s && typeof s != "boolean" ? j : ""} ${c ? T : ""}`
      , B = A.trim().length > 0 ? A.trim() : void 0
      , U = o && _.createElement(kd, fr(fr({
        key: "label",
        labelElement: f,
        id: a ? `${a}-label` : void 0,
        htmlFor: a,
        required: k
    }, E), u), o)
      , Q = c && _.createElement(Nd, uv(fr(fr({
        key: "description"
    }, d), E), {
        size: (d == null ? void 0 : d.size) || E.size,
        id: (d == null ? void 0 : d.id) || T
    }), c)
      , R = _.createElement(p.Fragment, {
        key: "input"
    }, h(l))
      , z = typeof s != "boolean" && s && _.createElement(Rd, uv(fr(fr({}, m), E), {
        size: (m == null ? void 0 : m.size) || E.size,
        key: "error",
        id: (m == null ? void 0 : m.id) || j
    }), s)
      , D = S.map(W=>{
        switch (W) {
        case "label":
            return U;
        case "input":
            return R;
        case "description":
            return Q;
        case "error":
            return z;
        default:
            return null
        }
    }
    );
    return _.createElement(f4, {
        value: fr({
            describedBy: B
        }, p4(S, {
            hasDescription: !!Q,
            hasError: !!z
        }))
    }, _.createElement(K, fr({
        className: $(b.root, n),
        ref: t
    }, O), D))
}
);
l_.displayName = "@mantine/core/InputWrapper";
var C4 = Object.defineProperty
  , Ta = Object.getOwnPropertySymbols
  , i_ = Object.prototype.hasOwnProperty
  , a_ = Object.prototype.propertyIsEnumerable
  , fv = (e,t,r)=>t in e ? C4(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , k4 = (e,t)=>{
    for (var r in t || (t = {}))
        i_.call(t, r) && fv(e, r, t[r]);
    if (Ta)
        for (var r of Ta(t))
            a_.call(t, r) && fv(e, r, t[r]);
    return e
}
  , R4 = (e,t)=>{
    var r = {};
    for (var n in e)
        i_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ta)
        for (var n of Ta(e))
            t.indexOf(n) < 0 && a_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const N4 = {}
  , s_ = p.forwardRef((e,t)=>{
    const r = F("InputPlaceholder", N4, e)
      , {sx: n} = r
      , o = R4(r, ["sx"]);
    return _.createElement(K, k4({
        component: "span",
        sx: [l=>l.fn.placeholderStyles(), ...eo(n)],
        ref: t
    }, o))
}
);
s_.displayName = "@mantine/core/InputPlaceholder";
var z4 = Object.defineProperty
  , I4 = Object.defineProperties
  , T4 = Object.getOwnPropertyDescriptors
  , dv = Object.getOwnPropertySymbols
  , D4 = Object.prototype.hasOwnProperty
  , j4 = Object.prototype.propertyIsEnumerable
  , pv = (e,t,r)=>t in e ? z4(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , di = (e,t)=>{
    for (var r in t || (t = {}))
        D4.call(t, r) && pv(e, r, t[r]);
    if (dv)
        for (var r of dv(t))
            j4.call(t, r) && pv(e, r, t[r]);
    return e
}
  , Lc = (e,t)=>I4(e, T4(t));
const Ye = {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 50,
    xl: 60
};
function L4({theme: e, variant: t}) {
    return t === "default" ? {
        border: `1px solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4]}`,
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
        transition: "border-color 100ms ease",
        "&:focus, &:focus-within": e.focusRingStyles.inputStyles(e)
    } : t === "filled" ? {
        border: "1px solid transparent",
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[1],
        "&:focus, &:focus-within": e.focusRingStyles.inputStyles(e)
    } : {
        borderWidth: 0,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        backgroundColor: "transparent",
        minHeight: 28,
        outline: 0,
        "&:focus, &:focus-within": {
            outline: "none",
            borderColor: "transparent"
        },
        "&:disabled": {
            backgroundColor: "transparent",
            "&:focus, &:focus-within": {
                outline: "none",
                borderColor: "transparent"
            }
        }
    }
}
var A4 = G((e,{size: t, multiline: r, radius: n, variant: o, invalid: l, rightSectionWidth: i, withRightSection: a, iconWidth: s, offsetBottom: c, offsetTop: f, pointer: u})=>{
    const d = e.fn.variant({
        variant: "filled",
        color: "red"
    }).background
      , m = o === "default" || o === "filled" ? {
        minHeight: e.fn.size({
            size: t,
            sizes: Ye
        }),
        paddingLeft: e.fn.size({
            size: t,
            sizes: Ye
        }) / 3,
        paddingRight: a ? i : e.fn.size({
            size: t,
            sizes: Ye
        }) / 3,
        borderRadius: e.fn.radius(n)
    } : null;
    return {
        wrapper: {
            position: "relative",
            marginTop: f ? `calc(${e.spacing.xs}px / 2)` : void 0,
            marginBottom: c ? `calc(${e.spacing.xs}px / 2)` : void 0
        },
        input: di(Lc(di(Lc(di({}, e.fn.fontStyles()), {
            height: r ? o === "unstyled" ? void 0 : "auto" : e.fn.size({
                size: t,
                sizes: Ye
            }),
            WebkitTapHighlightColor: "transparent",
            lineHeight: r ? e.lineHeight : `${e.fn.size({
                size: t,
                sizes: Ye
            }) - 2}px`,
            appearance: "none",
            resize: "none",
            boxSizing: "border-box",
            fontSize: e.fn.size({
                size: t,
                sizes: e.fontSizes
            }),
            width: "100%",
            color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
            display: "block",
            textAlign: "left",
            cursor: u ? "pointer" : void 0
        }), m), {
            "&:disabled": {
                backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[1],
                color: e.colors.dark[2],
                opacity: .6,
                cursor: "not-allowed",
                "&::placeholder": {
                    color: e.colors.dark[2]
                }
            },
            "&::placeholder": Lc(di({}, e.fn.placeholderStyles()), {
                opacity: 1
            }),
            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
                appearance: "none"
            },
            "&[type=number]": {
                MozAppearance: "textfield"
            }
        }), L4({
            theme: e,
            variant: o
        })),
        withIcon: {
            paddingLeft: typeof s == "number" ? s : e.fn.size({
                size: t,
                sizes: Ye
            })
        },
        invalid: {
            color: d,
            borderColor: d,
            "&::placeholder": {
                opacity: 1,
                color: d
            }
        },
        disabled: {
            backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[1],
            color: e.colors.dark[2],
            opacity: .6,
            cursor: "not-allowed",
            "&::placeholder": {
                color: e.colors.dark[2]
            }
        },
        icon: {
            pointerEvents: "none",
            position: "absolute",
            zIndex: 1,
            left: 0,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: typeof s == "number" ? s : e.fn.size({
                size: t,
                sizes: Ye
            }),
            color: l ? e.colors.red[e.colorScheme === "dark" ? 6 : 7] : e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[5]
        },
        rightSection: {
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: i
        }
    }
}
);
const M4 = A4;
var F4 = Object.defineProperty
  , V4 = Object.defineProperties
  , B4 = Object.getOwnPropertyDescriptors
  , Da = Object.getOwnPropertySymbols
  , c_ = Object.prototype.hasOwnProperty
  , u_ = Object.prototype.propertyIsEnumerable
  , mv = (e,t,r)=>t in e ? F4(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , pi = (e,t)=>{
    for (var r in t || (t = {}))
        c_.call(t, r) && mv(e, r, t[r]);
    if (Da)
        for (var r of Da(t))
            u_.call(t, r) && mv(e, r, t[r]);
    return e
}
  , gv = (e,t)=>V4(e, B4(t))
  , H4 = (e,t)=>{
    var r = {};
    for (var n in e)
        c_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Da)
        for (var n of Da(e))
            t.indexOf(n) < 0 && u_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const W4 = {
    rightSectionWidth: 36,
    size: "sm",
    variant: "default"
}
  , gn = p.forwardRef((e,t)=>{
    const r = F("Input", W4, e)
      , {className: n, invalid: o, required: l, disabled: i, variant: a, icon: s, style: c, rightSectionWidth: f, iconWidth: u, rightSection: d, rightSectionProps: m, radius: g, size: y, wrapperProps: x, classNames: h, styles: v, __staticSelector: w, multiline: S, sx: P, unstyled: O, pointer: b} = r
      , $ = H4(r, ["className", "invalid", "required", "disabled", "variant", "icon", "style", "rightSectionWidth", "iconWidth", "rightSection", "rightSectionProps", "radius", "size", "wrapperProps", "classNames", "styles", "__staticSelector", "multiline", "sx", "unstyled", "pointer"])
      , {offsetBottom: E, offsetTop: k, describedBy: j} = d4()
      , {classes: T, cx: L} = M4({
        radius: g,
        size: y,
        multiline: S,
        variant: a,
        invalid: o,
        rightSectionWidth: f,
        iconWidth: u,
        withRightSection: !!d,
        offsetBottom: E,
        offsetTop: k,
        pointer: b
    }, {
        classNames: h,
        styles: v,
        name: ["Input", w],
        unstyled: O
    })
      , {systemStyles: A, rest: B} = js($);
    return _.createElement(K, pi(pi({
        className: L(T.wrapper, n),
        sx: P,
        style: c
    }, A), x), s && _.createElement("div", {
        className: T.icon
    }, s), _.createElement(K, gv(pi({
        component: "input"
    }, B), {
        ref: t,
        required: l,
        "aria-invalid": o,
        "aria-describedby": j,
        disabled: i,
        className: L(T[`${a}Variant`], T.input, {
            [T.withIcon]: s,
            [T.invalid]: o,
            [T.disabled]: i
        })
    })), d && _.createElement("div", gv(pi({}, m), {
        className: T.rightSection
    }), d))
}
);
gn.displayName = "@mantine/core/Input";
gn.Wrapper = l_;
gn.Label = kd;
gn.Description = Nd;
gn.Error = Rd;
gn.Placeholder = s_;
const ja = gn
  , U4 = {
    xs: 12,
    sm: 18,
    md: 24,
    lg: 34,
    xl: 42
};
var Y4 = G((e,{size: t, color: r, transitionDuration: n})=>{
    const o = e.fn.size({
        size: t,
        sizes: U4
    })
      , l = r || (e.colorScheme === "dark" ? e.white : e.black);
    return {
        root: {
            borderRadius: e.radius.sm,
            width: `calc(${o}px + ${e.spacing.xs}px)`,
            height: `calc(${o}px + ${e.spacing.xs}px)`,
            padding: `calc(${e.spacing.xs}px / 2)`,
            cursor: "pointer"
        },
        burger: {
            position: "relative",
            userSelect: "none",
            boxSizing: "border-box",
            "&, &::before, &::after": {
                display: "block",
                width: o,
                height: Math.ceil(o / 12),
                backgroundColor: l,
                outline: "1px solid transparent",
                transitionProperty: "background-color, transform",
                transitionDuration: `${n}ms`,
                "@media (prefers-reduced-motion)": {
                    transitionDuration: e.respectReducedMotion ? "0ms" : void 0
                }
            },
            "&::before, &::after": {
                position: "absolute",
                content: '""',
                left: 0
            },
            "&::before": {
                top: o / 3 * -1
            },
            "&::after": {
                top: o / 3
            },
            "&[data-opened]": {
                backgroundColor: "transparent",
                "&::before": {
                    transform: `translateY(${o / 3}px) rotate(45deg)`
                },
                "&::after": {
                    transform: `translateY(-${o / 3}px) rotate(-45deg)`
                }
            }
        }
    }
}
);
const G4 = Y4;
var Q4 = Object.defineProperty
  , La = Object.getOwnPropertySymbols
  , f_ = Object.prototype.hasOwnProperty
  , d_ = Object.prototype.propertyIsEnumerable
  , vv = (e,t,r)=>t in e ? Q4(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , X4 = (e,t)=>{
    for (var r in t || (t = {}))
        f_.call(t, r) && vv(e, r, t[r]);
    if (La)
        for (var r of La(t))
            d_.call(t, r) && vv(e, r, t[r]);
    return e
}
  , K4 = (e,t)=>{
    var r = {};
    for (var n in e)
        f_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && La)
        for (var n of La(e))
            t.indexOf(n) < 0 && d_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const Z4 = {
    size: "md",
    transitionDuration: 300
}
  , p_ = p.forwardRef((e,t)=>{
    const r = F("Burger", Z4, e)
      , {className: n, opened: o, color: l, size: i, classNames: a, styles: s, transitionDuration: c} = r
      , f = K4(r, ["className", "opened", "color", "size", "classNames", "styles", "transitionDuration"])
      , {classes: u, cx: d} = G4({
        color: l,
        size: i,
        transitionDuration: c
    }, {
        classNames: a,
        styles: s,
        name: "Burger"
    });
    return _.createElement(Ls, X4({
        className: d(u.root, n),
        ref: t
    }, f), _.createElement("div", {
        "data-opened": o || void 0,
        className: u.burger
    }))
}
);
p_.displayName = "@mantine/core/Burger";
var J4 = G((e,{orientation: t, buttonBorderWidth: r})=>({
    root: {
        display: "flex",
        flexDirection: t === "vertical" ? "column" : "row",
        "& [data-button]": {
            "&:first-of-type": {
                borderBottomRightRadius: 0,
                [t === "vertical" ? "borderBottomLeftRadius" : "borderTopRightRadius"]: 0,
                [t === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: r / 2
            },
            "&:last-of-type": {
                borderTopLeftRadius: 0,
                [t === "vertical" ? "borderTopRightRadius" : "borderBottomLeftRadius"]: 0,
                [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: r / 2
            },
            "&:not(:first-of-type):not(:last-of-type)": {
                borderRadius: 0,
                [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: r / 2,
                [t === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: r / 2
            },
            "& + [data-button]": {
                [t === "vertical" ? "marginTop" : "marginLeft"]: -r,
                "@media (min-resolution: 192dpi)": {
                    [t === "vertical" ? "marginTop" : "marginLeft"]: 0
                }
            }
        }
    }
}));
const q4 = J4;
var eR = Object.defineProperty
  , Aa = Object.getOwnPropertySymbols
  , m_ = Object.prototype.hasOwnProperty
  , g_ = Object.prototype.propertyIsEnumerable
  , hv = (e,t,r)=>t in e ? eR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , tR = (e,t)=>{
    for (var r in t || (t = {}))
        m_.call(t, r) && hv(e, r, t[r]);
    if (Aa)
        for (var r of Aa(t))
            g_.call(t, r) && hv(e, r, t[r]);
    return e
}
  , rR = (e,t)=>{
    var r = {};
    for (var n in e)
        m_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Aa)
        for (var n of Aa(e))
            t.indexOf(n) < 0 && g_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const nR = {
    orientation: "horizontal",
    buttonBorderWidth: 1
}
  , v_ = p.forwardRef((e,t)=>{
    const r = F("ButtonGroup", nR, e)
      , {className: n, orientation: o, buttonBorderWidth: l, unstyled: i} = r
      , a = rR(r, ["className", "orientation", "buttonBorderWidth", "unstyled"])
      , {classes: s, cx: c} = q4({
        orientation: o,
        buttonBorderWidth: l
    }, {
        name: "ButtonGroup",
        unstyled: i
    });
    return _.createElement(K, tR({
        className: c(s.root, n),
        ref: t
    }, a))
}
);
v_.displayName = "@mantine/core/ButtonGroup";
var oR = Object.defineProperty
  , lR = Object.defineProperties
  , iR = Object.getOwnPropertyDescriptors
  , yv = Object.getOwnPropertySymbols
  , aR = Object.prototype.hasOwnProperty
  , sR = Object.prototype.propertyIsEnumerable
  , wv = (e,t,r)=>t in e ? oR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Xr = (e,t)=>{
    for (var r in t || (t = {}))
        aR.call(t, r) && wv(e, r, t[r]);
    if (yv)
        for (var r of yv(t))
            sR.call(t, r) && wv(e, r, t[r]);
    return e
}
  , qu = (e,t)=>lR(e, iR(t));
const ef = {
    xs: {
        height: Ye.xs,
        paddingLeft: 14,
        paddingRight: 14
    },
    sm: {
        height: Ye.sm,
        paddingLeft: 18,
        paddingRight: 18
    },
    md: {
        height: Ye.md,
        paddingLeft: 22,
        paddingRight: 22
    },
    lg: {
        height: Ye.lg,
        paddingLeft: 26,
        paddingRight: 26
    },
    xl: {
        height: Ye.xl,
        paddingLeft: 32,
        paddingRight: 32
    },
    "compact-xs": {
        height: 22,
        paddingLeft: 7,
        paddingRight: 7
    },
    "compact-sm": {
        height: 26,
        paddingLeft: 8,
        paddingRight: 8
    },
    "compact-md": {
        height: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    "compact-lg": {
        height: 34,
        paddingLeft: 12,
        paddingRight: 12
    },
    "compact-xl": {
        height: 40,
        paddingLeft: 14,
        paddingRight: 14
    }
};
function cR({compact: e, size: t, withLeftIcon: r, withRightIcon: n}) {
    if (e)
        return ef[`compact-${t}`];
    const o = ef[t];
    return qu(Xr({}, o), {
        paddingLeft: r ? o.paddingLeft / 1.5 : o.paddingLeft,
        paddingRight: n ? o.paddingRight / 1.5 : o.paddingRight
    })
}
const uR = e=>({
    display: e ? "block" : "inline-block",
    width: e ? "100%" : "auto"
});
function fR({variant: e, theme: t, color: r, gradient: n}) {
    const o = t.fn.variant({
        color: r,
        variant: e,
        gradient: n
    });
    return e === "gradient" ? {
        border: 0,
        backgroundImage: o.background,
        color: o.color,
        "&:hover": t.fn.hover({
            backgroundSize: "200%"
        })
    } : Xr({
        border: `1px solid ${o.border}`,
        backgroundColor: o.background,
        color: o.color
    }, t.fn.hover({
        backgroundColor: o.hover
    }))
}
var dR = G((e,{color: t, size: r, radius: n, fullWidth: o, compact: l, gradient: i, variant: a, withLeftIcon: s, withRightIcon: c})=>({
    root: qu(Xr(qu(Xr(Xr(Xr(Xr({}, cR({
        compact: l,
        size: r,
        withLeftIcon: s,
        withRightIcon: c
    })), e.fn.fontStyles()), e.fn.focusStyles()), uR(o)), {
        borderRadius: e.fn.radius(n),
        fontWeight: 600,
        position: "relative",
        lineHeight: 1,
        fontSize: e.fn.size({
            size: r,
            sizes: e.fontSizes
        }),
        userSelect: "none",
        cursor: "pointer"
    }), fR({
        variant: a,
        theme: e,
        color: t,
        gradient: i
    })), {
        "&:active": e.activeStyles,
        "&:disabled, &[data-disabled]": {
            borderColor: "transparent",
            backgroundColor: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
            color: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[5],
            cursor: "not-allowed",
            backgroundImage: "none",
            pointerEvents: "none",
            "&:active": {
                transform: "none"
            }
        },
        "&[data-loading]": {
            pointerEvents: "none",
            "&::before": {
                content: '""',
                position: "absolute",
                top: -1,
                left: -1,
                right: -1,
                bottom: -1,
                backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.colors.dark[7], .5) : "rgba(255, 255, 255, .5)",
                borderRadius: e.fn.radius(n),
                cursor: "not-allowed"
            }
        }
    }),
    icon: {
        display: "flex",
        alignItems: "center"
    },
    leftIcon: {
        marginRight: 10
    },
    rightIcon: {
        marginLeft: 10
    },
    centerLoader: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        opacity: .5
    },
    inner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        overflow: "visible"
    },
    label: {
        whiteSpace: "nowrap",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
    }
}));
const pR = dR;
var mR = Object.defineProperty
  , Ma = Object.getOwnPropertySymbols
  , h_ = Object.prototype.hasOwnProperty
  , y_ = Object.prototype.propertyIsEnumerable
  , _v = (e,t,r)=>t in e ? mR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Sv = (e,t)=>{
    for (var r in t || (t = {}))
        h_.call(t, r) && _v(e, r, t[r]);
    if (Ma)
        for (var r of Ma(t))
            y_.call(t, r) && _v(e, r, t[r]);
    return e
}
  , gR = (e,t)=>{
    var r = {};
    for (var n in e)
        h_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ma)
        for (var n of Ma(e))
            t.indexOf(n) < 0 && y_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const vR = {
    size: "sm",
    type: "button",
    variant: "filled",
    loaderPosition: "left"
}
  , zd = p.forwardRef((e,t)=>{
    const r = F("Button", vR, e)
      , {className: n, size: o, color: l, type: i, disabled: a, children: s, leftIcon: c, rightIcon: f, fullWidth: u, variant: d, radius: m, uppercase: g, compact: y, loading: x, loaderPosition: h, loaderProps: v, gradient: w, classNames: S, styles: P, unstyled: O} = r
      , b = gR(r, ["className", "size", "color", "type", "disabled", "children", "leftIcon", "rightIcon", "fullWidth", "variant", "radius", "uppercase", "compact", "loading", "loaderPosition", "loaderProps", "gradient", "classNames", "styles", "unstyled"])
      , {classes: $, cx: E, theme: k} = pR({
        radius: m,
        color: l,
        size: o,
        fullWidth: u,
        compact: y,
        gradient: w,
        variant: d,
        withLeftIcon: !!c,
        withRightIcon: !!f
    }, {
        name: "Button",
        unstyled: O,
        classNames: S,
        styles: P
    })
      , j = k.fn.variant({
        color: l,
        variant: d
    })
      , T = _.createElement(pd, Sv({
        color: j.color,
        size: k.fn.size({
            size: o,
            sizes: ef
        }).height / 2
    }, v));
    return _.createElement(Ls, Sv({
        className: E($.root, n),
        type: i,
        disabled: a,
        "data-button": !0,
        "data-disabled": a || void 0,
        "data-loading": x || void 0,
        ref: t,
        unstyled: O
    }, b), _.createElement("div", {
        className: $.inner
    }, (c || x && h === "left") && _.createElement("span", {
        className: E($.icon, $.leftIcon)
    }, x && h === "left" ? T : c), x && h === "center" && _.createElement("span", {
        className: $.centerLoader
    }, T), _.createElement("span", {
        className: $.label,
        style: {
            textTransform: g ? "uppercase" : void 0
        }
    }, s), (f || x && h === "right") && _.createElement("span", {
        className: E($.icon, $.rightIcon)
    }, x && h === "right" ? T : f)))
}
);
zd.displayName = "@mantine/core/Button";
zd.Group = v_;
const Kt = zd;
var hR = G((e,{radius: t, shadow: r, withBorder: n})=>({
    root: {
        outline: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        textDecoration: "none",
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
        boxSizing: "border-box",
        borderRadius: e.fn.radius(t),
        boxShadow: e.shadows[r] || r || "none",
        border: n ? `1px solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]}` : void 0
    }
}));
const yR = hR;
var wR = Object.defineProperty
  , Fa = Object.getOwnPropertySymbols
  , w_ = Object.prototype.hasOwnProperty
  , __ = Object.prototype.propertyIsEnumerable
  , xv = (e,t,r)=>t in e ? wR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , _R = (e,t)=>{
    for (var r in t || (t = {}))
        w_.call(t, r) && xv(e, r, t[r]);
    if (Fa)
        for (var r of Fa(t))
            __.call(t, r) && xv(e, r, t[r]);
    return e
}
  , SR = (e,t)=>{
    var r = {};
    for (var n in e)
        w_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Fa)
        for (var n of Fa(e))
            t.indexOf(n) < 0 && __.call(e, n) && (r[n] = e[n]);
    return r
}
;
const xR = {}
  , S_ = p.forwardRef((e,t)=>{
    const r = F("Paper", xR, e)
      , {className: n, children: o, radius: l, withBorder: i, shadow: a, unstyled: s} = r
      , c = SR(r, ["className", "children", "radius", "withBorder", "shadow", "unstyled"])
      , {classes: f, cx: u} = yR({
        radius: l,
        shadow: a,
        withBorder: i
    }, {
        name: "Paper",
        unstyled: s
    });
    return _.createElement(K, _R({
        className: u(f.root, n),
        ref: t
    }, c), o)
}
);
S_.displayName = "@mantine/core/Paper";
const Id = S_
  , x_ = p.createContext({
    padding: 0
})
  , PR = x_.Provider
  , bR = ()=>p.useContext(x_).padding;
var OR = G((e,{padding: t, withBorder: r, inheritPadding: n})=>{
    const o = e.fn.size({
        size: t,
        sizes: e.spacing
    })
      , l = -1 * o
      , i = e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3];
    return {
        cardSection: {
            display: "block",
            marginLeft: l,
            marginRight: l,
            paddingLeft: n ? o : void 0,
            paddingRight: n ? o : void 0,
            borderTop: r && `1px solid ${i}`,
            borderBottom: r && `1px solid ${i}`,
            "& + &": {
                borderTop: 0
            },
            "&[data-first]": {
                marginTop: l,
                borderTop: 0,
                borderBottom: r && `1px solid ${i}`
            },
            "&[data-last]": {
                marginBottom: l,
                borderBottom: 0
            }
        }
    }
}
);
const $R = OR;
var ER = Object.defineProperty
  , Va = Object.getOwnPropertySymbols
  , P_ = Object.prototype.hasOwnProperty
  , b_ = Object.prototype.propertyIsEnumerable
  , Pv = (e,t,r)=>t in e ? ER(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , CR = (e,t)=>{
    for (var r in t || (t = {}))
        P_.call(t, r) && Pv(e, r, t[r]);
    if (Va)
        for (var r of Va(t))
            b_.call(t, r) && Pv(e, r, t[r]);
    return e
}
  , kR = (e,t)=>{
    var r = {};
    for (var n in e)
        P_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Va)
        for (var n of Va(e))
            t.indexOf(n) < 0 && b_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const RR = {
    withBorder: !1,
    inheritPadding: !1
}
  , O_ = p.forwardRef((e,t)=>{
    const r = F("CardSection", RR, e)
      , {className: n, withBorder: o, inheritPadding: l, unstyled: i} = r
      , a = kR(r, ["className", "withBorder", "inheritPadding", "unstyled"])
      , {classes: s, cx: c} = $R({
        padding: bR(),
        withBorder: o,
        inheritPadding: l
    }, {
        name: "Card",
        unstyled: i
    });
    return _.createElement(K, CR({
        className: c(s.cardSection, n),
        ref: t
    }, a))
}
);
O_.displayName = "@mantine/core/CardSection";
const $_ = O_;
var NR = G(e=>({
    root: {
        position: "relative",
        overflow: "hidden",
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.white
    }
}));
const zR = NR;
var IR = Object.defineProperty
  , Ba = Object.getOwnPropertySymbols
  , E_ = Object.prototype.hasOwnProperty
  , C_ = Object.prototype.propertyIsEnumerable
  , bv = (e,t,r)=>t in e ? IR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , TR = (e,t)=>{
    for (var r in t || (t = {}))
        E_.call(t, r) && bv(e, r, t[r]);
    if (Ba)
        for (var r of Ba(t))
            C_.call(t, r) && bv(e, r, t[r]);
    return e
}
  , DR = (e,t)=>{
    var r = {};
    for (var n in e)
        E_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ba)
        for (var n of Ba(e))
            t.indexOf(n) < 0 && C_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const jR = {
    p: "md"
}
  , Td = p.forwardRef((e,t)=>{
    const r = F("Card", jR, e)
      , {className: n, p: o, radius: l, children: i, unstyled: a} = r
      , s = DR(r, ["className", "p", "radius", "children", "unstyled"])
      , {classes: c, cx: f} = zR(null, {
        name: "Card",
        unstyled: a
    })
      , u = p.Children.toArray(i)
      , d = u.map((m,g)=>typeof m == "object" && m && "type"in m && m.type === $_ ? p.cloneElement(m, {
        padding: o,
        "data-first": g === 0 || void 0,
        "data-last": g === u.length - 1 || void 0
    }) : m);
    return _.createElement(PR, {
        value: {
            padding: o
        }
    }, _.createElement(Id, TR({
        className: f(c.root, n),
        radius: l,
        p: o,
        ref: t
    }, s), d))
}
);
Td.Section = $_;
Td.displayName = "@mantine/core/Card";
const k_ = Td;
function LR(e) {
    return p.Children.toArray(e).filter(Boolean)
}
const AR = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
    apart: "space-between"
};
var MR = G((e,{spacing: t, position: r, noWrap: n, grow: o, align: l, count: i})=>({
    root: {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        alignItems: l || "center",
        flexWrap: n ? "nowrap" : "wrap",
        justifyContent: AR[r],
        gap: e.fn.size({
            size: t,
            sizes: e.spacing
        }),
        "& > *": {
            boxSizing: "border-box",
            maxWidth: o ? `calc(${100 / i}% - ${e.fn.size({
                size: t,
                sizes: e.spacing
            }) - e.fn.size({
                size: t,
                sizes: e.spacing
            }) / i}px)` : void 0,
            flexGrow: o ? 1 : 0
        }
    }
}));
const FR = MR;
var VR = Object.defineProperty
  , Ha = Object.getOwnPropertySymbols
  , R_ = Object.prototype.hasOwnProperty
  , N_ = Object.prototype.propertyIsEnumerable
  , Ov = (e,t,r)=>t in e ? VR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , BR = (e,t)=>{
    for (var r in t || (t = {}))
        R_.call(t, r) && Ov(e, r, t[r]);
    if (Ha)
        for (var r of Ha(t))
            N_.call(t, r) && Ov(e, r, t[r]);
    return e
}
  , HR = (e,t)=>{
    var r = {};
    for (var n in e)
        R_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ha)
        for (var n of Ha(e))
            t.indexOf(n) < 0 && N_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const WR = {
    position: "left",
    spacing: "md"
}
  , z_ = p.forwardRef((e,t)=>{
    const r = F("Group", WR, e)
      , {className: n, position: o, align: l, children: i, noWrap: a, grow: s, spacing: c, unstyled: f} = r
      , u = HR(r, ["className", "position", "align", "children", "noWrap", "grow", "spacing", "unstyled"])
      , d = LR(i)
      , {classes: m, cx: g} = FR({
        align: l,
        grow: s,
        noWrap: a,
        spacing: c,
        position: o,
        count: d.length
    }, {
        unstyled: f,
        name: "Group"
    });
    return _.createElement(K, BR({
        className: g(m.root, n),
        ref: t
    }, u), d)
}
);
z_.displayName = "@mantine/core/Group";
var UR = G((e,{spacing: t, align: r, justify: n})=>({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: r,
        justifyContent: n,
        gap: e.fn.size({
            size: t,
            sizes: e.spacing
        })
    }
}));
const YR = UR;
var GR = Object.defineProperty
  , Wa = Object.getOwnPropertySymbols
  , I_ = Object.prototype.hasOwnProperty
  , T_ = Object.prototype.propertyIsEnumerable
  , $v = (e,t,r)=>t in e ? GR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , QR = (e,t)=>{
    for (var r in t || (t = {}))
        I_.call(t, r) && $v(e, r, t[r]);
    if (Wa)
        for (var r of Wa(t))
            T_.call(t, r) && $v(e, r, t[r]);
    return e
}
  , XR = (e,t)=>{
    var r = {};
    for (var n in e)
        I_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Wa)
        for (var n of Wa(e))
            t.indexOf(n) < 0 && T_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const KR = {
    spacing: "md",
    align: "stretch",
    justify: "top"
}
  , D_ = p.forwardRef((e,t)=>{
    const r = F("Stack", KR, e)
      , {spacing: n, className: o, align: l, justify: i, unstyled: a} = r
      , s = XR(r, ["spacing", "className", "align", "justify", "unstyled"])
      , {classes: c, cx: f} = YR({
        spacing: n,
        align: l,
        justify: i
    }, {
        name: "Stack",
        unstyled: a
    });
    return _.createElement(K, QR({
        className: f(c.root, o),
        ref: t
    }, s))
}
);
D_.displayName = "@mantine/core/Stack";
function j_({transitions: e, duration: t=250, exitDuration: r=t, mounted: n, children: o, timingFunction: l, onExit: i, onEntered: a, onEnter: s, onExited: c}) {
    const {transitionDuration: f, transitionStatus: u, transitionTimingFunction: d} = Aw({
        mounted: n,
        duration: t,
        exitDuration: r,
        timingFunction: l,
        onExit: i,
        onEntered: a,
        onEnter: s,
        onExited: c
    });
    if (f === 0)
        return n ? _.createElement(_.Fragment, null, o({})) : null;
    if (u === "exited")
        return null;
    const m = Object.keys(e).reduce((g,y)=>(g[y] = Lw({
        duration: e[y].duration,
        transition: e[y].transition,
        timingFunction: e[y].timingFunction || d,
        state: u
    }),
    g), {});
    return _.createElement(_.Fragment, null, o(m))
}
j_.displayName = "@mantine/core/GroupedTransition";
var ZR = G((e,{zIndex: t})=>({
    root: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: t
    }
}));
const JR = ZR;
var qR = Object.defineProperty
  , e6 = Object.defineProperties
  , t6 = Object.getOwnPropertyDescriptors
  , Ua = Object.getOwnPropertySymbols
  , L_ = Object.prototype.hasOwnProperty
  , A_ = Object.prototype.propertyIsEnumerable
  , Ev = (e,t,r)=>t in e ? qR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Ac = (e,t)=>{
    for (var r in t || (t = {}))
        L_.call(t, r) && Ev(e, r, t[r]);
    if (Ua)
        for (var r of Ua(t))
            A_.call(t, r) && Ev(e, r, t[r]);
    return e
}
  , r6 = (e,t)=>e6(e, t6(t))
  , n6 = (e,t)=>{
    var r = {};
    for (var n in e)
        L_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ua)
        for (var n of Ua(e))
            t.indexOf(n) < 0 && A_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const o6 = {
    opacity: .6,
    color: "#fff",
    zIndex: Ar("modal"),
    radius: 0,
    blur: 0
}
  , M_ = p.forwardRef((e,t)=>{
    const r = F("Overlay", o6, e)
      , {opacity: n, blur: o, color: l, gradient: i, zIndex: a, radius: s, sx: c, unstyled: f, className: u} = r
      , d = n6(r, ["opacity", "blur", "color", "gradient", "zIndex", "radius", "sx", "unstyled", "className"])
      , {classes: m, cx: g} = JR({
        zIndex: a
    }, {
        name: "Overlay",
        unstyled: f
    })
      , y = i ? {
        backgroundImage: i
    } : {
        backgroundColor: l
    }
      , x = h=>_.createElement(K, Ac({
        ref: t,
        className: g(m.root, u),
        sx: [v=>r6(Ac({}, y), {
            opacity: n,
            borderRadius: v.fn.size({
                size: s,
                sizes: v.radius
            })
        }), ...eo(c)]
    }, h));
    return o ? _.createElement(K, Ac({
        className: g(m.root, u),
        sx: [{
            backdropFilter: `blur(${o}px)`
        }, ...eo(c)]
    }, d), x()) : x(d)
}
);
M_.displayName = "@mantine/core/Overlay";
const l6 = M_
  , i6 = {
    gap: {
        type: "spacing",
        property: "gap"
    },
    rowGap: {
        type: "spacing",
        property: "rowGap"
    },
    columnGap: {
        type: "spacing",
        property: "columnGap"
    },
    align: {
        type: "default",
        property: "alignItems"
    },
    justify: {
        type: "default",
        property: "justifyContent"
    },
    wrap: {
        type: "default",
        property: "flexWrap"
    },
    direction: {
        type: "default",
        property: "flexDirection"
    }
};
var a6 = Object.defineProperty
  , s6 = Object.defineProperties
  , c6 = Object.getOwnPropertyDescriptors
  , Ya = Object.getOwnPropertySymbols
  , F_ = Object.prototype.hasOwnProperty
  , V_ = Object.prototype.propertyIsEnumerable
  , Cv = (e,t,r)=>t in e ? a6(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , u6 = (e,t)=>{
    for (var r in t || (t = {}))
        F_.call(t, r) && Cv(e, r, t[r]);
    if (Ya)
        for (var r of Ya(t))
            V_.call(t, r) && Cv(e, r, t[r]);
    return e
}
  , f6 = (e,t)=>s6(e, c6(t))
  , d6 = (e,t)=>{
    var r = {};
    for (var n in e)
        F_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ya)
        for (var n of Ya(e))
            t.indexOf(n) < 0 && V_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const p6 = {}
  , B_ = p.forwardRef((e,t)=>{
    const r = F("Flex", p6, e)
      , {gap: n, rowGap: o, columnGap: l, align: i, justify: a, wrap: s, direction: c, sx: f} = r
      , u = d6(r, ["gap", "rowGap", "columnGap", "align", "justify", "wrap", "direction", "sx"]);
    return _.createElement(K, f6(u6({}, u), {
        sx: [{
            display: "flex"
        }, d=>Uu({
            gap: n,
            rowGap: o,
            columnGap: l,
            align: i,
            justify: a,
            wrap: s,
            direction: c
        }, d, i6), ...eo(f)],
        ref: t
    }))
}
);
B_.displayName = "@mantine/core/Flex";
var m6 = G((e,{smallerThan: t, largerThan: r, query: n, styles: o})=>{
    const l = {}
      , i = e.fn.size({
        size: r,
        sizes: e.breakpoints
    })
      , a = e.fn.size({
        size: t,
        sizes: e.breakpoints
    })
      , s = typeof o == "function" ? o(e) : o;
    return r !== void 0 && t !== void 0 ? l[`@media (min-width: ${i}px) and (max-width: ${a - 1}px)`] = s : (r !== void 0 && (l[`@media (min-width: ${e.fn.size({
        size: r,
        sizes: e.breakpoints
    })}px)`] = s),
    t !== void 0 && (l[`@media (max-width: ${e.fn.size({
        size: t,
        sizes: e.breakpoints
    }) - 1}px)`] = s)),
    n && (l[`@media ${n}`] = s),
    {
        media: l
    }
}
);
const g6 = m6;
function H_(e) {
    var t;
    const {children: r, smallerThan: n, largerThan: o, query: l, styles: i, className: a} = F("MediaQuery", {}, e)
      , {classes: s, cx: c} = g6({
        smallerThan: n,
        largerThan: o,
        query: l,
        styles: i
    }, {
        name: "MediaQuery"
    })
      , f = p.Children.only(r);
    return typeof f == "object" && f !== null && "props"in f ? _.cloneElement(f, {
        className: c(s.media, (t = f.props) == null ? void 0 : t.className, a)
    }) : f
}
H_.displayName = "@mantine/core/MediaQuery";
var v6 = Object.defineProperty
  , kv = Object.getOwnPropertySymbols
  , h6 = Object.prototype.hasOwnProperty
  , y6 = Object.prototype.propertyIsEnumerable
  , Rv = (e,t,r)=>t in e ? v6(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , w6 = (e,t)=>{
    for (var r in t || (t = {}))
        h6.call(t, r) && Rv(e, r, t[r]);
    if (kv)
        for (var r of kv(t))
            y6.call(t, r) && Rv(e, r, t[r]);
    return e
}
;
const _6 = {
    xs: 320,
    sm: 380,
    md: 440,
    lg: 620,
    xl: 780
};
function S6(e) {
    return e ? {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        maxHeight: "100vh",
        overflowY: "auto"
    } : {}
}
var x6 = G((e,{overflow: t, size: r, centered: n, zIndex: o, fullScreen: l})=>({
    close: {},
    overlay: {
        display: l ? "none" : void 0
    },
    root: {
        position: "fixed",
        zIndex: o,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    inner: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: "auto",
        padding: l ? 0 : `${e.spacing.xl * 2}px ${e.spacing.md}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: n ? "center" : "flex-start"
    },
    title: {
        marginRight: e.spacing.md,
        textOverflow: "ellipsis",
        display: "block",
        wordBreak: "break-word"
    },
    modal: w6({
        position: "relative",
        width: l ? "100vw" : e.fn.size({
            sizes: _6,
            size: r
        }),
        borderRadius: l ? 0 : void 0,
        outline: 0,
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
        marginTop: n ? "auto" : void 0,
        marginBottom: n ? "auto" : void 0,
        zIndex: 1
    }, S6(l)),
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: e.spacing.md,
        marginRight: -9
    },
    body: {
        maxHeight: t === "inside" ? "calc(100vh - 185px)" : null,
        overflowY: t === "inside" ? "auto" : null,
        wordBreak: "break-word"
    }
}));
const P6 = x6;
var b6 = Object.defineProperty
  , Ga = Object.getOwnPropertySymbols
  , W_ = Object.prototype.hasOwnProperty
  , U_ = Object.prototype.propertyIsEnumerable
  , Nv = (e,t,r)=>t in e ? b6(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , O6 = (e,t)=>{
    for (var r in t || (t = {}))
        W_.call(t, r) && Nv(e, r, t[r]);
    if (Ga)
        for (var r of Ga(t))
            U_.call(t, r) && Nv(e, r, t[r]);
    return e
}
  , $6 = (e,t)=>{
    var r = {};
    for (var n in e)
        W_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ga)
        for (var n of Ga(e))
            t.indexOf(n) < 0 && U_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const E6 = {
    size: "md",
    transitionDuration: 250,
    overflow: "outside",
    padding: "lg",
    shadow: "lg",
    closeOnClickOutside: !0,
    closeOnEscape: !0,
    trapFocus: !0,
    withCloseButton: !0,
    withinPortal: !0,
    lockScroll: !0,
    withFocusReturn: !0,
    overlayBlur: 0,
    zIndex: Ar("modal"),
    exitTransitionDuration: 0
};
function Dd(e) {
    const t = F("Modal", E6, e)
      , {className: r, opened: n, title: o, onClose: l, children: i, withCloseButton: a, overlayOpacity: s, size: c, transitionDuration: f, exitTransitionDuration: u, closeButtonLabel: d, overlayColor: m, overflow: g, transition: y, padding: x, shadow: h, radius: v, id: w, classNames: S, styles: P, closeOnClickOutside: O, trapFocus: b, closeOnEscape: $, centered: E, target: k, withinPortal: j, zIndex: T, overlayBlur: L, transitionTimingFunction: A, fullScreen: B, unstyled: U, lockScroll: Q, withFocusReturn: R} = t
      , z = $6(t, ["className", "opened", "title", "onClose", "children", "withCloseButton", "overlayOpacity", "size", "transitionDuration", "exitTransitionDuration", "closeButtonLabel", "overlayColor", "overflow", "transition", "padding", "shadow", "radius", "id", "classNames", "styles", "closeOnClickOutside", "trapFocus", "closeOnEscape", "centered", "target", "withinPortal", "zIndex", "overlayBlur", "transitionTimingFunction", "fullScreen", "unstyled", "lockScroll", "withFocusReturn"])
      , D = El(w)
      , W = `${D}-title`
      , ee = `${D}-body`
      , {classes: Z, cx: $e, theme: Ee} = P6({
        size: c,
        overflow: g,
        centered: E,
        zIndex: T,
        fullScreen: B
    }, {
        unstyled: U,
        classNames: S,
        styles: P,
        name: "Modal"
    })
      , ne = K0(b && n)
      , Me = p.useRef(null)
      , Mt = co(ne, Me)
      , vt = typeof s == "number" ? s : Ee.colorScheme === "dark" ? .85 : .75;
    OE(Q && n);
    const ht = kt=>{
        !b && kt.key === "Escape" && $ && l()
    }
    ;
    p.useEffect(()=>{
        if (!b)
            return window.addEventListener("keydown", ht),
            ()=>window.removeEventListener("keydown", ht)
    }
    , [b]),
    Y0({
        opened: n,
        shouldReturnFocus: b && R
    });
    const hn = p.useRef(null);
    gl("mousedown", kt=>{
        hn.current = kt.target
    }
    );
    const yn = ()=>{
        hn.current === Me.current && O && l()
    }
    ;
    return _.createElement(Cl, {
        withinPortal: j,
        target: k
    }, _.createElement(j_, {
        mounted: n,
        duration: f,
        exitDuration: u,
        timingFunction: A,
        transitions: {
            modal: {
                duration: f,
                transition: y || (B ? "fade" : "pop")
            },
            overlay: {
                duration: f / 2,
                transition: "fade",
                timingFunction: "ease"
            }
        }
    }, kt=>_.createElement(_.Fragment, null, _.createElement(K, O6({
        id: D,
        className: $e(Z.root, r)
    }, z), _.createElement("div", {
        style: kt.overlay
    }, _.createElement(l6, {
        className: Z.overlay,
        sx: {
            position: "fixed"
        },
        zIndex: 0,
        blur: L,
        color: m || (Ee.colorScheme === "dark" ? Ee.colors.dark[9] : Ee.black),
        opacity: vt,
        unstyled: U
    })), _.createElement("div", {
        role: "presentation",
        className: Z.inner,
        onClick: yn,
        onKeyDown: Ft=>{
            var wn;
            ((wn = Ft.target) == null ? void 0 : wn.getAttribute("data-mantine-stop-propagation")) !== "true" && Ft.key === "Escape" && $ && l()
        }
        ,
        ref: Mt
    }, _.createElement(Id, {
        className: Z.modal,
        shadow: h,
        p: x,
        radius: v,
        role: "dialog",
        "aria-labelledby": W,
        "aria-describedby": ee,
        "aria-modal": !0,
        tabIndex: -1,
        style: kt.modal,
        unstyled: U,
        onClick: Ft=>Ft.stopPropagation()
    }, (o || a) && _.createElement("div", {
        className: Z.header
    }, _.createElement(q, {
        id: W,
        className: Z.title
    }, o), a && _.createElement(gd, {
        iconSize: 16,
        onClick: l,
        "aria-label": d,
        className: Z.close
    })), _.createElement("div", {
        id: ee,
        className: Z.body
    }, i)))))))
}
Dd.displayName = "@mantine/core/Modal";
const C6 = {
    xs: 16,
    sm: 22,
    md: 26,
    lg: 30,
    xl: 36
}
  , k6 = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18
};
var R6 = G((e,{size: t, disabled: r, radius: n, readOnly: o, variant: l})=>({
    defaultValue: {
        display: "flex",
        alignItems: "center",
        backgroundColor: r ? e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[3] : e.colorScheme === "dark" ? e.colors.dark[7] : l === "filled" ? e.white : e.colors.gray[1],
        color: r ? e.colorScheme === "dark" ? e.colors.dark[1] : e.colors.gray[7] : e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.gray[7],
        height: e.fn.size({
            size: t,
            sizes: C6
        }),
        paddingLeft: e.fn.size({
            size: t,
            sizes: e.spacing
        }),
        paddingRight: r || o ? e.fn.size({
            size: t,
            sizes: e.spacing
        }) : 0,
        fontWeight: 500,
        fontSize: e.fn.size({
            size: t,
            sizes: k6
        }),
        borderRadius: e.fn.size({
            size: n,
            sizes: e.radius
        }),
        cursor: r ? "not-allowed" : "default",
        userSelect: "none",
        maxWidth: "calc(100% - 20px)"
    },
    defaultValueRemove: {
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.gray[7],
        marginLeft: e.fn.size({
            size: t,
            sizes: e.spacing
        }) / 6
    },
    defaultValueLabel: {
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }
}));
const N6 = R6;
var z6 = Object.defineProperty
  , Qa = Object.getOwnPropertySymbols
  , Y_ = Object.prototype.hasOwnProperty
  , G_ = Object.prototype.propertyIsEnumerable
  , zv = (e,t,r)=>t in e ? z6(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , I6 = (e,t)=>{
    for (var r in t || (t = {}))
        Y_.call(t, r) && zv(e, r, t[r]);
    if (Qa)
        for (var r of Qa(t))
            G_.call(t, r) && zv(e, r, t[r]);
    return e
}
  , T6 = (e,t)=>{
    var r = {};
    for (var n in e)
        Y_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Qa)
        for (var n of Qa(e))
            t.indexOf(n) < 0 && G_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const Iv = {
    xs: 16,
    sm: 22,
    md: 24,
    lg: 26,
    xl: 30
};
function Q_(e) {
    var t = e
      , {label: r, classNames: n, styles: o, className: l, onRemove: i, disabled: a, readOnly: s, size: c, radius: f="sm", variant: u} = t
      , d = T6(t, ["label", "classNames", "styles", "className", "onRemove", "disabled", "readOnly", "size", "radius", "variant"]);
    const {classes: m, cx: g} = N6({
        size: c,
        disabled: a,
        readOnly: s,
        radius: f,
        variant: u
    }, {
        classNames: n,
        styles: o,
        name: "MultiSelect"
    });
    return _.createElement("div", I6({
        className: g(m.defaultValue, l)
    }, d), _.createElement("span", {
        className: m.defaultValueLabel
    }, r), !a && !s && _.createElement(gd, {
        "aria-hidden": !0,
        onMouseDown: i,
        size: Iv[c],
        radius: 2,
        color: "blue",
        variant: "transparent",
        iconSize: Iv[c] / 2,
        className: m.defaultValueRemove,
        tabIndex: -1
    }))
}
Q_.displayName = "@mantine/core/MultiSelect/DefaultValue";
function D6({data: e, searchable: t, limit: r, searchValue: n, filter: o, value: l}) {
    if (!t && l.length === 0)
        return e;
    if (!t) {
        const a = [];
        for (let s = 0; s < e.length; s += 1)
            l.some(c=>c === e[s].value && !e[s].disabled) || a.push(e[s]);
        return a
    }
    const i = [];
    for (let a = 0; a < e.length && (o(n, l.some(s=>s === e[a].value && !e[a].disabled), e[a]) && i.push(e[a]),
    !(i.length >= r)); a += 1)
        ;
    return i
}
var j6 = Object.defineProperty
  , Xa = Object.getOwnPropertySymbols
  , X_ = Object.prototype.hasOwnProperty
  , K_ = Object.prototype.propertyIsEnumerable
  , Tv = (e,t,r)=>t in e ? j6(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Dv = (e,t)=>{
    for (var r in t || (t = {}))
        X_.call(t, r) && Tv(e, r, t[r]);
    if (Xa)
        for (var r of Xa(t))
            K_.call(t, r) && Tv(e, r, t[r]);
    return e
}
  , L6 = (e,t)=>{
    var r = {};
    for (var n in e)
        X_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Xa)
        for (var n of Xa(e))
            t.indexOf(n) < 0 && K_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const A6 = {
    xs: 14,
    sm: 18,
    md: 20,
    lg: 24,
    xl: 28
};
function M6(e) {
    var t = e
      , {size: r, error: n, style: o} = t
      , l = L6(t, ["size", "error", "style"]);
    const i = qe()
      , a = i.fn.size({
        size: r,
        sizes: A6
    });
    return _.createElement("svg", Dv({
        width: a,
        height: a,
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: Dv({
            color: n ? i.colors.red[6] : i.colors.gray[6]
        }, o),
        "data-chevron": !0
    }, l), _.createElement("path", {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
    }))
}
function Z_({shouldClear: e, clearButtonLabel: t, onClear: r, size: n, error: o, clearButtonTabIndex: l}) {
    return e ? _.createElement(gd, {
        variant: "transparent",
        "aria-label": t,
        onClick: r,
        size: n,
        tabIndex: l,
        onMouseDown: i=>i.preventDefault()
    }) : _.createElement(M6, {
        error: o,
        size: n
    })
}
Z_.displayName = "@mantine/core/SelectRightSection";
var F6 = Object.defineProperty
  , V6 = Object.defineProperties
  , B6 = Object.getOwnPropertyDescriptors
  , Ka = Object.getOwnPropertySymbols
  , J_ = Object.prototype.hasOwnProperty
  , q_ = Object.prototype.propertyIsEnumerable
  , jv = (e,t,r)=>t in e ? F6(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Mc = (e,t)=>{
    for (var r in t || (t = {}))
        J_.call(t, r) && jv(e, r, t[r]);
    if (Ka)
        for (var r of Ka(t))
            q_.call(t, r) && jv(e, r, t[r]);
    return e
}
  , Lv = (e,t)=>V6(e, B6(t))
  , H6 = (e,t)=>{
    var r = {};
    for (var n in e)
        J_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ka)
        for (var n of Ka(e))
            t.indexOf(n) < 0 && q_.call(e, n) && (r[n] = e[n]);
    return r
}
;
const W6 = {
    xs: 24,
    sm: 30,
    md: 34,
    lg: 44,
    xl: 54
};
function U6(e) {
    var t = e
      , {styles: r, rightSection: n, rightSectionWidth: o, theme: l} = t
      , i = H6(t, ["styles", "rightSection", "rightSectionWidth", "theme"]);
    if (n)
        return {
            rightSection: n,
            rightSectionWidth: o,
            styles: r
        };
    const a = typeof r == "function" ? r(l) : r;
    return {
        rightSectionWidth: l.fn.size({
            size: i.size,
            sizes: W6
        }),
        rightSection: !i.readOnly && !(i.disabled && i.shouldClear) && _.createElement(Z_, Mc({}, i)),
        styles: Lv(Mc({}, a), {
            rightSection: Lv(Mc({}, a == null ? void 0 : a.rightSection), {
                pointerEvents: i.shouldClear ? void 0 : "none"
            })
        })
    }
}
var Y6 = Object.defineProperty
  , G6 = Object.defineProperties
  , Q6 = Object.getOwnPropertyDescriptors
  , Av = Object.getOwnPropertySymbols
  , X6 = Object.prototype.hasOwnProperty
  , K6 = Object.prototype.propertyIsEnumerable
  , Mv = (e,t,r)=>t in e ? Y6(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Z6 = (e,t)=>{
    for (var r in t || (t = {}))
        X6.call(t, r) && Mv(e, r, t[r]);
    if (Av)
        for (var r of Av(t))
            K6.call(t, r) && Mv(e, r, t[r]);
    return e
}
  , J6 = (e,t)=>G6(e, Q6(t))
  , q6 = G((e,{size: t, invalid: r})=>({
    wrapper: {
        position: "relative"
    },
    values: {
        minHeight: e.fn.size({
            size: t,
            sizes: Ye
        }) - 2,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        marginLeft: `calc(${-e.spacing.xs}px / 2)`,
        boxSizing: "border-box"
    },
    value: {
        margin: `calc(${e.spacing.xs}px / 2 - 2px) calc(${e.spacing.xs}px / 2)`
    },
    searchInput: J6(Z6({}, e.fn.fontStyles()), {
        flex: 1,
        minWidth: 60,
        backgroundColor: "transparent",
        border: 0,
        outline: 0,
        fontSize: e.fn.size({
            size: t,
            sizes: e.fontSizes
        }),
        padding: 0,
        marginLeft: `calc(${e.spacing.xs}px / 2)`,
        appearance: "none",
        color: "inherit",
        lineHeight: `${e.fn.size({
            size: t,
            sizes: Ye
        }) - 2}px`,
        "&::placeholder": {
            opacity: 1,
            color: r ? e.colors.red[e.colorScheme === "dark" ? 6 : 7] : e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5]
        },
        "&:disabled": {
            cursor: "not-allowed"
        }
    }),
    searchInputEmpty: {
        width: "100%"
    },
    searchInputInputHidden: {
        width: 0,
        height: 0,
        margin: 0,
        overflow: "hidden"
    },
    searchInputPointer: {
        cursor: "pointer",
        "&:disabled": {
            cursor: "not-allowed"
        }
    },
    input: {
        cursor: "pointer",
        "&:disabled": {
            cursor: "not-allowed"
        }
    }
}));
const eN = q6;
var tN = Object.defineProperty
  , rN = Object.defineProperties
  , nN = Object.getOwnPropertyDescriptors
  , Za = Object.getOwnPropertySymbols
  , eS = Object.prototype.hasOwnProperty
  , tS = Object.prototype.propertyIsEnumerable
  , Fv = (e,t,r)=>t in e ? tN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , bn = (e,t)=>{
    for (var r in t || (t = {}))
        eS.call(t, r) && Fv(e, r, t[r]);
    if (Za)
        for (var r of Za(t))
            tS.call(t, r) && Fv(e, r, t[r]);
    return e
}
  , Vv = (e,t)=>rN(e, nN(t))
  , oN = (e,t)=>{
    var r = {};
    for (var n in e)
        eS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Za)
        for (var n of Za(e))
            t.indexOf(n) < 0 && tS.call(e, n) && (r[n] = e[n]);
    return r
}
;
function lN(e, t, r) {
    return t ? !1 : r.label.toLowerCase().trim().includes(e.toLowerCase().trim())
}
function iN(e, t) {
    return !!e && !t.some(r=>r.value.toLowerCase() === e.toLowerCase())
}
function Bv(e, t) {
    if (!Array.isArray(e))
        return;
    if (t.length === 0)
        return [];
    const r = typeof t[0] == "object" ? t.map(n=>n.value) : t;
    return e.filter(n=>r.includes(n))
}
const aN = {
    size: "sm",
    valueComponent: Q_,
    itemComponent: Y1,
    transition: "pop-top-left",
    transitionDuration: 0,
    maxDropdownHeight: 220,
    shadow: "sm",
    searchable: !1,
    filter: lN,
    limit: 1 / 0,
    clearSearchOnChange: !0,
    clearable: !1,
    clearSearchOnBlur: !1,
    disabled: !1,
    initiallyOpened: !1,
    creatable: !1,
    shouldCreate: iN,
    switchDirectionOnFlip: !1,
    zIndex: Ar("popover"),
    selectOnBlur: !1,
    clearButtonTabIndex: 0,
    positionDependencies: []
}
  , rS = p.forwardRef((e,t)=>{
    const r = F("MultiSelect", aN, e)
      , {className: n, style: o, required: l, label: i, description: a, size: s, error: c, classNames: f, styles: u, wrapperProps: d, value: m, defaultValue: g, data: y, onChange: x, valueComponent: h, itemComponent: v, id: w, transition: S, transitionDuration: P, transitionTimingFunction: O, maxDropdownHeight: b, shadow: $, nothingFound: E, onFocus: k, onBlur: j, searchable: T, placeholder: L, filter: A, limit: B, clearSearchOnChange: U, clearable: Q, clearSearchOnBlur: R, clearButtonLabel: z, variant: D, onSearchChange: W, searchValue: ee, disabled: Z, initiallyOpened: $e, radius: Ee, icon: ne, rightSection: Me, rightSectionWidth: Mt, creatable: vt, getCreateLabel: ht, shouldCreate: hn, onCreate: yn, sx: kt, dropdownComponent: Ft, onDropdownClose: wn, onDropdownOpen: Ce, maxSelectedValues: We, withinPortal: Ks, switchDirectionOnFlip: Vr, zIndex: RS, selectOnBlur: NS, name: zS, dropdownPosition: IS, errorProps: TS, labelProps: DS, descriptionProps: jS, clearButtonTabIndex: LS, form: AS, positionDependencies: MS, onKeyDown: Ad, unstyled: go, inputContainer: FS, inputWrapperOrder: VS, readOnly: Br, withAsterisk: BS} = r
      , HS = oN(r, ["className", "style", "required", "label", "description", "size", "error", "classNames", "styles", "wrapperProps", "value", "defaultValue", "data", "onChange", "valueComponent", "itemComponent", "id", "transition", "transitionDuration", "transitionTimingFunction", "maxDropdownHeight", "shadow", "nothingFound", "onFocus", "onBlur", "searchable", "placeholder", "filter", "limit", "clearSearchOnChange", "clearable", "clearSearchOnBlur", "clearButtonLabel", "variant", "onSearchChange", "searchValue", "disabled", "initiallyOpened", "radius", "icon", "rightSection", "rightSectionWidth", "creatable", "getCreateLabel", "shouldCreate", "onCreate", "sx", "dropdownComponent", "onDropdownClose", "onDropdownOpen", "maxSelectedValues", "withinPortal", "switchDirectionOnFlip", "zIndex", "selectOnBlur", "name", "dropdownPosition", "errorProps", "labelProps", "descriptionProps", "clearButtonTabIndex", "form", "positionDependencies", "onKeyDown", "unstyled", "inputContainer", "inputWrapperOrder", "readOnly", "withAsterisk"])
      , {classes: or, cx: Md, theme: WS} = eN({
        size: s,
        invalid: !!c
    }, {
        classNames: f,
        styles: u,
        unstyled: go,
        name: "MultiSelect"
    })
      , {systemStyles: US, rest: YS} = js(HS)
      , Zs = p.useRef()
      , Js = p.useRef({})
      , _n = El(w)
      , [Ue,Ie] = p.useState($e)
      , [lr,ir] = p.useState(-1)
      , [Fd,GS] = p.useState("column")
      , [ar,Il] = Wu({
        value: ee,
        defaultValue: "",
        finalValue: void 0,
        onChange: W
    })
      , [QS,Vd] = p.useState(!1)
      , {scrollIntoView: Tl, targetRef: Bd, scrollableRef: XS} = wE({
        duration: 0,
        offset: 5,
        cancelable: !1,
        isList: !0
    })
      , Hd = vt && typeof ht == "function";
    let qs = null;
    const KS = y.map(M=>typeof M == "string" ? {
        label: M,
        value: M
    } : M)
      , ec = Db({
        data: KS
    })
      , [me,Sn] = Wu({
        value: Bv(m, y),
        defaultValue: Bv(g, y),
        finalValue: [],
        onChange: x
    })
      , yt = p.useRef(!!We && We < me.length)
      , Wd = M=>{
        if (!Br) {
            const oe = me.filter(Vt=>Vt !== M);
            Sn(oe),
            We && oe.length < We && (yt.current = !1)
        }
    }
      , ZS = M=>{
        Il(M.currentTarget.value),
        !Z && !yt.current && T && Ie(!0)
    }
      , JS = M=>{
        typeof k == "function" && k(M),
        !Z && !yt.current && T && Ie(!0)
    }
      , xe = D6({
        data: ec,
        searchable: T,
        searchValue: ar,
        limit: B,
        filter: A,
        value: me
    })
      , Ud = (M,oe,Vt)=>{
        let sr = M;
        for (; Vt(sr); )
            if (sr = oe(sr),
            !xe[sr].disabled)
                return sr;
        return M
    }
    ;
    Qt(()=>{
        ir(-1)
    }
    , [ar]),
    Qt(()=>{
        !Z && me.length > y.length && Ie(!1),
        We && me.length < We && (yt.current = !1),
        We && me.length >= We && (yt.current = !0,
        Ie(!1))
    }
    , [me]);
    const Dl = M=>{
        if (!Br)
            if (U && Il(""),
            me.includes(M.value))
                Wd(M.value);
            else {
                if (M.creatable && typeof yn == "function") {
                    const oe = yn(M.value);
                    typeof oe < "u" && oe !== null && Sn(typeof oe == "string" ? [...me, oe] : [...me, oe.value])
                } else
                    Sn([...me, M.value]);
                me.length === We - 1 && (yt.current = !0,
                Ie(!1)),
                lr === xe.length - 1 && ir(xe.length - 2),
                xe.length === 1 && Ie(!1)
            }
    }
      , qS = M=>{
        typeof j == "function" && j(M),
        NS && xe[lr] && Ue && Dl(xe[lr]),
        R && Il(""),
        Ie(!1)
    }
      , ex = M=>{
        if (QS || (Ad == null || Ad(M),
        Br) || M.key !== "Backspace" && We && yt.current)
            return;
        const oe = Fd === "column"
          , Vt = ()=>{
            ir(Hr=>{
                var Bt;
                const vo = Ud(Hr, Wr=>Wr + 1, Wr=>Wr < xe.length - 1);
                return Ue && (Bd.current = Js.current[(Bt = xe[vo]) == null ? void 0 : Bt.value],
                Tl({
                    alignment: oe ? "end" : "start"
                })),
                vo
            }
            )
        }
          , sr = ()=>{
            ir(Hr=>{
                var Bt;
                const vo = Ud(Hr, Wr=>Wr - 1, Wr=>Wr > 0);
                return Ue && (Bd.current = Js.current[(Bt = xe[vo]) == null ? void 0 : Bt.value],
                Tl({
                    alignment: oe ? "start" : "end"
                })),
                vo
            }
            )
        }
        ;
        switch (M.key) {
        case "ArrowUp":
            {
                M.preventDefault(),
                Ie(!0),
                oe ? sr() : Vt();
                break
            }
        case "ArrowDown":
            {
                M.preventDefault(),
                Ie(!0),
                oe ? Vt() : sr();
                break
            }
        case "Enter":
            {
                M.preventDefault(),
                xe[lr] && Ue ? Dl(xe[lr]) : Ie(!0);
                break
            }
        case " ":
            {
                T || (M.preventDefault(),
                xe[lr] && Ue ? Dl(xe[lr]) : Ie(!0));
                break
            }
        case "Backspace":
            {
                me.length > 0 && ar.length === 0 && (Sn(me.slice(0, -1)),
                Ie(!0),
                We && (yt.current = !1));
                break
            }
        case "Home":
            {
                if (!T) {
                    M.preventDefault(),
                    Ue || Ie(!0);
                    const Hr = xe.findIndex(Bt=>!Bt.disabled);
                    ir(Hr),
                    Tl({
                        alignment: oe ? "end" : "start"
                    })
                }
                break
            }
        case "End":
            {
                if (!T) {
                    M.preventDefault(),
                    Ue || Ie(!0);
                    const Hr = xe.map(Bt=>!!Bt.disabled).lastIndexOf(!1);
                    ir(Hr),
                    Tl({
                        alignment: oe ? "end" : "start"
                    })
                }
                break
            }
        case "Escape":
            Ie(!1)
        }
    }
      , tx = me.map(M=>{
        let oe = ec.find(Vt=>Vt.value === M && !Vt.disabled);
        return !oe && Hd && (oe = {
            value: M,
            label: M
        }),
        oe
    }
    ).filter(M=>!!M).map(M=>_.createElement(h, Vv(bn({}, M), {
        variant: D,
        disabled: Z,
        className: or.value,
        readOnly: Br,
        onRemove: oe=>{
            oe.preventDefault(),
            oe.stopPropagation(),
            Wd(M.value)
        }
        ,
        key: M.value,
        size: s,
        styles: u,
        classNames: f,
        radius: Ee
    })))
      , rx = ()=>{
        var M;
        Il(""),
        Sn([]),
        (M = Zs.current) == null || M.focus(),
        We && (yt.current = !1)
    }
    ;
    Hd && hn(ar, ec) && (qs = ht(ar),
    xe.push({
        label: ar,
        value: ar,
        creatable: !0
    }));
    const jl = !Br && (xe.length > 0 ? Ue : Ue && !!E);
    return Qt(()=>{
        const M = jl ? Ce : wn;
        typeof M == "function" && M()
    }
    , [jl]),
    _.createElement(ja.Wrapper, bn(bn({
        required: l,
        id: _n,
        label: i,
        error: c,
        description: a,
        size: s,
        className: n,
        style: o,
        classNames: f,
        styles: u,
        __staticSelector: "MultiSelect",
        sx: kt,
        errorProps: TS,
        descriptionProps: jS,
        labelProps: DS,
        inputContainer: FS,
        inputWrapperOrder: VS,
        unstyled: go,
        withAsterisk: BS
    }, US), d), _.createElement(Go, {
        opened: jl,
        transition: S,
        transitionDuration: P,
        shadow: "sm",
        withinPortal: Ks,
        __staticSelector: "MultiSelect",
        onDirectionChange: GS,
        switchDirectionOnFlip: Vr,
        zIndex: RS,
        dropdownPosition: IS,
        positionDependencies: MS,
        classNames: f,
        styles: u,
        unstyled: go
    }, _.createElement(Go.Target, null, _.createElement("div", {
        className: or.wrapper,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-owns": Ue && jl ? `${_n}-items` : null,
        "aria-controls": _n,
        "aria-expanded": Ue,
        onMouseLeave: ()=>ir(-1),
        tabIndex: -1
    }, _.createElement("input", {
        type: "hidden",
        name: zS,
        value: me.join(","),
        form: AS,
        disabled: Z
    }), _.createElement(ja, bn({
        __staticSelector: "MultiSelect",
        style: {
            overflow: "hidden"
        },
        component: "div",
        multiline: !0,
        size: s,
        variant: D,
        disabled: Z,
        invalid: !!c,
        required: l,
        radius: Ee,
        icon: ne,
        unstyled: go,
        onMouseDown: M=>{
            var oe;
            M.preventDefault(),
            !Z && !yt.current && Ie(!Ue),
            (oe = Zs.current) == null || oe.focus()
        }
        ,
        classNames: Vv(bn({}, f), {
            input: Md({
                [or.input]: !T
            }, f == null ? void 0 : f.input)
        })
    }, U6({
        theme: WS,
        rightSection: Me,
        rightSectionWidth: Mt,
        styles: u,
        size: s,
        shouldClear: Q && me.length > 0,
        clearButtonLabel: z,
        onClear: rx,
        error: c,
        disabled: Z,
        clearButtonTabIndex: LS,
        readOnly: Br
    })), _.createElement("div", {
        className: or.values
    }, tx, _.createElement("input", bn({
        ref: co(t, Zs),
        type: "search",
        id: _n,
        className: Md(or.searchInput, {
            [or.searchInputPointer]: !T,
            [or.searchInputInputHidden]: !Ue && me.length > 0 || !T && me.length > 0,
            [or.searchInputEmpty]: me.length === 0
        }),
        onKeyDown: ex,
        value: ar,
        onChange: ZS,
        onFocus: JS,
        onBlur: qS,
        readOnly: !T || yt.current || Br,
        placeholder: me.length === 0 ? L : void 0,
        disabled: Z,
        "data-mantine-stop-propagation": Ue,
        autoComplete: "off",
        onCompositionStart: ()=>Vd(!0),
        onCompositionEnd: ()=>Vd(!1)
    }, YS)))))), _.createElement(Go.Dropdown, {
        component: Ft || yd,
        maxHeight: b,
        direction: Fd,
        id: _n,
        innerRef: XS,
        __staticSelector: "MultiSelect",
        classNames: f,
        styles: u
    }, _.createElement(H1, {
        data: xe,
        hovered: lr,
        classNames: f,
        styles: u,
        uuid: _n,
        __staticSelector: "MultiSelect",
        onItemHover: ir,
        onItemSelect: Dl,
        itemsRefs: Js,
        itemComponent: v,
        size: s,
        nothingFound: E,
        creatable: vt && !!qs,
        createLabel: qs,
        unstyled: go
    }))))
}
);
rS.displayName = "@mantine/core/MultiSelect";
var sN = Object.defineProperty
  , cN = Object.defineProperties
  , uN = Object.getOwnPropertyDescriptors
  , Ja = Object.getOwnPropertySymbols
  , nS = Object.prototype.hasOwnProperty
  , oS = Object.prototype.propertyIsEnumerable
  , Hv = (e,t,r)=>t in e ? sN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Fc = (e,t)=>{
    for (var r in t || (t = {}))
        nS.call(t, r) && Hv(e, r, t[r]);
    if (Ja)
        for (var r of Ja(t))
            oS.call(t, r) && Hv(e, r, t[r]);
    return e
}
  , fN = (e,t)=>cN(e, uN(t))
  , dN = (e,t)=>{
    var r = {};
    for (var n in e)
        nS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Ja)
        for (var n of Ja(e))
            t.indexOf(n) < 0 && oS.call(e, n) && (r[n] = e[n]);
    return r
}
;
const pN = {
    type: "text",
    size: "sm",
    __staticSelector: "TextInput"
}
  , oo = p.forwardRef((e,t)=>{
    const r = Y3("TextInput", pN, e)
      , {inputProps: n, wrapperProps: o} = r
      , l = dN(r, ["inputProps", "wrapperProps"]);
    return _.createElement(ja.Wrapper, Fc({}, o), _.createElement(ja, fN(Fc(Fc({}, n), l), {
        ref: t
    })))
}
);
oo.displayName = "@mantine/core/TextInput";
const lS = p.createContext(!1)
  , mN = lS.Provider
  , gN = ()=>p.useContext(lS);
function iS({children: e, openDelay: t=0, closeDelay: r=0}) {
    return _.createElement(mN, {
        value: !0
    }, _.createElement(Q5, {
        delay: {
            open: t,
            close: r
        }
    }, e))
}
iS.displayName = "@mantine/core/TooltipGroup";
var vN = Object.defineProperty
  , hN = Object.defineProperties
  , yN = Object.getOwnPropertyDescriptors
  , Wv = Object.getOwnPropertySymbols
  , wN = Object.prototype.hasOwnProperty
  , _N = Object.prototype.propertyIsEnumerable
  , Uv = (e,t,r)=>t in e ? vN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Yv = (e,t)=>{
    for (var r in t || (t = {}))
        wN.call(t, r) && Uv(e, r, t[r]);
    if (Wv)
        for (var r of Wv(t))
            _N.call(t, r) && Uv(e, r, t[r]);
    return e
}
  , SN = (e,t)=>hN(e, yN(t));
function xN(e, t) {
    if (!t)
        return {
            backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[9],
            color: e.white
        };
    const r = e.fn.variant({
        variant: "filled",
        color: t,
        primaryFallback: !1
    });
    return {
        backgroundColor: r.background,
        color: r.color
    }
}
var PN = G((e,{color: t, radius: r, width: n, multiline: o})=>({
    tooltip: SN(Yv(Yv({}, e.fn.fontStyles()), xN(e, t)), {
        lineHeight: e.lineHeight,
        fontSize: e.fontSizes.sm,
        borderRadius: e.fn.radius(r),
        padding: `calc(${e.spacing.xs}px / 2) ${e.spacing.xs}px`,
        position: "absolute",
        whiteSpace: o ? "unset" : "nowrap",
        pointerEvents: "none",
        width: n
    }),
    arrow: {
        backgroundColor: "inherit",
        border: 0,
        zIndex: 1
    }
}));
const aS = PN
  , sS = {
    children: "Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
};
function bN({offset: e, position: t}) {
    const [r,n] = p.useState(!1)
      , o = p.useRef()
      , {x: l, y: i, reference: a, floating: s, refs: c, update: f, placement: u} = $d({
        placement: t,
        middleware: [xd({
            crossAxis: !0,
            padding: 5,
            rootBoundary: "document"
        })]
    })
      , d = u.includes("right") ? e : t.includes("left") ? e * -1 : 0
      , m = u.includes("bottom") ? e : t.includes("top") ? e * -1 : 0
      , g = p.useCallback(({clientX: y, clientY: x})=>{
        a({
            getBoundingClientRect() {
                return {
                    width: 0,
                    height: 0,
                    x: y,
                    y: x,
                    left: y + d,
                    top: x + m,
                    right: y,
                    bottom: x
                }
            }
        })
    }
    , [a]);
    return p.useEffect(()=>{
        if (c.floating.current) {
            const y = o.current;
            y.addEventListener("mousemove", g);
            const x = Xt(c.floating.current);
            return x.forEach(h=>{
                h.addEventListener("scroll", f)
            }
            ),
            ()=>{
                y.removeEventListener("mousemove", g),
                x.forEach(h=>{
                    h.removeEventListener("scroll", f)
                }
                )
            }
        }
    }
    , [a, c.floating, f, g, r]),
    {
        handleMouseMove: g,
        x: l,
        y: i,
        opened: r,
        setOpened: n,
        boundaryRef: o,
        floating: s
    }
}
var ON = Object.defineProperty
  , $N = Object.defineProperties
  , EN = Object.getOwnPropertyDescriptors
  , qa = Object.getOwnPropertySymbols
  , cS = Object.prototype.hasOwnProperty
  , uS = Object.prototype.propertyIsEnumerable
  , Gv = (e,t,r)=>t in e ? ON(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , Vc = (e,t)=>{
    for (var r in t || (t = {}))
        cS.call(t, r) && Gv(e, r, t[r]);
    if (qa)
        for (var r of qa(t))
            uS.call(t, r) && Gv(e, r, t[r]);
    return e
}
  , Bc = (e,t)=>$N(e, EN(t))
  , CN = (e,t)=>{
    var r = {};
    for (var n in e)
        cS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && qa)
        for (var n of qa(e))
            t.indexOf(n) < 0 && uS.call(e, n) && (r[n] = e[n]);
    return r
}
;
const kN = {
    refProp: "ref",
    withinPortal: !0,
    offset: 10,
    position: "right",
    zIndex: Ar("popover")
};
function fS(e) {
    var t;
    const r = F("TooltipFloating", kN, e)
      , {children: n, refProp: o, withinPortal: l, style: i, className: a, classNames: s, styles: c, unstyled: f, radius: u, color: d, label: m, offset: g, position: y, multiline: x, width: h, zIndex: v, disabled: w} = r
      , S = CN(r, ["children", "refProp", "withinPortal", "style", "className", "classNames", "styles", "unstyled", "radius", "color", "label", "offset", "position", "multiline", "width", "zIndex", "disabled"])
      , {handleMouseMove: P, x: O, y: b, opened: $, boundaryRef: E, floating: k, setOpened: j} = bN({
        offset: g,
        position: y
    })
      , {classes: T, cx: L} = aS({
        radius: u,
        color: d,
        multiline: x,
        width: h
    }, {
        name: "TooltipFloating",
        classNames: s,
        styles: c,
        unstyled: f
    });
    if (!Ss(n))
        throw new Error(sS.children);
    const A = co(E, n.ref)
      , B = Q=>{
        var R, z;
        (z = (R = n.props).onMouseEnter) == null || z.call(R, Q),
        P(Q),
        j(!0)
    }
      , U = Q=>{
        var R, z;
        (z = (R = n.props).onMouseLeave) == null || z.call(R, Q),
        j(!1)
    }
    ;
    return w ? _.createElement(_.Fragment, null, n) : _.createElement(_.Fragment, null, _.createElement(Cl, {
        withinPortal: l
    }, _.createElement(K, Bc(Vc({}, S), {
        ref: k,
        className: L(T.tooltip, a),
        style: Bc(Vc({}, i), {
            zIndex: v,
            display: $ ? "block" : "none",
            top: b ?? "",
            left: (t = Math.round(O)) != null ? t : ""
        })
    }), m)), p.cloneElement(n, Bc(Vc({}, n.props), {
        [o]: A,
        onMouseEnter: B,
        onMouseLeave: U
    })))
}
fS.displayName = "@mantine/core/TooltipFloating";
function RN(e) {
    const [t,r] = p.useState(!1)
      , o = typeof e.opened == "boolean" ? e.opened : t
      , l = gN()
      , i = El()
      , {delay: a, currentId: s, setCurrentId: c} = Rw()
      , f = p.useCallback($=>{
        r($),
        $ && c(i)
    }
    , [c, i])
      , {x: u, y: d, reference: m, floating: g, context: y, refs: x, update: h, placement: v, middlewareData: {arrow: {x: w, y: S}={}}} = $d({
        placement: e.position,
        open: o,
        onOpenChange: f,
        middleware: [vw(e.offset), xd({
            padding: 8
        }), mw(), $w({
            element: e.arrowRef,
            padding: e.arrowOffset
        }), ...e.inline ? [gw()] : []]
    })
      , {getReferenceProps: P, getFloatingProps: O} = W5([G5(y, {
        enabled: e.events.hover,
        delay: l ? a : {
            open: e.openDelay,
            close: e.closeDelay
        },
        mouseOnly: !e.events.touch
    }), e3(y, {
        enabled: e.events.focus,
        keyboardOnly: !0
    }), K5(y, {
        role: "tooltip"
    }), q5(y, {
        enabled: typeof e.opened === void 0
    }), X5(y, {
        id: i
    })]);
    return Nw({
        opened: o,
        positionDependencies: e.positionDependencies,
        floating: {
            refs: x,
            update: h
        }
    }),
    Qt(()=>{
        var $;
        ($ = e.onPositionChange) == null || $.call(e, v)
    }
    , [v]),
    {
        x: u,
        y: d,
        arrowX: w,
        arrowY: S,
        reference: m,
        floating: g,
        getFloatingProps: O,
        getReferenceProps: P,
        isGroupPhase: o && s && s !== i,
        opened: o,
        placement: v
    }
}
var NN = Object.defineProperty
  , zN = Object.defineProperties
  , IN = Object.getOwnPropertyDescriptors
  , es = Object.getOwnPropertySymbols
  , dS = Object.prototype.hasOwnProperty
  , pS = Object.prototype.propertyIsEnumerable
  , Qv = (e,t,r)=>t in e ? NN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , ko = (e,t)=>{
    for (var r in t || (t = {}))
        dS.call(t, r) && Qv(e, r, t[r]);
    if (es)
        for (var r of es(t))
            pS.call(t, r) && Qv(e, r, t[r]);
    return e
}
  , TN = (e,t)=>zN(e, IN(t))
  , DN = (e,t)=>{
    var r = {};
    for (var n in e)
        dS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && es)
        for (var n of es(e))
            t.indexOf(n) < 0 && pS.call(e, n) && (r[n] = e[n]);
    return r
}
;
const jN = {
    position: "top",
    refProp: "ref",
    withinPortal: !1,
    inline: !1,
    arrowSize: 4,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    offset: 5,
    transition: "fade",
    transitionDuration: 100,
    width: "auto",
    events: {
        hover: !0,
        focus: !1,
        touch: !1
    },
    zIndex: Ar("popover"),
    positionDependencies: []
}
  , Ws = p.forwardRef((e,t)=>{
    const r = p.useRef(null)
      , n = F("Tooltip", jN, e)
      , {children: o, position: l, refProp: i, label: a, openDelay: s, closeDelay: c, onPositionChange: f, opened: u, withinPortal: d, radius: m, color: g, classNames: y, styles: x, unstyled: h, style: v, className: w, withArrow: S, arrowSize: P, arrowOffset: O, arrowRadius: b, arrowPosition: $, offset: E, transition: k, transitionDuration: j, multiline: T, width: L, events: A, zIndex: B, disabled: U, positionDependencies: Q, onClick: R, onMouseEnter: z, onMouseLeave: D, inline: W} = n
      , ee = DN(n, ["children", "position", "refProp", "label", "openDelay", "closeDelay", "onPositionChange", "opened", "withinPortal", "radius", "color", "classNames", "styles", "unstyled", "style", "className", "withArrow", "arrowSize", "arrowOffset", "arrowRadius", "arrowPosition", "offset", "transition", "transitionDuration", "multiline", "width", "events", "zIndex", "disabled", "positionDependencies", "onClick", "onMouseEnter", "onMouseLeave", "inline"])
      , {classes: Z, cx: $e, theme: Ee} = aS({
        radius: m,
        color: g,
        width: L,
        multiline: T
    }, {
        name: "Tooltip",
        classNames: y,
        styles: x,
        unstyled: h
    })
      , ne = RN({
        position: Uw(Ee.dir, l),
        closeDelay: c,
        openDelay: s,
        onPositionChange: f,
        opened: u,
        events: A,
        arrowRef: r,
        arrowOffset: O,
        offset: E + (S ? P / 2 : 0),
        positionDependencies: [...Q, o],
        inline: W
    });
    if (!Ss(o))
        throw new Error(sS.children);
    const Me = co(ne.reference, o.ref, t);
    return _.createElement(_.Fragment, null, _.createElement(Cl, {
        withinPortal: d
    }, _.createElement(Ed, {
        mounted: !U && ne.opened,
        transition: k,
        duration: ne.isGroupPhase ? 10 : j
    }, Mt=>{
        var vt, ht;
        return _.createElement(K, ko(ko({}, ee), ne.getFloatingProps({
            ref: ne.floating,
            className: Z.tooltip,
            style: TN(ko(ko({}, v), Mt), {
                zIndex: B,
                top: (vt = ne.y) != null ? vt : 0,
                left: (ht = ne.x) != null ? ht : 0
            })
        })), a, _.createElement(Cd, {
            ref: r,
            arrowX: ne.arrowX,
            arrowY: ne.arrowY,
            visible: S,
            withBorder: !1,
            position: ne.placement,
            arrowSize: P,
            arrowOffset: O,
            arrowRadius: b,
            arrowPosition: $,
            className: Z.arrow
        }))
    }
    )), p.cloneElement(o, ne.getReferenceProps(ko({
        onClick: R,
        onMouseEnter: z,
        onMouseLeave: D,
        onMouseMove: e.onMouseMove,
        onPointerDown: e.onPointerDown,
        onPointerEnter: e.onPointerEnter,
        [i]: Me,
        className: $e(w, o.props.className)
    }, o.props))))
}
);
Ws.Group = iS;
Ws.Floating = fS;
Ws.displayName = "@mantine/core/Tooltip";
const LN = Ws;
function AN(e, t) {
    if (t.length === 0)
        return t;
    const r = "maxWidth"in t[0] ? "maxWidth" : "minWidth"
      , n = [...t].sort((o,l)=>e.fn.size({
        size: l[r],
        sizes: e.breakpoints
    }) - e.fn.size({
        size: o[r],
        sizes: e.breakpoints
    }));
    return r === "minWidth" ? n.reverse() : n
}
var MN = Object.defineProperty
  , Xv = Object.getOwnPropertySymbols
  , FN = Object.prototype.hasOwnProperty
  , VN = Object.prototype.propertyIsEnumerable
  , Kv = (e,t,r)=>t in e ? MN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , BN = (e,t)=>{
    for (var r in t || (t = {}))
        FN.call(t, r) && Kv(e, r, t[r]);
    if (Xv)
        for (var r of Xv(t))
            VN.call(t, r) && Kv(e, r, t[r]);
    return e
}
  , HN = G((e,{spacing: t, breakpoints: r, cols: n, verticalSpacing: o})=>{
    const l = o != null
      , i = AN(e, r).reduce((a,s)=>{
        const c = "maxWidth"in s ? "max-width" : "min-width"
          , f = e.fn.size({
            size: c === "max-width" ? s.maxWidth : s.minWidth,
            sizes: e.breakpoints
        });
        return a[`@media (${c}: ${f - (c === "max-width" ? 1 : 0)}px)`] = {
            gridTemplateColumns: `repeat(${s.cols}, minmax(0, 1fr))`,
            gap: `${e.fn.size({
                size: s.verticalSpacing || (l ? o : t),
                sizes: e.spacing
            })}px ${e.fn.size({
                size: s.spacing || t,
                sizes: e.spacing
            })}px`
        },
        a
    }
    , {});
    return {
        root: BN({
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
            gap: `${e.fn.size({
                size: l ? o : t,
                sizes: e.spacing
            })}px ${e.fn.size({
                size: t,
                sizes: e.spacing
            })}px`
        }, i)
    }
}
);
const WN = HN;
var UN = Object.defineProperty
  , ts = Object.getOwnPropertySymbols
  , mS = Object.prototype.hasOwnProperty
  , gS = Object.prototype.propertyIsEnumerable
  , Zv = (e,t,r)=>t in e ? UN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , YN = (e,t)=>{
    for (var r in t || (t = {}))
        mS.call(t, r) && Zv(e, r, t[r]);
    if (ts)
        for (var r of ts(t))
            gS.call(t, r) && Zv(e, r, t[r]);
    return e
}
  , GN = (e,t)=>{
    var r = {};
    for (var n in e)
        mS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ts)
        for (var n of ts(e))
            t.indexOf(n) < 0 && gS.call(e, n) && (r[n] = e[n]);
    return r
}
;
const QN = {
    breakpoints: [],
    cols: 1,
    spacing: "md"
}
  , jd = p.forwardRef((e,t)=>{
    const r = F("SimpleGrid", QN, e)
      , {className: n, breakpoints: o, cols: l, spacing: i, verticalSpacing: a, children: s, unstyled: c} = r
      , f = GN(r, ["className", "breakpoints", "cols", "spacing", "verticalSpacing", "children", "unstyled"])
      , {classes: u, cx: d} = WN({
        breakpoints: o,
        cols: l,
        spacing: i,
        verticalSpacing: a
    }, {
        unstyled: c,
        name: "SimpleGrid"
    });
    return _.createElement(K, YN({
        className: d(u.root, n),
        ref: t
    }, f), s)
}
);
jd.displayName = "@mantine/core/SimpleGrid";
var XN = Object.defineProperty
  , KN = Object.defineProperties
  , ZN = Object.getOwnPropertyDescriptors
  , Jv = Object.getOwnPropertySymbols
  , JN = Object.prototype.hasOwnProperty
  , qN = Object.prototype.propertyIsEnumerable
  , qv = (e,t,r)=>t in e ? XN(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , ez = (e,t)=>{
    for (var r in t || (t = {}))
        JN.call(t, r) && qv(e, r, t[r]);
    if (Jv)
        for (var r of Jv(t))
            qN.call(t, r) && qv(e, r, t[r]);
    return e
}
  , tz = (e,t)=>KN(e, ZN(t));
const rz = {
    xs: 16,
    sm: 20,
    md: 26,
    lg: 32,
    xl: 40
};
var nz = G((e,{color: t, size: r, radius: n, gradient: o, variant: l})=>{
    const i = e.fn.variant({
        variant: l,
        color: t || e.primaryColor,
        gradient: o,
        primaryFallback: !1
    })
      , a = e.fn.size({
        size: r,
        sizes: rz
    });
    return {
        root: tz(ez({}, e.fn.fontStyles()), {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            width: a,
            height: a,
            minWidth: a,
            minHeight: a,
            borderRadius: e.fn.radius(n),
            backgroundColor: i.background,
            color: i.color,
            backgroundImage: l === "gradient" ? i.background : void 0,
            border: `${l === "gradient" ? 0 : 1}px solid ${i.border}`
        })
    }
}
);
const oz = nz;
var lz = Object.defineProperty
  , rs = Object.getOwnPropertySymbols
  , vS = Object.prototype.hasOwnProperty
  , hS = Object.prototype.propertyIsEnumerable
  , eh = (e,t,r)=>t in e ? lz(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , iz = (e,t)=>{
    for (var r in t || (t = {}))
        vS.call(t, r) && eh(e, r, t[r]);
    if (rs)
        for (var r of rs(t))
            hS.call(t, r) && eh(e, r, t[r]);
    return e
}
  , az = (e,t)=>{
    var r = {};
    for (var n in e)
        vS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && rs)
        for (var n of rs(e))
            t.indexOf(n) < 0 && hS.call(e, n) && (r[n] = e[n]);
    return r
}
;
const sz = {
    size: "md",
    variant: "filled"
}
  , yS = p.forwardRef((e,t)=>{
    const r = F("ThemeIcon", sz, e)
      , {className: n, size: o, radius: l, variant: i, color: a, children: s, gradient: c, unstyled: f} = r
      , u = az(r, ["className", "size", "radius", "variant", "color", "children", "gradient", "unstyled"])
      , {classes: d, cx: m} = oz({
        variant: i,
        radius: l,
        color: a,
        size: o,
        gradient: c
    }, {
        name: "ThemeIcon",
        unstyled: f
    });
    return _.createElement(K, iz({
        className: m(d.root, n),
        ref: t
    }, u), s)
}
);
yS.displayName = "@mantine/core/ThemeIcon";
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ns() {
    return ns = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ns.apply(this, arguments)
}
var _r;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(_r || (_r = {}));
const th = "popstate";
function cz(e) {
    e === void 0 && (e = {});
    function t(n, o) {
        let {pathname: l, search: i, hash: a} = n.location;
        return tf("", {
            pathname: l,
            search: i,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function r(n, o) {
        return typeof o == "string" ? o : yl(o)
    }
    return dz(t, r, null, e)
}
function Se(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function uz() {
    return Math.random().toString(36).substr(2, 8)
}
function rh(e) {
    return {
        usr: e.state,
        key: e.key
    }
}
function tf(e, t, r, n) {
    return r === void 0 && (r = null),
    ns({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? po(t) : t, {
        state: r,
        key: t && t.key || n || uz()
    })
}
function yl(e) {
    let {pathname: t="/", search: r="", hash: n=""} = e;
    return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
}
function po(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r),
        e = e.substr(0, r));
        let n = e.indexOf("?");
        n >= 0 && (t.search = e.substr(n),
        e = e.substr(0, n)),
        e && (t.pathname = e)
    }
    return t
}
function fz(e) {
    let t = typeof window < "u" && typeof window.location < "u" && window.location.origin !== "null" ? window.location.origin : window.location.href
      , r = typeof e == "string" ? e : yl(e);
    return Se(t, "No window.location.(origin|href) available to create URL for href: " + r),
    new URL(r,t)
}
function dz(e, t, r, n) {
    n === void 0 && (n = {});
    let {window: o=document.defaultView, v5Compat: l=!1} = n
      , i = o.history
      , a = _r.Pop
      , s = null;
    function c() {
        a = _r.Pop,
        s && s({
            action: a,
            location: d.location
        })
    }
    function f(m, g) {
        a = _r.Push;
        let y = tf(d.location, m, g);
        r && r(y, m);
        let x = rh(y)
          , h = d.createHref(y);
        try {
            i.pushState(x, "", h)
        } catch {
            o.location.assign(h)
        }
        l && s && s({
            action: a,
            location: d.location
        })
    }
    function u(m, g) {
        a = _r.Replace;
        let y = tf(d.location, m, g);
        r && r(y, m);
        let x = rh(y)
          , h = d.createHref(y);
        i.replaceState(x, "", h),
        l && s && s({
            action: a,
            location: d.location
        })
    }
    let d = {
        get action() {
            return a
        },
        get location() {
            return e(o, i)
        },
        listen(m) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(th, c),
            s = m,
            ()=>{
                o.removeEventListener(th, c),
                s = null
            }
        },
        createHref(m) {
            return t(o, m)
        },
        encodeLocation(m) {
            let g = fz(typeof m == "string" ? m : yl(m));
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: f,
        replace: u,
        go(m) {
            return i.go(m)
        }
    };
    return d
}
var nh;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(nh || (nh = {}));
function pz(e, t, r) {
    r === void 0 && (r = "/");
    let n = typeof t == "string" ? po(t) : t
      , o = SS(n.pathname || "/", r);
    if (o == null)
        return null;
    let l = wS(e);
    mz(l);
    let i = null;
    for (let a = 0; i == null && a < l.length; ++a)
        i = Pz(l[a], $z(o));
    return i
}
function wS(e, t, r, n) {
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = "");
    let o = (l,i,a)=>{
        let s = {
            relativePath: a === void 0 ? l.path || "" : a,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: i,
            route: l
        };
        s.relativePath.startsWith("/") && (Se(s.relativePath.startsWith(n), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(n.length));
        let c = kr([n, s.relativePath])
          , f = r.concat(s);
        l.children && l.children.length > 0 && (Se(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        wS(l.children, t, f, c)),
        !(l.path == null && !l.index) && t.push({
            path: c,
            score: Sz(c, l.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach((l,i)=>{
        var a;
        if (l.path === "" || !((a = l.path) != null && a.includes("?")))
            o(l, i);
        else
            for (let s of _S(l.path))
                o(l, i, s)
    }
    ),
    t
}
function _S(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[r,...n] = t
      , o = r.endsWith("?")
      , l = r.replace(/\?$/, "");
    if (n.length === 0)
        return o ? [l, ""] : [l];
    let i = _S(n.join("/"))
      , a = [];
    return a.push(...i.map(s=>s === "" ? l : [l, s].join("/"))),
    o && a.push(...i),
    a.map(s=>e.startsWith("/") && s === "" ? "/" : s)
}
function mz(e) {
    e.sort((t,r)=>t.score !== r.score ? r.score - t.score : xz(t.routesMeta.map(n=>n.childrenIndex), r.routesMeta.map(n=>n.childrenIndex)))
}
const gz = /^:\w+$/
  , vz = 3
  , hz = 2
  , yz = 1
  , wz = 10
  , _z = -2
  , oh = e=>e === "*";
function Sz(e, t) {
    let r = e.split("/")
      , n = r.length;
    return r.some(oh) && (n += _z),
    t && (n += hz),
    r.filter(o=>!oh(o)).reduce((o,l)=>o + (gz.test(l) ? vz : l === "" ? yz : wz), n)
}
function xz(e, t) {
    return e.length === t.length && e.slice(0, -1).every((n,o)=>n === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Pz(e, t) {
    let {routesMeta: r} = e
      , n = {}
      , o = "/"
      , l = [];
    for (let i = 0; i < r.length; ++i) {
        let a = r[i]
          , s = i === r.length - 1
          , c = o === "/" ? t : t.slice(o.length) || "/"
          , f = bz({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: s
        }, c);
        if (!f)
            return null;
        Object.assign(n, f.params);
        let u = a.route;
        l.push({
            params: n,
            pathname: kr([o, f.pathname]),
            pathnameBase: Rz(kr([o, f.pathnameBase])),
            route: u
        }),
        f.pathnameBase !== "/" && (o = kr([o, f.pathnameBase]))
    }
    return l
}
function bz(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[r,n] = Oz(e.path, e.caseSensitive, e.end)
      , o = t.match(r);
    if (!o)
        return null;
    let l = o[0]
      , i = l.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: n.reduce((c,f,u)=>{
            if (f === "*") {
                let d = a[u] || "";
                i = l.slice(0, l.length - d.length).replace(/(.)\/+$/, "$1")
            }
            return c[f] = Ez(a[u] || "", f),
            c
        }
        , {}),
        pathname: l,
        pathnameBase: i,
        pattern: e
    }
}
function Oz(e, t, r) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Ld(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let n = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (i,a)=>(n.push(a),
    "/([^\\/]+)"));
    return e.endsWith("*") ? (n.push("*"),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), n]
}
function $z(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return Ld(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Ez(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (r) {
        return Ld(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")),
        e
    }
}
function SS(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length
      , n = e.charAt(r);
    return n && n !== "/" ? null : e.slice(r) || "/"
}
function Ld(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Cz(e, t) {
    t === void 0 && (t = "/");
    let {pathname: r, search: n="", hash: o=""} = typeof e == "string" ? po(e) : e;
    return {
        pathname: r ? r.startsWith("/") ? r : kz(r, t) : t,
        search: Nz(n),
        hash: zz(o)
    }
}
function kz(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o=>{
        o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function Hc(e, t, r, n) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function xS(e) {
    return e.filter((t,r)=>r === 0 || t.route.path && t.route.path.length > 0)
}
function PS(e, t, r, n) {
    n === void 0 && (n = !1);
    let o;
    typeof e == "string" ? o = po(e) : (o = ns({}, e),
    Se(!o.pathname || !o.pathname.includes("?"), Hc("?", "pathname", "search", o)),
    Se(!o.pathname || !o.pathname.includes("#"), Hc("#", "pathname", "hash", o)),
    Se(!o.search || !o.search.includes("#"), Hc("#", "search", "hash", o)));
    let l = e === "" || o.pathname === "", i = l ? "/" : o.pathname, a;
    if (n || i == null)
        a = r;
    else {
        let u = t.length - 1;
        if (i.startsWith("..")) {
            let d = i.split("/");
            for (; d[0] === ".."; )
                d.shift(),
                u -= 1;
            o.pathname = d.join("/")
        }
        a = u >= 0 ? t[u] : "/"
    }
    let s = Cz(o, a)
      , c = i && i !== "/" && i.endsWith("/")
      , f = (l || i === ".") && r.endsWith("/");
    return !s.pathname.endsWith("/") && (c || f) && (s.pathname += "/"),
    s
}
const kr = e=>e.join("/").replace(/\/\/+/g, "/")
  , Rz = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Nz = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , zz = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Iz {
    constructor(t, r, n, o) {
        o === void 0 && (o = !1),
        this.status = t,
        this.statusText = r || "",
        this.internal = o,
        n instanceof Error ? (this.data = n.toString(),
        this.error = n) : this.data = n
    }
}
function Tz(e) {
    return e instanceof Iz
}
const Dz = ["post", "put", "patch", "delete"];
[...Dz];
/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function rf() {
    return rf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    rf.apply(this, arguments)
}
function jz(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const Lz = typeof Object.is == "function" ? Object.is : jz
  , {useState: Az, useEffect: Mz, useLayoutEffect: Fz, useDebugValue: Vz} = nn;
function Bz(e, t, r) {
    const n = t()
      , [{inst: o},l] = Az({
        inst: {
            value: n,
            getSnapshot: t
        }
    });
    return Fz(()=>{
        o.value = n,
        o.getSnapshot = t,
        Wc(o) && l({
            inst: o
        })
    }
    , [e, n, t]),
    Mz(()=>(Wc(o) && l({
        inst: o
    }),
    e(()=>{
        Wc(o) && l({
            inst: o
        })
    }
    )), [e]),
    Vz(n),
    n
}
function Wc(e) {
    const t = e.getSnapshot
      , r = e.value;
    try {
        const n = t();
        return !Lz(r, n)
    } catch {
        return !0
    }
}
function Hz(e, t, r) {
    return t()
}
const Wz = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Uz = !Wz
  , Yz = Uz ? Hz : Bz;
"useSyncExternalStore"in nn && (e=>e.useSyncExternalStore)(nn);
const Gz = p.createContext(null)
  , Qz = p.createContext(null)
  , bS = p.createContext(null)
  , Us = p.createContext(null)
  , Ys = p.createContext(null)
  , mo = p.createContext({
    outlet: null,
    matches: []
})
  , OS = p.createContext(null);
function Xz(e, t) {
    let {relative: r} = t === void 0 ? {} : t;
    Nl() || Se(!1);
    let {basename: n, navigator: o} = p.useContext(Us)
      , {hash: l, pathname: i, search: a} = $S(e, {
        relative: r
    })
      , s = i;
    return n !== "/" && (s = i === "/" ? n : kr([n, i])),
    o.createHref({
        pathname: s,
        search: a,
        hash: l
    })
}
function Nl() {
    return p.useContext(Ys) != null
}
function Gs() {
    return Nl() || Se(!1),
    p.useContext(Ys).location
}
function zl() {
    Nl() || Se(!1);
    let {basename: e, navigator: t} = p.useContext(Us)
      , {matches: r} = p.useContext(mo)
      , {pathname: n} = Gs()
      , o = JSON.stringify(xS(r).map(a=>a.pathnameBase))
      , l = p.useRef(!1);
    return p.useEffect(()=>{
        l.current = !0
    }
    ),
    p.useCallback(function(a, s) {
        if (s === void 0 && (s = {}),
        !l.current)
            return;
        if (typeof a == "number") {
            t.go(a);
            return
        }
        let c = PS(a, JSON.parse(o), n, s.relative === "path");
        e !== "/" && (c.pathname = c.pathname === "/" ? e : kr([e, c.pathname])),
        (s.replace ? t.replace : t.push)(c, s.state, s)
    }, [e, t, o, n])
}
function $S(e, t) {
    let {relative: r} = t === void 0 ? {} : t
      , {matches: n} = p.useContext(mo)
      , {pathname: o} = Gs()
      , l = JSON.stringify(xS(n).map(i=>i.pathnameBase));
    return p.useMemo(()=>PS(e, JSON.parse(l), o, r === "path"), [e, l, o, r])
}
function Kz(e, t) {
    Nl() || Se(!1);
    let {navigator: r} = p.useContext(Us)
      , n = p.useContext(bS)
      , {matches: o} = p.useContext(mo)
      , l = o[o.length - 1]
      , i = l ? l.params : {};
    l && l.pathname;
    let a = l ? l.pathnameBase : "/";
    l && l.route;
    let s = Gs(), c;
    if (t) {
        var f;
        let y = typeof t == "string" ? po(t) : t;
        a === "/" || (f = y.pathname) != null && f.startsWith(a) || Se(!1),
        c = y
    } else
        c = s;
    let u = c.pathname || "/"
      , d = a === "/" ? u : u.slice(a.length) || "/"
      , m = pz(e, {
        pathname: d
    })
      , g = e8(m && m.map(y=>Object.assign({}, y, {
        params: Object.assign({}, i, y.params),
        pathname: kr([a, r.encodeLocation ? r.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? a : kr([a, r.encodeLocation ? r.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), o, n || void 0);
    return t && g ? p.createElement(Ys.Provider, {
        value: {
            location: rf({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: _r.Pop
        }
    }, g) : g
}
function Zz() {
    let e = o8()
      , t = Tz(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , r = e instanceof Error ? e.stack : null
      , n = "rgba(200,200,200, 0.5)"
      , o = {
        padding: "0.5rem",
        backgroundColor: n
    }
      , l = {
        padding: "2px 4px",
        backgroundColor: n
    };
    return p.createElement(p.Fragment, null, p.createElement("h2", null, "Unhandled Thrown Error!"), p.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), r ? p.createElement("pre", {
        style: o
    }, r) : null, p.createElement("p", null, "💿 Hey developer 👋"), p.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", p.createElement("code", {
        style: l
    }, "errorElement"), " props on ", p.createElement("code", {
        style: l
    }, "<Route>")))
}
class Jz extends p.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location ? {
            error: t.error,
            location: t.location
        } : {
            error: t.error || r.error,
            location: r.location
        }
    }
    componentDidCatch(t, r) {
        console.error("React Router caught the following error during render", t, r)
    }
    render() {
        return this.state.error ? p.createElement(mo.Provider, {
            value: this.props.routeContext
        }, p.createElement(OS.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function qz(e) {
    let {routeContext: t, match: r, children: n} = e
      , o = p.useContext(Gz);
    return o && r.route.errorElement && (o._deepestRenderedBoundaryId = r.route.id),
    p.createElement(mo.Provider, {
        value: t
    }, n)
}
function e8(e, t, r) {
    if (t === void 0 && (t = []),
    e == null)
        if (r != null && r.errors)
            e = r.matches;
        else
            return null;
    let n = e
      , o = r == null ? void 0 : r.errors;
    if (o != null) {
        let l = n.findIndex(i=>i.route.id && (o == null ? void 0 : o[i.route.id]));
        l >= 0 || Se(!1),
        n = n.slice(0, Math.min(n.length, l + 1))
    }
    return n.reduceRight((l,i,a)=>{
        let s = i.route.id ? o == null ? void 0 : o[i.route.id] : null
          , c = r ? i.route.errorElement || p.createElement(Zz, null) : null
          , f = t.concat(n.slice(0, a + 1))
          , u = ()=>p.createElement(qz, {
            match: i,
            routeContext: {
                outlet: l,
                matches: f
            }
        }, s ? c : i.route.element !== void 0 ? i.route.element : l);
        return r && (i.route.errorElement || a === 0) ? p.createElement(Jz, {
            location: r.location,
            component: c,
            error: s,
            children: u(),
            routeContext: {
                outlet: null,
                matches: f
            }
        }) : u()
    }
    , null)
}
var lh;
(function(e) {
    e.UseRevalidator = "useRevalidator"
}
)(lh || (lh = {}));
var os;
(function(e) {
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator"
}
)(os || (os = {}));
function t8(e) {
    let t = p.useContext(bS);
    return t || Se(!1),
    t
}
function r8(e) {
    let t = p.useContext(mo);
    return t || Se(!1),
    t
}
function n8(e) {
    let t = r8()
      , r = t.matches[t.matches.length - 1];
    return r.route.id || Se(!1),
    r.route.id
}
function o8() {
    var e;
    let t = p.useContext(OS)
      , r = t8(os.UseRouteError)
      , n = n8(os.UseRouteError);
    return t || ((e = r.errors) == null ? void 0 : e[n])
}
function Do(e) {
    Se(!1)
}
function l8(e) {
    let {basename: t="/", children: r=null, location: n, navigationType: o=_r.Pop, navigator: l, static: i=!1} = e;
    Nl() && Se(!1);
    let a = t.replace(/^\/*/, "/")
      , s = p.useMemo(()=>({
        basename: a,
        navigator: l,
        static: i
    }), [a, l, i]);
    typeof n == "string" && (n = po(n));
    let {pathname: c="/", search: f="", hash: u="", state: d=null, key: m="default"} = n
      , g = p.useMemo(()=>{
        let y = SS(c, a);
        return y == null ? null : {
            pathname: y,
            search: f,
            hash: u,
            state: d,
            key: m
        }
    }
    , [a, c, f, u, d, m]);
    return g == null ? null : p.createElement(Us.Provider, {
        value: s
    }, p.createElement(Ys.Provider, {
        children: r,
        value: {
            location: g,
            navigationType: o
        }
    }))
}
function i8(e) {
    let {children: t, location: r} = e
      , n = p.useContext(Qz)
      , o = n && !t ? n.router.routes : nf(t);
    return Kz(o, r)
}
var ih;
(function(e) {
    e[e.pending = 0] = "pending",
    e[e.success = 1] = "success",
    e[e.error = 2] = "error"
}
)(ih || (ih = {}));
new Promise(()=>{}
);
function nf(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return p.Children.forEach(e, (n,o)=>{
        if (!p.isValidElement(n))
            return;
        if (n.type === p.Fragment) {
            r.push.apply(r, nf(n.props.children, t));
            return
        }
        n.type !== Do && Se(!1),
        !n.props.index || !n.props.children || Se(!1);
        let l = [...t, o]
          , i = {
            id: n.props.id || l.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            hasErrorBoundary: n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle
        };
        n.props.children && (i.children = nf(n.props.children, l)),
        r.push(i)
    }
    ),
    r
}
/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function of() {
    return of = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    of.apply(this, arguments)
}
function a8(e, t) {
    if (e == null)
        return {};
    var r = {}, n = Object.keys(e), o, l;
    for (l = 0; l < n.length; l++)
        o = n[l],
        !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}
function s8(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function c8(e, t) {
    return e.button === 0 && (!t || t === "_self") && !s8(e)
}
const u8 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function f8(e) {
    let {basename: t, children: r, window: n} = e
      , o = p.useRef();
    o.current == null && (o.current = cz({
        window: n,
        v5Compat: !0
    }));
    let l = o.current
      , [i,a] = p.useState({
        action: l.action,
        location: l.location
    });
    return p.useLayoutEffect(()=>l.listen(a), [l]),
    p.createElement(l8, {
        basename: t,
        children: r,
        location: i.location,
        navigationType: i.action,
        navigator: l
    })
}
const d8 = p.forwardRef(function(t, r) {
    let {onClick: n, relative: o, reloadDocument: l, replace: i, state: a, target: s, to: c, preventScrollReset: f} = t
      , u = a8(t, u8)
      , d = Xz(c, {
        relative: o
    })
      , m = p8(c, {
        replace: i,
        state: a,
        target: s,
        preventScrollReset: f,
        relative: o
    });
    function g(y) {
        n && n(y),
        y.defaultPrevented || m(y)
    }
    return p.createElement("a", of({}, u, {
        href: d,
        onClick: l ? n : g,
        ref: r,
        target: s
    }))
});
var ah;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmitImpl = "useSubmitImpl",
    e.UseFetcher = "useFetcher"
}
)(ah || (ah = {}));
var sh;
(function(e) {
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(sh || (sh = {}));
function p8(e, t) {
    let {target: r, replace: n, state: o, preventScrollReset: l, relative: i} = t === void 0 ? {} : t
      , a = zl()
      , s = Gs()
      , c = $S(e, {
        relative: i
    });
    return p.useCallback(f=>{
        if (c8(f, r)) {
            f.preventDefault();
            let u = n !== void 0 ? n : yl(s) === yl(c);
            a(e, {
                replace: u,
                state: o,
                preventScrollReset: l,
                relative: i
            })
        }
    }
    , [s, a, c, n, o, r, e, l, i])
}
var ES = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , ch = _.createContext && _.createContext(ES)
  , Rr = globalThis && globalThis.__assign || function() {
    return Rr = Object.assign || function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    Rr.apply(this, arguments)
}
  , m8 = globalThis && globalThis.__rest || function(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
            t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
}
;
function CS(e) {
    return e && e.map(function(t, r) {
        return _.createElement(t.tag, Rr({
            key: r
        }, t.attr), CS(t.child))
    })
}
function Fr(e) {
    return function(t) {
        return _.createElement(g8, Rr({
            attr: Rr({}, e.attr)
        }, t), CS(e.child))
    }
}
function g8(e) {
    var t = function(r) {
        var n = e.attr, o = e.size, l = e.title, i = m8(e, ["attr", "size", "title"]), a = o || r.size || "1em", s;
        return r.className && (s = r.className),
        e.className && (s = (s ? s + " " : "") + e.className),
        _.createElement("svg", Rr({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, r.attr, n, i, {
            className: s,
            style: Rr(Rr({
                color: e.color || r.color
            }, r.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), l && _.createElement("title", null, l), e.children)
    };
    return ch !== void 0 ? _.createElement(ch.Consumer, null, function(r) {
        return t(r)
    }) : t(ES)
}
function v8(e) {
    return Fr({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M17 5H7V7H17V5Z",
                fill: "currentColor"
            }
        }, {
            tag: "path",
            attr: {
                d: "M7 9H9V11H7V9Z",
                fill: "currentColor"
            }
        }, {
            tag: "path",
            attr: {
                d: "M9 13H7V15H9V13Z",
                fill: "currentColor"
            }
        }, {
            tag: "path",
            attr: {
                d: "M7 17H9V19H7V17Z",
                fill: "currentColor"
            }
        }, {
            tag: "path",
            attr: {
                d: "M13 9H11V11H13V9Z",
                fill: "currentColor"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 13H13V15H11V13Z",
                fill: "currentColor"
            }
        }, {
            tag: "path",
            attr: {
                d: "M13 17H11V19H13V17Z",
                fill: "currentColor"
            }
        }, {
            tag: "path",
            attr: {
                d: "M15 9H17V11H15V9Z",
                fill: "currentColor"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17 13H15V19H17V13Z",
                fill: "currentColor"
            }
        }, {
            tag: "path",
            attr: {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z",
                fill: "currentColor"
            }
        }]
    })(e)
}
function h8(e) {
    return Fr({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
            }
        }]
    })(e)
}
function y8(e) {
    return Fr({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
            }
        }]
    })(e)
}
function w8(e) {
    return Fr({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
            }
        }]
    })(e)
}
function _8(e) {
    return Fr({
        tag: "svg",
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
            }
        }]
    })(e)
}
function S8(e) {
    return Fr({
        tag: "svg",
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
            }
        }]
    })(e)
}
function x8(e) {
    return Fr({
        tag: "svg",
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            }
        }]
    })(e)
}
const mi = ({icon: e, label: t, link: r})=>C(Ls, {
    component: d8,
    to: r,
    sx: n=>({
        display: "block",
        width: "100%",
        padding: n.spacing.xs,
        borderRadius: n.radius.sm,
        color: n.colorScheme === "dark" ? n.colors.dark[0] : n.black,
        "&:hover": {
            backgroundColor: n.colorScheme === "dark" ? n.colors.dark[6] : n.colors.gray[0]
        }
    }),
    children: V(z_, {
        children: [C(yS, {
            variant: "light",
            style: {
                backgroundColor: "transparent"
            },
            children: e
        }), C(q, {
            size: "lg",
            children: t
        })]
    })
});
function P8(e) {
    return Fr({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "circle",
            attr: {
                cx: "12",
                cy: "12",
                r: "5"
            }
        }, {
            tag: "line",
            attr: {
                x1: "12",
                y1: "1",
                x2: "12",
                y2: "3"
            }
        }, {
            tag: "line",
            attr: {
                x1: "12",
                y1: "21",
                x2: "12",
                y2: "23"
            }
        }, {
            tag: "line",
            attr: {
                x1: "4.22",
                y1: "4.22",
                x2: "5.64",
                y2: "5.64"
            }
        }, {
            tag: "line",
            attr: {
                x1: "18.36",
                y1: "18.36",
                x2: "19.78",
                y2: "19.78"
            }
        }, {
            tag: "line",
            attr: {
                x1: "1",
                y1: "12",
                x2: "3",
                y2: "12"
            }
        }, {
            tag: "line",
            attr: {
                x1: "21",
                y1: "12",
                x2: "23",
                y2: "12"
            }
        }, {
            tag: "line",
            attr: {
                x1: "4.22",
                y1: "19.78",
                x2: "5.64",
                y2: "18.36"
            }
        }, {
            tag: "line",
            attr: {
                x1: "18.36",
                y1: "5.64",
                x2: "19.78",
                y2: "4.22"
            }
        }]
    })(e)
}
const b8 = ()=>{
    const {colorScheme: e, toggleColorScheme: t} = k$()
      , r = e === "dark";
    return C(md, {
        variant: "outline",
        color: r ? "yellow" : "blue",
        onClick: ()=>t(),
        title: "Toggle color scheme",
        children: r ? C(P8, {
            size: 18
        }) : C(S8, {
            size: 18
        })
    })
}
  , lf = ({label: e, amount: t, color: r})=>V(k_, {
    shadow: "sm",
    p: "xl",
    mb: 50,
    style: {
        height: "250px",
        textAlign: "center"
    },
    children: [C(q, {
        weight: 500,
        size: 35,
        mt: "md",
        children: e
    }), V(q, {
        mt: "xs",
        size: 35,
        color: r,
        weight: 500,
        children: ["$", t.toLocaleString("en-US")]
    })]
})
  , vn = p.createContext({
    history: [],
    setHistory: e=>{}
    ,
    addHistoryElement: e=>{}
    ,
    deleteHistoryElement: e=>{}
});
function O8({children: e}) {
    const [t,r] = Ds({
        key: "History",
        defaultValue: []
    });
    function n(a) {
        r(a)
    }
    function o(a) {
        var s = new Date
          , c = s.getDate() + "/" + (s.getMonth() + 1) + "/" + s.getFullYear();
        r(f=>[{
            label: a.label,
            amount: a.amount,
            type: a.type,
            id: a.id,
            dateCreated: c,
            category: a.category
        }, ...f])
    }
    function l(a) {
        r(s=>s.filter(c=>c.id !== a))
    }
    const i = {
        history: t,
        setHistory: n,
        addHistoryElement: o,
        deleteHistoryElement: l
    };
    return C(vn.Provider, {
        value: i,
        children: e
    })
}
const Qs = p.createContext({
    availableCategories: [],
    setAvailableCategories: e=>{}
});
function $8({children: e}) {
    const [t,r] = Ds({
        key: "multiSelectCategories",
        defaultValue: [{
            label: "Entertainment",
            value: "Entertainment",
            isused: "false"
        }, {
            label: "Groceries",
            value: "Groceries",
            isused: "false"
        }, {
            label: "Uncategorized",
            value: "Uncategorized",
            isused: "false"
        }]
    });
    function n(l) {
        r(l)
    }
    const o = {
        availableCategories: t,
        setAvailableCategories: n
    };
    return C(Qs.Provider, {
        value: o,
        children: e
    })
}
const Ct = p.createContext({
    categories: [],
    getTotalAmount: e=>0,
    resetAmount: e=>{}
    ,
    setCategories: e=>{}
    ,
    addCategory: e=>{}
    ,
    deleteCategory: e=>{}
    ,
    subtractCategoryAmount: (e,t)=>{}
});
function E8({children: e}) {
    const [t,r] = Ds({
        key: "categories",
        defaultValue: []
    })
      , {setAvailableCategories: n} = p.useContext(Qs);
    function o(u) {
        r(u)
    }
    function l(u) {
        let d = 0;
        return u === "Expenses" ? t.forEach(m=>{
            m.label !== "Budget" && (d += m.amount)
        }
        ) : t.forEach(m=>{
            m.label === "Budget" && (d += m.amount)
        }
        ),
        d
    }
    function i(u) {
        r(d=>{
            const m = JSON.parse(JSON.stringify(d))
              , g = [];
            return m.forEach(y=>{
                u === "Budget" ? y.label !== "Budget" && g.push(y) : y.label === "Budget" && g.push(y)
            }
            ),
            g
        }
        )
    }
    function a(u) {
        let d = []
          , m = 0;
        r(g=>(d = JSON.parse(JSON.stringify(g)),
        d.length === 0 ? [u] : (d = d.map(y=>(y.label === u.label && (y.amount += u.amount,
        m++),
        y)),
        m === 0 && d.push(u),
        [...d])))
    }
    function s(u) {
        r(d=>d.filter(m=>m.label !== u))
    }
    function c(u, d) {
        r(m=>{
            const g = JSON.parse(JSON.stringify(m))
              , y = [];
            return g.forEach(x=>{
                x.label === u && (x.amount -= d),
                x.amount > 0 ? y.push(x) : n(h=>{
                    const v = JSON.parse(JSON.stringify(h));
                    return v.forEach(w=>{
                        w.label === u && (w.isused = "false")
                    }
                    ),
                    v
                }
                )
            }
            ),
            y
        }
        )
    }
    const f = {
        categories: t,
        getTotalAmount: l,
        resetAmount: i,
        setCategories: o,
        addCategory: a,
        deleteCategory: s,
        subtractCategoryAmount: c
    };
    return C(Ct.Provider, {
        value: f,
        children: e
    })
}
const C8 = ({opened: e, setOpened: t, label: r, amount: n, dateCreated: o, type: l, id: i, category: a})=>{
    const {deleteHistoryElement: s} = p.useContext(vn)
      , {subtractCategoryAmount: c, addCategory: f} = p.useContext(Ct);
    return V(Dd, {
        opened: e,
        onClose: ()=>t(!1),
        title: "Transaction Details",
        styles: {
            title: {
                fontSize: 20
            }
        },
        children: [V(q, {
            children: [C("span", {
                style: {
                    fontWeight: "bold"
                },
                children: "Label:"
            }), " ", r]
        }), V(q, {
            children: [C("span", {
                style: {
                    fontWeight: "bold"
                },
                children: "Type:"
            }), " ", l]
        }), V(q, {
            children: [C("span", {
                style: {
                    fontWeight: "bold"
                },
                children: "Amount:"
            }), " $", n.toLocaleString()]
        }), V(q, {
            children: [C("span", {
                style: {
                    fontWeight: "bold"
                },
                children: "Category:"
            }), " ", a]
        }), V(q, {
            children: [C("span", {
                style: {
                    fontWeight: "bold"
                },
                children: "Date Created:"
            }), " ", o]
        }), V(q, {
            children: [C("span", {
                style: {
                    fontWeight: "bold"
                },
                children: "ID:"
            }), " ", i]
        }), V("div", {
            style: {
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginTop: "30px"
            },
            children: [C(Kt, {
                onClick: ()=>{
                    t(!1)
                }
                ,
                children: "Exit"
            }), C(Kt, {
                color: "red",
                onClick: ()=>{
                    s(i),
                    l === "Expenses Reset" ? f({
                        label: "Uncategorized",
                        amount: n,
                        id: crypto.randomUUID()
                    }) : l === "Budget Reset" && f({
                        label: "Budget",
                        amount: n,
                        id: crypto.randomUUID()
                    }),
                    c(a, n),
                    t(!1)
                }
                ,
                children: "Delete Item"
            })]
        })]
    })
}
  , k8 = ({label: e, amount: t, type: r, id: n, dateCreated: o, category: l})=>{
    const [i,a] = p.useState(!1)
      , s = r === "Budget" || r === "Expenses Reset" ? "#69DB7C" : "#FF8787";
    return V(yh, {
        children: [C(C8, {
            opened: i,
            setOpened: a,
            label: e,
            amount: t,
            type: r,
            dateCreated: o,
            id: n,
            category: l
        }), V(k_, {
            shadow: "sm",
            style: {
                height: "50px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRight: `4px solid ${s}`
            },
            onClick: ()=>{
                a(!0)
            }
            ,
            children: [C(q, {
                weight: 500,
                size: 15,
                children: e.length > 44 ? e.slice(0, 44) + "..." : e
            }), V(q, {
                size: 15,
                color: s,
                weight: 500,
                children: [r === "Budget" || r === "Expenses Reset" ? "+" : "-", "$", t.toLocaleString("en-US")]
            })]
        })]
    })
}
  , R8 = ()=>{
    const {history: e} = p.useContext(vn);
    return V("div", {
        style: {
            width: "500px"
        },
        children: [C(q, {
            size: "xl",
            sx: t=>({
                color: t.colorScheme === "dark" ? t.colors.dark[0] : t.colors.gray[9]
            }),
            children: "Transaction History"
        }), C(Ir, {
            my: "sm"
        }), C(uw, {
            type: "always",
            sx: t=>({
                backgroundColor: t.colorScheme === "dark" ? t.colors.dark[8] : t.colors.gray[0],
                height: 300,
                width: 500,
                paddingRight: 15
            }),
            children: C(D_, {
                children: e.map(t=>C(k8, {
                    id: t.id,
                    label: t.label,
                    amount: t.amount,
                    type: t.type,
                    dateCreated: t.dateCreated,
                    category: t.category
                }, t.id))
            })
        })]
    })
}
  , Xs = ({children: e})=>C("div", {
    style: {
        margin: "50px 50px 0"
    },
    children: e
});
function N8({context: e, data: t}) {
    let r = t.reduce((a,{amount: s})=>a + s, 0)
      , n = 0
      , o = 150
      , l = 250
      , i = 200;
    e.clearRect(0, 0, 400, 400),
    t.forEach(a=>{
        e.fillStyle = a.color,
        e.lineWidth = 1,
        e.strokeStyle = "#333",
        e.beginPath();
        let s = a.amount / r * Math.PI * 2 + n;
        e.moveTo(l, i),
        e.arc(l, i, o, n, s, !1),
        e.lineTo(l, i),
        e.fill(),
        e.stroke(),
        e.closePath(),
        e.beginPath(),
        e.font = "17px sans-serif",
        e.textAlign = "center",
        e.fillStyle = a.color;
        let c = (n + s) / 2
          , f = Math.sin(c) * 1.25 * o
          , u = Math.cos(c) * 1.25 * o;
        e.fillText(a.type, u + l, f + i),
        e.closePath(),
        n = s
    }
    )
}
const z8 = ()=>{
    const {getTotalAmount: e} = p.useContext(Ct)
      , t = e("Expenses")
      , r = e("Budget")
      , n = p.useRef(null)
      , o = [{
        type: "Budget",
        amount: r,
        color: "#4BDB6B"
    }, {
        type: "Expenses",
        amount: t,
        color: "#FF6C6C"
    }];
    return p.useEffect(()=>{
        const l = n.current;
        if (!l)
            return;
        const i = l.getContext("2d");
        i && N8({
            context: i,
            data: o
        })
    }
    , [r, t]),
    C("canvas", {
        style: {
            margin: "auto"
        },
        ref: n,
        width: 500,
        height: 400
    })
}
  , I8 = ()=>{
    const {getTotalAmount: e} = p.useContext(Ct)
      , t = e("Budget")
      , r = e("Expenses");
    return V(Xs, {
        children: [V(q, {
            size: 35,
            weight: 700,
            mb: 20,
            sx: n=>({
                color: n.colorScheme === "dark" ? n.colors.dark[1] : n.colors.gray[9]
            }),
            children: ["YOUR BALANCE IS: $", t - r]
        }), V(jd, {
            cols: 2,
            style: {
                justifyContent: "center"
            },
            children: [C(lf, {
                label: "Income / Budget",
                amount: t,
                color: "green.4"
            }), C(lf, {
                label: "Expenses",
                amount: r,
                color: "red.4"
            }), C(R8, {}), (t > 0 || r > 0) && C(z8, {})]
        })]
    })
}
  , T8 = ()=>{
    const {addCategory: e} = p.useContext(Ct)
      , {addHistoryElement: t} = p.useContext(vn)
      , [r,n] = p.useState("")
      , [o,l] = p.useState(0)
      , i = zl();
    return V("div", {
        children: [C(oo, {
            onChange: a=>n(a.currentTarget.value),
            mt: 20,
            size: "md",
            w: "40%",
            placeholder: "Ex: Christmas bonus",
            label: "Label",
            withAsterisk: !0
        }), C(oo, {
            onChange: a=>l(Number.parseFloat(a.currentTarget.value)),
            mt: 20,
            size: "md",
            w: "40%",
            placeholder: "Ex: 3000",
            label: "Amount",
            withAsterisk: !0
        }), C(Kt, {
            mt: 20,
            onClick: ()=>{
                r === "" || o <= 0 || Number.isNaN(o) ? alert("Invalid Entries. Make sure the label is not empty and the amount is greater than zero.") : (e({
                    label: "Budget",
                    id: crypto.randomUUID(),
                    amount: o
                }),
                i("/"),
                t({
                    label: r,
                    amount: o,
                    id: crypto.randomUUID(),
                    type: "Budget",
                    dateCreated: "",
                    category: "Budget"
                }))
            }
            ,
            children: "Add To Budget"
        })]
    })
}
  , D8 = ()=>{
    const {addHistoryElement: e} = p.useContext(vn)
      , {addCategory: t, getTotalAmount: r} = p.useContext(Ct)
      , [n,o] = p.useState(0)
      , l = zl();
    return V("div", {
        children: [C(oo, {
            onChange: i=>o(Number.parseFloat(i.currentTarget.value)),
            mt: 20,
            size: "md",
            w: "40%",
            placeholder: "Ex: 5000",
            label: "Enter your budget",
            withAsterisk: !0
        }), C(Kt, {
            mt: 20,
            onClick: ()=>{
                if (n <= 0 || Number.isNaN(n))
                    alert("Invalid Entry. Make sure the amount is greater than zero.");
                else {
                    const i = r("Budget");
                    t({
                        label: "Budget",
                        id: crypto.randomUUID(),
                        amount: -1 * i
                    }),
                    t({
                        label: "Budget",
                        id: crypto.randomUUID(),
                        amount: n
                    }),
                    l("/"),
                    e({
                        label: "Budget has been set to $" + n,
                        id: crypto.randomUUID(),
                        amount: n,
                        type: "Budget",
                        dateCreated: "",
                        category: "Budget"
                    })
                }
            }
            ,
            children: "Set Budget"
        })]
    })
}
  , kS = ({type: e, prevAmount: t})=>{
    const [r,n] = p.useState(!1)
      , {addHistoryElement: o} = p.useContext(vn)
      , {resetAmount: l} = p.useContext(Ct)
      , {setAvailableCategories: i} = p.useContext(Qs)
      , a = zl();
    return V(yh, {
        children: [V(Dd, {
            opened: r,
            onClose: ()=>n(!1),
            centered: !0,
            title: `Are you sure you want to reset your ${e.toLowerCase()} to 0?`,
            children: [V(q, {
                mt: -17,
                mb: 20,
                size: "xs",
                sx: s=>({
                    color: s.colorScheme === "dark" ? s.colors.dark[1] : s.colors.gray[9],
                    lineHeight: 1.3
                }),
                children: ["This action can be later undone by deleting the transaction.", " ", e === "Expenses" && "However the expense categories will return and the amount will be put under Uncategorized"]
            }), V("div", {
                style: {
                    display: "flex",
                    gap: "20px",
                    alignItems: "center"
                },
                children: [V(Kt, {
                    color: "red",
                    onClick: ()=>{
                        l(e),
                        n(!1),
                        o({
                            label: `${e} has been reset to 0`,
                            amount: t,
                            id: crypto.randomUUID(),
                            type: `${e} Reset`,
                            dateCreated: "",
                            category: `${e} Reset`
                        }),
                        e === "Expenses" && i(s=>{
                            const c = JSON.parse(JSON.stringify(s));
                            return c.forEach(f=>{
                                f.isused = "false"
                            }
                            ),
                            c
                        }
                        ),
                        a("/")
                    }
                    ,
                    children: ["Reset ", e]
                }), C(Kt, {
                    onClick: ()=>n(!1),
                    children: "Cancel"
                })]
            })]
        }), V(B_, {
            mt: 20,
            direction: "column",
            justify: "flex-start",
            align: "flex-start",
            children: [V(q, {
                size: "xl",
                weight: 700,
                sx: s=>({
                    color: s.colorScheme === "dark" ? s.colors.dark[0] : s.colors.gray[9]
                }),
                children: ["Reset Your ", e]
            }), V(q, {
                size: "xs",
                sx: s=>({
                    color: s.colorScheme === "dark" ? s.colors.dark[1] : s.colors.gray[9]
                }),
                children: ["Resets your ", e.toLowerCase(), " back to 0"]
            }), V(Kt, {
                mt: 20,
                color: "red",
                onClick: ()=>n(!0),
                children: ["Reset ", e]
            })]
        })]
    })
}
  , j8 = ()=>{
    const {getTotalAmount: e} = p.useContext(Ct)
      , t = e("Budget");
    return V(Xs, {
        children: [C(q, {
            size: "xl",
            weight: 700,
            sx: r=>({
                color: r.colorScheme === "dark" ? r.colors.dark[0] : r.colors.gray[9]
            }),
            children: "Set Your Income / Budget"
        }), C(q, {
            size: "xs",
            sx: r=>({
                color: r.colorScheme === "dark" ? r.colors.dark[1] : r.colors.gray[9]
            }),
            children: "Sets your income / budget to the entered value."
        }), C(D8, {}), C(Ir, {
            mt: 30,
            mb: 20
        }), C(q, {
            size: "xl",
            weight: 700,
            sx: r=>({
                color: r.colorScheme === "dark" ? r.colors.dark[0] : r.colors.gray[9]
            }),
            children: "Add an Income Source"
        }), C(q, {
            size: "xs",
            sx: r=>({
                color: r.colorScheme === "dark" ? r.colors.dark[1] : r.colors.gray[9]
            }),
            children: "Adds on to your current income / budget amount."
        }), C(T8, {}), C(Ir, {
            mt: 30,
            mb: 20
        }), C(kS, {
            prevAmount: t,
            type: "Budget"
        })]
    })
}
  , L8 = ()=>C(LN, {
    label: "Select a category and click 'Delete Category' to delete the selected category. This will only delete the category from the dropdown menu. You cannot delete a category that is being used.",
    color: "gray.8",
    withArrow: !0,
    multiline: !0,
    width: 400,
    children: C(md, {
        variant: "transparent",
        children: C(y8, {})
    })
})
  , A8 = ()=>{
    const {addHistoryElement: e} = p.useContext(vn)
      , {availableCategories: t, setAvailableCategories: r} = p.useContext(Qs)
      , {addCategory: n} = p.useContext(Ct)
      , [o,l] = p.useState("")
      , [i,a] = p.useState(0)
      , [s,c] = p.useState([""])
      , f = zl();
    return V("div", {
        children: [C(oo, {
            onChange: u=>l(u.currentTarget.value),
            mt: 20,
            size: "md",
            w: "40%",
            placeholder: "Ex: Car payments",
            label: "Label",
            withAsterisk: !0
        }), C(oo, {
            onChange: u=>a(Number.parseFloat(u.currentTarget.value)),
            mt: 20,
            size: "md",
            w: "40%",
            placeholder: "Ex: 3000",
            label: "Amount",
            withAsterisk: !0
        }), C(Ir, {
            mt: 30,
            mb: 20
        }), C(q, {
            size: "xl",
            weight: 700,
            sx: u=>({
                color: u.colorScheme === "dark" ? u.colors.dark[0] : u.colors.gray[9]
            }),
            children: "Add a Category to Your Expense"
        }), C(rS, {
            w: "40%",
            mt: 10,
            data: t,
            label: "Select a Category",
            placeholder: "Select a category or create a new one",
            searchable: !0,
            creatable: !0,
            value: s,
            onChange: c,
            maxSelectedValues: 1,
            getCreateLabel: u=>`+ Create ${u[0].toUpperCase() + u.substring(1)}`,
            onCreate: u=>{
                const d = u[0].toUpperCase() + u.substring(1)
                  , m = {
                    value: d,
                    label: d,
                    isused: "false"
                };
                return console.log("hello"),
                r(g=>[m, ...g]),
                m
            }
        }), V("div", {
            style: {
                display: "flex",
                alignItems: "center",
                marginTop: 20
            },
            children: [C(Kt, {
                mr: 30,
                onClick: ()=>{
                    o === "" || i <= 0 || Number.isNaN(i) ? alert("Invalid Entries. Make sure the label is not empty and the amount is greater than zero.") : ((s[0] === void 0 || s[0] === null || s[0] === "") && (s[0] = "Uncategorized"),
                    n({
                        label: s[0],
                        amount: i,
                        id: crypto.randomUUID()
                    }),
                    r(u=>u.map(d=>(d.label === s[0] && (d.isused = "true"),
                    d))),
                    f("/"),
                    e({
                        label: o,
                        amount: i,
                        id: crypto.randomUUID(),
                        type: "Expense",
                        dateCreated: "",
                        category: s[0]
                    }))
                }
                ,
                children: "Add Expense"
            }), C(Kt, {
                color: "red",
                onClick: ()=>{
                    if (s[0] === "")
                        alert("No category has been selected!");
                    else {
                        if (s[0] === "Uncategorized") {
                            alert("Uncategorized cannot be removed!");
                            return
                        }
                        let u = !1;
                        r(d=>{
                            const m = JSON.parse(JSON.stringify(d));
                            return m.forEach((g,y)=>{
                                g.label === s[0] && g.isused === "false" && (m.splice(y, 1),
                                u = !0)
                            }
                            ),
                            m
                        }
                        ),
                        u || alert("Category cannot be removed since it is being used.")
                    }
                }
                ,
                children: "Remove Category"
            }), C(L8, {})]
        })]
    })
}
  , M8 = ()=>{
    const {getTotalAmount: e} = p.useContext(Ct)
      , t = e("Expenses");
    return V(Xs, {
        children: [C(q, {
            size: "xl",
            weight: 700,
            sx: r=>({
                color: r.colorScheme === "dark" ? r.colors.dark[0] : r.colors.gray[9]
            }),
            children: "Add an Expense"
        }), C(q, {
            size: "xs",
            sx: r=>({
                color: r.colorScheme === "dark" ? r.colors.dark[1] : r.colors.gray[9]
            }),
            children: "Adds on to your current expense amount."
        }), C(A8, {}), C(Ir, {
            mt: 30,
            mb: 20
        }), C(kS, {
            prevAmount: t,
            type: "Expenses"
        })]
    })
}
  , F8 = ()=>{
    const {categories: e} = p.useContext(Ct);
    return C(jd, {
        cols: 4,
        style: {
            justifyContent: "center"
        },
        children: e.map(t=>C(lf, {
            label: t.label,
            amount: t.amount,
            color: "gray.6"
        }, t.id))
    })
}
  , V8 = ()=>V(Xs, {
    children: [C(q, {
        size: 35,
        weight: 700,
        mb: 20,
        sx: e=>({
            color: e.colorScheme === "dark" ? e.colors.dark[1] : e.colors.gray[8]
        }),
        children: "Spending Categories"
    }), C(F8, {})]
})
  , B8 = ()=>{
    const e = qe()
      , [t,r] = p.useState(!1)
      , [n,o] = Ds({
        key: "theme",
        defaultValue: "dark"
    });
    return C(B0, {
        colorScheme: n,
        toggleColorScheme: i=>o(i || (n === "dark" ? "light" : "dark")),
        children: C(dd, {
            theme: {
                colorScheme: n
            },
            withGlobalStyles: !0,
            withNormalizeCSS: !0,
            children: C(f8, {
                children: C(F1, {
                    styles: i=>({
                        main: {
                            backgroundColor: i.colorScheme === "dark" ? i.colors.dark[8] : i.colors.gray[0]
                        }
                    }),
                    navbarOffsetBreakpoint: "sm",
                    asideOffsetBreakpoint: "sm",
                    navbar: V(vd, {
                        p: "md",
                        hiddenBreakpoint: "sm",
                        hidden: !t,
                        width: {
                            sm: 250,
                            lg: 350
                        },
                        children: [C(mi, {
                            label: "Home",
                            icon: C(h8, {}),
                            link: "/"
                        }), C(mi, {
                            label: "Add an Expense",
                            icon: C(x8, {}),
                            link: "/newExpense"
                        }), C(mi, {
                            label: "Add / Update Your Budget",
                            icon: C(w8, {}),
                            link: "/newBudget"
                        }), C(mi, {
                            label: "View Spending in Categories",
                            icon: C(_8, {}),
                            link: "/categories"
                        })]
                    }),
                    header: C(L1, {
                        height: {
                            base: 50,
                            md: 70
                        },
                        p: "md",
                        sx: i=>({
                            color: i.colorScheme === "dark" ? i.colors.dark[1] : i.colors.gray[9],
                            fontSize: "25px"
                        }),
                        children: V("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                height: "100%"
                            },
                            children: [C(H_, {
                                largerThan: "sm",
                                styles: {
                                    display: "none"
                                },
                                children: C(p_, {
                                    opened: t,
                                    onClick: ()=>r(i=>!i),
                                    size: "sm",
                                    color: e.colors.gray[6],
                                    mr: "xl"
                                })
                            }), V("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%"
                                },
                                children: [C(v8, {}), C(q, {
                                    ml: 10,
                                    children: "Expense Tracker App"
                                })]
                            }), C(b8, {})]
                        })
                    }),
                    children: V(i8, {
                        children: [C(Do, {
                            path: "/",
                            element: C(I8, {})
                        }), C(Do, {
                            path: "/newExpense",
                            element: C(M8, {})
                        }), C(Do, {
                            path: "/newBudget",
                            element: C(j8, {})
                        }), C(Do, {
                            path: "/categories",
                            element: C(V8, {})
                        })]
                    })
                })
            })
        })
    })
}
;
function H8() {
    return C(dd, {
        theme: {
            fontFamily: "open-sans",
            colorScheme: "dark",
            fontSizes: {
                md: 90
            }
        },
        children: C(Id, {
            children: C($8, {
                children: C(O8, {
                    children: C(E8, {
                        children: C(B8, {})
                    })
                })
            })
        })
    })
}
Uc.createRoot(document.getElementById("root")).render(C(_.StrictMode, {
    children: C(H8, {})
}));
