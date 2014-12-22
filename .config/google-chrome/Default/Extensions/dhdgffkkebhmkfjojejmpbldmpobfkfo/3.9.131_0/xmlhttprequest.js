Registry.require(["helper","convert"],function(){var r=Registry.get("helper"),s=Registry.get("convert"),n={},v=function(b){var d=r.isLocalImage(b);return b&&4<b.length&&"http"==b.substr(0,4)||d},w={"user-agent":!0,referer:!0,origin:!0,host:!0,"proxy-connection":!0,"accept-encoding":!0,"accept-charset":!0},q=function(b,d,h){void 0===d&&(d={});void 0===h&&(h={});if(void 0!=window.chrome&&void 0!=window.chrome.xmlHttpRequest)window.chrome.xmlHttpRequest(b,d,h);else{var p=function(a,b){if(d[a])d[a]("function"==
typeof b?b():b)},e=function(a,b){d[a]&&(p(a,b),d[a]=null)},l=!(d.onload||d.onreadychange||d.onprogress||d.onerror||d.ondone||d.ontimeout),c=new XMLHttpRequest,k=function(){var a="",d=b.url;if(2<c.readyState&&(a=c.getAllResponseHeaders(),4==c.readyState)){a&&(a=a.replace(/TM-finalURL\: .*[\r\n]{1,2}/,""));var t=c.getResponseHeader("TM-finalURL");t&&(d=t)}a={readyState:c.readyState,responseHeaders:a,finalUrl:d,status:4==c.readyState?c.status:0,statusText:4==c.readyState?c.statusText:""};4==c.readyState?
(c.responseType?(a.responseXML=null,a.responseText=null,a.responseType=c.responseType):(a.responseXML=c.responseXML?escape(c.responseXML):null,a.responseText=c.responseText),a.response=c.response):(a.responseXML=null,a.responseText="",a.response=null);return a},m=function(a){a=k();4==a.readyState&&200!=a.status&&0!=a.status&&0<b.retries?(b.retries--,q(b,d,h)):function(){if(b.convertBinary&&a.response){var c=a.responseType?a.responseType.toLowerCase():"";if("blob"==c){var d,g=new FileReader;g.onload=
function(b){a.response2=s.arrbuf2str(g.result);a.response=null;d()};g.readAsArrayBuffer(a.response);return{done:function(a){d=a}}}"arraybuffer"==c?(a.response2=s.arrbuf2str(a.response),a.response=null):"json"==c&&(a.response2=JSON.stringify(a.response),a.response=null)}return{done:function(a){a()}}}().done(function(){e("onload",a);4==a.readyState&&e("ondone",a)})},x=function(){var a=k();4==a.readyState&&200!=a.status&&0!=a.status&&0<b.retries?(b.retries--,q(b,d,h)):(e("onerror",a),e("ondone",a))},
u=function(a,b,d){void 0===d&&(d={});try{var g=null,e=null;if(a.lengthComputable||0<a.total)g=a.loaded,e=a.total;else{var f=Number(r.getStringBetweenTags(b.responseHeaders.toLowerCase(),"content-length:","\n").trim()),h=c.responseText?c.responseText.length:0;0==f&&(f=-1);g=a.loaded||h;e=a.total||f}d.lengthComputable=a.lengthComputable;d.loaded=g;d.done=g;d.position=g;d.total=e;d.totalSize=e}catch(k){}return d},y=function(a){p("onreadychange",function(){var b=k();b.progress=u(a,b);return b})},z=function(a){p("onprogress",
function(){var b=k();return u(a,b,b)})},A=function(a){a=k();e("ontimeout");e("ondone",a)};l||(c.onload=m,c.onerror=x,c.ontimeout=A,c.onprogress=z,c.onreadystatechange=y);try{if(!h.internal&&!v(b.url))throw Error("Invalid scheme of url: "+b.url);c.open(b.method,b.url,!l,b.user,b.password);if(b.headers)for(var f in b.headers)m=f,n.use&&w[f.toLowerCase()]&&(m=n.prefix+f),c.setRequestHeader(m,b.headers[f]);"undefined"!==typeof b.overrideMimeType&&c.overrideMimeType(b.overrideMimeType);"undefined"!==typeof b.responseType&&
(c.responseType=b.responseType);"undefined"!==typeof b.timeout&&(c.timeout=b.timeout);"undefined"!==typeof b.data?c.send(b.data):c.send()}catch(B){if(console.error(B.stack),f={responseXML:"",responseText:"",response:null,readyState:4,responseHeaders:"",status:403,statusText:"Forbidden"},e("onerror",f),e("ondone",f),l)return f}if(l)return k()}};Registry.register("xmlhttprequest","131",{run:q,setWebRequest:function(b){n=b}})});
