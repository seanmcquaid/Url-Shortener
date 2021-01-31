import axios from 'axios';
import renderWithContextAndRoute from '../../testUtils/renderWithContextAndRoute';
import { waitFor } from '@testing-library/react';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<FinalUrl/>', () => {
  it('History is called with the new url', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      result: {
        id: '3b7922cf-fda7-406e-b4a4-43d86e611cef',
        url: 'fakeurl.com',
        updatedAt: '2021-01-31T03:43:11.954Z',
        createdAt: '2021-01-31T03:43:11.954Z',
      },
    });

    renderWithContextAndRoute(
      {
        isLoading: false,
        urlId: '',
        originalUrl: '',
        error: null,
      },
      '/3b7922cf-fda7-406e-b4a4-43d86e611cef'
    );

    await waitFor(() =>
      expect(mockHistoryPush).toHaveBeenCalledWith('fakeurl.com')
    );
  });
});
