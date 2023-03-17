import React, { useState } from "react";

import { logo, menu, close } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((menu, index) => {
          return (
            <li
              key={index}
              className={`font-poppins font-normal cursor-pointer text-[16px]  text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${menu.id}`}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex-1 justify-end items-center flex">
        <img
          src={toggle ? close : menu}
          alt="menus"
          className="h-[28px] w-[28ox] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((menu, index) => {
              return (
                <li
                  key={index}
                  className={`font-poppins font-normal cursor-pointer text-[16px]  text-white ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }`}
                >
                  <a href={`#${menu.id}`}>{menu.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
