/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 2011-08-02
 * 
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See LICENSE.md
 */
var saveAs=saveAs||function(b){var k=b.document,x=b.URL||b.webkitURL||b,n=k.createElementNS("http://www.w3.org/1999/xhtml","a"),y="download"in n,z=function(e){var a=k.createEvent("MouseEvents");a.initMouseEvent("click",!0,!1,b,0,0,0,0,0,!1,!1,!1,!1,0,null);return e.dispatchEvent(a)},p=b.webkitRequestFileSystem,t=b.requestFileSystem||p||b.mozRequestFileSystem,A=function(e){(b.setImmediate||b.setTimeout)(function(){throw e;},0)},q=0,l=[],r=function(e,a,d){a=[].concat(a);for(var b=a.length;b--;){var c=
e["on"+a[b]];if("function"===typeof c)try{c.call(e,d||e)}catch(f){A(f)}}},m=function(e,a){var d=this,c=e.type,k=!1,f,s,m=function(){var a=(b.URL||b.webkitURL||b).createObjectURL(e);l.push(a);return a},u=function(){r(d,["writestart","progress","write","writeend"])},g=function(){if(k||!f)f=m(e);s.location.href=f;d.readyState=d.DONE;u()},h=function(a){return function(){if(d.readyState!==d.DONE)return a.apply(this,arguments)}},v={create:!0,exclusive:!1},w;d.readyState=d.INIT;a||(a="download");if(y&&(f=
m(e),n.href=f,n.download=a,z(n))){d.readyState=d.DONE;u();return}b.chrome&&c&&"application/octet-stream"!==c&&(w=e.slice||e.webkitSlice,e=w.call(e,0,e.size,"application/octet-stream"),k=!0);p&&"download"!==a&&(a+=".download");s="application/octet-stream"===c||p?b:b.open();t?(q+=e.size,t(b.TEMPORARY,q,h(function(b){b.root.getDirectory("saved",v,h(function(b){var c=function(){b.getFile(a,v,h(function(a){a.createWriter(h(function(b){b.onwriteend=function(b){s.location.href=a.toURL();l.push(a);d.readyState=
d.DONE;r(d,"writeend",b)};b.onerror=function(){var a=b.error;a.code!==a.ABORT_ERR&&g()};["writestart","progress","write","abort"].forEach(function(a){b["on"+a]=d["on"+a]});b.write(e);d.abort=function(){b.abort();d.readyState=d.DONE};d.readyState=d.WRITING}),g)}),g)};b.getFile(a,{create:!1},h(function(a){a.remove();c()}),h(function(a){a.code===a.NOT_FOUND_ERR?c():g()}))}),g)}),g)):g()},c=m.prototype;c.abort=function(){this.readyState=this.DONE;r(this,"abort")};c.readyState=c.INIT=0;c.WRITING=1;c.DONE=
2;c.error=c.onwritestart=c.onprogress=c.onwrite=c.onabort=c.onerror=c.onwriteend=null;b.addEventListener("unload",function(){for(var b=l.length;b--;){var a=l[b];"string"===typeof a?x.revokeObjectURL(a):a.remove()}l.length=0},!1);return function(b,a){return new m(b,a)}}(self);
