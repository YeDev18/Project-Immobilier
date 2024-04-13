import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react';
import './Agent.scss';
import Button from '../Button/Button';
import people from '../../assets/people.svg';
import { Icon } from '@iconify/react';
import { agents } from '../data';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Agent = () => {
  return (
    <section className="agent">
      <div className="agent_present">
        <h2>
          List of our agents in the different house in Beverlly Lorem Ipsum
        </h2>
        <div className="agent_present-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <Button
            libele="See All"
            url="About"
            className="agent_present-button"
          />
        </div>
      </div>
      <div className="agent_people">
        <div className="agent_people-all">
          {agents.map((agent, index) => {
            return (
              <div className="agent_people-all_grid" key={index}>
                {/* <Swiper pagination={true} modules={[Pagination]}> */}
                {/* <SwiperSlide> */}
                <div className="agent_people-all_grid-face">
                  <img src={people} alt="People" className="image_face" />
                  <div className="infos">
                    <p className="nom_face">{agent.nom}</p>
                    <p className="nom_work">{agent.work}</p>
                    <div className="sociaux">
                      <Icon icon={agent.facebook} />
                      <Icon icon={agent.linkedin} />
                      <Icon icon={agent.tik_tok} />
                      <Icon icon={agent.twiter} />
                    </div>
                  </div>
                </div>
                {/* </SwiperSlide>
                </Swiper> */}
              </div>
            );
          })}
        </div>
      </div>
      <div className="agent_column">
        <h2>98% of resident recomanded</h2>
        <div className="agent_column-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <Button
            libele="Learn more"
            url="About"
            className="agent_present-button"
          />
        </div>
      </div>
    </section>
  );
};

export default Agent;
