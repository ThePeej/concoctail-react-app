export function navbar(boolean){
  return (dispatch) => {
    dispatch({ type: "NAVBAR", payload: boolean })
  }
}

export function viewMyBar(boolean) {
  return (dispatch) => {
    dispatch({ type: "VIEW_MYBAR", payload: boolean })
  }
}