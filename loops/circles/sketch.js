//DAT405 / GAD405
//for P5.js projects

//initialising function
function setup() {
  //create canvas
  createCanvas(500, 500);
  frameRate(5)
}
//drawing the ellipse
function draw() {
  //random colours
  fill(random(255), random(255), random(255), random(255));
  sizeX = random(240);
  circleX = random(width);
  circleY = random(height);
  ellipse(circleX, circleY, sizeX)

}
