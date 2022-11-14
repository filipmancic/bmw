setTimeout(myFunction, 2800);
setTimeout(fun2, 1800);
function myFunction(){
    var myobj = document.getElementById("rmv");
    myobj.remove();
}
function fun2(){
    var x = document.getElementById("bg1");
    x.style.filter="blur(7px)";
}

window.onscroll = function() {scrollFunction()};
var x = document.getElementsByClassName("nav-item");
var full = document.getElementById("fullnav");
var i;

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      for (i = 0; i < x.length; i++) {
        x[i].style.padding = "10px 20px";
      }
      full.style.background = "rgba(0,0,0,0.9)";
    } else {
      for (i = 0; i < x.length; i++) {
        x[i].style.padding = "50px 20px";
      }
      full.style.background = "rgba(0,0,0,0)";
    }
}
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}