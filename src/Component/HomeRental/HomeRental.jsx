import React from 'react';
import Button from '../Using/Button';
import './HomeRental.scss';

const HomeRental = () => {
  return (
    <section className="homeRental">
      <div className="homeRental_button">
        <Button text="Rental" />
        <Button text="Command" />
        <Button text="Appartement " />
      </div>
    </section>
  );
};

export default HomeRental;
