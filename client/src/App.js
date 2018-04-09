import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import MyBarPage from './containers/MyBarPage'
import DrinkShow from './containers/DrinkShow'
import DrinkRandom from './containers/DrinkRandom'
import DrinksIndex from './containers/DrinksIndex'
import Landing from './containers/Landing'

import { Navbar } from './components/Navbar'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {this.props.site.navbar ? <Navbar /> : null}
          <div className={this.props.site.myBar ? "" : "container"}>
            <div className="col s-12">
            <Switch>
              <Route exact path ="/" component={Landing} />
              <Route exact path ='/mybar' component={MyBarPage} />
              <Route exact path="/drinks" component={DrinksIndex} />
              <Route exact path="/drinks/random" component={DrinkRandom} />
              <Route exact path='/drinks/:id' component={DrinkShow} />
            </Switch>              
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}


export default connect(mapStateToProps)(App)
