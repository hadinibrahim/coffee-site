import React, { useEffect } from "react";
import "../styles/HeroSection.css";

// Import Image
import interior from "../assets/interior.jpg"
import bar from "../assets/bar.jpg"
import outdoor1 from "../assets/outdoor-1.jpg"

export default function HeroSection() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel inner */}
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{ backgroundImage: `url(${interior})` }}
        >
          <div className="hero-overlay d-flex justify-content-center align-items-center text-center">
            <div>
              <h1 className="display-4 text-white fw-bold">
                Welcome to CoffeePlace
              </h1>
              <p className="lead text-light">
                Warm brews, cozy vibes, and unforgettable moments.
              </p>
              {/* <a href="/about" className="btn btn-outline-light mt-3">
                Learn More
              </a> */}
            </div>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${bar})` }}
        >
          <div className="hero-overlay d-flex justify-content-center align-items-center text-center">
            <div>
              <h1 className="display-4 text-white fw-bold">
                A Plave to Unwind
              </h1>
              <p className="lead text-light">Chill with every sip</p>
              {/* <a href="/about" className="btn btn-outline-light mt-3">
                Discover More
              </a> */}
            </div>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${outdoor1})` }}
        >
          <div className="hero-overlay d-flex justify-content-center align-items-center text-center">
            <div>
              <h1 className="display-4 text-white fw-bold">
                Events & Gatherings
              </h1>
              <p className="lead text-light">Celebrate in style and warmth</p>
              <a href="/events" className="btn btn-outline-light mt-3">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Control */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
