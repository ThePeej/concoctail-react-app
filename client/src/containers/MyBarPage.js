import React from 'react';
import DrinkCardGrid from '../containers/DrinkCardGrid'
import MyBarEssentials from '../containers/MyBarEssentials'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMyBar } from '../actions/drinks'
import { viewMyBar } from '../actions/site'


class MyBar extends React.Component {

  componentWillMount() {
    this.props.viewMyBar(true)
  }

  componentWillUnmount() {
    this.props.viewMyBar(false)
  }

  onLoadMyBar(allEssentials, missing) {
    this.props.loadMyBar(allEssentials, missing)
  }

  render() {
    let barEssentialsArray = []
    Object.keys(this.props.barEssentials).forEach(key => this.props.barEssentials[key].forEach(item => barEssentialsArray.push(item)))
    const missingEssentials = barEssentialsArray.filter(item => !this.props.myBar.includes(item)).sort().join(', ')
    return (
      <div className="row">
        <div className="center-align col s2">
          <MyBarEssentials />
        </div>
        <div className="center-align col s8">
          <h4>What can I make with:</h4>
          <button className="btn-small teal darken-1" onClick={() => this.onLoadMyBar(barEssentialsArray, missingEssentials)}>What can I make?</button>
          <hr/>
          {this.props.drinks !== [] ? <DrinkCardGrid drinks={this.props.drinks} /> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks.drinks,
    myBar: state.drinks.myBar,
    barEssentials: state.drinks.barEssentials
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadMyBar: loadMyBar,
    viewMyBar: viewMyBar
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBar)