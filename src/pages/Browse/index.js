import React, { Fragment, lazy } from "react";
import ScrollTop from "helpers/scrollTop";
import useScrollTop from "hooks/scrollHook";

const NavigationBar = lazy(() => import("components/Navigation"));
const Footer = lazy(() => import("components/Footer"));
const Movies = lazy(() => import("components/MovieList"));

const Browse = (props) => {
  const scrollPos = useScrollTop();
  return (
    <Fragment>
      <NavigationBar />
      <main className="mt-header">
        {/* <section className="w-full flex flex-col items-center">
          <div className="bg-red-300 container px-0 h-80 relative">
            <div className="bg-green-300 h-1/2"></div>
            <div className="bg-blue-300 h-1/2"></div>

            <form className="absolute top-2/4">
              <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
              <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                Sign up
              </button>
            </form>
          </div>
        </section> */}
        <section className="w-full flex flex-col items-center">
          <div className="container h-96">
            <div className="container bg-primaryAccent h-full flex flex-col justify-center items-center">
              <h2 className="title text-2xl text-center mb-3">
                Search Our
                <br /> Movies
              </h2>
              <p className="py-5 text-sm font-light mb-4">
                Search by Name, Year, Category
              </p>

              <form className="p-3 w-2/3 flex bg-primaryAlt">
                <input
                  type="text"
                  placeholder="Search"
                  className="h-14 flex-grow mr-3 rounded-sm px-5 bg-primaryAlt focus:outline-none"
                />

                <button type="button" className="button px-10 rounded-sm">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="container w-full pt-10">
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
          </div>
        </section>
      </main>
      <Footer />
      {scrollPos >= 700 && <ScrollTop />}
    </Fragment>
  );
};

export default Browse;
