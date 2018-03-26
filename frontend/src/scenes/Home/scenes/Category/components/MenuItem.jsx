import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ name }) => (
  <li>
    <Link to={`/${name !== 'all' ? name : ''}`} className="menu__item">
      {name}
    </Link>
  </li>
);

export default MenuItem;