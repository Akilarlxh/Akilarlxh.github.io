// 显示排行榜
function showRanklist() {
  if (/Android|webOS|BlackBerry/i.test(navigator.userAgent)) return true; //媒体选择
  var hasRanklist = document.getElementById('SAO-ranklist');
  hpFill();
  if (hasRanklist) {
    hasRanklist.classList.add("active-SAO-ranklist");
  }
}
//隐藏排行榜
function hideRanklist() {
  var hasRanklist = document.getElementById('SAO-ranklist');
  if (hasRanklist && (hasRanklist.className.indexOf('active') > -1)) {
    hasRanklist.classList.remove("active-SAO-ranklist");
  }
}
//根据血量调整血条颜色
function hpFill(){
  var rankItem = document.getElementById('SAO-ranklist').querySelectorAll('.HP-fill');
  for (var i=0; i < rankItem.length; i++){
    var itemWidth = Number(rankItem[i].style.width.replace("%",""));
    // console.log(itemWidth);
    if (itemWidth < 30){
      rankItem[i].querySelector('.HP-fill-in').classList.add('HP-danger');
    }
    else if ((itemWidth >= 30) && (itemWidth < 60)){
      rankItem[i].querySelector('.HP-fill-in').classList.add('HP-warning');
    }
    else{
      rankItem[i].querySelector('.HP-fill-in').classList.add('HP-health');
    }
  }
}
