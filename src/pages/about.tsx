import * as React from "react";

import Layout from "../components/layout";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Certificates from "../sections/Certificates";
import TwoColumnsWithImage from "../components/Content/TwoColumnsWithImage";

const AboutPage = () => {
  return (
    <Layout>
      {/* <TwoColumnsWithImage
        heading="My Journey"
        subHeading="About"
        paragraphs={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquam adipisci similique perspiciatis alias odit. Repellat provident ut odio alias!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellat architecto maiores eveniet recusandae. Consectetur, recusandae harum laborum vero cum expedita, ducimus laudantium provident odio quam mollitia dolorem veniam itaque.",
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, recusandae quod cum optio, libero facilis a voluptatum vero cupiditate itaque rem, culpa inventore perspiciatis animi.",
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptates fugiat reiciendis dolorem est, error rerum veniam nisi delectus nam. Numquam impedit iste reprehenderit at repellat minima, accusamus labore odit cum necessitatibus hic possimus?",
        ]}
      /> */}
      <div className="px-4 py-16 container-xs">
        <p className="mb-6 text-lg md:text-xl">
          I’m a Front-End engineer based in London, UK. I currently work at
          BehaviourLab, a Fintech startup that helps asset managers, private
          equity firms, insurance companies and executive boards make better
          financial decisions through analytics and behavioural science.
        </p>
        <p className="mb-6 text-lg md:text-xl">
          At the age of 19, I moved to the UK where I worked in the Financial
          Services industry doing administrative work. It was then when I fell
          in love with technology and for the next few years, I taught myself
          software engineering during evenings and weekends and ended up
          specialising in React.
        </p>
        <p className="mb-6 text-lg md:text-xl">
          In 2021 I joined BehaviourLab where I co-developed the front-end of a
          Fintech SASS product from scratch. The main technologies I’ve been
          working on during this time are React, Next.js, Typescript,
          TailwindCSS and D3.
        </p>
        <p className="mb-6 text-lg md:text-xl">
          I consider myself a very driven, self-reliant and entrepreneurial
          person. Capable of picking up new concepts fast, researching solutions
          to complex problems and making the most out of the available resources
          at any given time.
        </p>
        <p className="mb-6 text-lg md:text-xl">
          My long term vision is to make the world a better place by solving
          complex problems through technology, as well as creating an exciting
          future for everyone. This is what keeps me in a state of meaningful
          engagement and the reason why I love writing code so much.
        </p>
        <p className="mb-6 text-lg md:text-xl">
          During my free time, I enjoy learning about new exciting technologies,
          reading books on human behaviour, stoicism and business, and lifting
          weights.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
