//DAT405 / GAD405
//for P5.js projects

//Creates a random number from 0 to the specified number.
  var x = Math.floor(Math.random() * 494);
  var y = Math.floor(Math.random() * 741);

//initialising function
  function setup() {
      createCanvas(594, 841);
      // Pick colors randomly
      r = random(255);
      g = random(255);
      b = random(255);
    }
    // When the user clicks the mouse
    function mousePressed() {
        // Pick new random color values
        r = random(255);
        g = random(255);
        b = random(255);
      }

      //setting the background colours
    function draw() {
        background (r, g, b, 127)

    //create rectangle
    rect (x, y, 100, 100);
    }