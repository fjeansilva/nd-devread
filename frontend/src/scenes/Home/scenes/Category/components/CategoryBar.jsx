import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import './index.css';

const CategoryBar = () => (
  <nav className="nav">
    <Menu>
      <MenuItem name="all" />
      <MenuItem name="react" />
      <MenuItem name="redux" />
      <MenuItem name="udacity" />
    </Menu>
  </nav>
);

export default CategoryBar;
