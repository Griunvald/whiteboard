import React from 'react';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Route path="/" exact component={Home} />
    </>
  );
};

export default App;
