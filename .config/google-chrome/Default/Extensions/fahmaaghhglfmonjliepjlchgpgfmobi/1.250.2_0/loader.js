var tya=this,tyb=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},tyc=function(a){var b=tyb(a);return"array"==b||"object"==b&&"number"==typeof a.length},tyd=function(a){return"string"==typeof a},tye=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};var tyf=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},tyn=function(a){if(!tyg.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(tyh,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(tyi,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(tyj,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(tyk,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(tyl,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(tym,"&#0;"));return a},tyh=/&/g,tyi=/</g,tyj=/>/g,tyk=/"/g,tyl=/'/g,tym=
/\x00/g,tyg=/[\x00&<>"']/,tyo=function(a,b){return a<b?-1:a>b?1:0};var typ=function(a){this.g=a};typ.prototype.toString=function(){return this.g};var ty=function(a){return ty.f(a)};ty.f=function(a){return a+"_"};ty.k=function(){throw Error("xid.literal must not be used in COMPILED mode.");};ty.object=function(a){if(a&&a.constructor&&a.constructor.toString()===Object.toString()){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[ty.f(c)]=a[c]);return b}throw Error("xid.object must be called with an object literal.");};ty.h=!0;ty.i=function(a){return a};ty.j=function(){return"a_"!=ty("a")};new typ(ty("goog.ui.ActivityMonitor"));new typ(ty("fava.app.AppLifetimeService"));new typ(ty("fava.base.AsyncOperationServices"));new typ(ty("fava.net.BrowserChannelServices"));new typ(ty("fava.canvas.CanvasService"));new typ(ty("fava.canvas.CanvasConfiguration"));new typ(ty("fava.diagnostics.CsiService"));new typ(ty("fava.data.DataServices"));new typ(ty("fava.data.DataStoreUpdaterService"));new typ(ty("fava.locale.DateTimeFormatService"));new typ(ty("fava.debug.DeobfuscationService"));new typ(ty("fava.diagnostics.Diagnostics"));
new typ(ty("fava.component.DomServices"));new typ(ty("fava.app.DragDropService"));new typ(ty("fava.browser.ExportService"));new typ(ty("fava.layout.FixedLayoutHelper"));new typ(ty("fava.gbar.GbarService"));new typ(ty("fava.gloader.GoogleLoaderService"));new typ(ty("fava.controls.help.HelpOverlayService"));new typ(ty("fava.view.HistoryInterface"));new typ(ty("fava.view.HistoryManager"));new typ(ty("fava.view.HistoryRegistry"));new typ(ty("fava.identity.IdentityService"));new typ(ty("fava.browser.IeCutCopyHandle"));
new typ(ty("fava.diagnostics.Impressions"));new typ(ty("fava.browser.KeyboardShortcutHandler"));new typ(ty("fava.browser.KeyboardShortcutRegistry"));new typ(ty("fava.mail.MailServices"));new typ(ty("fava.controls.mole.MoleManager"));new typ(ty("fava.app.NavBarService"));new typ(ty("fava.view.NavigationServices"));new typ(ty("fava.net.NetworkDiagnosticsService"));new typ(ty("fava.app.NotificationService"));new typ(ty("fava.request.OauthService"));new typ(ty("fava.net.OfflineServices"));new typ(ty("fava.modules.PrefetchService"));
new typ(ty("fava.controls.RelativeDateControl"));new typ(ty("fava.request.RequestService"));new typ(ty("fava.base.Scheduler"));new typ(ty("fava.net.ServerErrorService"));new typ(ty("fava.dom.SoyRenderer"));new typ(ty("fava.dom.SoyRendererConfig"));new typ(ty("fava.app.TearoffManager"));new typ(ty("fava.app.TearoffSharedData"));new typ(ty("fava.app.TearoffRegistry"));new typ(ty("fava.app.TitleBar"));new typ(ty("fava.controls.Toast"));new typ(ty("fava.app.UserActionService"));new typ(ty("fava.browser.ViewportServices"));
new typ(ty("fava.diagnostics.ViewDiagnostics"));new typ(ty("fava.view.ViewManagerInterface"));new typ(ty("fava.view.ViewRegistry"));new typ(ty("fava.browser.WindowService"));new typ(ty("fava.browser.WindowOpenerUtil"));new typ(ty("fava.app.WindowWidget"));new typ(ty("fava.request.XsrfService"));new typ("a");var tyq=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},tyr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),tys=function(a,b){for(var c,e,g=1;g<arguments.length;g++){e=arguments[g];for(c in e)a[c]=e[c];for(var d=0;d<tyr.length;d++)c=tyr[d],Object.prototype.hasOwnProperty.call(e,c)&&(a[c]=e[c])}};var tyt;e:{var tyu=tya.navigator;if(tyu){var tyv=tyu.userAgent;if(tyv){tyt=tyv;break e}}tyt=""};var tyw=Array.prototype,tyx=tyw.indexOf?function(a,b,c){return tyw.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(tyd(a))return tyd(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},tyy=tyw.forEach?function(a,b,c){tyw.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,g=tyd(a)?a.split(""):a,d=0;d<e;d++)d in g&&b.call(c,g[d],d,a)},tyz=function(a){var b=a.length;if(0<b){for(var c=Array(b),e=0;e<b;e++)c[e]=a[e];return c}return[]};var tyA=-1!=tyt.indexOf("Opera")||-1!=tyt.indexOf("OPR"),tyB=-1!=tyt.indexOf("Trident")||-1!=tyt.indexOf("MSIE"),tyC=-1!=tyt.indexOf("Gecko")&&-1==tyt.toLowerCase().indexOf("webkit")&&!(-1!=tyt.indexOf("Trident")||-1!=tyt.indexOf("MSIE")),tyD=-1!=tyt.toLowerCase().indexOf("webkit"),tyE=function(){var a=tya.document;return a?a.documentMode:void 0},tyF=function(){var a="",b;if(tyA&&tya.opera)return a=tya.opera.version,"function"==tyb(a)?a():a;tyC?b=/rv\:([^\);]+)(\)|;)/:tyB?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:
tyD&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(tyt))?a[1]:"");return tyB&&(b=tyE(),b>parseFloat(a))?String(b):a}(),tyG={},tyH=function(a){if(!tyG[a]){for(var b=0,c=tyf(String(tyF)).split("."),e=tyf(String(a)).split("."),g=Math.max(c.length,e.length),d=0;0==b&&d<g;d++){var f=c[d]||"",h=e[d]||"",m=RegExp("(\\d*)(\\D*)","g"),n=RegExp("(\\d*)(\\D*)","g");do{var k=m.exec(f)||["","",""],l=n.exec(h)||["","",""];if(0==k[0].length&&0==l[0].length)break;b=tyo(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],
10))||tyo(0==k[2].length,0==l[2].length)||tyo(k[2],l[2])}while(0==b)}tyG[a]=0<=b}},tyI=tya.document,tyJ=tyI&&tyB?tyE()||("CSS1Compat"==tyI.compatMode?parseInt(tyF,10):5):void 0;var tyK=!tyB||tyB&&9<=tyJ;!tyC&&!tyB||tyB&&tyB&&9<=tyJ||tyC&&tyH("1.9.1");tyB&&tyH("9");var tyM=function(a,b){tyq(b,function(b,e){"style"==e?a.style.cssText=b:"class"==e?a.className=b:"for"==e?a.htmlFor=b:e in tyL?a.setAttribute(tyL[e],b):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?a.setAttribute(e,b):a[e]=b})},tyL={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},tyO=function(a,b,c){var e=arguments,
g=document,d=e[0],f=e[1];if(!tyK&&f&&(f.name||f.type)){d=["<",d];f.name&&d.push(' name="',tyn(f.name),'"');if(f.type){d.push(' type="',tyn(f.type),'"');var h={};tys(h,f);delete h.type;f=h}d.push(">");d=d.join("")}d=g.createElement(d);f&&(tyd(f)?d.className=f:"array"==tyb(f)?d.className=f.join(" "):tyM(d,f));2<e.length&&tyN(g,d,e);return d},tyN=function(a,b,c){function e(c){c&&b.appendChild(tyd(c)?a.createTextNode(c):c)}for(var g=2;g<c.length;g++){var d=c[g];if(!tyc(d)||tye(d)&&0<d.nodeType)e(d);else{var f;
e:{if(d&&"number"==typeof d.length){if(tye(d)){f="function"==typeof d.item||"string"==typeof d.item;break e}if("function"==tyb(d)){f="function"==typeof d.item;break e}}f=!1}tyy(f?tyz(d):d,e)}}};var tyR=function(){this.a={d:"a",e:null,b:tyP};this.c={d:"a",e:null,b:tyQ}},tyP=function(a,b){return a+"_"+b+".css"},tyQ=function(a,b){return a+"_"+b+".js"};tyR.prototype.load=function(){if(tyS(this.a)){var a=this.a.b(tyT(),tyU()),a=tyO("LINK",{rel:"stylesheet",type:"text/css",href:a});tya.document.head.appendChild(a)}tyS(this.c)&&(a=this.c.b(tyT(),tyU()),a=tyO("SCRIPT",{src:a}),tya.document.body.appendChild(a))};
var tyV=/(.+)\.html/,tyT=function(){var a=tya.location.pathname.substr(1);return"_generated_background_page.html"==a?"background":a.match(tyV)[1]},tyU=function(){return"ltr"==chrome.i18n.getMessage("@@bidi_dir")?"ltr":"rtl"},tyS=function(a){if("a"==a.d)return!0;if("n"==a.d)return!1;var b=tyT();return 0<=tyx(a.e,b)};-1!=tyx(["miniplayer.html","settings.html"],tya.location.pathname.substr(1))&&("rtl"==("rtl"==chrome.i18n.getMessage("@@bidi_dir")?"rtl":"ltr")?tya.document.documentElement.setAttribute("dir","rtl"):tya.document.documentElement.setAttribute("dir","ltr"));var tyW=new tyR;tyW.a.b=function(a,b){return"ltr"==b?"css_compiled.css":"css_compiled_rtl.css"};tyW.a.d="s";tyW.a.e=["miniplayer","settings"];tyW.c.b=function(){return"main.js"};tyW.c.d="s";tyW.c.e=["miniplayer","settings"];tyW.load();
