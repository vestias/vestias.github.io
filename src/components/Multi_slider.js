import React from "react";
import Slider from "react-slick";
import "./multi_slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

class multi_slider extends React.Component {
  render() {
    var array = [
      {
        type: "A VENDRE",
        price: "42.840.000 MAD",
        surface: "102",
        lits: "4",
        bains: "3",
      },
      {
        type: "A LOUER",
        price: "1.500.000 MAD",
        surface: "125",
        lits: "2",
        bains: "1",
      },
      {
        type: "A VENDRE",
        price: "1.200.000 MAD",
        surface: "240",
        lits: "2",
        bains: "1",
      },
      {
        type: "A VENDRE",
        price: "2.000.000 MAD",
        surface: "172",
        lits: "3",
        bains: "2",
      },
      {
        type: "A VENDRE",
        price: "2.000.000 MAD",
        surface: "172",
        lits: "3",
        bains: "2",
      },
      {
        type: "A VENDRE",
        price: "2.000.000 MAD",
        surface: "172",
        lits: "3",
        bains: "2",
      },
      {
        type: "A VENDRE",
        price: "2.000.000 MAD",
        surface: "172",
        lits: "3",
        bains: "2",
      },
      {
        type: "A VENDRE",
        price: "2.000.000 MAD",
        surface: "172",
        lits: "3",
        bains: "2",
      }
    ];

    var settings = {
      dots: true,

      accessibility: true,
      infinite: true,
      centerMode: true,
      className: "sliider",
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      centerMode: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    const items = [];

    for (const [index, value] of array.entries()) {
      items.push(

        <div className="slide_content">
          
          <div className="slide_top">
            <Link to="Fiche" style={{ textDecoration: "none" }}>
              <span href="fiche">{value.type}</span>
            </Link>
            <span>{value.price}</span>
          </div>
          <div className="slide_bottom">
            <span>{value.surface} m2</span>
            <span>{value.lits} lits</span>
            <span>{value.bains} bains</span>
          </div>
        </div>
        
      );
    }
    return (
      <div>
        <div className="container2">
          <Slider {...settings}>{items}</Slider>
        </div>
      </div>
    );
  }
  /*
    return (
      <div>
        <div className="container2">
          <Slider {...settings}>
            <div className="slide_content">
              <div className="slide_top">
                <Link to="Fiche" style={{ textDecoration: "none" }}>
                  <span href="fiche">À VENDRE</span>
                </Link>
                <span>42.840.000 MAD</span>
              </div>
              <div className="slide_bottom">
                <span>105 m2</span>
                <span>2lits</span>
                <span>2bains</span>
              </div>
            </div>
            <div className="slide_content">
              <div className="slide_top">
                <Link to="Fiche" style={{ textDecoration: "none" }}>
                  <span href="fiche">À VENDRE</span>
                </Link>{" "}
                <span>42.840.000 MAD</span>
              </div>
              <div className="slide_bottom">
                <span>105 m2</span>
                <span>2lits</span>
                <span>2bains</span>
              </div>
            </div>
            <div className="slide_content">
              <div className="slide_top">
                <Link to="Fiche" style={{ textDecoration: "none" }}>
                  <span href="fiche">À VENDRE</span>
                </Link>{" "}
                <span>42.840.000 MAD</span>
              </div>
              <div className="slide_bottom">
                <span>105 m2</span>
                <span>2lits</span>
                <span>2bains</span>
              </div>
            </div>
            <div className="slide_content">
              <div className="slide_top">
                <Link to="Fiche" style={{ textDecoration: "none" }}>
                  <span href="fiche">À VENDRE</span>
                </Link>{" "}
                <span>42.840.000 MAD</span>
              </div>
              <div className="slide_bottom">
                <span>105 m2</span>
                <span>2lits</span>
                <span>2bains</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
  */
}

export default multi_slider;
