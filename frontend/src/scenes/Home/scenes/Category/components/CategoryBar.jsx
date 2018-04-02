import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from './Menu';
import MenuItem from './MenuItem';
import './index.css';

const CategoryBar = (props) => {
  if (Object.keys(props.categories).length === 0) {
    return (
      <nav className="nav">
        <Menu>
          <MenuItem name="all" />
        </Menu>
      </nav>
    );
  }

  const categories = Object.values(props.categories);

  return (
    <nav className="nav">
      <Menu>
        <MenuItem name="all" />
        {categories.map(c => <MenuItem key={c.path} name={c.path} />)}
      </Menu>
    </nav>
  );
};

CategoryBar.propTypes = {
  categories: PropTypes.object,
};

const mapStateToProps = state => ({
  categories: state.Home.scenes.Post.data.categories,
});

export default connect(mapStateToProps)(CategoryBar);
