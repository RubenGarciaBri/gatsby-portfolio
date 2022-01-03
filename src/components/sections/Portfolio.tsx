import React from "react";
import Gallery from "../Gallery.js";

const Portfolio = () => {
  return (
    <section id="section-4" className="section-portfolio">
      <div className="section-title main-container">
        <h2 className="portfolio-heading">Portfolio</h2>
        <p className="portfolio-subheading">
          These are all my current published projects. Click on the thumbnails
          to see a full description as well as links to both the github
          repositories and live online versions of the apps.
        </p>
      </div>
      <Gallery />
    </section>
  );
};

export default Portfolio;
