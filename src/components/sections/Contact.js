import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="section-5" className="section-contact">
      <div className="contact main-container shadow-s">
        <div className="contact__left">
          <h3 className="contact__left-heading">Let's get in touch</h3>
          <p className="contact__left-subheading">
            Contact me on the details below and I'll reply as soon as I can.
          </p>
          <ul className="contact__left-list">
            <li className="contact__left-list__item">
              <FaEnvelope className="contact__left-list__item-icon" />
              hello@rubengarciabri.me
            </li>
            <li className="contact__left-list__item">
              <FaPhoneAlt className="contact__left-list__item-icon" />
              +44 7563 872 989
            </li>
            <li className="contact__left-list__item">
              <FaMapMarkerAlt className="contact__left-list__item-icon" />
              Edinburgh, UK
            </li>
          </ul>
          <ul className="contact__left-social">
            <li className="contact__left-social__item">
              <a
                href="https://www.linkedin.com/in/ruben-garcia-bri/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="contact__left-social__item">
              <a href="https://github.com/RubenGarciaBri" target="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact__right">
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
              className="contact__right-form__btn shadow-xs"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
