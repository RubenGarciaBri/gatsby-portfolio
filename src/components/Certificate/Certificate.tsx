import * as React from "react";

interface IPropTypes {
  school: string;
  name: string;
  duration: string;
  description: string;
  subjects: string;
  url: string;
}

const Certificate = ({
  school,
  name,
  duration,
  description,
  subjects,
  url,
}: IPropTypes) => {
  return (
    <div className="flex px-12 py-16 text-white bg-blue-500 rounded-lg drop-shadow-xl">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="50"
          viewBox="0 0 40 40"
        >
          <path
            fill="#00508f"
            d="M13.3 0L0 7.7v17.6C0 33.4 6.5 40 14.6 40c2.7 0 5.2-.7 7.4-1.9l10.8-6.2C37.1 29.6 40 25.2 40 20V1.6L37.4.1 26 6.2v19.2c0 .8-.1 1.6-.2 2.4-.2.8-.4 1.5-.7 2.2l-.3.6c-.4 0-2.9-.9-4.2-1.8-.6-.4-1.1-.8-1.6-1.3s-.9-1-1.3-1.6c-.4-.6-.7-1.2-1-1.8-.3-.6-.5-1.3-.6-2-.1-.7-.1-1.4-.1-2.1V1.6L13.3 0zm6.5 36.2c-.7.3-1.7.7-2.5.9-.8.2-1.5.2-2.3.2-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.4-2.2-.7-.7-.3-1.4-.7-2-1.1C6.6 34.1 5.7 33.1 5 32c-.4-.6-.8-1.3-1.1-2-.3-.7-.5-1.5-.7-2.3-.2-.8-.2-1.6-.2-2.4V9.2l10-6.1V20c0 6.4 4.7 11.8 10.7 13.1-.2.3-.4.6-.7.8-1.1 1.1-2 1.8-3.2 2.3zm17-14c-.1.7-.4 1.4-.6 2-.3.6-.6 1.2-1 1.8-.4.6-1.6 2.1-3.2 3-1.6.9-3.1 1.2-4 1.4.6-1.6 1-3.2 1-5V7.7l8-4.6V20c0 .8 0 1.5-.2 2.2z"
          />
        </svg>
      </div>
      <div className="">
        <h4 className="text-xl ">{school}</h4>
        <h5 className="mb-1 text-xl font-bold">
          <i className="fas fa-code"></i> {name}
        </h5>
        <p className="pb-1 mb-4 border-b border-blue-300">{duration}</p>
        <p className="text-lg">{description}</p>
        <p className="mt-4 mb-1 text-xl font-bold"> Course Programme:</p>
        <p className="mb-6 text-lg">{subjects}</p>
        <a
          href="https://confirm.udacity.com/DNMGJX5N"
          target="_blank"
          className="px-5 py-3.5 bg-white text-gray-900 rounded-lg drop-shadow-sm"
        >
          See Certificate
        </a>
      </div>
    </div>
  );
};

export default Certificate;
