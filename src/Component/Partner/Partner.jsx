import React from 'react';
import { partner } from '../data';

import './Partner.scss';

const Partner = () => {
  return (
    <section>
      <div className="partner_title">
        <h2>TrustedBy</h2>
        <p>More than 15000+ brand trust an homelum</p>
      </div>
      <div className="partner_image">
        {partner.map((part, index) => {
          return (
            <div key={index} className="partner_image-block">
              <img src={part} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partner;
