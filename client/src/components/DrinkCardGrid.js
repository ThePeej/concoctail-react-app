import React from 'react';
import { DrinkCard } from '../components/DrinkCard'
import { DrinkTextCard } from '../components/DrinkTextCard'

function compare(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

export const DrinkCardGrid = (props) => {
  const drinkTextCards = props.drinks.sort(compare).map((drink, i) => {
    return <DrinkTextCard key={i} drink={drink} />
  })

  return (
    <div className="col s12">
      {drinkTextCards}
    </div>
  )
}