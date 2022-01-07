import React from "react";

import SectionHeading from "../components/SectionHeading/SectionHeading";
import SectionLayout from "..//components/SectionLayout/SectionLayout";
import { contactData } from "../data/contactData";
import LinkedInButton from "../components/Buttons/LinkedInButton/LinkedInButton";
import GithubButton from "../components/Buttons/GithubButton/GithubButton";
import { Link } from "gatsby";

const Contact = () => {
  return (
    <SectionLayout dark sectionId="section-5">
      <div className="flex p-12 bg-white main-container drop-shadow rounded-xl">
        <div className="">
          <SectionHeading dark>Let's talk</SectionHeading>
          <p className="mb-5 text-lg">
            Contact me on the details below and I'll reply as soon as I can.
          </p>
          <ul>
            {contactData &&
              contactData.map(({ value, Icon }) => {
                return (
                  <li className="flex items-center mb-2 gap-x-4">
                    {Icon}
                    <span className="text-lg">{value}</span>
                  </li>
                );
              })}
          </ul>
          <ul className="flex gap-x-2">
            <li>
              <LinkedInButton />
            </li>
            <li>
              <GithubButton />
            </li>
          </ul>
        </div>
        <div className="">
          <form
            netlify
            method="POST"
            name="contact"
            className="contact__right-form"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="contact__right-form__input"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="contact__right-form__input"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              id="message"
              cols="30"
              rows="10"
              className="contact__right-form__textarea"
              required
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="shadow-xs contact__right-form__btn"
            />
          </form>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
