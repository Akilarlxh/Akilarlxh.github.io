"use strict";navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js?v=20201028080825").then(function(){navigator.serviceWorker.addEventListener("message",function(e){var s,t;"sw.update"===e.data&&(s=document.querySelector("meta[name=theme-color]"),t=document.createElement("div"),s&&(s.content="#000"),t.innerHTML='<div><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Colsrch/CDN/hexo-offline-popup.css"><div class="c-message animated animated-lento slideInRight"><i class=" c-message--icon c-message--success"></i><div class="el-notification__group"><h2 class="c-message__title">操作通知</h2><div class="el-notification__content">已更新最新版本（刷新生效）</div><div class="c-message--close" onclick="location.reload()">×</div></div></div></div>',document.body.appendChild(t),setTimeout(function(){document.getElementById("app-refresh").className+=" app-refresh-show"},16))})});