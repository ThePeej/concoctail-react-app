// import fetch from 'isomorphic-fetch';

export function loadRandomDrink() {
  const randomNum = Math.floor(Math.random() * Math.floor(250)) + 1
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_DRINK' });
    return fetch(`http://localhost:3001/recipes/${randomNum}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(drink => dispatch({ type: 'LOAD_DRINK', payload:drink }));
  };
}

export function loadDrink(id) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_DRINK' });
    return fetch(`http://localhost:3001/recipes/${id}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(drink => dispatch({ type: 'LOAD_DRINK', payload: drink }));
  };
}

export function loadDrinks() {
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_DRINK' });
    return fetch(`http://localhost:3001/recipes`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(drinks => dispatch({ type: 'LOAD_ALL_DRINKS', payload: drinks }));
  };
}


export function loadMyBar(selector){
  return (dispatch) => {
    dispatch({ type: 'MYBAR_SELECTOR', payload: selector });
  };
}

export function myBarSelector(selector){
  return (dispatch) => {
    dispatch({ type: 'MYBAR_SELECTOR', payload: selector });
  };
}