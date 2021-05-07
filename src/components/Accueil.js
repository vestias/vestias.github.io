import React from "react";
import "./Accueil.css";

import Slider from "./Slider.js";

import SearchBar from "./SearchBar.js";
import Multi_slider from "./Multi_slider.js";
import Recommandation from "./Recommandation.js";

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
  
        <Slider Array={Array} ></Slider>
  
        <SearchBar></SearchBar>
  
        <Recommandation></Recommandation>
  
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
            <div>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    );  }
}

export default Accueil;
