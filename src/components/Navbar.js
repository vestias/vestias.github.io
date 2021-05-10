import React from "react";
import "./navbar.css";

import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
  <div>
        <div className="App"></div>
    
    <div className="search_cont">
    <SearchBar></SearchBar>

    </div>
  
        <h1 className="recom_title">Annonces recommandées</h1>  

        <div id="container">
          <Multi_slider></Multi_slider>
        </div>
  
        <div className="buy_container">
          <div>
            <h1 className="title6">J'achete ma maison</h1>
          </div>
          <div>
            <div>
              <img
                width="1000px"
                src="https://www.immobilio.ma/wp-content/uploads/2021/02/Entre%CC%81e-de-l-appartement.jpg"
              />
            </div>
            <div className="c333">
            <form>
              <input type="text" name="name" placeholder="Votre nom" />
              <input
                type="email"
                name="email"
                placeholder="Votre adresse email"
              />
              <input
                type="tel"
                name="tel"
                placeholder="Votre numéro de télephone"
              />
              <input type="submit" value="CONTACTER" />
            </form>
          </div>
          </div>
        </div>
      </div>
  );
};

/*
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
              Logement
              </a>
            </li>
            <li className="nav-item" itemprop="name">
              <a className="nav-link" href="/Contact" itemprop="url">
                Contact
              </a>
            </li>
            <li className="nav-item" itemprop="name">
              <a className="nav-link" href="/Contact" itemprop="url">
              Conseils Achats
              </a>
            </li>
            <li className="nav-item" itemprop="name">
              <a className="nav-link" href="/Contact" itemprop="url">
              Financement 
              </a>
            </li>
            <li className="nav-item" itemprop="name">
              <a className="nav-link" href="/admin" itemprop="url">
                Connexion
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

*/
export default Navbar;
