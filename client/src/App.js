import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import DrinkShow from './containers/DrinkShow'

class App extends Component {

  render() {
    return (
      <div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}

        
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="col s-12">
            <DrinkShow />
          </div>
        </div>

        
      </div>
    );
  }
}

export default App;
