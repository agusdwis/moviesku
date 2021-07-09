import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FallBack />}>
        <Switch>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route component={NotFound} />
          </Switch>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

const FallBack = () => {
  return (
    <div className="h-screen flex items-center bg-background">
      <p className="text-textColorLight">Loading</p>
    </div>
  );
};

export default MainRoutes;
