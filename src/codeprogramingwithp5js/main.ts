import p5 from "p5";

const sketch = (p: p5) => {
  let x = 200;
  let y = 200;
  let extraCanvas;
  p.setup = () => {
    p.createCanvas(400, 400);
    extraCanvas = p.createGraphics(400, 400);
    extraCanvas.clear();
    p.background(0);
  };

  p.draw = () => {
    p.background(0)
    x += p.random(-5, 5);
    y += p.random(-5, 5);
    let starX = p.random(p.width);
    let starY = p.random(p.height);
    extraCanvas.ellipse(starX, starY, 10, 10);
    p.image(extraCanvas, 0, 0);
    p.fill(255, 0, 0);
    p.stroke(255);
    p.rectMode(p.CENTER);
    p.rect(x, y, 20, 20);
  };
};

new p5(sketch);
