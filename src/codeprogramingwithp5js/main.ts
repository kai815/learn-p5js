import p5 from "p5";

const sketch = (p: p5) => {
  let x = 0;
  p.setup = () => {
    p.createCanvas(600, 400);
  };

  p.draw = () => {
    p.background(0)
    p.stroke(255)
    p.strokeWeight(4)
    p.noFill()
    p.ellipse(x,200,100,100)
    if(x > p.width){
      x = x -3
    }
    if(x <= p.width){
      x = x + 3
    }
  };
};

new p5(sketch);
