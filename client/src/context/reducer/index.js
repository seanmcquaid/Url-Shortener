import {
  ADD_URL_ERROR,
  ADD_URL_LOADING,
  ADD_URL_SUCCESS,
} from '../actions/types';

export const initialState = {
  isLoading: false,
  urlId: '',
  originalUrl: '',
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_URL_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case ADD_URL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        urlId: action.payload.id,
        originalUrl: action.payload.url,
      };
    case ADD_URL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default reducer;
