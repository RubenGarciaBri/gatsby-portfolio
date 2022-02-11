import * as React from "react";

interface IPropTypes {
  name: string;
  placeholder: string;
  id: string;
  children: React.ReactNode;
  onChange: Function;
  cols?: number;
  rows?: number;
  classNames?: string;
  required?: boolean;
}

const TextArea = ({
  name,
  placeholder,
  id,
  children,
  onChange,
  required,
  cols,
  rows,
  classNames,
}: IPropTypes) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      id={id}
      cols={cols ? cols : 3}
      rows={rows ? rows : 5}
      className={`p-5 text-xl rounded-2xl resize-none ${
        classNames && classNames
      }`}
      onChange={e => onChange(e.target.value)}
      required={required ? required : false}
    >
      {children}
    </textarea>
  );
};

export default TextArea;
