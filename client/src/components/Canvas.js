import React from 'react';

import Sketch from 'react-p5';

const Canvas = (props) => {
  const setup = (p, canvasParentRef) => {
    p.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p) => {
    if (p.mouseIsPressed) {
      // p.point(30, 20);
      p.point(p.mouseX, p.mouseY);
      p.stroke('red'); // Change the color
      p.strokeWeight(10); // Make the points 10 pixels in size
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
