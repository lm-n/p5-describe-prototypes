function setup() {
  createCanvas(200, 100);
  describe('Two emojis over a pink background', LABEL);
}

function draw(){  
  background('pink');
  fill('yellow');
  noStroke();
  describeElement("Grinning face", "A yellow face located to the left. It has simple open eyes and a broad open smile showing upper teeth. Often conveys general pleasure and good cheer or humor.", LABEL);
  ellipse(50, 50, 70, 70);
  fill('#ad5240');
  arc(50, 55, 40, 40, radians(0), radians(180), PIE);
  fill(0);
  ellipse(40, 35, 15, 20);
  ellipse(60, 35, 15, 20);
  fill(255);
  arc(50, 55, 40, 20, radians(0), radians(180), PIE);
  ellipse(43, 35, 5, 5);
  ellipse(63, 35, 5, 5);
  describeElement("Smiling face with heart-eyes", "A yellow face located to the right. It has an open smile, and red, cartoon-styled hearts for eyes. Often conveys enthusiastic feelings of love.", LABEL);
  fill('yellow');
  ellipse(150, 50, 70, 70);
  fill('#ad5240');
  arc(150, 55, 40, 40, radians(0), radians(180), PIE);
  fill('red');
  ellipse(143, 35, 10, 10);
  ellipse(137, 35, 10, 10);
  triangle(132, 35, 140, 45, 148, 35);
  ellipse(157, 35, 10, 10);
  ellipse(163, 35, 10, 10);
  triangle(168, 35, 160, 45, 152, 35);
}