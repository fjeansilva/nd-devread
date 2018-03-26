import React from 'react';
import './index.css';

const MenuBar = () => (
  <section className="menu__bar">
    <a href="/new" className="menu__bar__add">
      New post
    </a>
    <ul className="menu__bar">
      <li className="menu__bar__item menu__bar__item--active" style={{ borderRadius: '3px' }}>
        <a className="item item--active" href="/comment">Add Comment</a>
      </li>
    </ul>
  </section>
);

export default MenuBar;
