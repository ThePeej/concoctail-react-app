// import fetch from 'isomorphic-fetch';

export function loadRandomDrink() {
  const randomNum = Math.floor(Math.random() * Math.floor(250)) + 1
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_RANDOM_DRINK' });
    return fetch(`http://localhost:3001/recipes/${randomNum}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(drink => dispatch({ type: 'LOAD_DRINK', payload:drink }));
  };
}
