import React, { useEffect, lazy } from "react";
import { connect } from "react-redux";

import ScrollTop from "helpers/scrollTop";
import useScrollTop from "hooks/scrollHook";

import { getMovies, getSeries } from "stores/actions/movieActions";

// const NavigationBar = lazy(() => import("components/Navigation"));
const Banner = lazy(() => import("components/Banner"));
const Movies = lazy(() => import("components/MovieList"));
const Footer = lazy(() => import("components/Footer"));

const HomePage = (props) => {
  const [scrollPos] = useScrollTop();

  useEffect(() => {
    const fetchData = async () => {
      await props.getMovies({
        search: "Batman",
      });
      await props.getSeries({
        search: "Batman",
      });
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-fixed bg-cover bg-hero-pattern">
      {/* <NavigationBar /> */}
      <div className="bg-gradient-to-t from-background via-background to-transparent">
        <Banner />
        <section className="w-full flex flex-col items-center">
          <div className="container py-10 w-full">
            <p className="title text-2xl text-center">Best on Movies</p>
          </div>
          <div className="container w-full">
            <Movies data={props.movies?.Search} />
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          <div className="container py-10 w-full">
            <p className="title text-2xl text-center">Best on Series</p>
          </div>
          <div className="container w-full">
            <Movies data={props.series?.Search} />
          </div>
        </section>
        <Footer />
      </div>

      {scrollPos >= 700 && <ScrollTop />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    series: state.movies.series,
  };
};

const mapDispatchToProps = {
  getMovies,
  getSeries,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
