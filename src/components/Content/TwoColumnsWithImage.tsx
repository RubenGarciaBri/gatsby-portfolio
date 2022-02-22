import * as React from "react";

interface IPropTypes {
  heading: string;
  paragraphs: string[];
  subHeading?: string;
  inverted?: boolean;
}

/**
 * Returns a content component with 2 equal size columns
 * @param {string} heading Value for the heading
 * @param {string[]} paragraphs Array of paragraphs to be displayed as text
 * * OPTIONAL PROPS
 * @param {string} subHeading Value for the subheading
 * @param {boolean} inverted  Optional boolean that If provided, all text will be positioned on the right instead of on the left
 *
 * @returns {JSX.Element} TwoColumnsWithImage component
 */
const TwoColumnsWithImage = ({
  heading,
  subHeading,
  inverted,
  paragraphs,
}: IPropTypes) => {
  return (
    <div className="overflow-hidden">
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div className={`${inverted && "col-start-2"}`}>
            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
              {subHeading && subHeading}
            </h2>
            <h3 className="mt-2 text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {heading}
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div
            className={`relative lg:row-start-1 ${
              !inverted && "lg:col-start-2"
            }`}
          >
            <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="object-cover object-center rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base max-w-prose lg:max-w-none">
              {paragraphs &&
                paragraphs.map((paragraph: string, index: number) => {
                  return (
                    <p className="mb-5 text-xl" key={index + paragraph.length}>
                      {paragraph}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnsWithImage;
