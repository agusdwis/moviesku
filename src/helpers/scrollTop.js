import React from "react";

const ScrollTop = ({ onClick }) => {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="z-40 animate-up fixed bottom-10 right-5 sm:bottom-20 sm:right-10 bg-primary p-3 sm:p-4 rounded-md sm:rounded-xl sm:transform sm:hover:translate-y-1 duration-300 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7l4-4m0 0l4 4m-4-4v18"
        />
      </svg>
    </div>
  );
};

export default ScrollTop;
