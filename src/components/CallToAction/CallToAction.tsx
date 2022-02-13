import * as React from "react";

const CallToAction = () => {
  return (
    <div className="">
      <div className="px-12 py-20 mt-16 text-center bg-gray-200">
        <h2 className="mb-6 text-4xl font-bold">
          Ready To Take The Next Step?
        </h2>
        <p className="text-xl text-gray-500">
          Join my newsletter and be up to date with the latest programming tips
        </p>
        <form className="flex items-center justify-center gap-5 mx-auto mt-8">
          <input
            type="text"
            className="px-5 py-4 text-lg text-gray-500 rounded-2xl drop-shadow-sm"
            required
            placeholder="Your Name"
          />
          <input
            type="email"
            className="px-5 py-4 text-lg text-gray-500 rounded-2xl drop-shadow-sm"
            required
            placeholder="Your Email Address"
          />
          <input
            type="submit"
            value="Subscribe"
            className="px-20 py-4 text-lg font-semibold text-white bg-blue-500 cursor-pointer rounded-2xl drop-shadow-sm"
          />
        </form>
        <span className="block mt-8 text-lg font-light text-gray-500">
          No spam, only high value content
        </span>
      </div>
    </div>
  );
};

export default CallToAction;
