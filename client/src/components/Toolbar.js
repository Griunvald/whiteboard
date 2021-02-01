import React from 'react';
import { Icon, Item } from 'semantic-ui-react';
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
      <Item.Group link>
        <Item
          className="toolbar-item"
          onClick={() => dispatch(selectColor('black'))}
        >
          <Item.Content>
            <Icon name="pencil alternate" size="big" fitted />
          </Item.Content>
        </Item>

        <Item
          className="toolbar-item"
          onClick={() => dispatch(selectColor('white'))}
        >
          <Item.Content>
            <Icon name="eraser" size="big" fitted />
          </Item.Content>
        </Item>

        <Item className="toolbar-item" onClick={() => dispatch(selectSize(1))}>
          <Item.Content>
            <Icon name="square full" size="mini" fitted />
          </Item.Content>
        </Item>

        <Item className="toolbar-item" onClick={() => dispatch(selectSize(2))}>
          <Item.Content>
            <Icon name="square full" size="tiny" fitted />
          </Item.Content>
        </Item>

        <Item className="toolbar-item" onClick={() => dispatch(selectSize(3))}>
          <Item.Content>
            <Icon name="square full" size="small" fitted />
          </Item.Content>
        </Item>

        <Item
          className="toolbar-item"
          onClick={() => dispatch(selectColor('black'))}
        >
          <Item.Content>
            <Icon name="circle" size="big" fitted color="black" />
          </Item.Content>
        </Item>

        <Item
          className="toolbar-item"
          onClick={() => dispatch(selectColor('red'))}
        >
          <Item.Content>
            <Icon name="circle" size="big" fitted color="red" />
          </Item.Content>
        </Item>

        <Item
          className="toolbar-item"
          onClick={() => dispatch(selectColor('green'))}
        >
          <Item.Content>
            <Icon name="circle" size="big" fitted color="green" />
          </Item.Content>
        </Item>

        <Item
          className="toolbar-item"
          onClick={() => dispatch(selectColor('blue'))}
        >
          <Item.Content>
            <Icon name="circle" size="big" fitted color="blue" />
          </Item.Content>
        </Item>

        <Item
          className="toolbar-item"
          onClick={() => dispatch(selectColor('orange'))}
        >
          <Item.Content>
            <Icon name="circle" size="big" fitted color="orange" />
          </Item.Content>
        </Item>
        <Item
          className="toolbar-item"
          onClick={() => dispatch(selectColor('hotpink'))}
        >
          <Item.Content>
            <Icon name="circle" size="big" fitted color="pink" />
          </Item.Content>
        </Item>
        <Item className="toolbar-item" onClick={clearCanvas}>
          <Item.Content>
            <Icon name="trash" size="big" fitted color="black" />
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};

export default Toolbar;
