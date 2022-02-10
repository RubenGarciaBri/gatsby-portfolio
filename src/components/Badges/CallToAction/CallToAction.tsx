import * as React from "react";

const CallToAction = () => {
  return (
    <div className="">
      <div className="px-12 mt-16 text-center bg-blue-100 py-28">
        <h2 className="mb-4 text-5xl font-bold text-blue-900">
          Ready To Take The Next Step?
        </h2>
        <p className="text-2xl text-blue-900">
          Join my newsletter and be up to date with the latest programming tips
        </p>
        <form className="flex items-center justify-center gap-5 mx-auto mt-6">
          <input
            type="text"
            className="px-6 py-5 text-xl text-gray-500 rounded-lg drop-shadow-sm"
            required
            placeholder="Your Name"
          />
          <input
            type="email"
            className="px-6 py-5 text-xl text-gray-500 rounded-lg drop-shadow-sm"
            required
            placeholder="Your Email Address"
          />
          <input
            type="submit"
            value="Subscribe"
            className="px-20 py-5 text-xl font-semibold text-white bg-blue-500 rounded-lg cursor-pointer drop-shadow-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
