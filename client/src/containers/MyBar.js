import React from 'react';
import { DrinkCardGrid } from '../components/DrinkCardGrid'


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadDrinks } from '../actions/drinks'
import { myBar } from '../actions/site'

class MyBar extends React.Component {

  componentWillMount() {
    this.props.myBar(true)
  }

  componentWillUnmount() {
    this.props.myBar(false)
  }

  componentDidMount() {
    this.props.loadDrinks()
  }

  render() {
    return (
      <div className="row">
        <div className="col s3">
          <h4>My Bar</h4>
        </div>
        <div className="center-align">
          <h4>Browse Cocktail Recipes</h4>
          <hr />
        </div>
        {this.props.drinks !== [] ? <DrinkCardGrid drinks={this.props.drinks} /> : null}
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
    loadDrinks: loadDrinks,
    myBar: myBar
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(MyBar)