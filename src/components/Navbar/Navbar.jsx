import React from 'react';
import logo from './dribbble_logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <header id="navbar-header">
      <h2 className="logo" alt="logo">
        <img src={logo} className="App-logo" alt="dribbble-logo" />
      </h2>
    </header>
  );
}
