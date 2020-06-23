let x = 0;

function setup() {
  createCanvas(100, 100);
}

function draw() {
  if (x > 100) {
    x = 0;
  }
  background(220);
  fill(0, 255, 0);
  ellipse(x, 50, 40, 40);
  x = x + 0.1;
  describe('green circle at x pos ' + round(x) + ' moving to the right');
}