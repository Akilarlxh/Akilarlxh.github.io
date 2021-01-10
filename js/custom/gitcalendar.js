var calendar=new Vue({el:"#calendar",data:{simplemode:!0,user:"Akilarlxh",fixed:"fixed",px:"px",x:"",y:"",span1:"",span2:"",month:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthchange:[],oneyearbeforeday:"",thisday:"",amonthago:"",aweekago:"",weekdatacore:0,datacore:0,total:0,datadate:"",data:[],positionplusdata:[],firstweek:[],lastweek:[],beforeweek:[],thisweekdatacore:0,mounthbeforeday:0,mounthfirstindex:0,crispedges:"crispedges",thisdayindex:0,amonthagoindex:0,amonthagoweek:[],firstdate:[],first2date:[],montharrbefore:[],monthindex:0,purple:["#ebedf0","#fdcdec","#fc9bd9","#fa6ac5","#f838b2","#f5089f","#c4067e","#92055e","#540336","#48022f","#30021f"],green:["#ebedf0","#f0fff4","#dcffe4","#bef5cb","#85e89d","#34d058","#28a745","#22863a","#176f2c","#165c26","#144620"],blue:["#ebedf0","#f1f8ff","#dbedff","#c8e1ff","#79b8ff","#2188ff","#0366d6","#005cc5","#044289","#032f62","#05264c"],color:["#e4dfd7","#f9f4dc","#f7e8aa","#f7e8aa","#f8df72","#fcd217","#fcc515","#f28e16","#fb8b05","#d85916","#f43e06"]},methods:{selectStyle(e,a){$(".angle-wrapper").show(),this.span1=e.date,this.span2=e.count,this.x=a.clientX-100,this.y=a.clientY-60},outStyle(){$(".angle-wrapper").hide()},thiscolor(e){if(0===e){parseInt(e/2);return this.color[0]}if(e<2)return this.color[1];if(e<20){let a=parseInt(e/2);return this.color[a]}return this.color[9]}}}),githubapiurl="https://githubapi.ryanchristian.dev/user/"+calendar.user;$((function(){$.ajax({type:"GET",url:githubapiurl,dataType:"json",success:function(e){function a(){let e=document.getElementById("gitcanvas"),a=document.getElementById("gitmessage"),t=e.getContext("2d");e.width=document.getElementById("calendarcanvasbox").offsetWidth;let n=.96*e.width/calendar.data.length;e.height=9*n;let d=.8*n,r={x:.02*e.width,y:.025*e.width};for(let a in calendar.data){weekdata=calendar.data[a];for(let e in weekdata){let a={date:"",count:"",x:0,y:0};calendar.positionplusdata.push(a),t.fillStyle=calendar.thiscolor(weekdata[e].count),r.y=Math.round(100*r.y)/100,a.date=weekdata[e].date,a.count=weekdata[e].count,a.x=r.x,a.y=r.y,t.fillRect(r.x,r.y,d,d),r.y=r.y+n}r.y=.025*e.width,r.x=r.x+n}t.font="600  Arial",t.fillStyle="#aaa",t.fillText("日",0,1.9*n),t.fillText("二",0,3.9*n),t.fillText("四",0,5.9*n),t.fillText("六",0,7.9*n);let l=e.width/24;for(let a in calendar.monthchange)t.fillText(calendar.monthchange[a],l,.7*n),l+=e.width/12;a.onmousemove=function(e){$(".angle-wrapper").hide()},e.onmousemove=function(a){$(".angle-wrapper").hide(),function(e,a){var t=e.getBoundingClientRect(),n=a.clientX-t.left*(e.width/t.width),r=a.clientY-t.top*(e.height/t.height);for(let e of calendar.positionplusdata){let t=n-e.x,l=r-e.y;0<t&&t<d&&0<l&&l<d&&($(".angle-wrapper").show(),calendar.span1=e.date,calendar.span2=e.count,calendar.x=a.clientX-100,calendar.y=a.clientY-60)}}(e,a)}}function t(e){for(let a of calendar.data[e])calendar.thisweekdatacore+=a.count}function n(){for(let e of calendar.lastweek)calendar.weekdatacore+=e.count}calendar.data=e.contributions,calendar.total=e.total,calendar.first2date=calendar.data[48],calendar.firstdate=calendar.data[47],calendar.firstweek=e.contributions[0],calendar.lastweek=e.contributions[52],calendar.beforeweek=e.contributions[51],calendar.thisdayindex=calendar.lastweek.length-1,calendar.thisday=calendar.lastweek[calendar.thisdayindex].date,calendar.oneyearbeforeday=calendar.firstweek[0].date,calendar.monthindex=1*calendar.thisday.substring(5,7),calendar.montharrbefore=calendar.month.splice(calendar.monthindex,12-calendar.monthindex),calendar.monthchange=calendar.montharrbefore.concat(calendar.month),6===calendar.thisdayindex?(calendar.aweekago=calendar.lastweek[0].date,n()):(lastweek=e.contributions[51],calendar.aweekago=lastweek[calendar.thisdayindex+1].date,n(),function(){for(let e=calendar.thisdayindex;e<calendar.beforeweek.length;e++)calendar.weekdatacore+=calendar.beforeweek[e].count}()),0===calendar.thisdayindex?(t(52),t(51),t(50),t(49),t(48),calendar.thisweekdatacore+=calendar.firstdate[6].count,calendar.amonthago=calendar.firstdate[6].date):(t(52),t(51),t(50),t(49),function(){for(let e=calendar.thisdayindex-1;e<calendar.first2date.length;e++)calendar.thisweekdatacore+=calendar.first2date[e].count}(),calendar.amonthago=calendar.first2date[calendar.thisdayindex-1].date),a(),$(window).on("resize",a),window.onscroll=function(){$(".angle-wrapper").hide()},console.log(calendar.positionplusdata)}})})),document.getElementById("calendarcanvasbox").offsetWidth<500&&(calendar.simplemode=!1);