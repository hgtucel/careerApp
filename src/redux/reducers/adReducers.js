import * as actionTypes from '../actions/actionTypes';

function adListReducer(state = {ads: []}, action) {
  switch (action.type) {
    case actionTypes.AD_LIST_REQUEST:
      return {loading: true, ads: []};
    case actionTypes.AD_LIST_SUCCESS:
      return {loading: false, ads: action.payload};
    case actionTypes.AD_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

function adDetailsReducer(state = {ad: {}}, action) {
  switch (action.type) {
    case actionTypes.AD_DETAILS_REQUEST:
      return {loading: true};
    case actionTypes.AD_DETAILS_SUCCESS:
      return {loading: false, ad: action.payload};
    case actionTypes.AD_DETAILS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

function categoryAdListReducer(state = {ads: []}, action) {
  switch (action.type) {
    case actionTypes.CATEGORY_AD_LIST_REQUEST:
      return {loading: true, ads: []};
    case actionTypes.CATEGORY_AD_LIST_SUCCESS:
      return {loading: false, ads: action.payload};
    case actionTypes.CATEGORY_AD_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

export {adListReducer, adDetailsReducer, categoryAdListReducer};
