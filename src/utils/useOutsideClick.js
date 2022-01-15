import * as React from "React";

export const useOutsideClick = (ref, callback) => {
  const handleClick = event => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    callback(event);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
};
