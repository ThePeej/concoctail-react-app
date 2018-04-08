import React from 'react';
import { DrinkCard } from '../components/DrinkCard'

function compare(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

export const DrinkCardGrid = (props) => {
  const drinkCards = props.drinks.sort(compare).map((drink, i) => {
    return <DrinkCard key={i} drink={drink} />
  })

  return (
    <div className="col s12">
      {drinkCards}
    </div>
  )
}