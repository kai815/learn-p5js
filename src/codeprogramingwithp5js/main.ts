import p5 from "p5";

const sketch = (p: p5) => {
  let x,y,r,g,b;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  };

  p.draw = () => {
    r = p.random(255);
    g = 0;
    b = p.random(255);
    x = p.random(p.width);
    y = p.random(p.height);
    p.noStroke()
    p.fill(r,g,b, 100);
    p.circle(x,y, 24)
  };
};

new p5(sketch);
