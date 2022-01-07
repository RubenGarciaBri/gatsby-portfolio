import * as React from "react";

import { sliderIcons } from "../../data/sliderIcons";

interface IPropTypes {
  classNames?: string;
}

const Carousel = ({ classNames }: IPropTypes) => {
  return (
    <div className="main-container">
      <div
        className={`px-20 drop-shadow-2xl py-14 bg-gray-900 rounded-3xl flex flex-wrap justify-between mx-auto text-center slider ${
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
