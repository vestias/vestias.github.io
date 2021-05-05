import React from "react";

const Slider = () => {
  return (
    <div class="home_slider">
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="5000">
          <img
            src="https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"
            class="d-block w-100"
            alt="..."
            height="700"
          ></img>
        </div>
        <div class="carousel-item" data-interval="2000">
          <img
            src="https://www.immobilio.ma/wp-content/uploads/2021/02/Studio-Anfa-Sky-Casa-Anfa.jpg"
            class="d-block w-100"
            alt="..."
            height="700"
          ></img>
        </div>
        <div class="carousel-item">
          <img
            src="https://www.immobilio.ma/wp-content/uploads/2021/02/Salon-studio-Casa-Anfa.jpg"
            class="d-block w-100"
            alt="..."
            height="700"
          ></img>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

  );
}

export default Slider;
