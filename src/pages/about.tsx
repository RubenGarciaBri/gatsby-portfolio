import * as React from "react";

import Layout from "../components/layout";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Certificates from "../sections/Certificates";
import { aboutData } from "../data/aboutData";

const AboutPage = () => {
  return (
    <Layout>
      <div className="px-4 py-16 container-xs">
        {aboutData.map((paragraph: string) => (
          <p className="mb-6 text-lg md:text-xl">{paragraph}</p>
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;
