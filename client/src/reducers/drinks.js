const initialDrink = {id: 1,name: "'57 Chevy with a White License Plate",category: "Cocktail",glass: "Highball glass",img_url: "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",instructions: "1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir",ingredients: [{id: 1,quantity: "1 oz white ",item: {id: 1,name: "Creme de Cacao",created_at: "2018-04-07T15:12:29.890Z",updated_at: "2018-04-07T15:12:29.890Z"}},{id: 2,quantity: "1 oz ",item: {id: 2,name: "Vodka",created_at: "2018-04-07T15:12:30.100Z",updated_at: "2018-04-07T15:12:30.100Z"}}]}

export default function drinks(state = {
  drinks: [],
  drink: initialDrink,
  loading: false,
}, action) {

  switch(action.type){
    case "START_LOADING_DRINK":
      return Object.assign({}, state, {load: true})
    case "LOAD_DRINK":
      let drink = action.payload
      return Object.assign({}, state, {drink: action.payload})
    default:
      return state
  }
}