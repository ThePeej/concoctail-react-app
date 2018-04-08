import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Drink } from '../components/Drink'
import { loadRandomDrink } from '../actions/drinks'



class DrinkRandom extends React.Component {
 
  componentWillMount(){
    this.props.loadRandomDrink()
  }

  handleOnClick = () => {
    this.props.loadRandomDrink()
  }

  render() {

    return (
      <div className="center-align">
        <h4>Feelin' Adventurous?</h4>
        <h6>Look up a random cocktail recipe and give it a shot!</h6><br/>
        <button className="waves-effect waves-light btn" onClick={this.handleOnClick}>Random Drink</button>
        <br /><br /><hr />
        <Drink drink={this.props.drink}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drink: state.drink
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadRandomDrink: loadRandomDrink
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(DrinkRandom)