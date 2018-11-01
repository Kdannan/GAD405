//DAT405 / GAD405
//for P5.js projects

let size = 50;

//initialising function
function setup() {
  //create canvas
  createCanvas(500, 500);
  //noloop();
}

function draw() {
  //set background colour
  fill (215, 200, 170);
  for (let x = 0; x < 10; x++){
    for(let i = 0; i < 10; i++){
    //top row
    rect(size*x, size*i, size, size);
    }
  }
}
