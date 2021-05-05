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

  return (
    <div>
      <h1></h1>
      <div>
        <Slider></Slider>
      </div>
      <SearchBar></SearchBar>

      <h1></h1>
      <div>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>

        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a class="active" href="#">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </div>
  );
};

export default Decouvert;
