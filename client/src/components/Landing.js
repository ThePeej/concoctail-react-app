import React from 'react'
import shaker from '../shaker.png'


export const Landing = () => {
  return(
    <div className="center-align">
      <br/><br/>
      <h5>Welcome to</h5>
      <h1><strong>Concoctail</strong></h1>
      <a href="/mybar">
        <span>
          <img src={shaker} alt="Cocktail Shaker" height="300"/><br/><br/>
          <h5>Let's make something!</h5>
        </span>
      </a>
    </div>
  )
}