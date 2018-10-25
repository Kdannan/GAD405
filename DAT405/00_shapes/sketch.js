//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {


  // Create the canvas
  createCanvas(720, 400);
  background(0);

  // Set colors
  fill(300, 10, 10, 170);
  // An ellipse
  ellipse(50, 50, 80, 80);

  // Set colors
  fill(100, 700, 60, 200);
  // An ellipse
  ellipse(50, 350, 80, 80);

  // Set colors
  fill(600, 250, 10, 270);
  // An ellipse
  ellipse(665, 50, 80, 80);

  // Set colors
  fill(70, 40, 200, 500);
  // An ellipse
  ellipse(665, 350, 80, 80);

  // Draw lines
   //red to yellow
  stroke(255, 144, 0);
  line(665, 50, 50, 50);
   //green to yellow
  stroke(110, 165, 58);
  line(50, 350, 665, 50);
   //yellow to blue
  stroke(0, 255, 123);
  line(665, 50, 665, 350);
   //red to green
  stroke(255, 246, 0);
  line(50, 50, 50, 350);
   //red to blue
  stroke(168, 17, 173);
  line(50, 50, 665, 350);
   //green to blue
  stroke(25, 255, 255);
  line(665, 350, 50, 350);

  for (var i = 0; i < 10; i ++) {
  }
}
