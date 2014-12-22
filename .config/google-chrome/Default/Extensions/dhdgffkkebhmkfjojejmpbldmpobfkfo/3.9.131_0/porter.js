Registry.require(["helper","convert"],function(){var r=Registry.get("helper"),k=Registry.get("convert"),f=$.Deferred,q=function(b){var c=f();c.resolve(b);return c.promise()},h=function(){var b=f();Registry.vendor(["saveas/filesaver"],function(){h=q;b.resolve()});return b.promise()},p=function(){var b=f();Registry.vendor(["zip_js/zip","zip_js/inflate","zip_js/deflate"],function(){p=q;zip.workerScriptsPath="/zip_js/";b.resolve()});return b.promise()},l=function(){var b,c=!1,d,e=function(){var a=f();
return d=a};return{write:function(){var a=f();c=!1;zip.createWriter(new zip.BlobWriter,function(c){b=c;a.resolve(c)},a.reject);return a.promise()},open:function(a){var s=e();c=!0;zip.createReader(new zip.BlobReader(a),function(a){b=a;s.resolve(a)},function(a){d&&d.reject(a)});return s.promise()},entries:function(){var a=e();b.getEntries(function(c){a.resolve(c)});return a.promise()},get:function(a){var c=e(),b=new zip.TextWriter;a.getData(b,c.resolve);return c.promise()},put:function(a,c,d){var m=
e();try{b.add(a,new zip.TextReader(c),m.resolve,function(){},{lastModDate:d?new Date(d):void 0})}catch(f){m.reject(f)}return m.promise()},end:function(){var a=e();c?(b.close(),a.resolve()):b.close(a.resolve);return a.promise()}}}(),n={zip:{create:function(b,c){var d=f(),e=0;p().then(function(){return l.write()}).then(function(a){var c=f(),g={},m=function(a,c){var b=[a,c].join(".");if(g[b]){var d;do d=a+" ("+g[b]+")",b=[d,c].join("."),g[b]++;while(g[b]);return m(d,c)}g[b]=1;return b},h=b.length,t=
function(){if(!b.length)return c.resolve();var a=b.shift(),f=m(a.meta.name,"user.js"),g=m(a.meta.name,"options.json"),k=m(a.meta.name,"storage.json"),p=JSON.stringify({options:a.options,settings:a.settings,meta:a.meta}),n=a.storage?JSON.stringify(a.storage):null;e+=a.source.length;console.log("porter: add to zip",f,e);d.notify({item:h-b.length,of:h});l.put(f,a.source,a.meta.modified).then(function(){e+=p.length;console.log("porter: add to zip",g,e);return l.put(g,p)}).then(function(){if(!n)return q();
e+=n.length;console.log("porter: add to zip",k,e);return l.put(k,n)}).fail(function(a){console.log("porter: add to zip failed",a)}).always(function(){console.log("porter: add to zip -> next round");window.setTimeout(t,5)})};t();return c.promise()}).then(function(){console.log("porter: add global props");return c?l.put("Tampermonkey.global.json",JSON.stringify(c)):q()}).then(function(){return l.end()}).done(function(a){d.resolve(a)}).fail(function(){d.reject()});return d.promise()},read:function(b){var c=
f();p().then(function(){return l.open(b)}).then(function(c){return l.entries()}).then(function(b){var e=f(),a={},h=b.length,g=function(){if(b.length){var f=b.shift();console.log("porter: read from zip",f.filename);l.get(f).done(function(c){var b=f.filename.match(/(.*)\.(storage\.json|options\.json|global\.json|user\.js)$/);if(b&&!(3>b.length))try{var e=b[1],d=b[2];a[e]=a[e]||{};"global.json"!=d&&("user.js"==d?a[e].source=c:"options.json"==d?a[e].options=JSON.parse(c):"storage.json"==d&&(a[e].storage=
JSON.parse(c)))}catch(g){console.warn("porter: read from zip failed",g)}}).always(function(){c.notify({item:h-b.length,of:h});window.setTimeout(g,5)})}else{var k=[];r.each(a,function(a,c){var b=a.options||{};b.source=a.source;b.storage=a.storage;k.push(b)});e.resolve(k)}};g();return e.promise()}).done(function(b){c.resolve(b)}).fail(function(){c.reject()});return c.promise()},download:function(b){var c=f();h().then(function(){return n.zip.create(b).progress(function(b){c.notify(b)})}).done(function(b){saveAs(b,
"tmScripts.zip");c.resolve.apply(this,arguments)}).fail(function(){c.reject.apply(this,arguments)});return c.promise()}},plain:{download:function(b,c){return h().done(function(){var d=new Blob([c],{type:"text/plain"});saveAs(d,b+".user.js")})}},json:{create:function(b,c){var d=f();h().done(function(){var c={created_by:"Tampermonkey",version:"1",scripts:[]};b.forEach(function(a){a={name:a.meta.name,options:a.options,storage:a.storage,enabled:a.settings.enabled,position:a.settings.position,file_url:a.meta.file_url,
uuid:a.meta.uuid,source:k.Base64.encode(k.UTF8.encode(a.source))};c.scripts.push(a)});d.resolve(JSON.stringify(c))});return d.promise()},read:function(b){var c=f();h().done(function(){var d=function(b){if(b.trim()){var a=null;try{return a=JSON.parse(b),a.scripts=r.map(a.scripts,function(a){a.source=k.UTF8.decode(k.Base64.decode(a.source));return a}),c.resolve(a)}catch(f){if(-1!=b.search("<body>")){var a=b.indexOf("<body>"),g=b.lastIndexOf("</body>");if(-1!=a&&-1!=g)return b=b.substr(a+6,g-(a+6)),
d(b)}}}c.reject()};d(b)});return c.promise()},download:function(b){return h().then(function(){return n.json.create(b)}).done(function(b){b=new Blob([b],{type:"text/plain"});saveAs(b,"tmScripts.txt")})}}};Registry.register("porter","131",n)});
