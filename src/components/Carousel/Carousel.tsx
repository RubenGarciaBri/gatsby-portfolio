import * as React from "react";

import { sliderIcons } from "../../data/sliderIcons";

interface IPropTypes {
  classNames?: string;
}

const Carousel = ({ classNames }: IPropTypes) => {
  return (
    <div className="main-container">
      <div
        className={`px-6 sm:px-10 xl:px-20 drop-shadow-2xl gap-y-10 py-12 sm:py-14 rounded-2xl flex flex-wrap justify-between mx-auto text-center slider ${
          classNames && classNames
        }`}
      >
        {sliderIcons &&
          sliderIcons.map(({ iconClassName, colored }, index) => {
            return (
              <div
                key={index}
                className="text-3xl md:text-4xl basis-[20%] sm:basis-[14%] xl:basis-auto item"
              >
                <i
                  className={`${iconClassName} ${
                    colored ? "colored" : "text-gray-600"
                  } `}
                ></i>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
