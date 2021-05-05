import React from "react";

const Slider = () => {
  return (
    <div className="home_slider">
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="5000">
          <img
            src="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"
            class="d-block w-100"
            alt="..."
            height="700"
          ></img>
        </div>
        <div className="carousel-item" data-interval="2000">
          <img
            src="https://www.immobilio.ma/wp-content/uploads/2021/02/Studio-Anfa-Sky-Casa-Anfa.jpg"
            class="d-block w-100"
            alt="..."
            height="700"
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://www.immobilio.ma/wp-content/uploads/2021/02/Salon-studio-Casa-Anfa.jpg"
            class="d-block w-100"
            alt="..."
            height="700"
          ></img>
        </div>
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

export default Slider;
