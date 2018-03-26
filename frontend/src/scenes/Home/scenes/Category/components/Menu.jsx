import React from 'react';
import './index.css';

const Menu = ({ children }) => (
  <ul className="nav__menu">
    { children }
  </ul>
);

export default Menu;
