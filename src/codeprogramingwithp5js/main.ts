import p5 from "p5";

const sketch = (p: p5) => {
  let ball = {
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: -3
  };
  p.setup = () => {
    p.createCanvas(600, 400);
  };

  p.draw = () => {
    p.background(0);
    move();
    bounce();
    display();
  };
  const bounce = () => {
    if (ball.x > p.width || ball.x < 0) {
      ball.xspeed = ball.xspeed * -1;
    }
  
    if (ball.y > p.height || ball.y < 0) {
      ball.yspeed = ball.yspeed * -1;
    }
  }
  const display = () => {
    p.stroke(255);
    p.strokeWeight(4);
    p.fill(200, 0, 200);
    p.ellipse(ball.x, ball.y, 24, 24);
  }
  const move = () => {
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
  }
  
};

new p5(sketch);
