function preload() {
  //() {}
  obra = loadImage('obra.jpeg');
  caleidoscipio[1]=loadImage('cal1.jpeg');
  caleidoscipio[2]=loadImage('cal2.jpeg');
  caleidoscipio[3]=loadImage('cal3.jpeg');
  caleidoscipio[4]=loadImage('cal4.jpeg');
  caleidoscipio[5]=loadImage('cal5.jpeg');
  caleidoscipio[6]=loadImage('cal6.jpeg');
}

function obraInteractiva() {
  //() {}
  push();
  translate(width-200, height-200);
  for (let i = 300; i > 5; i -=50) {
    push();
    fill(valewup);
    stroke(valewup);
    rotate(angulo1);
    strokeWeight(20);
    rect(0, 0, i, i);
    pop();
    push();
    fill(colorin);
    rotate(angulo2);
    strokeWeight(0);
    rect(0, 0, i-10, i-10);
    pop();
  }
  pop();
  interaccion()
}

function interaccion() {
  //() {} angulo1 += valorAngulo + anguloVelocidad * Math.sign(valorAngulo);
  if (girar === true) {
    angulo1 += valorAngulo+anguloVelocidad * Math.sign(valorAngulo);
    angulo2 -= valorAngulo+anguloVelocidad * Math.sign(valorAngulo);
    startPause = "PAUSE";
  } else if (girar === false) {
    startPause = "START";
  }
  if (switchear === true) {
    valorAngulo= -0.01 ;
  } else if (switchear === false) {
    valorAngulo= 0.01 ;
  }
  if (colorRandom === true) {
    colorin = color(random(0, 200), random(0, 200), random(0, 250));
    onOff= "CLR off";
  } else if (colorRandom === false) {
    colorin = color(250);
    onOff= "CLR on";
  }
}

function caleidoscopios() {
  //() {}
  if(calRandom === true) {
  image(caleidoscipio[calCall], 400, 0, 800, 400)
  }
}

function escenario() {
  //() {}
  caleidoscopios()
    for (let i= 0; i<width/2; i +=50) {
    for (let y= 0; y< height; y +=50) {
      strokeWeight(2);
      fill(175);
      rect(i+25, y+25, 50, 50);
    }
  }
  image(obra, 201, 50, 150, 150);
}
function botones() {
  //() {}
  strokeWeight(0);
  fill(255, 5, 5);
  rect(width/2-1, 0, 2, 800);
  fill(0);
  rect(105, 105, 90, 40);
  rect(105, 170, 90, 40);
  rect(105, 235, 90, 40);
  rect(220, 235, 90, 40);
  rect(105, 300, 90, 40);
  rect(220, 300, 90, 40);
  rect(105, 365, 90, 40);
  fill(100);
  rect(100, 100, 90, 40);
  rect(100, 165, 90, 40);
  rect(100, 230, 90, 40);
  rect(215, 230, 90, 40);
  rect(100, 295, 90, 40);
  rect(215, 295, 90, 40);
  rect(100, 360, 90, 40);
  rect(325,375,40,40);
  rect(276,375,40,40);
  fill(250, 150);
  rect(316, 234, 90, 40);
  rect(316, 296, 100, 40);
  mouseEnLaObra()
  textoDeLosBotones()
  currentSpeedValeu()
}

function mouseEnLaObra() {
  //() {}
  if (mouseX > 53 && mouseY > 78 && mouseX < 148 && mouseY < 123 || mouseX > 53 && mouseY > 143 && mouseX < 148 && mouseY < 186|| mouseX > 53 && mouseY > 207 && mouseX < 148 && mouseY < 253|| mouseX > 53 && mouseY > 272 && mouseX < 148 && mouseY < 317|| mouseX > 168 && mouseY > 272 && mouseX < 263 && mouseY < 317|| mouseX > 53 && mouseY > 337 && mouseX < 148 && mouseY < 383|| mouseX > 158 && mouseY > 207 && mouseX < 263 && mouseY < 253 || mouseX > 256 && mouseY > 355 && mouseX < 295 && mouseY < 394 || mouseX > 305 && mouseY > 355 && mouseX < 344 && mouseY < 394) {
    cursor(HAND);
  } else if (mouseX>width/2) {
    cursor(CROSS);
  } else {
    cursor(ARROW);
  }
}

function textoDeLosBotones() {
  //() {}
  textSize(20);
  fill(0);
  text(startPause, 65, 109);
  text("SWITCH", 60, 173);
  text(onOff, 60, 238);
  textSize(15);
  text("VALEW in", 175, 238);
  textSize(15);
  text("SPEED UP", 60, 303);
  textSize(13);
  text("SLOWDOWN", 175, 303);
  textSize(20);
  text("RESET", 65, 368);
}

function currentSpeedValeu() {
  //() {}
  textSize(15);
  text("current valeu:", 273, 230);
  text(round(valewup), 273, 245);
  text("current speed:", 273, 295);
  text("x"+round(anguloVelocidad+how2ShowSpeed), 273, 310);
}

function mouseReleased() {
  //() {}
  if (mouseX > 53 && mouseY > 78 && mouseX < 148 && mouseY < 123) {
    girar = !girar;
  }
  if (mouseX > 53 && mouseY > 143 && mouseX < 148 && mouseY < 186) {
    switchear = !switchear;
  }
  if (mouseX > 53 && mouseY > 207 && mouseX < 148 && mouseY < 253) {
    colorRandom = !colorRandom;
  }
  if (mouseX > 158 && mouseY > 207 && mouseX < 263 && mouseY < 253) {
    valewup = random(0, 225);
  }
  if ( mouseX > 53 && mouseY > 272 && mouseX < 148 && mouseY < 317) {
    anguloVelocidad += 0.1;
    how2ShowSpeed+= 1;
  }
  if (mouseX > 168 && mouseY > 272 && mouseX < 263 && mouseY < 317) {
    anguloVelocidad -= 0.1;
    how2ShowSpeed-= 1;
    if (anguloVelocidad < 0 ) {
      anguloVelocidad = 0;
      how2ShowSpeed = 0;
    }
  }
  if (mouseX > 53 && mouseY > 337 && mouseX < 148 && mouseY < 383) {
    angulo1 = 0;
    angulo2 = 0;
    girar = false;
    switchear = false;
    colorRandom = false;
    anguloVelocidad= 0;
    colorin = color(250);
    valewup = color (0);
    how2ShowSpeed= 0;
  }
  if (mouseX > 256 && mouseY > 355 && mouseX < 295 && mouseY < 394){
  calRandom = !calRandom;
  }
  if (mouseX > 305 && mouseY > 355 && mouseX < 344 && mouseY < 394){
  if (calRandom === true) {
    calCall = round(random(1,6));
  }
  }
}

function tp() {
  //() {}
  escenario();
  obraInteractiva();
  botones();
}
