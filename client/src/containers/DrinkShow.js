import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Drink } from '../components/Drink'
import { loadRandomDrink } from '../actions/drinks'



class DrinkShow extends React.Component {
 
  handleOnClick = () => {
    this.props.loadRandomDrink()
  }

  render() {

    return (
      <div>
        <h1>Drink Show Component</h1>
        <p>Will display all info of a drink</p>
        <button className="waves-effect waves-blue-grey btn-flat" onClick={this.handleOnClick}>Random Drink</button>
        <hr/>
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


export default connect(mapStateToProps, mapDispatchToProps)(DrinkShow)