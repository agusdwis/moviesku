import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollTop from "hooks/scrollHook";

const NavigationBar = (props) => {
  const scrollPos = useScrollTop();
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
    <header
      className="group w-full top-0 left-0 z-40 fixed flex justify-center opacity-100"
      id="header"
    >
      <nav className="h-header flex justify-between items-center w-full container group-hover:opacity-100">
        <Link to="/">
          <p className="hover:text-white font-medium">MovieKu</p>
        </Link>

        <div className="w-4/10 sm:w-3/10 hidden sm:block">
          <ul className="flex flex-row justify-between">
            <li className="">
              <a href="#home" className="font-medium hover:text-white text-sm">
                Home
              </a>
            </li>
            <li className="">
              <a href="#home" className="font-medium hover:text-white text-sm">
                Movies
              </a>
            </li>
            <li className="">
              <a href="#home" className="font-medium hover:text-white text-sm">
                Series
              </a>
            </li>
            <li className="">
              <a href="#home" className="font-medium hover:text-white text-sm">
                Explore
              </a>
            </li>
          </ul>
        </div>

        {show && (
          <div className="fixed sm:hidden animate-slide top-0 bg-background h-screen w-7/10 p-12 z-50 shadow-sm right-0">
            <ul className="flex flex-col">
              <li className="my-7">
                <a
                  href="#home"
                  className="text-textColorLight uppercase font-regular hover:text-textColor"
                >
                  Home
                </a>
              </li>
              <li className="mb-7">
                <a
                  href="#about"
                  className="text-textColorLight uppercase font-regular hover:text-textColor"
                >
                  Movies
                </a>
              </li>
              <li className="mb-7">
                <a
                  href="#about"
                  className="text-textColorLight uppercase font-regular hover:text-textColor"
                >
                  Series
                </a>
              </li>
              <li className="mb-7">
                <a
                  href="#about"
                  className="text-textColorLight uppercase font-regular hover:text-textColor"
                >
                  Explore
                </a>
              </li>
            </ul>

            <i
              onClick={() => setShow(false)}
              className="ri-close-line absolute top-4 right-5 text-textColor cursor-pointer text-xl font-semibold"
            ></i>
          </div>
        )}

        {!show && (
          <div onClick={() => setShow(true)} className="sm:hidden">
            <i className="ri-function-line text-textColor font-semibold"></i>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavigationBar;
