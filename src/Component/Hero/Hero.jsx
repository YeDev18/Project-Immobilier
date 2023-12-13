import React, { useState } from 'react';
import { miniTab, formTab } from '../data';
import { Icon } from '@iconify/react';
import './Hero.scss';
const Hero = () => {
  return (
    <section className="presentation">
      <div className="presentation_text">
        <div className="presentation_text-block">
          <h1>
            Find your best
            <br /> smart real estate
          </h1>
          <p>
            We provide a complete service for a sale.
            <br /> Purchase or rental of real state
          </p>
        </div>

        <div className="presentation_text-nav">
          <ul className="presentation_text-nav_tab">
            {miniTab.map((tab, index) => {
              return <li key={index}> {tab}</li>;
            })}
          </ul>
          <div className="presentation_text-nav_information">
            <form>
              <span className="form_detail">
                {formTab.map(form => (
                  <div
                    className="presentation_text-nav_information-detail"
                    key={form.id}
                  >
                    <label>{form.item}</label>
                    <input
                      type="text"
                      name="text"
                      id=""
                      placeholder={form.placeholder}
                    />
                  </div>
                ))}
              </span>
              <button className="presentation_text-nav_information-icon">
                <Icon icon="material-symbols:search" className="drawing" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="presentation_image"></div>
      <div className="viva"></div>
    </section>
  );
};

export default Hero;
