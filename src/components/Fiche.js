import React, { Component } from 'react';
import ImageGallery from "react-image-gallery";
import "./fiche.css";
import "react-tabs/style/react-tabs.css";

import { SocialIcon } from "react-social-icons";

const images = [
  {
    original:
      "https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg",
    thumbnail:
      "https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg",
  },
  {
    original:
      "https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg",
    thumbnail:
      "https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg",
  },
  {
    original:
      "https://www.immobilio.ma/wp-content/uploads/2021/04/Entre%CC%81e-appartement.jpeg",
    thumbnail:
      "https://www.immobilio.ma/wp-content/uploads/2021/04/Entre%CC%81e-appartement.jpeg",
  },
  {
    original:
      "https://www.immobilio.ma/wp-content/uploads/2021/04/Chambre-1.jpeg",
    thumbnail:
      "https://www.immobilio.ma/wp-content/uploads/2021/04/Chambre-1.jpeg",
  },
  {
    original:
      "https://www.immobilio.ma/wp-content/uploads/2021/04/Chambre-2.jpeg",
    thumbnail:
      "https://www.immobilio.ma/wp-content/uploads/2021/04/Chambre-2.jpeg",
  },
];

class Fiche extends Component {

  constructor(props) {
    super(props);
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="fiche">
        <div className="fiche_title" >
        <p className="firstp" > Appartement À Vendre à Nejma Tanger</p>
        <p className="secondp" > À VENDRE    1.590.000 MAD</p>
        </div>
       
        <div className="grid-container2">
          <div className="c22">
            
          <div className="icons">
              <div className="c4">
                <SocialIcon url="https://twitter.com/" />
              </div>
              <div className="c5">
                <SocialIcon url="https://facebook.com" />
              </div>
              <div className="c6">
                <SocialIcon url="https://instagram.com" />
              </div>
              <div className="c7">
                <SocialIcon url="https://youtube.com" />
              </div>
            </div>
            <div className="gallery_div">
            <ImageGallery items={images} />
            </div>
          </div>
          <div className="c33">
            <form>
              <p>EN SAVOIR PLUS SUR CETTE PROPRIÉTÉ</p>
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
  
        <div className="tabs">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#tabs-1"
                role="tab"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                Details technique du fiche
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="tabs-1" role="tabpanel">
              <p>
                <p>
                  IMMOBILIO met en location de vacances une magnifique villa avec
                  piscine et à seulement 100 mètres de la plage, située sur la
                  Route côtière d’Azemmour, région Tnin Chtouka à 15 min de Sidi
                  Rehal et 50 min de Casablanca.
                </p>
                <p>– Composition :
                <br></br>
                – Hall d’entrée.
                <br></br>– Un grand salon moderne avec cheminée.
                <br></br>– Une cuisine ouverte.
                <br></br>– 3 Chambres à coucher dont 1 suite parentale avec salle de bain privée.
                <br></br>– 1 Salles de bain avec douche.
                <br></br>– Un grand jardin avec piscine.
                <br></br>– Garage pour une voiture.
                <br></br>– Un puit.</p>
  
                <p>
                Prix dégressif selon la durée souhaitée / Minimum 3 nuitées.
  
                </p>
                <p>
                Contactez-nous pour toute demande d’infos ou réservation !
                </p>
              </p>
              <p></p>
            </div>
            <div className="tab-pane" id="tabs-2" role="tabpanel">
              <p>
                <p>Chambres: 2</p>
                <p>Salles de bain: 2</p>
                <p>Etages: 1</p>
                <p>Superficie: 106 m²</p>
                <p>Type: Appartements</p>
                <p>Ville: Tanger</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Fiche;
