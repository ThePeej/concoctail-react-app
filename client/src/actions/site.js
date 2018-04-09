export function navbar(boolean){
  return (dispatch) => {
    dispatch({ type: "NAVBAR", payload: boolean })
  }
}

export function myBar(boolean) {
  return (dispatch) => {
    dispatch({ type: "MYBAR", payload: boolean })
  }
}