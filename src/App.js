import React from 'react';
import logo from './logo.svg';
import './App.css';

const myProps = {
  style: { marginTop: '5rem' },
  background: '#fefefe'
  
}

function App() {
  return (
    <div {...myProps} >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code></code> Aprendiendo React
        </p>

      </header>
    </div>
  );
}

export default App;
