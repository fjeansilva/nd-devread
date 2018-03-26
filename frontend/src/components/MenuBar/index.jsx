import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const MenuBar = () => (
  <section className="menu__bar">
    <Link to="/post/new" className="menu__bar__add">
      New post
    </Link>
    <ul className="menu__bar">
      <li className="menu__bar__item menu__bar__item--active" style={{ borderRadius: '3px' }}>
        <Link to="/post/comment/new" className="item item--active">
          Add Comment
        </Link>
      </li>
    </ul>
  </section>
);

export default MenuBar;
