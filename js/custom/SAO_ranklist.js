function showRanklist(){if(/Android|webOS|BlackBerry/i.test(navigator.userAgent))return!0;var e=document.getElementById("SAO-ranklist");hpFill(),e&&e.classList.add("active-SAO-ranklist")}function hideRanklist(){var e=document.getElementById("SAO-ranklist");e&&e.className.indexOf("active")>-1&&e.classList.remove("active-SAO-ranklist")}function hpFill(){for(var e=document.getElementById("SAO-ranklist").querySelectorAll(".HP-fill"),t=0;t<e.length;t++){var l=Number(e[t].style.width.replace("%",""));l<30?e[t].querySelector(".HP-fill-in").classList.add("HP-danger"):l>=30&&l<60?e[t].querySelector(".HP-fill-in").classList.add("HP-warning"):e[t].querySelector(".HP-fill-in").classList.add("HP-health")}}