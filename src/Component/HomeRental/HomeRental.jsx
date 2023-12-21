import React from 'react';
import Button from '../Using/Button';
import './HomeRental.scss';
import { appartements } from '../data';
import { Icon } from '@iconify/react';

const HomeRental = () => {
  const filterHomme = () => {};
  return (
    <section className="homeRental">
      <div className="hommeRental_buton">
        <div className="homeRental_button-first">
          <Button text="Rental" nameClass="first" />
          <Button text="Command" nameClass="first" />
          <Button text="Appartement " nameClass="first" />
        </div>
        <div className="homeRental_button-second">
          <Button
            text="Explore all learning "
            icon="basil:arrow-right-solid"
            className="homeRental_button-second"
            nameClass="second"
          />
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
