let example1 = function(p) {
  p.setup = function(){
    p.createCanvas(100, 100);
    p.describe('Heart and yellow circle over pink background', p.LABEL);
    p.noStroke();
    p.background('pink');
    p.describeElement('Circle', 'Yellow circle in the top left corner', p.LABEL);
    p.fill('yellow');
    p.ellipse(25, 25, 40, 40);
    p.describeElement('Heart', 'red heart in the bottom right corner', p.LABEL);
    p.fill('red');
    p.ellipse(66.6, 66.6, 20, 20);
    p.ellipse(83.2, 66.6, 20, 20);
    p.triangle(91.2, 72.6, 75, 95, 58.6, 72.6);
  }
};
new p5(example1, 'example1Canvas');