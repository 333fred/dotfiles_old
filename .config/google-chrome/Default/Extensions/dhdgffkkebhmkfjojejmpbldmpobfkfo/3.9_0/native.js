Registry.require("prepare",function(){var f=$.Deferred,m=function(){var b=f();b.reject();return b.promise()},n=Registry.prepare(),g=null,e=null,k=function(b){try{var d=new XMLHttpRequest;d.open("GET",b,!1);d.send(null);return d.responseText||null}catch(a){}},l=function(b,d,a,c){void 0===c&&(c="manifest.json");return[g,b,"/",d,"_",a,"/",c].join("")},p=function(b,d){for(var a,c=0;4>c;c++){a=l(b,d,c);try{var e=k(a);if(e&&JSON.parse(e))return c}catch(f){}}console.log("import: unable to load ",g);return-1},
h={setPath:function(b){b?(e=null,g=["file://",b.replace(/^file:\/\//,"").split(n.SELF.ID)[0].replace(/[\\\/]$/,""),"/"].join("")):(e=!1,g=null)},isPathValid:function(){return null!==e?e:e=-1!=p(n.SELF.ID,chrome.extension.getVersion())},getAll:function(){var b=f();try{chrome.management.getAll(function(a){b.resolve(a)})}catch(d){b.reject()}return b.promise()},getAllUserscripts:function(){return h.getAll().then(function(b){var d=[],a;for(a in b)if(b.hasOwnProperty(a)){var c=b[a];""!=c.homepageUrl||0!=
c.hostPermissions.length||0!=c.permissions.length||c.icons||c.updateUrl||!1!=c.isApp||""!=c.optionsUrl||!0!=c.mayDisable||(c.icon="chrome://extension-icon/"+c.id+"/48/1",d.push(c))}return d})},getUserscriptByName:function(b){return h.getAllUserscripts().then(function(d){for(var a=0;a<d.length;a++){var c=d[a];if(c.name==b)return c}return m()})},getUserscriptById:function(b){return h.getAllUserscripts().then(function(d){for(var a=0;a<d.length;a++){var c=d[a];if(c.id==b)return c}return m()})},setEnabled:function(b,
d){var a=f();try{chrome.management.setEnabled(b.id,d,function(){a.resolve()})}catch(c){window.setTimeout(a.reject,1)}return a.promise()},getUserscriptSource:function(b){if(!e)return null;var d=p(b.id,b.version);if(-1==d)return!1;var a=null;try{a=JSON.parse(k(l(b.id,b.version,d)))}catch(c){}if(!a)return!1;if(!a.converted_from_user_script)return console.warn("import: ",a,'is not "converted_from_user_script"!'),!1;if(!(a.content_scripts&&a.content_scripts.length&&a.content_scripts[0].js&&a.content_scripts[0].js.length))return console.warn("import: ",
a,"is a strange manifest!"),!1;b=k(l(b.id,b.version,d,a.content_scripts[0].js[0]));return b?b:(console.warn("import: ",a.content_scripts.js[0],"is empty!?"),!1)},uninstall:function(b,d){var a=f();try{chrome.management.uninstall(b.id,function(){a.resolve()})}catch(c){window.setTimeout(a.reject,1)}return a.promise()}};Registry.register("native","0",function(){return h})});
