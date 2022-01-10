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
        className={`mt-10 cursor-pointer py-5 pl-10 pr-16  w-full font-bold text-lg rounded-lg drop-shadow-md text-white bg-gradient-to-br from-blue-500 to-blue-400 ${
          classNames && classNames
        }`}
      />
    </div>
  );
};

export default SubmitButton;
