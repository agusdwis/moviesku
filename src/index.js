import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import App from "routes/MainRoutes";
import store from "stores";

import "assets/css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
serviceWorkerRegistration.register();
