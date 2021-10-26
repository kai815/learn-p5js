import p5 from "p5";
// import {Bubble} from "./Bubble";

const sketch = (p: p5) => {
  let nums = [100,25,46,72]
  p.setup = () => {
    p.createCanvas(500, 400);
  };

  p.draw = () => {
    p.background(0);

    for(let i = 0; i < 4; i++){
      p.stroke(255)
      p.noFill();
      p.ellipse(i * 100 + 100,200,nums[i], nums[i])
    }
  };
  
};

new p5(sketch);
