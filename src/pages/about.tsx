import * as React from "react";

import Layout from "../components/layout";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Certificates from "../sections/Certificates";

const about = () => {
  return (
    <Layout>
      <About />
      <Experience />
      <Certificates />
    </Layout>
  );
};

export default about;
