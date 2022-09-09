/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';
import About from './components/AboutRIP/About';
import Header from './components/header/Header';
import Menu from './components/Menu/Menu';
import MostWanted from './components/MostWanted/MostWanted';

import "./style/Global.css"

const App =() =>{
  return (
    <> 
      <Header/>
      <Menu/>
      <MostWanted/>
      <About/>
    </>
  );
}
export default App;
