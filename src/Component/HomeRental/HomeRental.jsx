import React from 'react';
import { useEffect, useState, useMemo } from 'react';

import './HomeRental.scss';
import { appartements, categories } from '../data';
import { Icon } from '@iconify/react';

const HomeRental = () => {
  return (
    <section className="homeRental">
      <div className="hommeRental_buton">
        <div className="homeRental_button-first">
          {categories.map((categorie, index) => {
            return (
              <button key={index} className=" button first">
                {categorie}
              </button>
            );
          })}
        </div>
        <div className="homeRental_button-second">
          <button className=" button second">
            Explore All learning <Icon icon="basil:arrow-right-solid" />
          </button>
        </div>
      </div>
      <div className="appartement">
        {appartements.map((appartement, index) => {
          return (
            <div key={index} className="appartementFirst">
              <div className="appartement_image">
                <img src={appartement.image} alt="" />
              </div>
              <div className="appartement_info">
                <h2>{appartement.title}</h2>
                <p>{appartement.location}</p>
                <div className="price_details">
                  <p className="price">{appartement.price}</p>
                  <div>
                    <p>Details</p>
                    <Icon
                      icon="basil:arrow-right-solid"
                      className="details_icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeRental;
