import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div class="topnav">
      <div class="nav-items">
          <img src="https://www.immobilio.ma/wp-content/uploads/2018/09/Logo-01.png" />
        <NavLink className="nav_text" to="/Accueil">
          Accueil
        </NavLink>
        <NavLink className="nav_text" to="/Decouvert">
          Decouvert
        </NavLink>
        <NavLink className="nav_text" to="/Contact">
          Contact
        </NavLink>
        <NavLink className="logB" to="/Contact">
          Connexion
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
