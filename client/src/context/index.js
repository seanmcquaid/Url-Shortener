import { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

export const AppContext = createContext();

const GlobalContext = ({ preloadedState, children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    preloadedState ? preloadedState : initialState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;
