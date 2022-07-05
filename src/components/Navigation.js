import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/a-vendre" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>À Vendre</li>
        </NavLink>
        <NavLink
          to="/le-bon-coin-de-l-immo" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Le Bon Coin de l'immobilier</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
