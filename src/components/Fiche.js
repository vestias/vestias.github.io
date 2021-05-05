import React from "react";
import ImageGallery from "react-image-gallery";
import "./fiche.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const Fiche = () => {
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

  return (
    <div className="fiche">
      <p className="firstp" > Appartement À Vendre à Nejma Tanger</p>
      <p className="secondp" > À VENDRE    1.590.000 MAD</p>
      <div class="grid-container2">
        <div class="c11">
          <div class="icons">
            <div class="c4">
              <SocialIcon url="https://twitter.com/" />
            </div>
            <div class="c5">
              <SocialIcon url="https://facebook.com" />
            </div>
            <div class="c6">
              <SocialIcon url="https://instagram.com" />
            </div>
            <div class="c7">
              <SocialIcon url="https://youtube.com" />
            </div>
          </div>
        </div>
        <div class="c22">
          {" "}
          <ImageGallery items={images} />
        </div>
        <div class="c33">
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

      <div class="tabs">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              data-toggle="tab"
              href="#tabs-1"
              role="tab"
            >
              Description
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
              Details technique du fiche
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active" id="tabs-1" role="tabpanel">
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
          <div class="tab-pane" id="tabs-2" role="tabpanel">
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
};

export default Fiche;
