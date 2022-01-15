import * as React from "react";

// import { useOutsideClick } from "../../../utils/useOutsideClick";
import { FaBars } from "react-icons/fa";
import { navData } from "../../../data/navData";
import Links from "./Links/Links";
import MobileLinks from "./MobileLinks/MobileLinks";

// TODO: Investigate why this function doesn't work and eventually import it
const useOutsideClick = (ref, callback) => {
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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const ref = React.useRef();

  useOutsideClick(ref, () => setIsMobileMenuOpen(false));

  return (
    <nav className="z-50 py-5 navbar">
      <div className="flex items-center justify-between px-8">
        <div className="logo-box">
          <a
            href="#section-1"
            className="flex text-5xl font-bold text-gray-900 logo"
          >
            RG
          </a>
        </div>
        <div className="hidden lg:block">
          <Links navLinks={navData} />
        </div>
        <div ref={ref} className="relative lg:hidden">
          <FaBars
            size={24}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl cursor-pointer lg:hidden"
          />
          {isMobileMenuOpen && <MobileLinks navLinks={navData} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
