import React from 'react';

export const Navbar = () => {

  return (
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">Concoctail</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="/mybar">My Bar</a></li>
          <li><a href="/drinks">All Recipes</a></li>
          <li><a href="/drinks/random">Feelin' Adventurous</a></li>
        </ul>
      </div>
    </nav>
  )
}