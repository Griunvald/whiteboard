import React from 'react';
import Sketch from 'react-p5';
import { useSelector } from 'react-redux';

const CanvasLocal = (data) => {
  const currentColor = useSelector((state) => state.toolbar.color);
  const currentStrokeWeight = useSelector((state) => state.toolbar.size);

  const setup = (p, canvasParentRef) => {
    p.createCanvas(1000, 1000).parent(canvasParentRef);
    p.background('white');
  };

  const draw = (p) => {
    if (p.mouseIsPressed && (p.mouseX || p.mouseY) > 0) {
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
      p.stroke(currentColor + '');
      p.strokeWeight(currentStrokeWeight);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default CanvasLocal;
