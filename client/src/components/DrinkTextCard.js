import React from 'react';

export const DrinkTextCard = (props) => {
  return(
      <div className="col s12 l6 xl4 ">
        <div className="card blue-grey lighten-5">
          <div className="card-content white-text">
            <a href="#"><strong>{props.drink.name}</strong> ({props.drink.category})</a>
          </div>
        </div>
      </div>
  )
}