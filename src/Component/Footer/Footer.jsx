import React from 'react';
import './Footer.scss';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
  // const navigate = useNavigate();
  return (
    <section className="footer">
      <div className="footer_div">
        {' '}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          © 2024 Homelum. Designed by{' '}
          <a href="https://bento.me/yedev" target="_blank">
            YeDev
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
