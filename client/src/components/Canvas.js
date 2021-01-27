import React from 'react';

import Sketch from 'react-p5';
import { addCanvasData, getCanvasData } from '../utils/firebaseService';

const Canvas = (data) => {
  const setup = (p, canvasParentRef) => {
    p.createCanvas(1500, 1500).parent(canvasParentRef);
  };

  const draw = (p) => {
    if (p.mouseIsPressed) {
      p.point(p.mouseX, p.mouseY);
      p.stroke('red'); // Change the color
      p.strokeWeight(10); // Make the points 10 pixels in size

      if ((p.pmouseX, p.pmouseY) !== (p.mouseX, p.mouseY)) {
        console.log(p.mouseX, p.mouseY); //FIXME: Works only with first dot and strokes
      }

      // console.log(p.mouseX, p.mouseY);
      //FIXME: Comment line below until it;s done, use console.log() instead
      // addCanvasData(p.mouseX, p.mouseY);
      // TODO: Add point to db only if it doesn't exists
      // getCanvasData(); // FIXME: move this function call out of mouseIsPressed
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
