let example1 = function(p) {
  p.setup = function(){
    p.createCanvas(100,100);
    p.describe('pink square with red heart in the bottom right corner', p.LABEL);
    p.background('pink');
    p.fill('red');
    p.noStroke();
    p.ellipse(66.6, 66.6, 20, 20);
    p.ellipse(83.2, 66.6, 20, 20);
    p.triangle(91.2, 72.6, 75, 95, 58.6, 72.6);
  }
};
new p5(example1, 'example1Canvas');

let example2 = function(p) {
  let x = 0;
  p.draw = function(){
    if (x > 100) {
      x = 0;
    }
    p.background(220);
    p.fill(0, 255, 0);
    p.ellipse(x, 50, 40, 40);
    x = x + 0.1;
    p.describe('green circle at x pos ' + p.round(x) + ' moving to the right');
  }
};
new p5(example2, 'example2Canvas');