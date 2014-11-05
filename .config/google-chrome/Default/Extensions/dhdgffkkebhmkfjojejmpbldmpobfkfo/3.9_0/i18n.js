(function(){Registry.require(["helper"],function(){var l={},e=null,f=[],h=Registry.get("helper"),k=function(b){var a=b,c=Array.prototype.slice.call(arguments,1);1==c.length&&"Array"===h.toType(c[0])&&(c=c[0]);for(var d=/_0[a-zA-Z]+0/,g=0;g<c.length;g++){if(-1==a.search(d)){console.log("getMessage(): wrong argument count!!!");break}a=a.replace(d," "+c[g])}return a.replace(/_/g," ")},m=function(b){var a=[arguments[0]],c=[],d=function(b){for(var a=0;a<b.length;a++)"Array"===h.toType(b[a])?d(b[a]):c.push(String(b[a]))};
d(Array.prototype.slice.call(arguments,1));c.length&&a.push(c);return(a=chrome.i18n.getMessage.apply(this,a))?a:Registry.isDevVersion("helper")?(console.warn("i18n:#"+k.apply(this,arguments).replace(/ /g,"#")+"#"),"#"+k.apply(this,arguments).replace(/ /g,"#")+"#"):k.apply(this,arguments)},p=function(b){if(e){var a=l[b];if(a){var c=Array.prototype.slice.call(arguments,1),d=a.message;1==c.length&&"Array"===h.toType(c[0])&&(c=c[0]);for(var g in a.placeholders)try{var f=Number(a.placeholders[g].content.replace(/^\$/,
""))-1,n;f<c.length?(n=c[f],d=d.replace("$"+g+"$",n)):console.log("i18n: invalid argument count on processing '"+d+"' with args "+JSON.stringify(c))}catch(p){console.log("i18n: error processing '"+d+"' with args "+JSON.stringify(c))}return d}return k.apply(this,arguments)}return m.apply(this,arguments)};(function(){try{chrome.i18n.getUILanguage&&f.unshift(chrome.i18n.getUILanguage())}catch(b){}try{chrome.i18n.getAcceptLanguages&&chrome.i18n.getAcceptLanguages(function(a){a.forEach(function(a){f.push(a)})})}catch(a){}})();
Registry.register("i18n","0",{getMessage:function(b){return p.apply(this,arguments)},getOriginalMessage:m,parseLocale:function(b){return b?h.map(b.replace(/-/g,"_").split("_"),function(a,b){return b?a.toUpperCase():a.toLowerCase()}).join("_"):b},getTranslation:function(b,a){var c=null;if(b){var d=e?[e].concat(f):f;h.each(d,function(d,f){var e=a+"_i18n";if(void 0!==b[e])return c=b[e][d],!1})}return c||b[a]},setLocale:function(b){"null"===b&&(b=null);if(e==b)return!0;if(b){var a=Registry.getRaw("_locales/"+
b+"/messages.json");if(a)try{return l=JSON.parse(a),e=b,!0}catch(c){console.log("i18n: parsing locale "+b+" failed!")}else console.log("i18n: retrieving locale "+b+" failed!");return!1}l={};e=null;return!0}})})})();
