import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./routes/MainRoutes";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
