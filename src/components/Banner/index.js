import React, { useState, lazy } from "react";
import { Link } from "react-router-dom";

import HomePost from "assets/img/home.jpeg";

const Modal = lazy(() => import("components/Modal"));

const Banner = ({ recommended }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");

  const handleModal = (img) => {
    setShow(true);
    setImage(img);
  };
  let selected;

  if (recommended) {
    selected = recommended[0];
  }

  return (
    <section
      id="relative"
      className="w-full flex justify-center relative sm:static"
    >
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
            <Link to="/browse/search">
              <button className="button transform duration-300 hover:scale-105 p-4 px-8 sm:p-5 sm:px-10 text-lg font-semibold flex flex-row items-center">
                <i className="ri-search-eye-line"></i>
                <p className="text-white pl-3">Explore</p>
              </button>
            </Link>
          </div>
        </div>

        <div className="h-3/10 w-full relative">
          <div className="animate-slide absolute w-7/10 sm:w-6/10 md:w-5/10 xl:w-3/10 bg-primary bottom-10 right-0 p-5 flex flex-row opacity-80 hover:opacity-90 rounded-sm">
            <div className="w-1/2 flex flex-col justify-center pr-5">
              <span className="text-xs sm:text-md">Best movies to watch</span>
              <div className="flex-0">
                <Link
                  to={`/movie/detail/${selected?.imdbID}/${selected?.Title}`}
                >
                  <button className="flex items-center mt-3">
                    <p className="text-xs sm:text-md">More</p>
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-1/2 overflow-hidden cursor-pointer">
              <img
                onClick={() => handleModal(selected)}
                src={selected?.Poster || HomePost}
                alt=""
                width={100}
                className="w-44 h-20 sm:h-28 md:h-40 transform duration-300 shadow-inner hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      <Modal image={image} show={show} onClose={() => setShow(false)} />
    </section>
  );
};

export default Banner;
