import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

export default App;
