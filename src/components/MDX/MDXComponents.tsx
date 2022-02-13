import * as React from "react";

export const MDXComponents = {
  h1: props => <h1 {...props} className="my-4 text-5xl font-bold" />,
  h2: props => <h2 {...props} className="my-4 text-4xl font-bold" />,
  h3: props => <h3 {...props} className="my-4 text-3xl font-bold" />,
  h4: props => <h4 {...props} className="my-4 text-2xl font-bold" />,
  h5: props => <h5 {...props} className="my-4 text-xl font-bold" />,
  p: props => <p {...props} className="my-3 text-xl" />,
  blockquote: props => (
    <blockquote
      {...props}
      className="px-6 py-3 my-3 bg-gray-100 border-l-8 border-blue-500 rounded-lg"
    />
  ),
};
