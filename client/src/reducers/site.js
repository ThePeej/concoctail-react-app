export default function drinks(state = {
  navbar: true,
  myBar: false
}, action) {

  switch (action.type) {
    case "NAVBAR":
      return Object.assign({}, state, { navbar: action.payload })
    case "VIEW_MYBAR":
      return Object.assign({}, state, { myBar: action.payload })
    default:
      return state
  }
}