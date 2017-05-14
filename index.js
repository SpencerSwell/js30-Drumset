

const snare = new Audio('./sounds/snare.wav');
const bang = new Audio('./sounds/bang.wav');
const beat = new Audio('./sounds/beat.wav');
const bigdrum = new Audio('./sounds/bigdrum.wav');
const boom = new Audio('./sounds/beat.wav');
const bump = new Audio('./sounds/bump.wav');
const cricket = new Audio('./sounds/cricket.wav');
const tinyping = new Audio('./sounds/tinyping.wav');
const tap = new Audio('./sounds/tap.wav');

var delayClassSwitch = setInterval(removeClass, 500);

function removeClass () {

A.classList.remove('active');
S.classList.remove('active');
D.classList.remove('active');
F.classList.remove('active');
G.classList.remove('active');
H.classList.remove('active');
J.classList.remove('active');
K.classList.remove('active');


}



document.addEventListener("DOMContentLoaded", function(event) {
    
window.addEventListener("keydown", function (event) {
  
  switch (event.key) {
    case "a":
    var A = document.getElementById("A");
    A.classList.add('active');
    snare.play();
   
      break;
    case "s":
    var S = document.getElementById("S");
    S.classList.add('active');
    beat.play();

      break;
    case "d":
    var D = document.getElementById("D");
    D.classList.add('active');
    bigdrum.play();
   
      break;
    case "f":
    var F = document.getElementById("F");
    F.classList.add('active');
    boom.play();
     
      break;
    case "g":
    var G = document.getElementById("G");
    G.classList.add('active');
    bump.play();
    
      break;
    case "h":
    var H = document.getElementById("H");
    H.classList.add('active');
    cricket.play();
     
      break;
      case "j":
    var J = document.getElementById("J");
    J.classList.add('active');
      tinyping.play();
    
      break;
      case "k":
    var K = document.getElementById("K");
    K.classList.add('active');
      tap.play();
      break;
    default: console.log("THEY PRESSED A DIFFERENT KEY");
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);


  });