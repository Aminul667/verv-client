import { IoLocationOutline } from "react-icons/io5";
import logo from "../../../assets/images/logo.png";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 sm:p-9">
      <div className="max-w-[1216px]  m-auto">
        <div className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap">
          <div className="w-full sm:w-[25%] ">
            <img src={logo} alt="logo" className="w-[150px] mb-[20px]" />
            <div className="flex flex-col gap-[20px] text-primary">
              <span>
                <a className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer">
                  <IoLocationOutline className="text-[1.2rem]" />
                  35A Highbury Corner, N5 1RA
                </a>
              </span>
              <span>
                <a className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                  <MdOutlineLocalPhone className="text-[1.1rem]" />
                  0207 170 8030
                </a>
              </span>
              <span>
                <a className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                  <MdOutlineEmail className="text-[1.1rem]" />
                  hello@verv.org
                </a>
              </span>
            </div>
          </div>

          <div className="">
            <h3 className="text-[1.2rem] font-semibold text-text mb-2">
              ABOUT
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Company
              </p>
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                How it works
              </p>
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Contact
              </p>
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Investors
              </p>
            </div>
          </div>

          <div className="">
            <h3 className="text-[1.2rem] font-semibold text-text mb-2">RENT</h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Rent Properties
              </p>
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Reference Tenant
              </p>
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Landlord Hub
              </p>
            </div>
          </div>

          <div className="">
            <h3 className="text-[1.2rem] font-semibold text-text mb-2">
              TERMS & PRIVACY
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Trust & Safety
              </p>
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Terms of Service
              </p>
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Privacy Policy
              </p>
            </div>
          </div>

          <div className="">
            <h3 className="text-[1.2rem] font-semibold text-text mb-2">
              RESOURCES
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Blog
              </p>
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Guides
              </p>
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                FAQ
              </p>
              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">
                Help Center
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t-2">
          <p>Copyright © 2024 Verv. All rights reserved</p>
          <div className="flex justify-between items-center gap-5">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
