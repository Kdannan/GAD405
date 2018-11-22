//DAT405 / GAD405
//for P5.js projects

//Creates a random number from 0 to the specified number. this will decide where the square starts on the page.
  var x = Math.floor(Math.random() * 494);
  var y = Math.floor(Math.random() * 741);

//variables that allow the square to move along the screen.
  let dx = x;
  let dy = y;

//initialising function.
  function setup() {
      createCanvas(594, 841);
      // Pick colors randomly for the background.
      r = random(255);
      g = random(255);
      b = random(255);
    }

    // When the user clicks the mouse
    function mousePressed() {
        // Pick new random color values.
        r = random(255);
        g = random(255);
        b = random(255);
      }
      //creating the motion.
    function draw() {
        background (r, g, b, 2)

    //create rectangle
    rect (dx, dy, 100, 100);
    dx++
    dy++
    if(dx>width){
      dx = -1;
    } else if(dy>height){
      dy = -1;
    }
    }
