import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(710, 400, p.WEBGL);
  };

  p.draw = () => {
    p.background(250);
    //平面の描画
    // p.translate(-240, -100, 0);
    p.normalMaterial();
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.plane(200);
    // p.pop();
  };
};

new p5(sketch);
