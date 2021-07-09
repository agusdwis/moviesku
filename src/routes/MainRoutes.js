import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "pages/Home";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
