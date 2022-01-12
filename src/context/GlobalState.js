import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  movies: [],
  currentMovie: null
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

  function setCurrentMovie(movie) {
    dispatch({
      type: "SET_CURRENT_MOVIE",
      payload: movie
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        movies: state?.movies,
        currentMovie: state?.currentMovie,
        setMovies, setCurrentMovie
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};