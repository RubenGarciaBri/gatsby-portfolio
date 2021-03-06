import * as React from "react";

import { IconType } from "react-icons/lib";
import { FaStar } from "react-icons/fa";

interface IPropTypes {
  type: string;
  value: string;
  name: string;
  id: string;
  placeholder: string;
  onChange: Function;
  required?: boolean;
  classNames?: string;
  // TODO: Make more specific
  Icon: any;
}

const Input = ({
  type,
  value,
  name,
  id,
  placeholder,
  onChange,
  required,
  classNames,
  Icon,
}: IPropTypes) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="relative">
      <div
        className={`input-icon ${
          isFocused ? "text-blue-600" : "text-gray-300"
        }`}
      >
        {Icon}
      </div>
      <input
        type={type}
        value={value}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`pl-12 w-full p-4 text-lg border-gray-300 rounded-2xl mb-8 ${
          classNames && classNames
        }`}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required ? required : false}
      />
    </div>
  );
};

export default Input;
