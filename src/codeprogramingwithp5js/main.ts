import p5 from "p5";
import {Bubble} from "./Bubble";

const sketch = (p: p5) => {
  let bubbles:Bubble[]=[]
  p.setup = () => {
    p.createCanvas(600, 400);
  };
  p.mouseDragged = ()=> {
    const r = p.random(10,50);
    const b = new Bubble(p.mouseX,p.mouseY,r,p);
    bubbles.push(b);
  }
  p.draw = () => {
    p.background(0);
    for(let i = 0; i < bubbles.length; i++){
      bubbles[i].move();
      bubbles[i].show();
    }
  };

};

new p5(sketch);
