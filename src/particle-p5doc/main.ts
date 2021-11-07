import p5 from "p5";
import {Particle} from "./Particle";

const sketch = (p: p5) => {
  let particles:Particle[] = [];
  p.setup = () => {
    p.createCanvas(400, 400);
    for(let i = 0;i<p.width/10;i++){
      particles.push(new Particle(p));
    }
  };

  p.draw = () => {
    p.background('#0f0f0f');
    for(let i = 0;i<particles.length;i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i));
    }
  };
};

new p5(sketch);
