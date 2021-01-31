import { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

const Context = createContext();

const GlobalContext = ({ preloadedState, children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    preloadedState ? preloadedState : initialState
  );

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default GlobalContext;
