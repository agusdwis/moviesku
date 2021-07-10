import React from "react";

import HomePost from "assets/img/home.jpeg";

const Banner = (props) => {
  return (
    <section
      id="relative"
      className="w-full flex justify-center relative sm:static"
    >
      <img
        src={HomePost}
        alt="Home Poster"
        className="absolute top-0 left-0 w-full h-screen object-cover"
      />

      <div className="container h-screen">
        <div className="animate-drop h-7/10 flex flex-col justify-end">
          <span className="text-white opacity-90 block font-semibold mb-7">
            Discover your movies
          </span>
          <h1 className="text-white opacity-90 font-medium text-4xl md:text-6xl mb-10">
            Explore The <br /> Best{" "}
            <b>
              Beautiful <br /> Movies
            </b>
          </h1>
          <div>
            <button className="transform duration-300 hover:scale-105 button p-5 px-10 text-lg font-semibold flex flex-row items-center">
              <i className="ri-search-eye-line"></i>
              <p className="text-white pl-3">Explore</p>
            </button>
          </div>
        </div>

        <div className="h-3/10 w-full relative">
          <div className="absolute w-7/10 sm:w-6/10 md:w-3/10 bg-primary bottom-10 right-0 p-5 flex flex-row opacity-80 hover:opacity-90 rounded-sm">
            <div className="w-1/2 flex flex-col justify-center pr-5">
              <span className="text-xs sm:text-md">5 best movies to watch</span>
              <div className="flex-0">
                <button className="flex items-center mt-3">
                  <p className="text-xs sm:text-md">More</p>
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>

            <div className="w-1/2 overflow-hidden cursor-pointer">
              <img
                src={HomePost}
                alt=""
                className="w-52 h-20 sm:h-28 transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
