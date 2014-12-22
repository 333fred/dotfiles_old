(function() {var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var f = f || {};
f.global = this;
f.ga = function(a) {
  return void 0 !== a;
};
f.je = function(a, c, d) {
  a = a.split(".");
  d = d || f.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && f.ga(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
f.Tr = function(a, c) {
  f.je(a, c);
};
f.Ga = !0;
f.ep = "en";
f.ge = !0;
f.gc = !1;
f.zt = function(a) {
  f.Cg(a);
};
f.Cg = function(a, c) {
  f.je(a, c);
};
f.module = function(a) {
  if (!f.isString(a) || !a) {
    throw Error("Invalid module identifier");
  }
  if (!f.$g()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (f.aa.Kd) {
    throw Error("goog.module may only be called once per module.");
  }
  f.aa.Kd = a;
};
f.module.get = function(a) {
  return f.module.sn(a);
};
f.module.sn = function() {
};
f.aa = null;
f.$g = function() {
  return null != f.aa;
};
f.module.Jd = function() {
  if (!f.$g()) {
    throw Error("goog.module.declareTestMethods must be called from within a goog.module");
  }
  f.aa.Jd = !0;
};
f.module.Ag = function() {
  f.aa.Ag = !0;
};
f.Lt = function(a) {
  if (!f.Ga) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
f.fs = function() {
};
f.gm = function(a, c) {
  for (var d = a.split("."), e = c || f.global, g;g = d.shift();) {
    if (f.U(e[g])) {
      e = e[g];
    } else {
      return null;
    }
  }
  return e;
};
f.ws = function(a, c) {
  var d = c || f.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
f.ar = function(a, c, d, e) {
  if (f.Zg) {
    var g;
    a = a.replace(/\\/g, "/");
    for (var h = f.$, l = 0;g = c[l];l++) {
      h.Jb[g] = a, h.xd[a] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      a in h.requires || (h.requires[a] = {}), h.requires[a][c] = !0;
    }
  }
};
f.lu = !1;
f.Co = !0;
f.kt = function(a) {
  f.global.console && f.global.console.error(a);
};
f.require = function() {
};
f.$a = "";
f.Uf = function() {
};
f.Cs = function(a) {
  return a;
};
f.Yq = function() {
  throw Error("unimplemented abstract method");
};
f.hn = function(a) {
  a.Wc = function() {
    if (a.Tb) {
      return a.Tb;
    }
    f.Ga && (f.ih[f.ih.length] = a);
    return a.Tb = new a;
  };
};
f.ih = [];
f.Ol = !0;
f.Uk = f.Ga;
f.Wk = {};
f.Zg = !1;
f.Zg && (f.vk = {}, f.$ = {xd:{}, Jb:{}, requires:{}, Xf:{}, Ib:{}, Mb:{}}, f.jh = function() {
  var a = f.global.document;
  return "undefined" != typeof a && "write" in a;
}, f.mn = function() {
  if (f.global.Rl) {
    f.$a = f.global.Rl;
  } else {
    if (f.jh()) {
      for (var a = f.global.document.getElementsByTagName("script"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          f.$a = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, f.Dd = function(a, c) {
  (f.global.Ik || f.mg)(a, c) && (f.$.Ib[a] = !0);
}, f.ng = f.global.document && f.global.document.all && !f.global.atob, f.uk = function(a) {
  f.Dd("", 'goog.retrieveAndExecModule_("' + a + '");') && (f.$.Ib[a] = !0);
}, f.Nc = [], f.Et = function(a) {
  for (var c = a, d;-1 != (d = a.indexOf("/./"));) {
    a = a.substr(0, d) + a.substr(d + 2);
  }
  for (;-1 != (d = a.indexOf("/../"));) {
    var e = a.lastIndexOf("/", d - 1);
    a = a.substr(0, e) + a.substr(d + 3);
  }
  d = f.global.Ik || f.mg;
  var g = null, e = new f.global.XMLHttpRequest;
  e.onload = function() {
    g = this.responseText;
  };
  e.open("get", a, !1);
  e.send();
  g = e.responseText;
  if (null != g) {
    e = f.Xk(a, g), f.ng ? (f.$.Mb[c] = e, f.Nc.push(c)) : d(a, e);
  } else {
    throw Error("load of " + a + "failed");
  }
}, f.Xk = function(a, c) {
  return f.Ol && f.ga(f.global.JSON) ? "goog.loadModule(" + f.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, f.dm = function() {
  var a = f.Nc.length;
  if (0 < a) {
    var c = f.Nc;
    f.Nc = [];
    for (var d = 0;d < a;d++) {
      f.ah(c[d]);
    }
  }
}, f.nt = function(a) {
  f.yg(a) && f.Fl(a) && f.ah(f.$a + f.Id(a));
}, f.yg = function(a) {
  return(a = f.Id(a)) && f.$.xd[a] ? f.$a + a in f.$.Mb : !1;
}, f.Fl = function(a) {
  if ((a = f.Id(a)) && a in f.$.requires) {
    for (var c in f.$.requires[a]) {
      if (!f.rk(c) && !f.yg(c)) {
        return!1;
      }
    }
  }
  return!0;
}, f.ah = function(a) {
  if (a in f.$.Mb) {
    var c = f.$.Mb[a];
    delete f.$.Mb[a];
    f.Cl(c);
  }
}, f.ht = function(a) {
  var c = f.aa;
  try {
    f.aa = {Kd:void 0, Jd:!1};
    var d;
    if (f.isFunction(a)) {
      d = a.call(f.global, {});
    } else {
      if (f.isString(a)) {
        d = f.Vk.call(f.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = f.aa.Kd;
    if (!f.isString(e) || !e) {
      throw Error('Invalid module name "' + e + '"');
    }
    f.aa.Ag ? f.Cg(e, d) : f.Uk && Object.seal && Object.seal(d);
    f.Wk[e] = d;
    if (f.aa.Jd) {
      for (var g in d) {
        if (0 === g.indexOf("test", 0) || "tearDown" == g || "setUp" == g || "setUpPage" == g || "tearDownPage" == g) {
          f.global[g] = d[g];
        }
      }
    }
  } finally {
    f.aa = c;
  }
}, f.Vk = function(a) {
  eval(a);
  return{};
}, f.mg = function(a, c) {
  if (f.jh()) {
    var d = f.global.document;
    if ("complete" == d.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return!1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var e = f.ng;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++f.rh + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : d.write('<script type="text/javascript" src="' + a + '">\x3c/script>') : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return!0;
  }
  return!1;
}, f.rh = 0, f.vt = function(a, c) {
  "complete" == a.readyState && f.rh == c && f.dm();
  return!0;
}, f.qu = function() {
  function a(g) {
    if (!(g in e.Ib)) {
      if (!(g in e.Xf) && (e.Xf[g] = !0, g in e.requires)) {
        for (var h in e.requires[g]) {
          if (!f.rk(h)) {
            if (h in e.Jb) {
              a(e.Jb[h]);
            } else {
              throw Error("Undefined nameToPath for " + h);
            }
          }
        }
      }
      g in d || (d[g] = !0, c.push(g));
    }
  }
  var c = [], d = {}, e = f.$, g;
  for (g in f.vk) {
    e.Ib[g] || a(g);
  }
  for (var h = 0;h < c.length;h++) {
    g = c[h], f.$.Ib[g] = !0;
  }
  var l = f.aa;
  f.aa = null;
  for (h = 0;h < c.length;h++) {
    if (g = c[h]) {
      e.xd[g] ? f.uk(f.$a + g) : f.Dd(f.$a + g);
    } else {
      throw f.aa = l, Error("Undefined script input");
    }
  }
  f.aa = l;
}, f.Id = function(a) {
  return a in f.$.Jb ? f.$.Jb[a] : null;
}, f.mn(), f.global.no || f.Dd(f.$a + "deps.js"));
f.ea = function(a) {
  var c = typeof a;
  if ("object" == c) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(a);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return c;
};
f.yb = function(a) {
  return null === a;
};
f.U = function(a) {
  return null != a;
};
f.isArray = function(a) {
  return "array" == f.ea(a);
};
f.K = function(a) {
  var c = f.ea(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
f.Ks = function(a) {
  return f.isObject(a) && "function" == typeof a.getFullYear;
};
f.isString = function(a) {
  return "string" == typeof a;
};
f.La = function(a) {
  return "boolean" == typeof a;
};
f.isNumber = function(a) {
  return "number" == typeof a;
};
f.isFunction = function(a) {
  return "function" == f.ea(a);
};
f.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
f.ke = function(a) {
  return a[f.bb] || (a[f.bb] = ++f.Zl);
};
f.zs = function(a) {
  return!!a[f.bb];
};
f.In = function(a) {
  "removeAttribute" in a && a.removeAttribute(f.bb);
  try {
    delete a[f.bb];
  } catch (c) {
  }
};
f.bb = "closure_uid_" + (1E9 * Math.random() >>> 0);
f.Zl = 0;
f.ms = f.ke;
f.Ct = f.In;
f.Ml = function(a) {
  var c = f.ea(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = f.Ml(a[d]);
    }
    return c;
  }
  return a;
};
f.fm = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
f.em = function(a, c, d) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d);
    };
  }
  return function() {
    return a.apply(c, arguments);
  };
};
f.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? f.bind = f.fm : f.bind = f.em;
  return f.bind.apply(null, arguments);
};
f.xb = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
f.Rh = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
f.now = f.ge && Date.now || function() {
  return+new Date;
};
f.Cl = function(a) {
  if (f.global.execScript) {
    f.global.execScript(a, "JavaScript");
  } else {
    if (f.global.eval) {
      if (null == f.Sc && (f.global.eval("var _et_ = 1;"), "undefined" != typeof f.global._et_ ? (delete f.global._et_, f.Sc = !0) : f.Sc = !1), f.Sc) {
        f.global.eval(a);
      } else {
        var c = f.global.document, d = c.createElement("script");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(c.createTextNode(a));
        c.body.appendChild(d);
        c.body.removeChild(d);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
f.Sc = null;
f.ks = function(a, c) {
  var d = function(a) {
    return f.Ch[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = f.Ch ? "BY_WHOLE" == f.bm ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
f.Ht = function(a, c) {
  f.Ch = a;
  f.bm = c;
};
f.ps = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return e in c ? c[e] : a;
  }));
  return a;
};
f.qs = function(a) {
  return a;
};
f.i = function(a, c, d) {
  f.je(a, c, d);
};
f.t = function(a, c, d) {
  a[c] = d;
};
f.Da = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.Qc = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.$l = function(a, d, h) {
    var l = Array.prototype.slice.call(arguments, 2);
    return c.prototype[d].apply(a, l);
  };
};
f.$l = function(a, c, d) {
  var e = arguments.callee.caller;
  if (f.gc || f.Ga && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.Qc) {
    return e.Qc.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var g = Array.prototype.slice.call(arguments, 2), h = !1, l = a.constructor;l;l = l.Qc && l.Qc.constructor) {
    if (l.prototype[c] === e) {
      h = !0;
    } else {
      if (h) {
        return l.prototype[c].apply(a, g);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, g);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
f.scope = function(a) {
  a.call(f.global);
};
f.Am = !0;
f.Am && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
  if (1 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 1);
    d.unshift(this, a);
    return f.bind.apply(null, d);
  }
  return f.bind(this, a);
}, Function.prototype.xb = function(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift(this, null);
  return f.bind.apply(null, c);
}, Function.prototype.Da = function(a) {
  f.Da(this, a);
}, Function.prototype.Rh = function(a) {
  f.Rh(this.prototype, a);
});
f.Ba = function(a, c) {
  var d = c.constructor, e = c.rl;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = f.Ba.pl(d, a);
  a && f.Da(d, a);
  delete c.constructor;
  delete c.rl;
  f.Ba.Yg(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : f.Ba.Yg(d, e));
  return d;
};
f.Ba.Al = f.Ga;
f.Ba.pl = function(a, c) {
  if (f.Ba.Al && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[f.Bl]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      c[f.bb] = c[f.bb];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
f.Ba.qh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
f.Ba.Yg = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < f.Ba.qh.length;e++) {
    d = f.Ba.qh[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
f.Zt = function() {
};
f.Bl = "goog_defineClass_legacy_unsealable";
chrome.cast.zh = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
f.i("chrome.cast.AutoJoinPolicy", chrome.cast.zh);
chrome.cast.Ah = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
f.i("chrome.cast.DefaultActionPolicy", chrome.cast.Ah);
chrome.cast.ee = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
f.i("chrome.cast.Capability", chrome.cast.ee);
chrome.cast.wa = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
f.i("chrome.cast.ErrorCode", chrome.cast.wa);
chrome.cast.Lm = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
f.i("chrome.cast.ReceiverAvailability", chrome.cast.Lm);
chrome.cast.Sm = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
f.i("chrome.cast.SenderPlatform", chrome.cast.Sm);
chrome.cast.Ab = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
f.i("chrome.cast.ReceiverType", chrome.cast.Ab);
chrome.cast.om = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
f.i("chrome.cast.DialAppState", chrome.cast.om);
chrome.cast.Km = {CAST:"cast", STOP:"stop"};
f.i("chrome.cast.ReceiverAction", chrome.cast.Km);
chrome.cast.Sb = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
f.i("chrome.cast.SessionStatus", chrome.cast.Sb);
chrome.cast.VERSION = [1, 2];
f.i("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
f.i("chrome.cast.Error", chrome.cast.Error);
chrome.cast.Rm = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
f.i("chrome.cast.SenderApplication", chrome.cast.Rm);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
f.i("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Hc = function(a, c) {
  this.level = f.ga(a) ? a : null;
  this.muted = f.ga(c) ? c : null;
};
f.i("chrome.cast.Volume", chrome.cast.Hc);
var k = {H:{Yo:"LAUNCH", fh:"STOP", eh:"SET_VOLUME", dh:"GET_STATUS", zl:"RECEIVER_STATUS", Uq:"CONNECT", Vq:"CLOSE", Ko:"GET_APP_AVAILABILITY", Bg:"LOAD", Bk:"PAUSE", Fk:"SEEK", Ck:"PLAY", ag:"STOP_MEDIA", Wf:"MEDIA_GET_STATUS", Zf:"MEDIA_SET_VOLUME", yk:"EDIT_TRACKS_INFO", Po:"INVALID_PLAYER_STATE", dp:"LOAD_FAILED", cp:"LOAD_CANCELLED", Qo:"INVALID_REQUEST", Cd:"MEDIA_STATUS", $o:"LAUNCH_ERROR", oq:"PING", rq:"PONG"}, fe:{}};
k.fe[k.H.ag] = k.H.fh;
k.fe[k.H.Zf] = k.H.eh;
k.fe[k.H.Wf] = k.H.dh;
k.cl = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
k.al = function(a) {
  this.type = k.H.fh;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.media.xh = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
f.i("chrome.cast.media.MediaCommand", chrome.cast.media.xh);
chrome.cast.media.ra = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
f.i("chrome.cast.media.MetadataType", chrome.cast.media.ra);
chrome.cast.media.Nb = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
f.i("chrome.cast.media.PlayerState", chrome.cast.media.Nb);
chrome.cast.media.Om = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
f.i("chrome.cast.media.ResumeState", chrome.cast.media.Om);
chrome.cast.media.Wd = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
f.i("chrome.cast.media.StreamType", chrome.cast.media.Wd);
chrome.cast.media.xm = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
f.i("chrome.cast.media.IdleReason", chrome.cast.media.xm);
chrome.cast.media.bn = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
f.i("chrome.cast.media.TrackType", chrome.cast.media.bn);
chrome.cast.media.Zm = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
f.i("chrome.cast.media.TextTrackType", chrome.cast.media.Zm);
chrome.cast.media.Vm = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
f.i("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.Vm);
chrome.cast.media.$m = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
f.i("chrome.cast.media.TextTrackWindowType", chrome.cast.media.$m);
chrome.cast.media.Wm = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
f.i("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.Wm);
chrome.cast.media.Xm = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
f.i("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.Xm);
chrome.cast.media.Vf = function() {
  this.customData = null;
};
f.i("chrome.cast.media.GetStatusRequest", chrome.cast.media.Vf);
chrome.cast.media.cg = function() {
  this.customData = null;
};
f.i("chrome.cast.media.PauseRequest", chrome.cast.media.cg);
chrome.cast.media.dg = function() {
  this.customData = null;
};
f.i("chrome.cast.media.PlayRequest", chrome.cast.media.dg);
chrome.cast.media.Qm = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
f.i("chrome.cast.media.SeekRequest", chrome.cast.media.Qm);
chrome.cast.media.bg = function() {
  this.customData = null;
};
f.i("chrome.cast.media.StopRequest", chrome.cast.media.bg);
chrome.cast.media.en = function(a) {
  this.volume = a;
  this.customData = null;
};
f.i("chrome.cast.media.VolumeRequest", chrome.cast.media.en);
chrome.cast.media.zm = function(a) {
  this.type = k.H.Bg;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
f.i("chrome.cast.media.LoadRequest", chrome.cast.media.zm);
chrome.cast.media.sm = function(a, c) {
  this.requestId = null;
  this.activeTrackIds = a || null;
  this.textTrackStyle = c || null;
};
f.i("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.sm);
chrome.cast.media.vm = function() {
  this.metadataType = this.type = chrome.cast.media.ra.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
f.i("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.vm);
chrome.cast.media.Gm = function() {
  this.metadataType = this.type = chrome.cast.media.ra.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
f.i("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.Gm);
chrome.cast.media.cn = function() {
  this.metadataType = this.type = chrome.cast.media.ra.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
f.i("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.cn);
chrome.cast.media.Hm = function() {
  this.metadataType = this.type = chrome.cast.media.ra.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
f.i("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.Hm);
chrome.cast.media.Jm = function() {
  this.metadataType = this.type = chrome.cast.media.ra.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
f.i("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.Jm);
chrome.cast.media.Em = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.Wd.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
f.i("chrome.cast.media.MediaInfo", chrome.cast.media.Em);
chrome.cast.media.q = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Nb.IDLE;
  this.currentTime = 0;
  this.Ad = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Hc;
  this.customData = this.activeTrackIds = this.idleReason = null;
  this.sc = this.sd = !1;
  this.Rb = [];
};
f.i("chrome.cast.media.Media", chrome.cast.media.q);
chrome.cast.media.lm = "CC1AD845";
f.i("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.lm);
chrome.cast.media.timeout = {};
f.i("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
f.t(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.Dc = 0;
f.t(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.Dc);
chrome.cast.media.timeout.play = 0;
f.t(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
f.t(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
f.t(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
f.t(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.Gc = 0;
f.t(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.Gc);
chrome.cast.media.timeout.Ic = 0;
f.t(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.Ic);
chrome.cast.media.an = function(a, c) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
f.i("chrome.cast.media.Track", chrome.cast.media.an);
chrome.cast.media.Ym = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
f.i("chrome.cast.media.TextTrackStyle", chrome.cast.media.Ym);
chrome.cast.im = function(a, c, d, e, g) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.zh.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = g || chrome.cast.Ah.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
f.i("chrome.cast.ApiConfig", chrome.cast.im);
chrome.cast.rm = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
f.i("chrome.cast.DialRequest", chrome.cast.rm);
chrome.cast.pm = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
f.i("chrome.cast.DialLaunchData", chrome.cast.pm);
chrome.cast.qm = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
f.i("chrome.cast.DialLaunchResponse", chrome.cast.qm);
chrome.cast.Tm = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.ee.VIDEO_OUT, chrome.cast.ee.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.requestSession;
  this.language = null;
};
f.i("chrome.cast.SessionRequest", chrome.cast.Tm);
chrome.cast.Ra = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.Ab.CAST;
  this.displayStatus = this.isActiveInput = null;
};
f.i("chrome.cast.Receiver", chrome.cast.Ra);
chrome.cast.Mm = function(a, c) {
  this.statusText = a;
  this.appImages = c;
  this.showStop = null;
};
f.i("chrome.cast.ReceiverDisplayStatus", chrome.cast.Mm);
chrome.cast.o = function(a, c, d, e, g) {
  this.sessionId = a;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = g;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.Sb.CONNECTED;
  this.transportId = "";
};
f.i("chrome.cast.Session", chrome.cast.o);
chrome.cast.o.eg = "custom_receiver_session_id";
f.t(chrome.cast.o, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.o.eg);
chrome.cast.timeout = {};
f.i("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.requestSession = 1E4;
chrome.cast.timeout.leaveSession = 3E3;
chrome.cast.timeout.stopSession = 3E3;
chrome.cast.timeout.setReceiverVolume = 3E3;
chrome.cast.timeout.sendCustomMessage = 3E3;
k.sk = function(a) {
  this.sessionRequest = a.sessionRequest;
  this.autoJoinPolicy = a.autoJoinPolicy;
  this.defaultActionPolicy = a.defaultActionPolicy;
  this.useCustomDialLaunch = !!a.customDialLaunchCallback;
};
k.bo = function() {
  this.displayName = this.appId = this.sessionId = this.transportId = "";
  this.statusText = null;
  this.appImages = [];
  this.senderApps = [];
  this.namespaces = [];
};
k.zq = function() {
  this.type = k.H.dh;
  this.requestId = null;
};
k.Aq = function() {
  this.type = k.H.zl;
  this.status = this.requestId = null;
};
k.yq = function() {
  this.channelUrl = this.volume = this.applications = null;
  this.isActiveInput = void 0;
};
k.Ro = function() {
};
f.debug = {};
f.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, f.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
f.Da(f.debug.Error, Error);
f.debug.Error.prototype.name = "CustomError";
f.Of = {};
f.Of.fk = {ek:1, Wn:2, TEXT:3, ho:4, Fo:5, Eo:6, sq:7, po:8, yo:9, Ao:10, zo:11, jq:12};
f.b = {};
f.b.bd = !1;
f.b.Qi = {Pi:"\u00a0"};
f.b.zi = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
f.b.Wr = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
f.b.zr = function(a, c) {
  return 0 == f.b.ef(c, a.substr(0, c.length));
};
f.b.xr = function(a, c) {
  return 0 == f.b.ef(c, a.substr(a.length - c.length, c.length));
};
f.b.yr = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
f.b.Vi = function(a, c) {
  for (var d = a.split("%s"), e = "", g = Array.prototype.slice.call(arguments, 1);g.length && 1 < d.length;) {
    e += d.shift() + g.shift();
  }
  return e + d.join("%s");
};
f.b.Gr = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
f.b.cf = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
f.b.Os = function(a) {
  return 0 == a.length;
};
f.b.ba = f.b.cf;
f.b.un = function(a) {
  return f.b.cf(f.b.Ni(a));
};
f.b.Ns = f.b.un;
f.b.Hs = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
f.b.Es = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
f.b.Xs = function(a) {
  return!/[^0-9]/.test(a);
};
f.b.Fs = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
f.b.bt = function(a) {
  return " " == a;
};
f.b.dt = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
f.b.Xt = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
f.b.vr = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
f.b.st = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
f.b.rt = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
f.b.Fr = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
f.b.trim = f.ge && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
f.b.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
f.b.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
f.b.ef = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
f.b.gf = /(\.\d+)|(\d+)|(\D+)/g;
f.b.ut = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(f.b.gf), e = c.toLowerCase().match(f.b.gf), g = Math.min(d.length, e.length), h = 0;h < g;h++) {
    var l = d[h], m = e[h];
    if (l != m) {
      return d = parseInt(l, 10), !isNaN(d) && (e = parseInt(m, 10), !isNaN(e) && d - e) ? d - e : l < m ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
f.b.ku = function(a) {
  return encodeURIComponent(String(a));
};
f.b.ju = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
f.b.Ui = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
f.b.Eb = function(a, c) {
  if (c) {
    a = a.replace(f.b.Pe, "&amp;").replace(f.b.Se, "&lt;").replace(f.b.Re, "&gt;").replace(f.b.Ue, "&quot;").replace(f.b.Ve, "&#39;").replace(f.b.Te, "&#0;"), f.b.bd && (a = a.replace(f.b.Qe, "&#101;"));
  } else {
    if (!f.b.xi.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(f.b.Pe, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(f.b.Se, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(f.b.Re, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(f.b.Ue, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(f.b.Ve, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(f.b.Te, "&#0;"));
    f.b.bd && -1 != a.indexOf("e") && (a = a.replace(f.b.Qe, "&#101;"));
  }
  return a;
};
f.b.Pe = /&/g;
f.b.Se = /</g;
f.b.Re = />/g;
f.b.Ue = /"/g;
f.b.Ve = /'/g;
f.b.Te = /\x00/g;
f.b.Qe = /e/g;
f.b.xi = f.b.bd ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
f.b.$e = function(a) {
  return f.b.contains(a, "&") ? "document" in f.global ? f.b.bf(a) : f.b.Oi(a) : a;
};
f.b.gu = function(a, c) {
  return f.b.contains(a, "&") ? f.b.bf(a, c) : a;
};
f.b.bf = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : f.global.document.createElement("div");
  return a.replace(f.b.Ti, function(a, c) {
    var l = d[a];
    if (l) {
      return l;
    }
    if ("#" == c.charAt(0)) {
      var m = Number("0" + c.substr(1));
      isNaN(m) || (l = String.fromCharCode(m));
    }
    l || (e.innerHTML = a + " ", l = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = l;
  });
};
f.b.Oi = function(a) {
  return a.replace(/&([^;]+);/g, function(a, d) {
    switch(d) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return'"';
      default:
        if ("#" == d.charAt(0)) {
          var e = Number("0" + d.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
};
f.b.Ti = /&([^;\s<&]+);?/g;
f.b.nu = function(a, c) {
  return f.b.Ui(a.replace(/  /g, " &#160;"), c);
};
f.b.yt = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + f.b.Qi.Pi);
};
f.b.Yt = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var g = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == g && a.charAt(a.length - 1) == g) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
f.b.truncate = function(a, c, d) {
  d && (a = f.b.$e(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = f.b.Eb(a));
  return a;
};
f.b.fu = function(a, c, d, e) {
  d && (a = f.b.$e(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var g = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(g);
    }
  }
  d && (a = f.b.Eb(a));
  return a;
};
f.b.kd = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
f.b.lc = {"'":"\\'"};
f.b.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), g = e.charCodeAt(0);
    c[d + 1] = f.b.kd[e] || (31 < g && 127 > g ? e : f.b.af(e));
  }
  c.push('"');
  return c.join("");
};
f.b.Zr = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = f.b.af(a.charAt(d));
  }
  return c.join("");
};
f.b.af = function(a) {
  if (a in f.b.lc) {
    return f.b.lc[a];
  }
  if (a in f.b.kd) {
    return f.b.lc[a] = f.b.kd[a];
  }
  var c = a, d = a.charCodeAt(0);
  if (31 < d && 127 > d) {
    c = a;
  } else {
    if (256 > d) {
      if (c = "\\x", 16 > d || 256 < d) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > d && (c += "0");
    }
    c += d.toString(16).toUpperCase();
  }
  return f.b.lc[a] = c;
};
f.b.contains = function(a, c) {
  return-1 != a.indexOf(c);
};
f.b.Vh = function(a, c) {
  return f.b.contains(a.toLowerCase(), c.toLowerCase());
};
f.b.Mr = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
f.b.Bb = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
f.b.remove = function(a, c) {
  var d = new RegExp(f.b.ld(c), "");
  return a.replace(d, "");
};
f.b.removeAll = function(a, c) {
  var d = new RegExp(f.b.ld(c), "g");
  return a.replace(d, "");
};
f.b.ld = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
f.b.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
f.b.xt = function(a, c, d) {
  a = f.ga(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return f.b.repeat("0", Math.max(0, c - d)) + a;
};
f.b.Ni = function(a) {
  return null == a ? "" : String(a);
};
f.b.sr = function(a) {
  return Array.prototype.join.call(arguments, "");
};
f.b.ci = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ f.now()).toString(36);
};
f.b.hb = function(a, c) {
  for (var d = 0, e = f.b.trim(String(a)).split("."), g = f.b.trim(String(c)).split("."), h = Math.max(e.length, g.length), l = 0;0 == d && l < h;l++) {
    var m = e[l] || "", n = g[l] || "", p = /(\d*)(\D*)/g, q = /(\d*)(\D*)/g;
    do {
      var r = p.exec(m) || ["", "", ""], s = q.exec(n) || ["", "", ""];
      if (0 == r[0].length && 0 == s[0].length) {
        break;
      }
      d = f.b.md(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || f.b.md(0 == r[2].length, 0 == s[2].length) || f.b.md(r[2], s[2]);
    } while (0 == d);
  }
  return d;
};
f.b.md = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
f.b.Si = 4294967296;
f.b.As = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= f.b.Si;
  }
  return c;
};
f.b.Wi = 2147483648 * Math.random() | 0;
f.b.Pr = function() {
  return "goog_" + f.b.Wi++;
};
f.b.cu = function(a) {
  var c = Number(a);
  return 0 == c && f.b.ba(a) ? NaN : c;
};
f.b.Vs = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
f.b.et = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
f.b.bu = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
f.b.du = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
f.b.eu = function(a, c) {
  var d = f.isString(c) ? f.b.ld(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
f.b.wr = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
f.b.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return f.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
f.b.Rt = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
f.l = {};
f.l.pa = f.Ga;
f.l.Fc = function(a, c) {
  c.unshift(a);
  f.debug.Error.call(this, f.b.Vi.apply(null, c));
  c.shift();
};
f.Da(f.l.Fc, f.debug.Error);
f.l.Fc.prototype.name = "AssertionError";
f.l.km = function(a) {
  throw a;
};
f.l.Ed = f.l.km;
f.l.Ha = function(a, c, d, e) {
  var g = "Assertion failed";
  if (d) {
    var g = g + (": " + d), h = e
  } else {
    a && (g += ": " + a, h = c);
  }
  a = new f.l.Fc("" + g, h || []);
  f.l.Ed(a);
};
f.l.It = function(a) {
  f.l.pa && (f.l.Ed = a);
};
f.l.assert = function(a, c, d) {
  f.l.pa && !a && f.l.Ha("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
f.l.Yc = function(a, c) {
  f.l.pa && f.l.Ed(new f.l.Fc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
f.l.lr = function(a, c, d) {
  f.l.pa && !f.isNumber(a) && f.l.Ha("Expected number but got %s: %s.", [f.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
f.l.nr = function(a, c, d) {
  f.l.pa && !f.isString(a) && f.l.Ha("Expected string but got %s: %s.", [f.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
f.l.jr = function(a, c, d) {
  f.l.pa && !f.isFunction(a) && f.l.Ha("Expected function but got %s: %s.", [f.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
f.l.mr = function(a, c, d) {
  f.l.pa && !f.isObject(a) && f.l.Ha("Expected object but got %s: %s.", [f.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
f.l.gr = function(a, c, d) {
  f.l.pa && !f.isArray(a) && f.l.Ha("Expected array but got %s: %s.", [f.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
f.l.hr = function(a, c, d) {
  f.l.pa && !f.La(a) && f.l.Ha("Expected boolean but got %s: %s.", [f.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
f.l.ir = function(a, c, d) {
  !f.l.pa || f.isObject(a) && a.nodeType == f.Of.fk.ek || f.l.Ha("Expected Element but got %s: %s.", [f.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
f.l.kr = function(a, c, d, e) {
  !f.l.pa || a instanceof c || f.l.Ha("Expected instanceof %s but got %s.", [f.l.Tf(c), f.l.Tf(a)], d, Array.prototype.slice.call(arguments, 3));
  return a;
};
f.l.Mi = function() {
  for (var a in Object.prototype) {
    f.l.Yc(a + " should not be enumerable in Object.prototype.");
  }
};
f.l.Tf = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
f.a = {};
f.Ja = f.ge;
f.a.Ia = !1;
f.a.Gn = function(a) {
  return a[a.length - 1];
};
f.a.ft = f.a.Gn;
f.a.w = Array.prototype;
f.a.indexOf = f.Ja && (f.a.Ia || f.a.w.indexOf) ? function(a, c, d) {
  return f.a.w.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (f.isString(a)) {
    return f.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
f.a.lastIndexOf = f.Ja && (f.a.Ia || f.a.w.lastIndexOf) ? function(a, c, d) {
  return f.a.w.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (f.isString(a)) {
    return f.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
f.a.forEach = f.Ja && (f.a.Ia || f.a.w.forEach) ? function(a, c, d) {
  f.a.w.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, g = f.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in g && c.call(d, g[h], h, a);
  }
};
f.a.Oe = function(a, c, d) {
  for (var e = a.length, g = f.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in g && c.call(d, g[e], e, a);
  }
};
f.a.filter = f.Ja && (f.a.Ia || f.a.w.filter) ? function(a, c, d) {
  return f.a.w.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, g = [], h = 0, l = f.isString(a) ? a.split("") : a, m = 0;m < e;m++) {
    if (m in l) {
      var n = l[m];
      c.call(d, n, m, a) && (g[h++] = n);
    }
  }
  return g;
};
f.a.map = f.Ja && (f.a.Ia || f.a.w.map) ? function(a, c, d) {
  return f.a.w.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, g = Array(e), h = f.isString(a) ? a.split("") : a, l = 0;l < e;l++) {
    l in h && (g[l] = c.call(d, h[l], l, a));
  }
  return g;
};
f.a.reduce = f.Ja && (f.a.Ia || f.a.w.reduce) ? function(a, c, d, e) {
  e && (c = f.bind(c, e));
  return f.a.w.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var g = d;
  f.a.forEach(a, function(d, l) {
    g = c.call(e, g, d, l, a);
  });
  return g;
};
f.a.reduceRight = f.Ja && (f.a.Ia || f.a.w.reduceRight) ? function(a, c, d, e) {
  e && (c = f.bind(c, e));
  return f.a.w.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var g = d;
  f.a.Oe(a, function(d, l) {
    g = c.call(e, g, d, l, a);
  });
  return g;
};
f.a.some = f.Ja && (f.a.Ia || f.a.w.some) ? function(a, c, d) {
  return f.a.w.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, g = f.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in g && c.call(d, g[h], h, a)) {
      return!0;
    }
  }
  return!1;
};
f.a.every = f.Ja && (f.a.Ia || f.a.w.every) ? function(a, c, d) {
  return f.a.w.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, g = f.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in g && !c.call(d, g[h], h, a)) {
      return!1;
    }
  }
  return!0;
};
f.a.count = function(a, c, d) {
  var e = 0;
  f.a.forEach(a, function(a, h, l) {
    c.call(d, a, h, l) && ++e;
  }, d);
  return e;
};
f.a.find = function(a, c, d) {
  c = f.a.Ne(a, c, d);
  return 0 > c ? null : f.isString(a) ? a.charAt(c) : a[c];
};
f.a.Ne = function(a, c, d) {
  for (var e = a.length, g = f.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in g && c.call(d, g[h], h, a)) {
      return h;
    }
  }
  return-1;
};
f.a.bs = function(a, c, d) {
  c = f.a.Ai(a, c, d);
  return 0 > c ? null : f.isString(a) ? a.charAt(c) : a[c];
};
f.a.Ai = function(a, c, d) {
  for (var e = a.length, g = f.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in g && c.call(d, g[e], e, a)) {
      return e;
    }
  }
  return-1;
};
f.a.contains = function(a, c) {
  return 0 <= f.a.indexOf(a, c);
};
f.a.ba = function(a) {
  return 0 == a.length;
};
f.a.clear = function(a) {
  if (!f.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
f.a.insert = function(a, c) {
  f.a.contains(a, c) || a.push(c);
};
f.a.We = function(a, c, d) {
  f.a.splice(a, d, 0, c);
};
f.a.Ds = function(a, c, d) {
  f.xb(f.a.splice, a, d, 0).apply(null, c);
};
f.a.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = f.a.indexOf(a, d)) ? a.push(c) : f.a.We(a, c, e);
};
f.a.remove = function(a, c) {
  var d = f.a.indexOf(a, c), e;
  (e = 0 <= d) && f.a.Bb(a, d);
  return e;
};
f.a.Bb = function(a, c) {
  return 1 == f.a.w.splice.call(a, c, 1).length;
};
f.a.Dt = function(a, c, d) {
  c = f.a.Ne(a, c, d);
  return 0 <= c ? (f.a.Bb(a, c), !0) : !1;
};
f.a.Bt = function(a, c, d) {
  var e = 0;
  f.a.Oe(a, function(g, h) {
    c.call(d, g, h, a) && f.a.Bb(a, h) && e++;
  });
  return e;
};
f.a.concat = function(a) {
  return f.a.w.concat.apply(f.a.w, arguments);
};
f.a.join = function(a) {
  return f.a.w.concat.apply(f.a.w, arguments);
};
f.a.Ka = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return[];
};
f.a.clone = f.a.Ka;
f.a.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d], g;
    if (f.isArray(e) || (g = f.K(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) {
      a.push.apply(a, e);
    } else {
      if (g) {
        for (var h = a.length, l = e.length, m = 0;m < l;m++) {
          a[h + m] = e[m];
        }
      } else {
        a.push(e);
      }
    }
  }
};
f.a.splice = function(a, c, d, e) {
  return f.a.w.splice.apply(a, f.a.slice(arguments, 1));
};
f.a.slice = function(a, c, d) {
  return 2 >= arguments.length ? f.a.w.slice.call(a, c) : f.a.w.slice.call(a, c, d);
};
f.a.Ci = function(a, c, d) {
  c = c || a;
  d = d || function() {
    return f.isObject(l) ? "o" + f.ke(l) : (typeof l).charAt(0) + l;
  };
  for (var e = {}, g = 0, h = 0;h < a.length;) {
    var l = a[h++], m = d(l);
    Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, c[g++] = l);
  }
  c.length = g;
};
f.a.Ke = function(a, c, d) {
  return f.a.Le(a, d || f.a.Wa, !1, c);
};
f.a.qr = function(a, c, d) {
  return f.a.Le(a, c, !0, void 0, d);
};
f.a.Le = function(a, c, d, e, g) {
  for (var h = 0, l = a.length, m;h < l;) {
    var n = h + l >> 1, p;
    p = d ? c.call(g, a[n], n, a) : c(e, a[n]);
    0 < p ? h = n + 1 : (l = n, m = !p);
  }
  return m ? h : ~h;
};
f.a.sort = function(a, c) {
  a.sort(c || f.a.Wa);
};
f.a.St = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || f.a.Wa;
  f.a.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
f.a.Di = function(a, c, d) {
  var e = d || f.a.Wa;
  f.a.sort(a, function(a, d) {
    return e(c(a), c(d));
  });
};
f.a.Qt = function(a, c, d) {
  f.a.Di(a, function(a) {
    return a[c];
  }, d);
};
f.a.qe = function(a, c, d) {
  c = c || f.a.Wa;
  for (var e = 1;e < a.length;e++) {
    var g = c(a[e - 1], a[e]);
    if (0 < g || 0 == g && d) {
      return!1;
    }
  }
  return!0;
};
f.a.equals = function(a, c, d) {
  if (!f.K(a) || !f.K(c) || a.length != c.length) {
    return!1;
  }
  var e = a.length;
  d = d || f.a.re;
  for (var g = 0;g < e;g++) {
    if (!d(a[g], c[g])) {
      return!1;
    }
  }
  return!0;
};
f.a.Jr = function(a, c, d) {
  d = d || f.a.Wa;
  for (var e = Math.min(a.length, c.length), g = 0;g < e;g++) {
    var h = d(a[g], c[g]);
    if (0 != h) {
      return h;
    }
  }
  return f.a.Wa(a.length, c.length);
};
f.a.Wa = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
f.a.re = function(a, c) {
  return a === c;
};
f.a.or = function(a, c, d) {
  d = f.a.Ke(a, c, d);
  return 0 > d ? (f.a.We(a, c, -(d + 1)), !0) : !1;
};
f.a.pr = function(a, c, d) {
  c = f.a.Ke(a, c, d);
  return 0 <= c ? f.a.Bb(a, c) : !1;
};
f.a.rr = function(a, c, d) {
  for (var e = {}, g = 0;g < a.length;g++) {
    var h = a[g], l = c.call(d, h, g, a);
    f.ga(l) && (e[l] || (e[l] = [])).push(h);
  }
  return e;
};
f.a.On = function(a, c, d) {
  var e = {};
  f.a.forEach(a, function(g, h) {
    e[c.call(d, g, h, a)] = g;
  });
  return e;
};
f.a.Zb = function(a, c, d) {
  var e = [], g = 0, h = a;
  d = d || 1;
  void 0 !== c && (g = a, h = c);
  if (0 > d * (h - g)) {
    return[];
  }
  if (0 < d) {
    for (a = g;a < h;a += d) {
      e.push(a);
    }
  } else {
    for (a = g;a > h;a += d) {
      e.push(a);
    }
  }
  return e;
};
f.a.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
f.a.Bi = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    if (f.isArray(e)) {
      for (var g = 0;g < e.length;g += 8192) {
        for (var h = f.a.slice(e, g, g + 8192), h = f.a.Bi.apply(null, h), l = 0;l < h.length;l++) {
          c.push(h[l]);
        }
      }
    } else {
      c.push(e);
    }
  }
  return c;
};
f.a.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? f.a.w.unshift.apply(a, a.splice(-c, c)) : 0 > c && f.a.w.push.apply(a, a.splice(0, -c)));
  return a;
};
f.a.pt = function(a, c, d) {
  c = f.a.w.splice.call(a, c, 1);
  f.a.w.splice.call(a, d, 0, c[0]);
};
f.a.vf = function(a) {
  if (!arguments.length) {
    return[];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], g = 0;g < arguments.length;g++) {
      var h = arguments[g];
      if (d >= h.length) {
        return c;
      }
      e.push(h[d]);
    }
    c.push(e);
  }
};
f.a.Ot = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var g = Math.floor(d() * (e + 1)), h = a[e];
    a[e] = a[g];
    a[g] = h;
  }
};
f.f = {};
f.f.uo = function() {
};
f.A = {};
f.A.constant = function(a) {
  return function() {
    return a;
  };
};
f.A.Io = f.A.constant(!1);
f.A.Nq = f.A.constant(!0);
f.A.lq = f.A.constant(null);
f.A.identity = function(a) {
  return a;
};
f.A.error = function(a) {
  return function() {
    throw Error(a);
  };
};
f.A.Yc = function(a) {
  return function() {
    throw a;
  };
};
f.A.it = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
f.A.tt = function(a) {
  return function() {
    return arguments[a];
  };
};
f.A.pu = function(a, c) {
  return f.A.ql(a, f.A.constant(c));
};
f.A.Yr = function(a, c) {
  return function(d) {
    return c ? a == d : a === d;
  };
};
f.A.Kr = function(a, c) {
  var d = arguments, e = d.length;
  return function() {
    var a;
    e && (a = d[e - 1].apply(this, arguments));
    for (var c = e - 2;0 <= c;c--) {
      a = d[c].call(this, a);
    }
    return a;
  };
};
f.A.ql = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, g = 0;g < d;g++) {
      a = c[g].apply(this, arguments);
    }
    return a;
  };
};
f.A.br = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (!c[a].apply(this, arguments)) {
        return!1;
      }
    }
    return!0;
  };
};
f.A.wt = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (c[a].apply(this, arguments)) {
        return!0;
      }
    }
    return!1;
  };
};
f.A.Ri = function(a) {
  return function() {
    return!a.apply(this, arguments);
  };
};
f.A.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
f.A.ol = !0;
f.A.ur = function(a) {
  var c = !1, d;
  return function() {
    if (!f.A.ol) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
f.p = {};
f.p.At = function(a) {
  return Math.floor(Math.random() * a);
};
f.p.hu = function(a, c) {
  return a + Math.random() * (c - a);
};
f.p.Er = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
f.p.Dg = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
f.p.gt = function(a, c, d) {
  return a + d * (c - a);
};
f.p.qt = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
f.p.Ld = function(a) {
  return f.p.Dg(a, 360);
};
f.p.Tt = function(a) {
  return f.p.Dg(a, 2 * Math.PI);
};
f.p.Fg = function(a) {
  return a * Math.PI / 180;
};
f.p.Qk = function(a) {
  return 180 * a / Math.PI;
};
f.p.er = function(a, c) {
  return c * Math.cos(f.p.Fg(a));
};
f.p.fr = function(a, c) {
  return c * Math.sin(f.p.Fg(a));
};
f.p.cr = function(a, c, d, e) {
  return f.p.Ld(f.p.Qk(Math.atan2(e - c, d - a)));
};
f.p.dr = function(a, c) {
  var d = f.p.Ld(c) - f.p.Ld(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
f.p.sign = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
f.p.lt = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var g = a.length, h = c.length, l = [], m = 0;m < g + 1;m++) {
    l[m] = [], l[m][0] = 0;
  }
  for (var n = 0;n < h + 1;n++) {
    l[0][n] = 0;
  }
  for (m = 1;m <= g;m++) {
    for (n = 1;n <= h;n++) {
      d(a[m - 1], c[n - 1]) ? l[m][n] = l[m - 1][n - 1] + 1 : l[m][n] = Math.max(l[m - 1][n], l[m][n - 1]);
    }
  }
  for (var p = [], m = g, n = h;0 < m && 0 < n;) {
    d(a[m - 1], c[n - 1]) ? (p.unshift(e(m - 1, n - 1)), m--, n--) : l[m - 1][n] > l[m][n - 1] ? m-- : n--;
  }
  return p;
};
f.p.ze = function(a) {
  return f.a.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
f.p.$h = function(a) {
  return f.p.ze.apply(null, arguments) / arguments.length;
};
f.p.$k = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = f.p.$h.apply(null, arguments);
  return f.p.ze.apply(null, f.a.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
f.p.Ut = function(a) {
  return Math.sqrt(f.p.$k.apply(null, arguments));
};
f.p.Ts = function(a) {
  return isFinite(a) && 0 == a % 1;
};
f.p.Ps = function(a) {
  return isFinite(a) && !isNaN(a);
};
f.p.jt = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
f.p.Gt = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
f.p.Ft = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
f.d = {};
f.d.R = "StopIteration" in f.global ? f.global.StopIteration : Error("StopIteration");
f.d.C = function() {
};
f.d.C.prototype.next = function() {
  throw f.d.R;
};
f.d.C.prototype.kb = function() {
  return this;
};
f.d.G = function(a) {
  if (a instanceof f.d.C) {
    return a;
  }
  if ("function" == typeof a.kb) {
    return a.kb(!1);
  }
  if (f.K(a)) {
    var c = 0, d = new f.d.C;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw f.d.R;
        }
        if (c in a) {
          return a[c++];
        }
        c++;
      }
    };
    return d;
  }
  throw Error("Not implemented");
};
f.d.forEach = function(a, c, d) {
  if (f.K(a)) {
    try {
      f.a.forEach(a, c, d);
    } catch (e) {
      if (e !== f.d.R) {
        throw e;
      }
    }
  } else {
    a = f.d.G(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (g) {
      if (g !== f.d.R) {
        throw g;
      }
    }
  }
};
f.d.filter = function(a, c, d) {
  var e = f.d.G(a);
  a = new f.d.C;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (c.call(d, a, void 0, e)) {
        return a;
      }
    }
  };
  return a;
};
f.d.as = function(a, c, d) {
  return f.d.filter(a, f.A.Ri(c), d);
};
f.d.Zb = function(a, c, d) {
  var e = 0, g = a, h = d || 1;
  1 < arguments.length && (e = a, g = c);
  if (0 == h) {
    throw Error("Range step argument must not be zero");
  }
  var l = new f.d.C;
  l.next = function() {
    if (0 < h && e >= g || 0 > h && e <= g) {
      throw f.d.R;
    }
    var a = e;
    e += h;
    return a;
  };
  return l;
};
f.d.join = function(a, c) {
  return f.d.Ka(a).join(c);
};
f.d.map = function(a, c, d) {
  var e = f.d.G(a);
  a = new f.d.C;
  a.next = function() {
    var a = e.next();
    return c.call(d, a, void 0, e);
  };
  return a;
};
f.d.reduce = function(a, c, d, e) {
  var g = d;
  f.d.forEach(a, function(a) {
    g = c.call(e, g, a);
  });
  return g;
};
f.d.some = function(a, c, d) {
  a = f.d.G(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return!0;
      }
    }
  } catch (e) {
    if (e !== f.d.R) {
      throw e;
    }
  }
  return!1;
};
f.d.every = function(a, c, d) {
  a = f.d.G(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return!1;
      }
    }
  } catch (e) {
    if (e !== f.d.R) {
      throw e;
    }
  }
  return!0;
};
f.d.Br = function(a) {
  return f.d.hj(arguments);
};
f.d.hj = function(a) {
  var c = f.d.G(a);
  a = new f.d.C;
  var d = null;
  a.next = function() {
    for (;;) {
      if (null == d) {
        var a = c.next();
        d = f.d.G(a);
      }
      try {
        return d.next();
      } catch (g) {
        if (g !== f.d.R) {
          throw g;
        }
        d = null;
      }
    }
  };
  return a;
};
f.d.Ur = function(a, c, d) {
  var e = f.d.G(a);
  a = new f.d.C;
  var g = !0;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (!g || !c.call(d, a, void 0, e)) {
        return g = !1, a;
      }
    }
  };
  return a;
};
f.d.$t = function(a, c, d) {
  var e = f.d.G(a);
  a = new f.d.C;
  a.next = function() {
    var a = e.next();
    if (c.call(d, a, void 0, e)) {
      return a;
    }
    throw f.d.R;
  };
  return a;
};
f.d.Ka = function(a) {
  if (f.K(a)) {
    return f.a.Ka(a);
  }
  a = f.d.G(a);
  var c = [];
  f.d.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
f.d.equals = function(a, c, d) {
  a = f.d.Xh({}, a, c);
  var e = d || f.a.re;
  return f.d.every(a, function(a) {
    return e(a[0], a[1]);
  });
};
f.d.Xi = function(a, c) {
  try {
    return f.d.G(a).next();
  } catch (d) {
    if (d != f.d.R) {
      throw d;
    }
    return c;
  }
};
f.d.product = function(a) {
  if (f.a.some(arguments, function(a) {
    return!a.length;
  }) || !arguments.length) {
    return new f.d.C;
  }
  var c = new f.d.C, d = arguments, e = f.a.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = f.a.map(e, function(a, c) {
        return d[c][a];
      }), c = e.length - 1;0 <= c;c--) {
        if (e[c] < d[c].length - 1) {
          e[c]++;
          break;
        }
        if (0 == c) {
          e = null;
          break;
        }
        e[c] = 0;
      }
      return a;
    }
    throw f.d.R;
  };
  return c;
};
f.d.Qr = function(a) {
  var c = f.d.G(a), d = [], e = 0;
  a = new f.d.C;
  var g = !1;
  a.next = function() {
    var a = null;
    if (!g) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (l) {
        if (l != f.d.R || f.a.ba(d)) {
          throw l;
        }
        g = !0;
      }
    }
    a = d[e];
    e = (e + 1) % d.length;
    return a;
  };
  return a;
};
f.d.count = function(a, c) {
  var d = a || 0, e = f.ga(c) ? c : 1, g = new f.d.C;
  g.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return g;
};
f.d.repeat = function(a) {
  var c = new f.d.C;
  c.next = f.A.constant(a);
  return c;
};
f.d.Zq = function(a) {
  var c = f.d.G(a), d = 0;
  a = new f.d.C;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
f.d.vf = function(a) {
  var c = arguments, d = new f.d.C;
  if (0 < c.length) {
    var e = f.a.map(c, f.d.G);
    d.next = function() {
      return f.a.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
f.d.Xh = function(a, c) {
  var d = f.a.slice(arguments, 1), e = new f.d.C;
  if (0 < d.length) {
    var g = f.a.map(d, f.d.G);
    e.next = function() {
      var c = !1, d = f.a.map(g, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (g) {
          if (g !== f.d.R) {
            throw g;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw f.d.R;
      }
      return d;
    };
  }
  return e;
};
f.d.Lr = function(a, c) {
  var d = f.d.G(c);
  return f.d.filter(a, function() {
    return!!d.next();
  });
};
f.d.uc = function(a, c) {
  this.xe = f.d.G(a);
  this.ye = c || f.A.identity;
};
f.Da(f.d.uc, f.d.C);
f.d.uc.prototype.next = function() {
  for (;this.Db == this.gh;) {
    this.hc = this.xe.next(), this.Db = this.ye(this.hc);
  }
  this.gh = this.Db;
  return[this.Db, this.yl(this.gh)];
};
f.d.uc.prototype.yl = function(a) {
  for (var c = [];this.Db == a;) {
    c.push(this.hc);
    try {
      this.hc = this.xe.next();
    } catch (d) {
      if (d !== f.d.R) {
        throw d;
      }
      break;
    }
    this.Db = this.ye(this.hc);
  }
  return c;
};
f.d.xs = function(a, c) {
  return new f.d.uc(a, c);
};
f.d.Vt = function(a, c, d) {
  var e = f.d.G(a);
  a = new f.d.C;
  a.next = function() {
    var a = f.d.Ka(e.next());
    return c.apply(d, f.a.concat(a, void 0, e));
  };
  return a;
};
f.d.au = function(a, c) {
  var d = f.d.G(a), e = f.isNumber(c) ? c : 2, g = f.a.map(f.a.Zb(e), function() {
    return[];
  }), h = function() {
    var a = d.next();
    f.a.forEach(g, function(c) {
      c.push(a);
    });
  };
  return f.a.map(g, function(a) {
    var c = new f.d.C;
    c.next = function() {
      f.a.ba(a) && h();
      return a.shift();
    };
    return c;
  });
};
f.d.Xr = function(a, c) {
  return f.d.vf(f.d.count(c), a);
};
f.d.limit = function(a, c) {
  var d = f.d.G(a), e = new f.d.C, g = c;
  e.next = function() {
    if (0 < g--) {
      return d.next();
    }
    throw f.d.R;
  };
  return e;
};
f.d.ij = function(a, c) {
  for (var d = f.d.G(a);0 < c--;) {
    f.d.Xi(d, null);
  }
  return d;
};
f.d.slice = function(a, c, d) {
  a = f.d.ij(a, c);
  f.isNumber(d) && (a = f.d.limit(a, d - c));
  return a;
};
f.d.Wh = function(a) {
  var c = [];
  f.a.Ci(a, c);
  return a.length != c.length;
};
f.d.Uh = function(a, c) {
  var d = f.d.Ka(a), e = f.isNumber(c) ? c : d.length, d = f.a.repeat(d, e), d = f.d.product.apply(void 0, d);
  return f.d.filter(d, function(a) {
    return!f.d.Wh(a);
  });
};
f.d.Hr = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = f.d.Ka(a), g = f.d.Zb(e.length), g = f.d.Uh(g, c), h = f.d.filter(g, function(a) {
    return f.a.qe(a);
  }), g = new f.d.C;
  g.next = function() {
    return f.a.map(h.next(), d);
  };
  return g;
};
f.d.Ir = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = f.d.Ka(a), g = f.a.Zb(e.length), g = f.a.repeat(g, c), g = f.d.product.apply(void 0, g), h = f.d.filter(g, function(a) {
    return f.a.qe(a);
  }), g = new f.d.C;
  g.next = function() {
    return f.a.map(h.next(), d);
  };
  return g;
};
f.object = {};
f.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
f.object.filter = function(a, c, d) {
  var e = {}, g;
  for (g in a) {
    c.call(d, a[g], g, a) && (e[g] = a[g]);
  }
  return e;
};
f.object.map = function(a, c, d) {
  var e = {}, g;
  for (g in a) {
    e[g] = c.call(d, a[g], g, a);
  }
  return e;
};
f.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return!0;
    }
  }
  return!1;
};
f.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return!1;
    }
  }
  return!0;
};
f.object.ja = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
f.object.hs = function(a) {
  for (var c in a) {
    return c;
  }
};
f.object.js = function(a) {
  for (var c in a) {
    return a[c];
  }
};
f.object.contains = function(a, c) {
  return f.object.lb(a, c);
};
f.object.L = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
f.object.ia = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
f.object.vs = function(a, c) {
  for (var d = f.K(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], f.ga(a));d++) {
  }
  return a;
};
f.object.Tc = function(a, c) {
  return c in a;
};
f.object.lb = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return!0;
    }
  }
  return!1;
};
f.object.nn = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
f.object.cs = function(a, c, d) {
  return(c = f.object.nn(a, c, d)) && a[c];
};
f.object.ba = function(a) {
  for (var c in a) {
    return!1;
  }
  return!0;
};
f.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
f.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
f.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  f.object.set(a, c, d);
};
f.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
f.object.set = function(a, c, d) {
  a[c] = d;
};
f.object.Kt = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
f.object.equals = function(a, c) {
  for (var d in a) {
    if (!(d in c) || a[d] !== c[d]) {
      return!1;
    }
  }
  for (d in c) {
    if (!(d in a)) {
      return!1;
    }
  }
  return!0;
};
f.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
f.object.Nl = function(a) {
  var c = f.ea(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = f.object.Nl(a[d]);
    }
    return c;
  }
  return a;
};
f.object.Sh = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
f.object.Oh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
f.object.extend = function(a, c) {
  for (var d, e, g = 1;g < arguments.length;g++) {
    e = arguments[g];
    for (d in e) {
      a[d] = e[d];
    }
    for (var h = 0;h < f.object.Oh.length;h++) {
      d = f.object.Oh[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
f.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && f.isArray(arguments[0])) {
    return f.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
f.object.jn = function(a) {
  var c = arguments.length;
  if (1 == c && f.isArray(arguments[0])) {
    return f.object.jn.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
f.object.Or = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
f.object.Ss = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
f.f.T = function(a, c) {
  this.r = {};
  this.D = [];
  this.Ua = this.Ea = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.gd(a);
  }
};
b = f.f.T.prototype;
b.ja = function() {
  return this.Ea;
};
b.L = function() {
  this.gb();
  for (var a = [], c = 0;c < this.D.length;c++) {
    a.push(this.r[this.D[c]]);
  }
  return a;
};
b.ia = function() {
  this.gb();
  return this.D.concat();
};
b.Tc = function(a) {
  return f.f.T.Va(this.r, a);
};
b.lb = function(a) {
  for (var c = 0;c < this.D.length;c++) {
    var d = this.D[c];
    if (f.f.T.Va(this.r, d) && this.r[d] == a) {
      return!0;
    }
  }
  return!1;
};
b.equals = function(a, c) {
  if (this === a) {
    return!0;
  }
  if (this.Ea != a.ja()) {
    return!1;
  }
  var d = c || f.f.T.Yi;
  this.gb();
  for (var e, g = 0;e = this.D[g];g++) {
    if (!d(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
f.f.T.Yi = function(a, c) {
  return a === c;
};
b = f.f.T.prototype;
b.ba = function() {
  return 0 == this.Ea;
};
b.clear = function() {
  this.r = {};
  this.Ua = this.Ea = this.D.length = 0;
};
b.remove = function(a) {
  return f.f.T.Va(this.r, a) ? (delete this.r[a], this.Ea--, this.Ua++, this.D.length > 2 * this.Ea && this.gb(), !0) : !1;
};
b.gb = function() {
  if (this.Ea != this.D.length) {
    for (var a = 0, c = 0;a < this.D.length;) {
      var d = this.D[a];
      f.f.T.Va(this.r, d) && (this.D[c++] = d);
      a++;
    }
    this.D.length = c;
  }
  if (this.Ea != this.D.length) {
    for (var e = {}, c = a = 0;a < this.D.length;) {
      d = this.D[a], f.f.T.Va(e, d) || (this.D[c++] = d, e[d] = 1), a++;
    }
    this.D.length = c;
  }
};
b.get = function(a, c) {
  return f.f.T.Va(this.r, a) ? this.r[a] : c;
};
b.set = function(a, c) {
  f.f.T.Va(this.r, a) || (this.Ea++, this.D.push(a), this.Ua++);
  this.r[a] = c;
};
b.gd = function(a) {
  var c;
  a instanceof f.f.T ? (c = a.ia(), a = a.L()) : (c = f.object.ia(a), a = f.object.L(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.forEach = function(a, c) {
  for (var d = this.ia(), e = 0;e < d.length;e++) {
    var g = d[e], h = this.get(g);
    a.call(c, h, g, this);
  }
};
b.clone = function() {
  return new f.f.T(this);
};
b.Sh = function() {
  for (var a = new f.f.T, c = 0;c < this.D.length;c++) {
    var d = this.D[c];
    a.set(this.r[d], d);
  }
  return a;
};
b.On = function() {
  this.gb();
  for (var a = {}, c = 0;c < this.D.length;c++) {
    var d = this.D[c];
    a[d] = this.r[d];
  }
  return a;
};
b.kb = function(a) {
  this.gb();
  var c = 0, d = this.D, e = this.r, g = this.Ua, h = this, l = new f.d.C;
  l.next = function() {
    for (;;) {
      if (g != h.Ua) {
        throw Error("The map has changed since the iterator was created");
      }
      if (c >= d.length) {
        throw f.d.R;
      }
      var l = d[c++];
      return a ? l : e[l];
    }
  };
  return l;
};
f.f.T.Va = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
f.f.ja = function(a) {
  return "function" == typeof a.ja ? a.ja() : f.K(a) || f.isString(a) ? a.length : f.object.ja(a);
};
f.f.L = function(a) {
  if ("function" == typeof a.L) {
    return a.L();
  }
  if (f.isString(a)) {
    return a.split("");
  }
  if (f.K(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return f.object.L(a);
};
f.f.ia = function(a) {
  if ("function" == typeof a.ia) {
    return a.ia();
  }
  if ("function" != typeof a.L) {
    if (f.K(a) || f.isString(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return f.object.ia(a);
  }
};
f.f.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.lb ? a.lb(c) : f.K(a) || f.isString(a) ? f.a.contains(a, c) : f.object.lb(a, c);
};
f.f.ba = function(a) {
  return "function" == typeof a.ba ? a.ba() : f.K(a) || f.isString(a) ? f.a.ba(a) : f.object.ba(a);
};
f.f.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : f.K(a) ? f.a.clear(a) : f.object.clear(a);
};
f.f.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (f.K(a) || f.isString(a)) {
      f.a.forEach(a, c, d);
    } else {
      for (var e = f.f.ia(a), g = f.f.L(a), h = g.length, l = 0;l < h;l++) {
        c.call(d, g[l], e && e[l], a);
      }
    }
  }
};
f.f.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (f.K(a) || f.isString(a)) {
    return f.a.filter(a, c, d);
  }
  var e, g = f.f.ia(a), h = f.f.L(a), l = h.length;
  if (g) {
    e = {};
    for (var m = 0;m < l;m++) {
      c.call(d, h[m], g[m], a) && (e[g[m]] = h[m]);
    }
  } else {
    for (e = [], m = 0;m < l;m++) {
      c.call(d, h[m], void 0, a) && e.push(h[m]);
    }
  }
  return e;
};
f.f.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (f.K(a) || f.isString(a)) {
    return f.a.map(a, c, d);
  }
  var e, g = f.f.ia(a), h = f.f.L(a), l = h.length;
  if (g) {
    e = {};
    for (var m = 0;m < l;m++) {
      e[g[m]] = c.call(d, h[m], g[m], a);
    }
  } else {
    for (e = [], m = 0;m < l;m++) {
      e[m] = c.call(d, h[m], void 0, a);
    }
  }
  return e;
};
f.f.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (f.K(a) || f.isString(a)) {
    return f.a.some(a, c, d);
  }
  for (var e = f.f.ia(a), g = f.f.L(a), h = g.length, l = 0;l < h;l++) {
    if (c.call(d, g[l], e && e[l], a)) {
      return!0;
    }
  }
  return!1;
};
f.f.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (f.K(a) || f.isString(a)) {
    return f.a.every(a, c, d);
  }
  for (var e = f.f.ia(a), g = f.f.L(a), h = g.length, l = 0;l < h;l++) {
    if (!c.call(d, g[l], e && e[l], a)) {
      return!1;
    }
  }
  return!0;
};
f.f.za = function(a) {
  this.r = new f.f.T;
  a && this.gd(a);
};
f.f.za.td = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + f.ke(a) : c.substr(0, 1) + a;
};
b = f.f.za.prototype;
b.ja = function() {
  return this.r.ja();
};
b.add = function(a) {
  this.r.set(f.f.za.td(a), a);
};
b.gd = function(a) {
  a = f.f.L(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.add(a[d]);
  }
};
b.removeAll = function(a) {
  a = f.f.L(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.remove(a[d]);
  }
};
b.remove = function(a) {
  return this.r.remove(f.f.za.td(a));
};
b.clear = function() {
  this.r.clear();
};
b.ba = function() {
  return this.r.ba();
};
b.contains = function(a) {
  return this.r.Tc(f.f.za.td(a));
};
b.L = function() {
  return this.r.L();
};
b.clone = function() {
  return new f.f.za(this);
};
b.equals = function(a) {
  return this.ja() == f.f.ja(a) && this.Bc(a);
};
b.Bc = function(a) {
  var c = f.f.ja(a);
  if (this.ja() > c) {
    return!1;
  }
  !(a instanceof f.f.za) && 5 < c && (a = new f.f.za(a));
  return f.f.every(this, function(c) {
    return f.f.contains(a, c);
  });
};
b.kb = function() {
  return this.r.kb(!1);
};
f.c = {};
f.c.userAgent = {};
f.c.userAgent.k = {};
f.c.userAgent.k.Ie = function() {
  var a = f.c.userAgent.k.vi();
  return a && (a = a.userAgent) ? a : "";
};
f.c.userAgent.k.vi = function() {
  return f.global.navigator;
};
f.c.userAgent.k.He = f.c.userAgent.k.Ie();
f.c.userAgent.k.Nt = function(a) {
  f.c.userAgent.k.He = a || f.c.userAgent.k.Ie();
};
f.c.userAgent.k.fb = function() {
  return f.c.userAgent.k.He;
};
f.c.userAgent.k.u = function(a) {
  return f.b.contains(f.c.userAgent.k.fb(), a);
};
f.c.userAgent.k.wi = function(a) {
  return f.b.Vh(f.c.userAgent.k.fb(), a);
};
f.c.userAgent.k.oe = function(a) {
  for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
f.c.userAgent.browser = {};
f.c.userAgent.browser.En = function() {
  return f.c.userAgent.k.u("Opera") || f.c.userAgent.k.u("OPR");
};
f.c.userAgent.browser.Cn = function() {
  return f.c.userAgent.k.u("Trident") || f.c.userAgent.k.u("MSIE");
};
f.c.userAgent.browser.Bn = function() {
  return f.c.userAgent.k.u("Firefox");
};
f.c.userAgent.browser.we = function() {
  return f.c.userAgent.k.u("Safari") && !f.c.userAgent.k.u("Chrome") && !f.c.userAgent.k.u("CriOS") && !f.c.userAgent.k.u("Android");
};
f.c.userAgent.browser.ve = function() {
  return f.c.userAgent.k.u("Coast");
};
f.c.userAgent.browser.Dn = function() {
  return(f.c.userAgent.k.u("iPad") || f.c.userAgent.k.u("iPhone")) && !f.c.userAgent.browser.we() && !f.c.userAgent.browser.ue() && !f.c.userAgent.browser.ve() && f.c.userAgent.k.u("AppleWebKit");
};
f.c.userAgent.browser.ue = function() {
  return f.c.userAgent.k.u("Chrome") || f.c.userAgent.k.u("CriOS");
};
f.c.userAgent.browser.An = function() {
  return!f.c.userAgent.browser.ne() && f.c.userAgent.k.u("Android");
};
f.c.userAgent.browser.pe = f.c.userAgent.browser.En;
f.c.userAgent.browser.Uc = f.c.userAgent.browser.Cn;
f.c.userAgent.browser.Qs = f.c.userAgent.browser.Bn;
f.c.userAgent.browser.Zs = f.c.userAgent.browser.we;
f.c.userAgent.browser.Js = f.c.userAgent.browser.ve;
f.c.userAgent.browser.Us = f.c.userAgent.browser.Dn;
f.c.userAgent.browser.ne = f.c.userAgent.browser.ue;
f.c.userAgent.browser.Gs = f.c.userAgent.browser.An;
f.c.userAgent.browser.at = function() {
  return f.c.userAgent.k.u("Silk");
};
f.c.userAgent.browser.ib = function() {
  function a(a) {
    a = f.a.find(a, e);
    return d[a] || "";
  }
  var c = f.c.userAgent.k.fb();
  if (f.c.userAgent.browser.Uc()) {
    return f.c.userAgent.browser.Th(c);
  }
  var c = f.c.userAgent.k.oe(c), d = {};
  f.a.forEach(c, function(a) {
    d[a[0]] = a[1];
  });
  var e = f.xb(f.object.Tc, d);
  return f.c.userAgent.browser.pe() ? a(["Version", "Opera", "OPR"]) : f.c.userAgent.browser.ne() ? a(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || "";
};
f.c.userAgent.browser.Vb = function(a) {
  return 0 <= f.b.hb(f.c.userAgent.browser.ib(), a);
};
f.c.userAgent.browser.Th = function(a) {
  var c = /rv: *([\d\.]*)/.exec(a);
  if (c && c[1]) {
    return c[1];
  }
  var c = "", d = /MSIE +([\d\.]+)/.exec(a);
  if (d && d[1]) {
    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == d[1]) {
      if (a && a[1]) {
        switch(a[1]) {
          case "4.0":
            c = "8.0";
            break;
          case "5.0":
            c = "9.0";
            break;
          case "6.0":
            c = "10.0";
            break;
          case "7.0":
            c = "11.0";
        }
      } else {
        c = "7.0";
      }
    } else {
      c = d[1];
    }
  }
  return c;
};
f.c.userAgent.ha = {};
f.c.userAgent.ha.Ys = function() {
  return f.c.userAgent.k.u("Presto");
};
f.c.userAgent.ha.Zh = function() {
  return f.c.userAgent.k.u("Trident") || f.c.userAgent.k.u("MSIE");
};
f.c.userAgent.ha.se = function() {
  return f.c.userAgent.k.wi("WebKit");
};
f.c.userAgent.ha.vn = function() {
  return f.c.userAgent.k.u("Gecko") && !f.c.userAgent.ha.se() && !f.c.userAgent.ha.Zh();
};
f.c.userAgent.ha.ib = function() {
  var a = f.c.userAgent.k.fb();
  if (a) {
    var a = f.c.userAgent.k.oe(a), c = a[1];
    if (c) {
      return "Gecko" == c[0] ? f.c.userAgent.ha.bi(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
f.c.userAgent.ha.Vb = function(a) {
  return 0 <= f.b.hb(f.c.userAgent.ha.ib(), a);
};
f.c.userAgent.ha.bi = function(a, c) {
  var d = f.a.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
f.c.userAgent.platform = {};
f.c.userAgent.platform.Be = function() {
  return f.c.userAgent.k.u("Android");
};
f.c.userAgent.platform.Zi = function() {
  return f.c.userAgent.k.u("iPod");
};
f.c.userAgent.platform.rf = function() {
  return f.c.userAgent.k.u("iPhone") && !f.c.userAgent.k.u("iPod") && !f.c.userAgent.k.u("iPad");
};
f.c.userAgent.platform.qf = function() {
  return f.c.userAgent.k.u("iPad");
};
f.c.userAgent.platform.ai = function() {
  return f.c.userAgent.platform.rf() || f.c.userAgent.platform.qf() || f.c.userAgent.platform.Zi();
};
f.c.userAgent.platform.Ce = function() {
  return f.c.userAgent.k.u("Macintosh");
};
f.c.userAgent.platform.wn = function() {
  return f.c.userAgent.k.u("Linux");
};
f.c.userAgent.platform.De = function() {
  return f.c.userAgent.k.u("Windows");
};
f.c.userAgent.platform.Ta = function() {
  return f.c.userAgent.k.u("CrOS");
};
f.c.userAgent.platform.ib = function() {
  var a = f.c.userAgent.k.fb(), c = "";
  f.c.userAgent.platform.De() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (a = c.exec(a)) ? a[1] : "0.0") : f.c.userAgent.platform.ai() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (a = c.exec(a)) && a[1].replace(/_/g, ".")) : f.c.userAgent.platform.Ce() ? (c = /Mac OS X ([0-9_.]+)/, c = (a = c.exec(a)) ? a[1].replace(/_/g, ".") : "10") : f.c.userAgent.platform.Be() ? (c = /Android\s+([^\);]+)(\)|;)/, c = (a = c.exec(a)) && a[1]) : f.c.userAgent.platform.Ta() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, 
  c = (a = c.exec(a)) && a[1]);
  return c || "";
};
f.c.userAgent.platform.Vb = function(a) {
  return 0 <= f.b.hb(f.c.userAgent.platform.ib(), a);
};
f.userAgent = {};
f.userAgent.be = !1;
f.userAgent.Gh = !1;
f.userAgent.Kh = !1;
f.userAgent.ce = !1;
f.userAgent.de = !1;
f.userAgent.Ki = !1;
f.userAgent.Rc = f.userAgent.be || f.userAgent.Gh || f.userAgent.ce || f.userAgent.Kh || f.userAgent.de;
f.userAgent.qb = function() {
  return f.c.userAgent.k.fb();
};
f.userAgent.ff = function() {
  return f.global.navigator || null;
};
f.userAgent.Lb = f.userAgent.Rc ? f.userAgent.de : f.c.userAgent.browser.pe();
f.userAgent.ab = f.userAgent.Rc ? f.userAgent.be : f.c.userAgent.browser.Uc();
f.userAgent.Lg = f.userAgent.Rc ? f.userAgent.Gh : f.c.userAgent.ha.vn();
f.userAgent.zb = f.userAgent.Rc ? f.userAgent.Kh || f.userAgent.ce : f.c.userAgent.ha.se();
f.userAgent.xn = function() {
  return f.userAgent.zb && f.c.userAgent.k.u("Mobile");
};
f.userAgent.np = f.userAgent.ce || f.userAgent.xn();
f.userAgent.wg = f.userAgent.zb;
f.userAgent.kn = function() {
  var a = f.userAgent.ff();
  return a && a.platform || "";
};
f.userAgent.pq = f.userAgent.kn();
f.userAgent.Ih = !1;
f.userAgent.Lh = !1;
f.userAgent.Hh = !1;
f.userAgent.Mh = !1;
f.userAgent.Wb = !1;
f.userAgent.Yb = !1;
f.userAgent.Xb = !1;
f.userAgent.eb = f.userAgent.Ih || f.userAgent.Lh || f.userAgent.Hh || f.userAgent.Mh || f.userAgent.Wb || f.userAgent.Yb || f.userAgent.Xb;
f.userAgent.dc = f.userAgent.eb ? f.userAgent.Ih : f.c.userAgent.platform.Ce();
f.userAgent.Lc = f.userAgent.eb ? f.userAgent.Lh : f.c.userAgent.platform.De();
f.userAgent.cc = f.userAgent.eb ? f.userAgent.Hh : f.c.userAgent.platform.wn();
f.userAgent.yn = function() {
  var a = f.userAgent.ff();
  return!!a && f.b.contains(a.appVersion || "", "X11");
};
f.userAgent.Xq = f.userAgent.eb ? f.userAgent.Mh : f.userAgent.yn();
f.userAgent.ANDROID = f.userAgent.eb ? f.userAgent.Wb : f.c.userAgent.platform.Be();
f.userAgent.vg = f.userAgent.eb ? f.userAgent.Yb : f.c.userAgent.platform.rf();
f.userAgent.ug = f.userAgent.eb ? f.userAgent.Xb : f.c.userAgent.platform.qf();
f.userAgent.ie = function() {
  var a = "", c;
  if (f.userAgent.Lb && f.global.opera) {
    return a = f.global.opera.version, f.isFunction(a) ? a() : a;
  }
  f.userAgent.Lg ? c = /rv\:([^\);]+)(\)|;)/ : f.userAgent.ab ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : f.userAgent.zb && (c = /WebKit\/(\S+)/);
  c && (a = (a = c.exec(f.userAgent.qb())) ? a[1] : "");
  return f.userAgent.ab && (c = f.userAgent.Ng(), c > parseFloat(a)) ? String(c) : a;
};
f.userAgent.Ng = function() {
  var a = f.global.document;
  return a ? a.documentMode : void 0;
};
f.userAgent.VERSION = f.userAgent.ie();
f.userAgent.compare = function(a, c) {
  return f.b.hb(a, c);
};
f.userAgent.Ze = {};
f.userAgent.Vb = function(a) {
  return f.userAgent.Ki || f.userAgent.Ze[a] || (f.userAgent.Ze[a] = 0 <= f.b.hb(f.userAgent.VERSION, a));
};
f.userAgent.vb = f.userAgent.Vb;
f.userAgent.tn = function(a) {
  return f.userAgent.ab && f.userAgent.Wl >= a;
};
f.userAgent.Ms = f.userAgent.tn;
var t = f.global.document;
f.userAgent.Wl = t && f.userAgent.ab ? f.userAgent.Ng() || ("CSS1Compat" == t.compatMode ? parseInt(f.userAgent.VERSION, 10) : 5) : void 0;
f.debug.oa = f.Ga;
f.debug.Ar = function(a, c, d) {
  d = d || f.global;
  var e = d.onerror, g = !!c;
  f.userAgent.zb && !f.userAgent.Vb("535.3") && (g = !g);
  d.onerror = function(c, d, m, n, p) {
    e && e(c, d, m, n, p);
    a({message:c, fileName:d, Jl:m, Sn:n, error:p});
    return g;
  };
};
f.debug.$r = function(a, c) {
  if ("undefined" == typeof a) {
    return "undefined";
  }
  if (null == a) {
    return "NULL";
  }
  var d = [], e;
  for (e in a) {
    if (c || !f.isFunction(a[e])) {
      var g = e + " = ";
      try {
        g += a[e];
      } catch (h) {
        g += "*** " + h + " ***";
      }
      d.push(g);
    }
  }
  return d.join("\n");
};
f.debug.Sr = function(a, c) {
  var d = [], e = function(a, h, l) {
    var m = h + "  ";
    l = new f.f.za(l);
    try {
      if (f.ga(a)) {
        if (f.yb(a)) {
          d.push("NULL");
        } else {
          if (f.isString(a)) {
            d.push('"' + a.replace(/\n/g, "\n" + h) + '"');
          } else {
            if (f.isFunction(a)) {
              d.push(String(a).replace(/\n/g, "\n" + h));
            } else {
              if (f.isObject(a)) {
                if (l.contains(a)) {
                  d.push("*** reference loop detected ***");
                } else {
                  l.add(a);
                  d.push("{");
                  for (var n in a) {
                    if (c || !f.isFunction(a[n])) {
                      d.push("\n"), d.push(m), d.push(n + " = "), e(a[n], m, l);
                    }
                  }
                  d.push("\n" + h + "}");
                }
              } else {
                d.push(a);
              }
            }
          }
        }
      } else {
        d.push("undefined");
      }
    } catch (p) {
      d.push("*** " + p + " ***");
    }
  };
  e(a, "", new f.f.za);
  return d.join("");
};
f.debug.ln = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    f.isArray(a[d]) ? c.push(f.debug.ln(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
f.debug.aj = function(a, c) {
  try {
    var d = f.debug.Li(a);
    return "Message: " + f.b.Eb(d.message) + '\nUrl: <a href="view-source:' + d.fileName + '" target="_new">' + d.fileName + "</a>\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + f.b.Eb(d.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + f.b.Eb(f.debug.ed(c) + "-> ");
  } catch (e) {
    return "Exception trying to expose exception! You win, we lose. " + e;
  }
};
f.debug.Li = function(a) {
  var c = f.gm("window.location.href");
  if (f.isString(a)) {
    return{message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, g = !1;
  try {
    d = a.lineNumber || a.Jl || "Not available";
  } catch (h) {
    d = "Not available", g = !0;
  }
  try {
    e = a.fileName || a.filename || a.sourceURL || f.global.$googDebugFname || c;
  } catch (l) {
    e = "Not available", g = !0;
  }
  return!g && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:d, fileName:e, stack:a.stack || "Not available"};
};
f.debug.yh = function(a, c) {
  var d;
  "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, f.debug.yh)) : d = a;
  d.stack || (d.stack = f.debug.ed(f.debug.yh));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
f.debug.Pl = function(a) {
  if (f.gc) {
    var c = f.debug.hh(f.debug.Pl);
    if (c) {
      return c;
    }
  }
  for (var c = [], d = arguments.callee.caller, e = 0;d && (!a || e < a);) {
    c.push(f.debug.getFunctionName(d));
    c.push("()\n");
    try {
      d = d.caller;
    } catch (g) {
      c.push("[exception trying to get caller]\n");
      break;
    }
    e++;
    if (e >= f.debug.Fe) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
f.debug.Fe = 50;
f.debug.hh = function(a) {
  var c = Error();
  if (Error.captureStackTrace) {
    return Error.captureStackTrace(c, a), String(c.stack);
  }
  try {
    throw c;
  } catch (d) {
    c = d;
  }
  return(a = c.stack) ? String(a) : null;
};
f.debug.ed = function(a) {
  var c;
  f.gc && (c = f.debug.hh(a || f.debug.ed));
  c || (c = f.debug.Ee(a || arguments.callee.caller, []));
  return c;
};
f.debug.Ee = function(a, c) {
  var d = [];
  if (f.a.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < f.debug.Fe) {
      d.push(f.debug.getFunctionName(a) + "(");
      for (var e = a.arguments, g = 0;e && g < e.length;g++) {
        0 < g && d.push(", ");
        var h;
        h = e[g];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = String(h);
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = f.debug.getFunctionName(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h;
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        d.push(h);
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(f.debug.Ee(a.caller, c));
      } catch (l) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
f.debug.Jt = function(a) {
  f.debug.vh = a;
};
f.debug.getFunctionName = function(a) {
  if (f.debug.tb[a]) {
    return f.debug.tb[a];
  }
  if (f.debug.vh) {
    var c = f.debug.vh(a);
    if (c) {
      return f.debug.tb[a] = c;
    }
  }
  a = String(a);
  f.debug.tb[a] || (c = /function ([^\(]+)/.exec(a), f.debug.tb[a] = c ? c[1] : "[Anonymous]");
  return f.debug.tb[a];
};
f.debug.mt = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
f.debug.tb = {};
f.debug.da = function(a, c, d, e, g) {
  this.reset(a, c, d, e, g);
};
f.debug.da.prototype.Pg = null;
f.debug.da.prototype.Og = null;
f.debug.da.el = !0;
f.debug.da.gl = 0;
f.debug.da.prototype.reset = function(a, c, d, e, g) {
  f.debug.da.el && ("number" == typeof g || f.debug.da.gl++);
  e || f.now();
  this.Xc = a;
  this.fl = c;
  delete this.Pg;
  delete this.Og;
};
f.debug.da.prototype.cj = function(a) {
  this.Pg = a;
};
f.debug.da.prototype.dj = function(a) {
  this.Og = a;
};
f.debug.da.prototype.getMessage = function() {
  return this.fl;
};
f.debug.Z = function() {
  this.clear();
};
f.debug.Z.Wc = function() {
  f.debug.Z.Tb || (f.debug.Z.Tb = new f.debug.Z);
  return f.debug.Z.Tb;
};
f.debug.Z.Kc = 0;
f.debug.Z.prototype.$i = function(a, c, d) {
  var e = (this.kg + 1) % f.debug.Z.Kc;
  this.kg = e;
  if (this.lg) {
    return e = this.jg[e], e.reset(a, c, d), e;
  }
  this.lg = e == f.debug.Z.Kc - 1;
  return this.jg[e] = new f.debug.da(a, c, d);
};
f.debug.Z.bj = function() {
  return 0 < f.debug.Z.Kc;
};
f.debug.Z.prototype.clear = function() {
  this.jg = Array(f.debug.Z.Kc);
  this.kg = -1;
  this.lg = !1;
};
f.debug.e = function(a) {
  this.hd = a;
  this.ta = this.Nd = this.Xc = this.sa = null;
};
f.debug.e.wd = "";
f.debug.e.wb = !0;
f.debug.e.wb || (f.debug.e.Vc = []);
f.debug.e.j = function(a, c) {
  this.name = a;
  this.value = c;
};
f.debug.e.j.prototype.toString = function() {
  return this.name;
};
f.debug.e.j.Zc = new f.debug.e.j("OFF", Infinity);
f.debug.e.j.Pm = new f.debug.e.j("SHOUT", 1200);
f.debug.e.j.nf = new f.debug.e.j("SEVERE", 1E3);
f.debug.e.j.pd = new f.debug.e.j("WARNING", 900);
f.debug.e.j.mf = new f.debug.e.j("INFO", 800);
f.debug.e.j.kf = new f.debug.e.j("CONFIG", 700);
f.debug.e.j.lf = new f.debug.e.j("FINE", 500);
f.debug.e.j.tm = new f.debug.e.j("FINER", 400);
f.debug.e.j.um = new f.debug.e.j("FINEST", 300);
f.debug.e.j.hm = new f.debug.e.j("ALL", 0);
f.debug.e.j.od = [f.debug.e.j.Zc, f.debug.e.j.Pm, f.debug.e.j.nf, f.debug.e.j.pd, f.debug.e.j.mf, f.debug.e.j.kf, f.debug.e.j.lf, f.debug.e.j.tm, f.debug.e.j.um, f.debug.e.j.hm];
f.debug.e.j.Ma = null;
f.debug.e.j.jf = function() {
  f.debug.e.j.Ma = {};
  for (var a = 0, c;c = f.debug.e.j.od[a];a++) {
    f.debug.e.j.Ma[c.value] = c, f.debug.e.j.Ma[c.name] = c;
  }
};
f.debug.e.j.rs = function(a) {
  f.debug.e.j.Ma || f.debug.e.j.jf();
  return f.debug.e.j.Ma[a] || null;
};
f.debug.e.j.ss = function(a) {
  f.debug.e.j.Ma || f.debug.e.j.jf();
  if (a in f.debug.e.j.Ma) {
    return f.debug.e.j.Ma[a];
  }
  for (var c = 0;c < f.debug.e.j.od.length;++c) {
    var d = f.debug.e.j.od[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
f.debug.e.lk = function(a) {
  f.global.console && (f.global.console.timeStamp ? f.global.console.timeStamp(a) : f.global.console.markTimeline && f.global.console.markTimeline(a));
  f.global.msWriteProfilerMark && f.global.msWriteProfilerMark(a);
};
b = f.debug.e.prototype;
b.getName = function() {
  return this.hd;
};
b.sh = function(a) {
  f.debug.oa && (f.debug.e.wb ? (this.ta || (this.ta = []), this.ta.push(a)) : f.debug.e.Vc.push(a));
};
b.uh = function(a) {
  if (f.debug.oa) {
    var c = f.debug.e.wb ? this.ta : f.debug.e.Vc;
    return!!c && f.a.remove(c, a);
  }
  return!1;
};
b.getParent = function() {
  return this.sa;
};
b.getChildren = function() {
  this.Nd || (this.Nd = {});
  return this.Nd;
};
b.te = function() {
  if (!f.debug.oa) {
    return f.debug.e.j.Zc;
  }
  if (!f.debug.e.wb) {
    return f.debug.e.Qn;
  }
  if (this.Xc) {
    return this.Xc;
  }
  if (this.sa) {
    return this.sa.te();
  }
  f.l.Yc("Root logger has no level set.");
  return null;
};
b.hk = function(a) {
  return f.debug.oa && a.value >= this.te().value;
};
b.log = function(a, c, d) {
  f.debug.oa && this.hk(a) && (f.isFunction(c) && (c = c()), this.gk(this.df(a, c, d, f.debug.e.prototype.log)));
};
b.df = function(a, c, d, e) {
  var g = f.debug.Z.bj() ? f.debug.Z.Wc().$i(a, c, this.hd) : new f.debug.da(a, String(c), this.hd);
  if (d) {
    var h;
    h = f.gc ? e || f.debug.e.prototype.df : e || arguments.callee.caller;
    g.cj(d);
    g.dj(f.debug.aj(d, h));
  }
  return g;
};
b.Vl = function(a, c) {
  f.debug.oa && this.log(f.debug.e.j.nf, a, c);
};
b.Mc = function(a, c) {
  f.debug.oa && this.log(f.debug.e.j.pd, a, c);
};
b.info = function(a, c) {
  f.debug.oa && this.log(f.debug.e.j.mf, a, c);
};
b.config = function(a, c) {
  f.debug.oa && this.log(f.debug.e.j.kf, a, c);
};
b.th = function(a, c) {
  f.debug.oa && this.log(f.debug.e.j.lf, a, c);
};
b.gk = function(a) {
  f.debug.e.lk("log:" + a.getMessage());
  if (f.debug.e.wb) {
    for (var c = this;c;) {
      c.jk(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = f.debug.e.Vc[c++];) {
      d(a);
    }
  }
};
b.jk = function(a) {
  if (this.ta) {
    for (var c = 0, d;d = this.ta[c];c++) {
      d(a);
    }
  }
};
f.debug.qa = {};
f.debug.qa.Mf = {};
f.debug.qa.Pb = function() {
  f.debug.qa.Ff || (f.debug.qa.Mf[f.debug.e.wd] = f.debug.qa.Ff);
};
f.debug.qa.os = function() {
  return f.debug.qa.Mf;
};
f.debug.qa.ts = function() {
  f.debug.qa.Pb();
  return f.debug.qa.Ff;
};
f.debug.qa.Nr = function() {
  return function() {
  };
};
f.log = {};
f.log.Pa = f.debug.oa;
f.log.wd = f.debug.e.wd;
f.log.e = f.debug.e;
f.log.j = f.debug.e.j;
f.log.da = f.debug.da;
f.log.sh = function(a, c) {
  f.log.Pa && a && a.sh(c);
};
f.log.uh = function(a, c) {
  return f.log.Pa && a ? a.uh(c) : !1;
};
f.log.log = function(a, c, d, e) {
  f.log.Pa && a && a.log(c, d, e);
};
f.log.error = function(a, c, d) {
  f.log.Pa && a && a.Vl(c, d);
};
f.log.Mc = function(a, c, d) {
  f.log.Pa && a && a.Mc(c, d);
};
f.log.info = function(a, c, d) {
  f.log.Pa && a && a.info(c, d);
};
f.log.th = function(a, c, d) {
  f.log.Pa && a && a.th(c, d);
};
f.f.X = function(a) {
  this.V = {};
  if (a) {
    for (var c = 0;c < a.length;c++) {
      this.V[f.f.X.jc(a[c])] = null;
    }
  }
  f.l.Mi();
};
f.f.X.nk = {};
f.f.X.jc = function(a) {
  return a in f.f.X.nk || 32 == String(a).charCodeAt(0) ? " " + a : a;
};
f.f.X.ud = function(a) {
  return 32 == a.charCodeAt(0) ? a.substr(1) : a;
};
b = f.f.X.prototype;
b.add = function(a) {
  this.V[f.f.X.jc(a)] = null;
};
b.ok = function(a) {
  for (var c in a.V) {
    this.V[c] = null;
  }
};
b.clear = function() {
  this.V = {};
};
b.clone = function() {
  var a = new f.f.X;
  a.ok(this);
  return a;
};
b.contains = function(a) {
  return f.f.X.jc(a) in this.V;
};
b.equals = function(a) {
  return this.Bc(a) && a.Bc(this);
};
b.forEach = function(a, c) {
  for (var d in this.V) {
    a.call(c, f.f.X.ud(d), void 0, this);
  }
};
b.ja = Object.keys ? function() {
  return Object.keys(this.V).length;
} : function() {
  var a = 0, c;
  for (c in this.V) {
    a++;
  }
  return a;
};
b.L = Object.keys ? function() {
  return Object.keys(this.V).map(f.f.X.ud, this);
} : function() {
  var a = [], c;
  for (c in this.V) {
    a.push(f.f.X.ud(c));
  }
  return a;
};
b.ba = function() {
  for (var a in this.V) {
    return!1;
  }
  return!0;
};
b.Bc = function(a) {
  for (var c in this.V) {
    if (!(c in a.V)) {
      return!1;
    }
  }
  return!0;
};
b.remove = function(a) {
  a = f.f.X.jc(a);
  return a in this.V ? (delete this.V[a], !0) : !1;
};
b.kb = function() {
  return f.d.G(this.L());
};
k.Y = {};
k.Y.Ta = function() {
  return null != f.userAgent.qb() && -1 != f.userAgent.qb().indexOf("CrOS");
};
k.Y.Ji = function() {
  var a = f.userAgent.qb();
  if (!f.isString(a)) {
    return!1;
  }
  a = a.match(/Windows NT \d+.\d+/);
  if (f.yb(a) || !f.isArray(a)) {
    return!1;
  }
  a = a[0];
  a = a.match(/\d+.\d+/);
  if (f.yb(a) || !f.isArray(a)) {
    return!1;
  }
  a = a[0];
  return 6.2 <= parseFloat(a);
};
k.Y.Qb = {Hk:"ChromeOS", Lc:"Windows", dc:"Mac", cc:"Linux", OTHER:"Other"};
k.Y.ls = function() {
  return k.Y.Ta() ? k.Y.Qb.Hk : f.userAgent.Lc ? k.Y.Qb.Lc : f.userAgent.dc ? k.Y.Qb.dc : f.userAgent.cc ? k.Y.Qb.cc : k.Y.Qb.OTHER;
};
k.m = {};
k.m.rp = "Casting to {{receiverName}}";
k.m.vp = "Cast this tab to...";
k.m.wp = "Cast this tab (audio) to...";
k.m.up = "Cast entire screen to...";
k.m.sp = "Cast {{v2AppDomain}} to...";
k.m.tp = "Cast {{v2AppDomain}}";
k.m.yp = "Cast this tab";
k.m.fq = "Stop casting";
k.m.xp = "Cast {{v2AppDomain}}";
k.m.Pp = "Bug or Error";
k.m.Rp = "Feature Request";
k.m.Tp = "Tab/Desktop Projection Quality";
k.m.Qp = "Device Discovery";
k.m.Sp = "Other";
k.m.Vp = "Freezes";
k.m.Yp = "Jerky";
k.m.bq = "Occasional Stutter";
k.m.aq = "Smooth";
k.m.Zp = "Perfect";
k.m.Jp = "N/A";
k.m.cq = "Unwatchable";
k.m.$p = "Poor";
k.m.Up = "Acceptable";
k.m.Wp = "Good - DVD";
k.m.Xp = "Great - HD";
k.m.Gp = "Unintelligible";
k.m.Fp = "Poor";
k.m.Cp = "Acceptable - FM";
k.m.Dp = "Good";
k.m.Ep = "Perfect";
k.m.Hp = "Do you want to discard the feedback?";
k.m.Mp = "Sending feedback...";
k.m.Np = "Unable to send feedback. Please try again later.";
k.m.Op = "Thank you for sending feedback.";
k.m.Lp = "Failed to send feedback. Retrying (this is attempt #{{attemptNumber}})...";
k.m.Dm = "Standard (480p)";
k.m.Bm = "High (720p)";
k.m.Cm = "Extreme (720p high bitrate)";
k.m.dq = "Google Cast extension options";
k.m.Kp = "Google Cast feedback";
k.m.Ap = "The Google Cast extension enables you to find and play content on your Chromecast device from your Chrome browser.\nWhen on Cast optimized sites, you'll see new options that let you play video on your TV via Chromecast - using your computer as a remote to browse for videos and to control playback.\nYou can also cast any of your tabs in Chrome to your TV, letting you enjoy sites, photos, or even video from the best screen in your home. Note that this feature is still in beta, and requires a fast computer and Wi-Fi network.\nChromecast hardware is required to use this extension. To find out more, visit http://google.com/chromecast.\nBy installing this item, you agree to the Google Terms of Service and Privacy Policy at https://www.google.com/intl/en/policies/.";
k.m.pp = "The Google Cast extension enables you to find and play content on your Chromecast device from your Chrome browser.\nThis is the *BETA* channel of the Google Cast extension.  It is intended for developers and advanced users who want early access to upcoming APIs and features in advance of public release.  Most users should install the stable Google Cast extension (https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd). The beta channel will often be less stable and contain more bugs.\nBy installing this item, you agree to the Google Terms of Service and Privacy Policy at https://www.google.com/intl/en/policies/.";
k.m.Bp = "Send content to your Chromecast and other devices that support Google Cast.";
k.m.zp = "Enter Hangout name";
k.m.qp = "Casting...";
k.m.Ip = "Your Chrome version, operating system version, Cast extension options, mirroring performance stats, and communication channel diagnostic logs will be submitted in addition to any information you choose to include above. This feedback is used to diagnose problems and help improve the extension. Any personal information you submit, whether explicitly or incidentally will be protected in accordance with our privacy policies. By submitting this feedback, you agree that Google may use feedback that you provide to improve any Google product or service.";
f.userAgent.product = {};
f.userAgent.product.Fh = !1;
f.userAgent.product.Dh = !1;
f.userAgent.product.Yb = !1;
f.userAgent.product.Xb = !1;
f.userAgent.product.Wb = !1;
f.userAgent.product.Eh = !1;
f.userAgent.product.Jh = !1;
f.userAgent.product.Sa = f.userAgent.be || f.userAgent.de || f.userAgent.product.Fh || f.userAgent.product.Dh || f.userAgent.product.Yb || f.userAgent.product.Xb || f.userAgent.product.Wb || f.userAgent.product.Eh || f.userAgent.product.Jh;
f.userAgent.product.mc = function() {
  f.userAgent.product.Tg = !1;
  f.userAgent.product.Rg = !1;
  f.userAgent.product.Vg = !1;
  f.userAgent.product.Ug = !1;
  f.userAgent.product.Qg = !1;
  f.userAgent.product.Sg = !1;
  f.userAgent.product.Wg = !1;
  var a = f.userAgent.qb();
  a && (-1 != a.indexOf("Firefox") ? f.userAgent.product.Tg = !0 : -1 != a.indexOf("Camino") ? f.userAgent.product.Rg = !0 : -1 != a.indexOf("iPad") ? f.userAgent.product.Ug = !0 : -1 != a.indexOf("iPhone") || -1 != a.indexOf("iPod") ? f.userAgent.product.Vg = !0 : -1 != a.indexOf("Chrome") ? f.userAgent.product.Sg = !0 : -1 != a.indexOf("Android") ? f.userAgent.product.Qg = !0 : -1 != a.indexOf("Safari") && (f.userAgent.product.Wg = !0));
};
f.userAgent.product.Sa || f.userAgent.product.mc();
f.userAgent.product.Lb = f.userAgent.Lb;
f.userAgent.product.ab = f.userAgent.ab;
f.userAgent.product.Tk = f.userAgent.product.Sa ? f.userAgent.product.Fh : f.userAgent.product.Tg;
f.userAgent.product.Sk = f.userAgent.product.Sa ? f.userAgent.product.Dh : f.userAgent.product.Rg;
f.userAgent.product.vg = f.userAgent.product.Sa ? f.userAgent.product.Yb : f.userAgent.product.Vg;
f.userAgent.product.ug = f.userAgent.product.Sa ? f.userAgent.product.Xb : f.userAgent.product.Ug;
f.userAgent.product.ANDROID = f.userAgent.product.Sa ? f.userAgent.product.Wb : f.userAgent.product.Qg;
f.userAgent.product.CHROME = f.userAgent.product.Sa ? f.userAgent.product.Eh : f.userAgent.product.Sg;
f.userAgent.product.wg = f.userAgent.product.Sa ? f.userAgent.product.Jh : f.userAgent.product.Wg;
f.userAgent.product.ie = function() {
  if (f.userAgent.product.Tk) {
    return f.userAgent.product.rb(/Firefox\/([0-9.]+)/);
  }
  if (f.userAgent.product.ab || f.userAgent.product.Lb) {
    return f.userAgent.VERSION;
  }
  if (f.userAgent.product.CHROME) {
    return f.userAgent.product.rb(/Chrome\/([0-9.]+)/);
  }
  if (f.userAgent.product.wg) {
    return f.userAgent.product.rb(/Version\/([0-9.]+)/);
  }
  if (f.userAgent.product.vg || f.userAgent.product.ug) {
    var a = f.userAgent.product.xg(/Version\/(\S+).*Mobile\/(\S+)/);
    if (a) {
      return a[1] + "." + a[2];
    }
  } else {
    if (f.userAgent.product.ANDROID) {
      return(a = f.userAgent.product.rb(/Android\s+([0-9.]+)/)) ? a : f.userAgent.product.rb(/Version\/([0-9.]+)/);
    }
    if (f.userAgent.product.Sk) {
      return f.userAgent.product.rb(/Camino\/([0-9.]+)/);
    }
  }
  return "";
};
f.userAgent.product.rb = function(a) {
  return(a = f.userAgent.product.xg(a)) ? a[1] : "";
};
f.userAgent.product.xg = function(a) {
  return a.exec(f.userAgent.qb());
};
f.userAgent.product.VERSION = f.userAgent.product.ie();
f.userAgent.product.vb = function(a) {
  return 0 <= f.b.hb(f.userAgent.product.VERSION, a);
};
k.g = {};
k.g.Oq = {fn:"webrtc", eo:"cast_streaming"};
k.g.to = {Kq:"tab", vo:"desktop"};
k.g.Ii = {Wq:"VP8", Fi:"CAST1", Lo:"H264", wq:"rtx"};
k.g.s = function() {
  this.audioBitrate = this.minHeight = this.minWidth = this.videoQuality = this.maxVideoBitrate = this.minVideoBitrate = -1;
  this.bufferedMode = k.g.s.Ei.Hi;
  this.bufferSizeMillis = k.g.s.Gi;
  this.minCastLatencyMillis = this.maxCastLatencyMillis = k.g.s.Xe;
  this.maxFrameRate = -1;
  this.pacerTargetBatchSize = 10;
  this.pacerMaxBatchSize = 20;
  this.dscpEnabled = f.userAgent.dc || f.userAgent.cc || k.Y.Ta() || k.Y.Ji();
  this.backgroundScanDisabled = this.mediaStreamingModeEnabled = !1;
  this.preferredVideoCodec = k.g.Ii.Fi;
  this.disableTDLS = !1;
  k.g.N.ad && this.update(k.g.N.ad.settings);
};
k.g.s.mm = {enablePacing:!0, enableAudioTcp:!0, enableVideoTcp:!0, enableAudioNack:!0, useOpus:!0, videoBitrate:!0, zoomModeEnabled:!0};
k.g.s.Do = !1;
k.g.s.Ei = {Zc:"off", Xn:"auto", Hi:"on"};
k.g.s.Jj = 100;
k.g.s.Hj = 1E4;
k.g.s.Ij = 56;
k.g.s.Gj = 128;
k.g.s.dk = 100;
k.g.s.ck = 100;
k.g.s.bk = 1;
k.g.s.fp = 1;
k.g.s.wo = 30;
k.g.s.Tq = k.g.Ph ? {"848x480":[848, 480], "1280x720":[1280, 720], "1920x1072":[1920, 1072]} : {"854x480":[854, 480], "1280x720":[1280, 720], "1920x1080":[1920, 1080]};
k.g.s.prototype.update = function(a) {
  for (var c in this) {
    f.isFunction(this[c]) || f.U(a[c]) && f.ea(this[c]) == f.ea(a[c]) && (this[c] = a[c]);
  }
};
k.g.s.prototype.isEqual = function(a) {
  for (var c in this) {
    if (!f.isFunction(this[c]) && this[c] !== a[c]) {
      return!1;
    }
  }
  return!0;
};
k.g.s.Kf = function(a) {
  return Math.min(k.g.s.Hj, Math.max(k.g.s.Jj, a));
};
b = k.g.s.prototype;
b.vj = function(a) {
  f.isString(a) && (a = parseInt(a, 10));
  this.maxVideoBitrate = a = k.g.s.Kf(a);
  this.minVideoBitrate = Math.min(this.minVideoBitrate, this.maxVideoBitrate);
};
b.xj = function(a) {
  f.isString(a) && (a = parseInt(a, 10));
  this.minVideoBitrate = a = k.g.s.Kf(a);
  this.maxVideoBitrate = Math.max(this.maxVideoBitrate, this.minVideoBitrate);
};
b.zj = function(a) {
  f.isString(a) && (a = parseInt(a, 10));
  0 < a && (this.videoQuality = a);
};
b.tj = function(a) {
  f.isString(a) && (a = parseInt(a, 10));
  this.audioBitrate = Math.min(k.g.s.Gj, Math.max(k.g.s.Ij, a));
};
b.yj = function(a) {
  f.isString(a) && (a = parseInt(a, 10));
  this.minWidth = Math.max(k.g.s.dk, a);
};
b.wj = function(a) {
  f.isString(a) && (a = parseInt(a, 10));
  this.minHeight = Math.max(k.g.s.ck, a);
};
b.uj = function(a) {
  f.isString(a) && (a = Math.round(parseFloat(a)));
  isFinite(a) && (this.maxFrameRate = Math.max(k.g.s.bk, a));
};
k.g.s.Gi = 500;
k.g.s.Xe = 400;
k.g.N = function(a, c, d, e, g, h, l, m, n) {
  this.id = a;
  this.name = c;
  this.settings = new k.g.s;
  this.settings.yj(d);
  this.settings.wj(e);
  this.settings.uj(g);
  this.settings.xj(h);
  this.settings.vj(l);
  this.settings.zj(m);
  this.settings.tj(n);
};
k.g.N.Nh = new k.g.N("high", k.m.Bm, 1280, 720, 30, 2E3, 2500, 56, 128);
k.g.Ph = k.Y.Ta() && f.userAgent.product.vb("37");
k.g.N.ym = new k.g.N("low", k.m.Dm, k.g.Ph ? 848 : 854, 480, 30, 750, 1500, 56, 128);
k.g.N.wm = new k.g.N("highest", k.m.Cm, 1280, 720, 30, 4E3, 5E3, 56, 128);
k.g.N.ad = k.g.N.Nh;
k.g.N.Yh = [k.g.N.wm, k.g.N.Nh, k.g.N.ym];
k.g.N.ro = "custom";
k.g.N.ns = function(a) {
  return f.a.find(k.g.N.Yh, function(c) {
    return c.id == a;
  });
};
k.Vo = {Jo:"fatal", pd:"warning", kq:"notification"};
k.Wo = {Tn:"activity_error", CHANNEL_ERROR:"channel_error", ap:"launch_failure", xo:"device_offline", co:"bad_device", Eq:"session_quality_network", Dq:"session_quality_encoding", Xo:"known_issue_bad_intel_cpu", ko:"chrome_too_old_for_v2", Pq:"unable_to_cast_streaming", gp:"low_perf_on_current_chrome"};
k.popup = {};
k.popup.Bq = {Un:"act_on_issue", Jq:"stop_activity", qq:"play_media", nq:"pause_media", Gq:"set_mute", CAST_THIS_TAB:"cast_this_tab", fo:"cast_this_tab_audio", CREATE_SESSION:"create_session", Zo:"launch_desktop_mirror", INIT:"init", Qq:"update_settings", vq:"remove_receiver", Oo:"initialize_castouts"};
k.popup.Ho = {op:"model_update"};
k.popup.$n = {Rq:"v1_app", Sq:"v2_app", qo:"custom_app", mp:"mirror_tab", lp:"mirror_screen"};
k.popup.Message = function(a, c) {
  this.type = a;
  this.message = c;
};
k.popup.Zn = function(a, c, d, e, g, h, l, m) {
  this.id = a;
  this.receiver = f.object.clone(c);
  this.activityType = d;
  this.iconUrl = e || null;
  this.title = g || "";
  this.mediaPlayerStatus = h || null;
  this.tabId = l || null;
  this.isLocal = m;
  this.allowStop = !0;
};
k.popup.Ab = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
k.popup.Ra = function(a, c, d, e) {
  this.id = a;
  this.uniqueId = c;
  this.name = d;
  this.receiverType = e;
  this.isInLaunch = this.manuallyAdded = !1;
  this.muted = null;
};
k.popup.Uo = function(a, c, d, e, g, h, l, m) {
  this.id = a;
  this.title = c;
  this.message = d;
  this.defaultActionText = e;
  this.optActionText = g || "";
  this.severity = h;
  this.activityId = l;
  this.isBlocking = m;
};
k.popup.xq = function(a, c) {
  this.receiver = a;
  this.activity = c;
};
k.popup.Yn = function(a, c) {
  this.id = a;
  this.isDefaultAction = c;
};
k.popup.ka = function(a, c, d, e, g, h, l) {
  this.statsCollectNotificationDismissed = f.La(d) ? d : !0;
  this.sendUsageEnabled = f.La(e) ? e : !0;
  this.castAppNotificationDismissed = f.La(a) ? a : !1;
  this.mirrorQualityId = c || k.g.N.ad.id;
  this.hangoutsEnabled = g || !1;
  this.hangoutsInitialized = h || !1;
  this.hangoutsDefaultDomain = l || "";
};
k.popup.iq = function(a, c, d, e, g, h, l) {
  this.receiverActs = a || [];
  this.issue = c;
  this.isV1AppInTab = h || !1;
  this.isV2AppInTab = !!l;
  this.v2AppDomain = l || null;
  this.currentActivity = d;
  this.desktopActivity = e;
  this.settings = g || new k.popup.ka;
};
k.popup.gq = function() {
  this.playerState = chrome.cast.media.Nb.IDLE;
  this.muted = null;
  this.supportedCommands = [chrome.cast.media.xh.PAUSE];
};
k.Mo = function() {
};
k.g.Fm = function(a) {
  this.deviceId = a;
  this.avgNetworkLatency = null;
};
k.g.Fm.prototype.update = function(a) {
  f.U(a.deviceId) && (this.deviceId = a.deviceId);
  f.U(a.avgNetworkLatency) && (this.avgNetworkLatency = a.avgNetworkLatency);
};
k.Config = {};
k.Config.nm = "30.0.1584.0";
k.Config.Kl = "dliochdbjfkdbacpmhlcpmleaejidimm";
k.Config.Xg = "boadgeojelhgndaghljhdicfkmllpafd";
k.Config.getId = function() {
  return f.ga(chrome.runtime) ? chrome.runtime.id : k.Config.Xg;
};
k.Config.$d = !0;
k.Config.Mn = function() {
  var a = k.Config.getId() === k.Config.Kl, c = k.Config.getId() === k.Config.Xg;
  if (!k.Config.$d && !a && !c) {
    switch(localStorage["test.extChannel"]) {
      case "stable":
        a = !1;
        c = !0;
        break;
      case "beta":
        a = !0;
        c = !1;
        break;
      default:
        c = a = !1;
    }
  }
  k.Config.nh = a;
  k.Config.oh = c;
};
k.Config.Mn();
k.Config.Rs = f.userAgent.product.vb(35);
k.Config.ct = "undefined" != typeof chrome && !!chrome.networkingPrivate && !!chrome.networkingPrivate.setWifiTDLSEnabledState && k.Y.Ta();
k.Config.Is = !!chrome.cast && !!chrome.cast.streaming && f.userAgent.product.vb(36);
k.Config.Ls = k.Y.Ta() && f.userAgent.product.vb(k.Config.nm) || f.userAgent.Lc && f.userAgent.product.vb(31);
k.Config.rn = function() {
  return 1 < k.Config.$d + k.Config.nh + k.Config.oh ? null : k.Config.$d ? "internal" : k.Config.nh ? "beta" : k.Config.oh ? "stable" : "staging";
};
f.i("getCastExtensionChannel", k.Config.rn);
k.So = function() {
};
k.g.Dk = "0F5096E8";
k.g.Ws = function(a) {
  return a == k.g.Dk;
};
f.debug.Q = {};
f.debug.Go = function() {
};
f.debug.Q.sb = [];
f.debug.Q.Md = [];
f.debug.Q.Kg = !1;
f.debug.Q.register = function(a) {
  f.debug.Q.sb[f.debug.Q.sb.length] = a;
  if (f.debug.Q.Kg) {
    for (var c = f.debug.Q.Md, d = 0;d < c.length;d++) {
      a(f.bind(c[d].wrap, c[d]));
    }
  }
};
f.debug.Q.ot = function(a) {
  f.debug.Q.Kg = !0;
  for (var c = f.bind(a.wrap, a), d = 0;d < f.debug.Q.sb.length;d++) {
    f.debug.Q.sb[d](c);
  }
  f.debug.Q.Md.push(a);
};
f.debug.Q.iu = function(a) {
  var c = f.debug.Q.Md;
  a = f.bind(a.Rn, a);
  for (var d = 0;d < f.debug.Q.sb.length;d++) {
    f.debug.Q.sb[d](a);
  }
  c.length--;
};
f.async = {};
f.async.ph = function(a) {
  f.global.setTimeout(function() {
    throw a;
  }, 0);
};
f.async.Ca = function(a, c, d) {
  var e = a;
  c && (e = f.bind(a, c));
  e = f.async.Ca.kh(e);
  !f.isFunction(f.global.setImmediate) || !d && f.global.Window && f.global.Window.prototype.setImmediate == f.global.setImmediate ? (f.async.Ca.mh || (f.async.Ca.mh = f.async.Ca.Il()), f.async.Ca.mh(e)) : f.global.setImmediate(e);
};
f.async.Ca.Il = function() {
  var a = f.global.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var c = a.contentWindow, a = c.document;
    a.open();
    a.write("");
    a.close();
    var d = "callImmediate" + Math.random(), e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host, a = f.bind(function(a) {
      if (("*" == e || a.origin == e) && a.data == d) {
        this.port1.onmessage();
      }
    }, this);
    c.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      c.postMessage(d, e);
    }};
  });
  if ("undefined" !== typeof a && !f.c.userAgent.browser.Uc()) {
    var c = new a, d = {}, e = d;
    c.port1.onmessage = function() {
      if (f.ga(d.next)) {
        d = d.next;
        var a = d.hf;
        d.hf = null;
        a();
      }
    };
    return function(a) {
      e.next = {hf:a};
      e = e.next;
      c.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var c = document.createElement("script");
    c.onreadystatechange = function() {
      c.onreadystatechange = null;
      c.parentNode.removeChild(c);
      c = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(c);
  } : function(a) {
    f.global.setTimeout(a, 0);
  };
};
f.async.Ca.kh = f.A.identity;
f.debug.Q.register(function(a) {
  f.async.Ca.kh = a;
});
f.Qa = {};
f.Qa.cb = {};
f.Qa.cb.Yd = [];
f.Qa.cb.Pt = function() {
  for (var a = f.Qa.cb.Yd, c = 0;c < a.length;c++) {
    f.Qa.cb.Yd[c]();
  }
};
f.Qa.cb.Pn = function(a) {
  f.Qa.cb.Yd.push(a);
};
f.async.run = function(a, c) {
  f.async.run.Oc || f.async.run.Hl();
  f.async.run.Pc || (f.async.run.Oc(), f.async.run.Pc = !0);
  f.async.run.Ub.push(new f.async.run.El(a, c));
};
f.async.run.Hl = function() {
  if (f.global.Promise && f.global.Promise.resolve) {
    var a = f.global.Promise.resolve();
    f.async.run.Oc = function() {
      a.then(f.async.run.Zd);
    };
  } else {
    f.async.run.Oc = function() {
      f.async.Ca(f.async.run.Zd);
    };
  }
};
f.async.run.es = function() {
  f.async.run.Oc = function() {
    f.async.Ca(f.async.run.Zd);
  };
};
f.async.run.Pc = !1;
f.async.run.Ub = [];
f.Ga && (f.async.run.Jn = function() {
  f.async.run.Pc = !1;
  f.async.run.Ub = [];
}, f.Qa.cb.Pn(f.async.run.Jn));
f.async.run.Zd = function() {
  for (;f.async.run.Ub.length;) {
    var a = f.async.run.Ub;
    f.async.run.Ub = [];
    for (var c = 0;c < a.length;c++) {
      var d = a[c];
      try {
        d.Ll.call(d.scope);
      } catch (e) {
        f.async.ph(e);
      }
    }
  }
  f.async.run.Pc = !1;
};
f.async.run.El = function(a, c) {
  this.Ll = a;
  this.scope = c;
};
f.promise = {};
f.promise.Cq = function() {
};
f.Thenable = function() {
};
f.Thenable.prototype.then = function() {
};
f.Thenable.Mg = "$goog_Thenable";
f.Thenable.Qh = function(a) {
  f.t(a.prototype, "then", a.prototype.then);
  a.prototype[f.Thenable.Mg] = !0;
};
f.Thenable.$j = function(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a[f.Thenable.Mg];
  } catch (c) {
    return!1;
  }
};
f.Promise = function(a, c) {
  this.M = f.Promise.F.ua;
  this.$c = void 0;
  this.ma = this.sa = null;
  this.dd = !1;
  0 < f.Promise.Xa ? this.fc = 0 : 0 == f.Promise.Xa && (this.ec = !1);
  f.Promise.Cb && (this.fd = [], this.Ye(Error("created")), this.Me = 0);
  try {
    var d = this;
    a.call(c, function(a) {
      d.va(f.Promise.F.bc, a);
    }, function(a) {
      if (f.Ga && !(a instanceof f.Promise.jb)) {
        try {
          if (a instanceof Error) {
            throw a;
          }
          throw Error("Promise rejected.");
        } catch (c) {
        }
      }
      d.va(f.Promise.F.xa, a);
    });
  } catch (e) {
    this.va(f.Promise.F.xa, e);
  }
};
f.Promise.Cb = !1;
f.Promise.Xa = 0;
f.Promise.F = {ua:0, Gf:1, bc:2, xa:3};
f.Promise.resolve = function(a) {
  return new f.Promise(function(c) {
    c(a);
  });
};
f.Promise.reject = function(a) {
  return new f.Promise(function(c, d) {
    d(a);
  });
};
f.Promise.race = function(a) {
  return new f.Promise(function(c, d) {
    a.length || c(void 0);
    for (var e = 0, g;g = a[e];e++) {
      g.then(c, d);
    }
  });
};
f.Promise.all = function(a) {
  return new f.Promise(function(c, d) {
    var e = a.length, g = [];
    if (e) {
      for (var h = function(a, d) {
        e--;
        g[a] = d;
        0 == e && c(g);
      }, l = function(a) {
        d(a);
      }, m = 0, n;n = a[m];m++) {
        n.then(f.xb(h, m), l);
      }
    } else {
      c(g);
    }
  });
};
f.Promise.ds = function(a) {
  return new f.Promise(function(c, d) {
    var e = a.length, g = [];
    if (e) {
      for (var h = function(a) {
        c(a);
      }, l = function(a, c) {
        e--;
        g[a] = c;
        0 == e && d(g);
      }, m = 0, n;n = a[m];m++) {
        n.then(h, f.xb(l, m));
      }
    } else {
      c(void 0);
    }
  });
};
f.Promise.ou = function() {
  var a, c, d = new f.Promise(function(d, g) {
    a = d;
    c = g;
  });
  return new f.Promise.Nm(d, a, c);
};
f.Promise.prototype.then = function(a, c, d) {
  f.Promise.Cb && this.Ye(Error("then"));
  return this.Tl(f.isFunction(a) ? a : null, f.isFunction(c) ? c : null, d);
};
f.Thenable.Qh(f.Promise);
b = f.Promise.prototype;
b.cancel = function(a) {
  this.M == f.Promise.F.ua && f.async.run(function() {
    var c = new f.Promise.jb(a);
    this.Jf(c);
  }, this);
};
b.Jf = function(a) {
  this.M == f.Promise.F.ua && (this.sa ? this.sa.mk(this, a) : this.va(f.Promise.F.xa, a));
};
b.mk = function(a, c) {
  if (this.ma) {
    for (var d = 0, e = -1, g = 0, h;h = this.ma[g];g++) {
      if (h = h.Gb) {
        if (d++, h == a && (e = g), 0 <= e && 1 < d) {
          break;
        }
      }
    }
    0 <= e && (this.M == f.Promise.F.ua && 1 == d ? this.Jf(c) : (d = this.ma.splice(e, 1)[0], this.Df(d, f.Promise.F.xa, c)));
  }
};
b.Jk = function(a) {
  this.ma && this.ma.length || this.M != f.Promise.F.bc && this.M != f.Promise.F.xa || this.Af();
  this.ma || (this.ma = []);
  this.ma.push(a);
};
b.Tl = function(a, c, d) {
  var e = {Gb:null, Rf:null, Sf:null};
  e.Gb = new f.Promise(function(g, h) {
    e.Rf = a ? function(c) {
      try {
        var e = a.call(d, c);
        g(e);
      } catch (n) {
        h(n);
      }
    } : g;
    e.Sf = c ? function(a) {
      try {
        var e = c.call(d, a);
        !f.ga(e) && a instanceof f.Promise.jb ? h(a) : g(e);
      } catch (n) {
        h(n);
      }
    } : h;
  });
  e.Gb.sa = this;
  this.Jk(e);
  return e.Gb;
};
b.Hf = function(a) {
  this.M = f.Promise.F.ua;
  this.va(f.Promise.F.bc, a);
};
b.If = function(a) {
  this.M = f.Promise.F.ua;
  this.va(f.Promise.F.xa, a);
};
b.va = function(a, c) {
  if (this.M == f.Promise.F.ua) {
    if (this == c) {
      a = f.Promise.F.xa, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (f.Thenable.$j(c)) {
        this.M = f.Promise.F.Gf;
        c.then(this.Hf, this.If, this);
        return;
      }
      if (f.isObject(c)) {
        try {
          var d = c.then;
          if (f.isFunction(d)) {
            this.ak(c, d);
            return;
          }
        } catch (e) {
          a = f.Promise.F.xa, c = e;
        }
      }
    }
    this.$c = c;
    this.M = a;
    this.Af();
    a != f.Promise.F.xa || c instanceof f.Promise.jb || f.Promise.Zj(this, c);
  }
};
b.ak = function(a, c) {
  this.M = f.Promise.F.Gf;
  var d = this, e = !1, g = function(a) {
    e || (e = !0, d.Hf(a));
  }, h = function(a) {
    e || (e = !0, d.If(a));
  };
  try {
    c.call(a, g, h);
  } catch (l) {
    h(l);
  }
};
b.Af = function() {
  this.dd || (this.dd = !0, f.async.run(this.cm, this));
};
b.cm = function() {
  for (;this.ma && this.ma.length;) {
    var a = this.ma;
    this.ma = [];
    for (var c = 0;c < a.length;c++) {
      f.Promise.Cb && this.Me++, this.Df(a[c], this.M, this.$c);
    }
  }
  this.dd = !1;
};
b.Df = function(a, c, d) {
  c == f.Promise.F.bc ? a.Rf(d) : (a.Gb && this.Mk(), a.Sf(d));
};
b.Ye = function(a) {
  if (f.Promise.Cb && f.isString(a.stack)) {
    var c = a.stack.split("\n", 4)[3];
    a = a.message;
    a += Array(11 - a.length).join(" ");
    this.fd.push(a + c);
  }
};
b.bh = function(a) {
  if (f.Promise.Cb && a && f.isString(a.stack) && this.fd.length) {
    for (var c = ["Promise trace:"], d = this;d;d = d.sa) {
      for (var e = this.Me;0 <= e;e--) {
        c.push(d.fd[e]);
      }
      c.push("Value: [" + (d.M == f.Promise.F.xa ? "REJECTED" : "FULFILLED") + "] <" + String(d.$c) + ">");
    }
    a.stack += "\n\n" + c.join("\n");
  }
};
b.Mk = function() {
  if (0 < f.Promise.Xa) {
    for (var a = this;a && a.fc;a = a.sa) {
      f.global.clearTimeout(a.fc), a.fc = 0;
    }
  } else {
    if (0 == f.Promise.Xa) {
      for (a = this;a && a.ec;a = a.sa) {
        a.ec = !1;
      }
    }
  }
};
f.Promise.Zj = function(a, c) {
  0 < f.Promise.Xa ? a.fc = f.global.setTimeout(function() {
    a.bh(c);
    f.Promise.Xd.call(null, c);
  }, f.Promise.Xa) : 0 == f.Promise.Xa && (a.ec = !0, f.async.run(function() {
    a.ec && (a.bh(c), f.Promise.Xd.call(null, c));
  }));
};
f.Promise.Xd = f.async.ph;
f.Promise.Mt = function(a) {
  f.Promise.Xd = a;
};
f.Promise.jb = function(a) {
  f.debug.Error.call(this, a);
};
f.Da(f.Promise.jb, f.debug.Error);
f.Promise.jb.prototype.name = "cancel";
f.Promise.Nm = function(a, c, d) {
  this.promise = a;
  this.resolve = c;
  this.reject = d;
};
f.result = {};
f.result.fa = function() {
};
f.result.fa.prototype.Ig = function() {
};
f.result.fa.Ya = {Qf:"success", ERROR:"error", ua:"pending"};
b = f.result.fa.prototype;
b.getState = function() {
};
b.Hg = function() {
};
b.getError = function() {
};
b.cancel = function() {
};
b.yc = function() {
};
f.result.fa.Gd = function() {
};
f.Da(f.result.fa.Gd, Error);
f.result.Oa = function() {
  this.M = f.result.fa.Ya.ua;
  this.ta = [];
  this.vd = this.Ef = void 0;
};
f.Thenable.Qh(f.result.Oa);
f.result.Oa.yd = function() {
  f.debug.Error.call(this, "Multiple attempts to set the state of this Result");
};
f.Da(f.result.Oa.yd, f.debug.Error);
b = f.result.Oa.prototype;
b.getState = function() {
  return this.M;
};
b.Hg = function() {
  return this.Ef;
};
b.getError = function() {
  return this.vd;
};
b.Ig = function(a, c) {
  this.xc() ? this.ta.push({callback:a, scope:c || null}) : a.call(c, this);
};
b.Ql = function(a) {
  if (this.xc()) {
    this.Ef = a, this.M = f.result.fa.Ya.Qf, this.Pf();
  } else {
    if (!this.yc()) {
      throw new f.result.Oa.yd;
    }
  }
};
b.Eg = function(a) {
  if (this.xc()) {
    this.vd = a, this.M = f.result.fa.Ya.ERROR, this.Pf();
  } else {
    if (!this.yc()) {
      throw new f.result.Oa.yd;
    }
  }
};
b.Pf = function() {
  var a = this.ta;
  this.ta = [];
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    d.callback.call(d.scope, this);
  }
};
b.xc = function() {
  return this.M == f.result.fa.Ya.ua;
};
b.cancel = function() {
  return this.xc() ? (this.Eg(new f.result.fa.Gd), !0) : !1;
};
b.yc = function() {
  return this.M == f.result.fa.Ya.ERROR && this.vd instanceof f.result.fa.Gd;
};
b.then = function(a, c, d) {
  var e, g, h = new f.Promise(function(a, c) {
    e = a;
    g = c;
  });
  this.Ig(function(a) {
    a.yc() ? h.cancel() : a.getState() == f.result.fa.Ya.Qf ? e(a.Hg()) : a.getState() == f.result.fa.Ya.ERROR && g(a.getError());
  });
  return h.then(a, c, d);
};
f.result.Oa.gs = function(a) {
  var c = new f.result.Oa;
  a.then(c.Ql, c.Eg, c);
  return c;
};
k.ji = function() {
  this.hasNetworkSoftware = this.networkDescription = this.gpu = this.cpu = this.googleUsername = null;
};
k.W = {Ge:"receiverIdToken", oi:"mirrorSettings", ti:"userNotification", si:"siteTokens", hi:"feedback", ii:"fixedIps", gi:"enableCloud", ei:"cloudDevice", li:"hangoutsStatus", ki:"hangoutsDefaultDomain", ri:"sendStatsEnabled", ni:"lastMirrorDataAutoSubmitTimeMillis", pi:"mirrorPerformanceData", qi:"oneOffChangeVersion"};
k.mq = function() {
};
k.Im = function(a) {
  this.Ua = a;
};
k.Im.prototype.ib = function() {
  return this.Ua;
};
k.Um = {};
k.Um.io = [];
k.ui = function() {
  this.dismissClicks = this.earliestTimeToShowWarning = this.sessionsBeforeWarning = 0;
  this.enhancedCastingNotificationDismissed = this.statsCollectNotificationDismissed = this.intelBadCpuWarningDismissed = this.castAppNotificationDismissed = !1;
};
k.ka = function() {
  this.S = {};
  this.sl();
  this.tg = this.Rk = this.Pk = !1;
};
f.hn(k.ka);
k.ka.mi = {fi:"disabled", Pa:"enabled", No:"initialized"};
k.ka.so = "ChromeCast";
k.ka.hp = 20;
k.ka.mm = {useCastStreaming:!0, tabCaptureSettings:!0, appEngineReceiverIds:!0, receiverUrl:!0, flingEnabled:!0, customReceiverVersion:!0, enableCustomReceiverVersion:!0, sendUsageEnabled:!0, mirrorLinkProtection:!0, autoOptedInCastStreaming:!0};
k.ka.prototype.sl = function() {
  this.S[k.W.oi] = new k.g.s;
  this.S[k.W.hi] = new k.ji;
  this.S[k.W.ti] = new k.ui;
  this.S[k.W.si] = {};
  this.S[k.W.ri] = !0;
  this.S[k.W.ii] = [];
  this.S[k.W.gi] = !1;
  this.S[k.W.ei] = {};
  this.S[k.W.li] = k.ka.mi.fi;
  this.S[k.W.ki] = "";
  this.S[k.W.ni] = 0;
  this.S[k.W.pi] = [];
  this.S[k.W.qi] = 0;
};
k.ka.prototype.di = function() {
  this.Pk ? (f.log.info(this.vc, "Saving settings to storage."), this.Rk ? (localStorage.settings = JSON.stringify(this.S), this.tg && (chrome.storage.local.clear(), this.tg = !1)) : chrome.storage.local.set(this.S, f.bind(function() {
    chrome.runtime.lastError ? f.log.Mc(this.vc, "Failed to save settings to chrome.storage.") : f.log.info(this.vc, "Successfully saved settings to storage.");
  }, this))) : f.log.Mc(this.vc, "Aborting saving settings before initialization.");
};
k.ka.prototype.fj = function() {
  var a = this.S[k.W.Ge];
  a || (a = f.b.ci(), this.S[k.W.Ge] = a, this.di());
  return a;
};
f.h = {};
f.h.Aj = function(a) {
  for (var c = [], d = 0, e = 0;e < a.length;e++) {
    for (var g = a.charCodeAt(e);255 < g;) {
      c[d++] = g & 255, g >>= 8;
    }
    c[d++] = g;
  }
  return c;
};
f.h.Bj = function(a) {
  if (8192 > a.length) {
    return String.fromCharCode.apply(null, a);
  }
  for (var c = "", d = 0;d < a.length;d += 8192) {
    var e = f.a.slice(a, d, d + 8192), c = c + String.fromCharCode.apply(null, e)
  }
  return c;
};
f.h.tr = function(a) {
  return f.a.map(a, function(a) {
    a = a.toString(16);
    return 1 < a.length ? a : "0" + a;
  }).join("");
};
f.h.Bs = function(a) {
  for (var c = [], d = 0;d < a.length;d += 2) {
    c.push(parseInt(a.substring(d, d + 2), 16));
  }
  return c;
};
f.h.Wt = function(a) {
  a = a.replace(/\r\n/g, "\n");
  for (var c = [], d = 0, e = 0;e < a.length;e++) {
    var g = a.charCodeAt(e);
    128 > g ? c[d++] = g : (2048 > g ? c[d++] = g >> 6 | 192 : (c[d++] = g >> 12 | 224, c[d++] = g >> 6 & 63 | 128), c[d++] = g & 63 | 128);
  }
  return c;
};
f.h.mu = function(a) {
  for (var c = [], d = 0, e = 0;d < a.length;) {
    var g = a[d++];
    if (128 > g) {
      c[e++] = String.fromCharCode(g);
    } else {
      if (191 < g && 224 > g) {
        var h = a[d++];
        c[e++] = String.fromCharCode((g & 31) << 6 | h & 63);
      } else {
        var h = a[d++], l = a[d++];
        c[e++] = String.fromCharCode((g & 15) << 12 | (h & 63) << 6 | l & 63);
      }
    }
  }
  return c.join("");
};
f.h.ru = function(a, c) {
  for (var d = [], e = 0;e < a.length;e++) {
    d.push(a[e] ^ c[e]);
  }
  return d;
};
f.h.n = {};
f.h.n.Fb = null;
f.h.n.pc = null;
f.h.n.ic = null;
f.h.n.oc = null;
f.h.n.rd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
f.h.n.qd = f.h.n.rd + "+/=";
f.h.n.of = f.h.n.rd + "-_.";
f.h.n.yf = f.userAgent.Lg || f.userAgent.zb || f.userAgent.Lb || "function" == typeof f.global.atob;
f.h.n.pf = function(a, c) {
  if (!f.K(a)) {
    throw Error("encodeByteArray takes an array as a parameter");
  }
  f.h.n.mc();
  for (var d = c ? f.h.n.ic : f.h.n.Fb, e = [], g = 0;g < a.length;g += 3) {
    var h = a[g], l = g + 1 < a.length, m = l ? a[g + 1] : 0, n = g + 2 < a.length, p = n ? a[g + 2] : 0, q = h >> 2, h = (h & 3) << 4 | m >> 4, m = (m & 15) << 2 | p >> 6, p = p & 63;
    n || (p = 64, l || (m = 64));
    e.push(d[q], d[h], d[m], d[p]);
  }
  return e.join("");
};
f.h.n.Vr = function(a, c) {
  return f.h.n.yf && !c ? f.global.btoa(a) : f.h.n.pf(f.h.Aj(a), c);
};
f.h.n.Rr = function(a, c) {
  return f.h.n.yf && !c ? f.global.atob(a) : f.h.Bj(f.h.n.Cj(a, c));
};
f.h.n.Cj = function(a, c) {
  f.h.n.mc();
  for (var d = c ? f.h.n.oc : f.h.n.pc, e = [], g = 0;g < a.length;) {
    var h = d[a.charAt(g++)], l = g < a.length ? d[a.charAt(g)] : 0;
    ++g;
    var m = g < a.length ? d[a.charAt(g)] : 64;
    ++g;
    var n = g < a.length ? d[a.charAt(g)] : 64;
    ++g;
    if (null == h || null == l || null == m || null == n) {
      throw Error();
    }
    e.push(h << 2 | l >> 4);
    64 != m && (e.push(l << 4 & 240 | m >> 2), 64 != n && e.push(m << 6 & 192 | n));
  }
  return e;
};
f.h.n.mc = function() {
  if (!f.h.n.Fb) {
    f.h.n.Fb = {};
    f.h.n.pc = {};
    f.h.n.ic = {};
    f.h.n.oc = {};
    for (var a = 0;a < f.h.n.qd.length;a++) {
      f.h.n.Fb[a] = f.h.n.qd.charAt(a), f.h.n.pc[f.h.n.Fb[a]] = a, f.h.n.ic[a] = f.h.n.of.charAt(a), f.h.n.oc[f.h.n.ic[a]] = a, a >= f.h.n.rd.length && (f.h.n.pc[f.h.n.of.charAt(a)] = a, f.h.n.oc[f.h.n.qd.charAt(a)] = a);
    }
  }
};
f.h.zf = function() {
  this.Na = -1;
};
f.h.Sha1 = function() {
  f.h.zf.call(this);
  this.Na = 64;
  this.J = [];
  this.nd = [];
  this.oj = [];
  this.tc = [];
  this.tc[0] = 128;
  for (var a = 1;a < this.Na;++a) {
    this.tc[a] = 0;
  }
  this.nc = this.nb = 0;
  this.reset();
};
f.Da(f.h.Sha1, f.h.zf);
f.h.Sha1.prototype.reset = function() {
  this.J[0] = 1732584193;
  this.J[1] = 4023233417;
  this.J[2] = 2562383102;
  this.J[3] = 271733878;
  this.J[4] = 3285377520;
  this.nc = this.nb = 0;
};
f.h.Sha1.prototype.Cc = function(a, c) {
  c || (c = 0);
  var d = this.oj;
  if (f.isString(a)) {
    for (var e = 0;16 > e;e++) {
      d[e] = a.charCodeAt(c) << 24 | a.charCodeAt(c + 1) << 16 | a.charCodeAt(c + 2) << 8 | a.charCodeAt(c + 3), c += 4;
    }
  } else {
    for (e = 0;16 > e;e++) {
      d[e] = a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3], c += 4;
    }
  }
  for (e = 16;80 > e;e++) {
    var g = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
    d[e] = (g << 1 | g >>> 31) & 4294967295;
  }
  for (var h = this.J[0], l = this.J[1], m = this.J[2], n = this.J[3], p = this.J[4], q, e = 0;80 > e;e++) {
    40 > e ? 20 > e ? (g = n ^ l & (m ^ n), q = 1518500249) : (g = l ^ m ^ n, q = 1859775393) : 60 > e ? (g = l & m | n & (l | m), q = 2400959708) : (g = l ^ m ^ n, q = 3395469782), g = (h << 5 | h >>> 27) + g + p + q + d[e] & 4294967295, p = n, n = m, m = (l << 30 | l >>> 2) & 4294967295, l = h, h = g;
  }
  this.J[0] = this.J[0] + h & 4294967295;
  this.J[1] = this.J[1] + l & 4294967295;
  this.J[2] = this.J[2] + m & 4294967295;
  this.J[3] = this.J[3] + n & 4294967295;
  this.J[4] = this.J[4] + p & 4294967295;
};
f.h.Sha1.prototype.update = function(a, c) {
  if (null != a) {
    f.ga(c) || (c = a.length);
    for (var d = c - this.Na, e = 0, g = this.nd, h = this.nb;e < c;) {
      if (0 == h) {
        for (;e <= d;) {
          this.Cc(a, e), e += this.Na;
        }
      }
      if (f.isString(a)) {
        for (;e < c;) {
          if (g[h] = a.charCodeAt(e), ++h, ++e, h == this.Na) {
            this.Cc(g);
            h = 0;
            break;
          }
        }
      } else {
        for (;e < c;) {
          if (g[h] = a[e], ++h, ++e, h == this.Na) {
            this.Cc(g);
            h = 0;
            break;
          }
        }
      }
    }
    this.nb = h;
    this.nc += c;
  }
};
f.h.Sha1.prototype.ej = function() {
  var a = [], c = 8 * this.nc;
  56 > this.nb ? this.update(this.tc, 56 - this.nb) : this.update(this.tc, this.Na - (this.nb - 56));
  for (var d = this.Na - 1;56 <= d;d--) {
    this.nd[d] = c & 255, c /= 256;
  }
  this.Cc(this.nd);
  for (d = c = 0;5 > d;d++) {
    for (var e = 24;0 <= e;e -= 8) {
      a[c] = this.J[d] >> e & 255, ++c;
    }
  }
  return a;
};
k.wf = {};
k.wf.lj = function(a) {
  var c = k.ka.Wc().fj(), d = new f.h.Sha1;
  d.update(a);
  d.update(c);
  return "r" + f.h.n.pf(d.ej(), !0);
};
k.Ra = function(a, c) {
  this.kj = a;
  this.xf = c;
  this.nj = null;
  this.mj = k.wf.lj(c);
  new f.f.T;
  new f.f.X;
  this.jj = new f.f.X;
};
k.Ra.tq = {CAST:"cast", DIAL:"dial", kp:"mesi", oo:"cloud"};
k.Ra.ao = {AVAILABLE:"available", UNAVAILABLE:"unavailable", dn:"unknown"};
k.Ra.Bo = {jo:"chromecast", dn:"unknown"};
b = k.Ra.prototype;
b.isLocal = function() {
  return!!this.nj;
};
b.Ul = function() {
  return this.kj;
};
b.getId = function() {
  return this.mj;
};
b.isAvailable = function(a) {
  return this.jj.contains(a);
};
b.equals = function(a) {
  return this.xf == a.xf;
};
k.I = {};
k.I.cd = "urn:x-cast:";
k.I.yi = 128;
k.I.Ok = function(a) {
  return a.length > k.I.cd.length && f.b.zi(a, k.I.cd) && a.length <= k.I.yi;
};
k.I.ub = function(a) {
  return k.I.cd + "com.google.cast." + a;
};
k.I.jm = {Lq:k.I.ub("tp.connection"), Mq:k.I.ub("tp.heartbeat"), uq:k.I.ub("receiver"), ip:k.I.ub("media"), jp:k.I.ub("media.universalRemote.optIn"), fn:k.I.ub("webrtc")};
k.I.Dl = f.object.Sh(k.I.jm);
k.I.Nk = function(a) {
  return k.I.Dl.hasOwnProperty(a);
};
k.Aa = {};
k.Aa.us = function(a, c) {
  if (!c.applications || 1 != c.applications.length) {
    return null;
  }
  var d = k.Aa.Gl(a, c.applications[0]);
  d.receiver.volume = c.volume;
  f.La(c.isActiveInput) && (d.receiver.isActiveInput = c.isActiveInput);
  return d;
};
k.Aa.Gl = function(a, c) {
  var d = k.Aa.Gk(a), d = new chrome.cast.o(c.sessionId, c.appId, c.displayName, c.appImages, d);
  d.senderApps = c.senderApps;
  d.namespaces = c.namespaces || [];
  d.transportId = c.transportId;
  d.statusText = c.statusText;
  return d;
};
k.Aa.Gk = function(a) {
  return new chrome.cast.Ra(a.getId(), a.Ul());
};
k.Aa.$s = function(a, c) {
  if (a.statusText != c.statusText) {
    return!0;
  }
  for (var d = a.namespaces || [], e = c.namespaces || [], g = 0;g < d.length;g++) {
    if (!e.some(function(a) {
      return a.name == d[g].name;
    })) {
      return!0;
    }
  }
  return a.receiver.volume.level != c.receiver.volume.level || a.receiver.volume.muted != c.receiver.volume.muted ? !0 : !1;
};
k.Aa.lh = function(a) {
  f.isArray(a) ? a.forEach(k.Aa.lh) : f.isObject(a) && Object.keys(a).forEach(function(c) {
    f.yb(a[c]) ? delete a[c] : k.Aa.lh(a[c]);
  });
};
k.Aa.ys = function(a, c) {
  return a.namespaces.some(function(a) {
    return a.name == c;
  });
};
k.zg = function(a, c) {
  this.type = k.H.eh;
  this.requestId = null;
  this.volume = a;
  this.expectedVolume = c || null;
};
k.P = {};
k.P.Dr = function(a) {
  return!a || !f.isString(a.sessionId) || !f.U(a.media) || f.U(a.autoplay) && !f.La(a.autoplay) || f.U(a.currentTime) && !f.isNumber(a.currentTime) ? !1 : k.P.Kk(a.media);
};
k.P.Kk = function(a) {
  return!a || !f.isString(a.contentId) || 1E3 < a.contentId.length || !f.object.lb(chrome.cast.media.Wd, a.streamType) || !f.isString(a.contentType) || f.U(a.duration) && !f.isNumber(a.duration) ? !1 : !0;
};
k.P.qj = function(a) {
  return!!a && f.U(a.sessionId) && f.isString(a.namespaceName) && k.I.Ok(a.namespaceName) && !k.I.Nk(a.namespaceName);
};
k.P.kk = function(a) {
  return a && f.isFunction(a.sessionListener) && f.isFunction(a.receiverListener) ? k.P.uf(a.sessionRequest) : !1;
};
k.P.sj = function(a) {
  return a ? !f.a.find(a, function(a) {
    return!((a.receiverType == chrome.cast.Ab.CUSTOM || a.receiverType == chrome.cast.Ab.DIAL) && f.U(a.friendlyName) && 0 == a.capabilities.length && f.yb(a.volume));
  }) : !1;
};
k.P.uf = function(a) {
  return!a || !f.U(a.appId) || f.U(a.dialRequest) && (!f.isString(a.dialRequest.appName) || f.U(a.dialRequest.launchParameter) && !f.isString(a.dialRequest.launchParameter)) ? !1 : !0;
};
k.P.pj = function(a) {
  return a && f.U(a.volume) && k.P.Gg(a.volume) ? f.U(a.expectedVolume) ? k.P.Gg(a.expectedVolume) : !0 : !1;
};
k.P.Gg = function(a) {
  return a ? f.U(a.level) ? f.isNumber(a.level) && 0 <= a.level && 1 >= a.level : f.La(a.muted) : !1;
};
k.P.Cr = function(a) {
  return!!a && f.La(a.doLaunch) && (!f.U(a.launchParameter) || f.isString(a.launchParameter));
};
k.O = function(a, c, d) {
  this.hg = a;
  this.Bd = c;
  this.Fd = f.isNumber(d) ? d : 0;
  this.Ec = !1;
  this.Kb = null;
};
k.O.Ek = 432E5;
k.O.prototype.xl = function() {
  return this.Ec;
};
k.O.prototype.va = function() {
  this.Ec = !0;
  this.Bd = this.hg = null;
  this.Kb && (clearTimeout(this.Kb), this.Kb = null);
};
k.O.rg = function() {
};
k.O.prototype.gg = function() {
  var a = this.hg;
  this.va();
  return a || k.O.rg;
};
k.O.prototype.fg = function() {
  var a = this.Bd;
  this.va();
  return a || k.O.rg;
};
k.O.prototype.Bf = function(a, c) {
  if (!this.Ec && !this.Kb) {
    var d = function() {
      if (!this.Ec) {
        a && a();
        var d = this.Bd;
        this.va();
        if (0 < this.Fd) {
          var g = new chrome.cast.Error(chrome.cast.wa.TIMEOUT);
          c && (g.description = c);
          d(g);
        }
      }
    }.bind(this);
    this.Kb = setTimeout(d, 0 < this.Fd ? this.Fd : k.O.Ek);
  }
};
k.To = {};
k.la = function(a, c, d, e, g, h) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = f.isNumber(g) ? g : 0;
  this.receiverId = h || null;
  this.receiverList = null;
};
k.B = {Cf:"iframe_init_result", Fj:"fail_to_connect_to_extension", mo:"client_reconnect", ac:"v2_message", Je:"app_message", tk:"client_init", zk:"log_message", gj:"request_session", Ak:"request_session_by_id", pk:"leave_session", lo:"client_disconnect", rj:"set_custom_receivers", $f:"custom_dial_launch_response", qk:"set_receiver_display_status", Lj:"receiver_availability", Kj:"receiver_action", sf:"new_session", tf:"update_session", Ej:"disconnect_session", Mj:"remove_session", Vn:"app_message_success", 
bp:"leave_session_success", Iq:"set_receiver_volume_success", Fq:"set_custom_receivers_success", ERROR:"error", Dj:"custom_dial_launch_request", Hq:"set_receiver_display_status_success"};
k.zc = function() {
  this.r = {};
};
b = k.zc.prototype;
b.add = function(a, c) {
  var d = this.r[a];
  if (d) {
    return-1 == d.indexOf(c) && d.push(c), !1;
  }
  this.r[a] = [c];
  return!0;
};
b.remove = function(a, c) {
  var d = this.r[a];
  if (!d) {
    return!1;
  }
  var e = d.indexOf(c);
  if (-1 == e) {
    return!1;
  }
  if (1 == d.length) {
    return delete this.r[a], !0;
  }
  d.splice(e, 1);
  return!1;
};
b.Jg = function(a) {
  if (!(a in this.r)) {
    return!1;
  }
  delete this.r[a];
  return!0;
};
b.Yk = function(a) {
  var c = !1;
  Object.keys(this.r).forEach(function(d) {
    0 == d.indexOf(a) && (delete this.r[d], c = !0);
  }, this);
  return c;
};
b.get = function(a) {
  return this.r[a] || [];
};
b.contains = function(a, c) {
  return-1 != this.get(a).indexOf(c);
};
k.hq = function() {
  this.type = k.H.Cd;
  this.requestId = null;
  this.status = [];
  this.customData = null;
  this.sessionId = "";
};
chrome.cast.Ob = function(a, c) {
  this.Sl = a;
  this.pg = c;
  this.qg = null;
};
chrome.cast.Ob.prototype.init = function() {
  window.addEventListener("message", this.Fn.bind(this), !1);
};
chrome.cast.Ob.prototype.Yl = function(a) {
  this.qg = a;
};
chrome.cast.Ob.prototype.Fn = function(a) {
  a.source != window && a.origin == this.pg && (a = a.data, a.type == k.B.Cf && (this.Lk = !a.message), this.qg(a));
};
chrome.cast.Ob.prototype.zd = function(a) {
  this.Lk && this.Sl.contentWindow.postMessage(a, this.pg);
};
k.Nf = function() {
  this.pb = {};
  this.Jc = {};
};
b = k.Nf.prototype;
b.Zk = function(a, c) {
  var d = this.pb[a];
  return d ? (d.status = c, d.media.forEach(function(a) {
    delete this.Jc[this.Hd(a)];
  }, this), delete this.pb[a], !0) : !1;
};
b.bl = function(a) {
  delete this.Jc[this.Hd(a)];
  var c = this.pb[a.sessionId];
  c && (a = c.media.indexOf(a), -1 != a && c.media.splice(a, 1));
};
b.am = function(a) {
  if (a.sessionId == chrome.cast.o.eg) {
    return a;
  }
  var c = this.pb[a.sessionId];
  if (c) {
    return c.statusText = a.statusText, c.namespaces = a.namespaces || [], c.receiver.volume = a.receiver.volume, c;
  }
  var c = new chrome.cast.o(a.sessionId, a.appId, a.displayName, a.appImages, a.receiver), d;
  for (d in a) {
    "media" == d ? c.media = a.media.map(function(a) {
      a = this.Yf(a);
      a.sd = !1;
      a.sc = !0;
      return a;
    }.bind(this)) : a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return this.pb[a.sessionId] = c;
};
b.Yf = function(a) {
  var c = this.Hd(a), d = this.Jc[c];
  d || (d = new chrome.cast.media.q(a.sessionId, a.mediaSessionId), this.Jc[c] = d, (c = this.pb[a.sessionId]) && c.media.push(d));
  for (var e in a) {
    a.hasOwnProperty(e) && ("volume" == e ? (d.volume.level = a.volume.level, d.volume.muted = a.volume.muted) : d[e] = a[e]);
  }
  "currentTime" in a && (d.Ad = f.now());
  return d;
};
b.Hd = function(a) {
  return a.sessionId + "#" + a.mediaSessionId;
};
chrome.cast.na = function(a) {
  this.ik = 1E3 * Math.floor(1E5 * Math.random());
  this.kc = a;
  this.ob = {};
  this.$b = !1;
  this.mb = this.ca = this.jd = null;
  this.wc = new k.zc;
  this.rc = new k.zc;
  this.Hb = new k.zc;
  this.Ac = [];
  this.qc = new k.Nf(this.vc);
  this.Ae = !1;
};
b = chrome.cast.na.prototype;
b.init = function() {
  this.kc.Yl(this.Xl.bind(this));
};
b.wl = function() {
  return "a" + this.ik++;
};
b.Nj = function(a) {
  var c = a.seqNum;
  if (!c) {
    return!1;
  }
  var d = this.ob[c];
  if (d) {
    var e = a.message;
    a.type == k.B.ERROR ? d.fg()(a.message) : d.gg()(e);
    delete this.ob[c];
  }
  return!!d;
};
b.Oj = function(a) {
  switch(a.type) {
    case k.B.sf:
    ;
    case k.B.tf:
      a.message = this.xk(a.message);
      break;
    case k.B.ac:
      a = a.message, a.type == k.H.Cd && a.status && (a.status = a.status.map(this.wk.bind(this)));
  }
};
b.xk = function(a) {
  return this.qc.am(a);
};
b.Xl = function(a) {
  this.Oj(a);
  if (!this.Nj(a)) {
    switch(a.type) {
      case k.B.Cf:
        this.Pj(a);
        break;
      case k.B.Lj:
        this.Wj(a);
        break;
      case k.B.Kj:
        this.Vj(a);
        break;
      case k.B.Fj:
        this.Ae = !0;
        break;
      case k.B.sf:
        this.Uj(a);
        break;
      case k.B.tf:
        this.Yj(a);
        break;
      case k.B.Ej:
        this.Rj(a);
        break;
      case k.B.Mj:
        this.Xj(a);
        break;
      case k.B.Je:
        this.Sj(a.message);
        break;
      case k.B.ac:
        this.Tj(a);
        break;
      case k.B.Dj:
        this.Qj(a);
    }
  }
};
b.Qj = function(a) {
  var c = a.message;
  this.ca && this.ca.customDialLaunchCallback && this.ca.customDialLaunchCallback(c).then(f.bind(function(c) {
    this.kc.zd(new k.la(k.B.$f, c, a.seqNum));
  }, this), f.bind(function() {
    this.kc.zd(new k.la(k.B.$f, null, a.seqNum));
  }, this));
};
b.Tj = function(a) {
  switch(a.message.type) {
    case k.H.Cd:
      this.tl(a.message);
  }
};
b.tl = function(a) {
  a.status.forEach(this.Bh.bind(this));
};
b.Uj = function(a) {
  this.ca && this.ca.sessionListener(a.message);
};
b.Yj = function(a) {
  (a = a.message) && this.Hb.get(a.sessionId).forEach(function(a) {
    a(!0);
  });
};
b.Rj = function(a) {
  this.wh(a.message, chrome.cast.Sb.DISCONNECTED);
};
b.Xj = function(a) {
  this.wh(a.message, chrome.cast.Sb.STOPPED);
};
b.wh = function(a, c) {
  var d = c != chrome.cast.Sb.STOPPED;
  this.qc.Zk(a, c) && (this.wc.Yk(a + "#"), this.rc.Jg(a), this.Hb.get(a).forEach(function(a) {
    a(d);
  }), this.Hb.Jg(a));
};
b.Sj = function(a) {
  this.pn(a.sessionId, a.namespaceName).forEach(function(c) {
    c(a.namespaceName, a.message);
  });
};
b.Wj = function(a) {
  if (this.ca) {
    var c = a.message;
    a.receiverList ? this.ca.receiverListener.apply(null, [c, a.receiverList]) : this.ca.receiverListener(c);
  }
};
b.Vj = function(a) {
  this.Ac.forEach(function(c) {
    c(a.message.receiver, a.message.receiverAction);
  }, this);
};
b.Pj = function(a) {
  (a = a.message) ? (this.jd = a, this.mb && this.mb.fg()(a)) : (this.$b = !0, this.Lf(), this.mb && this.mb.gg()(void 0));
};
b.Ud = function(a, c, d) {
  this.Fa(d) && (a = a || [], k.P.sj(a) ? this.ya(new k.la(k.B.rj, a), new k.O(c, d)) : d && d(new chrome.cast.Error(chrome.cast.wa.INVALID_PARAMETER)));
};
chrome.cast.na.prototype.setReceiverVolume = function(a, c, d, e) {
  this.Fa(e) && (k.P.pj(c) ? (c.sessionId = a, this.ya(new k.la(k.B.ac, c, null, null, chrome.cast.timeout.setReceiverVolume), new k.O(d, e, chrome.cast.timeout.setReceiverVolume))) : e && e(new chrome.cast.Error(chrome.cast.wa.INVALID_PARAMETER)));
};
chrome.cast.na.prototype.leaveSession = function(a, c, d) {
  this.Fa(d) && this.ya(new k.la(k.B.pk, a, null, null, chrome.cast.timeout.leaveSession), new k.O(c, d, chrome.cast.timeout.leaveSession));
};
b = chrome.cast.na.prototype;
b.og = function(a, c, d, e) {
  this.Fa(d) && this.ya(new k.la(k.B.ac, a, null, null, e), new k.O(c, d, e));
};
b.Qd = function(a) {
  this.Fa(f.Uf) && this.ya(new k.la(k.B.zk, a));
};
b.sg = function(a, c, d, e, g, h) {
  null != a && (d.mediaSessionId = a.mediaSessionId, d.sessionId = a.sessionId);
  d.requestId = null;
  d.type = c;
  this.og(d, function(a) {
    e && a.status && 1 == a.status.length ? e(a.status[0]) : g && g(new chrome.cast.Error(chrome.cast.wa.SESSION_ERROR));
  }, g, h);
};
b.nl = function(a, c, d) {
  this.sg(null, k.H.Bg, a, function(a) {
    a.sc = !0;
    a.sd = !0;
    c && c(a);
  }.bind(this), d, chrome.cast.media.timeout.load);
};
b.Za = function(a, c, d, e, g, h) {
  this.sg(a, c, d, function(a) {
    this.Bh(a);
    e && e();
  }.bind(this), g, h);
};
b.dl = function(a, c, d) {
  this.Fa(d) && (k.P.qj(a) ? this.ya(new k.la(k.B.Je, a, null, null, chrome.cast.timeout.sendCustomMessage), new k.O(c, d, chrome.cast.timeout.sendCustomMessage)) : d && d(new chrome.cast.Error(chrome.cast.wa.INVALID_PARAMETER)));
};
b.Lf = function() {
  this.ca && this.$b && this.ya(new k.la(k.B.tk, new k.sk(this.ca)));
};
b.ya = function(a, c) {
  var d = this.wl();
  a.seqNum = d;
  if (this.ob[d] && !this.ob[d].xl()) {
    throw "Try to send a request with the existing seqNum: " + a.seqNum;
  }
  c && (this.ob[d] = c, c.Bf(function() {
    delete this.ob[d];
  }.bind(this)));
  this.kc.zd(a);
};
b.Pb = function(a, c, d) {
  k.P.kk(a) ? this.jd ? d && d(this.jd) : this.ca ? c && c() : (this.ca = a, this.$b ? (this.Lf(), c && c()) : (this.mb = new k.O(c, d, 5E3), this.mb.Bf())) : d && d(new chrome.cast.Error(chrome.cast.wa.INVALID_PARAMETER));
};
chrome.cast.na.prototype.requestSession = function(a, c, d, e) {
  this.Fa(c) && (d && !k.P.uf(d) ? c && c(new chrome.cast.Error(chrome.cast.wa.INVALID_PARAMETER)) : (!d && this.ca && (d = this.ca.sessionRequest), this.ya(new k.la(k.B.gj, d, null, null, d.requestSessionTimeout, e), new k.O(a, c, 0))));
};
chrome.cast.na.prototype.Td = function(a) {
  this.Fa(f.Uf) && a && this.ya(new k.la(k.B.Ak, a));
};
chrome.cast.na.ul = new chrome.cast.Error(chrome.cast.wa.API_NOT_INITIALIZED);
chrome.cast.na.vl = new chrome.cast.Error(chrome.cast.wa.EXTENSION_MISSING);
b = chrome.cast.na.prototype;
b.Fa = function(a) {
  return this.$b ? this.Ae ? (a && a(chrome.cast.na.vl), !1) : !0 : (a && a(chrome.cast.na.ul), !1);
};
b.ae = function(a, c) {
  return a + "#" + c;
};
b.hl = function(a, c, d) {
  this.wc.add(this.ae(a, c), d);
};
b.kl = function(a, c, d) {
  this.wc.remove(this.ae(a, c), d);
};
b.pn = function(a, c) {
  return this.wc.get(this.ae(a, c));
};
b.Od = function(a, c) {
  this.rc.add(a, c);
};
b.Rd = function(a, c) {
  this.rc.remove(a, c);
};
b.il = function(a, c) {
  -1 == a.Rb.indexOf(c) && a.Rb.push(c);
};
b.ll = function(a, c) {
  var d = a.Rb.indexOf(c);
  -1 != d && a.Rb.splice(d, 1);
};
b.Bh = function(a) {
  if (a.sc) {
    var c = a.playerState != chrome.cast.media.Nb.IDLE;
    a.Rb.forEach(function(a) {
      a(c);
    });
    c || this.qc.bl(a);
  } else {
    a.sc = !0, a.sd || this.rc.get(a.sessionId).forEach(function(c) {
      c(a);
    });
  }
};
b.wk = function(a) {
  return this.qc.Yf(a);
};
b.jl = function(a, c) {
  this.Hb.add(a, c);
};
b.ml = function(a, c) {
  this.Hb.remove(a, c);
};
b.Pd = function(a) {
  this.Ac.push(a);
};
b.Sd = function(a) {
  a = this.Ac.indexOf(a);
  0 <= a && this.Ac.splice(a, 1);
};
b.Vd = function(a, c, d) {
  this.Fa(d) && this.ya(new k.la(k.B.qk, a), new k.O(c, d));
};
chrome.cast.isAvailable = !1;
f.i("chrome.cast.isAvailable", chrome.cast.isAvailable);
chrome.cast.v = null;
chrome.cast.Pb = function(a, c, d) {
  chrome.cast.v.Pb(a, c, d);
};
f.i("chrome.cast.initialize", chrome.cast.Pb);
chrome.cast.requestSession = function(a, c, d, e) {
  chrome.cast.v.requestSession(a, c, d, e);
};
f.i("chrome.cast.requestSession", chrome.cast.requestSession);
chrome.cast.Td = function(a) {
  chrome.cast.v.Td(a);
};
f.i("chrome.cast.requestSessionById", chrome.cast.Td);
chrome.cast.Pd = function(a) {
  chrome.cast.v.Pd(a);
};
f.i("chrome.cast.addReceiverActionListener", chrome.cast.Pd);
chrome.cast.Sd = function(a) {
  chrome.cast.v.Sd(a);
};
f.i("chrome.cast.removeReceiverActionListener", chrome.cast.Sd);
chrome.cast.Qd = function(a) {
  chrome.cast.v.Qd(a);
};
f.i("chrome.cast.logMessage", chrome.cast.Qd);
chrome.cast.Ud = function(a, c, d) {
  chrome.cast.v.Ud(a, c, d);
};
f.i("chrome.cast.setCustomReceivers", chrome.cast.Ud);
chrome.cast.Vd = function(a, c, d) {
  chrome.cast.v.Vd(a, c, d);
};
f.i("chrome.cast.setReceiverDisplayStatus", chrome.cast.Vd);
chrome.cast.o.prototype.Ln = function(a, c, d) {
  chrome.cast.v.setReceiverVolume(this.sessionId, new k.zg(new chrome.cast.Hc(a, null), this.receiver.volume), c, d);
};
f.t(chrome.cast.o.prototype, "setReceiverVolumeLevel", chrome.cast.o.prototype.Ln);
chrome.cast.o.prototype.Kn = function(a, c, d) {
  chrome.cast.v.setReceiverVolume(this.sessionId, new k.zg(new chrome.cast.Hc(null, a), this.receiver.volume), c, d);
};
f.t(chrome.cast.o.prototype, "setReceiverMuted", chrome.cast.o.prototype.Kn);
chrome.cast.o.prototype.leave = function(a, c) {
  chrome.cast.v.leaveSession(this.sessionId, a, c);
};
f.t(chrome.cast.o.prototype, "leave", chrome.cast.o.prototype.leave);
chrome.cast.o.prototype.stop = function(a, c) {
  chrome.cast.v.og(new k.al(this.sessionId), a, c, chrome.cast.timeout.stopSession);
};
f.t(chrome.cast.o.prototype, "stop", chrome.cast.o.prototype.stop);
chrome.cast.o.prototype.sendMessage = function(a, c, d, e) {
  chrome.cast.v.dl(new k.cl(this.sessionId, a, c), d, e);
};
f.t(chrome.cast.o.prototype, "sendMessage", chrome.cast.o.prototype.sendMessage);
chrome.cast.o.prototype.he = function(a) {
  chrome.cast.v.jl(this.sessionId, a);
};
f.t(chrome.cast.o.prototype, "addUpdateListener", chrome.cast.o.prototype.he);
chrome.cast.o.prototype.le = function(a) {
  chrome.cast.v.ml(this.sessionId, a);
};
f.t(chrome.cast.o.prototype, "removeUpdateListener", chrome.cast.o.prototype.le);
chrome.cast.o.prototype.gn = function(a, c) {
  chrome.cast.v.hl(this.sessionId, a, c);
};
f.t(chrome.cast.o.prototype, "addMessageListener", chrome.cast.o.prototype.gn);
chrome.cast.o.prototype.Hn = function(a, c) {
  chrome.cast.v.kl(this.sessionId, a, c);
};
f.t(chrome.cast.o.prototype, "removeMessageListener", chrome.cast.o.prototype.Hn);
chrome.cast.o.prototype.Od = function(a) {
  chrome.cast.v.Od(this.sessionId, a);
};
f.t(chrome.cast.o.prototype, "addMediaListener", chrome.cast.o.prototype.Od);
chrome.cast.o.prototype.Rd = function(a) {
  chrome.cast.v.Rd(this.sessionId, a);
};
f.t(chrome.cast.o.prototype, "removeMediaListener", chrome.cast.o.prototype.Rd);
chrome.cast.o.prototype.zn = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.v.nl(a, c, d);
};
f.t(chrome.cast.o.prototype, "loadMedia", chrome.cast.o.prototype.zn);
chrome.cast.media.q.prototype.Dc = function(a, c, d) {
  a || (a = new chrome.cast.media.Vf);
  chrome.cast.v.Za(this, k.H.Wf, a, c, d, chrome.cast.media.timeout.Dc);
};
f.t(chrome.cast.media.q.prototype, "getStatus", chrome.cast.media.q.prototype.Dc);
chrome.cast.media.q.prototype.play = function(a, c, d) {
  a || (a = new chrome.cast.media.dg);
  chrome.cast.v.Za(this, k.H.Ck, a, c, d, chrome.cast.media.timeout.play);
};
f.t(chrome.cast.media.q.prototype, "play", chrome.cast.media.q.prototype.play);
chrome.cast.media.q.prototype.pause = function(a, c, d) {
  a || (a = new chrome.cast.media.cg);
  chrome.cast.v.Za(this, k.H.Bk, a, c, d, chrome.cast.media.timeout.pause);
};
f.t(chrome.cast.media.q.prototype, "pause", chrome.cast.media.q.prototype.pause);
chrome.cast.media.q.prototype.seek = function(a, c, d) {
  chrome.cast.v.Za(this, k.H.Fk, a, c, d, chrome.cast.media.timeout.seek);
};
f.t(chrome.cast.media.q.prototype, "seek", chrome.cast.media.q.prototype.seek);
chrome.cast.media.q.prototype.stop = function(a, c, d) {
  a || (a = new chrome.cast.media.bg);
  chrome.cast.v.Za(this, k.H.ag, a, c, d, chrome.cast.media.timeout.stop);
};
f.t(chrome.cast.media.q.prototype, "stop", chrome.cast.media.q.prototype.stop);
chrome.cast.media.q.prototype.Gc = function(a, c, d) {
  chrome.cast.v.Za(this, k.H.Zf, a, c, d, chrome.cast.media.timeout.Gc);
};
f.t(chrome.cast.media.q.prototype, "setVolume", chrome.cast.media.q.prototype.Gc);
chrome.cast.media.q.prototype.Ic = function(a, c, d) {
  chrome.cast.v.Za(this, k.H.yk, a, c, d, chrome.cast.media.timeout.Ic);
};
f.t(chrome.cast.media.q.prototype, "editTracksInfo", chrome.cast.media.q.prototype.Ic);
chrome.cast.media.q.prototype.Nn = function(a) {
  return-1 < this.supportedMediaCommands.indexOf(a);
};
f.t(chrome.cast.media.q.prototype, "supportsCommand", chrome.cast.media.q.prototype.Nn);
chrome.cast.media.q.prototype.qn = function() {
  if (this.playerState == chrome.cast.media.Nb.PLAYING && 0 <= this.Ad) {
    var a = (f.now() - this.Ad) / 1E3, a = this.currentTime + this.playbackRate * a;
    this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
    0 > a && (a = 0);
    return a;
  }
  return this.currentTime;
};
f.t(chrome.cast.media.q.prototype, "getEstimatedTime", chrome.cast.media.q.prototype.qn);
chrome.cast.media.q.prototype.he = function(a) {
  chrome.cast.v.il(this, a);
};
f.t(chrome.cast.media.q.prototype, "addUpdateListener", chrome.cast.media.q.prototype.he);
chrome.cast.media.q.prototype.le = function(a) {
  chrome.cast.v.ll(this, a);
};
f.t(chrome.cast.media.q.prototype, "removeUpdateListener", chrome.cast.media.q.prototype.le);
chrome.cast.me = function() {
  if (!chrome.cast.ig && (chrome.cast.ig = !0, chrome.cast.extensionId)) {
    var a = "chrome-extension://" + chrome.cast.extensionId, c = a + "/api_iframe.html", d = document.createElement("iframe");
    d.src = c + "?appOrigin=" + window.location.origin;
    d.setAttribute("style", "display:none");
    document.body.appendChild(d);
    a = new chrome.cast.Ob(d, a);
    a.init();
    chrome.cast.v = new chrome.cast.na(a);
    chrome.cast.v.init();
    chrome.cast.isAvailable = !0;
    (a = window.__onGCastApiAvailable) && "function" == typeof a && a(!0);
  }
};
chrome.cast.ig = !1;
"complete" == document.readyState ? chrome.cast.me() : (window.addEventListener("load", chrome.cast.me, !1), window.addEventListener("DOMContentLoaded", chrome.cast.me, !1));
})();
