export default function drinks(state = {
  navbar: true,
}, action) {

  switch (action.type) {
    case "NAVBAR_ON":
      return Object.assign({}, state, { navbar: true })
    case "NAVBAR_OFF":
      return Object.assign({}, state, { navbar: false })
    default:
      return state
  }
}