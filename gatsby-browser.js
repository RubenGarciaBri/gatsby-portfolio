import * as React from "react";
import { HelmetProvider } from "react-helmet-async"

// Devicon Stylesheet
import "devicon/devicon.min.css";

// CSS Files
import "./src/styles/tailwind.css";


export const wrapRootElement = ({ element }) => {
  return (
    <HelmetProvider>
      {element}
    </HelmetProvider>
  )
}

