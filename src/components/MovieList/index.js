import React, { Fragment } from "react";

const MovieList = ({ data, loading }) => {
  return (
    <Fragment>
      {(data?.length !== 0 || data) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {data?.map((item, id) => (
            <div key={id} className="group cursor-pointer px-2 my-2 relative">
              <div className="group overflow-hidden relative bg-background">
                <img
                  src={item.Poster}
                  alt={item.Title}
                  width={400}
                  className="h-1/2 sm:h-96 transform duration-300 hover:scale-105 rounded-sm opacity-50 hover:opacity-100"
                />

                <button className="button group-hover:hidden absolute rounded-none p-2 px-3 right-0 bottom-0">
                  <i className="ri-arrow-right-line"></i>
                </button>
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

      {(data?.length === 0 || !data) && (
        <div className="group my-2">
          <p className="text-center text-semibold text-sm">No Data</p>
        </div>
      )}

      {loading && (
        <div className="group my-5">
          <p className="text-center text-bold text-lg">Loading...</p>
        </div>
      )}
    </Fragment>
  );
};

export default MovieList;
