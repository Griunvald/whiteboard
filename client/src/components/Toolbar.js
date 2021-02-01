import React from 'react';
import { Icon } from 'semantic-ui-react';
import firebase from '../config/firebase';
import { selectColor, selectSize } from '../actions/toolbarActions';
import { useDispatch } from 'react-redux';
const database = firebase.database();

const Toolbar = () => {
  const dispatch = useDispatch();
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
      <div
        className="toolbar-item"
        onClick={() => dispatch(selectColor('black'))}
      >
        <Icon name="pencil alternate" size="big" fitted />
      </div>
      <div
        className="toolbar-item"
        onClick={() => dispatch(selectColor('white'))}
      >
        <Icon name="eraser" size="big" fitted />
      </div>
      <div className="toolbar-item" onClick={() => dispatch(selectSize(2))}>
        <Icon name="square full" size="mini" fitted />
      </div>
      <div className="toolbar-item" onClick={() => dispatch(selectSize(3))}>
        <Icon name="square full" size="tiny" fitted />
      </div>
      <div className="toolbar-item" onClick={() => dispatch(selectSize(4))}>
        <Icon name="square full" size="small" fitted />
      </div>
      <div
        className="toolbar-item"
        onClick={() => dispatch(selectColor('black'))}
      >
        <Icon name="circle" size="big" fitted color="black" />
      </div>
      <div
        className="toolbar-item"
        onClick={() => dispatch(selectColor('red'))}
      >
        <Icon name="circle" size="big" fitted color="red" />
      </div>
      <div
        className="toolbar-item"
        onClick={() => dispatch(selectColor('green'))}
      >
        <Icon name="circle" size="big" fitted color="green" />
      </div>
      <div
        className="toolbar-item"
        onClick={() => dispatch(selectColor('blue'))}
      >
        <Icon name="circle" size="big" fitted color="blue" />
      </div>
      <div
        className="toolbar-item"
        onClick={() => dispatch(selectColor('orange'))}
      >
        <Icon name="circle" size="big" fitted color="orange" />
      </div>
      <div
        className="toolbar-item"
        onClick={() => dispatch(selectColor('hotpink'))}
      >
        <Icon name="circle" size="big" fitted color="pink" />
      </div>
      <div className="toolbar-item trash" onClick={clearCanvas}>
        <Icon name="trash" size="big" fitted color="black" />
      </div>
    </div>
  );
};

export default Toolbar;
