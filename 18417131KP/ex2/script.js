function moveUp() {
  var element = document.getElementById('circle');
  currentUp = parseInt(circle.offsetTop);
  element.style.top = currentUp - 1 + 'px';
}
function moveDown() {
  var element = document.getElementById('circle');
  currentUp = parseInt(circle.offsetTop);
  element.style.top = currentUp + 1 + 'px';
}
function moveLeft() {
  var element = document.getElementById('circle');
  currentLeft = parseInt(circle.offsetLeft);
  element.style.left = currentLeft - 1 + 'px';
  }
function moveRight() {
  var element = document.getElementById('circle');
  currentLeft=parseInt(circle.offsetLeft);
  element.style.left = currentLeft + 1 + 'px';
}


var interval;
var leftPressed = false; var rightPressed = false;
var topPressed = false; var downPressed = false; 
function myKeyDown(event) {
   if (event.keyCode == 37) {leftPressed=true; }
   if (event.keyCode == 39) {rightPressed=true; }
   if (event.keyCode == 38) {topPressed=true; }
   if (event.keyCode == 40) {downPressed=true; }
 }
function myKeyUp(event){  
  if (event.keyCode == 37) {leftPressed=false;}
  if (event.keyCode == 39) {rightPressed=false; }
  if (event.keyCode == 38) {topPressed=false; }
  if (event.keyCode == 40) {downPressed=false; }
  }  
function animation(){
  if(leftPressed==true) moveLeft(); if(rightPressed==true) moveRight();
  if(topPressed==true) moveUp(); if(downPressed==true) moveDown();
  }
function myFunction() {
  document.addEventListener('keydown', myKeyDown);
  document.addEventListener('keyup', myKeyUp);
  interval=setInterval(animation, 5)
}

document.addEventListener('DOMContentLoaded', myFunction);
