import React from "react";
import "./Accueil.css";

import Slider from "./Slider.js";

import SearchBar from "./SearchBar.js";
import Multi_slider from "./Multi_slider.js";


fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(data => console.log(data[0].email));


var Array = [
  {
    src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"
   },
   {
    src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Studio-Anfa-Sky-Casa-Anfa.jpg"
   },
   {
    src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"
   },
   {
    src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Salon-studio-Casa-Anfa.jpg"
   },
   {
    src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"
   },
];

class Accueil extends React.Component {


  render() {
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
    );  }
}

export default Accueil;
