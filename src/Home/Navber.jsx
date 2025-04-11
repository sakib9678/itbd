import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegClock, FaSchool } from "react-icons/fa";
import { MdLocalPharmacy, MdOutlineArrowDropDown, MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../assets/images/itbd-logo.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import {
  FaStore,
  FaBuilding,
  FaTruck,
  FaScissors,
  FaBook
} from "react-icons/fa6";
import BoiAcheIcon from "../assets/images/boiAcheIcon.png";
import EduPoribarIcon from "../assets/images/eduporibar-icon.png";
import BDCODAIcon from "../assets/images/bdcoda-icon.png";
import LaptopAcheIcon from "../assets/images/laptopAche-icon.png";
import KazAcheIcon from "../assets/images/kazAche-icon.png";
import CourierAcheIcon from "../assets/images/courierAche-icon.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);

  return (
    <section className="sticky w-full top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-[#0471BA] via-[#1a5c9e] to-[#0e0e0e] md:block hidden py-2.5 animate-gradient">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <div className="flex items-center gap-2 hover:text-[#f76b1d] transition-all">
                <FaRegClock className="text-white" />
                <p className="text-sm text-white">Sat-Thu: 9:00am-06:00pm</p>
              </div>
              <div className="flex items-center gap-2 hover:text-[#f76b1d] transition-all">
                <MdOutlineMarkEmailRead className="text-white" />
                <a
                  href="mailto:admin@ibrahimtechbd.com"
                  className="text-sm text-white hover:underline"
                >
                  admin@ibrahimtechbd.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 hover:text-[#f76b1d] transition-all">
              <FiPhoneCall className="text-white animate-bounce" />
              <a
                href="tel:+8801307-279400"
                className="text-sm text-white hover:underline"
              >
                +8801307-279400
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white md:bg-white/90 md:backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  className="w-[180px] hover:scale-105 transition-transform duration-300"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#0471BA] to-[#083462] text-white px-7 py-2.5 rounded-full
                          hover:scale-105 hover:shadow-[0_8px_25px_-5px_rgba(4,113,186,0.3)] 
                          transition-all duration-300 flex items-center gap-2"
              >
                <span>Get In Touch</span>
                <BsArrowRightCircleFill className="animate-pulse" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="md:hidden text-2xl text-[#313131] hover:text-[#0471BA] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpenMenu ? <IoCloseCircleOutline /> : <AiOutlineMenuFold />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${isOpenMenu ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={() => setIsOpenMenu(false)}
        >
          <div
            ref={menuRef}
            className={`w-[280px] h-full bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${isOpenMenu ? "translate-x-0" : "-translate-x-full"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5">
              <img className="w-[150px] mb-6" src={logo} alt="logo" />
              <NavLinks mobile />
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

const NavLinks = ({ mobile }) => {
  const [openDropdowns, setOpenDropdowns] = useState({
    about: false,
    projects: false,
    industries: false
  });

  const toggleDropdown = (menu) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <ul className={`${mobile ? "space-y-4" : "flex items-center space-x-8"}`}>
      {/* Home Link */}
      <li>
        <NavLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `text-base font-medium transition-all relative
            ${isActive ? "text-[#0471BA]" : "text-[#313131]"}
            ${mobile
              ? "block py-2"
              : "hover:text-[#0471BA] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[#0471BA] after:transition-all hover:after:w-full"
            }`
          }
        >
          Home
        </NavLink>
      </li>

      {/* About Dropdown */}
      <li className={`relative ${mobile ? "" : "group"}`}>
        <div
          className="flex items-center gap-1 cursor-pointer text-[#313131] hover:text-[#1C487E] duration-300"
          onClick={() => mobile && toggleDropdown('about')}
        >
          <span>About</span>
          <MdOutlineArrowDropDown className={`${mobile && openDropdowns.about ? "rotate-180" : ""} ${!mobile ? "group-hover:rotate-180" : ""} transition-transform duration-300`} />
        </div>
        <ul
          className={`${mobile ? (openDropdowns.about ? "max-h-[500px] py-2" : "max-h-0") : "absolute top-full group-hover:h-auto h-0"} 
            bg-white/95 backdrop-blur-sm ${!mobile && "shadow-xl rounded-lg left-0"}
            min-w-[200px] whitespace-nowrap overflow-hidden transition-all duration-300 z-50`}
        >
          <li className="transform hover:translate-x-2 transition-transform">
            <NavLink
              to="/about/company-overview"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-[#0471BA]"
            >
              <span className="w-2 h-2 rounded-full bg-[#0471BA]"></span>
              Company Overview
            </NavLink>
          </li>
          <li className="transform hover:translate-x-2 transition-transform">
            <NavLink
              to="/about/our-team"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-[#0471BA]"
            >
              <span className="w-2 h-2 rounded-full bg-[#0471BA]"></span>
              Our Team
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Projects Dropdown */}
      <li className={`relative ${mobile ? "" : "group"}`}>
        <div
          className="flex items-center gap-2 cursor-pointer text-[#313131] hover:text-[#1C487E] duration-300"
          onClick={() => mobile && toggleDropdown('projects')}
        >
          <span>Projects</span>
          <MdOutlineArrowDropDown className={`${mobile && openDropdowns.projects ? "rotate-180" : ""} ${!mobile ? "group-hover:rotate-180" : ""} transition-transform duration-300`} />
        </div>
        <ul
          className={`${mobile ? (openDropdowns.projects ? "max-h-[1000px] py-2" : "max-h-0") : "absolute top-full group-hover:h-auto h-0"}
            bg-white/95 backdrop-blur-sm ${!mobile && "shadow-xl rounded-lg left-0"}
            ${mobile ? "grid grid-cols-1" : "w-[600px] grid grid-cols-1 md:grid-cols-2"}
            whitespace-nowrap overflow-hidden transition-all duration-300 z-50`}
        >
          {[
            {
              icon: <FaSchool className="text-3xl text-blue-600" />,
              name: "School Management",
              to: "/project/school-management"
            },
            {
              icon: <FaCartShopping className="text-3xl text-green-600" />,
              name: "E-Commerce Website",
              to: "/project/e-commerce-website"
            },
            {
              icon: <MdLocalPharmacy className="text-3xl text-red-600" />,
              name: "Pharmacy Software",
              to: "/project/pharmacy-software"
            },
            {
              icon: <FaStore className="text-3xl text-purple-600" />,
              name: "POS Management",
              to: "/project/pos-management"
            },
            {
              icon: <FaBuilding className="text-3xl text-gray-600" />,
              name: "ERP Software",
              to: "/project/erp-software"
            },
            {
              icon: <FaTruck className="text-3xl text-orange-600" />,
              name: "Courier Management",
              to: "/project/courier-management"
            },
            {
              icon: <FaScissors className="text-3xl text-pink-600" />,
              name: "Tailor Management",
              to: "/project/tailor-management"
            },
            {
              icon: <FaBook className="text-3xl text-yellow-600" />,
              name: "Publication Website",
              to: "/project/publication-website"
            },
          ].map((item) => (
            <li
              key={item.to}
              className="transform hover:translate-x-2 transition-transform w-64 h-20 py-6"
            >
              <NavLink
                to={item.to}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-[#0471BA]"
              >
                {item.icon}{item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>

      {/* Industries Dropdown */}
      <li className={`relative ${mobile ? "" : "group"}`}>
        <div
          className="flex items-center gap-1 cursor-pointer text-[#313131] hover:text-[#1C487E] duration-300"
          onClick={() => mobile && toggleDropdown('industries')}
        >
          <span>Industries</span>
          <MdOutlineArrowDropDown className={`${mobile && openDropdowns.industries ? "rotate-180" : ""} ${!mobile ? "group-hover:rotate-180" : ""} transition-transform duration-300`} />
        </div>
        <ul
          className={`${mobile ? (openDropdowns.industries ? "max-h-[1000px] py-2" : "max-h-0") : "absolute top-full group-hover:h-auto h-0"}
            bg-white/95 backdrop-blur-sm ${!mobile && "shadow-xl rounded-lg left-0"}
            ${mobile ? "grid grid-cols-1" : "w-[400px] grid grid-cols-1 md:grid-cols-2"}
            whitespace-nowrap overflow-hidden transition-all duration-300 z-50`}
        >
          {[
            { image: EduPoribarIcon, name: "Edu Poribar", to: "/industries/edu-poribar" },
            { image: BDCODAIcon, name: "BDCODA", to: "/industries/bdcoda" },
            { image: BoiAcheIcon, name: "Boi Ache", to: "/industries/boi-ache" },
            { image: LaptopAcheIcon, name: "Laptop Ache", to: "/industries/laptop-ache" },
            { image: CourierAcheIcon, name: "Courier Ache", to: "/industries/courier-ache" },
            { image: KazAcheIcon, name: "Kaz Ache", to: "/industries/kaz-ache" },
          ].map((item) => (
            <li
              key={item.to}
              className="transform hover:translate-x-2 transition-transform w-44 h-20 py-6"
            >
              <NavLink
                to={item.to}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-[#0471BA]"
              >
                <div className="flex items-center gap-2">
                  <img src={item.image} alt="" className="h-10" />
                  <p>{item.name}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </li>

      {/* Other Navigation Links */}
      {["Services", "Career", "Blog", "Contact"].map((item) => (
        <li key={item}>
          <NavLink
            to={`/${item.toLowerCase()}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `text-base font-medium transition-all relative
              ${isActive ? "text-[#0471BA]" : "text-[#313131]"}
              ${mobile
                ? "block py-2"
                : "hover:text-[#0471BA] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-[#0471BA] after:transition-all hover:after:w-full"
              }`
            }
          >
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;