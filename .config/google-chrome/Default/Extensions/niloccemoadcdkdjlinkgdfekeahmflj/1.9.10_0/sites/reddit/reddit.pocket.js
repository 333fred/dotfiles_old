!function(){if(!isSafari()||window.top==window){var a={en:{success_saved_text:"saved to pocket"},de:{success_saved_text:"in pocket gespeichert"},es:{success_saved_text:"guardado en pocket"},es_419:{success_saved_text:"guardado en pocket"},fr:{success_saved_text:"sauvegardé dans Pocket"},it:{success_saved_text:"salvato in Pocket"},ja:{success_saved_text:"pocket に保存済み"},ru:{success_saved_text:"сохранены в pocket"},ko:{success_saved_text:"이(가) Pocket에 저장됨"},nl:{success_saved_text:"opgeslagen naar pocket"},pl:{success_saved_text:"zapisano w aplikacji pocket"},pt_BR:{success_saved_text:"Salvo no Pocket"},pt_PT:{success_saved_text:"guardado no Pocket"},zh_CN:{success_saved_text:"已保存到 Pocket"},zh_TW:{success_saved_text:"已儲存到 Pocket"}},b="http://www.reddit.com/";$("head").append("<style>.pkt_added {text-decoration:none !important;}</style>");var c={};c.buttons=[{text:"pocket",successText:a[getCurrentLanguageCode()].success_saved_text,container:"div.entry ul.flat-list",className:"pocket-reddit-button",selector:".pocket-reddit-button",data:function(a){var c=$(a).closest(".entry").find("a.title");(void 0===c||0===c.length)&&(c=$(a).closest(".entry").find(".first a"));var d=$(c).text().trim(),e=$(c).attr("href").trim();return e=f(e,b),{title:d,url:e}}}];var d=function(a){var b=document.createElement("a");b.setAttribute("class",a.className),b.setAttribute("href","#"),$(b).text(a.text);var c=document.createElement("li");return c.appendChild(b),c},e=function(){var a,b=c.buttons.length;for(a=0;b>a;a++){var f=c.buttons[a];$(f.container).each(function(){var a=$(this);if(!$(a).hasClass("pocket-inserted")){var b=$(a).parent().children(".morecomments");if(0!==b.length){var c=b.children("a");return void c.click(function(){setTimeout(function(){e()},1e3)})}$(a).addClass("pocket-inserted");var g=d(f);$(a).append(g);var h=f.data;$(g).on("click",function(a){var b=h(g),c={identifier:"reddit",action:"addURL",url:b.url,title:b.title,actionInfo:{cxt_ui:"btn_reddit",cxt_url:window.location.href}};sendMessage(c,function(a){"success"===a.status&&($(g).replaceWith($('<li><a class="'+f.className+' pkt_added">'+f.successText+"</a></li>")),document.body.style.cursor="default")}),a.preventDefault()})}})}},f=function(a,b){if(/^https?:/.test(a))return a;var c,d=document,e=d.getElementsByTagName("base")[0],f=e&&e.href,g=d.head||d.getElementsByTagName("head")[0],h=e||g.appendChild(d.createElement("base")),i=d.createElement("a");return h.href=b,i.href=a,c=i.href,e?e.href=f:g.removeChild(h),c};addMessageListener(function(a){"settingChanged"===a.action&&"reddit"===a.key&&("true"===a.value||a.value===!0)&&e()}),sendMessage({action:"getSetting",key:"reddit"},function(a){("true"===a.value||a.value===!0)&&e()})}}();