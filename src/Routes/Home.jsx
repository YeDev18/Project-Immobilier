import React from 'react';
import NavBar from '../Component/NavBar/NavBar';
import Hero from '../Component/Hero/Hero';
import Partner from '../Component/Partner/Partner';
import Feature from '../Component/Feature/Feature';
import HomeRental from '../Component/HomeRental/HomeRental';
import Agent from '../Component/Agent/Agent';
import Testimonial from '../Component/Testimonial/Testimonial';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Partner />
      <Feature />
      <HomeRental />
      <Agent />
      <Testimonial />
    </>
  );
};

export default Home;
