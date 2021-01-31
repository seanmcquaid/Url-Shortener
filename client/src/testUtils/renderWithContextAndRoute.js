import MockRouter from './MockRouter';
import GlobalContext from '../context';
import { render } from '@testing-library/react';

const renderWithContextAndRoute = (Component, initialState, initialRoute) =>
  render(
    <GlobalContext preloadedState={initialState}>
      <MockRouter initialRoute={initialRoute}>
        <Component />
      </MockRouter>
    </GlobalContext>
  );

export default renderWithContextAndRoute;
