Registry.require("helper",function(){var a=Registry.get("helper"),c=$.Deferred,g={maxerr:1E4,newcap:!1,browser:!0,loopfunc:!0},f={};a.each("CDATA XPathResult xpath uneval escape unescape console JSON TM_info GM_info TM_addStyle TM_deleteValue TM_listValues TM_getValue TM_log TM_registerMenuCommand TM_unregisterMenuCommand TM_openInTab TM_setValue TM_addValueChangeListener TM_removeValueChangeListener TM_xmlhttpRequest TM_getTab TM_setTab TM_saveTab TM_getTabs TM_runNative TM_execUnsafe TM_notification TM_getResourceText TM_getResourceURL GM_addStyle GM_deleteValue GM_listValues GM_getValue GM_download GM_log GM_registerMenuCommand GM_unregisterMenuCommand GM_openInTab GM_setValue GM_addValueChangeListener GM_removeValueChangeListener GM_xmlhttpRequest GM_getTab GM_setTab GM_saveTab GM_getTabs GM_setClipboard GM_notification GM_getResourceText GM_getResourceURL".split(" "),
function(a,b){f[a]=!0});Registry.register("hinter","0",{hint:function(h,b,d){var e=c();Registry.vendor("vendor/jshint",function(){try{b=a.copy(b,a.copy(g,{})),d=a.copy(d,a.copy(f,{})),JSHINT(h,b,d),e.resolve(JSHINT.errors||[])}catch(c){e.reject(c)}});return e.promise()}})});
