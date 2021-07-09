const initialMovieState = {
  movies: [],
};

const MovieReducers = (movieState = initialMovieState, action) => {
  switch (action.type) {
    case "SUCCESS_GET_MOVIES":
      return {
        ...movieState,
        movies: action.payload,
      };
    case "FAILED_GET_MOVIES":
      return {
        ...movieState,
      };
    default:
      return {
        ...movieState,
      };
  }
};

export default MovieReducers;
