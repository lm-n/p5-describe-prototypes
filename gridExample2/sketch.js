let x = 0;
function setup() {
  createCanvas(100,100);
}

function draw() {
  gridOutput(LABEL);
  background(148, 196, 0);
  fill(255, 0, 0);
  ellipse(x, 20, 20, 20);
  fill(0, 0, 255);
  rect(50, 50, 50, 50);
  ellipse(20, 20, 20, 20);
  x += 0.1;
}