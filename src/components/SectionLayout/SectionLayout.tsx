import * as React from "react";

interface IPropTypes {
  sectionId: string;
  children: React.ReactNode;
  classNames?: string;
  small?: boolean;
  dark?: boolean;
}

const SectionLayout = ({
  sectionId,
  children,
  classNames,
  small,
  dark,
}: IPropTypes) => {
  return (
    <section
      id={sectionId}
      className={`px-6 ${small ? "py-12" : "py-24"} ${dark && "bg-gray-900"} ${
        classNames && classNames
      }`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
