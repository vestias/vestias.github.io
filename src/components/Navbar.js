import React from "react";
import "./navbar.css";

import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'

class Navbar extends React.Component {
  constructor() {
    super();

    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var today = new Date(),
      date =
        today.getDate() +
        " " +
        months[today.getMonth()] +
        " " +
        today.getFullYear();

    this.state = {
      date: date,
    };
  }

  toggleNav = function(e){
    let x = document.querySelector('.ddd');
    if(x.classList.contains("active")){
      x.className="ddd";
    }else{
      x.classList.add("active");
    }
  }

  handleDropDownMenu = ()=>{
    let x = document.querySelector('.hover_menu');
    if(x.classList.contains("active")){
      x.classList.remove("active");
    }else{
      x.classList.add("active");
    }
  }
  render() {
    return (
      <header>
        <div className="container-nav">
         <div className="navbar_toggler">
        
            <div onClick={this.toggleNav}  class="burger-icon ">
            <span></span>
            <span></span>
            <span></span>
          </div>
         </div>
          <div>
            <a className="ssss navbar-brand font-weight-bold">
              <img
                className="img_1"
                alt="alt"
                style={{ height: 80, width: 240 }}
                src="https://www.immoaction.ca/images/trouvez-facilement.png"
              />
            </a>
          </div>
          <div>
            <Link
              className="nav-link"
              to="Accueil"
              style={{ textDecoration: "none" }}
            >
              <img
                className="img_2"
                alt="alt"
                style={{ height: 115, width: 350 }}
                src="https://www.immoaction.ca/images/immoaction.jpg"
              />{" "}
            </Link>
          </div>

          <div className="butt_acc">
            <p class="date_p">{this.state.date}</p>
            <Link
              className="nav-link btn_c btn btn-primary"
              to="users"
              type="button"
              style={{ textDecoration: "none" }}
            >
              Mon compte
            </Link>
            <div className="icon">
              <SocialIcon
                bgColor=""
                style={{ height: 30, width: 30 }}
                fgcolor="#1a789a"
                url="https://facebook.com"
                target="_blank"
              />
            </div>
            <div className="icon">
              <SocialIcon
                bgColor=""
                style={{ height: 30, width: 30 }}
                fgcolor="#1a789a"
                url="https://twitter.com"
                target="_blank"
              />
            </div>
          </div>
        
        </div>
       
        <nav class="container-nav_links">
            
            <div class="ddd">
              <ul class="">
               
                <li className="" itemprop="name">
                  <Link
                    className=""
                    to="Accueil"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Accueil">Accueil</span>
                  </Link>
                </li>
                <li className="" itemprop="name">
                  <Link
                    className=""
                    to="Decouvert"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Decouvert">Logement</span>
                  </Link>
                </li>
                <li className="" >
                  <Link
                    className=""
                    to="Contact"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Contact">Contact</span>
                  </Link>
                </li>
                <li className="">
                  <Link
                    className=""
                    to="Contact"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Contact">Conseils Achats</span>
                  </Link>
                </li>
                <li className="" >
                  <Link
                    className=""
                    to="Contact"
                    style={{ textDecoration: "none" }}
                  >
                    <span href="Contact">Financement</span>
                  </Link>
                </li>
                <li onClick={this.handleDropDownMenu} class="nav-item hover-menu-nav-link">
                  <a
                    class="nav-link"
                    href="#"
                  >
                    Mon compte
                  </a>
                  <div
                    class="hover_menu"
                  >
                    <Link
                      className="nav-link "
                      to="users"
                      style={{ textDecoration: "none" }}
                    >
                      <span href="users">Utilisateur</span>
                    </Link>
                    <Link
                      className="nav-link"
                      to="annonces"
                      style={{ textDecoration: "none" }}
                    >
                      <span href="annonces">Annonces</span>
                    </Link>
                    <Link
                      className="nav-link"
                      to="slides"
                      style={{ textDecoration: "none" }}
                    >
                      <span href="slides">slides</span>
                    </Link>
                    <Link
                      className="nav-link"
                      to="Ajouter_annonces"
                      style={{ textDecoration: "none" }}
                    >
                      <span href="Ajouter_annonces">Ajouter Annonce</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

      </header>
    );
  }
}
export default Navbar;
