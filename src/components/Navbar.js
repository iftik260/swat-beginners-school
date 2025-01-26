import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/images/logo.png";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us-page" },
    { name: "Academics", link: "/academics-page" },
    { name: "Admissions", link: "/admissions" },
    { name: "Teachers", link: "/teachers" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-50 bg-white duration-500">
      <div className="container mx-auto p-4 flex items-center justify-between   ">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img className="w-[50px]" src={logo} alt="School Logo" />
          <div className="flex flex-col">
            <span className="text-[#4275F1] text-lg font-bold">
              Swat Beginners School
            </span>
            <span className="text-secondary text-xs tracking-[1px]">
              Aspiring for Quality Education
            </span>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl text-black hover:text-secondary absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center absolute md:static bg-white w-full md:w-auto left-0 md:pl-0 pl-9 transition-all duration-500 ease-in-out 
            ${open ? "top-14 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"}
          `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base text-black my-7 md:my-0"
            >
              <a href={link.link} className="hover:text-accent duration-300">
                {link.name}
              </a>
            </li>
          ))}
          <Button>Login</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
