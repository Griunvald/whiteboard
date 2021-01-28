import React from 'react';
import firebase from '../config/firebase';
import Sketch from 'react-p5';

const database = firebase.database();

const Canvas = (data) => {
  const setup = (p, canvasParentRef) => {
    p.createCanvas(1500, 1500).parent(canvasParentRef);

    database.ref('draw').on('child_added', function (data) {
      p.line(
        data.val().pmouseX,
        data.val().pmouseY,
        data.val().mouseX,
        data.val().mouseY
      );
    });
  };

  const draw = (p) => {
    if (p.mouseIsPressed && (p.mouseX || p.mouseY) > 0) {
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
      database.ref('draw').push({
        pmouseX: p.pmouseX,
        pmouseY: p.pmouseY,
        mouseX: p.mouseX,
        mouseY: p.mouseY,
      });
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
