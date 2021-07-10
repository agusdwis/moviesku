import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="flex justify-center py-10">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 py-10">
          <div className="mt-4 sm:mt-2 lg:pl-10">
            <h3 className="text-white font-semibold">MovieKu</h3>
            <p className="text-xs mt-1">
              Browse and search <br /> best quality movies <br /> ever made.
            </p>
            <div className="flex flex-row">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pr-3 pt-3"
              >
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pr-3 pt-3"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pr-3 pt-3"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pr-3 pt-3"
              >
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          <div className="mt-4 sm:mt-2 lg:pl-10">
            <h3 className="text-white font-semibold">About</h3>
            <ul>
              <li className="text-xs py-1">
                <Link to="/">
                  <p className="hover:text-white">About Us</p>
                </Link>
              </li>
              <li className="text-xs py-1">
                <Link to="/">
                  <p className="hover:text-white">Features</p>
                </Link>
              </li>
              <li className="text-xs py-1">
                <Link to="/">
                  <p className="hover:text-white">News</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-2 lg:pl-10">
            <h3 className="text-white font-semibold">Company</h3>
            <ul>
              <li className="text-xs py-1">
                <Link to="/">
                  <p className="hover:text-white">Team</p>
                </Link>
              </li>
              <li className="text-xs py-1">
                <Link to="/">
                  <p className="hover:text-white">Pricing</p>
                </Link>
              </li>
              <li className="text-xs py-1">
                <Link to="/">
                  <p className="hover:text-white">Promo</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-2 lg:pl-10">
            <h3 className="text-white font-semibold">Support</h3>
            <ul>
              <li className="text-xs py-1">
                <Link to="/">
                  <p className="hover:text-white">FAQs</p>
                </Link>
              </li>
              <li className="text-xs py-1">
                <Link to="/">
                  <p className="hover:text-white">Support Center</p>
                </Link>
              </li>
              <li className="text-xs py-1">
                <Link to="/">
                  <p className="hover:text-white">Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between items-center">
          <p className="text-sm text-center font-extralight">
            &#169; 2021 MovieKu. All rigths reserved.
          </p>
          <div className="text-sm flex justify-around lg:w-1/3 mt-2 md:mt-0">
            <Link to="/">
              <p className="font-extralight">Terms & Agreements</p>
            </Link>
            <Link to="/">
              <p className="font-extralight">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
