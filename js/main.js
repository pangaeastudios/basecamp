$(document).ready(function(){
  var el1 = document.querySelector(".landing-page");

  el1.addEventListener("mousemove", (e) => {
    el1.style.backgroundPositionX = -e.offsetX/15 + "px";
    el1.style.backgroundPositionY = -e.offsetY/15 + "px";
  });
});