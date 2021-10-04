import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 300);
    p.background(0);
  };

  p.draw = () => {  
    p.noStroke();
    p.fill(255,50)
    p.circle(p.mouseX,p.mouseY,24);
    // p.background(0);
  };

  p.mousePressed = ()=>{
    p.background(0);
  }
};

new p5(sketch);
