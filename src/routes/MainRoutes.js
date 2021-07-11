import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const Browse = lazy(() => import("pages/Browse"));
const MovieDetails = lazy(() => import("pages/Detail"));
const NotFound = lazy(() => import("pages/NotFound"));
const NavigationBar = lazy(() => import("components/Navigation"));

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FallBack />}>
        <NavigationBar />
        <Switch>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/movie/detail/:id/:title"
              render={(props) => <MovieDetails {...props} />}
            />
            <Route
              exact
              path="/browse/search"
              render={(props) => <Browse {...props} />}
            />
            <Route component={NotFound} />
          </Switch>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

const FallBack = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-background opacity-0">
      <p className="text-textColorLight">Loading</p>
    </div>
  );
};

export default MainRoutes;
