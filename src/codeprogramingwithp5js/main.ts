import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(600, 400);
  };

  p.draw = () => {
    p.background(0)
    p.stroke(255)
    p.strokeWeight(4)
    
    for(let x = 0; x <= p.width; x+=50){
      for(let y = 0; y <= p.height; y+=50){
        p.fill(p.random(255),0,p.random(255))
        p.ellipse(x,y,25,25)
      }
    }
  };
};

new p5(sketch);
