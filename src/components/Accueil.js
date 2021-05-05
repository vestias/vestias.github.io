import React from "react";
import "./Accueil.css";

import Slider from "./Slider.js";

import SearchBar from "./SearchBar.js";
import Multi_slider from "./Multi_slider.js";
import Recommandation from "./Recommandation.js";

const Accueil = () => {
  return (
    <div>
      <div className="App"></div>

      <Slider></Slider>

      <SearchBar></SearchBar>

      <Recommandation></Recommandation>


      <div id="container">
        <Multi_slider></Multi_slider>
      </div>

      <div className="buy_container">
        <div>
        <h1 className="title6" >J'achete ma maison</h1>
        </div>
        <div>
          <div>
          <img width="1000px" src="https://www.immobilio.ma/wp-content/uploads/2021/02/Entre%CC%81e-de-l-appartement.jpg" />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>

            <p>Lorem ipsum dolor sit amet</p>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Accueil;
