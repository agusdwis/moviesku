import React from "react";

const Modal = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed p-6 inset-0 flex justify-center items-center z-50 bg-black bg-opacity-40">
      <div className="h-full flex flex-col justify-center items-center">
        <i className="ri-loader-line animate-spin text-4xl text-secondary text-bold"></i>
        <p className="pt-3 text-sm">Please Wait</p>
      </div>
    </div>
  );
};

export default Modal;
