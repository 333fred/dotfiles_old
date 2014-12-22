Registry.require(["prepare","icon","helper"],function(){var t=Registry.get("icon"),u=Registry.get("helper"),r=$.Deferred,h=!1,s=function(){var b={},e=null,c=0;return{init:function(){var d=function(a){e=a||"unknown";h&&console.log("notify: chronos level",a)},c;try{c=chrome.notifications&&chrome.notifications.getPermissionLevel&&chrome.notifications.onPermissionLevelChanged&&chrome.notifications.onClicked}catch(m){}c?(chrome.notifications.getPermissionLevel(d),chrome.notifications.onPermissionLevelChanged.addListener(d),
chrome.notifications.onClicked.addListener(function(a){h&&console.log("notify: chronos click",a);b[a]&&(b[a].cb.click&&b[a].cb.click(),b[a].cancel(),delete b[a])}),chrome.notifications.onClosed.addListener(function(a){h&&console.log("notify: chronos close",a);b[a]&&b[a].cb.close&&b[a].cb.close();delete b[a]})):d("unsupported")},create:function(d,g,m){var a=r(),n=10,p=function(){if(e)if("granted"==e){var f={nid:null,cb:{},on:function(a,b){f.cb[a]=b},cancel:function(){},show:function(){var e={type:"basic",
title:g||"",message:m||""};e.iconUrl=0==c?d:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";var k=u.createUUID();chrome.notifications.create(k,e,function(){chrome.runtime&&chrome.runtime.lastError?1>c?(h&&console.log("notify: chronos creating failed, retry...",chrome.runtime.lastError),c++,f.show()):(h&&console.log("notify: chronos creating finally failed",chrome.runtime.lastError),a.reject()):(h&&console.log("notify: chronos created",k),f.cancel=function(){b[k]&&
chrome.notifications.clear(k,function(){})},b[k]=f)})}};a.resolve(f)}else a.resolve();else{var l=function(){e?p():n--?window.setTimeout(l,200):a.resolve()};l()}};p();return a.promise()}}}(),q={notify:function(b,e,c,d,g){var m=!1;g||(m=!0,g=function(){});var a=null,n=!1,p=!1,f=null,l,q=function(){f&&window.clearTimeout(f);n||g({});p=!0},k=function(){n=!0;var b={clicked:n};g&&g(b);a&&a.cancel()};c=c||chrome.extension.getURL("images/icon128.png");t.getDataUriFromUrl(c).then(function(a){l=a;a=r();a.resolve(void 0);
return a.promise()}).then(function(){return s.create(l,b,e)}).then(function(a){var c=r();if(!a)try{var d=null.createNotification(l,b||"",e||"");a={on:function(a,b){d["on"+a]=b},cancel:function(){p||d.cancel()},show:function(){d.show()}}}catch(f){console.warn("notify: Notification creation failed with: "+f.message),a={cb:{},on:function(b,c){a.cb[b]=c},cancel:function(){},show:function(){m||window.setTimeout(function(){confirm((b?b+"\n\n":"")+e)?a.cb.click&&a.cb.click():a.cb.close&&a.cb.close()},1)}}}c.resolve(a);
return c.promise()}).then(function(g){a=g;a.on("close",q);a.on("click",k);f=window.setTimeout(function(){f=null;a.cancel()},d?d:6E5);h&&console.debug("notify:",b,e,c,d);a.show()});return{cancel:function(){a&&a.cancel()}}},showUpdate:function(b,e,c,d){return q.notify(b,e,c,3E5,d)},show:function(b,e,c,d,g){return q.notify(b,e,c,d,g)},debug:function(b){h=b}};Registry.register("notify","131",function(){s.init();return q})});
