import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DrinkCardGrid from '../containers/DrinkCardGrid'
import { loadDrinks } from '../actions/drinks'

class DrinksIndex extends React.Component {

  componentDidMount(){
    this.props.loadDrinks() 
  }
  
  render() {
    return (
      <div className="row">
        <div className="center-align">
          <h4>Browse Cocktail Recipes</h4>
          <hr />
        </div>
        {this.props.drinks !== [] ? <DrinkCardGrid/> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks.drinks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadDrinks: loadDrinks
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksIndex)