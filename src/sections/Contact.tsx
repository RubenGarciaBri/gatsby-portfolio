import React from "react";

import SectionHeadingPrimary from "../components/SectionHeading/Primary/SectionHeadingPrimary";
import SectionHeadingSecondary from "../components/SectionHeading/Secondary/SectionHeadingSecondary";
import SectionLayout from "..//components/SectionLayout/SectionLayout";
import { contactData } from "../data/contactData";
import LinkedInButton from "../components/Buttons/LinkedInButton/LinkedInButton";
import GithubButton from "../components/Buttons/GithubButton/GithubButton";
import { Link } from "gatsby";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <SectionLayout sectionId="section-5">
      <div className="flex items-center p-12 gap-x-12 main-container rounded-xl">
        <div className="w-1/2">
          <SectionHeadingSecondary>Contact</SectionHeadingSecondary>
          <SectionHeadingPrimary>Let's talk</SectionHeadingPrimary>
          <p className="text-2xl ">
            Want to get in touch? Contact me on the details below.
          </p>
          <p className="mb-12 text-2xl "></p>

          <ul className="mb-6">
            {contactData &&
              contactData.map(({ value, Icon }) => {
                return (
                  <li className="flex items-center mb-4 gap-x-5">
                    {Icon}
                    <span className="text-2xl font-light">{value}</span>
                  </li>
                );
              })}
          </ul>
          <ul className="flex text-white gap-x-4">
            <li>
              <LinkedInButton size={36} />
            </li>
            <li>
              <GithubButton size={36} />
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <Form />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
