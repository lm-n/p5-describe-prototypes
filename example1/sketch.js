function setup() {
  createCanvas(200, 200);
  describe("orange eyes over a gray background",LABEL);
}

function draw() {
  background(220);
  fill(255);
  ellipse(50,height/2,70,40);
  ellipse(150,height/2,70,40);
  fill("orange");
  ellipse(50,height/2,30,30);
  ellipse(150,height/2,30,30);
  fill(0);
  ellipse(50,height/2,5,5);
  ellipse(150,height/2,5,5);
}