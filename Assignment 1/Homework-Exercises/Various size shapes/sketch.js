//Create three global scope variables for position and size
let xRandom;
let yRandom;
let sizeRandom = 100;

function setup() {
  createCanvas(800, 700);
  frameRate(5); //Drawing speed 10 fps
  noStroke();
}

function draw() {
  //Randomize the variables for the position and size
  xRandom = random (width);
  yRandom = random (height);
  sizeRandom = random(100, 300);

  //Call the function. Pass the arguments for position and size
  customShape(xRandom, yRandom, sizeRandom);
}

//Create a custom shape. Use input parameters for position and size
function customShape(x, y, size){
  //Outside circle - thin line, with a blue-ish fill
  stroke(134, 151, 178);
  strokeWeight(1);
  fill(random(255), random(255), random(255), random(200));
  for (var i = 0; i < 10; i ++) {
  rect(x, y, size, size);

  fill(random(255), random(255), random(255), random(200));
  rect(x, y, size/1.2, size/1.2);

  fill(random(255), random(255), random(255), random(200));
  ellipse(x, y, size/1.4, size/1.4);
  rotate(PI/2);
}
}
