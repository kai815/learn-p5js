import p5 from "p5";

const sketch = (p: p5) => {
  let circleX = 100;
  p.setup = () => {
    p.createCanvas(400, 300);
  };

  p.draw = () => {  
    p.background(0);
    p.noStroke();
    p.fill(255)
    p.circle(circleX,150,64);
    circleX = circleX + 1;
  };

  p.mousePressed = () => {
    circleX = 0;
  }
};

new p5(sketch);
