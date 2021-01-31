import {
  ADD_URL_ERROR,
  ADD_URL_LOADING,
  ADD_URL_SUCCESS,
} from '../actions/types';
import reducer from '../reducer';

describe('reducer', () => {
  it('ADD_URL_LOADING', () => {
    const state = {
      isLoading: false,
      urlId: '',
      originalUrl: '',
      error: null,
    };
    const action = {
      type: ADD_URL_LOADING,
    };
    expect(reducer(state, action)).toEqual({
      isLoading: true,
      urlId: '',
      originalUrl: '',
      error: null,
    });
  });

  it('ADD_URL_SUCCESS', () => {
    const state = {
      isLoading: true,
      urlId: '',
      originalUrl: '',
      error: null,
    };
    const action = {
      payload: {
        id: '1',
        url: 'fakeurl.com',
      },
      type: ADD_URL_SUCCESS,
    };
    expect(reducer(state, action)).toEqual({
      isLoading: false,
      urlId: '1',
      originalUrl: 'fakeurl.com',
      error: null,
    });
  });

  it('ADD_URL_ERROR', () => {
    const state = {
      isLoading: true,
      urlId: '',
      originalUrl: '',
      error: null,
    };
    const action = {
      payload: {
        errorMessage: 'ERROR',
      },
      type: ADD_URL_ERROR,
    };
    expect(reducer(state, action)).toEqual({
      isLoading: false,
      urlId: '',
      originalUrl: '',
      error: 'ERROR',
    });
  });

  it('Default', () => {
    const state = {
      isLoading: true,
      urlId: '1',
      originalUrl: '',
      error: null,
    };
    const action = {
      type: 'Default',
    };
    expect(reducer(state, action)).toEqual({
      isLoading: true,
      urlId: '1',
      originalUrl: '',
      error: null,
    });
  });
});
