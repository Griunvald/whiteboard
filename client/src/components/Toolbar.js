import React from 'react';
import { Icon } from 'semantic-ui-react';

const Toolbar = () => {
  return (
    <div className="toolbar-container">
      <div className="toolbar-item">
        <Icon name="pencil alternate" size="big" fitted color="white" />
      </div>
      <div className="toolbar-item">
        <Icon name="eraser" size="big" fitted color="white" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" red size="big" fitted color="black" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" red size="big" fitted color="red" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" red size="big" fitted color="green" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" red size="big" fitted color="blue" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" red size="big" fitted color="orange" />
      </div>
      <div className="toolbar-item">
        <Icon name="circle" red size="big" fitted color="pink" />
      </div>
      <div className="toolbar-item">
        <Icon name="trash" red size="big" fitted color="black" />
      </div>
    </div>
  );
};

export default Toolbar;
