export default function drinks(state = {
  navbar: true,
  mybar: false
}, action) {

  switch (action.type) {
    case "NAVBAR":
      return Object.assign({}, state, { navbar: action.payload })
    case "MYBAR":
      return Object.assign({}, state, { mybar: action.payload })
    default:
      return state
  }
}