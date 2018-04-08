import React from 'react';
import { DrinkCardGrid } from '../components/DrinkCardGrid'



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

// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({ type: 'START_ADDING_CATS_REQUEST' });
//     return fetch('http://www.catapi.com')
//       .then(response => response.json())
//       .then(cats => dispatch({ type: 'ADD_CATS', cats }));
//   };
// }

export default class DrinkShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drinks: [],
    }
  }

  loadDrinkCards = () => {
    fetch(`http://localhost:3001/recipes/`, {
      accept: 'application/json',
    }).then(response => response.json()).then(data => {
            this.setState({
        drinks: data
      })
      // console.log(this.state.drinks)
    });
  }

  handleOnClick = () => {
    return this.loadDrinkCards()
  }

  componentDidMount(){
    this.loadDrinkCards() 
  }
  
  render() {
    return (
      <div className="row">
        <h1>Drink Index Component</h1>
        <p>Will display drink cards</p>
        <button className="waves-effect waves-blue-grey btn-flat" onClick={this.handleOnClick}>Load All Drink</button>
        <hr /><br />
        <DrinkCardGrid drinks={this.state.drinks} />
      </div>
    )
  }
}