import p5 from "p5";

const sketch = (p: p5) => {
  let time = 0;
  p.setup = () => {
    p.createCanvas(600, 600);
    p.noStroke();
    p.fill(200,10,40);
  };

  p.draw = () => {
    p.background(100,10);
    // make a x and y grid of ellipses
    for (let x = 0; x <= p.width; x = x + 30) {
      for (let y = 0; y <= p.height; y = y + 30) {
        // starting point of each circle depends on mouse position
        let xAngle = p.map(p.mouseX, 0, p.width, -4 * p.PI, 4 * p.PI, true);
        let yAngle = p.map(p.mouseY, 0, p.height, -4 * p.PI, 4 * p.PI, true);
        // and also varies based on the particle's location
        let angle = xAngle * (x / p.width) + yAngle * (y / p.height);

        // each particle moves in a circle
        let myX = x + 20 * p.cos(2 * p.PI * time + angle);
        let myY = y + 20 * p.sin(2 * p.PI * time + angle);

        p.ellipse(myX, myY, 10); // draw particle
    }
  }

  time = time + 0.01; 
  };
};

new p5(sketch);
