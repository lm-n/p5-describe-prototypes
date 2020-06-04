let example1 = function(p) {
  p.setup = function(){
    p.createCanvas(200,200);
    describe('defaultCanvas0',"orange eyes over a gray background",LABEL);
    p.background(220);
    p.fill(255);
    p.ellipse(50,p.height/2,70,40);
    p.ellipse(150,p.height/2,70,40);
    p.fill("orange");
    p.ellipse(50,p.height/2,30,30);
    p.ellipse(150,p.height/2,30,30);
    p.fill(0);
    p.ellipse(50,p.height/2,5,5);
    p.ellipse(150,p.height/2,5,5);
  }

};
new p5(example1, 'example1Canvas');

let example2 = function(p) {
  let x = 0;
  p.setup = function(){
    p.createCanvas(300, 100);
    describe('defaultCanvas1','a green circle moving to the right');
  }
  p.draw = function(){
    if (x>300){
    x=0;
    }
    p.background(220);
    p.fill(0,255,0);
    p.ellipse(x,50,40,40);
    x=x+0.1;
    describe('defaultCanvas1','a green circle at pos '+ p.round(x) +' moving to the right');
  }
};
new p5(example2, 'example2Canvas');