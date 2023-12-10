import React, { ReactElement } from "react";

interface Props {
  outline?: boolean;
  text?: any;
  onClick?: any;
  className?: string;
  loading?: boolean;
}

const PrimaryButton = ({
  outline,
  text,
  onClick,
  className,
  loading,
}: Props): ReactElement => {
  return (
    <button
      type="button"
      onClick={loading ? () => console.log("loading...") : onClick}
      className={`${className} ${
        outline
          ? "text-pink-600 bg-white border hover:bg-pink-600 hover:text-white"
          : "bg-pink-600 text-white hover:bg-pink-700 "
      } rounded-full outline-none border-pink-600 px-4 py-3 `}
    >
      {loading ? (
        <div className="flex flex-row items-center justify-center font-semibold  capitalize">
          <div
            className={`animate-spin rounded-full h-5 w-5 mr-2 border-t-2  border-b-2 ${
              outline
                ? "border-pink-600 hover:border-white"
                : "border-white"
            }`}
          ></div>
          <p className="font-semibold capitalize">Loading...</p>
        </div>
      ) : (
        <div className="font-semibold  capitalize text-sm text-center mx-auto flex flex-col items-center">
          {" "}
          {text}
        </div>
      )}
    </button>
  );
};

export default PrimaryButton;
