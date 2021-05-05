import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const imageClick = () => {
  console.log("Click");
};

const Item = () => {
  return (
    <div>
      <div class="grid-container">
        <div class="c1">
          <Link to="Fiche">
            <img
              class="img"
              src="https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg"
            />
          </Link>
        </div>
        <div class="c2">
          <div class="title-price">
            <p class="item_title">Appartement À Vendre à Nejma Tanger</p>
            <span>42.840.000 MAD</span>
          </div>
          <p class="item_text">
            {" "}
            Appartement À Vendre à Tanger Particulier met en vente un joli
            appartement meublé au premier étage d’une résidence récente (moins
            de 10 ans) stratégiquement situé au quartier Nejma à Tanger. –
            Superficie : 106 m². – Composition : Une entrée, un salon marocain
            avec grand balcon, 2 chambres à coucher avec rangements et
          </p>
          <button>Details</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
