//DAT405 / GAD405
//for P5.js projects

//initialising function
function setup() {
  //create canvas
  createCanvas(500, 500);
  frameRate(5)
  //noStroke();
}
//drawing the ellipse
function draw() {

  size = random(200);

  customShape();
}

function customShape(){
//variables
  circleX = random(width);
  circleY = random(height);
  size = random(240)

//creating the multiple ellipse
  //stroke
strokeWeight(3);
stroke(0);
fill(255)
//shape
  ellipse(circleX, circleY, 200);

stroke(0, 100, 150, 150)

  ellipse(circleX, circleY, 150);

strokeWeight(10);
stroke(255, 0, 0);

  ellipse(circleX, circleY, 100);

noStroke();
fill(150);
  ellipse(circleX, circleY, 50);
}
