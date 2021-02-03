import React from 'react';
import Canvas from './Canvas';
import CanvasLocal from './CanvasLocal';
import Toolbar from './Toolbar';
import { useSelector } from 'react-redux';

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  return (
    <div className="home-layout">
      <div className="left">
        <Toolbar />
      </div>
      <div className="right">
        {isAuthenticated ? <Canvas /> : <CanvasLocal />}
      </div>
    </div>
  );
};

export default Home;
