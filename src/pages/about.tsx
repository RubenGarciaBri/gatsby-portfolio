import * as React from "react";

import Layout from "../components/layout";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Certificates from "../sections/Certificates";
import TwoColumnsWithImage from "../components/Content/TwoColumnsWithImage";

const AboutPage = () => {
  return (
    <Layout>
      <TwoColumnsWithImage
        heading="My Journey"
        subHeading="About"
        paragraphs={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquam adipisci similique perspiciatis alias odit. Repellat provident ut odio alias!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellat architecto maiores eveniet recusandae. Consectetur, recusandae harum laborum vero cum expedita, ducimus laudantium provident odio quam mollitia dolorem veniam itaque.",
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, recusandae quod cum optio, libero facilis a voluptatum vero cupiditate itaque rem, culpa inventore perspiciatis animi.",
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptates fugiat reiciendis dolorem est, error rerum veniam nisi delectus nam. Numquam impedit iste reprehenderit at repellat minima, accusamus labore odit cum necessitatibus hic possimus?",
        ]}
      />
    </Layout>
  );
};

export default AboutPage;
