import React from 'react';
import Canvas from './Canvas';
import Toolbar from './Toolbar';

const Home = () => {
  return (
    <div className="home-layout">
      <div className="left">
        <Toolbar />
      </div>
      <div className="right">
        <Canvas />
      </div>
    </div>
  );
};

export default Home;
