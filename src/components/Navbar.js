import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <header className="container-fluid">
      <nav className="container-nav navbar navbar-expand-lg navbar-light px-5">
        <a className="navbar-brand font-weight-bold" href="/Accueil">
          <img alt="alt" src="https://www.immobilio.ma/wp-content/uploads/2018/09/Logo-01.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul
            className="navbar-nav ml-auto"
            itemscope
            itemType="http://www.schema.org/SiteNavigationElement"
          >
            <li className="nav-item" itemprop="name">
              <a className="nav-link" href="/Accueil" itemprop="url">
                Accueil
              </a>
            </li>
            <li className="nav-item" itemprop="name">
              <a className="nav-link" href="/Decouvert" itemprop="url">
                Decouverte
              </a>
            </li>
            <li className="nav-item" itemprop="name">
              <a className="nav-link" href="/Contact" itemprop="url">
                Contact
              </a>
            </li>
            <li className="nav-item" itemprop="name">
              <a className="nav-link" href="/Contact" itemprop="url">
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
