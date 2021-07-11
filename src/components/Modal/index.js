import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollTop from "hooks/scrollHook";

const Modal = ({ show, onClose, image }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, goTop] = useScrollTop();

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div
      onClick={() => onClose()}
      className="fixed p-6 inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full sm:w-2/3 lg:w-1/3 rounded-lg bg-background"
      >
        <div className="h-full flex justify-center items-center relative">
          <img src={image.Poster} alt={"Modal"} className="h-full" />

          <div className="absolute bottom-4">
            <Link to={`/movie/detail/${image.imdbID}/${image.Title}`}>
              <button
                onClick={() => {
                  onClose();
                  goTop();
                }}
                className="button p-3"
              >
                Go To Movie
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
