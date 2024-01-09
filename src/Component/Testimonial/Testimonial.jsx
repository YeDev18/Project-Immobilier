import React from 'react';
import { testimonials } from '../data';
import './Testimonial.scss';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div>
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index}>
              <p>viva</p>
              <p>{testimonial.nom}</p>
              <p>{testimonial.testimonial}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
