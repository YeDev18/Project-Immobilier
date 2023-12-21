import React from 'react';
import './Button.scss';
import { Icon } from '@iconify/react';

const Button = ({ nameClass, text, icon }) => {
  return (
    <button className={nameClass}>
      {text}
      <Icon icon={icon || ''} className="button_icon" />
    </button>
  );
};

export default Button;
