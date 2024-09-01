import { useState } from 'react'
import './App.css'
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import About from './components/About/About';
import Skill from './components/Skills/Skill';
import Project from './components/My Projects/Project';
function App() {

  return (
    <>
      <Header/>
      <Profile/>
      <About/>
      <Skill/>
      <Project/>
    </>
   
  );
}

export default App
