import React from 'react';
import firebase from '../config/firebase';
import Sketch from 'react-p5';
import { useSelector } from 'react-redux';

const database = firebase.database();

const Canvas = (data) => {
  const currentColor = useSelector((state) => state.toolbar.color);
  const currentStrokeWeight = useSelector((state) => state.toolbar.size);
  console.log(currentColor);
  const setup = (p, canvasParentRef) => {
    p.createCanvas(1000, 1000).parent(canvasParentRef);

    database.ref('draw').on('child_added', function (data) {
      p.line(
        data.val().pmouseX,
        data.val().pmouseY,
        data.val().mouseX,
        data.val().mouseY
      );
      p.stroke(data.val().stroke);
      p.strokeWeight(data.val().strokeWeight);
    });

    database.ref('draw').on('child_removed', function (data) {
      p.background('white');
    });
  };

  const draw = (p) => {
    if (p.mouseIsPressed && (p.mouseX || p.mouseY) > 0) {
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
      p.stroke(currentColor + '');
      p.strokeWeight(currentStrokeWeight);
      database.ref('draw').push({
        pmouseX: p.pmouseX,
        pmouseY: p.pmouseY,
        mouseX: p.mouseX,
        mouseY: p.mouseY,
        stroke: currentColor + '',
        strokeWeight: currentStrokeWeight,
      });
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
