import React from 'react';

export const DrinkImageCard = (props) => {

  const drink_url = `/drinks/${props.drink.id}`

  return(
    <div className="col s3">
      <div className="card">
        <a href={drink_url}>
          <span>
            <img className="responsive-img" src={props.drink.img_url} href={drink_url} alt={props.drink.name}/>
          </span>
        </a>
      </div>
    </div>
  )
}