import React from "react";
import "./SearchBar.css";

import { Link } from "react-router-dom";
import AutosuggestReact from "./AutosuggestReact.js";

const types = [
  {
    name: "Appartements",
    year: 1972,
  },
  {
    name: "locaux commerciaux et autres",
    year: 2000,
  },
  {
    name: "Maisons et Villas",
  },
  {
    name: "Plateaux Bureaux",
  },
  {
    name: "Terrains et Fermes",
  },
];

const Categories = [
  {
    name: "A LOUER",
  },
  {
    name: "A VENDRE",
  },
  {
    name: "LOCATION DE VACANCES",
  },
];


const SearchBar = () => {
  return (
    <div className="searchBox">
      <h1 className="title5">Trouvez une propriété à vendre</h1>
      <div className="search_Container">
        <div className="area1">
          <button class="resetB">réinitialiser</button>
        </div>
        <div className="area2">
          <Link to="/Decouvert?type=shirt&Categorie=blue">
            <button className="SearchB">Recherche</button>
          </Link>
        </div>
        <div className="area3">
          <form>
            <AutosuggestReact
              placeholder="Ville"
              data={Categories}
            ></AutosuggestReact>
          </form>
        </div>
        <div className="area4">
          <form>
            <AutosuggestReact
              placeholder="Zone"
              data={Categories}
            ></AutosuggestReact>
          </form>
        </div>
        <div className="area5">
          <form>
            <AutosuggestReact
              placeholder="Type"
              data={types}
            ></AutosuggestReact>
          </form>
        </div>
      </div>
    </div>
  );
};

/*
const SearchBar = () => {
  return (
    <div className="searchBox">
      <h1 className="title5">Trouvez une propriété à vendre</h1>
      <div className="search_Container">
        <div className="area1">
          <button class="resetB">réinitialiser</button>
        </div>
        <div className="area2">
          <Link to="/Decouvert?type=shirt&Categorie=blue">
            <button className="SearchB">Recherche</button>
          </Link>
        </div>
        <div className="area3">
          <form>
            <AutosuggestReact
              placeholder="Ville"
              data={Categories}
            ></AutosuggestReact>
          </form>
        </div>
        <div className="area4">
          <form>
            <AutosuggestReact
              placeholder="Zone"
              data={Categories}
            ></AutosuggestReact>
          </form>
        </div>
        <div className="area5">
          <form>
            <AutosuggestReact
              placeholder="Type"
              data={types}
            ></AutosuggestReact>
          </form>
        </div>
      </div>
    </div>
  );
};*/
export default SearchBar;
