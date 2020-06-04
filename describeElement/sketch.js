let example1 = function(p) {
  p.setup = function(){
    p.createCanvas(300, 200);
    describe('defaultCanvas0','a red wheelbarrow beside the white chickens inspired by "The Red Wheelbarrow" by William Carlos Williams',LABEL);
    p.background('skyblue');
    p.noStroke();
    p.fill('#a67b60');
    p.rect(0,120,300,100);
  //red wheelbarrow
    describeElement('defaultCanvas0','wheelbarrow','A red wheelbarrow whith a gray wheel rests on the brown ground.',LABEL);
    p.fill('#706a58');
    p.ellipse(35,137,30,30);
    p.strokeWeight(3);
    p.stroke('gray');
    p.line(135,105,130,140);
    p.line(124,110,130,140);
    p.line(35,137,44,100);
    p.noStroke();
    p.fill('red');
    p.quad(30, 75, 60, 130, 140, 105, 140, 76);
    p.strokeWeight(5);
    p.stroke('brown');
    p.line(35,137,200,84);
  //chicken
    let cC= [[200,140],[250,100], [100,150]];
    for (i=0; i<cC.length; i++){
      let x = cC[i][0];
      let y = cC[i][1];
      p.noStroke();
      p.fill('red');
      p.arc(x-12, y-8, 18, 20, p.radians(180), p.radians(0), p.PIE);
      p.fill(255);
      p.arc(x, y, 40, 40, 0, p.PI + p.QUARTER_PI, p.PIE);
      p.arc(x-15, y, 20, 30, p.radians(180), p.radians(0), p.PIE);
      p.fill('orange');
      p.triangle(x-25,y,x-36,y,x-23,y-7);
      p.strokeWeight(3);
      p.stroke('orange');
      p.line(x-5,y+20,x-5,y+30);
      p.line(x+5,y+20,x+5,y+30);
    }
    describeElement('defaultCanvas0','chicken 1','A white chicken infront of the wheelbarrow.',LABEL);
    describeElement('defaultCanvas0','chicken 2','A white chicken to the right of the wheelbarrow.',LABEL);
    describeElement('defaultCanvas0','chicken 3','A white chicken standing between chicken 1 and chicken 2.',LABEL);
  }
};
new p5(example1, 'example1Canvas');

let example2 = function(p) {
  let x = 0;
  p.setup = function(){
    p.createCanvas(200, 100);
    describe('defaultCanvas1','Two emojis over a pink background', LABEL);
  }
  p.draw = function(){
    p.background('pink');
    p.fill('yellow');
    p.noStroke();
    describeElement('defaultCanvas1',"Grinning face", "A yellow face located to the left. It has simple open eyes and a broad open smile showing upper teeth. Often conveys general pleasure and good cheer or humor.", LABEL);
    p.ellipse(50, 50, 70, 70);
    p.fill('#ad5240');
    p.arc(50, 55, 40, 40, p.radians(0), p.radians(180), p.PIE);
    p.fill(0);
    p.ellipse(40, 35, 15, 20);
    p.ellipse(60, 35, 15, 20);
    p.fill(255);
    p.arc(50, 55, 40, 20, p.radians(0), p.radians(180), p.PIE);
    p.ellipse(43, 35, 5, 5);
    p.ellipse(63, 35, 5, 5);
    describeElement('defaultCanvas1',"Smiling face with heart-eyes", "A yellow face located to the right. It has an open smile, and red, cartoon-styled hearts for eyes. Often conveys enthusiastic feelings of love.", LABEL);
    p.fill('yellow');
    p.ellipse(150, 50, 70, 70);
    p.fill('#ad5240');
    p.arc(150, 55, 40, 40, p.radians(0), p.radians(180), p.PIE);
    p.fill('red');
    p.ellipse(143, 35, 10, 10);
    p.ellipse(137, 35, 10, 10);
    p.triangle(132, 35, 140, 45, 148, 35);
    p.ellipse(157, 35, 10, 10);
    p.ellipse(163, 35, 10, 10);
    p.triangle(168, 35, 160, 45, 152, 35);
  }
};
new p5(example2, 'example2Canvas');