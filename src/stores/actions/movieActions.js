import axios from "axios";

const BASE_URL = process.env.REACT_APP_MOVIES_API_URL;
const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

export const getMovies = ({ search = "2021", page = 1 }) => {
  return async (dispatch) => {
    await axios
      .get(BASE_URL + `?apikey=${API_KEY}`, {
        params: {
          s: search,
          type: "movie",
          page: page,
          plot: "full",
        },
      })
      .then((response) => {
        dispatch({
          type: "SUCCESS_GET_MOVIES",
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch({
          type: "FAILED_GET_MOVIES",
        });
      });
  };
};

export const getSeries = ({ search = "2021", page = 1 }) => {
  return async (dispatch) => {
    await axios
      .get(BASE_URL + `?apikey=${API_KEY}`, {
        params: {
          s: search,
          type: "series",
          page: page,
          plot: "full",
        },
      })
      .then((response) => {
        dispatch({
          type: "SUCCESS_GET_SERIES",
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch({
          type: "FAILED_GET_SERIES",
        });
      });
  };
};

export const getEpisodes = ({ search = "2021", season = 1, page = 1 }) => {
  return async (dispatch) => {
    await axios
      .get(BASE_URL + `?apikey=${API_KEY}`, {
        params: {
          t: search,
          type: "episode",
          page: page,
          plot: "full",
          Season: season,
        },
      })
      .then((response) => {
        dispatch({
          type: "SUCCESS_GET_EPISODE",
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch({
          type: "FAILED_GET_EPISODE",
        });
      });
  };
};

export const getSearchData = ({ search = "2021", page = 1, params = {} }) => {
  return async (dispatch) => {
    await axios
      .get(BASE_URL + `?apikey=${API_KEY}`, {
        params: {
          s: search,
          page: page,
          ...params,
        },
      })
      .then((response) => {
        if (page === 1) {
          dispatch({
            type: "SUCCESS_GET_SEARCH",
            payload: response.data,
          });
        } else if (page < 100) {
          dispatch({
            type: "SUCCESS_GET_SEARCH_NEXT",
            payload: response.data,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: "FAILED_GET_SEARCH",
        });
      });
  };
};
