import p5 from "p5";

export class Bubble {
  x: number;
  y: number;
  r: number; 
  p:p5
  constructor(x:number, y:number, r:number, p:p5){
    this.x = x;
    this.y = y;
    this.r = r;
    this.p = p
  }
  move(){ 
    this.x = this.x + this.p.random(-10, 10)
    this.y = this.y + this.p.random(-10, 10)
  }
  show(){ 
    // this.p.stroke(255)
    // this.p.strokeWeight(4);
    // this.p.noFill();
    this.p.noStroke();
    this.p.fill(255,20)
    this.p.ellipse(this.x,this.y, this.r * 2)
  }
}
