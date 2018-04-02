import { SET_POST_ORDER_BY } from '../../constants/OrderByTypes';

export default function (value) {
  return {
    type: SET_POST_ORDER_BY,
    order: value,
  };
}
