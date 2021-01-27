import React from 'react';

import Sketch from 'react-p5';
import { AddCanvasData } from '../utils/firebaseService';

const Canvas = (data) => {
  const setup = (p, canvasParentRef) => {
    p.createCanvas(1500, 1500).parent(canvasParentRef);
  };

  const draw = (p) => {
    if (p.mouseIsPressed) {
      // p.point(30, 20);
      p.point(p.mouseX, p.mouseY);
      p.stroke('red'); // Change the color
      p.strokeWeight(10); // Make the points 10 pixels in size
      console.log(p.mouseX, p.mouseY);
      AddCanvasData(p.mouseX, p.mouseY);
      // TODO: Add point to db only if it doesn't exists
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
