import * as React from "react";

import { sliderIcons } from "../../data/sliderIcons";

interface IPropTypes {
  classNames?: string;
}

const Carousel = ({ classNames }: IPropTypes) => {
  return (
    <div className="main-container">
      <div
        className={`px-16 drop-shadow-xl py-10 bg-gray-900 rounded-xl flex flex-wrap justify-between px-4  mx-auto text-center slider ${
          classNames && classNames
        }`}
      >
        {sliderIcons &&
          sliderIcons.map(({ iconClassName, colored }, index) => {
            return (
              <div key={index} className="text-5xl item">
                <i
                  className={`${iconClassName} ${
                    colored ? "colored" : "text-gray-200"
                  }`}
                ></i>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
