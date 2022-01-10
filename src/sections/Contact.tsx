import React from "react";

import SectionHeading from "../components/SectionHeading/SectionHeading";
import SectionLayout from "..//components/SectionLayout/SectionLayout";
import { contactData } from "../data/contactData";
import LinkedInButton from "../components/Buttons/LinkedInButton/LinkedInButton";
import GithubButton from "../components/Buttons/GithubButton/GithubButton";
import { Link } from "gatsby";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <SectionLayout sectionId="section-5">
      <div className="flex p-12 bg-gray-900 main-container drop-shadow rounded-xl">
        <div className="w-1/2">
          <SectionHeading light>Let's talk</SectionHeading>
          <p className="mb-5 text-lg text-white">
            Contact me on the details below and I'll reply as soon as I can.
          </p>
          <ul>
            {contactData &&
              contactData.map(({ value, Icon }) => {
                return (
                  <li className="flex items-center mb-2 text-white gap-x-4">
                    {Icon}
                    <span className="text-lg">{value}</span>
                  </li>
                );
              })}
          </ul>
          <ul className="flex text-white gap-x-2">
            <li>
              <LinkedInButton />
            </li>
            <li>
              <GithubButton />
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
