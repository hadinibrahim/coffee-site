import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Signature Dishes Section */}
      <section className="signature-section container py-5">
        <h2 className="section-title text-center mb-4">Our Signature Dishes</h2>
        <div className="row g-4">
          {[
            {
              name: "Hot Latte",
              image: "/assets/latte.jpg",
              desc: "Sweet, smooth, and bold",
            },
            {
              name: "Butter Croissant",
              image: "/assets/croisant.jpg",
              desc: "Nice croissant with butter inside it",
            },
            {
              name: "Ice Coffee",
              image: "/assets/IceCoffee.jpg",
              desc: "House Blend mixed with fresh milk so that it is delicious served in cold conditions",
            },
          ].map((dish, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 shadow-sm dish-card">
                <img
                  src={dish.image}
                  className="card-img-top"
                  alt={dish.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{dish.name}</h5>
                  <p className="card-text">{dish.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="/menu.pdf" download className="btn btn-outline-dark">
            📥 Download Full Menu
          </a>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section py-5">
        <div className="container text-white">
          <h2 className="section-title text-center mb-4">
            Past Events & Bookings
          </h2>
          <div className="row g-4">
            {[
              { title: "Family Gathering", image: "/assets/FamilyGath.jpg" },
              { title: "Corp Meeting", image: "/assets/Meeting.jpg" },
            ].map((event, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="event-card position-relative">
                  <img
                    src={event.image}
                    className="w-100 rounded shadow-sm"
                    alt={event.title}
                  />
                  <div className="event-overlay">
                    <h5>{event.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a href="/events" className="btn btn-success">
              More Info
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
