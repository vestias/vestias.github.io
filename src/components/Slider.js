import React from "react";

const slides = [];

var i = 0;

class Slider extends React.Component {
  
  constructor(props) {
    super(props);
  for (const [index, value] of this.props.Array.entries()) {
    if(i==0)
    {
      i=-1;
      slides.push(
        <div className="carousel-item active" data-interval="5000">
        <img
          src={value.src}
          className="d-block w-100"
          alt="..."
          height="700"
        ></img>
      </div>
      );
    }
    else
    {
      slides.push(
        <div className="carousel-item" data-interval="5000">
        <img
          src={value.src}
          className="d-block w-100"
          alt="..."
          height="700"
        ></img>
      </div>
      );
    }
    
  }
  }

  
  render() {

  return (
    <div className="home_slider">
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {slides}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>

  );
  }
}

export default Slider;
