import axios from 'axios';
import renderWithContextAndRoute from '../../testUtils/renderWithContextAndRoute';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Home/>', () => {
  it('Submitting url redirects user to Final Url Page', async () => {
    jest.spyOn(axios, 'post').mockResolvedValue({
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
      '/'
    );

    userEvent.type(
      screen.getByPlaceholderText('Enter url here'),
      'fakeurl.com'
    );

    userEvent.click(screen.getByText('Submit'));

    await waitFor(() =>
      expect(
        screen.getByText('3b7922cf-fda7-406e-b4a4-43d86e611cef')
      ).toBeInTheDocument()
    );
  });
});
