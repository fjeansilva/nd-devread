import { RECEIVE_CATEGORIES } from './constants/ActionTypes';

import * as api from './api';

export const getCategories = () => (dispatch) => {
  api.getCategories()
    .then(({ categories }) => {
      dispatch({ type: RECEIVE_CATEGORIES, categories })
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: 'CATEGORY_ERROR', error })
    });
};
