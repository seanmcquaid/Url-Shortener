import renderWithContextAndRoute from '../../testUtils/renderWithContextAndRoute';
import { screen } from '@testing-library/react';

describe('<FinalUrl/>', () => {
  it('New URL displays', async () => {
    renderWithContextAndRoute(
      {
        isLoading: false,
        urlId: '3b7922cf-fda7-406e-b4a4-43d86e611cef',
        originalUrl: 'fakeurl.com',
        error: null,
      },
      '/finalUrl'
    );
    expect(
      screen.getByText('3b7922cf-fda7-406e-b4a4-43d86e611cef')
    ).toBeInTheDocument();
  });
});
