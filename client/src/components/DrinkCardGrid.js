import React from 'react';
import { DrinkCard } from '../components/DrinkCard'

export const DrinkCardGrid = (props) => {
  const drinkCards = props.drinks.map((drink, i) => {
    return <DrinkCard key={i} drink={drink} />
  })

  return (
    <div>
      {drinkCards}
    </div>
  )
}