import React from 'react';

import Sketch from 'react-p5';
import { addCanvasData, getCanvasData } from '../utils/firebaseService';

const Canvas = (data) => {
  const setup = (p, canvasParentRef) => {
    p.createCanvas(1500, 1500).parent(canvasParentRef);
  };

  const draw = (p) => {
    if (p.mouseIsPressed) {
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      p.stroke('red');
      p.strokeWeight(3);

      if ((p.pmouseX, p.pmouseY) !== (p.mouseX, p.mouseY)) {
        console.log(p.mouseX, p.mouseY);
      }

      //FIXME: Comment line below until it's done, use console.log() instead
      // addCanvasData(p.mouseX, p.mouseY);

      // getCanvasData(); // FIXME: move this function call out of mouseIsPressed
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
