import * as React from "react";

import { FaUser, FaEnvelope } from "react-icons/fa";
import Label from "./Label/Label";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import SubmitButton from "./SubmitButton/SubmitButton";

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [text, setText] = React.useState("");

  return (
    <form
      netlify
      method="POST"
      name="contact"
      className="flex text-left flex-col bg-gray-900 p-12 drop-shadow-2xl rounded-2xl w-[580px]"
    >
      <Label htmlFor="name">Your Name</Label>
      <Input
        type="text"
        value={name}
        name="name"
        id="name"
        placeholder="Elon Musk"
        Icon={<FaUser />}
        onChange={value => setName(value)}
        required
      />
      <Label htmlFor="email">Your Email</Label>
      <Input
        type="email"
        value={email}
        name="email"
        id="email"
        placeholder="hello@elonmusk.com"
        Icon={<FaEnvelope />}
        onChange={value => setEmail(value)}
        required
      />
      <Label htmlFor="email">Message</Label>
      <TextArea
        name="message"
        placeholder="Message"
        id="message"
        onChange={value => setText(value)}
        required
      >
        {text}
      </TextArea>
      <SubmitButton type="submit" value="Send Message" classNames="" />
    </form>
  );
};

export default Form;
