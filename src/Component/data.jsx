import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/21.jpg';
import img7 from '../assets/22.jpg';
import img8 from '../assets/23.jpg';

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

export const steps = [
  {
    title: 'Find excellent deals',
    text: 'We provide a complete service fore the safe lorem ipsum ',
  },
  {
    title: 'Property insurance',
    text: 'We provide a complete service fore the safe lorem ipsum ',
  },
  {
    title: 'Frendly host',
    text: 'We provide a complete service fore the safe lorem ipsum  ',
  },
  {
    title: '24 hours consultation',
    text: 'We provide a complete service fore the safe lorem ipsum ',
  },
  {
    title: 'Fast response',
    text: 'We provide a complete service fore the safe lorem ipsum ',
  },
  {
    title: 'Compagny professionnal',
    text: 'We provide a complete service fore the safe lorem ipsum ',
  },
];

export const tenants = [
  {
    name: 'James Cooper',
    town: 'Hiberie',
    country: 'CA',
    acronym: 'JC',
  },
  {
    name: 'James Cooper',
    town: 'Hiberie',
    country: 'CA',
    acronym: 'JC',
  },
];

export const categories = ['Rental', 'Command', 'Appartement'];

export const appartements = [
  {
    image: img8,
    title: 'The Queen Inside - Type3',
    location: '173 Queen Parks - Canada(TOR)',
    price: '$986K',
    type: 'Rental',
  },
  {
    image: img7,
    title: 'The Queen Inside - Type3',
    location: '173 Queen Parks - Canada(TOR)',
    price: '$986K',
    type: 'Command',
  },
  {
    image: img8,
    title: 'The Queen Inside - Type3',
    location: '173 Queen Parks - Canada(TOR)',
    price: '$986K',
    type: 'appartement',
  },
];
