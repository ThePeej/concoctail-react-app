export default function drinks(state = {
  drinks: [],
  drink: '',
  myBar:[],
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
    case "MYBAR_SELECTOR":
      let myBar = [...state.myBar]
      if (state.myBar.includes(action.payload)) {
        myBar = state.myBar.filter(item => item !== action.payload)
      } else {
        myBar.push(action.payload)
      }
      return Object.assign({}, state, {myBar: myBar})
    default:
      return state
  }
}