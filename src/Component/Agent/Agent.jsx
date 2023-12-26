import { React, Link } from 'react';
import './Agent.scss';
import Button from '../Button/Button';

const Agent = () => {
  return (
    <section className="agent">
      <div className="agent_present">
        <h2>
          List of our agents in the different house in Beverlly. Lorem Ipsum
        </h2>
        <div className="agent_present-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <Button libele="See All" className="agent_present-button" />
        </div>
      </div>
    </section>
  );
};

export default Agent;
