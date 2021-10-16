import p5 from "p5";

const sketch = (p: p5) => {
  let x = 0;
  let speed = 3;
  p.setup = () => {
    p.createCanvas(600, 400);
  };

  p.draw = () => {
    console.log(x)
    p.background(0)
    p.stroke(255)
    p.strokeWeight(4)
    p.noFill()
    p.ellipse(x,200,100,100)
    if(x > p.width || x < 0){
      speed = speed * -1;
    }
    x += speed;
  };
};

new p5(sketch);
