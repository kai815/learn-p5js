import p5 from "p5";
import {Bubble} from "./Bubble";

const sketch = (p: p5) => {
  let bubbles:Bubble[]=[]
  p.setup = () => {
    p.createCanvas(600, 400);
    for (let i = 0; i < 1000; i++) {
      let x = p.random(p.width)
      let y = p.random(p.height)
      let r = p.random(10,40)
      bubbles[i]= new Bubble(x,y,r,p)
    }
  };
  console.log(bubbles);
  p.draw = () => {
    p.background(0);
    for(let i = 0; i < bubbles.length; i++){
      bubbles[i].move();
      bubbles[i].show();
    }
  };
};

new p5(sketch);
