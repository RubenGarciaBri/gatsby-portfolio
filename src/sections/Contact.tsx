import React from "react";

import SectionHeadingPrimary from "../components/SectionHeading/Primary/SectionHeadingPrimary";
import SectionHeadingSecondary from "../components/SectionHeading/Secondary/SectionHeadingSecondary";
import SectionLayout from "..//components/SectionLayout/SectionLayout";
import { contactData } from "../data/contactData";
import SocialButton from "../components/Buttons/SocialButton/SocialButton";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <SectionLayout sectionId="section-6">
      <div className="relative flex items-center gap-x-12 main-container">
        <div className="w-1/2">
          <SectionHeadingSecondary>Contact</SectionHeadingSecondary>
          <SectionHeadingPrimary>Let's talk</SectionHeadingPrimary>
          <p className="text-2xl">
            Want to get in touch? Contact me on the details below.
          </p>
          <p className="mb-12 text-2xl "></p>

          <ul className="mb-6">
            {contactData &&
              contactData.map(({ value, Icon }) => {
                return (
                  <li className="flex items-center mb-5 gap-x-5">
                    {Icon}
                    <span className="text-2xl text-gray-600">{value}</span>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="flex justify-center w-1/2">
          <Form />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
