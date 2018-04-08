import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import DrinkShow from './containers/DrinkShow'
import DrinkRandom from './containers/DrinkRandom'
import DrinkIndex from './containers/DrinkIndex'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="blue-grey darken-4">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Concoctail</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">My Bar</a></li>
                <li><a href="badges.html">All Recipes</a></li>
                <li><a href="/drinks/random">Feelin' Adventurous</a></li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="col s-12">
              <Route exact path="/drinks/random" component={DrinkRandom} />
              {/* <DrinkIndex /> */}
            </div>
          </div>

          
        </div>
      </Router>
    );
  }
}

export default App;
