import React from 'react';

export const DrinkTextCard = (props) => {
  const drink_url = `drinks/${props.drink.id}`
  return(
    <a href={drink_url}>
      <div className="col s12 l6 xl4 ">
        <div className="card blue-grey darken-2">
          <div className="card-content white-text center-align">
            <p><strong>{props.drink.name}</strong></p>
            <p>({props.drink.category})</p>
          </div>
        </div>
      </div>
    </a>
  )
}