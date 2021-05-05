import React from "react";
import Slider from "react-slick";
import "./multi_slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class multi_slider extends React.Component {
  render() {
    var settings = {
      dots: false,
      
      accessibility: true,
      adaptiveHeight: true,
      centerMode: true,
      className: "sliider",
      slidesToShow: 3,
      draggable: true,
      centerMode: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div>
        <div className="container2">
          <Slider {...settings}>
            <div className="slide_content">
              <div className="slide_top">
                <span>À VENDRE</span>
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
                <span>À VENDRE</span>
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
                <span>À VENDRE</span>
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
                <span>À VENDRE</span>
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
}

export default multi_slider;
