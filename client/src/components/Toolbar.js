import React from 'react';
import { Icon } from 'semantic-ui-react';
import firebase from '../config/firebase';
const database = firebase.database();

const Toolbar = () => {
  const clearCanvas = () => {
    database
      .ref('draw')
      .remove()
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
  };

  return (
    <div className="toolbar-container">
      <div className="toolbar-item">
        <Icon name="pencil alternate" size="big" fitted />
      </div>
      <div className="toolbar-item">
        <Icon name="eraser" size="big" fitted />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" size="big" fitted color="black" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" size="big" fitted color="red" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" size="big" fitted color="green" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" size="big" fitted color="blue" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" size="big" fitted color="orange" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" size="big" fitted color="pink" />
      </div>
      <div className="toolbar-item trash">
        <Icon
          name="trash"
          size="big"
          fitted
          color="black"
          onClick={clearCanvas}
        />
      </div>
    </div>
  );
};

export default Toolbar;
