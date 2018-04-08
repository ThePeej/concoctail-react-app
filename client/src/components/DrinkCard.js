import React from 'react';

export const DrinkCard = (props) => {

  const ingredients = props.drink.ingredients.map((ingredient, i) => {
    return <li key={i}>{ingredient.quantity} {ingredient.item.name}</li>
  })

  const drink_url = `/drinks/${props.drink.id}`

  return(
    <div className="col s2">
      <div className="card">
        <div className="card-image">
          <img src={props.drink.img_url} />
        </div>
        <div className="card-action">
          <p><a href={drink_url}>{props.drink.name}</a></p>
        </div>
      </div>
    </div>
  )
}