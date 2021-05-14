import React from "react";
import "./Decouvert.css";

import Slider from "./Slider.js";
import Item from "./Item";
import SearchBar from "./SearchBar.js";
import { useEffect, useState }from 'react';



function MyComponent(props) {
   // The API URL.

   var APIurl = ""
 if(props.ville!=null && props.zone!=null)
 {
  APIurl = 'http://localhost:8080/Annonces?ville='+props.ville+'&&zone='+props.zone+'';

 }
 else
 {
  APIurl = "http://localhost:8080/Annonces?ville=all&&zone=all";

 }

 // useState.
  const [annonces, setUsers] = useState([]);
 // useEffect.
  useEffect(()=>{
   fetch(APIurl)
    .then(res => res.json())
    .then(data => setUsers(data));
 },[]);

 return(
  <>
   {annonces.map(annonce => (
 <Item
 title={annonce.title}
 price={annonce.price}
 description={annonce.description}
></Item>
   ))}
  
  </>
  )}

  var array = [
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
  

  class Decouvert extends React.Component {
   
     ville = "all";
     zone  = "all";
    constructor(props) {
      
      super(props);
      const params = new URLSearchParams(this.props.location.search); 
      this.ville = params.get('ville');
      this.zone = params.get('zone');
    
    }
   
    componentDidUpdate() {
      const params = new URLSearchParams(this.props.location.search); 
      this.ville = params.get('ville');
      this.zone = params.get('zone');
      window.location.reload(false);
      
    }
    render() {
   return (
    <div>
      <h1></h1>
      <div>
        <Slider Array={Array2}></Slider>
      </div>
      <SearchBar></SearchBar>

      <h1></h1>
      <div>


      <MyComponent ville={this.ville} zone={this.zone} ></MyComponent>


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
}};

export default Decouvert;
