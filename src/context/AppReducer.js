export default function appReducer(state, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: [...state?.movies, ...action.payload]
      };
    default:
      return state;
  }
};