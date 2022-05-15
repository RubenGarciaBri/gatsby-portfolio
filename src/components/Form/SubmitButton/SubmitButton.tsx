import * as React from "react";

interface IPropTypes {
  type: string;
  value: string;
  classNames: string;
}

const SubmitButton = ({ type, value, classNames }: IPropTypes) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        className={`mt-10 cursor-pointer py-5 px-10 w-full font-bold text-lg rounded-2xl drop-shadow-md text-white bg-gradient-to-br from-blue-600 to-blue-400 ${
          classNames && classNames
        }`}
      />
    </div>
  );
};

export default SubmitButton;
