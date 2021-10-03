import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 300);
  };

  p.draw = () => {
    p.background(100,100,100);
    p.fill(0,0,255);
    p.stroke(0,255,0);
    p.strokeWeight(5);
    p.rect(100,50,200,200,80);
    p.fill(255,0,0,100);
    p.noStroke();
    p.ellipse(100,100,100,75);
  };
};

new p5(sketch);
