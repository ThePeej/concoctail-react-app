export function navbarOn(){
  return (dispatch) => {
    dispatch({ type: "NAVBAR_ON" })
  }
}

export function navbarOff() {
  return (dispatch) => {
    dispatch({ type: "NAVBAR_OFF" })
  }
}