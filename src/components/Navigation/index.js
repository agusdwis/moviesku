import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header");
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    if (scrollTop > 100) {
      header.classList.add("shadow-sm");
      header.classList.add("bg-background");
    } else {
      header.classList.remove("shadow-sm");
      header.classList.remove("bg-background");
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <header
      id="header"
      className="w-full top-0 left-0 bg-transparent z-40 fixed flex justify-center"
    >
      <nav className="h-header flex justify-between items-center w-full container">
        <Link to="/">
          <p className="hover:text-white font-medium">MovieKu</p>
        </Link>

        <div className="w-4/10 hidden sm:block">
          <ul className="flex flex-row justify-around">
            <li className="">
              <a href="#home" className="font-medium hover:text-white text-sm">
                Home
              </a>
            </li>
            <li className="">
              <a href="#home" className="font-medium hover:text-white text-sm">
                TV Shows
              </a>
            </li>
            <li className="">
              <a href="#home" className="font-medium hover:text-white text-sm">
                Movies
              </a>
            </li>
            <li className="">
              <a href="#home" className="font-medium hover:text-white text-sm">
                Trending
              </a>
            </li>
          </ul>
        </div>

        {show && (
          <div className="fixed sm:hidden animate-slide top-0 bg-background h-screen w-7/10 p-12 z-50 shadow-sm right-0">
            <ul className="flex flex-col">
              <li className="mb-5">
                <a
                  href="#home"
                  className="text-textColorLight uppercase font-regular hover:text-textColor"
                >
                  Home
                </a>
              </li>
              <li className="mb-5">
                <a
                  href="#about"
                  className="text-textColorLight uppercase font-regular hover:text-textColor"
                >
                  Trending
                </a>
              </li>
              <li className="mb-5">
                <a
                  href="#about"
                  className="text-textColorLight uppercase font-regular hover:text-textColor"
                >
                  Box Office
                </a>
              </li>
              <li className="mb-5">
                <a
                  href="#about"
                  className="text-textColorLight uppercase font-regular hover:text-textColor"
                >
                  Browse
                </a>
              </li>
            </ul>

            <i
              onClick={() => setShow(false)}
              className="ri-close-line absolute top-3 right-4 text-textColor cursor-pointer text-xl font-semibold"
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
