import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="container-fluid">
      


      <nav class="container-nav navbar navbar-expand-lg navbar-light px-5">
        <a class="navbar-brand font-weight-bold" href="#">
          <img src="https://www.immobilio.ma/wp-content/uploads/2018/09/Logo-01.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul
            class="navbar-nav ml-auto"
            itemscope
            itemType="http://www.schema.org/SiteNavigationElement"
          >
            <li class="nav-item" itemprop="name">
              <a class="nav-link" href="/Accueil" itemprop="url">
                Accueil
              </a>
            </li>
            <li class="nav-item" itemprop="name">
              <a class="nav-link" href="/Decouvert" itemprop="url">
                Decouverte
              </a>
            </li>
            <li class="nav-item" itemprop="name">
              <a class="nav-link" href="/Contact" itemprop="url">
                Contact
              </a>
            </li>
            <li class="nav-item" itemprop="name">
              <a class="nav-link" href="/Contact" itemprop="url">
                Connexion
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
