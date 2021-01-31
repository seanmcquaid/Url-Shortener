import { ADD_URL_ERROR, ADD_URL_LOADING, ADD_URL_SUCCESS } from './types';

export const addUrlLoading = () => ({ type: ADD_URL_LOADING });

export const addUrlSuccess = ({ id, url }) => ({
  type: ADD_URL_SUCCESS,
  payload: { id, url },
});

export const addUrlError = ({ errorMessage }) => ({
  type: ADD_URL_ERROR,
  payload: { errorMessage },
});
