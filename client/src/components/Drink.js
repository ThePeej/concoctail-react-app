import React from 'react';

export const Drink = (props) => {

  const ingredients = props.drink.ingredients.map((ingredient, i) => {
    return <li key={i}>{ingredient.quantity} {ingredient.item.name}</li>
  })

  return (
    <div>
      <h3>Random Drink {props.number}</h3>
      <h2>{props.drink.name}</h2>
      <p>{props.drink.category} - <em>({props.drink.glass})</em></p>
      <strong>Ingredients:</strong>
      <ul>{ingredients}</ul>
      <strong>Instructions:</strong>
      <p>{props.drink.instructions}</p>

      <img src={props.drink.img_url} />
    </div>
  )
}