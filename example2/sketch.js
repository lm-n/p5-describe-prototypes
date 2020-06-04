let x = 0;

function setup() {
  createCanvas(300, 100);
  describe('a green circle moving to the right');
}

function draw() {
  if (x==300){
    x=0;
  }
  background(220);
  fill(0,255,0);
  ellipse(x,50,40,40);
  x=x+0.1;
  describe('a green circle at pos '+ round(x) +' moving to the right');
}