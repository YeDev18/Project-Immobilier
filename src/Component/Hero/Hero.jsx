import React from 'react';
import './Hero.scss';
const Hero = () => {
  return (
    <section className="presentation">
      <div className="presentation_text">
        <div>
          <h1>
            Find your best
            <br /> smart real estate
          </h1>
          <p>
            We provide a complete service for a sale.
            <br /> Purchase or rental of real state
          </p>
        </div>

        <div className="presentation_text-nav"></div>
      </div>
      <div className="presentation_image"></div>
    </section>
  );
};

export default Hero;
