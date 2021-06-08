//动态标题

var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
        clearTimeout(titleTime);
    }
    else {
        document.title = '♪(^∇^*)欢迎回来！' + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

//404重定向
// 对于原本的.html死链的重定向设置。给404页面添加按钮
function ReDirect() {
  var pram_arr = window.location.pathname.split("/");
  var abbr_arr =pram_arr[2].split(".");
  if(abbr_arr[1] === "html"){
    window.location.href="/posts/"+abbr_arr[0]+"/";
  }
  else{
    window.alert("非常抱歉，文章可能已经被删除了...");
  }
}
