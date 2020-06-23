function setup() {
  createCanvas(300, 200);
  describe('a red wheelbarrow beside the white chickens inspired by "The Red Wheelbarrow" by William Carlos Williams',LABEL);
}

function draw() {
  background('skyblue');
  noStroke();
  fill('#a67b60');
  rect(0,120,300,100);
  //red wheelbarrow
  describeElement("wheelbarrow","A red wheelbarrow whith a gray wheel rests on the brown ground.",LABEL);
  fill('#706a58');
  ellipse(35,137,30,30);
  strokeWeight(3);
  stroke('gray');
  line(135,105,130,140);
  line(124,110,130,140);
  line(35,137,44,100);
  noStroke();
  fill('red');
  quad(30, 75, 60, 130, 140, 105, 140, 76);
  strokeWeight(5);
  stroke('brown');
  line(35,137,200,84);
  //chicken
  let cC= [[200,140],[250,100], [100,150]];
  for (i=0; i<cC.length; i++){
    let x = cC[i][0];
    let y = cC[i][1];
    noStroke();
    fill('red');
    arc(x-12, y-8, 18, 20, radians(180), radians(0), PIE);
    fill(255);
    arc(x, y, 40, 40, 0, PI + QUARTER_PI, PIE);
    arc(x-15, y, 20, 30, radians(180), radians(0), PIE);
    fill('orange');
    triangle(x-25,y,x-36,y,x-23,y-7);
    strokeWeight(3);
    stroke('orange');
    line(x-5,y+20,x-5,y+30);
    line(x+5,y+20,x+5,y+30);
  }
  describeElement("chicken 1","A white chicken infront of the wheelbarrow.",LABEL);
  describeElement("chicken 2","A white chicken to the right of the wheelbarrow.",LABEL);
  describeElement("chicken 3","A white chicken standing between chicken 1 and chicken 2.",LABEL);
}