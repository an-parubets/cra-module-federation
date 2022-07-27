import React, { Suspense } from 'react';
import logo from './logo.svg';
import RemoteModule from "./components/RemoteModule/RemoteModule";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Suspense fallback="...">
          <RemoteModule />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
