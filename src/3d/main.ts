import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(710, 400, p.WEBGL);
  };

  p.draw = () => {
    p.background(250);
    //平面
    p.translate(-240, -100, 0);
    p.normalMaterial();
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.plane(70);
    p.pop();

    //立方体
    p.translate(240, 0, 0);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.box(70, 70, 70);
    p.pop();
  };
};

new p5(sketch);
