(function(){Registry.require(["prepare","pingpong","helper"],function(){var g=Registry.get("pingpong"),h=Registry.get("helper"),b=null,e=[],c=null;Registry.register("layout","0",{init:function(d,f){var b=function(){if(e.length){var a=e.pop();console.log("Try to load layout",a);Registry.loadFile(["layout",a,d].join("/"));c=window.setTimeout(function(){c=null;b()},1E3)}else console.warn("Layout: Unable to load file",d)};g.ping(function(a){e=["default",h.getUrlArgs().layout||(a&&a.config?
a.config.layout:null)||"default"];b();f.suc&&f.suc()},f.fail)},render:function(d){c&&(window.clearTimeout(c),c=null);d(b);b=null}})})})();
