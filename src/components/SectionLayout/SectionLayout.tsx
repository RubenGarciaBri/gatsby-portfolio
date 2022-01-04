import * as React from "react";

interface IPropTypes {
  sectionId: string;
  children: React.ReactNode;
  classNames?: string;
  small?: boolean;
}

const SectionLayout = ({
  sectionId,
  children,
  classNames,
  small,
}: IPropTypes) => {
  return (
    <section
      id={sectionId}
      className={`px-4 ${small ? "py-12" : "py-24"} ${
        classNames && classNames
      }`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
