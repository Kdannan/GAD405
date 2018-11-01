//DAT405 / GAD405
//for P5.js projects

let size = 50;

//initialising function
function setup() {
  //create canvas
  createCanvas(500, 500);
  //noloop();
  textSize(22);
}

function draw() {
  //set background colour
  background (60);
  fill(255);
  text("open the developer > javascript console", 10, 100);
  //run the nested loop for x, y
  for (let y = 0; y < 10; y++){
      for (let x = 0; x < 10; x++){
        //print result to the console
        //open chrome > view > developer > javascript console
        console.log("x; " + x + ", y: " + y)
  }
}
}
