function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('blue');
  
  // Pescoço (desenhado antes da cabeça para ficar "por trás")
  fill('rgb(31,73,39)');           // mesma cor da pele
  stroke('#694927');
  strokeWeight(60);
  rectMode(CENTER);
  rect(200, 290, 110, 120, 35, 35, 20, 20);  // pescoço arredondado em cima, mais reto em baixo
  
  // Sombreamento leve no pescoço (opcional, dá mais volume)
  noStroke();
  fill(80, 50, 30, 80);  // sombra suave
  rect(210, 295, 100, 110, 30, 30, 15, 15);
  
  // Cabeça / rosto
  fill('rgb(105,73,39)');
  stroke('rgb(0,0,0)');
  strokeWeight(4);
  circle(200, 200, 300);  // rosto
  
  // olhos brancos
  fill('white');
  circle(150, 150, 60);
  circle(250, 150, 60);
  
  // boca
  stroke('rgb(253,113,137)');  
  strokeWeight(5);
  noFill();
  line(150, 270, 250, 235);
  
  // cabelo (linhas simples)
  fill('rgb(253,113,137)');
  stroke('rgb(116,72,19)');
  strokeWeight(4);
  line(200, 50, 200, 0); 
  line(300, 50, 200, 0);
  line(100, 50, 200, 0);
  
  // nariz (ajustado para ficar melhor com o pescoço)
  fill('red');
  triangle(200, 220, 175, 185, 225, 185);
  
  // Pupilas que seguem o mouse
  let olhoX = map(mouseX, 0, 400, 130, 170);
  let olhoY = map(mouseY, 0, 400, 130, 170);
  
  fill('rgb(0,0,0)');
  circle(olhoX, olhoY, 10);           // pupila esquerda
  circle(olhoX + 100, olhoY, 10);     // pupila direita
  
  // Sobrancelhas
  stroke('rgb(255,255,255)');
  strokeWeight(8);
  line(100, 120, 150, 100);
  line(300, 120, 250, 100);
  
  // Debug (opcional)
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}