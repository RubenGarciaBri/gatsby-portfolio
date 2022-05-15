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
      <div className="relative flex flex-col items-center text-center md:text-left xl:flex-row gap-x-12 main-container">
        <div className="w-1/2">
          <SectionHeadingSecondary>Contact</SectionHeadingSecondary>
          <SectionHeadingPrimary>Let's talk</SectionHeadingPrimary>
          <p className="text-xl">
            Want to get in touch? Contact me on the details below.
          </p>
          <p className="mb-12 text-xl"></p>
          <div className="">
            <ul className="mx-auto mb-6 md:w-full md:mx-0 w-80">
              {contactData &&
                contactData.map(({ value, Icon }) => {
                  return (
                    <li className="flex items-center mb-5 gap-x-5">
                      {Icon}
                      <span className="text-xl text-gray-600">{value}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="flex justify-center w-full mt-16 xl:w-1/2 xl:mt-0">
          <Form />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
