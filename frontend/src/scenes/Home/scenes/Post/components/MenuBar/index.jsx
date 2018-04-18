import React from 'react';
import PropTypes from 'prop-types';
import OrderByContainer from '../OrderBy/OrderByContainer';
import './index.css';

const MenuBar = ({ handleClick }) => (
  <section className="menu__bar">
    <a href="/" onClick={handleClick} className="menu__bar__add">
      New post
    </a>
    <OrderByContainer />
  </section>
);

MenuBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default MenuBar;
