import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';

export const MenuItems = [
  {
    title: 'Home ',
    url: '/',
    class: 'navbar_menu-links',
  },
  {
    title: 'About Us ',
    url: '/About',
    class: 'navbar_menu-links',
  },
  {
    title: 'Listen ',
    url: '/Listen',
    class: 'navbar_menu-links',
  },
  {
    title: 'Agents ',
    url: '/Agents',
    class: 'navbar_menu-links',
  },

  {
    title: 'Contact-Us ',
    url: '/Contact-Us',
    class: 'navbar_menu-contact',
  },
];

export const miniTab = ['Buy', 'Sell', 'Rental'];
export const formTab = [
  {
    id: 0,
    item: 'Location',
    placeholder: 'Select your city',
  },
  {
    id: 1,
    item: 'Property Type',
    placeholder: 'Choose Property Type',
  },
  {
    id: 2,
    item: 'Price Range',
    placeholder: 'Choose a image',
  },
];

export const partner = [img1, img2, img3, img4, img5];
