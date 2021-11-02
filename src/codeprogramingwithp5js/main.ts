import p5 from "p5";
import {Bubble} from "./Bubble";

const sketch = (p: p5) => {
  let bubbles:Bubble[]=[]
  let isPlus = true;
  const max = 5;
  p.setup = () => {
    p.createCanvas(600, 400);
  };
  p.mouseClicked = ()=> {
    const r = p.random(10,50);
    if(isPlus){
      const b = new Bubble(p.mouseX,p.mouseY,r,p);
      bubbles.push(b);
    }
    if(!isPlus){
      bubbles.splice(bubbles.length - 1, 1);
    }
    if(bubbles.length >= max){
      isPlus = false;
    }
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
