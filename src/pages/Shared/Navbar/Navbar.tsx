import { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";

// react icons
import { IoIosArrowDown } from "react-icons/io";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling && "backdrop-blur-lg shadow-md"
      } shadow-lg sticky top-0 left-0 w-full max-w-[1600px] mx-auto  py-4 z-50`}
    >
      <div className="items-center justify-between gap-5 md:flex max-w-[1216px] m-auto">
        <img src={logo} alt="logo" className="w-[130px]" />
        <ul className="flex items-center gap-12 z-50 font-inter text-lg font-medium">
          <li className=" overflow-hidden hover:overflow-visible group relative">
            <a href="#Courses" className="flex items-center gap-3">
              About{" "}
              <IoIosArrowDown className=" group-hover:rotate-[180deg] transition-all duration-300" />
            </a>

            <div className="flex flex-col gap-5 w-[250px] shadow-drop p-6 translate-y-[100px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute top-[25px] left-0 bg-[#fff]">
              <p className="hover:text-textColor hover:tracking-wider transition-all duration-300 cursor-pointer">
                About Us
              </p>
              <p className="hover:text-textColor hover:tracking-wider transition-all duration-300 cursor-pointer">
                Our Location
              </p>
              <p className="hover:text-textColor hover:tracking-wider transition-all duration-300 cursor-pointer">
                Contact
              </p>
            </div>
          </li>
          <li className=" overflow-hidden hover:overflow-visible group relative">
            <a href="#Article" className="flex items-center gap-3">
              Pricing
              <IoIosArrowDown className=" group-hover:rotate-[180deg] transition-all duration-300" />
            </a>
            <div className="flex flex-col gap-5 w-[250px] shadow-drop p-6 translate-y-[100px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute top-[25px] left-0 bg-[#fff]">
              <p className="hover:text-textColor hover:tracking-wider transition-all duration-300 cursor-pointer">
                Price I
              </p>
              <p className="hover:text-textColor hover:tracking-wider transition-all duration-300 cursor-pointer">
                Price II
              </p>
              <p className="hover:text-textColor hover:tracking-wider transition-all duration-300 cursor-pointer">
                Price III
              </p>
            </div>
          </li>
          <li>
            <div className="flex items-center content-between gap-2 hover:text-textColor transition-all duration-300">
              <FaRegUserCircle className="text-2xl" />
              <Link to="/register">Sign In / Register</Link>
            </div>
          </li>

          <div className="btn rounded-full flex items-center content-between">
            <FaHome className="text-xl" />
            <p className="ml-2">Add Listing</p>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
