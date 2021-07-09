import axios from "axios";

const BASE_URL = process.env.REACT_APP_MOVIES_API_URL;
const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

export const getMovies = () => {
  return async (dispatch) => {
    await axios
      .get(BASE_URL)
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
