var e;
window.oe = !0;
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var aa = aa || {}, k = this, l = function(a) {
  return void 0 !== a;
}, n = function(a, b, c) {
  a = a.split(".");
  c = c || k;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d;a.length && (d = a.shift());) {
    !a.length && l(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {};
  }
}, ba = function(a, b) {
  for (var c = a.split("."), d = b || k, f;f = c.shift();) {
    if (null != d[f]) {
      d = d[f];
    } else {
      return null;
    }
  }
  return d;
}, ca = function() {
}, da = function(a) {
  a.ra = function() {
    return a.Nb ? a.Nb : a.Nb = new a;
  };
}, p = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}, q = function(a) {
  return "array" == p(a);
}, ea = function(a) {
  var b = p(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}, r = function(a) {
  return "string" == typeof a;
}, s = function(a) {
  return "boolean" == typeof a;
}, t = function(a) {
  return "function" == p(a);
};
Math.random();
var fa = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
}, ga = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}, u = function(a, b, c) {
  u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
  return u.apply(null, arguments);
}, v = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}, ha = Date.now || function() {
  return+new Date;
}, w = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Lb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.ne = function(a, c, g) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
};
Function.prototype.bind = Function.prototype.bind || function(a, b) {
  if (1 < arguments.length) {
    var c = Array.prototype.slice.call(arguments, 1);
    c.unshift(this, a);
    return u.apply(null, c);
  }
  return u(this, a);
};
var x = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, x);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
w(x, Error);
x.prototype.name = "CustomError";
var ia = function(a, b) {
  for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < c.length;) {
    d += c.shift() + f.shift();
  }
  return d + c.join("%s");
}, ja = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}, ra = function(a, b) {
  if (b) {
    a = a.replace(ka, "&amp;").replace(la, "&lt;").replace(ma, "&gt;").replace(na, "&quot;").replace(oa, "&#39;").replace(pa, "&#0;");
  } else {
    if (!qa.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(ka, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(la, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(ma, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(na, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(oa, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(pa, "&#0;"));
  }
  return a;
}, ka = /&/g, la = /</g, ma = />/g, na = /"/g, oa = /'/g, pa = /\x00/g, qa = /[\x00&<>"']/, y = function(a, b) {
  for (var c = 0, d = ja(String(a)).split("."), f = ja(String(b)).split("."), g = Math.max(d.length, f.length), h = 0;0 == c && h < g;h++) {
    var m = d[h] || "", D = f[h] || "", Ea = /(\d*)(\D*)/g, Ac = /(\d*)(\D*)/g;
    do {
      var W = Ea.exec(m) || ["", "", ""], X = Ac.exec(D) || ["", "", ""];
      if (0 == W[0].length && 0 == X[0].length) {
        break;
      }
      c = sa(0 == W[1].length ? 0 : parseInt(W[1], 10), 0 == X[1].length ? 0 : parseInt(X[1], 10)) || sa(0 == W[2].length, 0 == X[2].length) || sa(W[2], X[2]);
    } while (0 == c);
  }
  return c;
}, sa = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
Math.random();
var ta = function(a, b) {
  b.unshift(a);
  x.call(this, ia.apply(null, b));
  b.shift();
};
w(ta, x);
ta.prototype.name = "AssertionError";
var ua = function(a, b, c, d) {
  var f = "Assertion failed";
  if (c) {
    var f = f + (": " + c), g = d
  } else {
    a && (f += ": " + a, g = b);
  }
  throw new ta("" + f, g || []);
}, z = function(a, b, c) {
  a || ua("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
}, va = function(a, b) {
  throw new ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}, wa = function(a, b, c) {
  t(a) || ua("Expected function but got %s: %s.", [p(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
var A = Array.prototype, xa = A.indexOf ? function(a, b, c) {
  z(null != a.length);
  return A.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (r(a)) {
    return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, ya = A.forEach ? function(a, b, c) {
  z(null != a.length);
  A.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, f = r(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a);
  }
}, za = function(a, b, c) {
  var d = 0;
  ya(a, function(a, g, h) {
    b.call(c, a, g, h) && ++d;
  }, c);
  return d;
}, B = function(a, b, c) {
  t: {
    for (var d = a.length, f = r(a) ? a.split("") : a, g = 0;g < d;g++) {
      if (g in f && b.call(c, f[g], g, a)) {
        b = g;
        break t;
      }
    }
    b = -1;
  }
  return 0 > b ? null : r(a) ? a.charAt(b) : a[b];
}, Ba = function(a, b) {
  var c = xa(a, b), d;
  (d = 0 <= c) && Aa(a, c);
  return d;
}, Aa = function(a, b) {
  z(null != a.length);
  return 1 == A.splice.call(a, b, 1).length;
}, Ca = function(a, b, c) {
  z(null != a.length);
  return 2 >= arguments.length ? A.slice.call(a, b) : A.slice.call(a, b, c);
}, Fa = function(a, b) {
  a.sort(b || Da);
}, Da = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
var Ga = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return!0;
    }
  }
  return!1;
}, Ha = function(a) {
  var b = 0, c;
  for (c in a) {
    b++;
  }
  return b;
}, Ia = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}, Ja = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}, Ka = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), La = function(a, b) {
  for (var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0;g < Ka.length;g++) {
      c = Ka[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}, Ma = function(a) {
  var b = arguments.length;
  if (1 == b && q(arguments[0])) {
    return Ma.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
var C;
t: {
  var Na = k.navigator;
  if (Na) {
    var Oa = Na.userAgent;
    if (Oa) {
      C = Oa;
      break t;
    }
  }
  C = "";
}
var E = function(a) {
  return-1 != C.indexOf(a);
};
var Pa = E("Opera") || E("OPR"), F = E("Trident") || E("MSIE"), Qa = E("Gecko") && -1 == C.toLowerCase().indexOf("webkit") && !(E("Trident") || E("MSIE")), G = -1 != C.toLowerCase().indexOf("webkit"), Ra = E("Macintosh"), Sa = E("Windows"), Ta = E("Linux"), Ua = function() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}, Va = function() {
  var a = "", b;
  if (Pa && k.opera) {
    return a = k.opera.version, t(a) ? a() : a;
  }
  Qa ? b = /rv\:([^\);]+)(\)|;)/ : F ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : G && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(C)) ? a[1] : "");
  return F && (b = Ua(), b > parseFloat(a)) ? String(b) : a;
}(), Wa = {}, H = function(a) {
  return Wa[a] || (Wa[a] = 0 <= y(Va, a));
}, Xa = k.document, Ya = Xa && F ? Ua() || ("CSS1Compat" == Xa.compatMode ? parseInt(Va, 10) : 5) : void 0;
var Za = function() {
  return null != C && -1 != C.indexOf("CrOS");
}, $a = function() {
  var a = C;
  if (!r(a)) {
    return!1;
  }
  a = a.match(/Windows NT \d+.\d+/);
  if (null === a || !q(a)) {
    return!1;
  }
  a = a[0];
  a = a.match(/\d+.\d+/);
  if (null === a || !q(a)) {
    return!1;
  }
  a = a[0];
  return 6.2 <= parseFloat(a);
};
var ab, bb, cb, db, eb, fb, gb;
gb = fb = eb = db = cb = bb = ab = !1;
var I = C;
I && (-1 != I.indexOf("Firefox") ? ab = !0 : -1 != I.indexOf("Camino") ? bb = !0 : -1 != I.indexOf("iPad") ? db = !0 : -1 != I.indexOf("iPhone") || -1 != I.indexOf("iPod") ? cb = !0 : -1 != I.indexOf("Chrome") ? fb = !0 : -1 != I.indexOf("Android") ? eb = !0 : -1 != I.indexOf("Safari") && (gb = !0));
var hb = ab, ib = bb, jb = cb, kb = db, lb = eb, mb = fb, nb = gb;
var J = function(a) {
  return(a = a.exec(C)) ? a[1] : "";
}, K = function() {
  if (hb) {
    return J(/Firefox\/([0-9.]+)/);
  }
  if (F || Pa) {
    return Va;
  }
  if (mb) {
    return J(/Chrome\/([0-9.]+)/);
  }
  if (nb) {
    return J(/Version\/([0-9.]+)/);
  }
  if (jb || kb) {
    var a;
    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(C)) {
      return a[1] + "." + a[2];
    }
  } else {
    if (lb) {
      return(a = J(/Android\s+([0-9.]+)/)) ? a : J(/Version\/([0-9.]+)/);
    }
    if (ib) {
      return J(/Camino\/([0-9.]+)/);
    }
  }
  return "";
}();
var ob, pb, qb = "undefined" != typeof chrome && !!chrome.mdns && !!chrome.cast && !!chrome.cast.channel && !!chrome.browserAction && !!chrome.browserAction.openPopup, rb = function() {
  return l(chrome.runtime) ? chrome.runtime.id : "boadgeojelhgndaghljhdicfkmllpafd";
}, L = "dliochdbjfkdbacpmhlcpmleaejidimm" === rb(), M = "boadgeojelhgndaghljhdicfkmllpafd" === rb();
if (!L && !M) {
  switch(localStorage["test.extChannel"]) {
    case "stable":
      L = !1;
      M = !0;
      break;
    case "beta":
      L = !0;
      M = !1;
      break;
    default:
      M = L = !1;
  }
}
ob = L;
pb = M;
y(K, 35);
chrome.cast && chrome.cast.streaming && y(K, 36);
Za() && 0 <= y(K, "30.0.1584.0") || Sa && y(K, 31);
n("getCastExtensionChannel", function() {
  return 1 < !1 + ob + pb ? null : ob ? "beta" : pb ? "stable" : "staging";
}, void 0);
chrome.i18n.getMessage("4014224501758376361", ["{{receiverName}}"]);
var sb = chrome.i18n.getMessage("6046507125919556913"), tb = chrome.i18n.getMessage("1189144544819350763"), ub = chrome.i18n.getMessage("3430817026795535765"), vb = chrome.i18n.getMessage("5056298333685549098", ["{{v2AppDomain}}"]), wb = chrome.i18n.getMessage("7344649529753624682", ["{{v2AppDomain}}"]), xb = chrome.i18n.getMessage("3278102219211539720"), yb = chrome.i18n.getMessage("7484752158248863804"), zb = chrome.i18n.getMessage("1717149362663359343", ["{{v2AppDomain}}"]);
chrome.i18n.getMessage("4089994756445820175");
chrome.i18n.getMessage("780135806192376347");
chrome.i18n.getMessage("2438859709710567679");
chrome.i18n.getMessage("2076488708707463944");
chrome.i18n.getMessage("3996247341169314250");
chrome.i18n.getMessage("7053128562708856478");
chrome.i18n.getMessage("8500110749168055241");
chrome.i18n.getMessage("3844709005265884931");
chrome.i18n.getMessage("4224760847878375792");
chrome.i18n.getMessage("4584454172263179470");
chrome.i18n.getMessage("5823878688587296398");
chrome.i18n.getMessage("7008828272760191653");
chrome.i18n.getMessage("2377419936291389581");
chrome.i18n.getMessage("4324962226715124466");
chrome.i18n.getMessage("6039331491778328245");
chrome.i18n.getMessage("8887833628383960193");
chrome.i18n.getMessage("6118473811359442709");
chrome.i18n.getMessage("4272010402571776761");
chrome.i18n.getMessage("482442943064110817");
chrome.i18n.getMessage("5745355507138230213");
chrome.i18n.getMessage("7029426286291560071");
chrome.i18n.getMessage("8189622236075700665");
chrome.i18n.getMessage("6018881802001125637");
chrome.i18n.getMessage("4865676252029097872");
chrome.i18n.getMessage("6988652234001902672");
chrome.i18n.getMessage("6295154563386647404", ["{{attemptNumber}}"]);
var Ab = chrome.i18n.getMessage("6236792503803747284"), Bb = chrome.i18n.getMessage("3681271501407987946"), Cb = chrome.i18n.getMessage("1403598074357445300");
chrome.i18n.getMessage("8700054488486244094");
chrome.i18n.getMessage("7786163844034528352");
chrome.i18n.getMessage("3202350311251778009");
chrome.i18n.getMessage("8304164664901068767");
chrome.i18n.getMessage("6392731103614271560");
var Db = chrome.i18n.getMessage("3203240389500117801"), Eb = chrome.i18n.getMessage("5590598097041702454");
chrome.i18n.getMessage("1878364533704855528");
var Fb = "StopIteration" in k ? k.StopIteration : Error("StopIteration"), Gb = function() {
};
Gb.prototype.next = function() {
  throw Fb;
};
Gb.prototype.ee = function() {
  return this;
};
var N = function(a, b) {
  this.p = {};
  this.g = [];
  this.S = this.v = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    a && this.Lc(a);
  }
};
N.prototype.Ea = function() {
  return this.v;
};
N.prototype.qa = function() {
  this.T();
  for (var a = [], b = 0;b < this.g.length;b++) {
    a.push(this.p[this.g[b]]);
  }
  return a;
};
N.prototype.O = function() {
  this.T();
  return this.g.concat();
};
N.prototype.equals = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.v != a.Ea()) {
    return!1;
  }
  var c = b || Hb;
  this.T();
  for (var d, f = 0;d = this.g[f];f++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
var Hb = function(a, b) {
  return a === b;
};
e = N.prototype;
e.clear = function() {
  this.p = {};
  this.S = this.v = this.g.length = 0;
};
e.remove = function(a) {
  return Object.prototype.hasOwnProperty.call(this.p, a) ? (delete this.p[a], this.v--, this.S++, this.g.length > 2 * this.v && this.T(), !0) : !1;
};
e.T = function() {
  if (this.v != this.g.length) {
    for (var a = 0, b = 0;a < this.g.length;) {
      var c = this.g[a];
      Object.prototype.hasOwnProperty.call(this.p, c) && (this.g[b++] = c);
      a++;
    }
    this.g.length = b;
  }
  if (this.v != this.g.length) {
    for (var d = {}, b = a = 0;a < this.g.length;) {
      c = this.g[a], Object.prototype.hasOwnProperty.call(d, c) || (this.g[b++] = c, d[c] = 1), a++;
    }
    this.g.length = b;
  }
};
e.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.p, a) ? this.p[a] : b;
};
e.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.p, a) || (this.v++, this.g.push(a), this.S++);
  this.p[a] = b;
};
e.Lc = function(a) {
  var b;
  a instanceof N ? (b = a.O(), a = a.qa()) : (b = Ja(a), a = Ia(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
e.forEach = function(a, b) {
  for (var c = this.O(), d = 0;d < c.length;d++) {
    var f = c[d], g = this.get(f);
    a.call(b, g, f, this);
  }
};
e.clone = function() {
  return new N(this);
};
e.ee = function(a) {
  this.T();
  var b = 0, c = this.g, d = this.p, f = this.S, g = this, h = new Gb;
  h.next = function() {
    for (;;) {
      if (f != g.S) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw Fb;
      }
      var h = c[b++];
      return a ? h : d[h];
    }
  };
  return h;
};
var Ib = function(a) {
  if ("function" == typeof a.qa) {
    return a.qa();
  }
  if (r(a)) {
    return a.split("");
  }
  if (ea(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Ia(a);
}, Jb = function(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ea(a) || r(a)) {
      ya(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.O) {
        d = a.O();
      } else {
        if ("function" != typeof a.qa) {
          if (ea(a) || r(a)) {
            d = [];
            for (var f = a.length, g = 0;g < f;g++) {
              d.push(g);
            }
          } else {
            d = Ja(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var f = Ib(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], d && d[h], a);
      }
    }
  }
};
var Lb = function(a, b) {
  try {
    var c;
    var d = ba("window.location.href");
    if (r(a)) {
      c = {message:a, name:"Unknown error", lineNumber:"Not available", fileName:d, stack:"Not available"};
    } else {
      var f, g, h = !1;
      try {
        f = a.lineNumber || a.pe || "Not available";
      } catch (m) {
        f = "Not available", h = !0;
      }
      try {
        g = a.fileName || a.filename || a.sourceURL || k.$googDebugFname || d;
      } catch (D) {
        g = "Not available", h = !0;
      }
      c = !h && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:f, fileName:g, stack:a.stack || "Not available"};
    }
    return "Message: " + ra(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + ra(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ra(Kb(b) + "-> ");
  } catch (Ea) {
    return "Exception trying to expose exception! You win, we lose. " + Ea;
  }
}, Kb = function(a) {
  var b;
  b || (b = Mb(a || arguments.callee.caller, []));
  return b;
}, Mb = function(a, b) {
  var c = [];
  if (0 <= xa(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(Nb(a) + "(");
      for (var d = a.arguments, f = 0;d && f < d.length;f++) {
        0 < f && c.push(", ");
        var g;
        g = d[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = Nb(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Mb(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}, Nb = function(a) {
  if (Ob[a]) {
    return Ob[a];
  }
  a = String(a);
  if (!Ob[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Ob[a] = b ? b[1] : "[Anonymous]";
  }
  return Ob[a];
}, Ob = {};
var Pb = function(a, b, c, d, f) {
  this.reset(a, b, c, d, f);
};
Pb.prototype.Ha = null;
Pb.prototype.Ga = null;
var Qb = 0;
e = Pb.prototype;
e.reset = function(a, b, c, d, f) {
  "number" == typeof f || Qb++;
  this.fd = d || ha();
  this.C = a;
  this.ed = b;
  this.dd = c;
  delete this.Ha;
  delete this.Ga;
};
e.rb = function() {
  return this.dd;
};
e.Qc = function() {
  return this.Ha;
};
e.Dd = function(a) {
  this.Ha = a;
};
e.Rc = function() {
  return this.Ga;
};
e.Ed = function(a) {
  this.Ga = a;
};
e.Ca = function() {
  return this.C;
};
e.da = function(a) {
  this.C = a;
};
e.getMessage = function() {
  return this.ed;
};
e.yb = function() {
  return this.fd;
};
var Rb = function(a) {
  this.xb = a;
  this.o = this.Fa = this.C = this.t = null;
}, O = function(a, b) {
  this.name = a;
  this.value = b;
};
O.prototype.toString = function() {
  return this.name;
};
var Sb = new O("SHOUT", 1200), Tb = new O("SEVERE", 1E3), Ub = new O("WARNING", 900), Vb = new O("INFO", 800), Wb = new O("CONFIG", 700), Xb = new O("FINE", 500), Yb = new O("FINER", 400);
e = Rb.prototype;
e.getName = function() {
  return this.xb;
};
e.vd = function(a) {
  this.o || (this.o = []);
  this.o.push(a);
};
e.wd = function(a) {
  var b = this.o;
  return!!b && Ba(b, a);
};
e.getParent = function() {
  return this.t;
};
e.getChildren = function() {
  this.Fa || (this.Fa = {});
  return this.Fa;
};
e.da = function(a) {
  this.C = a;
};
e.Ca = function() {
  return this.C;
};
e.Kb = function() {
  if (this.C) {
    return this.C;
  }
  if (this.t) {
    return this.t.Kb();
  }
  va("Root logger has no level set.");
  return null;
};
e.Kd = function(a) {
  return a.value >= this.Kb().value;
};
e.log = function(a, b, c) {
  this.Kd(a) && (t(b) && (b = b()), this.Hd(this.Id(a, b, c, Rb.prototype.log)));
};
e.Id = function(a, b, c, d) {
  var f = new Pb(a, String(b), this.xb);
  if (c) {
    var g;
    g = d || arguments.callee.caller;
    f.Dd(c);
    f.Ed(Lb(c, g));
  }
  return f;
};
e.kb = function(a, b) {
  this.log(Tb, a, b);
};
e.cb = function(a, b) {
  this.log(Ub, a, b);
};
e.info = function(a, b) {
  this.log(Vb, a, b);
};
e.config = function(a, b) {
  this.log(Wb, a, b);
};
e.ie = function(a, b) {
  this.log(Xb, a, b);
};
e.Hd = function(a) {
  var b = "log:" + a.getMessage();
  k.console && (k.console.timeStamp ? k.console.timeStamp(b) : k.console.markTimeline && k.console.markTimeline(b));
  k.msWriteProfilerMark && k.msWriteProfilerMark(b);
  for (b = this;b;) {
    b.ge(a), b = b.getParent();
  }
};
e.ge = function(a) {
  if (this.o) {
    for (var b = 0, c;c = this.o[b];b++) {
      c(a);
    }
  }
};
e.Ud = function(a) {
  this.t = a;
};
e.Rd = function(a, b) {
  this.getChildren()[a] = b;
};
var Zb = {}, $b = null, ac = function() {
  $b || ($b = new Rb(""), Zb[""] = $b, $b.da(Wb));
}, bc = function() {
  ac();
  return $b;
}, cc = function(a) {
  ac();
  var b;
  if (!(b = Zb[a])) {
    b = new Rb(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = cc(a.substr(0, c));
    c.Rd(d, b);
    b.Ud(c);
    Zb[a] = b;
  }
  return b;
};
var P = function(a, b) {
  var c = cc(a);
  b && c && c.da(b);
  return c;
}, Q = function(a, b, c) {
  a && a.ie(b, c);
};
var ec = function() {
  this.audioBitrate = this.minHeight = this.minWidth = this.videoQuality = this.maxVideoBitrate = this.minVideoBitrate = -1;
  this.bufferedMode = "on";
  this.bufferSizeMillis = 500;
  this.minCastLatencyMillis = this.maxCastLatencyMillis = 400;
  this.maxFrameRate = -1;
  this.pacerTargetBatchSize = 10;
  this.pacerMaxBatchSize = 20;
  this.dscpEnabled = Ra || Ta || Za() || $a();
  this.backgroundScanDisabled = this.mediaStreamingModeEnabled = !1;
  this.preferredVideoCodec = "CAST1";
  this.disableTDLS = !1;
  dc && (this.update(dc.settings), z(-1 != this.minVideoBitrate), z(-1 != this.maxVideoBitrate), z(-1 != this.videoQuality), z(-1 != this.minWidth), z(-1 != this.minHeight), z(-1 != this.audioBitrate), z(-1 != this.maxFrameRate));
};
e = ec.prototype;
e.update = function(a) {
  for (var b in this) {
    t(this[b]) || (null != a[b] && p(this[b]) == p(a[b]) ? this[b] = a[b] : P("cv.MirrorTabSettings").cb("Failed to load mirror settings for key [" + b + "]:" + a[b]));
  }
};
e.isEqual = function(a) {
  for (var b in this) {
    if (!t(this[b]) && this[b] !== a[b]) {
      return!1;
    }
  }
  return!0;
};
e.ld = function(a) {
  r(a) && (a = parseInt(a, 10));
  this.maxVideoBitrate = a = Math.min(1E4, Math.max(100, a));
  this.minVideoBitrate = Math.min(this.minVideoBitrate, this.maxVideoBitrate);
};
e.nd = function(a) {
  r(a) && (a = parseInt(a, 10));
  this.minVideoBitrate = a = Math.min(1E4, Math.max(100, a));
  this.maxVideoBitrate = Math.max(this.maxVideoBitrate, this.minVideoBitrate);
};
e.pd = function(a) {
  r(a) && (a = parseInt(a, 10));
  0 < a && (this.videoQuality = a);
};
e.jd = function(a) {
  r(a) && (a = parseInt(a, 10));
  this.audioBitrate = Math.min(128, Math.max(56, a));
};
e.od = function(a) {
  r(a) && (a = parseInt(a, 10));
  this.minWidth = Math.max(100, a);
};
e.md = function(a) {
  r(a) && (a = parseInt(a, 10));
  this.minHeight = Math.max(100, a);
};
e.kd = function(a) {
  r(a) && (a = Math.round(parseFloat(a)));
  isFinite(a) && (this.maxFrameRate = Math.max(1, a));
};
var fc = function(a, b, c, d, f, g, h, m, D) {
  this.id = a;
  this.name = b;
  this.settings = new ec;
  this.settings.od(c);
  this.settings.md(d);
  this.settings.kd(f);
  this.settings.nd(g);
  this.settings.ld(h);
  this.settings.pd(m);
  this.settings.jd(D);
}, dc = new fc("high", Bb, 1280, 720, 30, 2E3, 2500, 56, 128), gc = Za() && 0 <= y(K, "37"), hc = new fc("low", Ab, gc ? 848 : 854, 480, 30, 750, 1500, 56, 128), ic = [new fc("highest", Cb, 1280, 720, 30, 4E3, 5E3, 56, 128), dc, hc];
var jc = function(a) {
  k.setTimeout(function() {
    throw a;
  }, 0);
}, kc, lc = function() {
  var a = k.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = u(function(a) {
      if (("*" == d || a.origin == d) && a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a && !E("Trident") && !E("MSIE")) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      if (l(c.next)) {
        c = c.next;
        var a = c.Qb;
        c.Qb = null;
        a();
      }
    };
    return function(a) {
      d.next = {Qb:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    k.setTimeout(a, 0);
  };
};
var rc = function(a, b) {
  mc || nc();
  oc || (mc(), oc = !0);
  pc.push(new qc(a, b));
}, mc, nc = function() {
  if (k.Promise && k.Promise.resolve) {
    var a = k.Promise.resolve();
    mc = function() {
      a.then(sc);
    };
  } else {
    mc = function() {
      var a = sc;
      !t(k.setImmediate) || k.Window && k.Window.prototype.setImmediate == k.setImmediate ? (kc || (kc = lc()), kc(a)) : k.setImmediate(a);
    };
  }
}, oc = !1, pc = [], sc = function() {
  for (;pc.length;) {
    var a = pc;
    pc = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.je.call(c.scope);
      } catch (d) {
        jc(d);
      }
    }
  }
  oc = !1;
}, qc = function(a, b) {
  this.je = a;
  this.scope = b;
};
var tc = function(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
};
var uc = function(a, b) {
  this.f = 0;
  this.lb = void 0;
  this.l = this.t = null;
  this.ga = this.Aa = !1;
  try {
    var c = this;
    a.call(b, function(a) {
      c.J(2, a);
    }, function(a) {
      if (!(a instanceof R)) {
        try {
          if (a instanceof Error) {
            throw a;
          }
          throw Error("Promise rejected.");
        } catch (b) {
        }
      }
      c.J(3, a);
    });
  } catch (d) {
    this.J(3, d);
  }
};
uc.prototype.then = function(a, b, c) {
  null != a && wa(a, "opt_onFulfilled should be a function.");
  null != b && wa(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  return this.fe(t(a) ? a : null, t(b) ? b : null, c);
};
tc(uc);
e = uc.prototype;
e.cancel = function(a) {
  0 == this.f && rc(function() {
    var b = new R(a);
    this.ub(b);
  }, this);
};
e.ub = function(a) {
  0 == this.f && (this.t ? this.t.Wc(this, a) : this.J(3, a));
};
e.Wc = function(a, b) {
  if (this.l) {
    for (var c = 0, d = -1, f = 0, g;g = this.l[f];f++) {
      if (g = g.R) {
        if (c++, g == a && (d = f), 0 <= d && 1 < c) {
          break;
        }
      }
    }
    0 <= d && (0 == this.f && 1 == c ? this.ub(b) : (c = this.l.splice(d, 1)[0], this.sb(c, 3, b)));
  }
};
e.cd = function(a) {
  this.l && this.l.length || 2 != this.f && 3 != this.f || this.tb();
  this.l || (this.l = []);
  this.l.push(a);
};
e.fe = function(a, b, c) {
  var d = {R:null, Eb:null, Fb:null};
  d.R = new uc(function(f, g) {
    d.Eb = a ? function(b) {
      try {
        var d = a.call(c, b);
        f(d);
      } catch (D) {
        g(D);
      }
    } : f;
    d.Fb = b ? function(a) {
      try {
        var d = b.call(c, a);
        !l(d) && a instanceof R ? g(a) : f(d);
      } catch (D) {
        g(D);
      }
    } : g;
  });
  d.R.t = this;
  this.cd(d);
  return d.R;
};
e.Bb = function(a) {
  z(1 == this.f);
  this.f = 0;
  this.J(2, a);
};
e.Cb = function(a) {
  z(1 == this.f);
  this.f = 0;
  this.J(3, a);
};
e.J = function(a, b) {
  if (0 == this.f) {
    if (this == b) {
      a = 3, b = new TypeError("Promise cannot resolve to itself");
    } else {
      var c;
      if (b) {
        try {
          c = !!b.$goog_Thenable;
        } catch (d) {
          c = !1;
        }
      } else {
        c = !1;
      }
      if (c) {
        this.f = 1;
        b.then(this.Bb, this.Cb, this);
        return;
      }
      c = typeof b;
      if ("object" == c && null != b || "function" == c) {
        try {
          var f = b.then;
          if (t(f)) {
            this.$c(b, f);
            return;
          }
        } catch (g) {
          a = 3, b = g;
        }
      }
    }
    this.lb = b;
    this.f = a;
    this.tb();
    3 != a || b instanceof R || vc(this, b);
  }
};
e.$c = function(a, b) {
  this.f = 1;
  var c = this, d = !1, f = function(a) {
    d || (d = !0, c.Bb(a));
  }, g = function(a) {
    d || (d = !0, c.Cb(a));
  };
  try {
    b.call(a, f, g);
  } catch (h) {
    g(h);
  }
};
e.tb = function() {
  this.Aa || (this.Aa = !0, rc(this.Ld, this));
};
e.Ld = function() {
  for (;this.l && this.l.length;) {
    var a = this.l;
    this.l = [];
    for (var b = 0;b < a.length;b++) {
      this.sb(a[b], this.f, this.lb);
    }
  }
  this.Aa = !1;
};
e.sb = function(a, b, c) {
  2 == b ? a.Eb(c) : (a.R && this.rd(), a.Fb(c));
};
e.Gd = function() {
};
e.rd = function() {
  var a;
  for (a = this;a && a.ga;a = a.t) {
    a.ga = !1;
  }
};
var vc = function(a, b) {
  a.ga = !0;
  rc(function() {
    a.ga && (a.Gd(b), wc.call(null, b));
  });
}, wc = jc, R = function(a) {
  x.call(this, a);
};
w(R, x);
R.prototype.name = "cancel";
var xc = function() {
};
w(xc, Error);
var yc = function() {
  this.f = "pending";
  this.o = [];
  this.H = this.Vc = void 0;
};
tc(yc);
var zc = function() {
  x.call(this, "Multiple attempts to set the state of this Result");
};
w(zc, x);
e = yc.prototype;
e.getState = function() {
  return this.f;
};
e.Bd = function() {
  return this.Vc;
};
e.getError = function() {
  return this.H;
};
e.Fd = function(a, b) {
  this.Da() ? this.o.push({callback:a, scope:b || null}) : a.call(b, this);
};
e.Pd = function(a) {
  if (this.Da()) {
    this.H = a, this.f = "error", this.Xc();
  } else {
    if (!this.wb()) {
      throw new zc;
    }
  }
};
e.Xc = function() {
  var a = this.o;
  this.o = [];
  for (var b = 0;b < a.length;b++) {
    var c = a[b];
    c.callback.call(c.scope, this);
  }
};
e.Da = function() {
  return "pending" == this.f;
};
e.cancel = function() {
  return this.Da() ? (this.Pd(new xc), !0) : !1;
};
e.wb = function() {
  return "error" == this.f && this.H instanceof xc;
};
e.then = function(a, b, c) {
  var d, f, g = new uc(function(a, b) {
    d = a;
    f = b;
  });
  this.Fd(function(a) {
    a.wb() ? g.cancel() : "success" == a.getState() ? d(a.Bd()) : "error" == a.getState() && f(a.getError());
  });
  return g.then(a, b, c);
};
var Bc = function() {
  this.hasNetworkSoftware = this.networkDescription = this.gpu = this.cpu = this.googleUsername = null;
};
var Cc = function() {
  this.dismissClicks = this.earliestTimeToShowWarning = this.sessionsBeforeWarning = 0;
  this.enhancedCastingNotificationDismissed = this.statsCollectNotificationDismissed = this.intelBadCpuWarningDismissed = this.castAppNotificationDismissed = !1;
};
var Dc = function() {
  this.e = P("cv.Settings");
  this.j = {};
  this.Mc();
};
da(Dc);
Dc.prototype.Mc = function() {
  this.j.mirrorSettings = new ec;
  this.j.feedback = new Bc;
  this.j.userNotification = new Cc;
  this.j.siteTokens = {};
  this.j.sendStatsEnabled = !0;
  this.j.fixedIps = [];
  this.j.enableCloud = !1;
  this.j.cloudDevice = {};
  this.j.hangoutsStatus = "disabled";
  this.j.hangoutsDefaultDomain = "";
  this.j.lastMirrorDataAutoSubmitTimeMillis = 0;
  this.j.mirrorPerformanceData = [];
  this.j.oneOffChangeVersion = 0;
};
Dc.prototype.Md = function() {
  return this.j.sendStatsEnabled;
};
var S = function(a, b) {
  Dc.ra().Md() && window._gaq && window._gaq.push(["_trackEvent", "UI", a, b, void 0]);
};
Ma("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var Ec = /<[^>]*>|&[^;]+;/g, Fc = function(a, b) {
  return b ? a.replace(Ec, "") : a;
}, Gc = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/, Hc = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/, Ic = /^http:\/\/.*/, Jc = /\s+/, Kc = /\d/;
Ma("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
Ma("link", "script", "style");
var Lc = function(a) {
  this.he = "number" == typeof a ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1;
};
Lc.prototype.Sd = function(a, b) {
  for (var c = 0, d = 0, f = !1, g = Fc(a, b).split(Jc), h = 0;h < g.length;h++) {
    var m = g[h];
    Hc.test(Fc(m, void 0)) ? (c++, d++) : Ic.test(m) ? f = !0 : Gc.test(Fc(m, void 0)) ? d++ : Kc.test(m) && (f = !0);
  }
  return 0 == d ? f ? 1 : 0 : .4 < c / d ? -1 : 1;
};
Lc.prototype.xd = function(a, b) {
  return this.Td(this.Sd(a, b));
};
Lc.prototype.Td = function(a) {
  return-1 == (0 == a ? this.he : a) ? "rtl" : "ltr";
};
if ("undefined" != typeof angular) {
  var Mc = angular.module("chrome_i18n", []);
  chrome.runtime && chrome.runtime.getManifest && chrome.runtime.getManifest().default_locale && Mc.directive("angularMessage", function() {
    return{restrict:"E", transclude:"element", replace:!0, controller:["$scope", function(a) {
      this.Ja = this.Ka = null;
      a.dirForText = u(function(a) {
        this.Ka || (this.Ka = chrome.i18n.getMessage("@@bidi_dir") || "ltr");
        this.Ja || (this.Ja = new Lc("rtl" == this.Ka));
        return this.Ja.xd(a || "");
      }, this);
    }], compile:function(a, b) {
      var c = b.key, d = null, f = document.createElement("amr");
      c && !c.match(/^\d+$/) && (c = chrome.i18n.getMessage(c), null == c && f.setAttribute("id", "missing"));
      if (c) {
        var g = chrome.i18n.getMessage(c + "_ph"), d = [];
        if (null != g) {
          for (d = g.split("\ue000"), g = 0;g < d.length;++g) {
            d[g] = d[g].replace(/^{{(.*)}}$/, '<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');
          }
        }
        d = chrome.i18n.getMessage(c, d);
      } else {
        f.setAttribute("r", "nokey");
      }
      d ? f.innerHTML = d : (f.setAttribute("tl", "false"), f.innerHTML = a.html());
      a.replaceWith(f);
    }};
  });
}
;chrome.cast.media.mb = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
n("chrome.cast.media.MediaCommand", chrome.cast.media.mb, void 0);
chrome.cast.media.Wd = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
n("chrome.cast.media.MetadataType", chrome.cast.media.Wd, void 0);
chrome.cast.media.u = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
n("chrome.cast.media.PlayerState", chrome.cast.media.u, void 0);
chrome.cast.media.Xd = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
n("chrome.cast.media.ResumeState", chrome.cast.media.Xd, void 0);
chrome.cast.media.Yd = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
n("chrome.cast.media.StreamType", chrome.cast.media.Yd, void 0);
chrome.cast.media.Vd = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
n("chrome.cast.media.IdleReason", chrome.cast.media.Vd, void 0);
chrome.cast.media.de = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
n("chrome.cast.media.TrackType", chrome.cast.media.de, void 0);
chrome.cast.media.be = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
n("chrome.cast.media.TextTrackType", chrome.cast.media.be, void 0);
chrome.cast.media.Zd = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
n("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.Zd, void 0);
chrome.cast.media.ce = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
n("chrome.cast.media.TextTrackWindowType", chrome.cast.media.ce, void 0);
chrome.cast.media.$d = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
n("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.$d, void 0);
chrome.cast.media.ae = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
n("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.ae, void 0);
var Nc = function(a, b) {
  this.type = a;
  this.message = b;
}, Oc = function(a, b, c, d) {
  this.id = a;
  this.uniqueId = b;
  this.name = c;
  this.receiverType = d;
  this.isInLaunch = this.manuallyAdded = !1;
  this.muted = null;
}, Pc = function(a, b) {
  this.receiver = a;
  this.activity = b;
}, Qc = function(a, b) {
  this.id = a;
  this.isDefaultAction = b;
}, Rc = function(a, b, c, d, f, g, h) {
  this.statsCollectNotificationDismissed = s(c) ? c : !0;
  this.sendUsageEnabled = s(d) ? d : !0;
  this.castAppNotificationDismissed = s(a) ? a : !1;
  this.mirrorQualityId = b || dc.id;
  this.hangoutsEnabled = f || !1;
  this.hangoutsInitialized = g || !1;
  this.hangoutsDefaultDomain = h || "";
}, Sc = function(a, b, c, d, f, g, h) {
  this.receiverActs = a || [];
  this.issue = b;
  this.isV1AppInTab = g || !1;
  this.isV2AppInTab = !!h;
  this.v2AppDomain = h || null;
  this.currentActivity = c;
  this.desktopActivity = d;
  this.settings = f || new Rc;
};
var T = function() {
  this.La = this.La;
  this.Nd = this.Nd;
};
T.prototype.La = !1;
T.prototype.isDisposed = function() {
  return this.La;
};
var U = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.F = !1;
  this.qb = !0;
};
U.prototype.stopPropagation = function() {
  this.F = !0;
};
U.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.qb = !1;
};
var Tc = function(a) {
  Tc[" "](a);
  return a;
};
Tc[" "] = ca;
var Uc = !F || F && 9 <= Ya, Vc = F && !H("9");
!G || H("528");
Qa && H("1.9b") || F && H("8") || Pa && H("9.5") || G && H("528");
Qa && !H("8") || F && H("9");
var V = function(a, b) {
  U.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.W = this.state = null;
  a && this.init(a, b);
};
w(V, U);
V.prototype.init = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (Qa) {
      var f;
      t: {
        try {
          Tc(d.nodeName);
          f = !0;
          break t;
        } catch (g) {
        }
        f = !1;
      }
      f || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = G || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = G || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.W = a;
  a.defaultPrevented && this.preventDefault();
};
V.prototype.stopPropagation = function() {
  V.Lb.stopPropagation.call(this);
  this.W.stopPropagation ? this.W.stopPropagation() : this.W.cancelBubble = !0;
};
V.prototype.preventDefault = function() {
  V.Lb.preventDefault.call(this);
  var a = this.W;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Vc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Wc = "closure_listenable_" + (1E6 * Math.random() | 0), Xc = 0;
var Yc = function(a, b, c, d, f, g) {
  this.D = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.ia = g;
  this.key = ++Xc;
  this.removed = this.ha = !1;
};
Yc.prototype.ma = function() {
  this.removed = !0;
  this.ia = this.src = this.proxy = this.D = null;
};
var Zc = function(a) {
  this.src = a;
  this.i = {};
  this.V = 0;
};
e = Zc.prototype;
e.qd = function() {
  return this.V;
};
e.add = function(a, b, c, d, f) {
  var g = a.toString();
  a = this.i[g];
  a || (a = this.i[g] = [], this.V++);
  var h = $c(a, b, d, f);
  -1 < h ? (b = a[h], c || (b.ha = !1)) : (b = new Yc(b, null, this.src, g, !!d, f), b.ha = c, a.push(b));
  return b;
};
e.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.i)) {
    return!1;
  }
  var f = this.i[a];
  b = $c(f, b, c, d);
  return-1 < b ? (f[b].ma(), Aa(f, b), 0 == f.length && (delete this.i[a], this.V--), !0) : !1;
};
e.Hb = function(a) {
  var b = a.type;
  if (!(b in this.i)) {
    return!1;
  }
  var c = Ba(this.i[b], a);
  c && (a.ma(), 0 == this.i[b].length && (delete this.i[b], this.V--));
  return c;
};
e.removeAll = function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.i) {
    if (!a || c == a) {
      for (var d = this.i[c], f = 0;f < d.length;f++) {
        ++b, d[f].ma();
      }
      delete this.i[c];
      this.V--;
    }
  }
  return b;
};
e.Ia = function(a, b, c, d) {
  a = this.i[a.toString()];
  var f = -1;
  a && (f = $c(a, b, c, d));
  return-1 < f ? a[f] : null;
};
e.hasListener = function(a, b) {
  var c = l(a), d = c ? a.toString() : "", f = l(b);
  return Ga(this.i, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || f && a[h].capture != b)) {
        return!0;
      }
    }
    return!1;
  });
};
var $c = function(a, b, c, d) {
  for (var f = 0;f < a.length;++f) {
    var g = a[f];
    if (!g.removed && g.D == b && g.capture == !!c && g.ia == d) {
      return f;
    }
  }
  return-1;
};
var ad = "closure_lm_" + (1E6 * Math.random() | 0), bd = {}, cd = 0, dd = function(a, b, c, d, f) {
  if (q(b)) {
    for (var g = 0;g < b.length;g++) {
      dd(a, b[g], c, d, f);
    }
    return null;
  }
  c = ed(c);
  return a && a[Wc] ? a.listen(b, c, d, f) : fd(a, b, c, !1, d, f);
}, fd = function(a, b, c, d, f, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!f, m = gd(a);
  m || (a[ad] = m = new Zc(a));
  c = m.add(b, c, d, f, g);
  if (c.proxy) {
    return c;
  }
  d = hd();
  c.proxy = d;
  d.src = a;
  d.D = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(id(b.toString()), d);
  cd++;
  return c;
}, hd = function() {
  var a = jd, b = Uc ? function(c) {
    return a.call(b.src, b.D, c);
  } : function(c) {
    c = a.call(b.src, b.D, c);
    if (!c) {
      return c;
    }
  };
  return b;
}, kd = function(a, b, c, d, f) {
  if (q(b)) {
    for (var g = 0;g < b.length;g++) {
      kd(a, b[g], c, d, f);
    }
    return null;
  }
  c = ed(c);
  return a && a[Wc] ? a.le(b, c, d, f) : fd(a, b, c, !0, d, f);
}, ld = function(a, b, c, d, f) {
  if (q(b)) {
    for (var g = 0;g < b.length;g++) {
      ld(a, b[g], c, d, f);
    }
    return null;
  }
  c = ed(c);
  if (a && a[Wc]) {
    return a.Ob(b, c, d, f);
  }
  if (!a) {
    return!1;
  }
  if (a = gd(a)) {
    if (b = a.Ia(b, c, !!d, f)) {
      return md(b);
    }
  }
  return!1;
}, md = function(a) {
  if ("number" == typeof a || !a || a.removed) {
    return!1;
  }
  var b = a.src;
  if (b && b[Wc]) {
    return b.Ba(a);
  }
  var c = a.type, d = a.proxy;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(id(c), d);
  cd--;
  (c = gd(b)) ? (c.Hb(a), 0 == c.qd() && (c.src = null, b[ad] = null)) : a.ma();
  return!0;
}, id = function(a) {
  return a in bd ? bd[a] : bd[a] = "on" + a;
}, od = function(a, b, c, d) {
  var f = 1;
  if (a = gd(a)) {
    if (b = a.i[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.capture == c && !g.removed && (f &= !1 !== nd(g, d));
      }
    }
  }
  return Boolean(f);
}, nd = function(a, b) {
  var c = a.D, d = a.ia || a.src;
  a.ha && md(a);
  return c.call(d, b);
}, jd = function(a, b) {
  if (a.removed) {
    return!0;
  }
  if (!Uc) {
    var c = b || ba("window.event"), d = new V(c, this), f = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      t: {
        var g = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break t;
          } catch (h) {
            g = !0;
          }
        }
        if (g || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (g = d.currentTarget;g;g = g.parentNode) {
        c.push(g);
      }
      for (var g = a.type, m = c.length - 1;!d.F && 0 <= m;m--) {
        d.currentTarget = c[m], f &= od(c[m], g, !0, d);
      }
      for (m = 0;!d.F && m < c.length;m++) {
        d.currentTarget = c[m], f &= od(c[m], g, !1, d);
      }
    }
    return f;
  }
  return nd(a, new V(b, this));
}, gd = function(a) {
  a = a[ad];
  return a instanceof Zc ? a : null;
}, pd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), ed = function(a) {
  z(a, "Listener can not be null.");
  if (t(a)) {
    return a;
  }
  z(a.handleEvent, "An object listener must have handleEvent method.");
  a[pd] || (a[pd] = function(b) {
    return a.handleEvent(b);
  });
  return a[pd];
};
var qd = function() {
  T.call(this);
  this.w = new Zc(this);
  this.ad = this;
  this.ud = null;
};
w(qd, T);
qd.prototype[Wc] = !0;
e = qd.prototype;
e.Ib = function() {
  return this.ud;
};
e.addEventListener = function(a, b, c, d) {
  dd(this, a, b, c, d);
};
e.removeEventListener = function(a, b, c, d) {
  ld(this, a, b, c, d);
};
e.dispatchEvent = function(a) {
  this.Db();
  var b, c = this.Ib();
  if (c) {
    b = [];
    for (var d = 1;c;c = c.Ib()) {
      b.push(c), z(1E3 > ++d, "infinite loop");
    }
  }
  c = this.ad;
  d = a.type || a;
  if (r(a)) {
    a = new U(a, c);
  } else {
    if (a instanceof U) {
      a.target = a.target || c;
    } else {
      var f = a;
      a = new U(d, c);
      La(a, f);
    }
  }
  var f = !0, g;
  if (b) {
    for (var h = b.length - 1;!a.F && 0 <= h;h--) {
      g = a.currentTarget = b[h], f = g.pa(d, !0, a) && f;
    }
  }
  a.F || (g = a.currentTarget = c, f = g.pa(d, !0, a) && f, a.F || (f = g.pa(d, !1, a) && f));
  if (b) {
    for (h = 0;!a.F && h < b.length;h++) {
      g = a.currentTarget = b[h], f = g.pa(d, !1, a) && f;
    }
  }
  return f;
};
e.listen = function(a, b, c, d) {
  this.Db();
  return this.w.add(String(a), b, !1, c, d);
};
e.le = function(a, b, c, d) {
  return this.w.add(String(a), b, !0, c, d);
};
e.Ob = function(a, b, c, d) {
  return this.w.remove(String(a), b, c, d);
};
e.Ba = function(a) {
  return this.w.Hb(a);
};
e.pa = function(a, b, c) {
  a = this.w.i[String(a)];
  if (!a) {
    return!0;
  }
  a = a.concat();
  for (var d = !0, f = 0;f < a.length;++f) {
    var g = a[f];
    if (g && !g.removed && g.capture == b) {
      var h = g.D, m = g.ia || g.src;
      g.ha && this.Ba(g);
      d = !1 !== h.call(m, c) && d;
    }
  }
  return d && 0 != c.qb;
};
e.Ia = function(a, b, c, d) {
  return this.w.Ia(String(a), b, c, d);
};
e.hasListener = function(a, b) {
  return this.w.hasListener(l(a) ? String(a) : void 0, b);
};
e.Db = function() {
  z(this.w, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
var rd = function(a, b, c) {
  if (t(a)) {
    c && (a = u(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = u(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
};
var sd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, ud = function(a) {
  if (td) {
    td = !1;
    var b = k.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = ud(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname) {
        throw td = !0, Error();
      }
    }
  }
  return a.match(sd);
}, td = G;
var vd = P("cv.TabUtils"), wd = null, xd = function(a) {
  a != chrome.windows.WINDOW_ID_NONE && (Q(vd, "Newly focused window ID: " + a), wd = a);
}, yd = function() {
  chrome.windows.getLastFocused(function(a) {
    wd || (wd = a.id);
  });
  chrome.windows.onFocusChanged.addListener(xd);
}, Ad = function(a, b) {
  chrome.tabs.get(a, function(a) {
    zd(a, b);
  });
}, zd = function(a, b) {
  if (a) {
    var c = a.id;
    chrome.windows.update(a.windowId, {focused:!0}, function() {
      chrome.tabs.update(c, {active:!0}, b);
    });
  } else {
    b(null);
  }
}, Bd = function(a, b, c) {
  chrome.tabs.query({url:a}, function(a) {
    a && 0 < a.length ? zd(a[0], c) : chrome.tabs.create({url:b}, c);
  });
};
var Cd = function() {
};
Cd.prototype.Pb = null;
Cd.prototype.$a = function() {
  return this.Pb || (this.Pb = this.Qd());
};
var Dd, Ed = function() {
};
w(Ed, Cd);
Ed.prototype.Mb = function() {
  var a = this.Rb();
  return a ? new ActiveXObject(a) : new XMLHttpRequest;
};
Ed.prototype.Qd = function() {
  var a = {};
  this.Rb() && (a[0] = !0, a[1] = !0);
  return a;
};
Ed.prototype.Rb = function() {
  if (!this.Sb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        return new ActiveXObject(c), this.Sb = c;
      } catch (d) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.Sb;
};
Dd = new Ed;
var Y = function(a) {
  qd.call(this);
  this.headers = new N;
  this.aa = a || null;
  this.G = !1;
  this.Z = this.c = null;
  this.M = this.Va = this.$ = "";
  this.P = this.va = this.Y = this.wa = !1;
  this.I = 0;
  this.ba = null;
  this.N = "";
  this.ca = this.dc = !1;
};
w(Y, qd);
Y.prototype.e = P("goog.net.XhrIo");
var Fd = /^https?$/i, Gd = ["POST", "PUT"];
Y.prototype.Ad = function(a) {
  this.I = Math.max(0, a);
};
Y.prototype.zd = function(a) {
  this.N = a;
};
Y.prototype.send = function(a, b, c, d) {
  if (this.c) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.$ + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.$ = a;
  this.M = "";
  this.Va = b;
  this.wa = !1;
  this.G = !0;
  this.c = this.nc();
  this.Z = this.aa ? this.aa.$a() : Dd.$a();
  this.c.onreadystatechange = u(this.Ta, this);
  try {
    Q(this.e, this.r("Opening Xhr")), this.va = !0, this.c.open(b, String(a), !0), this.va = !1;
  } catch (f) {
    Q(this.e, this.r("Error opening Xhr: " + f.message));
    this.H(5, f);
    return;
  }
  a = c || "";
  var g = this.headers.clone();
  d && Jb(d, function(a, b) {
    g.set(b, a);
  });
  d = B(g.O(), Hd);
  c = k.FormData && a instanceof k.FormData;
  !(0 <= xa(Gd, b)) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  g.forEach(function(a, b) {
    this.c.setRequestHeader(b, a);
  }, this);
  this.N && (this.c.responseType = this.N);
  "withCredentials" in this.c && (this.c.withCredentials = this.dc);
  try {
    this.Za(), 0 < this.I && (this.ca = Id(this.c), Q(this.e, this.r("Will abort after " + this.I + "ms if incomplete, xhr2 " + this.ca)), this.ca ? (this.c.timeout = this.I, this.c.ontimeout = u(this.ab, this)) : this.ba = rd(this.ab, this.I, this)), Q(this.e, this.r("Sending request")), this.Y = !0, this.c.send(a), this.Y = !1;
  } catch (h) {
    Q(this.e, this.r("Send error: " + h.message)), this.H(5, h);
  }
};
var Id = function(a) {
  return F && H(9) && "number" == typeof a.timeout && l(a.ontimeout);
}, Hd = function(a) {
  return "content-type" == a.toLowerCase();
};
e = Y.prototype;
e.nc = function() {
  return this.aa ? this.aa.Mb() : Dd.Mb();
};
e.ab = function() {
  "undefined" != typeof aa && this.c && (this.M = "Timed out after " + this.I + "ms, aborting", Q(this.e, this.r(this.M)), this.dispatchEvent("timeout"), this.abort(8));
};
e.H = function(a, b) {
  this.G = !1;
  this.c && (this.P = !0, this.c.abort(), this.P = !1);
  this.M = b;
  this.gb();
  this.ya();
};
e.gb = function() {
  this.wa || (this.wa = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"));
};
e.abort = function() {
  this.c && this.G && (Q(this.e, this.r("Aborting")), this.G = !1, this.P = !0, this.c.abort(), this.P = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.ya());
};
e.Ta = function() {
  this.isDisposed() || (this.va || this.Y || this.P ? this.Jb() : this.hd());
};
e.hd = function() {
  this.Jb();
};
e.Jb = function() {
  if (this.G && "undefined" != typeof aa) {
    if (this.Z[1] && 4 == this.Q() && 2 == this.ea()) {
      Q(this.e, this.r("Local request error detected and ignored"));
    } else {
      if (this.Y && 4 == this.Q()) {
        rd(this.Ta, 0, this);
      } else {
        if (this.dispatchEvent("readystatechange"), this.za()) {
          Q(this.e, this.r("Request complete"));
          this.G = !1;
          try {
            this.jb() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.M = this.Ec() + " [" + this.ea() + "]", this.gb());
          } finally {
            this.ya();
          }
        }
      }
    }
  }
};
e.ya = function(a) {
  if (this.c) {
    this.Za();
    var b = this.c, c = this.Z[0] ? ca : null;
    this.Z = this.c = null;
    a || this.dispatchEvent("ready");
    try {
      b.onreadystatechange = c;
    } catch (d) {
      (a = this.e) && a.kb("Problem encountered resetting onreadystatechange: " + d.message, void 0);
    }
  }
};
e.Za = function() {
  this.c && this.ca && (this.c.ontimeout = null);
  "number" == typeof this.ba && (k.clearTimeout(this.ba), this.ba = null);
};
e.za = function() {
  return 4 == this.Q();
};
e.jb = function() {
  var a = this.ea(), b;
  t: {
    switch(a) {
      case 200:
      ;
      case 201:
      ;
      case 202:
      ;
      case 204:
      ;
      case 206:
      ;
      case 304:
      ;
      case 1223:
        b = !0;
        break t;
      default:
        b = !1;
    }
  }
  return b || 0 === a && !this.Jd();
};
e.Jd = function() {
  var a = ud(String(this.$))[1] || null;
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return Fd.test(a ? a.toLowerCase() : "");
};
e.Q = function() {
  return this.c ? this.c.readyState : 0;
};
e.ea = function() {
  try {
    return 2 < this.Q() ? this.c.status : -1;
  } catch (a) {
    return-1;
  }
};
e.Ec = function() {
  try {
    return 2 < this.Q() ? this.c.statusText : "";
  } catch (a) {
    return Q(this.e, "Can not get status: " + a.message), "";
  }
};
e.yd = function() {
  try {
    if (!this.c) {
      return null;
    }
    if ("response" in this.c) {
      return this.c.response;
    }
    switch(this.N) {
      case "":
      ;
      case "text":
        return this.c.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in this.c) {
          return this.c.mozResponseArrayBuffer;
        }
      ;
    }
    var a = this.e;
    a && a.kb("Response type " + this.N + " is not supported on this browser", void 0);
    return null;
  } catch (b) {
    return Q(this.e, "Can not get response: " + b.message), null;
  }
};
e.getResponseHeader = function(a) {
  return this.c && this.za() ? this.c.getResponseHeader(a) : void 0;
};
e.getAllResponseHeaders = function() {
  return this.c && this.za() ? this.c.getAllResponseHeaders() : "";
};
e.r = function(a) {
  return a + " [" + this.Va + " " + this.$ + " " + this.ea() + "]";
};
var Jd = function(a) {
  Bd("http://support.google.com/chromecast/go*", a, function() {
    window.close();
  });
}, Kd = function(a) {
  "feedback.html" == a ? S("popup-choice-help") : "options.html" == a && S("choice-options");
  a = chrome.extension.getURL(a);
  Bd(a + "*", a, function() {
    window.close();
  });
}, Ld = function(a, b) {
  var c = new Y;
  c.zd("blob");
  c.Ad(1500);
  kd(c, ["complete", "timeout"], function() {
    if (c.jb()) {
      var a = window.webkitURL.createObjectURL(c.yd());
      b(a);
    } else {
      b(null);
    }
  });
  c.send(a, "GET");
};
var Md = function() {
};
Md.prototype.getMessage = function(a, b) {
  return this.ke(a, b).message;
};
Md.prototype.ke = function(a, b) {
  for (var c = [], d = {}, f = /{{(\w+?)}}/g, g = f.exec(a);null != g;) {
    b ? b[g[1]] && (d[g[1]] = b[g[1]]) : d[g[1]] = d[g[1]], g = f.exec(a);
  }
  for (var h in d) {
    h && (b && (a = a.replace(new RegExp("{{" + h + "}}", "g"), d[h])), c.push(h));
  }
  return{message:a, bindings:c};
};
da(Md);
var Nd = function(a, b, c, d) {
  this.A = Md.ra();
  this.activity = a;
  this.L = !!this.activity.mediaPlayerStatus;
  this.fa = this.activity.mediaPlayerStatus;
  this.Pa = this.L && 0 <= xa(this.fa.supportedCommands, chrome.cast.media.mb.PAUSE);
  this.Ma = this.L && (this.fa.playerState == chrome.cast.media.u.PAUSED || this.fa.playerState == chrome.cast.media.u.PLAYING);
  this.Yb = this.L && this.fa.playerState == chrome.cast.media.u.PAUSED ? "/data/play.png" : "/data/pause.png";
  this.Oa = "cast" == a.receiver.receiverType && s(a.receiver.muted);
  this.Xb = a.receiver.muted ? "/data/mute.png" : "/data/unmute.png";
  this.Na = "mirror_tab" == this.activity.activityType && this.activity.isLocal;
  this.Wb = "/data/mirror_quality.png";
  this.Qa = this.Fc(b, c);
  this.sa = "none" != b && 0 < this.Qa.length && "custom_app" != this.activity.activityType && ("create_session" != b || "hangout" != this.activity.receiver.receiverType);
  this.Vb = this.Gc();
  this.Zb = this.A.getMessage(yb);
  this.Ub = d ? d.activityId == a.id : !1;
};
Nd.prototype.Fc = function(a, b) {
  switch(a) {
    case "create_session":
      return z(null != b, "Expecting v2 app domain "), this.A.getMessage(zb, {v2AppDomain:b});
    case "cast_this_tab":
      return this.A.getMessage(xb);
    case "cast_desktop":
      return this.A.getMessage(ub);
    default:
      return "";
  }
};
Nd.prototype.Gc = function() {
  var a = this.activity.allowStop + this.sa, b = 330 - 35 * (this.Pa + this.Oa + this.Na);
  return 0 == a ? "0px" : Math.floor(b / a) + "px";
};
var Od = function(a, b, c) {
  this.e = P("cv2.PopupActivityDetailCtrl");
  this.K = b;
  this.b = c;
  this.a = a;
  this.h = null;
  this.jc();
  a.$on("MODEL_UPDATE", u(this.B, this));
};
e = Od.prototype;
e.B = function() {
  Q(this.e, "on model update");
  this.X(this.b.k());
  this.a.$apply();
};
e.bc = function() {
  if (this.a.selectedActivity) {
    if (this.a.selectedActivity.iconUrl) {
      var a = this.a.selectedActivity.iconUrl;
      this.a.selectedActivity.iconUrl = "data/default_activity.png";
      "data/default_activity.png" != a && Ld(a, u(function(a) {
        a && (this.a.selectedActivity.iconUrl = a, this.a.$apply());
      }, this));
    } else {
      this.a.selectedActivity.iconUrl = "data/default_activity.png";
    }
  }
};
e.hc = function() {
  var a = this.a.selectedActivity;
  !a || !a.tabId || 0 > a.tabId || Ad(a.tabId, function(a) {
    a && window.close();
  });
};
e.Xa = function(a, b) {
  return{activityId:a, data:b};
};
e.X = function(a) {
  this.a.selectedActivity = this.b.ua();
  this.a.selectedActivity && (this.a.isLaunching = this.b.ua().receiver.isInLaunch, this.bc(), this.h = new Nd(this.a.selectedActivity, this.b.ta(), a.v2AppDomain, a.issue), this.a.enableMediaControls = this.h.L, this.a.showPlayPause = this.h.Pa, this.a.enablePlayPause = this.h.Ma, this.a.playPauseIcon = this.h.Yb, this.a.showMuteUnmute = this.h.Oa, this.a.muteUnmuteIcon = this.h.Xb, this.a.showMirrorQuality = this.h.Na, this.a.mirrorQualityIcon = this.h.Wb, this.a.showCastAction = this.h.sa, this.a.castActionLabel = 
  this.h.Qa, this.a.largeButtonWidth = this.h.Vb, this.a.stopLabel = this.h.Zb, this.a.hasActivityIssue = this.h.Ub, this.a.sharedState = this.a.sharedState || {}, this.a.sharedState.selectingMirrorQuality = this.a.sharedState.selectingMirrorQuality || !1, this.a.isV1AppInTab = a.isV1AppInTab, this.a.settings = a.settings, this.a.updateSettings = u(this.cc, this));
};
e.cc = function() {
  var a = this.b.k();
  a.settings.mirrorQualityId = this.a.settings.mirrorQualityId;
  this.b.sendRequest("update_settings", a.settings);
};
e.jc = function() {
  this.X(this.b.k());
  this.a.mirrorQualities = ic;
  this.a.onClickLearnCastEnabledPage = v(Jd, "http://support.google.com/chromecast/go/castenabledpage");
  this.a.changeDevice = u(function() {
    S("status-choice-devices");
    this.b.Ua(null);
    this.K.path("/receiver_picker");
  }, this);
  this.a.showOriginalTab = u(this.hc, this);
  this.a.doCastAction = u(this.ec, this);
  this.a.playOrPause = u(function() {
    S("status-choice-playOrPause");
    this.h.L && this.gc();
  }, this);
  this.a.muteOrUmute = u(function() {
    S("status-choice-muteOrUmute");
    this.fc();
  }, this);
  this.a.stopActivity = u(this.ic, this);
};
e.ec = function() {
  this.h.sa && this.a.selectedActivity && (this.a.castActionLabel = Eb, this.a.isLaunching = !0, this.b.eb(this.a.selectedActivity.receiver));
};
e.gc = function() {
  var a = this.a.selectedActivity;
  if (a && a.mediaPlayerStatus && this.h.Ma) {
    var b = this.Xa(a.id, {}), c = null;
    switch(a.mediaPlayerStatus.playerState) {
      case chrome.cast.media.u.PLAYING:
        this.b.sendRequest("pause_media", b);
        c = chrome.cast.media.u.PAUSED;
        break;
      case chrome.cast.media.u.PAUSED:
        this.b.sendRequest("play_media", b), c = chrome.cast.media.u.PLAYING;
    }
    c && (a.mediaPlayerStatus.playerState = c, this.X(this.b.k()));
  }
};
e.fc = function() {
  var a = this.a.selectedActivity;
  a && (this.b.sendRequest("set_mute", this.Xa(a.id, {muted:!a.receiver.muted})), a.receiver.muted = !a.receiver.muted, this.X(this.b.k()));
};
e.ic = function() {
  var a = this.a.selectedActivity;
  a && (this.b.sendRequest("stop_activity", a), this.a.selectedActivity = null, window.close());
};
var Pd = function(a, b, c, d) {
  this.source = a;
  this.target = b;
  this.type = c;
  this.content = d;
  this.windowUrl = null;
};
var Qd = function() {
  T.call(this);
  this.m = [];
  this.q = {};
};
w(Qd, T);
e = Qd.prototype;
e.Gb = 1;
e.oa = 0;
e.subscribe = function(a, b, c) {
  var d = this.q[a];
  d || (d = this.q[a] = []);
  var f = this.Gb;
  this.m[f] = a;
  this.m[f + 1] = b;
  this.m[f + 2] = c;
  this.Gb = f + 3;
  d.push(f);
  return f;
};
e.unsubscribe = function(a, b, c) {
  if (a = this.q[a]) {
    var d = this.m;
    if (a = B(a, function(a) {
      return d[a + 1] == b && d[a + 2] == c;
    })) {
      return this.ka(a);
    }
  }
  return!1;
};
e.ka = function(a) {
  if (0 != this.oa) {
    return this.na || (this.na = []), this.na.push(a), !1;
  }
  var b = this.m[a];
  if (b) {
    var c = this.q[b];
    c && Ba(c, a);
    delete this.m[a];
    delete this.m[a + 1];
    delete this.m[a + 2];
  }
  return!!b;
};
e.publish = function(a, b) {
  var c = this.q[a];
  if (c) {
    this.oa++;
    for (var d = Ca(arguments, 1), f = 0, g = c.length;f < g;f++) {
      var h = c[f];
      this.m[h + 1].apply(this.m[h + 2], d);
    }
    this.oa--;
    if (this.na && 0 == this.oa) {
      for (;c = this.na.pop();) {
        this.ka(c);
      }
    }
    return 0 != f;
  }
  return!1;
};
e.clear = function(a) {
  if (a) {
    var b = this.q[a];
    b && (ya(b, this.ka, this), delete this.q[a]);
  } else {
    this.m.length = 0, this.q = {};
  }
};
e.Ea = function(a) {
  if (a) {
    var b = this.q[a];
    return b ? b.length : 0;
  }
  a = 0;
  for (b in this.q) {
    a += this.Ea(b);
  }
  return a;
};
var Rd = function(a) {
  this.U = a;
  this.ja = new Qd;
  this.e = P("cv.Messenger-" + a);
};
w(Rd, T);
e = Rd.prototype;
e.init = function() {
  chrome.extension.onMessage.addListener(u(this.me, this));
};
e.Cd = function(a, b, c, d) {
  Q(this.e, "Sending message to " + a + ": " + JSON.stringify(c));
  chrome.extension.sendMessage(JSON.stringify(new Pd(this.U, a, b, c)), d || ca);
};
e.Od = function(a, b, c) {
  z("background" != this.U, "background page can NOT send message to itself");
  this.Cd("background", a, b, c);
};
e.me = function(a, b) {
  z(r(a), "Expect a string. Got " + JSON.stringify(a));
  var c = JSON.parse(a);
  if (this.U == c.target && this.U != c.source && ("background" == this.U || "background" == c.source)) {
    var d;
    b.tab ? (d = b.tab, c.windowUrl && d.url != c.windowUrl && (d.url = c.windowUrl, d.title = "", d.favIconUrl = "")) : d = {id:-1};
    var f = this.e, g = "Getting message from tab " + d.id + ": " + JSON.stringify(c);
    f && f.log(Yb, g, void 0);
    this.ja.publish(c.type, d, c.content);
  }
};
e.listen = function(a, b, c) {
  return this.ja.subscribe(a, b, c);
};
e.Ob = function(a, b, c) {
  return this.ja.unsubscribe(a, b, c);
};
e.Ba = function(a) {
  return this.ja.ka(a);
};
var Sd = function(a) {
  this.e = P("cv2.PopupDataService");
  this.xa = new Rd("popup");
  this.d = new Sc([], null, null, null, null, !1, null);
  this.Wa = !1;
  this.n = null;
  this.s = void 0;
  this.a = a;
  this.xa.init();
  this.xa.listen("event_to_popup", this.kc, this);
  this.sendRequest("init", {});
};
e = Sd.prototype;
e.sendRequest = function(a, b) {
  var c = new Nc(a, b);
  this.xa.Od("popup_menu_request", c);
  return c;
};
e.Cc = function(a) {
  this.n = a;
};
e.oc = function() {
  return this.n;
};
e.ta = function() {
  return this.s ? this.td() : this.sd();
};
e.td = function() {
  if (this.n) {
    if (this.d.desktopActivity && "cast_desktop" == this.n) {
      return "none";
    }
    var a = "cast_this_tab" == this.n || "cast_this_tab_audio" == this.n;
    return this.d.currentActivity && "mirror_tab" == this.d.currentActivity.activityType && a ? "none" : this.n;
  }
  return!qb || !this.d.isV2AppInTab || this.d.currentActivity && "v2_app" == this.d.currentActivity.activityType ? this.d.currentActivity || this.d.desktopActivity ? "none" : "cast_this_tab" : "create_session";
};
e.sd = function() {
  return this.n ? this.n : qb && this.d.isV2AppInTab ? "create_session" : "cast_this_tab";
};
e.eb = function(a) {
  a = {receiver:a, isUserOverride:!!this.n};
  switch(this.ta()) {
    case "cast_this_tab_audio":
      this.sendRequest("cast_this_tab_audio", a);
      break;
    case "cast_this_tab":
      this.sendRequest("cast_this_tab", a);
      break;
    case "cast_desktop":
      this.sendRequest("launch_desktop_mirror", a);
      break;
    case "create_session":
      this.sendRequest("create_session", a);
      break;
    default:
      return!1;
  }
  return!0;
};
e.Zc = function(a) {
  this.sendRequest("remove_receiver", a);
};
e.Yc = function() {
  this.sendRequest("initialize_castouts", null);
};
e.hb = function(a) {
  this.d.issue && this.sendRequest("act_on_issue", new Qc(this.d.issue.id, a));
};
e.k = function() {
  return this.d;
};
e.lc = function() {
  return this.Wa;
};
e.kc = function(a, b) {
  "model_update" == b.type && (this.d = b.message, this.Wa = !0, this.Bc(), this.yc(), this.a.$broadcast("MODEL_UPDATE"));
};
e.ua = function() {
  return this.s;
};
e.Ua = function(a) {
  this.s = a || null;
};
e.yc = function() {
  B(this.d.receiverActs, function(a) {
    return a.activity && a.activity.isInLaunch;
  });
};
e.Bc = function() {
  this.Jc();
  l(this.s) || (this.d.currentActivity ? this.s = this.d.currentActivity : 1 == this.Ic() && (this.s = this.Hc()));
};
e.Jc = function() {
  if (this.s) {
    var a = B(this.d.receiverActs, u(function(a) {
      return a.activity && a.activity.id == this.s.id;
    }, this));
    this.s = a ? a.activity : void 0;
  }
};
e.Ic = function() {
  return za(this.d.receiverActs, function(a) {
    return a.activity && a.activity.isLocal;
  });
};
e.Hc = function() {
  var a = B(this.d.receiverActs, function(a) {
    return a.activity && a.activity.isLocal;
  });
  return a ? a.activity : null;
};
e.sc = function(a) {
  switch(a) {
    case "cast":
      return "chromecast-device";
    case "hangout":
      return "hangout-device";
    default:
      return "generic-device";
  }
};
var Td = function(a, b) {
  this.e = P("cv2.IssuerNotifierCtrl");
  this.a = a;
  this.b = b;
  this.pc();
  a.$on("MODEL_UPDATE", u(this.B, this));
};
Td.prototype.B = function() {
  Q(this.e, "on model update");
  this.fb();
  this.a.$apply();
};
Td.prototype.fb = function() {
  var a = this.b.k().issue;
  a && (this.a.issueTitle = a.title, this.a.issueMessage = a.message, this.a.issueOptActText = a.optActionText, this.a.issueDefaultActText = a.defaultActionText, this.a.showIssueOptActButton = 0 < a.optActionText.length);
};
Td.prototype.pc = function() {
  this.fb();
  this.a.actOnIssueWithOptAct = u(this.b.hb, this.b, !1);
  this.a.actOnIssueWithDefaultAct = u(this.b.hb, this.b, !0);
};
var Ud = function() {
  this.Tb = ha();
}, Vd = new Ud;
Ud.prototype.set = function(a) {
  this.Tb = a;
};
Ud.prototype.reset = function() {
  this.set(ha());
};
Ud.prototype.get = function() {
  return this.Tb;
};
var Wd = function(a) {
  this.Oc = a || "";
  this.Pc = Vd;
};
e = Wd.prototype;
e.nb = !0;
e.ob = !0;
e.Tc = !0;
e.Sc = !0;
e.pb = !1;
e.Uc = !1;
var Z = function(a) {
  return 10 > a ? "0" + a : String(a);
}, Xd = function(a, b) {
  var c = (a.yb() - b) / 1E3, d = c.toFixed(3), f = 0;
  if (1 > c) {
    f = 2;
  } else {
    for (;100 > c;) {
      f++, c *= 10;
    }
  }
  for (;0 < f--;) {
    d = " " + d;
  }
  return d;
}, Yd = function(a) {
  Wd.call(this, a);
};
w(Yd, Wd);
Yd.prototype.gd = function(a) {
  var b = [];
  b.push(this.Oc, " ");
  if (this.ob) {
    var c = new Date(a.yb());
    b.push("[", Z(c.getFullYear() - 2E3) + Z(c.getMonth() + 1) + Z(c.getDate()) + " " + Z(c.getHours()) + ":" + Z(c.getMinutes()) + ":" + Z(c.getSeconds()) + "." + Z(Math.floor(c.getMilliseconds() / 10)), "] ");
  }
  this.Tc && b.push("[", Xd(a, this.Pc.get()), "s] ");
  this.Sc && b.push("[", a.rb(), "] ");
  this.Uc && b.push("[", a.Ca().name, "] ");
  b.push(a.getMessage());
  this.pb && a.Qc() && b.push("\n", a.Rc());
  this.nb && b.push("\n");
  return b.join("");
};
var Zd = function() {
  this.Ab = u(this.bd, this);
  this.la = new Yd;
  this.la.ob = !1;
  this.la.pb = !1;
  this.zb = this.la.nb = !1;
  this.vb = "";
  this.Nc = {};
};
Zd.prototype.mc = function(a) {
  if (a != this.zb) {
    var b = bc();
    a ? b.vd(this.Ab) : b.wd(this.Ab);
    this.zb = a;
  }
};
Zd.prototype.bd = function(a) {
  if (!this.Nc[a.rb()]) {
    var b = this.la.gd(a), c = $d;
    if (c) {
      switch(a.Ca()) {
        case Sb:
          ae(c, "info", b);
          break;
        case Tb:
          ae(c, "error", b);
          break;
        case Ub:
          ae(c, "warn", b);
          break;
        default:
          ae(c, "debug", b);
      }
    } else {
      this.vb += b;
    }
  }
};
var $d = k.console, ae = function(a, b, c) {
  if (a[b]) {
    a[b](c);
  } else {
    a.log(c);
  }
};
var be = function(a, b, c) {
  var d = new Zd;
  bc().da(Xb);
  d.mc(!0);
  this.e = P("cv2.PopupMenuCtrl");
  this.K = b;
  this.b = c;
  this.a = a;
  yd();
  this.Ya();
  a.$on("MODEL_UPDATE", u(this.B, this));
};
be.prototype.B = function() {
  Q(this.e, "on model update");
  this.Ya();
};
be.prototype.Ya = function() {
  var a = this.b.k(), b = "/receiver_picker";
  this.b.lc() ? a.settings.statsCollectNotificationDismissed ? a.issue && a.issue.isBlocking ? b = "/issue_notifier" : this.b.ua() ? b = "/activity_detail" : a.isV1AppInTab && !a.settings.castAppNotificationDismissed && (b = "/v1_app_notification") : b = "/stats_collect_prompt" : b = "/";
  Q(this.e, "Showing " + b);
  this.K.url(b);
  this.a.$$phase || this.a.$apply();
};
var ce = function(a, b, c) {
  this.e = P("cv2.ReceiverPickerCtrl");
  this.K = b;
  this.b = c;
  this.d = c.k();
  this.a = a;
  this.A = Md.ra();
  this.ac();
  this.$b();
  a.$on("MODEL_UPDATE", u(this.B, this));
};
e = ce.prototype;
e.B = function() {
  Q(this.e, "on model update");
  this.d = this.b.k();
  this.Ra();
  this.Sa();
  this.a.$apply();
};
e.ac = function() {
  this.Ra();
  this.a.onClickLearnCastEnabledPage = v(Jd, "http://support.google.com/chromecast/go/castenabledpage");
  this.a.onClickReceiver = u(this.uc, this);
  this.a.onClickRemoveReceiver = u(this.vc, this);
  this.a.onClickDeviceMissing = v(Jd, "http://support.google.com/chromecast/go/nodevices");
  this.a.sendFeedback = v(Kd, "feedback.html");
  this.a.showOptions = v(Kd, "options.html");
  this.a.castToHangoutReceiver = u(this.qc, this);
  this.a.showHelp = u(this.xc, this);
  this.a.disableProjectScreen = (1920 < window.screen.width * window.devicePixelRatio || 1080 < window.screen.height * window.devicePixelRatio) && !(0 <= y(K, 29));
  this.a.getReceiverIconClass = u(this.b.sc, this.b);
  this.a.getReceiverDisplayName = u(this.rc, this);
  this.a.showHangoutName = u(this.wc, this);
  this.a.enterHangoutNameText = Db;
  this.a.onClickInitCastouts = u(this.tc, this);
};
e.$b = function() {
  this.a.data = this.a.data || {};
  this.Sa();
  this.a.data.selectingCastMode = !1;
  this.a.setUserCastAction = u(this.Dc, this);
};
e.Dc = function(a) {
  this.b.Cc(a);
  this.a.data.castAction = a;
  this.bb();
  this.a.data.selectingCastMode = !1;
};
e.Sa = function() {
  this.d.isV2AppInTab && qb ? (this.a.offerCreateSession = !0, this.a.castAppLabel = this.A.getMessage(wb, this.a)) : this.a.offerCreateSession = !1;
  this.a.data.castAction = this.b.oc();
};
e.Ra = function() {
  Fa(this.d.receiverActs, function(a, b) {
    var c = "cast" != a.receiver.receiverType;
    return c == ("cast" != b.receiver.receiverType) ? a.receiver.name.localeCompare(b.receiver.name) : c ? 1 : -1;
  });
  this.a.receiverActs = this.d.receiverActs;
  this.a.nonHangoutReceiverActs = this.Ac();
  this.a.hangoutReceiverActs = this.zc();
  this.a.multipleHangoutDomains = 1 < Ha(this.a.hangoutReceiverActs);
  this.a.v2AppDomain = this.d.v2AppDomain;
  this.a.isV1AppInTab = this.d.isV1AppInTab;
  this.a.showIssue = this.d.issue && !this.d.issue.isBlocking && !this.d.issue.activityId;
  this.a.hangoutsEnabled = this.d.settings.hangoutsEnabled;
  this.a.hangoutsInitialized = this.d.settings.hangoutsInitialized;
  this.bb();
};
e.bb = function() {
  var a = null;
  switch(this.b.ta()) {
    case "create_session":
      a = this.A.getMessage(vb, this.a);
      break;
    case "cast_this_tab":
      a = sb;
      break;
    case "cast_desktop":
      a = ub;
      break;
    case "cast_this_tab_audio":
      a = tb;
      break;
    default:
      (a = this.e) && a.cb("Cannot set receiver picker title", void 0);
      return;
  }
  z(null != a);
  this.a.receiverListTitle = a;
};
e.Kc = function(a) {
  a.isInLaunch = !0;
};
e.uc = function(a) {
  a.receiver.isInLaunch ? (a = this.e) && a.info("There is an activity in launch; cannot launch another activity", void 0) : this.ib(a);
};
e.vc = function(a) {
  this.b.Zc(a.receiver.id);
};
e.ib = function(a) {
  a.activity ? (S("popup-choice-active"), this.b.Ua(a.activity), this.K.path("/activity_detail")) : (S("popup-choice-idle"), this.b.eb(a.receiver) && ("custom" == a.receiver.receiverType ? window.close() : this.Kc(a.receiver)));
};
e.tc = function() {
  this.b.Yc();
};
e.qc = function() {
  var a = ra(this.a.hangoutName), b = new Oc("", a, a, "hangout");
  Q(this.e, "Casting to hangout: " + a);
  this.ib(new Pc(b, null));
};
e.xc = function() {
  S("popup-choice-help");
  Bd("http://support.google.com/chromecast/go/castfromchrome*", "http://support.google.com/chromecast/go/castfromchrome", function() {
    window.close();
  });
};
e.Ac = function() {
  return this.d.receiverActs.filter(function(a) {
    return "hangout" != a.receiver.receiverType;
  });
};
e.zc = function() {
  var a = {};
  this.d.receiverActs.filter(function(a) {
    return "hangout" == a.receiver.receiverType;
  }).map(function(b) {
    var c = b.receiver.uniqueId.split("@")[1];
    c && (a[c] || (a[c] = []), a[c].push(b));
  });
  return a;
};
e.rc = function(a) {
  return this.a.multipleHangoutDomains || a.split("@")[1] != this.d.settings.hangoutsDefaultDomain ? a : a.split("@")[0];
};
e.wc = function(a) {
  return!a.activity && a.receiver.name != a.receiver.uniqueId;
};
document.addEventListener("DOMContentLoaded", function() {
  var a = "UA-50032818-1";
  ob ? a = "UA-50032818-2" : pb && (a = "UA-50032818-3");
  window._gaq = window._gaq || [];
  window._gaq.push(["_setAccount", a]);
  window._gaq.push(["_trackPageview"]);
  a = document.createElement("script");
  a.type = "text/javascript";
  a.async = !0;
  a.src = "https://ssl.google-analytics.com/ga.js";
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b);
}, !1);
var $ = angular.module("popupMenu", ["ngSanitize", "chrome_i18n", "ngRoute"]);
$.factory("popupMenuDataService", ["$rootScope", function(a) {
  return new Sd(a);
}]);
$.controller("PopupMenuCtrl", ["$scope", "$location", "popupMenuDataService", be]);
$.controller("PopupIssuerNotifierCtrl", ["$scope", "popupMenuDataService", Td]);
$.controller("PopupReceiverPickerCtrl", ["$scope", "$location", "popupMenuDataService", ce]);
$.controller("PopupActivityDetailCtrl", ["$scope", "$location", "popupMenuDataService", Od]);
$.controller("PopupV1AppNotificationCtrl", ["$scope", "popupMenuDataService", function(a, b) {
  a.dismissCastAppNotification = function() {
    var a = b.k();
    a.settings.castAppNotificationDismissed = !0;
    b.sendRequest("update_settings", a.settings);
    window.close();
  };
}]);
$.controller("StatsCollectionPromptCtrl", ["$scope", "$location", "popupMenuDataService", function(a, b, c) {
  a.sendUsage = c.k().settings.sendUsageEnabled;
  var d = function(a, b) {
    var d = c.k();
    s(b) && (d.settings.sendUsageEnabled = b);
    d.settings.statsCollectNotificationDismissed = a;
    c.sendRequest("update_settings", d.settings);
  };
  a.changeSendUsage = function() {
    d(!1, a.sendUsage);
  };
  a.dismiss = function() {
    d(!0);
    b.path("/receiver_picker");
  };
  a.$on("MODEL_UPDATE", function() {
    a.sendUsage = c.k().settings.sendUsageEnabled;
    a.$apply();
  });
}]);
$.config(["$routeProvider", function(a) {
  a.when("/", {templateUrl:"/popup_partials/initializing.html"}).when("/v1_app_notification", {controller:"PopupV1AppNotificationCtrl", templateUrl:"/popup_partials/v1_app_notification.html"}).when("/receiver_picker", {controller:"PopupReceiverPickerCtrl", templateUrl:"/popup_partials/receiver_picker.html"}).when("/activity_detail", {controller:"PopupActivityDetailCtrl", templateUrl:"/popup_partials/activity_detail.html"}).when("/issue_notifier", {controller:"PopupIssuerNotifierCtrl", templateUrl:"/popup_partials/issue_notifier.html"}).when("/stats_collect_prompt", 
  {controller:"StatsCollectionPromptCtrl", templateUrl:"/popup_partials/stats_collect_prompt.html"}).otherwise({redirectTo:"/"});
}]);
$.config(["$compileProvider", function(a) {
  a.imgSrcSanitizationWhitelist(/^\s*(https?|chrome-extension):|blob:chrome-extension%3A/);
}]);

