import renderWithContextAndRoute from '../../testUtils/renderWithContextAndRoute';
import { screen } from '@testing-library/react';

describe('<FinalUrl/>', () => {
  it('New and original URLs displays', async () => {
    renderWithContextAndRoute(
      {
        isLoading: false,
        urlId: '3b7922cf-fda7-406e-b4a4-43d86e611cef',
        originalUrl: 'fakeurl.com',
        error: '',
      },
      '/finalUrl'
    );

    expect(
      screen.getByText(
        `New Url : ${process.env.REACT_APP_BASE_URL}/3b7922cf-fda7-406e-b4a4-43d86e611cef`
      )
    ).toBeInTheDocument();

    expect(screen.getByText(`Old Url : fakeurl.com`)).toBeInTheDocument();
  });

  it('Characters saved displays correctly', async () => {
    renderWithContextAndRoute(
      {
        isLoading: false,
        urlId: '3b7922cf-fda7-406e-b4a4-43d86e611cef',
        originalUrl: 'fakeurl.com',
        error: '',
      },
      '/finalUrl'
    );

    expect(screen.getByText(`Characters Saved : -35`)).toBeInTheDocument();
  });
});
