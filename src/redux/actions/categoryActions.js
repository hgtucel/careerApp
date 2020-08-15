import * as actionTypes from './actionTypes';

const listCategories = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.CATEGORY_LIST_REQUEST});
    const response = await fetch('http://10.0.2.2:5000/api/category/');
    const data = await response.json();
    dispatch({type: actionTypes.CATEGORY_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: actionTypes.CATEGORY_LIST_FAIL, payload: error.message});
  }
};

export {listCategories};
