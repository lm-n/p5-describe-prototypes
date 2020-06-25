function setup() {
  describe('pink square with red heart in the bottom right corner', LABEL);
  background('pink');
  fill('red');
  noStroke();
  ellipse(66.6, 66.6, 20, 20);
  ellipse(83.2, 66.6, 20, 20);
  triangle(91.2, 72.6, 75, 95, 58.6, 72.6);
}
