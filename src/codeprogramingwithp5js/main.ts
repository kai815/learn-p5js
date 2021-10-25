import p5 from "p5";
import {Bubble} from "./Bubble";

const sketch = (p: p5) => {
  let bubble1,bubble2;
  p.setup = () => {
    p.createCanvas(600, 400);
  };

  p.draw = () => {
    p.background(50);
    bubble1 = new Bubble(100,200,40,p);
    bubble2 = new Bubble(50,150,10,p);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
  };
  
};

new p5(sketch);
