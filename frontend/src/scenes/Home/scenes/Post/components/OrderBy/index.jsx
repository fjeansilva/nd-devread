import React from 'react';
import PropTypes from 'prop-types';
import { ORDER_BY_VOTE_SCORE, ORDER_BY_DATE_CREATED } from '../../constants/OrderByTypes';
import OrderByItem from './OrderByItem';

const byVotes = '?orderBy=votes';
const byDate = '?orderBy=date-created';

const OrderBy = ({ location, setOrderBy, order }) => (
  <ul className="menu__bar">
    <li className="menu__bar__item">Order by:</li>
    <OrderByItem
      title="votes"
      pathname={location.pathname}
      search={byVotes}
      active={order === ORDER_BY_VOTE_SCORE}
      handleClick={() => setOrderBy(ORDER_BY_VOTE_SCORE)}
    />
    <OrderByItem
      title="date created"
      pathname={location.pathname}
      search={byDate}
      active={order === ORDER_BY_DATE_CREATED}
      handleClick={() => setOrderBy(ORDER_BY_DATE_CREATED)}
    />
  </ul>
);

OrderBy.propTypes = {
  location: PropTypes.shape({ pathName: PropTypes.string }).isRequired,
  setOrderBy: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};

export default OrderBy;
