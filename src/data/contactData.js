import * as React from "react";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export const contactData = [
  {
    type: "email",
    value: "hello@rubengarciabri.me",
    Icon: <FaEnvelope size={26} className="text-blue-600" />,
  },
  {
    type: "phone",
    value: "+44 7563 872 989",
    Icon: <FaPhoneAlt size={26} className="text-blue-600" />,
  },
  {
    type: "location",
    value: "London, UK",
    Icon: <FaMapMarkerAlt size={26} className="text-blue-600" />,
  },
];
