import p5 from "p5";

const sketch = (p: p5) => {
  let r = 0;
  let b = 255
  p.setup = () => {
    p.createCanvas(600, 400);
  };

  p.draw = () => {
    r = p.map(p.mouseX,0,600,0,255)
    b = p.map(p.mouseX,0,600,255,0)
    p.background(r,0,b)
    p.fill(250,118, 222);
    p.ellipse(p.mouseX,200,64,64)
  };
};

new p5(sketch);
