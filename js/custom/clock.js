"use strict";var mykey={weather:"7a62a15c4bf9338650c8249c0b67771c"},locationurl="https://extreme-ip-lookup.com/json/",cityname="",weatherurl="",userip="",week=["SUN","MON","TUE","WED","THU","FRI","SAT"];function getweatherdata(){$(function(){$.ajax({type:"GET",url:weatherurl,dataType:"json",beforeSend:function(){},success:function(e){clock.weatherimg="/img/weather/"+e.weather[0].icon+".png",clock.temperature=e.main.temp+"*C",clock.humidity=e.main.humidity+"%",clock.ip=userip,clock.humidityimg="/img/weather/hu.png",clock.city=e.name;setInterval(t,1e3);function t(){var e=new Date;clock.time=a(e.getHours(),2)+":"+a(e.getMinutes(),2)+":"+a(e.getSeconds(),2),clock.date=a(e.getFullYear(),4)+"-"+a(e.getMonth()+1,2)+"-"+a(e.getDate(),2)+" "+week[e.getDay()];var t=12<e.getHours()?" PM":" AM";clock.daylight=t}function a(e,t){for(var a="",c=0;c<t;c++)a+="0";return(a+e).slice(-t)}t(),clock.clockshow=!0,t()}})})}$(function(){$.ajax({type:"GET",url:locationurl,dataType:"json",beforeSend:function(){},success:function(e){cityname=e.city,void 0===e.city&&(cityname=e.region),void 0===e.region&&(cityname=e.country),userip=e.query,weatherurl="https://api.openweathermap.org/data/2.5/weather/?q="+cityname+"&units=metric&appid="+mykey.weather,getweatherdata()}})});var clock=new Vue({el:"#clock",data:{ip:"",time:"",weatherimg:"",temperature:"",humidityimg:"",humidity:"",usaqi:"",city:"",date:"",daylight:"",clockshow:"false"}});