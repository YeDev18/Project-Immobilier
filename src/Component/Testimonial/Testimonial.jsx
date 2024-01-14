import React from 'react';
import { testimonials } from '../data';
import './Testimonial.scss';
import { Icon } from '@iconify/react';
const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial_bloc">
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index} className="testimonial_bloc-only">
              <div className="people_appreciation">
                <div className="people">
                  <Icon icon="icon-park-solid:people" className="people_icon" />
                </div>
                <div>
                  <Icon icon="material-symbols:star" />
                  <Icon icon="material-symbols:star" />
                  <Icon icon="material-symbols:star" />
                  <Icon icon="material-symbols:star" />
                  <Icon icon="material-symbols:star" />
                </div>
              </div>
              <p className="info">{testimonial.nom}</p>
              <p className="test">{testimonial.testimonial}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
