import React from 'react';
import './index.css';

const CategoryBar = () => (
  <nav className="nav">
    <ul className="nav__menu">
      <li>
        <a href="/react" className="menu__item">React</a>
      </li>
      <li>
        <a href="/react" className="menu__item">Redux</a>
      </li>
      <li>
        <a href="/react" className="menu__item">Udacity</a>
      </li>
    </ul>
  </nav>
);

export default CategoryBar;
