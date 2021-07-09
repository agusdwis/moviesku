import React, { Fragment } from "react";
import ErrorImage from "assets/svg/404.svg";
import { Link } from "react-router-dom";

import HomePost from "assets/img/home.jpeg";

const NotFound = (props) => {
  return (
    <Fragment>
      <div className="h-screen p-5 flex flex-col relative">
        <img
          src={HomePost}
          alt="Home Poster"
          className="absolute top-0 left-0 w-full h-screen object-cover z-0 opacity-40"
        />

        <div className="w-full h-3/5 md:h-2/3 flex justify-center items-center z-10">
          <div className="w-full sm:max-w-sm md:max-w-lg animate-drop-slow">
            <img
              src={ErrorImage}
              className="w-full sm:max-w-sm md:max-w-lg opacity-90"
              alt="404"
            />
          </div>
        </div>

        <div className="w-full flex-grow flex flex-col items-center animate-drop z-10">
          <p className="title text-xl font-bold mb-3">
            Whoops!! Lost in places?
          </p>
          <p className="text-sm font-extralight">
            The page you're looking isn't found :(
          </p>
          <p className="text-sm font-extralight">We suggest you back to home</p>

          <Link to="/">
            <button className="transform duration-300 hover:scale-105 button mt-7 p-4 px-8 text-sm flex flex-row font-semibold">
              <i className="ri-home-2-line"></i>
              <p className="text-white pl-3">Home</p>
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
