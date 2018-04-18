import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({ name }) => (
  <li>
    <Link to={`/${name !== 'all' ? name : ''}`} className="menu__item">
      {name}
    </Link>
  </li>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MenuItem;
