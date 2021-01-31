import { addUrlLoading, addUrlSuccess, addUrlError } from '../actions';

describe('action', () => {
  it('addUrlLoading', () => {
    expect(addUrlLoading()).toEqual({ type: 'ADD_URL_LOADING' });
  });

  it('addUrlSuccess', () => {
    expect(addUrlSuccess({ id: '1', url: 'fakeurl.com' })).toEqual({
      payload: {
        id: '1',
        url: 'fakeurl.com',
      },
      type: 'ADD_URL_SUCCESS',
    });
  });

  it('addUrlError', () => {
    expect(addUrlError({ errorMessage: 'ERROR MESSAGE' })).toEqual({
      payload: {
        errorMessage: 'ERROR MESSAGE',
      },
      type: 'ADD_URL_ERROR',
    });
  });
});
