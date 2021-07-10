import React, { Fragment, lazy } from "react";
import ScrollTop from "helpers/scrollTop";
import useScrollTop from "hooks/scrollHook";

const NavigationBar = lazy(() => import("components/Navigation"));
const Banner = lazy(() => import("components/Banner"));
const Movies = lazy(() => import("components/MovieList"));
const Footer = lazy(() => import("components/Footer"));

const HomePage = () => {
  const scrollPos = useScrollTop();

  return (
    <Fragment>
      <NavigationBar />
      <main className="">
        <Banner />
        <section className="w-full flex flex-col items-center">
          <div className="container py-10 w-full">
            <p className="title text-2xl text-center">Popular on Movies</p>
          </div>
          <div className="container w-full">
            <Movies />
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          <div className="container py-10 w-full">
            <p className="title text-2xl text-center">Popular on Series</p>
          </div>
          <div className="container w-full">
            <Movies />
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          <div className="container py-10 w-full">
            <p className="title text-2xl text-center">Popular on Episodes</p>
          </div>
          <div className="container w-full">
            <Movies />
          </div>
        </section>
      </main>
      <Footer />

      {scrollPos >= 700 && <ScrollTop />}
    </Fragment>
  );
};

export default HomePage;
