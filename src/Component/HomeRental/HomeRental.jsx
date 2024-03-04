import React from 'react';
import { useEffect, useState, useMemo } from 'react';

import './HomeRental.scss';
import { appartements, categories } from '../data';
import { Icon } from '@iconify/react';

const HomeRental = () => {
  const [category, setCategory] = useState('All');
  const [home, setHome] = useState([]);

  const handleClick = () => {
    setCategory(category);
  };
  const Filtre = appartements => {
    return appartements.filter(appartement => {
      if (category === 'All') {
        return true;
      } else if (category === 'Rental') {
        return appartement.id === 'Rental';
      } else if (category === 'Command') {
        return appartement.id === 'Command';
      } else if (category === 'Appartement') {
        return appartement.id === 'Appartement';
      }
    });
  };
  const Filter = useMemo(() => Filtre(appartements), [category]);

  return (
    <section className="homeRental">
      <div className="hommeRental_buton">
        <div className="homeRental_button-first">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className=" button first"
                onClick={() => {
                  setCategory(category);
                }}
              >
                {category}
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
      <List items={Filter} />
    </section>
  );
};

export default HomeRental;

const List = ({ items }) => {
  return (
    <div className="appartement">
      {items.map((item, index) => {
        return (
          <div key={index} className="appartementFirst">
            <div className="appartement_image">
              <img src={item.image} alt="" />
            </div>
            <div className="appartement_info">
              <h2>{item.title}</h2>
              <p>{item.location}</p>
              <div className="price_details">
                <p className="price">{item.price}</p>
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
  );
};
