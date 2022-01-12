export default function appReducer(state, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: [...state?.movies, action.payload]
      };

    case "SET_CURRENT_MOVIE":
      return {
        ...state,
        currentMovie: action.payload
      };

    default:
      return state;
  }
};