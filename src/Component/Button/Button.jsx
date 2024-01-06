import React from 'react';
import './Button.scss';
import { useNavigate } from 'react-router-dom';

const Button = ({ libele, url }) => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(`/${url}`)}>{libele}</button>;
};

export default Button;
