import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import DrinkShow from './containers/DrinkShow'
import DrinkRandom from './containers/DrinkRandom'
import DrinksIndex from './containers/DrinksIndex'
import { Navbar } from './components/Navbar'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <div className="col s-12">
              <Route exact path="/drinks/random" component={DrinkRandom} />
              <Route exact path="/drinks" component={DrinksIndex} />
            </div>
          </div>

          
        </div>
      </Router>
    );
  }
}

export default App;
