var titleTime,OriginTitile=document.title;function ReDirect(){var i=window.location.pathname.split("/")[2].split(".");"html"===i[1]?window.location.href="/posts/"+i[0]+"/":window.alert("非常抱歉，文章可能已经被删除了...")}document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="w(ﾟДﾟ)w 不要走！再看看嘛！",clearTimeout(titleTime)):(document.title="♪(^∇^*)欢迎回来！"+OriginTitile,titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))}));