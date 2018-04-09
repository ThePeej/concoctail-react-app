import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Drink } from '../components/Drink'
import { loadRandomDrink } from '../actions/drinks'
import { unloadDrink } from '../actions/drinks'

class DrinkRandom extends React.Component {
 
  handleOnClick = () => {
    this.props.loadRandomDrink()
  }

  componentWillUnmount() {
    this.props.unloadDrink()
  }

  render() {
    return (
      <div className="center-align">
        <h5>Feeling Adventurous?</h5>
        <h6>Look up a random cocktail recipe and give it a shot!</h6><br/>
        <button className="waves-effect waves-light btn" onClick={this.handleOnClick}>Random Drink</button>
        <br /><br /><hr />
        {this.props.drink !== '' ? <Drink drink={this.props.drink} /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drink: state.drinks.drink
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadRandomDrink: loadRandomDrink,
    unloadDrink: unloadDrink
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkRandom)