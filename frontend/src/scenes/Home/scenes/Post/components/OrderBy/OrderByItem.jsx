import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const activeClass = 'orderby__item--active';

const OrderByItem = ({
  title, pathname, search, active, handleClick,
}) => (
  <li className={`orderby__item ${active ? activeClass : ''}`}>
    <NavLink
      to={{
        pathname,
        search,
      }}
      className="item"
      activeClassName="item--active"
      isActive={() => active}
      onClick={() => handleClick()}
    >{title}
    </NavLink>
  </li>
);

OrderByItem.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default OrderByItem;
