function setup() {
  createCanvas(500, 500);
    background("white");
}

function draw() {
  
  stroke("rgb(255,0,172)");
  fill("#15E1EB");

 // console.log(mouseIsPressed); 
  
    if (mouseIsPressed) {
    rect(mouseX, mouseY, 40, 40); 
    }
}