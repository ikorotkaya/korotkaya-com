import React from 'react';
import './App.scss';

export default function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__navbar">
          <div className="navbar__logo">Irina Korotkaya</div>
          <div className="navbar__links">
            <a className='navbar__link' href="#about">about</a>
            <a className='navbar__link' href="#projects">projects</a>
            <a className='navbar__link' href="#contact">contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}
