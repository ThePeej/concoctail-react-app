import React from 'react';

export const DrinkImageCard = (props) => {

  const ingredients = props.drink.ingredients.map((ingredient, i) => {
    return <li key={i}>{ingredient.quantity} {ingredient.item.name}</li>
  })

  const drink_url = `/drinks/${props.drink.id}`

  return(
    <div className="col s3">
      <div className="card">
        <a href={drink_url}>
          <span>
            <img className="responsive-img" src={props.drink.img_url} href={drink_url}/>
          </span>
        </a>
      </div>
    </div>
  )
}