var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var l = l || {};
l.global = this;
l.R = function(a) {
  return void 0 !== a;
};
l.Wb = function(a, c, d) {
  a = a.split(".");
  d = d || l.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && l.R(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
l.Wj = function(a, c) {
  l.Wb(a, c);
};
l.ja = !0;
l.Ai = "en";
l.Vb = !0;
l.jg = !1;
l.ol = function(a) {
  l.ld(a);
};
l.ld = function(a, c) {
  l.Wb(a, c);
};
l.module = function(a) {
  if (!l.isString(a) || !a) {
    throw Error("Invalid module identifier");
  }
  if (!l.qd()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (l.G.Ob) {
    throw Error("goog.module may only be called once per module.");
  }
  l.G.Ob = a;
};
l.module.get = function(a) {
  return l.module.Ah(a);
};
l.module.Ah = function() {
};
l.G = null;
l.qd = function() {
  return null != l.G;
};
l.module.Nb = function() {
  if (!l.qd()) {
    throw Error("goog.module.declareTestMethods must be called from within a goog.module");
  }
  l.G.Nb = !0;
};
l.module.kd = function() {
  l.G.kd = !0;
};
l.Al = function(a) {
  if (!l.ja) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
l.dk = function() {
};
l.lk = function(a, c) {
  for (var d = a.split("."), e = c || l.global, f;f = d.shift();) {
    if (l.ec(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
l.qk = function(a, c) {
  var d = c || l.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
l.cj = function(a, c, d, e) {
  if (l.pd) {
    var f;
    a = a.replace(/\\/g, "/");
    for (var g = l.F, h = 0;f = c[h];h++) {
      g.Ha[f] = a, g.Fb[a] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      a in g.requires || (g.requires[a] = {}), g.requires[a][c] = !0;
    }
  }
};
l.Vl = !1;
l.ki = !0;
l.$k = function(a) {
  l.global.console && l.global.console.error(a);
};
l.require = function() {
};
l.ha = "";
l.hl = function() {
};
l.vk = function(a) {
  return a;
};
l.aj = function() {
  throw Error("unimplemented abstract method");
};
l.dj = function(a) {
  a.Xh = function() {
    if (a.wd) {
      return a.wd;
    }
    l.ja && (l.xd[l.xd.length] = a);
    return a.wd = new a;
  };
};
l.xd = [];
l.og = !0;
l.Kf = l.ja;
l.Mf = {};
l.pd = !1;
l.pd && (l.qf = {}, l.F = {Fb:{}, Ha:{}, requires:{}, ad:{}, Ga:{}, Ja:{}}, l.vd = function() {
  var a = l.global.document;
  return "undefined" != typeof a && "write" in a;
}, l.yh = function() {
  if (l.global.mg) {
    l.ha = l.global.mg;
  } else {
    if (l.vd()) {
      for (var a = l.global.document.getElementsByTagName("script"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          l.ha = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, l.Kb = function(a, c) {
  (l.global.If || l.gd)(a, c) && (l.F.Ga[a] = !0);
}, l.hd = l.global.document && l.global.document.all && !l.global.atob, l.pf = function(a) {
  l.Kb("", 'goog.retrieveAndExecModule_("' + a + '");') && (l.F.Ga[a] = !0);
}, l.ib = [], l.tl = function(a) {
  for (var c = a, d;-1 != (d = a.indexOf("/./"));) {
    a = a.substr(0, d) + a.substr(d + 2);
  }
  for (;-1 != (d = a.indexOf("/../"));) {
    var e = a.lastIndexOf("/", d - 1);
    a = a.substr(0, e) + a.substr(d + 3);
  }
  d = l.global.If || l.gd;
  var f = null, e = new l.global.XMLHttpRequest;
  e.onload = function() {
    f = this.responseText;
  };
  e.open("get", a, !1);
  e.send();
  f = e.responseText;
  if (null != f) {
    e = l.Nf(a, f), l.hd ? (l.F.Ja[c] = e, l.ib.push(c)) : d(a, e);
  } else {
    throw Error("load of " + a + "failed");
  }
}, l.Nf = function(a, c) {
  return l.og && l.R(l.global.JSON) ? "goog.loadModule(" + l.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, l.vg = function() {
  var a = l.ib.length;
  if (0 < a) {
    var c = l.ib;
    l.ib = [];
    for (var d = 0;d < a;d++) {
      l.rd(c[d]);
    }
  }
}, l.bl = function(a) {
  l.jd(a) && l.cg(a) && l.rd(l.ha + l.Mb(a));
}, l.jd = function(a) {
  return(a = l.Mb(a)) && l.F.Fb[a] ? l.ha + a in l.F.Ja : !1;
}, l.cg = function(a) {
  if ((a = l.Mb(a)) && a in l.F.requires) {
    for (var c in l.F.requires[a]) {
      if (!l.nf(c) && !l.jd(c)) {
        return!1;
      }
    }
  }
  return!0;
}, l.rd = function(a) {
  if (a in l.F.Ja) {
    var c = l.F.Ja[a];
    delete l.F.Ja[a];
    l.Zf(c);
  }
}, l.Xk = function(a) {
  var c = l.G;
  try {
    l.G = {Ob:void 0, Nb:!1};
    var d;
    if (l.isFunction(a)) {
      d = a.call(l.global, {});
    } else {
      if (l.isString(a)) {
        d = l.Lf.call(l.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = l.G.Ob;
    if (!l.isString(e) || !e) {
      throw Error('Invalid module name "' + e + '"');
    }
    l.G.kd ? l.ld(e, d) : l.Kf && Object.seal && Object.seal(d);
    l.Mf[e] = d;
    if (l.G.Nb) {
      for (var f in d) {
        if (0 === f.indexOf("test", 0) || "tearDown" == f || "setUp" == f || "setUpPage" == f || "tearDownPage" == f) {
          l.global[f] = d[f];
        }
      }
    }
  } finally {
    l.G = c;
  }
}, l.Lf = function(a) {
  eval(a);
  return{};
}, l.gd = function(a, c) {
  if (l.vd()) {
    var d = l.global.document;
    if ("complete" == d.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return!1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var e = l.hd;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++l.zd + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : d.write('<script type="text/javascript" src="' + a + '">\x3c/script>') : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return!0;
  }
  return!1;
}, l.zd = 0, l.kl = function(a, c) {
  "complete" == a.readyState && l.zd == c && l.vg();
  return!0;
}, l.Yl = function() {
  function a(f) {
    if (!(f in e.Ga)) {
      if (!(f in e.ad) && (e.ad[f] = !0, f in e.requires)) {
        for (var g in e.requires[f]) {
          if (!l.nf(g)) {
            if (g in e.Ha) {
              a(e.Ha[g]);
            } else {
              throw Error("Undefined nameToPath for " + g);
            }
          }
        }
      }
      f in d || (d[f] = !0, c.push(f));
    }
  }
  var c = [], d = {}, e = l.F, f;
  for (f in l.qf) {
    e.Ga[f] || a(f);
  }
  for (var g = 0;g < c.length;g++) {
    f = c[g], l.F.Ga[f] = !0;
  }
  var h = l.G;
  l.G = null;
  for (g = 0;g < c.length;g++) {
    if (f = c[g]) {
      e.Fb[f] ? l.pf(l.ha + f) : l.Kb(l.ha + f);
    } else {
      throw l.G = h, Error("Undefined script input");
    }
  }
  l.G = h;
}, l.Mb = function(a) {
  return a in l.F.Ha ? l.F.Ha[a] : null;
}, l.yh(), l.global.ei || l.Kb(l.ha + "deps.js"));
l.L = function(a) {
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
l.Mk = function(a) {
  return null === a;
};
l.ec = function(a) {
  return null != a;
};
l.isArray = function(a) {
  return "array" == l.L(a);
};
l.v = function(a) {
  var c = l.L(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
l.Ck = function(a) {
  return l.isObject(a) && "function" == typeof a.getFullYear;
};
l.isString = function(a) {
  return "string" == typeof a;
};
l.mf = function(a) {
  return "boolean" == typeof a;
};
l.isNumber = function(a) {
  return "number" == typeof a;
};
l.isFunction = function(a) {
  return "function" == l.L(a);
};
l.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
l.Yd = function(a) {
  return a[l.ia] || (a[l.ia] = ++l.rg);
};
l.tk = function(a) {
  return!!a[l.ia];
};
l.Th = function(a) {
  "removeAttribute" in a && a.removeAttribute(l.ia);
  try {
    delete a[l.ia];
  } catch (c) {
  }
};
l.ia = "closure_uid_" + (1E9 * Math.random() >>> 0);
l.rg = 0;
l.ik = l.Yd;
l.rl = l.Th;
l.kg = function(a) {
  var c = l.L(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = l.kg(a[d]);
    }
    return c;
  }
  return a;
};
l.xg = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
l.wg = function(a, c, d) {
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
l.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? l.bind = l.xg : l.bind = l.wg;
  return l.bind.apply(null, arguments);
};
l.tb = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
l.Zd = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
l.now = l.Vb && Date.now || function() {
  return+new Date;
};
l.Zf = function(a) {
  if (l.global.execScript) {
    l.global.execScript(a, "JavaScript");
  } else {
    if (l.global.eval) {
      if (null == l.nb && (l.global.eval("var _et_ = 1;"), "undefined" != typeof l.global._et_ ? (delete l.global._et_, l.nb = !0) : l.nb = !1), l.nb) {
        l.global.eval(a);
      } else {
        var c = l.global.document, d = c.createElement("script");
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
l.nb = null;
l.gk = function(a, c) {
  var d = function(a) {
    return l.Hd[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = l.Hd ? "BY_WHOLE" == l.ug ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
l.wl = function(a, c) {
  l.Hd = a;
  l.ug = c;
};
l.jk = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return e in c ? c[e] : a;
  }));
  return a;
};
l.kk = function(a) {
  return a;
};
l.g = function(a, c, d) {
  l.Wb(a, c, d);
};
l.X = function(a, c, d) {
  a[c] = d;
};
l.va = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.kb = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.tg = function(a, d, g) {
    var h = Array.prototype.slice.call(arguments, 2);
    return c.prototype[d].apply(a, h);
  };
};
l.tg = function(a, c, d) {
  var e = arguments.callee.caller;
  if (l.jg || l.ja && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.kb) {
    return e.kb.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var f = Array.prototype.slice.call(arguments, 2), g = !1, h = a.constructor;h;h = h.kb && h.kb.constructor) {
    if (h.prototype[c] === e) {
      g = !0;
    } else {
      if (g) {
        return h.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
l.scope = function(a) {
  a.call(l.global);
};
l.Qg = !0;
l.Qg && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
  if (1 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 1);
    d.unshift(this, a);
    return l.bind.apply(null, d);
  }
  return l.bind(this, a);
}, Function.prototype.tb = function(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift(this, null);
  return l.bind.apply(null, c);
}, Function.prototype.va = function(a) {
  l.va(this, a);
}, Function.prototype.Zd = function(a) {
  l.Zd(this.prototype, a);
});
l.Q = function(a, c) {
  var d = c.constructor, e = c.Vf;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = l.Q.Tf(d, a);
  a && l.va(d, a);
  delete c.constructor;
  delete c.Vf;
  l.Q.sd(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : l.Q.sd(d, e));
  return d;
};
l.Q.Xf = l.ja;
l.Q.Tf = function(a, c) {
  if (l.Q.Xf && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[l.Yf]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      c[l.ia] = c[l.ia];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
l.Q.yd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
l.Q.sd = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < l.Q.yd.length;e++) {
    d = l.Q.yd[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
l.Ll = function() {
};
l.Yf = "goog_defineClass_legacy_unsealable";
var m = {ba:{ui:"LAUNCH", Ad:"STOP", eh:"SET_VOLUME", Ig:"GET_STATUS", Pi:"RECEIVER_STATUS", Xi:"CONNECT", Yi:"CLOSE", oi:"GET_APP_AVAILABILITY", qg:"LOAD", Ei:"PAUSE", Gi:"SEEK", Fi:"PLAY", Pg:"STOP_MEDIA", Ng:"MEDIA_GET_STATUS", Og:"MEDIA_SET_VOLUME", Di:"EDIT_TRACKS_INFO", pi:"INVALID_PLAYER_STATE", zi:"LOAD_FAILED", yi:"LOAD_CANCELLED", qi:"INVALID_REQUEST", Hi:"MEDIA_STATUS", vi:"LAUNCH_ERROR", Li:"PING", Ni:"PONG"}, Ub:{}};
m.Ub[m.ba.Pg] = m.ba.Ad;
m.Ub[m.ba.Og] = m.ba.eh;
m.Ub[m.ba.Ng] = m.ba.Ig;
m.Zh = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
m.Vi = function(a) {
  this.type = m.ba.Ad;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.Dd = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
l.g("chrome.cast.AutoJoinPolicy", chrome.cast.Dd);
chrome.cast.Ed = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
l.g("chrome.cast.DefaultActionPolicy", chrome.cast.Ed);
chrome.cast.Tb = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
l.g("chrome.cast.Capability", chrome.cast.Tb);
chrome.cast.Hg = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
l.g("chrome.cast.ErrorCode", chrome.cast.Hg);
chrome.cast.ah = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
l.g("chrome.cast.ReceiverAvailability", chrome.cast.ah);
chrome.cast.hh = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
l.g("chrome.cast.SenderPlatform", chrome.cast.hh);
chrome.cast.Vd = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
l.g("chrome.cast.ReceiverType", chrome.cast.Vd);
chrome.cast.Cg = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
l.g("chrome.cast.DialAppState", chrome.cast.Cg);
chrome.cast.$g = {CAST:"cast", STOP:"stop"};
l.g("chrome.cast.ReceiverAction", chrome.cast.$g);
chrome.cast.Wd = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
l.g("chrome.cast.SessionStatus", chrome.cast.Wd);
chrome.cast.VERSION = [1, 2];
l.g("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
l.g("chrome.cast.Error", chrome.cast.Error);
chrome.cast.gh = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
l.g("chrome.cast.SenderApplication", chrome.cast.gh);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
l.g("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Gd = function(a, c) {
  this.level = l.R(a) ? a : null;
  this.muted = l.R(c) ? c : null;
};
l.g("chrome.cast.Volume", chrome.cast.Gd);
chrome.cast.media.Sg = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
l.g("chrome.cast.media.MediaCommand", chrome.cast.media.Sg);
chrome.cast.media.O = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
l.g("chrome.cast.media.MetadataType", chrome.cast.media.O);
chrome.cast.media.Fd = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
l.g("chrome.cast.media.PlayerState", chrome.cast.media.Fd);
chrome.cast.media.dh = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
l.g("chrome.cast.media.ResumeState", chrome.cast.media.dh);
chrome.cast.media.Xd = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
l.g("chrome.cast.media.StreamType", chrome.cast.media.Xd);
chrome.cast.media.Lg = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
l.g("chrome.cast.media.IdleReason", chrome.cast.media.Lg);
chrome.cast.media.rh = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
l.g("chrome.cast.media.TrackType", chrome.cast.media.rh);
chrome.cast.media.oh = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
l.g("chrome.cast.media.TextTrackType", chrome.cast.media.oh);
chrome.cast.media.kh = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
l.g("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.kh);
chrome.cast.media.ph = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
l.g("chrome.cast.media.TextTrackWindowType", chrome.cast.media.ph);
chrome.cast.media.lh = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
l.g("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.lh);
chrome.cast.media.mh = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
l.g("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.mh);
chrome.cast.media.Kg = function() {
  this.customData = null;
};
l.g("chrome.cast.media.GetStatusRequest", chrome.cast.media.Kg);
chrome.cast.media.Wg = function() {
  this.customData = null;
};
l.g("chrome.cast.media.PauseRequest", chrome.cast.media.Wg);
chrome.cast.media.Yg = function() {
  this.customData = null;
};
l.g("chrome.cast.media.PlayRequest", chrome.cast.media.Yg);
chrome.cast.media.fh = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
l.g("chrome.cast.media.SeekRequest", chrome.cast.media.fh);
chrome.cast.media.jh = function() {
  this.customData = null;
};
l.g("chrome.cast.media.StopRequest", chrome.cast.media.jh);
chrome.cast.media.th = function(a) {
  this.volume = a;
  this.customData = null;
};
l.g("chrome.cast.media.VolumeRequest", chrome.cast.media.th);
chrome.cast.media.Mg = function(a) {
  this.type = m.ba.qg;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
l.g("chrome.cast.media.LoadRequest", chrome.cast.media.Mg);
chrome.cast.media.Gg = function(a, c) {
  this.requestId = null;
  this.activeTrackIds = a || null;
  this.textTrackStyle = c || null;
};
l.g("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Gg);
chrome.cast.media.Jg = function() {
  this.metadataType = this.type = chrome.cast.media.O.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
l.g("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.Jg);
chrome.cast.media.Ug = function() {
  this.metadataType = this.type = chrome.cast.media.O.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
l.g("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.Ug);
chrome.cast.media.sh = function() {
  this.metadataType = this.type = chrome.cast.media.O.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
l.g("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.sh);
chrome.cast.media.Vg = function() {
  this.metadataType = this.type = chrome.cast.media.O.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
l.g("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.Vg);
chrome.cast.media.Xg = function() {
  this.metadataType = this.type = chrome.cast.media.O.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
l.g("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.Xg);
chrome.cast.media.Tg = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.Xd.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
l.g("chrome.cast.media.MediaInfo", chrome.cast.media.Tg);
chrome.cast.media.Rg = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Fd.IDLE;
  this.currentTime = 0;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Gd;
  this.customData = this.activeTrackIds = this.idleReason = null;
};
l.g("chrome.cast.media.Media", chrome.cast.media.Rg);
chrome.cast.media.Bg = "CC1AD845";
l.g("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Bg);
chrome.cast.media.timeout = {};
l.g("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
l.X(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.Bh = 0;
l.X(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.Bh);
chrome.cast.media.timeout.play = 0;
l.X(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
l.X(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
l.X(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
l.X(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.Uh = 0;
l.X(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.Uh);
chrome.cast.media.timeout.xh = 0;
l.X(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.xh);
chrome.cast.media.qh = function(a, c) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
l.g("chrome.cast.media.Track", chrome.cast.media.qh);
chrome.cast.media.nh = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
l.g("chrome.cast.media.TextTrackStyle", chrome.cast.media.nh);
chrome.cast.yg = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Dd.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Ed.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
l.g("chrome.cast.ApiConfig", chrome.cast.yg);
chrome.cast.Fg = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
l.g("chrome.cast.DialRequest", chrome.cast.Fg);
chrome.cast.Dg = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
l.g("chrome.cast.DialLaunchData", chrome.cast.Dg);
chrome.cast.Eg = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
l.g("chrome.cast.DialLaunchResponse", chrome.cast.Eg);
chrome.cast.ih = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.Tb.VIDEO_OUT, chrome.cast.Tb.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.requestSession;
  this.language = null;
};
l.g("chrome.cast.SessionRequest", chrome.cast.ih);
chrome.cast.Zg = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.Vd.CAST;
  this.displayStatus = this.isActiveInput = null;
};
l.g("chrome.cast.Receiver", chrome.cast.Zg);
chrome.cast.bh = function(a, c) {
  this.statusText = a;
  this.appImages = c;
  this.showStop = null;
};
l.g("chrome.cast.ReceiverDisplayStatus", chrome.cast.bh);
chrome.cast.mb = function(a, c, d, e, f) {
  this.sessionId = a;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.Wd.CONNECTED;
  this.transportId = "";
};
l.g("chrome.cast.Session", chrome.cast.mb);
chrome.cast.mb.zg = "custom_receiver_session_id";
l.X(chrome.cast.mb, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.mb.zg);
chrome.cast.timeout = {};
l.g("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.requestSession = 1E4;
chrome.cast.timeout.leaveSession = 3E3;
chrome.cast.timeout.stopSession = 3E3;
chrome.cast.timeout.setReceiverVolume = 3E3;
chrome.cast.timeout.sendCustomMessage = 3E3;
m.Td = function(a, c, d) {
  l.isNumber(d);
};
m.Td.ai = 432E5;
m.Td.il = function() {
};
m.ti = {};
m.cd = function(a, c, d, e, f, g) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = l.isNumber(f) ? f : 0;
  this.receiverId = g || null;
  this.receiverList = null;
};
m.w = {Pf:"iframe_init_result", Yc:"fail_to_connect_to_extension", di:"client_reconnect", Ff:"v2_message", sf:"app_message", ci:"client_init", Bi:"log_message", Qi:"request_session", Ri:"request_session_by_id", wi:"leave_session", bi:"client_disconnect", Ti:"set_custom_receivers", gi:"custom_dial_launch_response", Ui:"set_receiver_display_status", zf:"receiver_availability", yf:"receiver_action", xf:"new_session", Ef:"update_session", vf:"disconnect_session", Af:"remove_session", tf:"app_message_success", 
wf:"leave_session_success", Df:"set_receiver_volume_success", Bf:"set_custom_receivers_success", ERROR:"error", uf:"custom_dial_launch_request", Cf:"set_receiver_display_status_success"};
l.debug = {};
l.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, l.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
l.va(l.debug.Error, Error);
l.debug.Error.prototype.name = "CustomError";
l.Zc = {};
l.Zc.lf = {kf:1, Yh:2, TEXT:3, $h:4, mi:5, li:6, Oi:7, fi:8, hi:9, ji:10, ii:11, Ji:12};
l.b = {};
l.b.xb = !1;
l.b.Ee = {De:"\u00a0"};
l.b.sb = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
l.b.fe = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
l.b.Gj = function(a, c) {
  return 0 == l.b.Oc(c, a.substr(0, c.length));
};
l.b.Ej = function(a, c) {
  return 0 == l.b.Oc(c, a.substr(a.length - c.length, c.length));
};
l.b.Fj = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
l.b.Pe = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
l.b.Kj = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
l.b.Nc = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
l.b.Fk = function(a) {
  return 0 == a.length;
};
l.b.J = l.b.Nc;
l.b.Fh = function(a) {
  return l.b.Nc(l.b.Be(a));
};
l.b.Ek = l.b.Fh;
l.b.Ak = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
l.b.xk = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
l.b.Nk = function(a) {
  return!/[^0-9]/.test(a);
};
l.b.yk = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
l.b.Rk = function(a) {
  return " " == a;
};
l.b.Sk = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
l.b.Jl = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
l.b.Cj = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
l.b.fl = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
l.b.el = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
l.b.Jj = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
l.b.trim = l.Vb && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
l.b.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
l.b.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
l.b.Oc = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
l.b.Qc = /(\.\d+)|(\d+)|(\D+)/g;
l.b.jl = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(l.b.Qc), e = c.toLowerCase().match(l.b.Qc), f = Math.min(d.length, e.length), g = 0;g < f;g++) {
    var h = d[g], k = e[g];
    if (h != k) {
      return d = parseInt(h, 10), !isNaN(d) && (e = parseInt(k, 10), !isNaN(e) && d - e) ? d - e : h < k ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
l.b.xa = function(a) {
  return encodeURIComponent(String(a));
};
l.b.Xa = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
l.b.Ne = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
l.b.Kc = function(a, c) {
  if (c) {
    a = a.replace(l.b.uc, "&amp;").replace(l.b.xc, "&lt;").replace(l.b.wc, "&gt;").replace(l.b.zc, "&quot;").replace(l.b.Ac, "&#39;").replace(l.b.yc, "&#0;"), l.b.xb && (a = a.replace(l.b.vc, "&#101;"));
  } else {
    if (!l.b.te.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(l.b.uc, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(l.b.xc, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(l.b.wc, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(l.b.zc, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(l.b.Ac, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(l.b.yc, "&#0;"));
    l.b.xb && -1 != a.indexOf("e") && (a = a.replace(l.b.vc, "&#101;"));
  }
  return a;
};
l.b.uc = /&/g;
l.b.xc = /</g;
l.b.wc = />/g;
l.b.zc = /"/g;
l.b.Ac = /'/g;
l.b.yc = /\x00/g;
l.b.vc = /e/g;
l.b.te = l.b.xb ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
l.b.Lc = function(a) {
  return l.b.contains(a, "&") ? "document" in l.global ? l.b.Mc(a) : l.b.Ce(a) : a;
};
l.b.Tl = function(a, c) {
  return l.b.contains(a, "&") ? l.b.Mc(a, c) : a;
};
l.b.Mc = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : l.global.document.createElement("div");
  return a.replace(l.b.Ge, function(a, c) {
    var h = d[a];
    if (h) {
      return h;
    }
    if ("#" == c.charAt(0)) {
      var k = Number("0" + c.substr(1));
      isNaN(k) || (h = String.fromCharCode(k));
    }
    h || (e.innerHTML = a + " ", h = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = h;
  });
};
l.b.Ce = function(a) {
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
l.b.Ge = /&([^;\s<&]+);?/g;
l.b.Wl = function(a, c) {
  return l.b.Ne(a.replace(/  /g, " &#160;"), c);
};
l.b.nl = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + l.b.Ee.De);
};
l.b.Kl = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
l.b.truncate = function(a, c, d) {
  d && (a = l.b.Lc(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = l.b.Kc(a));
  return a;
};
l.b.Sl = function(a, c, d, e) {
  d && (a = l.b.Lc(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = l.b.Kc(a));
  return a;
};
l.b.zb = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
l.b.bb = {"'":"\\'"};
l.b.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = l.b.zb[e] || (31 < f && 127 > f ? e : l.b.Jc(e));
  }
  c.push('"');
  return c.join("");
};
l.b.$j = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = l.b.Jc(a.charAt(d));
  }
  return c.join("");
};
l.b.Jc = function(a) {
  if (a in l.b.bb) {
    return l.b.bb[a];
  }
  if (a in l.b.zb) {
    return l.b.bb[a] = l.b.zb[a];
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
  return l.b.bb[a] = c;
};
l.b.contains = function(a, c) {
  return-1 != a.indexOf(c);
};
l.b.be = function(a, c) {
  return l.b.contains(a.toLowerCase(), c.toLowerCase());
};
l.b.Qj = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
l.b.Da = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
l.b.remove = function(a, c) {
  var d = new RegExp(l.b.Ab(c), "");
  return a.replace(d, "");
};
l.b.removeAll = function(a, c) {
  var d = new RegExp(l.b.Ab(c), "g");
  return a.replace(d, "");
};
l.b.Ab = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
l.b.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
l.b.ml = function(a, c, d) {
  a = l.R(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return l.b.repeat("0", Math.max(0, c - d)) + a;
};
l.b.Be = function(a) {
  return null == a ? "" : String(a);
};
l.b.ee = function(a) {
  return Array.prototype.join.call(arguments, "");
};
l.b.$b = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ l.now()).toString(36);
};
l.b.Aa = function(a, c) {
  for (var d = 0, e = l.b.trim(String(a)).split("."), f = l.b.trim(String(c)).split("."), g = Math.max(e.length, f.length), h = 0;0 == d && h < g;h++) {
    var k = e[h] || "", n = f[h] || "", p = /(\d*)(\D*)/g, t = /(\d*)(\D*)/g;
    do {
      var q = p.exec(k) || ["", "", ""], r = t.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == r[0].length) {
        break;
      }
      d = l.b.Bb(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || l.b.Bb(0 == q[2].length, 0 == r[2].length) || l.b.Bb(q[2], r[2]);
    } while (0 == d);
  }
  return d;
};
l.b.Bb = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
l.b.Fe = 4294967296;
l.b.uk = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= l.b.Fe;
  }
  return c;
};
l.b.Qe = 2147483648 * Math.random() | 0;
l.b.Uj = function() {
  return "goog_" + l.b.Qe++;
};
l.b.Pl = function(a) {
  var c = Number(a);
  return 0 == c && l.b.J(a) ? NaN : c;
};
l.b.Lk = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
l.b.Tk = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
l.b.Ol = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
l.b.Ql = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
l.b.Rl = function(a, c) {
  var d = l.isString(c) ? l.b.Ab(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
l.b.Dj = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
l.b.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return l.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
l.b.El = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
l.i = {};
l.i.N = l.ja;
l.i.hb = function(a, c) {
  c.unshift(a);
  l.debug.Error.call(this, l.b.Pe.apply(null, c));
  c.shift();
};
l.va(l.i.hb, l.debug.Error);
l.i.hb.prototype.name = "AssertionError";
l.i.Ag = function(a) {
  throw a;
};
l.i.Lb = l.i.Ag;
l.i.U = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), g = e
  } else {
    a && (f += ": " + a, g = c);
  }
  a = new l.i.hb("" + f, g || []);
  l.i.Lb(a);
};
l.i.xl = function(a) {
  l.i.N && (l.i.Lb = a);
};
l.i.assert = function(a, c, d) {
  l.i.N && !a && l.i.U("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.i.fd = function(a, c) {
  l.i.N && l.i.Lb(new l.i.hb("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
l.i.rj = function(a, c, d) {
  l.i.N && !l.isNumber(a) && l.i.U("Expected number but got %s: %s.", [l.L(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.i.uj = function(a, c, d) {
  l.i.N && !l.isString(a) && l.i.U("Expected string but got %s: %s.", [l.L(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.i.pj = function(a, c, d) {
  l.i.N && !l.isFunction(a) && l.i.U("Expected function but got %s: %s.", [l.L(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.i.sj = function(a, c, d) {
  l.i.N && !l.isObject(a) && l.i.U("Expected object but got %s: %s.", [l.L(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.i.mj = function(a, c, d) {
  l.i.N && !l.isArray(a) && l.i.U("Expected array but got %s: %s.", [l.L(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.i.nj = function(a, c, d) {
  l.i.N && !l.mf(a) && l.i.U("Expected boolean but got %s: %s.", [l.L(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.i.oj = function(a, c, d) {
  !l.i.N || l.isObject(a) && a.nodeType == l.Zc.lf.kf || l.i.U("Expected Element but got %s: %s.", [l.L(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.i.qj = function(a, c, d, e) {
  !l.i.N || a instanceof c || l.i.U("Expected instanceof %s but got %s.", [l.i.bd(c), l.i.bd(a)], d, Array.prototype.slice.call(arguments, 3));
  return a;
};
l.i.tj = function() {
  for (var a in Object.prototype) {
    l.i.fd(a + " should not be enumerable in Object.prototype.");
  }
};
l.i.bd = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
l.a = {};
l.W = l.Vb;
l.a.V = !1;
l.a.Sh = function(a) {
  return a[a.length - 1];
};
l.a.Vk = l.a.Sh;
l.a.n = Array.prototype;
l.a.indexOf = l.W && (l.a.V || l.a.n.indexOf) ? function(a, c, d) {
  return l.a.n.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (l.isString(a)) {
    return l.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
l.a.lastIndexOf = l.W && (l.a.V || l.a.n.lastIndexOf) ? function(a, c, d) {
  return l.a.n.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (l.isString(a)) {
    return l.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
l.a.forEach = l.W && (l.a.V || l.a.n.forEach) ? function(a, c, d) {
  l.a.n.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    g in f && c.call(d, f[g], g, a);
  }
};
l.a.Gc = function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
l.a.filter = l.W && (l.a.V || l.a.n.filter) ? function(a, c, d) {
  return l.a.n.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], g = 0, h = l.isString(a) ? a.split("") : a, k = 0;k < e;k++) {
    if (k in h) {
      var n = h[k];
      c.call(d, n, k, a) && (f[g++] = n);
    }
  }
  return f;
};
l.a.map = l.W && (l.a.V || l.a.n.map) ? function(a, c, d) {
  return l.a.n.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), g = l.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in g && (f[h] = c.call(d, g[h], h, a));
  }
  return f;
};
l.a.reduce = l.W && (l.a.V || l.a.n.reduce) ? function(a, c, d, e) {
  e && (c = l.bind(c, e));
  return l.a.n.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  l.a.forEach(a, function(d, h) {
    f = c.call(e, f, d, h, a);
  });
  return f;
};
l.a.reduceRight = l.W && (l.a.V || l.a.n.reduceRight) ? function(a, c, d, e) {
  e && (c = l.bind(c, e));
  return l.a.n.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  l.a.Gc(a, function(d, h) {
    f = c.call(e, f, d, h, a);
  });
  return f;
};
l.a.some = l.W && (l.a.V || l.a.n.some) ? function(a, c, d) {
  return l.a.n.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return!0;
    }
  }
  return!1;
};
l.a.every = l.W && (l.a.V || l.a.n.every) ? function(a, c, d) {
  return l.a.n.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && !c.call(d, f[g], g, a)) {
      return!1;
    }
  }
  return!0;
};
l.a.count = function(a, c, d) {
  var e = 0;
  l.a.forEach(a, function(a, g, h) {
    c.call(d, a, g, h) && ++e;
  }, d);
  return e;
};
l.a.find = function(a, c, d) {
  c = l.a.Fc(a, c, d);
  return 0 > c ? null : l.isString(a) ? a.charAt(c) : a[c];
};
l.a.Fc = function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return g;
    }
  }
  return-1;
};
l.a.bk = function(a, c, d) {
  c = l.a.xe(a, c, d);
  return 0 > c ? null : l.isString(a) ? a.charAt(c) : a[c];
};
l.a.xe = function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in f && c.call(d, f[e], e, a)) {
      return e;
    }
  }
  return-1;
};
l.a.contains = function(a, c) {
  return 0 <= l.a.indexOf(a, c);
};
l.a.J = function(a) {
  return 0 == a.length;
};
l.a.clear = function(a) {
  if (!l.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
l.a.insert = function(a, c) {
  l.a.contains(a, c) || a.push(c);
};
l.a.Hc = function(a, c, d) {
  l.a.splice(a, d, 0, c);
};
l.a.wk = function(a, c, d) {
  l.tb(l.a.splice, a, d, 0).apply(null, c);
};
l.a.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = l.a.indexOf(a, d)) ? a.push(c) : l.a.Hc(a, c, e);
};
l.a.remove = function(a, c) {
  var d = l.a.indexOf(a, c), e;
  (e = 0 <= d) && l.a.Da(a, d);
  return e;
};
l.a.Da = function(a, c) {
  return 1 == l.a.n.splice.call(a, c, 1).length;
};
l.a.sl = function(a, c, d) {
  c = l.a.Fc(a, c, d);
  return 0 <= c ? (l.a.Da(a, c), !0) : !1;
};
l.a.ql = function(a, c, d) {
  var e = 0;
  l.a.Gc(a, function(f, g) {
    c.call(d, f, g, a) && l.a.Da(a, g) && e++;
  });
  return e;
};
l.a.concat = function(a) {
  return l.a.n.concat.apply(l.a.n, arguments);
};
l.a.join = function(a) {
  return l.a.n.concat.apply(l.a.n, arguments);
};
l.a.aa = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return[];
};
l.a.clone = l.a.aa;
l.a.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d], f;
    if (l.isArray(e) || (f = l.v(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) {
      a.push.apply(a, e);
    } else {
      if (f) {
        for (var g = a.length, h = e.length, k = 0;k < h;k++) {
          a[g + k] = e[k];
        }
      } else {
        a.push(e);
      }
    }
  }
};
l.a.splice = function(a, c, d, e) {
  return l.a.n.splice.apply(a, l.a.slice(arguments, 1));
};
l.a.slice = function(a, c, d) {
  return 2 >= arguments.length ? l.a.n.slice.call(a, c) : l.a.n.slice.call(a, c, d);
};
l.a.ze = function(a, c, d) {
  c = c || a;
  d = d || function() {
    return l.isObject(h) ? "o" + l.Yd(h) : (typeof h).charAt(0) + h;
  };
  for (var e = {}, f = 0, g = 0;g < a.length;) {
    var h = a[g++], k = d(h);
    Object.prototype.hasOwnProperty.call(e, k) || (e[k] = !0, c[f++] = h);
  }
  c.length = f;
};
l.a.Dc = function(a, c, d) {
  return l.a.Ec(a, d || l.a.ea, !1, c);
};
l.a.xj = function(a, c, d) {
  return l.a.Ec(a, c, !0, void 0, d);
};
l.a.Ec = function(a, c, d, e, f) {
  for (var g = 0, h = a.length, k;g < h;) {
    var n = g + h >> 1, p;
    p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < p ? g = n + 1 : (h = n, k = !p);
  }
  return k ? g : ~g;
};
l.a.sort = function(a, c) {
  a.sort(c || l.a.ea);
};
l.a.Fl = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || l.a.ea;
  l.a.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
l.a.Ae = function(a, c, d) {
  var e = d || l.a.ea;
  l.a.sort(a, function(a, d) {
    return e(c(a), c(d));
  });
};
l.a.Dl = function(a, c, d) {
  l.a.Ae(a, function(a) {
    return a[c];
  }, d);
};
l.a.cc = function(a, c, d) {
  c = c || l.a.ea;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return!1;
    }
  }
  return!0;
};
l.a.equals = function(a, c, d) {
  if (!l.v(a) || !l.v(c) || a.length != c.length) {
    return!1;
  }
  var e = a.length;
  d = d || l.a.dc;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return!1;
    }
  }
  return!0;
};
l.a.Nj = function(a, c, d) {
  d = d || l.a.ea;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var g = d(a[f], c[f]);
    if (0 != g) {
      return g;
    }
  }
  return l.a.ea(a.length, c.length);
};
l.a.ea = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
l.a.dc = function(a, c) {
  return a === c;
};
l.a.vj = function(a, c, d) {
  d = l.a.Dc(a, c, d);
  return 0 > d ? (l.a.Hc(a, c, -(d + 1)), !0) : !1;
};
l.a.wj = function(a, c, d) {
  c = l.a.Dc(a, c, d);
  return 0 <= c ? l.a.Da(a, c) : !1;
};
l.a.yj = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var g = a[f], h = c.call(d, g, f, a);
    l.R(h) && (e[h] || (e[h] = [])).push(g);
  }
  return e;
};
l.a.Vh = function(a, c, d) {
  var e = {};
  l.a.forEach(a, function(f, g) {
    e[c.call(d, f, g, a)] = f;
  });
  return e;
};
l.a.Ya = function(a, c, d) {
  var e = [], f = 0, g = a;
  d = d || 1;
  void 0 !== c && (f = a, g = c);
  if (0 > d * (g - f)) {
    return[];
  }
  if (0 < d) {
    for (a = f;a < g;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > g;a += d) {
      e.push(a);
    }
  }
  return e;
};
l.a.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
l.a.ye = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    if (l.isArray(e)) {
      for (var f = 0;f < e.length;f += 8192) {
        for (var g = l.a.slice(e, f, f + 8192), g = l.a.ye.apply(null, g), h = 0;h < g.length;h++) {
          c.push(g[h]);
        }
      }
    } else {
      c.push(e);
    }
  }
  return c;
};
l.a.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? l.a.n.unshift.apply(a, a.splice(-c, c)) : 0 > c && l.a.n.push.apply(a, a.splice(0, -c)));
  return a;
};
l.a.cl = function(a, c, d) {
  c = l.a.n.splice.call(a, c, 1);
  l.a.n.splice.call(a, d, 0, c[0]);
};
l.a.Xc = function(a) {
  if (!arguments.length) {
    return[];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var g = arguments[f];
      if (d >= g.length) {
        return c;
      }
      e.push(g[d]);
    }
    c.push(e);
  }
};
l.a.Cl = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), g = a[e];
    a[e] = a[f];
    a[f] = g;
  }
};
l.o = {};
l.o.constant = function(a) {
  return function() {
    return a;
  };
};
l.o.ni = l.o.constant(!1);
l.o.Wi = l.o.constant(!0);
l.o.Ki = l.o.constant(null);
l.o.identity = function(a) {
  return a;
};
l.o.error = function(a) {
  return function() {
    throw Error(a);
  };
};
l.o.fd = function(a) {
  return function() {
    throw a;
  };
};
l.o.Yk = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
l.o.gl = function(a) {
  return function() {
    return arguments[a];
  };
};
l.o.Xl = function(a, c) {
  return l.o.Sf(a, l.o.constant(c));
};
l.o.Zj = function(a, c) {
  return function(d) {
    return c ? a == d : a === d;
  };
};
l.o.Oj = function(a, c) {
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
l.o.Sf = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
l.o.ej = function(a) {
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
l.o.ll = function(a) {
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
l.o.Ue = function(a) {
  return function() {
    return!a.apply(this, arguments);
  };
};
l.o.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
l.o.Rf = !0;
l.o.Bj = function(a) {
  var c = !1, d;
  return function() {
    if (!l.o.Rf) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
l.k = {};
l.k.pl = function(a) {
  return Math.floor(Math.random() * a);
};
l.k.Ul = function(a, c) {
  return a + Math.random() * (c - a);
};
l.k.Ij = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
l.k.md = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
l.k.Wk = function(a, c, d) {
  return a + d * (c - a);
};
l.k.dl = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
l.k.Pb = function(a) {
  return l.k.md(a, 360);
};
l.k.Gl = function(a) {
  return l.k.md(a, 2 * Math.PI);
};
l.k.nd = function(a) {
  return a * Math.PI / 180;
};
l.k.Jf = function(a) {
  return 180 * a / Math.PI;
};
l.k.hj = function(a, c) {
  return c * Math.cos(l.k.nd(a));
};
l.k.ij = function(a, c) {
  return c * Math.sin(l.k.nd(a));
};
l.k.fj = function(a, c, d, e) {
  return l.k.Pb(l.k.Jf(Math.atan2(e - c, d - a)));
};
l.k.gj = function(a, c) {
  var d = l.k.Pb(c) - l.k.Pb(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
l.k.sign = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
l.k.al = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, g = c.length, h = [], k = 0;k < f + 1;k++) {
    h[k] = [], h[k][0] = 0;
  }
  for (var n = 0;n < g + 1;n++) {
    h[0][n] = 0;
  }
  for (k = 1;k <= f;k++) {
    for (n = 1;n <= g;n++) {
      d(a[k - 1], c[n - 1]) ? h[k][n] = h[k - 1][n - 1] + 1 : h[k][n] = Math.max(h[k - 1][n], h[k][n - 1]);
    }
  }
  for (var p = [], k = f, n = g;0 < k && 0 < n;) {
    d(a[k - 1], c[n - 1]) ? (p.unshift(e(k - 1, n - 1)), k--, n--) : h[k - 1][n] > h[k][n - 1] ? k-- : n--;
  }
  return p;
};
l.k.pc = function(a) {
  return l.a.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
l.k.pe = function(a) {
  return l.k.pc.apply(null, arguments) / arguments.length;
};
l.k.Of = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = l.k.pe.apply(null, arguments);
  return l.k.pc.apply(null, l.a.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
l.k.Hl = function(a) {
  return Math.sqrt(l.k.Of.apply(null, arguments));
};
l.k.Jk = function(a) {
  return isFinite(a) && 0 == a % 1;
};
l.k.Gk = function(a) {
  return isFinite(a) && !isNaN(a);
};
l.k.Zk = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
l.k.vl = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
l.k.ul = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
l.e = {};
l.e.B = "StopIteration" in l.global ? l.global.StopIteration : Error("StopIteration");
l.e.p = function() {
};
l.e.p.prototype.next = function() {
  throw l.e.B;
};
l.e.p.prototype.yb = function() {
  return this;
};
l.e.t = function(a) {
  if (a instanceof l.e.p) {
    return a;
  }
  if ("function" == typeof a.yb) {
    return a.yb(!1);
  }
  if (l.v(a)) {
    var c = 0, d = new l.e.p;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw l.e.B;
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
l.e.forEach = function(a, c, d) {
  if (l.v(a)) {
    try {
      l.a.forEach(a, c, d);
    } catch (e) {
      if (e !== l.e.B) {
        throw e;
      }
    }
  } else {
    a = l.e.t(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (f) {
      if (f !== l.e.B) {
        throw f;
      }
    }
  }
};
l.e.filter = function(a, c, d) {
  var e = l.e.t(a);
  a = new l.e.p;
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
l.e.ak = function(a, c, d) {
  return l.e.filter(a, l.o.Ue(c), d);
};
l.e.Ya = function(a, c, d) {
  var e = 0, f = a, g = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == g) {
    throw Error("Range step argument must not be zero");
  }
  var h = new l.e.p;
  h.next = function() {
    if (0 < g && e >= f || 0 > g && e <= f) {
      throw l.e.B;
    }
    var a = e;
    e += g;
    return a;
  };
  return h;
};
l.e.join = function(a, c) {
  return l.e.aa(a).join(c);
};
l.e.map = function(a, c, d) {
  var e = l.e.t(a);
  a = new l.e.p;
  a.next = function() {
    var a = e.next();
    return c.call(d, a, void 0, e);
  };
  return a;
};
l.e.reduce = function(a, c, d, e) {
  var f = d;
  l.e.forEach(a, function(a) {
    f = c.call(e, f, a);
  });
  return f;
};
l.e.some = function(a, c, d) {
  a = l.e.t(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return!0;
      }
    }
  } catch (e) {
    if (e !== l.e.B) {
      throw e;
    }
  }
  return!1;
};
l.e.every = function(a, c, d) {
  a = l.e.t(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return!1;
      }
    }
  } catch (e) {
    if (e !== l.e.B) {
      throw e;
    }
  }
  return!0;
};
l.e.Hj = function(a) {
  return l.e.ff(arguments);
};
l.e.ff = function(a) {
  var c = l.e.t(a);
  a = new l.e.p;
  var d = null;
  a.next = function() {
    for (;;) {
      if (null == d) {
        var a = c.next();
        d = l.e.t(a);
      }
      try {
        return d.next();
      } catch (f) {
        if (f !== l.e.B) {
          throw f;
        }
        d = null;
      }
    }
  };
  return a;
};
l.e.Xj = function(a, c, d) {
  var e = l.e.t(a);
  a = new l.e.p;
  var f = !0;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (!f || !c.call(d, a, void 0, e)) {
        return f = !1, a;
      }
    }
  };
  return a;
};
l.e.Ml = function(a, c, d) {
  var e = l.e.t(a);
  a = new l.e.p;
  a.next = function() {
    var a = e.next();
    if (c.call(d, a, void 0, e)) {
      return a;
    }
    throw l.e.B;
  };
  return a;
};
l.e.aa = function(a) {
  if (l.v(a)) {
    return l.a.aa(a);
  }
  a = l.e.t(a);
  var c = [];
  l.e.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
l.e.equals = function(a, c, d) {
  a = l.e.he({}, a, c);
  var e = d || l.a.dc;
  return l.e.every(a, function(a) {
    return e(a[0], a[1]);
  });
};
l.e.cf = function(a, c) {
  try {
    return l.e.t(a).next();
  } catch (d) {
    if (d != l.e.B) {
      throw d;
    }
    return c;
  }
};
l.e.product = function(a) {
  if (l.a.some(arguments, function(a) {
    return!a.length;
  }) || !arguments.length) {
    return new l.e.p;
  }
  var c = new l.e.p, d = arguments, e = l.a.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = l.a.map(e, function(a, c) {
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
    throw l.e.B;
  };
  return c;
};
l.e.Vj = function(a) {
  var c = l.e.t(a), d = [], e = 0;
  a = new l.e.p;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (h) {
        if (h != l.e.B || l.a.J(d)) {
          throw h;
        }
        f = !0;
      }
    }
    a = d[e];
    e = (e + 1) % d.length;
    return a;
  };
  return a;
};
l.e.count = function(a, c) {
  var d = a || 0, e = l.R(c) ? c : 1, f = new l.e.p;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
l.e.repeat = function(a) {
  var c = new l.e.p;
  c.next = l.o.constant(a);
  return c;
};
l.e.bj = function(a) {
  var c = l.e.t(a), d = 0;
  a = new l.e.p;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
l.e.Xc = function(a) {
  var c = arguments, d = new l.e.p;
  if (0 < c.length) {
    var e = l.a.map(c, l.e.t);
    d.next = function() {
      return l.a.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
l.e.he = function(a, c) {
  var d = l.a.slice(arguments, 1), e = new l.e.p;
  if (0 < d.length) {
    var f = l.a.map(d, l.e.t);
    e.next = function() {
      var c = !1, d = l.a.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== l.e.B) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw l.e.B;
      }
      return d;
    };
  }
  return e;
};
l.e.Pj = function(a, c) {
  var d = l.e.t(c);
  return l.e.filter(a, function() {
    return!!d.next();
  });
};
l.e.fb = function(a, c) {
  this.nc = l.e.t(a);
  this.oc = c || l.o.identity;
};
l.va(l.e.fb, l.e.p);
l.e.fb.prototype.next = function() {
  for (;this.Ea == this.td;) {
    this.cb = this.nc.next(), this.Ea = this.oc(this.cb);
  }
  this.td = this.Ea;
  return[this.Ea, this.Wf(this.td)];
};
l.e.fb.prototype.Wf = function(a) {
  for (var c = [];this.Ea == a;) {
    c.push(this.cb);
    try {
      this.cb = this.nc.next();
    } catch (d) {
      if (d !== l.e.B) {
        throw d;
      }
      break;
    }
    this.Ea = this.oc(this.cb);
  }
  return c;
};
l.e.rk = function(a, c) {
  return new l.e.fb(a, c);
};
l.e.Il = function(a, c, d) {
  var e = l.e.t(a);
  a = new l.e.p;
  a.next = function() {
    var a = l.e.aa(e.next());
    return c.apply(d, l.a.concat(a, void 0, e));
  };
  return a;
};
l.e.Nl = function(a, c) {
  var d = l.e.t(a), e = l.isNumber(c) ? c : 2, f = l.a.map(l.a.Ya(e), function() {
    return[];
  }), g = function() {
    var a = d.next();
    l.a.forEach(f, function(c) {
      c.push(a);
    });
  };
  return l.a.map(f, function(a) {
    var c = new l.e.p;
    c.next = function() {
      l.a.J(a) && g();
      return a.shift();
    };
    return c;
  });
};
l.e.Yj = function(a, c) {
  return l.e.Xc(l.e.count(c), a);
};
l.e.limit = function(a, c) {
  var d = l.e.t(a), e = new l.e.p, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw l.e.B;
  };
  return e;
};
l.e.gf = function(a, c) {
  for (var d = l.e.t(a);0 < c--;) {
    l.e.cf(d, null);
  }
  return d;
};
l.e.slice = function(a, c, d) {
  a = l.e.gf(a, c);
  l.isNumber(d) && (a = l.e.limit(a, d - c));
  return a;
};
l.e.ge = function(a) {
  var c = [];
  l.a.ze(a, c);
  return a.length != c.length;
};
l.e.ce = function(a, c) {
  var d = l.e.aa(a), e = l.isNumber(c) ? c : d.length, d = l.a.repeat(d, e), d = l.e.product.apply(void 0, d);
  return l.e.filter(d, function(a) {
    return!l.e.ge(a);
  });
};
l.e.Lj = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = l.e.aa(a), f = l.e.Ya(e.length), f = l.e.ce(f, c), g = l.e.filter(f, function(a) {
    return l.a.cc(a);
  }), f = new l.e.p;
  f.next = function() {
    return l.a.map(g.next(), d);
  };
  return f;
};
l.e.Mj = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = l.e.aa(a), f = l.a.Ya(e.length), f = l.a.repeat(f, c), f = l.e.product.apply(void 0, f), g = l.e.filter(f, function(a) {
    return l.a.cc(a);
  }), f = new l.e.p;
  f.next = function() {
    return l.a.map(g.next(), d);
  };
  return f;
};
l.object = {};
l.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
l.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
l.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
l.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return!0;
    }
  }
  return!1;
};
l.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return!1;
    }
  }
  return!0;
};
l.object.ga = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
l.object.ek = function(a) {
  for (var c in a) {
    return c;
  }
};
l.object.fk = function(a) {
  for (var c in a) {
    return a[c];
  }
};
l.object.contains = function(a, c) {
  return l.object.sa(a, c);
};
l.object.u = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
l.object.A = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
l.object.pk = function(a, c) {
  for (var d = l.v(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], l.R(a));d++) {
  }
  return a;
};
l.object.da = function(a, c) {
  return c in a;
};
l.object.sa = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return!0;
    }
  }
  return!1;
};
l.object.zh = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
l.object.ck = function(a, c, d) {
  return(c = l.object.zh(a, c, d)) && a[c];
};
l.object.J = function(a) {
  for (var c in a) {
    return!1;
  }
  return!0;
};
l.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
l.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
l.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  l.object.set(a, c, d);
};
l.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
l.object.set = function(a, c, d) {
  a[c] = d;
};
l.object.zl = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
l.object.equals = function(a, c) {
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
l.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
l.object.lg = function(a) {
  var c = l.L(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = l.object.lg(a[d]);
    }
    return c;
  }
  return a;
};
l.object.Wh = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
l.object.Ud = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
l.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var g = 0;g < l.object.Ud.length;g++) {
      d = l.object.Ud[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
l.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && l.isArray(arguments[0])) {
    return l.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
l.object.uh = function(a) {
  var c = arguments.length;
  if (1 == c && l.isArray(arguments[0])) {
    return l.object.uh.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
l.object.Tj = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
l.object.Ik = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
l.j = {};
l.j.C = function(a, c) {
  this.D = {};
  this.r = [];
  this.Ba = this.q = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.rf(a);
  }
};
b = l.j.C.prototype;
b.ga = function() {
  return this.q;
};
b.u = function() {
  this.pa();
  for (var a = [], c = 0;c < this.r.length;c++) {
    a.push(this.D[this.r[c]]);
  }
  return a;
};
b.A = function() {
  this.pa();
  return this.r.concat();
};
b.da = function(a) {
  return l.j.C.fa(this.D, a);
};
b.sa = function(a) {
  for (var c = 0;c < this.r.length;c++) {
    var d = this.r[c];
    if (l.j.C.fa(this.D, d) && this.D[d] == a) {
      return!0;
    }
  }
  return!1;
};
b.equals = function(a, c) {
  if (this === a) {
    return!0;
  }
  if (this.q != a.ga()) {
    return!1;
  }
  var d = c || l.j.C.hf;
  this.pa();
  for (var e, f = 0;e = this.r[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
l.j.C.hf = function(a, c) {
  return a === c;
};
b = l.j.C.prototype;
b.J = function() {
  return 0 == this.q;
};
b.clear = function() {
  this.D = {};
  this.Ba = this.q = this.r.length = 0;
};
b.remove = function(a) {
  return l.j.C.fa(this.D, a) ? (delete this.D[a], this.q--, this.Ba++, this.r.length > 2 * this.q && this.pa(), !0) : !1;
};
b.pa = function() {
  if (this.q != this.r.length) {
    for (var a = 0, c = 0;a < this.r.length;) {
      var d = this.r[a];
      l.j.C.fa(this.D, d) && (this.r[c++] = d);
      a++;
    }
    this.r.length = c;
  }
  if (this.q != this.r.length) {
    for (var e = {}, c = a = 0;a < this.r.length;) {
      d = this.r[a], l.j.C.fa(e, d) || (this.r[c++] = d, e[d] = 1), a++;
    }
    this.r.length = c;
  }
};
b.get = function(a, c) {
  return l.j.C.fa(this.D, a) ? this.D[a] : c;
};
b.set = function(a, c) {
  l.j.C.fa(this.D, a) || (this.q++, this.r.push(a), this.Ba++);
  this.D[a] = c;
};
b.rf = function(a) {
  var c;
  a instanceof l.j.C ? (c = a.A(), a = a.u()) : (c = l.object.A(a), a = l.object.u(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.forEach = function(a, c) {
  for (var d = this.A(), e = 0;e < d.length;e++) {
    var f = d[e], g = this.get(f);
    a.call(c, g, f, this);
  }
};
b.clone = function() {
  return new l.j.C(this);
};
b.Wh = function() {
  for (var a = new l.j.C, c = 0;c < this.r.length;c++) {
    var d = this.r[c];
    a.set(this.D[d], d);
  }
  return a;
};
b.Vh = function() {
  this.pa();
  for (var a = {}, c = 0;c < this.r.length;c++) {
    var d = this.r[c];
    a[d] = this.D[d];
  }
  return a;
};
b.yb = function(a) {
  this.pa();
  var c = 0, d = this.r, e = this.D, f = this.Ba, g = this, h = new l.e.p;
  h.next = function() {
    for (;;) {
      if (f != g.Ba) {
        throw Error("The map has changed since the iterator was created");
      }
      if (c >= d.length) {
        throw l.e.B;
      }
      var h = d[c++];
      return a ? h : e[h];
    }
  };
  return h;
};
l.j.C.fa = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
l.j.ga = function(a) {
  return "function" == typeof a.ga ? a.ga() : l.v(a) || l.isString(a) ? a.length : l.object.ga(a);
};
l.j.u = function(a) {
  if ("function" == typeof a.u) {
    return a.u();
  }
  if (l.isString(a)) {
    return a.split("");
  }
  if (l.v(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return l.object.u(a);
};
l.j.A = function(a) {
  if ("function" == typeof a.A) {
    return a.A();
  }
  if ("function" != typeof a.u) {
    if (l.v(a) || l.isString(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return l.object.A(a);
  }
};
l.j.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.sa ? a.sa(c) : l.v(a) || l.isString(a) ? l.a.contains(a, c) : l.object.sa(a, c);
};
l.j.J = function(a) {
  return "function" == typeof a.J ? a.J() : l.v(a) || l.isString(a) ? l.a.J(a) : l.object.J(a);
};
l.j.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : l.v(a) ? l.a.clear(a) : l.object.clear(a);
};
l.j.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (l.v(a) || l.isString(a)) {
      l.a.forEach(a, c, d);
    } else {
      for (var e = l.j.A(a), f = l.j.u(a), g = f.length, h = 0;h < g;h++) {
        c.call(d, f[h], e && e[h], a);
      }
    }
  }
};
l.j.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (l.v(a) || l.isString(a)) {
    return l.a.filter(a, c, d);
  }
  var e, f = l.j.A(a), g = l.j.u(a), h = g.length;
  if (f) {
    e = {};
    for (var k = 0;k < h;k++) {
      c.call(d, g[k], f[k], a) && (e[f[k]] = g[k]);
    }
  } else {
    for (e = [], k = 0;k < h;k++) {
      c.call(d, g[k], void 0, a) && e.push(g[k]);
    }
  }
  return e;
};
l.j.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (l.v(a) || l.isString(a)) {
    return l.a.map(a, c, d);
  }
  var e, f = l.j.A(a), g = l.j.u(a), h = g.length;
  if (f) {
    e = {};
    for (var k = 0;k < h;k++) {
      e[f[k]] = c.call(d, g[k], f[k], a);
    }
  } else {
    for (e = [], k = 0;k < h;k++) {
      e[k] = c.call(d, g[k], void 0, a);
    }
  }
  return e;
};
l.j.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (l.v(a) || l.isString(a)) {
    return l.a.some(a, c, d);
  }
  for (var e = l.j.A(a), f = l.j.u(a), g = f.length, h = 0;h < g;h++) {
    if (c.call(d, f[h], e && e[h], a)) {
      return!0;
    }
  }
  return!1;
};
l.j.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (l.v(a) || l.isString(a)) {
    return l.a.every(a, c, d);
  }
  for (var e = l.j.A(a), f = l.j.u(a), g = f.length, h = 0;h < g;h++) {
    if (!c.call(d, f[h], e && e[h], a)) {
      return!1;
    }
  }
  return!0;
};
l.d = {};
l.d.userAgent = {};
l.d.userAgent.h = {};
l.d.userAgent.h.Cc = function() {
  var a = l.d.userAgent.h.ue();
  return a && (a = a.userAgent) ? a : "";
};
l.d.userAgent.h.ue = function() {
  return l.global.navigator;
};
l.d.userAgent.h.Bc = l.d.userAgent.h.Cc();
l.d.userAgent.h.Bl = function(a) {
  l.d.userAgent.h.Bc = a || l.d.userAgent.h.Cc();
};
l.d.userAgent.h.oa = function() {
  return l.d.userAgent.h.Bc;
};
l.d.userAgent.h.m = function(a) {
  return l.b.contains(l.d.userAgent.h.oa(), a);
};
l.d.userAgent.h.ve = function(a) {
  return l.b.be(l.d.userAgent.h.oa(), a);
};
l.d.userAgent.h.Zb = function(a) {
  for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
l.d.userAgent.browser = {};
l.d.userAgent.browser.Qh = function() {
  return l.d.userAgent.h.m("Opera") || l.d.userAgent.h.m("OPR");
};
l.d.userAgent.browser.Oh = function() {
  return l.d.userAgent.h.m("Trident") || l.d.userAgent.h.m("MSIE");
};
l.d.userAgent.browser.Nh = function() {
  return l.d.userAgent.h.m("Firefox");
};
l.d.userAgent.browser.mc = function() {
  return l.d.userAgent.h.m("Safari") && !l.d.userAgent.h.m("Chrome") && !l.d.userAgent.h.m("CriOS") && !l.d.userAgent.h.m("Android");
};
l.d.userAgent.browser.lc = function() {
  return l.d.userAgent.h.m("Coast");
};
l.d.userAgent.browser.Ph = function() {
  return(l.d.userAgent.h.m("iPad") || l.d.userAgent.h.m("iPhone")) && !l.d.userAgent.browser.mc() && !l.d.userAgent.browser.kc() && !l.d.userAgent.browser.lc() && l.d.userAgent.h.m("AppleWebKit");
};
l.d.userAgent.browser.kc = function() {
  return l.d.userAgent.h.m("Chrome") || l.d.userAgent.h.m("CriOS");
};
l.d.userAgent.browser.Mh = function() {
  return!l.d.userAgent.browser.Xb() && l.d.userAgent.h.m("Android");
};
l.d.userAgent.browser.bc = l.d.userAgent.browser.Qh;
l.d.userAgent.browser.ac = l.d.userAgent.browser.Oh;
l.d.userAgent.browser.Hk = l.d.userAgent.browser.Nh;
l.d.userAgent.browser.Pk = l.d.userAgent.browser.mc;
l.d.userAgent.browser.Bk = l.d.userAgent.browser.lc;
l.d.userAgent.browser.Kk = l.d.userAgent.browser.Ph;
l.d.userAgent.browser.Xb = l.d.userAgent.browser.kc;
l.d.userAgent.browser.zk = l.d.userAgent.browser.Mh;
l.d.userAgent.browser.Qk = function() {
  return l.d.userAgent.h.m("Silk");
};
l.d.userAgent.browser.Ca = function() {
  function a(a) {
    a = l.a.find(a, e);
    return d[a] || "";
  }
  var c = l.d.userAgent.h.oa();
  if (l.d.userAgent.browser.ac()) {
    return l.d.userAgent.browser.ae(c);
  }
  var c = l.d.userAgent.h.Zb(c), d = {};
  l.a.forEach(c, function(a) {
    d[a[0]] = a[1];
  });
  var e = l.tb(l.object.da, d);
  return l.d.userAgent.browser.bc() ? a(["Version", "Opera", "OPR"]) : l.d.userAgent.browser.Xb() ? a(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || "";
};
l.d.userAgent.browser.ob = function(a) {
  return 0 <= l.b.Aa(l.d.userAgent.browser.Ca(), a);
};
l.d.userAgent.browser.ae = function(a) {
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
l.d.userAgent.I = {};
l.d.userAgent.I.Ok = function() {
  return l.d.userAgent.h.m("Presto");
};
l.d.userAgent.I.oe = function() {
  return l.d.userAgent.h.m("Trident") || l.d.userAgent.h.m("MSIE");
};
l.d.userAgent.I.jc = function() {
  return l.d.userAgent.h.ve("WebKit");
};
l.d.userAgent.I.Gh = function() {
  return l.d.userAgent.h.m("Gecko") && !l.d.userAgent.I.jc() && !l.d.userAgent.I.oe();
};
l.d.userAgent.I.Ca = function() {
  var a = l.d.userAgent.h.oa();
  if (a) {
    var a = l.d.userAgent.h.Zb(a), c = a[1];
    if (c) {
      return "Gecko" == c[0] ? l.d.userAgent.I.qe(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
l.d.userAgent.I.ob = function(a) {
  return 0 <= l.b.Aa(l.d.userAgent.I.Ca(), a);
};
l.d.userAgent.I.qe = function(a, c) {
  var d = l.a.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
l.d.userAgent.platform = {};
l.d.userAgent.platform.qc = function() {
  return l.d.userAgent.h.m("Android");
};
l.d.userAgent.platform.ef = function() {
  return l.d.userAgent.h.m("iPod");
};
l.d.userAgent.platform.Wc = function() {
  return l.d.userAgent.h.m("iPhone") && !l.d.userAgent.h.m("iPod") && !l.d.userAgent.h.m("iPad");
};
l.d.userAgent.platform.Vc = function() {
  return l.d.userAgent.h.m("iPad");
};
l.d.userAgent.platform.se = function() {
  return l.d.userAgent.platform.Wc() || l.d.userAgent.platform.Vc() || l.d.userAgent.platform.ef();
};
l.d.userAgent.platform.rc = function() {
  return l.d.userAgent.h.m("Macintosh");
};
l.d.userAgent.platform.Hh = function() {
  return l.d.userAgent.h.m("Linux");
};
l.d.userAgent.platform.sc = function() {
  return l.d.userAgent.h.m("Windows");
};
l.d.userAgent.platform.re = function() {
  return l.d.userAgent.h.m("CrOS");
};
l.d.userAgent.platform.Ca = function() {
  var a = l.d.userAgent.h.oa(), c = "";
  l.d.userAgent.platform.sc() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (a = c.exec(a)) ? a[1] : "0.0") : l.d.userAgent.platform.se() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (a = c.exec(a)) && a[1].replace(/_/g, ".")) : l.d.userAgent.platform.rc() ? (c = /Mac OS X ([0-9_.]+)/, c = (a = c.exec(a)) ? a[1].replace(/_/g, ".") : "10") : l.d.userAgent.platform.qc() ? (c = /Android\s+([^\);]+)(\)|;)/, c = (a = c.exec(a)) && a[1]) : l.d.userAgent.platform.re() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, 
  c = (a = c.exec(a)) && a[1]);
  return c || "";
};
l.d.userAgent.platform.ob = function(a) {
  return 0 <= l.b.Aa(l.d.userAgent.platform.Ca(), a);
};
l.userAgent = {};
l.userAgent.Kd = !1;
l.userAgent.Jd = !1;
l.userAgent.Qd = !1;
l.userAgent.Sb = !1;
l.userAgent.Pd = !1;
l.userAgent.we = !1;
l.userAgent.lb = l.userAgent.Kd || l.userAgent.Jd || l.userAgent.Sb || l.userAgent.Qd || l.userAgent.Pd;
l.userAgent.dg = function() {
  return l.d.userAgent.h.oa();
};
l.userAgent.Pc = function() {
  return l.global.navigator || null;
};
l.userAgent.bg = l.userAgent.lb ? l.userAgent.Pd : l.d.userAgent.browser.bc();
l.userAgent.jb = l.userAgent.lb ? l.userAgent.Kd : l.d.userAgent.browser.ac();
l.userAgent.ag = l.userAgent.lb ? l.userAgent.Jd : l.d.userAgent.I.Gh();
l.userAgent.ab = l.userAgent.lb ? l.userAgent.Qd || l.userAgent.Sb : l.d.userAgent.I.jc();
l.userAgent.Ih = function() {
  return l.userAgent.ab && l.d.userAgent.h.m("Mobile");
};
l.userAgent.Ii = l.userAgent.Sb || l.userAgent.Ih();
l.userAgent.Si = l.userAgent.ab;
l.userAgent.vh = function() {
  var a = l.userAgent.Pc();
  return a && a.platform || "";
};
l.userAgent.Mi = l.userAgent.vh();
l.userAgent.Od = !1;
l.userAgent.Rd = !1;
l.userAgent.Nd = !1;
l.userAgent.Sd = !1;
l.userAgent.Id = !1;
l.userAgent.Md = !1;
l.userAgent.Ld = !1;
l.userAgent.ka = l.userAgent.Od || l.userAgent.Rd || l.userAgent.Nd || l.userAgent.Sd || l.userAgent.Id || l.userAgent.Md || l.userAgent.Ld;
l.userAgent.Ci = l.userAgent.ka ? l.userAgent.Od : l.d.userAgent.platform.rc();
l.userAgent.Zi = l.userAgent.ka ? l.userAgent.Rd : l.d.userAgent.platform.sc();
l.userAgent.xi = l.userAgent.ka ? l.userAgent.Nd : l.d.userAgent.platform.Hh();
l.userAgent.Kh = function() {
  var a = l.userAgent.Pc();
  return!!a && l.b.contains(a.appVersion || "", "X11");
};
l.userAgent.$i = l.userAgent.ka ? l.userAgent.Sd : l.userAgent.Kh();
l.userAgent.ANDROID = l.userAgent.ka ? l.userAgent.Id : l.d.userAgent.platform.qc();
l.userAgent.si = l.userAgent.ka ? l.userAgent.Md : l.d.userAgent.platform.Wc();
l.userAgent.ri = l.userAgent.ka ? l.userAgent.Ld : l.d.userAgent.platform.Vc();
l.userAgent.wh = function() {
  var a = "", c;
  if (l.userAgent.bg && l.global.opera) {
    return a = l.global.opera.version, l.isFunction(a) ? a() : a;
  }
  l.userAgent.ag ? c = /rv\:([^\);]+)(\)|;)/ : l.userAgent.jb ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : l.userAgent.ab && (c = /WebKit\/(\S+)/);
  c && (a = (a = c.exec(l.userAgent.dg())) ? a[1] : "");
  return l.userAgent.jb && (c = l.userAgent.ud(), c > parseFloat(a)) ? String(c) : a;
};
l.userAgent.ud = function() {
  var a = l.global.document;
  return a ? a.documentMode : void 0;
};
l.userAgent.VERSION = l.userAgent.wh();
l.userAgent.compare = function(a, c) {
  return l.b.Aa(a, c);
};
l.userAgent.Ic = {};
l.userAgent.ob = function(a) {
  return l.userAgent.we || l.userAgent.Ic[a] || (l.userAgent.Ic[a] = 0 <= l.b.Aa(l.userAgent.VERSION, a));
};
l.userAgent.Uk = l.userAgent.ob;
l.userAgent.Eh = function(a) {
  return l.userAgent.jb && l.userAgent.sg >= a;
};
l.userAgent.Dk = l.userAgent.Eh;
var s = l.global.document;
l.userAgent.sg = s && l.userAgent.jb ? l.userAgent.ud() || ("CSS1Compat" == s.compatMode ? parseInt(l.userAgent.VERSION, 10) : 5) : void 0;
l.uri = {};
l.uri.c = {};
l.uri.c.Fa = {Sc:38, EQUAL:61, Re:35, Se:63};
l.uri.c.rb = function(a, c, d, e, f, g, h) {
  var k = "";
  a && (k += a + ":");
  d && (k += "//", c && (k += c + "@"), k += d, e && (k += ":" + e));
  f && (k += f);
  g && (k += "?" + g);
  h && (k += "#" + h);
  return k;
};
l.uri.c.bf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
l.uri.c.l = {na:1, Pa:2, Y:3, Z:4, qb:5, Qa:6, pb:7};
l.uri.c.split = function(a) {
  l.uri.c.$e();
  return a.match(l.uri.c.bf);
};
l.uri.c.Cb = l.userAgent.ab;
l.uri.c.$e = function() {
  if (l.uri.c.Cb) {
    l.uri.c.Cb = !1;
    var a = l.global.location;
    if (a) {
      var c = a.href;
      if (c && (c = l.uri.c.wa(c)) && c != a.hostname) {
        throw l.uri.c.Cb = !0, Error();
      }
    }
  }
};
l.uri.c.eb = function(a, c) {
  return a ? c ? decodeURI(a) : decodeURIComponent(a) : a;
};
l.uri.c.ra = function(a, c) {
  return l.uri.c.split(c)[a] || null;
};
l.uri.c.la = function(a) {
  return l.uri.c.ra(l.uri.c.l.na, a);
};
l.uri.c.hk = function(a) {
  a = l.uri.c.la(a);
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return a ? a.toLowerCase() : "";
};
l.uri.c.Ye = function(a) {
  return l.uri.c.ra(l.uri.c.l.Pa, a);
};
l.uri.c.Oa = function(a) {
  return l.uri.c.eb(l.uri.c.Ye(a));
};
l.uri.c.Ve = function(a) {
  return l.uri.c.ra(l.uri.c.l.Y, a);
};
l.uri.c.wa = function(a) {
  return l.uri.c.eb(l.uri.c.Ve(a), !0);
};
l.uri.c.Na = function(a) {
  return Number(l.uri.c.ra(l.uri.c.l.Z, a)) || null;
};
l.uri.c.Xe = function(a) {
  return l.uri.c.ra(l.uri.c.l.qb, a);
};
l.uri.c.ma = function(a) {
  return l.uri.c.eb(l.uri.c.Xe(a), !0);
};
l.uri.c.Yb = function(a) {
  return l.uri.c.ra(l.uri.c.l.Qa, a);
};
l.uri.c.We = function(a) {
  var c = a.indexOf("#");
  return 0 > c ? null : a.substr(c + 1);
};
l.uri.c.yl = function(a, c) {
  return l.uri.c.df(a) + (c ? "#" + c : "");
};
l.uri.c.Ma = function(a) {
  return l.uri.c.eb(l.uri.c.We(a));
};
l.uri.c.Tc = function(a) {
  a = l.uri.c.split(a);
  return l.uri.c.rb(a[l.uri.c.l.na], a[l.uri.c.l.Pa], a[l.uri.c.l.Y], a[l.uri.c.l.Z]);
};
l.uri.c.ok = function(a) {
  a = l.uri.c.split(a);
  return l.uri.c.rb(null, null, null, null, a[l.uri.c.l.qb], a[l.uri.c.l.Qa], a[l.uri.c.l.pb]);
};
l.uri.c.df = function(a) {
  var c = a.indexOf("#");
  return 0 > c ? a : a.substr(0, c);
};
l.uri.c.Ch = function(a, c) {
  var d = l.uri.c.split(a), e = l.uri.c.split(c);
  return d[l.uri.c.l.Y] == e[l.uri.c.l.Y] && d[l.uri.c.l.na] == e[l.uri.c.l.na] && d[l.uri.c.l.Z] == e[l.uri.c.l.Z];
};
l.uri.c.de = function(a) {
  if (l.ja && (0 <= a.indexOf("#") || 0 <= a.indexOf("?"))) {
    throw Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + a + "]");
  }
};
l.uri.c.vb = function(a) {
  if (a[1]) {
    var c = a[0], d = c.indexOf("#");
    0 <= d && (a.push(c.substr(d)), a[0] = c = c.substr(0, d));
    d = c.indexOf("?");
    0 > d ? a[1] = "?" : d == c.length - 1 && (a[1] = void 0);
  }
  return a.join("");
};
l.uri.c.wb = function(a, c, d) {
  if (l.isArray(c)) {
    for (var e = 0;e < c.length;e++) {
      l.uri.c.wb(a, String(c[e]), d);
    }
  } else {
    null != c && d.push("&", a, "" === c ? "" : "=", l.b.xa(c));
  }
};
l.uri.c.Db = function(a, c, d) {
  for (d = d || 0;d < c.length;d += 2) {
    l.uri.c.wb(c[d], c[d + 1], a);
  }
  return a;
};
l.uri.c.zj = function(a, c) {
  var d = l.uri.c.Db([], a, c);
  d[0] = "";
  return d.join("");
};
l.uri.c.Uc = function(a, c) {
  for (var d in c) {
    l.uri.c.wb(d, c[d], a);
  }
  return a;
};
l.uri.c.Aj = function(a) {
  a = l.uri.c.Uc([], a);
  a[0] = "";
  return a.join("");
};
l.uri.c.jj = function(a, c) {
  return l.uri.c.vb(2 == arguments.length ? l.uri.c.Db([a], arguments[1], 0) : l.uri.c.Db([a], arguments, 1));
};
l.uri.c.kj = function(a, c) {
  return l.uri.c.vb(l.uri.c.Uc([a], c));
};
l.uri.c.Ze = function(a, c, d) {
  a = [a, "&", c];
  l.ec(d) && a.push("=", l.b.xa(d));
  return l.uri.c.vb(a);
};
l.uri.c.Za = function(a, c, d, e) {
  for (var f = d.length;0 <= (c = a.indexOf(d, c)) && c < e;) {
    var g = a.charCodeAt(c - 1);
    if (g == l.uri.c.Fa.Sc || g == l.uri.c.Fa.Se) {
      if (g = a.charCodeAt(c + f), !g || g == l.uri.c.Fa.EQUAL || g == l.uri.c.Fa.Sc || g == l.uri.c.Fa.Re) {
        return c;
      }
    }
    c += f + 1;
  }
  return-1;
};
l.uri.c.$a = /#|$/;
l.uri.c.sk = function(a, c) {
  return 0 <= l.uri.c.Za(a, 0, c, a.search(l.uri.c.$a));
};
l.uri.c.mk = function(a, c) {
  var d = a.search(l.uri.c.$a), e = l.uri.c.Za(a, 0, c, d);
  if (0 > e) {
    return null;
  }
  var f = a.indexOf("&", e);
  if (0 > f || f > d) {
    f = d;
  }
  e += c.length + 1;
  return l.b.Xa(a.substr(e, f - e));
};
l.uri.c.nk = function(a, c) {
  for (var d = a.search(l.uri.c.$a), e = 0, f, g = [];0 <= (f = l.uri.c.Za(a, e, c, d));) {
    e = a.indexOf("&", f);
    if (0 > e || e > d) {
      e = d;
    }
    f += c.length + 1;
    g.push(l.b.Xa(a.substr(f, e - f)));
  }
  return g;
};
l.uri.c.Te = /[?&]($|#)/;
l.uri.c.af = function(a, c) {
  for (var d = a.search(l.uri.c.$a), e = 0, f, g = [];0 <= (f = l.uri.c.Za(a, e, c, d));) {
    g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
  }
  g.push(a.substr(e));
  return g.join("").replace(l.uri.c.Te, "$1");
};
l.uri.c.setParam = function(a, c, d) {
  return l.uri.c.Ze(l.uri.c.af(a, c), c, d);
};
l.uri.c.lj = function(a, c) {
  l.uri.c.de(a);
  l.b.fe(a, "/") && (a = a.substr(0, a.length - 1));
  l.b.sb(c, "/") && (c = c.substr(1));
  return l.b.ee(a, "/", c);
};
l.uri.c.ya = function(a, c) {
  l.b.sb(c, "/") || (c = "/" + c);
  var d = l.uri.c.split(a);
  return l.uri.c.rb(d[l.uri.c.l.na], d[l.uri.c.l.Pa], d[l.uri.c.l.Y], d[l.uri.c.l.Z], c, d[l.uri.c.l.Qa], d[l.uri.c.l.pb]);
};
l.uri.c.gc = {fc:"zx"};
l.uri.c.Lh = function(a) {
  return l.uri.c.setParam(a, l.uri.c.gc.fc, l.b.$b());
};
l.f = function(a, c) {
  var d;
  a instanceof l.f ? (this.K = l.R(c) ? c : a.$d(), this.Va(a.la()), this.Wa(a.Oa()), this.Ra(a.wa()), this.Ta(a.Na()), this.ya(a.ma()), this.Ua(a.Yb().clone()), this.Sa(a.Ma())) : a && (d = l.uri.c.split(String(a))) ? (this.K = !!c, this.Va(d[l.uri.c.l.na] || "", !0), this.Wa(d[l.uri.c.l.Pa] || "", !0), this.Ra(d[l.uri.c.l.Y] || "", !0), this.Ta(d[l.uri.c.l.Z]), this.ya(d[l.uri.c.l.qb] || "", !0), this.Ua(d[l.uri.c.l.Qa] || "", !0), this.Sa(d[l.uri.c.l.pb] || "", !0)) : (this.K = !!c, this.M = new l.f.P(null, 
  null, this.K));
};
l.f.of = !1;
l.f.me = l.uri.c.gc.fc;
b = l.f.prototype;
b.ua = "";
b.Jb = "";
b.Gb = "";
b.H = null;
b.Ib = "";
b.Hb = "";
b.Jh = !1;
b.K = !1;
b.toString = function() {
  var a = [], c = this.la();
  c && a.push(l.f.za(c, l.f.ic, !0), ":");
  if (c = this.wa()) {
    a.push("//");
    var d = this.Oa();
    d && a.push(l.f.za(d, l.f.ic, !0), "@");
    a.push(l.f.hc(l.b.xa(c)));
    c = this.Na();
    null != c && a.push(":", String(c));
  }
  if (c = this.ma()) {
    this.ub() && "/" != c.charAt(0) && a.push("/"), a.push(l.f.za(c, "/" == c.charAt(0) ? l.f.je : l.f.le, !0));
  }
  (c = this.ie()) && a.push("?", c);
  (c = this.Ma()) && a.push("#", l.f.za(c, l.f.ke));
  return a.join("");
};
b.resolve = function(a) {
  var c = this.clone(), d = a.Le();
  d ? c.Va(a.la()) : d = a.Me();
  d ? c.Wa(a.Oa()) : d = a.ub();
  d ? c.Ra(a.wa()) : d = a.Je();
  var e = a.ma();
  if (d) {
    c.Ta(a.Na());
  } else {
    if (d = a.Rc()) {
      if ("/" != e.charAt(0)) {
        if (this.ub() && !this.Rc()) {
          e = "/" + e;
        } else {
          var f = c.ma().lastIndexOf("/");
          -1 != f && (e = c.ma().substr(0, f + 1) + e);
        }
      }
      e = l.f.Oe(e);
    }
  }
  d ? c.ya(e) : d = a.Ke();
  d ? c.Ua(a.He()) : d = a.Ie();
  d && c.Sa(a.Ma());
  return c;
};
b.clone = function() {
  return new l.f(this);
};
b.la = function() {
  return this.ua;
};
b.Va = function(a, c) {
  this.S();
  if (this.ua = c ? l.f.ta(a, !0) : a) {
    this.ua = this.ua.replace(/:$/, "");
  }
  return this;
};
b.Le = function() {
  return!!this.ua;
};
b.Oa = function() {
  return this.Jb;
};
b.Wa = function(a, c) {
  this.S();
  this.Jb = c ? l.f.ta(a) : a;
  return this;
};
b.Me = function() {
  return!!this.Jb;
};
b.wa = function() {
  return this.Gb;
};
b.Ra = function(a, c) {
  this.S();
  this.Gb = c ? l.f.ta(a, !0) : a;
  return this;
};
b.ub = function() {
  return!!this.Gb;
};
b.Na = function() {
  return this.H;
};
b.Ta = function(a) {
  this.S();
  if (a) {
    a = Number(a);
    if (isNaN(a) || 0 > a) {
      throw Error("Bad port number " + a);
    }
    this.H = a;
  } else {
    this.H = null;
  }
  return this;
};
b.Je = function() {
  return null != this.H;
};
b.ma = function() {
  return this.Ib;
};
b.ya = function(a, c) {
  this.S();
  this.Ib = c ? l.f.ta(a, !0) : a;
  return this;
};
b.Rc = function() {
  return!!this.Ib;
};
b.Ke = function() {
  return "" !== this.M.toString();
};
b.Ua = function(a, c) {
  this.S();
  a instanceof l.f.P ? (this.M = a, this.M.Eb(this.K)) : (c || (a = l.f.za(a, l.f.jf)), this.M = new l.f.P(a, null, this.K));
  return this;
};
b.ie = function() {
  return this.M.toString();
};
b.He = function() {
  return this.M.ng();
};
b.Yb = function() {
  return this.M;
};
b.ne = function(a, c) {
  this.S();
  this.M.set(a, c);
  return this;
};
b.Hf = function(a) {
  return this.M.get(a);
};
b.Ma = function() {
  return this.Hb;
};
b.Sa = function(a, c) {
  this.S();
  this.Hb = c ? l.f.ta(a) : a;
  return this;
};
b.Ie = function() {
  return!!this.Hb;
};
b.Lh = function() {
  this.S();
  this.ne(l.f.me, l.b.$b());
  return this;
};
b.S = function() {
  if (this.Jh) {
    throw Error("Tried to modify a read-only Uri");
  }
};
b.Eb = function(a) {
  this.K = a;
  this.M && this.M.Eb(a);
  return this;
};
b.$d = function() {
  return this.K;
};
l.f.parse = function(a, c) {
  return a instanceof l.f ? a.clone() : new l.f(a, c);
};
l.f.create = function(a, c, d, e, f, g, h, k) {
  k = new l.f(null, k);
  a && k.Va(a);
  c && k.Wa(c);
  d && k.Ra(d);
  e && k.Ta(e);
  f && k.ya(f);
  g && k.Ua(g);
  h && k.Sa(h);
  return k;
};
l.f.resolve = function(a, c) {
  a instanceof l.f || (a = l.f.parse(a));
  c instanceof l.f || (c = l.f.parse(c));
  return a.resolve(c);
};
l.f.Oe = function(a) {
  if (".." == a || "." == a) {
    return "";
  }
  if (l.b.contains(a, "./") || l.b.contains(a, "/.")) {
    var c = l.b.sb(a, "/");
    a = a.split("/");
    for (var d = [], e = 0;e < a.length;) {
      var f = a[e++];
      "." == f ? c && e == a.length && d.push("") : ".." == f ? ((1 < d.length || 1 == d.length && "" != d[0]) && d.pop(), c && e == a.length && d.push("")) : (d.push(f), c = !0);
    }
    return d.join("/");
  }
  return a;
};
l.f.ta = function(a, c) {
  return a ? c ? decodeURI(a) : decodeURIComponent(a) : "";
};
l.f.za = function(a, c, d) {
  return l.isString(a) ? (a = encodeURI(a).replace(c, l.f.Gf), d && (a = l.f.hc(a)), a) : null;
};
l.f.Gf = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
};
l.f.hc = function(a) {
  return a.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
};
l.f.ic = /[#\/\?@]/g;
l.f.le = /[\#\?:]/g;
l.f.je = /[\#\?]/g;
l.f.jf = /[\#\?@]/g;
l.f.ke = /#/g;
l.f.Ch = function(a, c) {
  var d = l.uri.c.split(a), e = l.uri.c.split(c);
  return d[l.uri.c.l.Y] == e[l.uri.c.l.Y] && d[l.uri.c.l.Z] == e[l.uri.c.l.Z];
};
l.f.P = function(a, c, d) {
  this.$ = a || null;
  this.K = !!d;
};
l.f.P.prototype.T = function() {
  if (!this.s && (this.s = new l.j.C, this.q = 0, this.$)) {
    for (var a = this.$.split("&"), c = 0;c < a.length;c++) {
      var d = a[c].indexOf("="), e = null, f = null;
      0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
      e = l.b.Xa(e);
      e = this.ca(e);
      this.add(e, f ? l.b.Xa(f) : "");
    }
  }
};
l.f.P.Sj = function(a, c, d) {
  c = l.j.A(a);
  if ("undefined" == typeof c) {
    throw Error("Keys are undefined");
  }
  d = new l.f.P(null, null, d);
  a = l.j.u(a);
  for (var e = 0;e < c.length;e++) {
    var f = c[e], g = a[e];
    l.isArray(g) ? d.tc(f, g) : d.add(f, g);
  }
  return d;
};
l.f.P.Rj = function(a, c, d, e) {
  if (a.length != c.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  d = new l.f.P(null, null, e);
  for (e = 0;e < a.length;e++) {
    d.add(a[e], c[e]);
  }
  return d;
};
b = l.f.P.prototype;
b.s = null;
b.q = null;
b.ga = function() {
  this.T();
  return this.q;
};
b.add = function(a, c) {
  this.T();
  this.qa();
  a = this.ca(a);
  var d = this.s.get(a);
  d || this.s.set(a, d = []);
  d.push(c);
  this.q++;
  return this;
};
b.remove = function(a) {
  this.T();
  a = this.ca(a);
  return this.s.da(a) ? (this.qa(), this.q -= this.s.get(a).length, this.s.remove(a)) : !1;
};
b.clear = function() {
  this.qa();
  this.s = null;
  this.q = 0;
};
b.J = function() {
  this.T();
  return 0 == this.q;
};
b.da = function(a) {
  this.T();
  a = this.ca(a);
  return this.s.da(a);
};
b.sa = function(a) {
  var c = this.u();
  return l.a.contains(c, a);
};
b.A = function() {
  this.T();
  for (var a = this.s.u(), c = this.s.A(), d = [], e = 0;e < c.length;e++) {
    for (var f = a[e], g = 0;g < f.length;g++) {
      d.push(c[e]);
    }
  }
  return d;
};
b.u = function(a) {
  this.T();
  var c = [];
  if (l.isString(a)) {
    this.da(a) && (c = l.a.concat(c, this.s.get(this.ca(a))));
  } else {
    a = this.s.u();
    for (var d = 0;d < a.length;d++) {
      c = l.a.concat(c, a[d]);
    }
  }
  return c;
};
b.set = function(a, c) {
  this.T();
  this.qa();
  a = this.ca(a);
  this.da(a) && (this.q -= this.s.get(a).length);
  this.s.set(a, [c]);
  this.q++;
  return this;
};
b.get = function(a, c) {
  var d = a ? this.u(a) : [];
  return l.f.of ? 0 < d.length ? d[0] : c : 0 < d.length ? String(d[0]) : c;
};
b.tc = function(a, c) {
  this.remove(a);
  0 < c.length && (this.qa(), this.s.set(this.ca(a), l.a.clone(c)), this.q += c.length);
};
b.toString = function() {
  if (this.$) {
    return this.$;
  }
  if (!this.s) {
    return "";
  }
  for (var a = [], c = this.s.A(), d = 0;d < c.length;d++) {
    for (var e = c[d], f = l.b.xa(e), e = this.u(e), g = 0;g < e.length;g++) {
      var h = f;
      "" !== e[g] && (h += "=" + l.b.xa(e[g]));
      a.push(h);
    }
  }
  return this.$ = a.join("&");
};
b.ng = function() {
  return l.f.ta(this.toString());
};
b.qa = function() {
  this.$ = null;
};
b.clone = function() {
  var a = new l.f.P;
  a.$ = this.$;
  this.s && (a.s = this.s.clone(), a.q = this.q);
  return a;
};
b.ca = function(a) {
  a = String(a);
  this.K && (a = a.toLowerCase());
  return a;
};
b.Eb = function(a) {
  a && !this.K && (this.T(), this.qa(), this.s.forEach(function(a, d) {
    var e = d.toLowerCase();
    d != e && (this.remove(d), this.tc(e, a));
  }, this));
  this.K = a;
};
b.extend = function(a) {
  for (var c = 0;c < arguments.length;c++) {
    l.j.forEach(arguments[c], function(a, c) {
      this.add(c, a);
    }, this);
  }
};
m.Qb = {};
m.Qb.Qf = function(a) {
  return l.f.parse(window.location.href).Hf(a) || null;
};
m.Qb.getOrigin = function(a) {
  return l.uri.c.la(a) ? l.uri.c.Tc(a) : l.uri.c.Tc("http://" + a);
};
m.od = function(a) {
  this.Ia = a;
  this.Rb = this.H = null;
};
b = m.od.prototype;
b.ig = function(a) {
  this.Rb = a;
};
b.pg = function(a) {
  a.clientId = this.Ia;
  if (!this.H && (this.$f(), !this.H)) {
    return;
  }
  this.H.postMessage(a);
};
b.$f = function() {
  !this.H && (this.H = chrome.runtime.connect({name:this.Ia})) && (this.H.onMessage.addListener(l.bind(this.dd, this)), this.H.onDisconnect.addListener(l.bind(this.Uf, this)));
};
b.dd = function(a) {
  this.Rb && this.Rb(a);
};
b.Uf = function() {
  this.H = null;
  this.dd(new m.cd(m.w.Yc, null));
};
m.Ka = function(a) {
  this.Cd = a;
  this.Bd = null;
};
m.Ka.prototype.init = function() {
  window.addEventListener("message", this.Rh.bind(this), !1);
};
m.Ka.prototype.hg = function(a) {
  this.Bd = a;
};
m.Ka.prototype.Rh = function(a) {
  if (a.source != window) {
    var c = a.data;
    this.Cd = c.appOrigin = a.origin;
    this.Bd(c);
  }
};
m.Ka.prototype.$c = function(a) {
  a.clientId = null;
  window.parent.postMessage(a, this.Cd);
};
m.La = function() {
  this.Ia = "client-" + String(Math.floor(1E5 * Math.random()));
  this.sessionRequest = null;
  this.gb = new m.Ka(m.Qb.Qf("appOrigin"));
  this.ed = new m.od(this.Ia);
};
m.La.prototype.init = function() {
  this.gb.init();
  this.gb.hg(this.eg.bind(this));
  this.ed.ig(this.fg.bind(this));
  this.gg(null);
};
m.La.prototype.gg = function(a) {
  this.gb.$c(new m.cd(m.w.Pf, a));
};
m.La.prototype.eg = function(a) {
  a.clientId = this.Ia;
  this.ed.pg(a);
};
m.La.prototype.fg = function(a) {
  switch(a.type) {
    case m.w.sf:
    ;
    case m.w.tf:
    ;
    case m.w.ERROR:
    ;
    case m.w.xf:
    ;
    case m.w.Ef:
    ;
    case m.w.vf:
    ;
    case m.w.Af:
    ;
    case m.w.zf:
    ;
    case m.w.Ff:
    ;
    case m.w.wf:
    ;
    case m.w.Df:
    ;
    case m.w.Bf:
    ;
    case m.w.Yc:
    ;
    case m.w.uf:
    ;
    case m.w.Cf:
    ;
    case m.w.yf:
      this.gb.$c(a);
  }
};
m.Dh = new m.La;
m.Dh.init();

