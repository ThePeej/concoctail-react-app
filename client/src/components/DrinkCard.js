import React from 'react';

export const DrinkCard = (props) => {

  const ingredients = props.drink.ingredients.map((ingredient, i) => {
    return <li key={i}>{ingredient.quantity} {ingredient.item.name}</li>
  })

  return(
    <div className="card col s4">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={props.drink.img_url} />
       </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{props.drink.name}</span>
        <p><a href="#">See Full Recipe</a></p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{props.drink.name}</span>
        <ul>{ingredients}</ul>
      </div>
    </div>
  )
}