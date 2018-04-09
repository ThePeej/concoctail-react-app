import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">Concoctail</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/mybar" exact="true">My Bar</Link></li>
          <li><Link to="/drinks" exact="true">All Recipes</Link></li>
          <li><Link to="/drinks/random" exact="true">Feelin' Adventurous</Link></li>
        </ul>
      </div>
    </nav>
  )
}