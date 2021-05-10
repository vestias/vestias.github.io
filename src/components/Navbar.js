import React from "react";
import "./navbar.css";

import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
 <header>
      <p></p>
      <div className="container-nav">
        <div>
          <a className="navbar-brand font-weight-bold" href="/Accueil">
            <img
              className="img_1"
              alt="alt"
              style={{ height: 80, width: 240 }}
              src="https://www.immoaction.ca/images/trouvez-facilement.png"
            />
          </a>
        </div>
        <div>
          {" "}
          <a className="navbar-brand font-weight-bold" href="/Accueil">
            <img
              className="img_2"
              alt="alt"
              style={{ height: 115, width: 350 }}
              src="https://www.immoaction.ca/images/immoaction.jpg"
            />
          </a>
        </div>

        <div className="butt_acc">
          <p class="date_p">10 mai 2021</p>
          <a type="button" href="/admin" class="btn_c btn btn-primary">
            Mon compte
          </a>
          <div className="icon">
            <SocialIcon
              bgColor=""
              style={{ height: 30, width: 30 }}
              fgcolor="#1a789a"
              url="https://facebook.com"
            />
          </div>
          <div className="icon">
            <SocialIcon
              bgColor=""
              style={{ height: 30, width: 30 }}
              fgcolor="#1a789a"
              url="https://twitter.com"
            />
          </div>
        </div>
      </div>
      <div>
        <nav class="container-nav_links navbar navbar-expand-lg navbar-light ">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand " href="#"></a>

          <div class="collapse navbar-collapse ddd" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
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
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Mon compte
                </a>
                <div
                  class="dropdown-menu dropdown_items"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="/users">
                    Utilisateur
                  </a>
                  <a class="dropdown-item" href="/annonces">
                    Annonces
                  </a>
                  <a class="dropdown-item" href="/slides">
                    slides
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

*/
export default Navbar;
