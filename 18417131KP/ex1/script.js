function moveUp() {
  var element = document.getElementById('circle');
  currentUp = parseInt(circle.offsetTop);
  if(currentUp==0){
    clearInterval(interval);
    interval = setInterval(moveDown,5);
  }
  else{
  element.style.top = currentUp - 1 + 'px';
  }
}
function moveDown() {
  var element = document.getElementById('circle');
  currentUp = parseInt(circle.offsetTop);
  if(window.innerHeight == currentUp +200){
    clearInterval(interval);
    interval = setInterval(moveUp,5);
     }
     else{
  element.style.top = currentUp + 1 + 'px';
  }
}
function moveLeft() {
  var element = document.getElementById('circle');
  currentLeft = parseInt(circle.offsetLeft);
  if(currentLeft == 0){
    clearInterval(interval);
    interval = setInterval(moveRight,5);
  }
  else{
  element.style.left = currentLeft - 1 + 'px';
  }
}
function moveRight() {
  var element = document.getElementById('circle');
  currentLeft=parseInt(circle.offsetLeft);
  if(window.innerWidth == currentLeft + 200){
    clearInterval(interval);
    interval = setInterval(moveLeft,5);
  }else{
  element.style.left = currentLeft + 1 + 'px';
}
}


var interval = 0; 
function myKeyDown(event) {

  clearInterval(interval);

  if (event.keyCode == 37) {
    interval = setInterval(moveLeft, 5);
  }
  if (event.keyCode == 38) {
    interval =setInterval(moveUp, 5);
  }
  if (event.keyCode == 40) {
    interval =setInterval(moveDown, 5);
  }
  if (event.keyCode == 39) {
    interval =setInterval(moveRight, 5);
  }
}

function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
