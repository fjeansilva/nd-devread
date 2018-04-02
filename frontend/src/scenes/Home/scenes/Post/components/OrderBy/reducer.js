import {
  SET_POST_ORDER_BY,
} from '../../constants/OrderByTypes';

function orderPosts(state = 'ORDER_BY_VOTE_SCORE', action) {
  switch (action.type) {
    case SET_POST_ORDER_BY:
      return action.order;
    default:
      return state;
  }
}

export default orderPosts;
