import * as actionTypes from '../actions/actionTypes';

function categoryListReducer(state = {categories: []}, action) {
  switch (action.type) {
    case actionTypes.CATEGORY_LIST_REQUEST:
      return {loading: true, categories: []};
    case actionTypes.CATEGORY_LIST_SUCCESS:
      return {loading: false, categories: action.payload};
    case actionTypes.CATEGORY_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

export {categoryListReducer};
