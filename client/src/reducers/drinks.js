export default function drinks(state = {
  drinks: [],
  drink: '',
  loading: false,
}, action) {

  switch(action.type){
    case "START_LOADING_DRINK":
      return Object.assign({}, state, {load: true})
    case "LOAD_DRINK":
      return Object.assign({}, state, {drink: action.payload})
    case "LOAD_ALL_DRINKS":
      console.log(action.payload)
      return Object.assign({}, state, { drinks: action.payload })
    default:
      return state
  }
}