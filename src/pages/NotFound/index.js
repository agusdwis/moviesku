import React, { Fragment } from "react";
import ErrorImage from "assets/svg/404.svg";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <Fragment>
      <div className="h-screen p-5 flex flex-col">
        <div className="w-full h-3/5 md:h-2/3 flex justify-center items-center">
          <div className="w-full sm:max-w-sm md:max-w-lg animate-drop-slow">
            <img
              src={ErrorImage}
              className="w-full sm:max-w-sm md:max-w-lg"
              alt="404"
            />
          </div>
        </div>

        <div className="w-full flex-grow flex flex-col items-center animate-drop">
          <p className="title text-xl font-bold mb-3">
            Whoops!! Lost in places?
          </p>
          <p className="text-sm font-extralight">
            The page you're looking isn't found :(
          </p>
          <p className="text-sm font-extralight">We suggest you back to home</p>

          <Link to="/">
            <button className="button mt-7 p-4 px-8 text-sm font-semibold">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
