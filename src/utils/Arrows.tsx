import { FC } from "react";
import { CustomArrowProps } from "react-slick";

export const PreviousArrow: FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div
      className="z-10 left-[calc(50%-50px)] absolute -bottom-14 transform translate-x-full bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export const NextArrow: FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute -bottom-14 right-[calc(50%-50px)] transform translate-x-full bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};
