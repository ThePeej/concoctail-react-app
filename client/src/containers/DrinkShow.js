import React from 'react';
import { Drink } from '../components/Drink'



const loadDrink = {
  id: 1,
  name: "'57 Chevy with a White License Plate",
  category: "Cocktail",
  glass: "Highball glass",
  img_url: "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
  instructions: "1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir",
  ingredients: [
    {
      id: 1,
      quantity: "1 oz white ",
      item: {
        id: 1,
        name: "Creme de Cacao",
        created_at: "2018-04-07T15:12:29.890Z",
        updated_at: "2018-04-07T15:12:29.890Z"
      }
    },
    {
      id: 2,
      quantity: "1 oz ",
      item: {
        id: 2,
        name: "Vodka",
        created_at: "2018-04-07T15:12:30.100Z",
        updated_at: "2018-04-07T15:12:30.100Z"
      }
    }
  ]
}

export default class DrinkShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      number: 1,
    }
  }

  handleOnClick = () => {
    this.setState({
      number: Math.floor(Math.random() * Math.floor(250)) + 1
    })
  }

  render() {

    return (
      <div>
        <h1>Drink Show Component</h1>
        <p>Will display all info of a drink</p>
        <button onClick={this.handleOnClick}>Load New Drink</button>
        <hr/>
        <Drink number={this.state.number} drink={loadDrink}/>
      </div>
    )
  }
}