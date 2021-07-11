const initialMovieState = {
  movies: [],
  series: [],
  episode: [],
  search: {
    page: 1,
    data: [],
  },
  detail: null,
  recommended: [],
};

const MovieReducers = (movieState = initialMovieState, action) => {
  switch (action.type) {
    case "SUCCESS_GET_MOVIES":
      return {
        ...movieState,
        movies: action.payload,
      };
    case "SUCCESS_GET_SERIES":
      return {
        ...movieState,
        series: action.payload,
      };
    case "SUCCESS_GET_EPISODE":
      return {
        ...movieState,
        episode: action.payload,
      };
    case "SUCCESS_GET_SEARCH":
      return {
        ...movieState,
        search: {
          page: 1,
          data: action.payload?.Search,
        },
      };
    case "SUCCESS_GET_SEARCH_NEXT":
      return {
        ...movieState,
        search: {
          page: movieState.search.page + 1,
          data: [...movieState.search.data, ...action.payload?.Search],
        },
      };
    case "SUCCESS_GET_DETAIL":
      return {
        ...movieState,
        detail: action.payload,
      };
    case "SUCCESS_GET_BEST":
      return {
        ...movieState,
        recommended: action.payload,
      };
    default:
      return {
        ...movieState,
      };
  }
};

export default MovieReducers;
