import p5 from "p5";

export class Particle {
  p:p5
  x: number;
  y: number;
  r: number;
  xSpeed: number;
  ySpeed: number;
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(p:p5){
      this.p = p;
      this.x = this.p.random(0,p.width);
      this.y = this.p.random(0,p.height);
      this.r = this.p.random(1,8);
      this.xSpeed = this.p.random(-2,2);
      this.ySpeed = this.p.random(-1,1.5);
    }
  
  // creation of a particle.
    createParticle() {
      this.p.noStroke();
      this.p.fill('rgba(200,169,169,0.5)');
      this.p.circle(this.x,this.y,this.r);
    }
  
  // setting the particle in motion.
    moveParticle() {
      if(this.x < 0 || this.x > this.p.width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > this.p.height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }
  
  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
    joinParticles(particles) {
      particles.forEach(element =>{
        let dis = this.p.dist(this.x,this.y,element.x,element.y);
        if(dis<85) {
          this.p.stroke('rgba(255,255,255,0.04)');
          this.p.line(this.x,this.y,element.x,element.y);
        }
      });
    }
  }
