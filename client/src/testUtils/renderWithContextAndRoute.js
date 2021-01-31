import MockRouter from './MockRouter';
import GlobalContext from '../context';
import { render } from '@testing-library/react';
import Routes from '../routes';

const renderWithContextAndRoute = (initialState, initialRoute) => {
  render(
    <GlobalContext preloadedState={initialState}>
      <MockRouter initialRoute={initialRoute}>
        <Routes />
      </MockRouter>
    </GlobalContext>
  );
};

export default renderWithContextAndRoute;
