import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollTop from "hooks/scrollHook";

const NavigationBar = (props) => {
  const [scrollPos] = useScrollTop();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header");

    if (scrollPos >= 100 && scrollPos < 500) {
      header.classList.add("shadow-sm");
      header.classList.add("bg-background");
      header.classList.add("opacity-50");
      header.classList.remove("opacity-100");
    } else if (scrollPos >= 500) {
      header.classList.remove("opacity-50");
      header.classList.add("opacity-100");
    } else {
      header.classList.remove("shadow-sm");
      header.classList.remove("bg-background");
      header.classList.remove("opacity-100");
      header.classList.add("bg-transparent");
    }
  }, [scrollPos]);

  return (
    <>
      <header
        id="header"
        className="group w-full top-0 left-0 z-40 fixed flex justify-center opacity-100"
      >
        <nav className="h-header flex justify-between items-center w-full container group-hover:opacity-100">
          <Link to="/">
            <p className="hover:text-white font-medium">MovieKu</p>
          </Link>

          <div className="w-4/10 lg:w-3/10 hidden sm:block">
            <ul className="flex flex-row justify-between">
              <li className="cursor-pointer">
                <Link to="/">
                  <p className="font-medium hover:text-white text-sm">Home</p>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/">
                  <p className="font-medium hover:text-white text-sm">Movies</p>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/">
                  <p className="font-medium hover:text-white text-sm">Series</p>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/browse/search">
                  <p className="font-medium hover:text-white text-sm">
                    Explore
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {!show && (
            <div onClick={() => setShow(true)} className="sm:hidden">
              <i className="ri-function-line text-textColor font-semibold"></i>
            </div>
          )}
        </nav>
      </header>

      {show && (
        <div className="fixed sm:hidden animate-slide !opacity-100 top-0 bg-background h-screen w-7/10 p-12 z-50 shadow-sm right-0">
          <ul className="flex flex-col">
            <li onClick={() => setShow(false)} className="my-7">
              <Link to="/">
                <p className="text-textColorLight uppercase font-regular hover:text-textColor">
                  Home
                </p>
              </Link>
            </li>
            <li onClick={() => setShow(false)} className="mb-7">
              <Link to="/">
                <p className="text-textColorLight uppercase font-regular hover:text-textColor">
                  Movies
                </p>
              </Link>
            </li>
            <li onClick={() => setShow(false)} className="mb-7">
              <Link to="/">
                <p className="text-textColorLight uppercase font-regular hover:text-textColor">
                  Series
                </p>
              </Link>
            </li>
            <li onClick={() => setShow(false)} className="mb-7">
              <Link to="/browse/search">
                <p className="text-textColorLight uppercase font-regular hover:text-textColor">
                  Explore
                </p>
              </Link>
            </li>
          </ul>

          <i
            onClick={() => setShow(false)}
            className="ri-close-line absolute top-4 right-5 text-textColor cursor-pointer text-xl font-semibold"
          ></i>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
