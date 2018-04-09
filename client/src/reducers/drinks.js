export default function drinks(state = {
  drinks: [],
  drink: '',
  loading: false,
}, action) {

  switch(action.type){
    case "START_LOADING_DRINK":
      return Object.assign({}, state, {loading: true})
    case "LOAD_DRINK":
      console.log(action)
      return Object.assign({}, state, {drink: action.payload, loading: false})
    case "LOAD_ALL_DRINKS":
      console.log(action.payload)
      return Object.assign({}, state, { drinks: action.payload, loading: false })
    default:
      return state
  }
}