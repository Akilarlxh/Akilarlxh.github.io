var autumnBanner=document.querySelector("#autumnBanner");if(autumnBanner){var images=document.querySelectorAll("#autumnBanner > div > img");autumnBanner.addEventListener("mousemove",(e=>{let n=e.clientX/window.outerWidth,t=10*n;for(let[e,r]of images.entries()){t*=1.3;let a=20*Math.pow(e/images.length-n,2);r.style.setProperty("--offset",`${t}px`),r.style.setProperty("--blur",`${a}px`)}}))}var startingPoint,winterBanner=document.querySelector("#winterBanner");winterBanner&&(winterBanner.addEventListener("mouseenter",(e=>{startingPoint=e.clientX,winterBanner.classList.add("moving")})),winterBanner.addEventListener("mouseout",(e=>{winterBanner.classList.remove("moving"),winterBanner.style.setProperty("--percentage",.5)})),winterBanner.addEventListener("mousemove",(e=>{let n=(e.clientX-startingPoint)/window.outerWidth+.5;winterBanner.style.setProperty("--percentage",n)})));