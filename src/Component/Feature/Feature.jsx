import React from 'react';
import './Feature.scss';
import img1 from '../../assets/6.png';
import { steps } from '../data';
const Feature = () => {
  return (
    <section className="feature">
      <div className="feature_text">
        <h2>Hightest rated agents in the country </h2>
        <p className="feature_text-p">
          We provide a complete service for the safe, purchase or rental of real
          estate. We provide a conplete
        </p>
        <div className="feature_text-step">
          {steps.map((step, index) => {
            return (
              <div key={index}>
                <h3>{step.title}</h3>
                <p className="feature_text-step-p">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="feature_image">
        <div className="feature_image-picture">
          <img src={img1} alt="Enjoy" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
