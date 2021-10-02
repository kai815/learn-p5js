import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 300);
  };

  p.draw = () => {
    p.background(220,0,200);
    p.rect(100,50,200,200,80)
  };
};

new p5(sketch);
