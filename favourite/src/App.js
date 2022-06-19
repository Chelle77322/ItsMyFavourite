import logo from './logo.svg';
import './App.css';
import * as React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Its My Favourite
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Monkey Shoulder
        </a>
      </header>
    </div>
  );
}

export default App;
