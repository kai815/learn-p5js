import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(710, 400, p.WEBGL);
  };

  p.draw = () => {
    p.background(250);
    const red =p.color(255, 0, 0);
    const green =p.color(0, 255, 0);
    const blue =p.color(0, 0, 255);
    const yellow =p.color(255, 255, 0);
    const pink =p.color(255, 0, 255);
    const purple =p.color(120, 0, 120);
    //楕円
    p.translate(-240, -100, 0);
    p.normalMaterial();
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.fill(red);
    p.ellipsoid(30, 40, 40);
    p.pop();

    //立方体
    p.translate(240, 0, 0);
    p.fill(green);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.box(70, 70, 70);
    p.pop();

    //円柱
    p.translate(240, 0, 0);
    p.fill(blue);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.cylinder(70, 70);
    p.pop();

    //円錐
    p.translate(-240 * 2, 200, 0);
    p.fill(purple);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.cone(70, 70);
    p.pop();

    //ドーナッツ
    p.translate(240, 0, 0);
    p.fill(yellow);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.torus(70, 20);
    p.pop();
    //球体
    p.translate(240, 0, 0);
    p.fill(pink);
    p.push();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.sphere(70);
    p.pop();
  };

};

new p5(sketch);
