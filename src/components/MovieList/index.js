import React, { useState, Fragment, lazy } from "react";
import { Link } from "react-router-dom";

const Modal = lazy(() => import("components/Modal"));

const MovieList = ({ data, loading, callback = () => {} }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");

  const handleModal = (img) => {
    setShow(true);
    setImage(img);
  };

  return (
    <Fragment>
      {(data?.length !== 0 || data) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {data?.map((item, id) => (
            <div key={id} className="group cursor-pointer px-2 my-2 relative">
              <div className="group overflow-hidden relative bg-background">
                <img
                  onClick={() => handleModal(item)}
                  src={item.Poster}
                  alt={item.Title}
                  width={400}
                  className="h-1/2 sm:h-96 transform duration-300 hover:scale-105 rounded-sm opacity-50 hover:opacity-100"
                />

                <Link to={`/movie/detail/${item.imdbID}/${item.Title}`}>
                  <button
                    onClick={() => callback()}
                    className="button group-hover:hidden absolute rounded-none p-2 px-3 right-0 bottom-0"
                  >
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </Link>
              </div>

              <div className="absolute inset-y-1/2 top-2/3 px-5">
                <p className="group-hover:text-white font-semibold">
                  {item.Title}
                </p>
                <p className="group-hover:text-white font-medium text-xs">
                  {item.Year}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {(data?.length === 0 || !data) && !loading && (
        <div className="group my-2">
          <p className="text-center text-semibold text-sm">No Data</p>
        </div>
      )}

      {loading && (
        <div className="group my-5">
          <p className="text-center text-bold text-lg">Loading...</p>
        </div>
      )}

      <Modal image={image} show={show} onClose={() => setShow(false)} />
    </Fragment>
  );
};

export default MovieList;
