/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef, lazy } from "react";
import { useParams } from "react-router-dom";
import { getMovieByID, getMovies } from "stores/actions/movieActions";
import { connect } from "react-redux";

import ScrollTop from "helpers/scrollTop";
import useScrollTop from "hooks/scrollHook";
import getRandomFromArray from "helpers/getRandom";
import Category from "helpers/searchCategory";

const Movies = lazy(() => import("components/MovieList"));
const Footer = lazy(() => import("components/Footer"));
const Loading = lazy(() => import("components/Loading"));

const MovieDetails = (props) => {
  const [scrollPos, scrollTop] = useScrollTop();
  let { id, title } = useParams();
  const { detail } = props;
  const InfoRef = useRef(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await props.getMovieByID({ id: id });
      await props.getMovies({ search: getRandomFromArray(Category) || "2021" });
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const scrollDown = () => {
    InfoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-fixed bg-cover bg-hero-detail">
      <div className="bg-gradient-to-t from-background via-background to-transparent">
        <div className="w-full flex flex-col items-center">
          <div className="container">
            <div className="h-auto sm:h-screen flex flex-col-reverse sm:flex-row">
              <div className="p-2 sm:p-auto w-full md:w-6/10 flex flex-col justify-center">
                <h1 className="animate-drop-slow text-white title opacity-90 font-medium text-xl md:text-4xl my-1 sm:my-2">
                  {detail?.Title}
                </h1>

                <div className="animate-drop my-1 sm:my-2 flex flex-row space-x-5">
                  <p className="text-xs sm:text-md">{detail?.Rated}</p>
                  <p className="text-xs sm:text-md">{detail?.Genre}</p>
                  <p className="text-xs sm:text-md">{detail?.imdbRating}/10</p>
                </div>

                <div className="animate-drop my-1 sm:my-2">
                  <p className="font-extralight overflow-ellipsis text-xs md:text-md opacity-75 lg:pr-10">
                    {detail?.Plot}
                  </p>
                </div>

                <div className="mt-4 animate-drop-fast">
                  <button
                    onClick={() => scrollDown()}
                    className="button transform duration-300 hover:scale-105 p-3 px-6 md:p-5 md:px-10 text-lg font-semibold flex flex-row items-center"
                  >
                    <i className="ri-arrow-down-s-line"></i>
                    <p className="text-white text-sm md:text-md sm:text-md pl-3">
                      Take a look
                    </p>
                  </button>
                </div>
              </div>

              <div className="mt-header sm:mt-0 flex w-full md:w-4/10 justify-center items-center">
                <div className="overflow-hidden sm:p-7 xl:p-0 animate-drop-slow">
                  <img
                    src={detail?.Poster}
                    alt={detail?.Title}
                    width={350}
                    className="rounded-md opacity-90 bg-gradient-to-t from-background shadow-inner transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div ref={InfoRef} className="pt-20">
              <div className="animate-drop-slow pt-5 flex flex-col md:flex-row">
                <div className="w-full md:w-7/10 pr-14 mb-10">
                  <p className="title text-2xl mb-5">Synopsis</p>
                  <p className="text-white opacity-80 text-xs md:text-md">
                    {detail?.Plot}
                  </p>
                </div>
                <div className="w-full md:w-3/10 mb-5">
                  <p className="title text-2xl mb-5">Genres</p>
                  <div className="grid grid-cols-2 gap-5">
                    {detail?.Genre?.split(", ").map((genre, i) => (
                      <div key={i} className="flex flex-row">
                        <i className="ri-film-line"></i>
                        <p className="pl-3 text-white opacity-80">{genre}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="animate-drop pt-5 flex flex-col md:flex-row">
                <div className="w-full md:w-7/10 pr-14 mb-10">
                  <p className="title text-2xl mb-5">Productions</p>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex flex-row col-span-2 sm:col-span-1">
                      <p className="font-semibold">Director</p>
                      <p className="pl-3 text-white opacity-80">
                        {detail?.Director || "N/A"}
                      </p>
                    </div>

                    <div className="flex flex-row col-span-2 sm:col-span-1">
                      <p className="font-semibold">Released</p>
                      <p className="pl-3 text-white opacity-80">
                        {detail?.Released || "N/A"}
                      </p>
                    </div>

                    <div className="flex flex-row col-span-2 sm:col-span-1">
                      <p className="font-semibold">Language</p>
                      <p className="pl-3 text-white opacity-80">
                        {detail?.Language || "N/A"}
                      </p>
                    </div>

                    <div className="flex flex-row col-span-2 sm:col-span-1">
                      <p className="font-semibold">Box Office</p>
                      <p className="pl-3 text-white opacity-80">
                        {detail?.BoxOffice || "N/A"}
                      </p>
                    </div>

                    <div className="flex flex-row col-span-2">
                      <p className="font-semibold">Studio</p>
                      <p className="pl-3 text-white opacity-80">
                        {detail?.Production || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-3/10 pr-14 mb-5">
                  <p className="title text-2xl mb-5">Country</p>
                  <div className="grid grid-cols-2 gap-5">
                    {detail?.Country?.split(", ").map((item, i) => (
                      <div key={i} className="flex flex-row whitespace-nowrap">
                        <i className="ri-earth-line"></i>
                        <p className="pl-3 text-white opacity-80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="animate-drop-fast pt-5">
                <p className="title text-2xl mb-5">Cast</p>
                <div className="relative">
                  <div className="flex flex-row space-x-10 overflow-x-scroll scrollbar-hide pr-14 sm:pr-24">
                    {detail?.Actors?.split(", ").map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-row p-1 sm:p-3 items-center"
                      >
                        <div className="cursor-pointer bg-gradient-to-tl hover:from-background hover:to-primary from-primary to-background w-14 h-14 sm:w-24 sm:h-24 rounded-full flex justify-center items-center">
                          <i className="ri-user-3-fill text-xl sm:text-4xl"></i>
                        </div>
                        <div className="whitespace-nowrap">
                          <p className="pl-3 text-white opacity-80 sm:pl-6 text-sm sm:text-md font-semibold">
                            {item}
                          </p>
                          <p className="pl-3 text-white opacity-80 sm:pl-6 text-xs sm:text-sm font-light">
                            Actor
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute opacity-20 top-0 right-0 h-full w-20 sm:w-24 bg-gradient-to-l from-background"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full flex flex-col items-center mt-10">
          <div className="container py-10 w-full">
            <p className="title text-2xl text-center">Recommended for You</p>
          </div>
          <div className="container w-full">
            <Movies data={props.movies?.Search} callback={() => scrollTop()} />
          </div>
        </section>

        <Footer />
      </div>

      <Loading show={loading} />
      {scrollPos >= 700 && <ScrollTop />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    detail: state.movies?.detail,
    movies: state.movies.movies,
  };
};

const mapDispatchToProps = {
  getMovieByID,
  getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
