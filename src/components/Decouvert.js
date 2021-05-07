import React from "react";
import "./Decouvert.css";

import Slider from "./Slider.js";
import Item from "./Item";
import SearchBar from "./SearchBar.js";



const Decouvert = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const type = urlParams.get("type");
  console.log(type);
  const Categorie = urlParams.get("Categorie");
  console.log(Categorie);

  var array = [
    {
      title: "Appartement À Vendre à Nejma Tanger",
      price: "20.000.000",
      description:
        " Appartement À Vendre à Tanger Particulier met en vente un joli appartement meublé au premier étage d’une résidence récente (moins de 10 ans) stratégiquement situé au quartier Nejma à Tanger. – Superficie : 106 m². – Composition : Une entrée, un salon marocain avec grand balcon, 2 chambres à coucher avec rangements et",
    },
    {
      title: "Appartement À Vendre à Nejma Tanger",
      price: "45.000.000",
      description:
        " Appartement À Vendre à Tanger Particulier met en vente un joli appartement meublé au premier étage d’une résidence récente (moins de 10 ans) stratégiquement situé au quartier Nejma à Tanger. – Superficie : 106 m². – Composition : Une entrée, un salon marocain avec grand balcon, 2 chambres à coucher avec rangements et",
    },
    {
      title: "Appartement À Vendre à Nejma Tanger",
      price: "12.000.000",
      description:
        " Appartement À Vendre à Tanger Particulier met en vente un joli appartement meublé au premier étage d’une résidence récente (moins de 10 ans) stratégiquement situé au quartier Nejma à Tanger. – Superficie : 106 m². – Composition : Une entrée, un salon marocain avec grand balcon, 2 chambres à coucher avec rangements et",
    },
    {
      title: "Appartement À Vendre à Nejma Tanger",
      price: "25.000.000",
      description:
        " Appartement À Vendre à Tanger Particulier met en vente un joli appartement meublé au premier étage d’une résidence récente (moins de 10 ans) stratégiquement situé au quartier Nejma à Tanger. – Superficie : 106 m². – Composition : Une entrée, un salon marocain avec grand balcon, 2 chambres à coucher avec rangements et",
    },
    {
      title: "Appartement À Vendre à Nejma Tanger",
      price: "17.000.000",
      description:
        " Appartement À Vendre à Tanger Particulier met en vente un joli appartement meublé au premier étage d’une résidence récente (moins de 10 ans) stratégiquement situé au quartier Nejma à Tanger. – Superficie : 106 m². – Composition : Une entrée, un salon marocain avec grand balcon, 2 chambres à coucher avec rangements et",
    },
  ];
  const items = [];

  for (const [index, value] of array.entries()) {
    items.push(
      <Item
      title={value.title}
      price={value.price}
      description={value.description}
    ></Item>
    );
  }

  var Array2 = [
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
  

  return (
    <div>
      <h1></h1>
      <div>
        <Slider Array={Array2}></Slider>
      </div>
      <SearchBar></SearchBar>

      <h1></h1>
      <div>
      {items}

        <div className="pagination">
          <a href="/Decouvert">&laquo;</a>
          <a href="/Decouvert">1</a>
          <a className="active" href="/Decouvert">
            2
          </a>
          <a href="/Decouvert">3</a>
          <a href="/Decouvert">4</a>
          <a href="/Decouvert">5</a>
          <a href="/Decouvert">6</a>
          <a href="/Decouvert">&raquo;</a>
        </div>
      </div>
    </div>
  );
};

export default Decouvert;
