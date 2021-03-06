import React from "react";
import "./SearchBar.css";

import { Link } from "react-router-dom";
import AutosuggestReact from "./AutosuggestReact.js";
import { ContactSupportOutlined } from "@material-ui/icons";

const types = [
  {
    name: "Appartements",
  },
  {
    name: "locaux commerciaux et autres",
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

const villes = [
  {
    name: "Casablanca",
  },
  {
    name: "Fes",
  },
  {
    name: "Tangier",
  },
  ,
  {
    name: "Marrakesh",
  },
  {
    name: "Salé",
  },
  {
    name: "Meknes",
  },
  {
    name: "Rabat",
  },
  {
    name: "Oujda",
  },
  {
    name: "Kenitra",
  },
  {
    name: "Agadir",
  },
  {
    name: "Tetouan",
  },
  {
    name: "Temara",
  },
  {
    name: "Safi",
  },
  {
    name: "Mohammedia",
  },
  {
    name: "Khouribga",
  },
  {
    name: "El Jadida",
  }
];

const zones = [
  {
    name: "Casablanca-Settat",
  },
  {
    name: "Fès-Meknès",
  },
  {
    name: "Tanger-Tetouan-Al Hoceima",
  },
  ,
  {
    name: "Marrakesh-Safi",
  },
  {
    name: "Rabat-Salé-Kénitra",
  }
  
];


class SearchBar extends React.Component {


  default="/Decouvert?ville=all&&zone=all"

  handleClick = () => {

    try{
      const ville = document.getElementsByClassName("react-autosuggest__input")[0].value;
      const zone = document.getElementsByClassName("react-autosuggest__input")[1].value;
      return "/Decouvert?ville="+ville+"&&zone="+zone+"";
    }
    catch(error){
      return "/Decouvert?ville=all&&zone=all";

    }
    
  };

  render() {

  return (
    <div className="searchBox">
      <h1 className="title5" onClick={this.handleClick}>Trouvez une propriété à vendre</h1>
      <div className="search_Container">
        
        <div className="area3">
          <form>
            <AutosuggestReact
              placeholder="Ville"
              data={villes}
            ></AutosuggestReact>
          </form>
        </div>
        <div className="area4">
          <form>
            <AutosuggestReact
              placeholder="Zone"
              data={zones}
            ></AutosuggestReact>
          </form>
        </div>
        <div className="area2">
          <Link to={this.handleClick}>
            <button className="SearchB">Rechercher</button>
          </Link>
        </div>
        <div className="area1">
          <Link  to={this.default}  params={{ ville: "all",zone:"all" }}>
            <button className="resetB">réinitialiser</button>
          </Link>
        </div>
        
      </div>
    </div>
  );
  }};

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
