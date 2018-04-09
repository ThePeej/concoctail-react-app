import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { myBarSelector } from '../actions/drinks'
import { loadMyBar } from '../actions/drinks'

import { MyBarSelector } from '../components/MyBarSelector'

class MyBarEssentials extends React.Component {

  onFilter(selector) {
    this.props.myBarSelector(selector)
    // this.props.loadMyBar(this.props.myBar)
  }

  generateFilters(item, i, filters) {
    let selected = filters.includes(item) ? true : false
    return (
      <MyBarSelector
        key={i}
        selected={selected}
        selector={item}
        onClick={this.onFilter.bind(this)}
      />
    )
  }

  render() {
    const filters = this.props.myBar
    const barEssentialLiquors = this.props.barEssentials.liquors.map((item, i) => this.generateFilters(item, i, filters))
    const barEssentialLiqueurs = this.props.barEssentials.liqueurs.map((item, i) => this.generateFilters(item, i, filters))
    const barEssentialMixersGarnishes = this.props.barEssentials.mixersGarnishes.map((item, i) => this.generateFilters(item, i, filters))
    return (
      <div className="center-align">
        <h4>Bar Essentials</h4>
        <br />
        <p><strong>Liquors:</strong></p>
        {barEssentialLiquors}
        <br /><br />
        <p><strong>Liqueurs:</strong></p>
        {barEssentialLiqueurs}
        <br /><br />
        <p><strong>Mixers & Garnishes:</strong></p>
        {barEssentialMixersGarnishes}
        <br /><br /><br /><br />
        <button onClick={() => this.onLoadAll()}>Reset My Bar</button><br /><br />
        {/* <button onClick={() => this.onLoadAll()}>Load All Recipes</button> */}
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
    myBarSelector: myBarSelector,
    loadMyBar: loadMyBar
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(MyBarEssentials)