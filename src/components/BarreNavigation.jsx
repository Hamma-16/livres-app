import React from 'react';
import { Link } from 'react-router-dom';

const BarreNavigation = () => {
  return (
    <nav className="barre-navigation">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/livres">Livres</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BarreNavigation;
