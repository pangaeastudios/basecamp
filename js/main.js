$(document).ready(function(){
  var el1 = document.querySelector(".landing-page");

  el1.addEventListener("mousemove", (e) => {
    el1.style.backgroundPositionX = -e.offsetX/15 + "px";
    el1.style.backgroundPositionY = -e.offsetY/15 + "px";
  });
});

var disableE = true;

$("#s-letter").on("mouseover", 
function(){
  console.log('e');
  disableE = false;
});

$(function() {
  if(!disableE)
  {
    var canvas = document.createElement("canvas");
    canvas.width = 24;
    canvas.height = 24;
    //document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.font = "15px FontAwesome";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText("\uf002", -10, 0);
    var dataURL = canvas.toDataURL('image/png')
    $('body').css('cursor', 'url("img/cursor.png"), auto');
  }
});

