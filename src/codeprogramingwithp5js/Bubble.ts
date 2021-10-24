import p5 from "p5";

export class Bubble {
  x: number;
  y: number;
  p:p5
  constructor(p:p5){
    this.x = 200;
    this.y = 150;
    this.p = p
  }
  move(){ 
    this.x = this.x + this.p.random(-10, 10)
    this.y = this.y + this.p.random(-10, 10)
  }
  show(){ 
    this.p.stroke(255)
    this.p.strokeWeight(4);
    this.p.noFill();
    this.p.ellipse(this.x,this.y,24,24)
  }
}
