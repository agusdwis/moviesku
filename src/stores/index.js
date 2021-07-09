import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import MovieReducers from "./reducers/movieReducers";

const rootReducer = combineReducers({
  movies: MovieReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
