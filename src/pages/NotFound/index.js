import React from "react";
import ErrorImage from "assets/svg/404.svg";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div className="bg-fixed bg-cover bg-hero-pattern">
      <div className="h-screen p-5 flex flex-col relative bg-gradient-to-t from-background">
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
            Whoops!! Lost in movie actions?
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
    </div>
  );
};

export default NotFound;
