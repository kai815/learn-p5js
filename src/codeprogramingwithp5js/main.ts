import p5 from "p5";

const sketch = (p: p5) => {
  let ball = {
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: -3
  };
  p.setup = () => {
    p.createCanvas(600, 400);
  };

  p.draw = () => {
    
    p.background(50);
    lollipop(100, 100, 50);
    lollipop(300, 200, 150);
    lollipop(400, 50, 100);
  };
  const lollipop = (x:number, y:number, diameter:number) => {
    p.fill(0, 200, 255);
    p.rect(x - 10, y, 20, 150);
  
    p.fill(255, 0, 200);
    p.ellipse(x, y, diameter, diameter);
  }
  
};

new p5(sketch);
