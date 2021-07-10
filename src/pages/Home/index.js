import React, { Fragment, lazy } from "react";

const NavigationBar = lazy(() => import("components/Navigation"));
const Banner = lazy(() => import("components/Banner"));
const Movies = lazy(() => import("components/MovieList"));

const HomePage = (props) => {
  return (
    <Fragment>
      <NavigationBar />
      <main className="bg-blue-700">
        <Banner />
        {/* <div className="">
        <Movies />
      </div> */}
      </main>
    </Fragment>
  );
};

export default HomePage;
