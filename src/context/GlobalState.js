import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  movies: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function setMovies(movies) {
    dispatch({
      type: "SET_MOVIES",
      payload: movies
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        movies: state?.movies,
        setMovies
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};