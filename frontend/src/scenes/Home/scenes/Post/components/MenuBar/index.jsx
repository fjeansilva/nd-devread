import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const MenuBar = ({ handleClick }) => (
  <section className="menu__bar">
    <a href="/" onClick={handleClick} className="menu__bar__add">
      New post
    </a>
    <ul className="menu__bar">
      <li className="menu__bar__item menu__bar__item--active" style={{ borderRadius: '3px' }}>
        <a href="/" className="item item--active">
          Add Comment
        </a>
      </li>
    </ul>
  </section>
);

MenuBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default MenuBar;
