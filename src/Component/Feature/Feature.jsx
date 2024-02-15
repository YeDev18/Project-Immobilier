import React from 'react';
import './Feature.scss';
import img1 from '../../assets/6.png';
import { steps, tenants } from '../data';
import { Icon } from '@iconify/react';
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
              <div key={index} className="feature_text-step-block">
                <h3>{step.title}</h3>
                {/* <div className="feature_text-step-text"> */}
                <p className="feature_text-step-p">{step.text}</p>
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
      <div className="feature_image">
        <div className="feature_image-picture">
          <img src={img1} alt="Enjoy" />
        </div>
        <div className="feature_image-tenants">
          <h3>Tenants Potentiels ({tenants.length})</h3>
          <div>
            {tenants.map((tenant, index) => {
              return (
                <div key={index} className="feature_image-tenants_section">
                  <div className="feature_image-tenants_acronym">
                    <p>{tenant.acronym}</p>
                  </div>
                  <div className="feature_image-tenants_infos">
                    <p>{tenant.name}</p>
                    <p>
                      {tenant.town} : <span>{tenant.country}</span>
                    </p>
                  </div>
                  <div className="feature_image-tenants_icons">
                    <Icon icon="formkit:down" className="icon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="feature_image-tenants_validate">
          <Icon
            icon="grommet-icons:validate"
            className="feature_image-tenants_validate-icon"
          />
        </div>
        <div className="feature_image-tenants_building-infos">
          <div className="feature_image-tenants_building">
            <Icon
              icon="ri:building-fill"
              className="feature_image-tenants_building-icon"
            />
          </div>
          <div className="feature_image-tenants_building-text">
            <p>Taux Unit</p>
            <p>1,234 Unit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
