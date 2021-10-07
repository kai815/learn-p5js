import p5 from "p5";

const sketch = (p: p5) => {
  let squareSize;
  let lineWidth;
  p.setup = () => {
    p.createCanvas(400, 300);
    p.background(100);
  };

  p.draw = () => {
    lineWidth = p.random(4,28);
    squareSize = p.random(50,250)
    p.rectMode(p.CENTER);
    p.strokeWeight(lineWidth)
    p.stroke(0,0,255)
    p.fill(0,255,0, 10);
    p.square(200,150, squareSize)
  };
};

new p5(sketch);
