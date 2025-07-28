import React from "react";
import Navbar from "../components/Navbar";
import "../styles/events.css";

export default function Events() {
  const message = encodeURIComponent(
    "Hello, I would like to inquire about the event at your coffee shop "
  );
  const phone = "6285156061763";
  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  const venues = [
    {
      name: "Cozy Indoor Lounge",
      image: "/assets/eventarea.jpg",
      desc: "Perfect for intimate gatherings and private meetings with warm lighting and comfortable seating",
    },
    {
      name: "Outdoor Garden Area",
      image: "/assets/outdoor-2.jpg",
      desc: "Breezy and vibrant atmosphere, ideal for birthday parties, bridal showers, or live music nights",
    },
    {
      name: "Bar Area",
      image: "/assets/bar.jpg",
      desc: "a warm and quiet place equipped with coffee fragrance and coffee manufacturing process",
    },
  ];

  return (
    <div className="page-content">
      {/* <Navbar /> */}
      <div className="events-page container py-5">
        <h1 className="text-center mb-4 section-title">
          Host Your Event With Us
        </h1>
        <p className="text-center mb-5 fs-5">
          Whether it’s a birthday, reunion, open mic, or corporate meetup — we
          offer flexible venue spaces and warm service to make your event
          special
        </p>

        <div className="row g-4">
          {venues.map((venue, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card venue-card shadow-sm h-100">
                <img
                  src={venue.image}
                  className="card-img-top"
                  alt={venue.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{venue.name}</h5>
                  <p className="card-text">{venue.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <h4>For inquiries and bookings</h4>
          <p className="mb-3">
            Contact us directly via WhatsApp for availability, pricing,
            reservations and customization options
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success"
          >
            {" "}
            📲 Book Your Event Now{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
