export default function drinks(state = {
  drinks: [],
  drink: '',
  myBar:[],
  loading: false,
  barEssentials: { liquors: ["Gin", "Dark Rum", "Light Rum", "Tequila", "Brandy", "Bourbon", "Rye Whiskey", "Vodka"], liqueurs: ["Sweet Vermouth", "Dry Vermouth", "Amaretto", "Coffee Liqueur", "Orange Liqueur"], mixersGarnishes: ["Club Soda", "Tonic", "Ginger Ale", "Bitters"]},
}, action) {

  switch(action.type){
    case "START_LOADING_DRINK":
      return Object.assign({}, state, {loading: true})
    case "LOAD_DRINK":
      return Object.assign({}, state, {drink: action.payload, loading: false})
    case "LOAD_ALL_DRINKS":
      return Object.assign({}, state, { drinks: action.payload, loading: false })
    case "MYBAR_SELECTOR":
      let myBar = [...state.myBar]
      if (state.myBar.includes(action.payload)) {
        myBar = state.myBar.filter(item => item !== action.payload)
      } else {
        myBar.push(action.payload)
      }
      return Object.assign({}, state, {myBar: myBar})
    case "RESET_MYBAR":
      return Object.assign({}, state, {drinks: [], myBar: []})
    default:
      return state
  }
}