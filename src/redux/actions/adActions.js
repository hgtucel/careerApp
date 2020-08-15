import * as actionTypes from './actionTypes';

const listAds = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.AD_LIST_REQUEST});
    const response = await fetch('http://10.0.2.2:5000/api/advert/');
    const data = await response.json();
    dispatch({
      type: actionTypes.AD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.AD_LIST_FAIL,
      payload: error.message,
    });
  }
};

const detailsAds = (adsId) => async (dispatch) => {
  try {
    dispatch({type: actionTypes.AD_DETAILS_REQUEST, payload: adsId});
    const response = await fetch(`http://10.0.2.2:5000/api/advert/${adsId}`);
    const data = await response.json();
    dispatch({
      type: actionTypes.AD_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.AD_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

const categoryAds = (categoryId) => async (dispatch) => {
  try {
    dispatch({type: actionTypes.CATEGORY_AD_LIST_REQUEST, payload: categoryId});
    const response = await fetch(
      `http://10.0.2.2:5000/api/advert/category?categoryId=${categoryId}`,
    );
    const data = await response.json();
    dispatch({
      type: actionTypes.CATEGORY_AD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CATEGORY_AD_LIST_FAIL,
      payload: error.message,
    });
  }
};

export {listAds, detailsAds, categoryAds};
