import React from 'react';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';
import Home from './Home';
import ModalManager from './modal/ModalManager';

const App = () => {
  return (
    <>
      <ModalManager />
      <Navbar />
      <Route path="/" exact component={Home} />
    </>
  );
};

export default App;
