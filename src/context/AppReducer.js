export default function appReducer(state, action) {
    switch (action.type) {
      case "CURRENT_MOVIE":
        return {
          ...state,
          movies: [...state.movies, action.payload],
        };
  
      case "SET_CURRENT_MOVIE":
        const updatedEmployee = action.payload;
  
        const updatedEmployees = state.movies.map((movie) => {
          if (movie.id === updatedEmployee.id) {
            return updatedEmployee;
          }
          return movie;
        });
  
      default:
        return state;
    }
  };