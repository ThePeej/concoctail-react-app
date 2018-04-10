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


export function loadMyBar(barEssentials, missingEssentials){
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_DRINK' });
    return fetch(`http://localhost:3001/recipes`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(drinks => {
        let myDrinks = [] 
        drinks.forEach(drink =>{
          let checkNoMissingEssentials = true;
          let checkAnyBarEssentials = false;
          for(let i = 0; i < drink.ingredients.length; i++){
            if (missingEssentials.includes(drink.ingredients[i].item.name)) { //Checks if drink ingredient uses a bar essential that user does not have
              checkNoMissingEssentials = false //if so, returns false
            }
            if (barEssentials.includes(drink.ingredients[i].item.name)) { //Checks to see that drink uses any bar essentials at all
              checkAnyBarEssentials = true //if so, returns true
            }
          }
          if (checkNoMissingEssentials && checkAnyBarEssentials) { //if drink uses a bar essential, and the user has all the required essentials
            myDrinks.push(drink) // push drink to drinks array to be returned
          }
        })
        dispatch({ type: 'LOAD_ALL_DRINKS', payload: myDrinks })
      });
  };
}

export function myBarSelector(selector){
  return (dispatch) => {
    dispatch({ type: 'MYBAR_SELECTOR', payload: selector });
  };
}

export function resetMyBar() {
  return (dispatch) => {
    dispatch({ type: 'RESET_MYBAR'});
  };
}

export function unloadDrink() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_DRINK', payload: '' });
  };
}

export function unloadDrinks() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_ALL_DRINKS', payload: [] });
  };
}