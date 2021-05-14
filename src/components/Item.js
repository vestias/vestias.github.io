import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

class Item extends React.Component {
 
  render() {

    

  return (
    <div>
      <div className="grid-container">
        <div className="c1">
          <Link to="Fiche">
            <img
              className="img"
              src="https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg"
              alt="alt"
            />
          </Link>
        </div>
        <div className="c2">
          <div className="title-price">
            <p className="item_title">{this.props.title}</p>
            <span>{this.props.price} DH</span>
          </div>
          <p className="item_text">{this.props.description}</p>
          <div className="hidden_price" >
          <span>{this.props.price} DH</span>
          <Link to="Fiche">
          <button className="detail_button">Details</button>
          </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
}
};

export default Item;
