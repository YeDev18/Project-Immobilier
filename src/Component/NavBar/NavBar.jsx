import React from 'react';
import { useState } from 'react';
import './NavBar.scss';
import '../../global.scss';
import { MenuItems } from '../data';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const NavBar = () => {
  const [clicked, setClicked] = useState(true);
  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="navbar">
      <h1>Homelum.</h1>
      <div>
        <Icon
          icon={clicked ? 'ci:hamburger-lg' : 'ic:baseline-close'}
          onClick={handleClicked}
          className="navbar_menu-icons"
        />
      </div>
      <ul className={clicked ? 'navbar_menu ' : 'navbar_menu active '}>
        {MenuItems.map((item, index) => {
          return (
            <li className="navbar_menu-items" key={index}>
              <Link to={item.url} className={item.class}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
