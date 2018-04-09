import React from 'react';
import DrinkCardGrid from '../containers/DrinkCardGrid'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadDrinks } from '../actions/drinks'
import { loadMyBar } from '../actions/drinks'
import { myBarSelector } from '../actions/drinks'
import { viewMyBar } from '../actions/site'

import { MyBarSelector } from '../components/MyBarSelector'

const barEssentials = {
  liquors: 
  [
    "Gin",
    "Dark Rum",
    "Light Rum",
    "Tequila",
    "Brandy",
    "Bourbon",
    "Rye Whiskey",
    "Vodka"
  ],
  liqueurs: 
  [
    "Sweet Vermouth",
    "Dry Vermouth",
    "Amaretto",
    "Coffee Liqueur",
    "Orange Liqueur"
  ],
  mixersGarnishes: 
  [
    "Club Soda",
    "Tonic",
    "Ginger ale",
    "Bitters"
  ]
}


class MyBar extends React.Component {

  componentWillMount() {
    this.props.viewMyBar(true)
  }

  componentWillUnmount() {
    this.props.viewMyBar(false)
  }

  onLoadAll() {
    this.props.loadDrinks()
  }

  onFilter(selector) {
    this.props.loadMyBar(selector)
  }

  generateFilters(item, i, filters){
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
    const barEssentialLiquors = barEssentials.liquors.map((item, i) => this.generateFilters(item, i, filters))
    const barEssentialLiqueurs = barEssentials.liqueurs.map((item, i) => this.generateFilters(item, i, filters))
    const barEssentialMixersGarnishes = barEssentials.mixersGarnishes.map((item, i) => this.generateFilters(item, i, filters))
    return (
      <div className="row">
        <div className="center-align col s2">
          <h4>Bar Essentials</h4>
          <br />
          <p><strong>Liquors:</strong></p>
          {barEssentialLiquors}
          <br/><br/>
          <p><strong>Liqueurs:</strong></p>
          {barEssentialLiqueurs}
          <br /><br/>
          <p><strong>Mixers & Garnishes:</strong></p>
          {barEssentialMixersGarnishes}
          <br /><br/><br /><br />
          <button onClick={() => this.onLoadAll()}>Reset My Bar</button><br /><br />
          {/* <button onClick={() => this.onLoadAll()}>Load All Recipes</button> */}
        </div>
        <div className="center-align col s8">
          <h4>My Bar</h4>
          <strong>{this.props.myBar.sort().join(", ")}</strong>
          <hr />
          {this.props.drinks !== [] ? <DrinkCardGrid drinks={this.props.drinks} /> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks.drinks,
    myBar: state.drinks.myBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadDrinks: loadDrinks,
    loadMyBar: loadMyBar,
    myBarSelector: myBarSelector,
    viewMyBar: viewMyBar
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(MyBar)