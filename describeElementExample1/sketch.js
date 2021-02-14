function setup() {
  describe('Heart and yellow circle over pink background');
  noStroke();
  background('pink');
  describeElement('Circle', 'Yellow circle in the top left corner');
  fill('yellow');
  ellipse(25, 25, 40, 40);
  describeElement('Heart', 'red heart in the bottom right corner');
  fill('red');
  ellipse(66.6, 66.6, 20, 20);
  ellipse(83.2, 66.6, 20, 20);
  triangle(91.2, 72.6, 75, 95, 58.6, 72.6);
}