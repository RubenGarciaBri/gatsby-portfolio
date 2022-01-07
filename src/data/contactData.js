import * as React from "react";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export const contactData = [
  {
    type: "email",
    value: "hello@rubengarciabri.me",
    Icon: <FaEnvelope size={20} />,
  },
  {
    type: "phone",
    value: "+44 7563 872 989",
    Icon: <FaPhoneAlt size={20} />,
  },
  {
    type: "location",
    value: "London, UK",
    Icon: <FaMapMarkerAlt size={20} />,
  },
];
