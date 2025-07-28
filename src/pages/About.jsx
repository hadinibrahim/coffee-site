import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-info">
        <h1>About Our Coffee Haven</h1>
        <p>
          {" "}
          At Kopi Hati, we believe in more than just brewing coffee — we craft
          warmth, comfort, and connection in every cup. Whether you're here to
          work, meet friends, or just enjoy a moment alone, we’ve designed a
          cozy space for all.{" "}
        </p>
      </section>

      <section className="contact-info">
        <h2>Find Us Here</h2>
        <p>
          <strong>📍 Address:</strong> Jl. Aroma Kopi No. 15, Bandung, Indonesia
        </p>
        <p>
          <strong>📱 Phone:</strong> +62 812-3456-7890
        </p>
        <p>
          <strong>📧 Email:</strong> hello@kopihati.com
        </p>
        <p>
          <strong>⏰ Opening Hours:</strong> Weekdays: 08:00 AM - 10:00 PM,
          Weekends: 07:00 AM - 10:00 PM
        </p>
        <button
          className="map-button"
          onClick={() =>
            window.open("https://maps.app.goo.gl/t4E4A6Pc6XXKyanL8")
          }
        >
          Open in Google Maps
        </button>
      </section>

      <section className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.856359257582!2d106.7024256!3d-6.282606299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb9faa6e22c3%3A0xf877a128f9865bd3!2sORBIT%20BRASSERIE!5e0!3m2!1sid!2sid!4v1753637704828!5m2!1sid!2sid"
          width="100%"
          height="350"
          frameBorder="0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
