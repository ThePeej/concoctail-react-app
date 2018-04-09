export default function drinks(state = {
  landing: false,
}, action) {

  switch (action.type) {
    case "LANDING":
      return Object.assign({}, state, { landing: true })
    default:
      return state
  }
}