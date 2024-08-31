//https://youtu.be/IRGPloAL-i8

let valewup;
let how2ShowSpeed;
let angulo1;
let angulo2;
let valorAngulo;
let anguloVelocidad;
let colorin;
let startPause;
let onOff;
let valewin;
let girar;
let switchear;
let colorRandom;
let caleidoscipio = [];
let calCall;
let calRandom;
var obra;

function setup() {
  //() {}
  createCanvas(800, 400);
  rectMode(CENTER);
  angulo1 =0;
  angulo2 =0;
  valorAngulo= 0.01 ;
  anguloVelocidad = 0;
  how2ShowSpeed = 0;
  valewup = 0;
  calCall = round(random(1,6));
  colorRandom = false;
  switchear= false;
  girar = false;
  colorin = color(250);
  startPause = "START";
  onOff = "CLR on";
  calRandom = false;
}

function draw() {
  //() {}
  background(250);
  //print('mouseX'+mouseX);
  //print('mouseY'+mouseY);
  tp();
}
