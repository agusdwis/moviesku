import React, { Fragment, lazy } from "react";

const NavigationBar = lazy(() => import("components/Navigation"));
const Banner = lazy(() => import("components/Banner"));

const HomePage = (props) => {
  return (
    <Fragment>
      <NavigationBar />
      <main className="flex justify-center w-full">
        <Banner />
      </main>
    </Fragment>
  );
};

export default HomePage;
