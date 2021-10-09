import p5 from "p5";

const sketch = (p: p5) => {
  let r = 255;
  let g = 255;
  let b = 255;
  let diameter = 24;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  };

  p.draw = () => {
    p.noStroke()
    p.fill(r,g,b, 100);
    p.circle(p.mouseX,p.mouseY,diameter);
  };
  p.mousePressed = () => {
    r = p.random(50,255);
    g = p.random(50,255);
    b = p.random(50,255);
    diameter = p.random(16,72);
  }
};

new p5(sketch);
