import React from 'react';
import { Icon } from 'semantic-ui-react';
import firebase from '../config/firebase';
import { selectColor } from '../actions/toolbarActions';
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
      <div className="toolbar-item">
        <Icon
          name="pencil alternate"
          size="big"
          fitted
          onClick={() => dispatch(selectColor('BLACK'))}
        />
      </div>
      <div className="toolbar-item">
        <Icon
          name="eraser"
          size="big"
          fitted
          onClick={() => dispatch(selectColor('WHITE'))}
        />
      </div>
      <div className="toolbar-item">
        <Icon
          name="circle"
          size="big"
          fitted
          color="black"
          onClick={() => dispatch(selectColor('BLACK'))}
        />
      </div>
      <div className="toolbar-item">
        <Icon
          name="circle"
          size="big"
          fitted
          color="red"
          onClick={() => dispatch(selectColor('RED'))}
        />
      </div>
      <div className="toolbar-item">
        <Icon
          name="circle"
          size="big"
          fitted
          color="green"
          onClick={() => dispatch(selectColor('GREEN'))}
        />
      </div>
      <div className="toolbar-item">
        <Icon
          name="circle"
          size="big"
          fitted
          color="blue"
          onClick={() => dispatch(selectColor('BLUE'))}
        />
      </div>
      <div className="toolbar-item">
        <Icon
          name="circle"
          size="big"
          fitted
          color="orange"
          onClick={() => dispatch(selectColor('ORANGE'))}
        />
      </div>
      <div className="toolbar-item">
        <Icon
          name="circle"
          size="big"
          fitted
          color="pink"
          onClick={() => dispatch(selectColor('PINK'))}
        />
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
