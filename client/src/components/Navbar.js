import React, { useState, useEffect } from "react";
import {
  faBars,
  faHome,
  faMessage,
  faProjectDiagram,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css"

const Navbar = ({ color }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  let Links = [
    { name: "HOME", link: "#home", icon: faHome },
    { name: "ABOUT", link: "#about", icon: faUser },
    { name: "PROJECTS", link: "#projects", icon: faProjectDiagram },
    { name: "CONTACT", link: "#contact", icon: faMessage },
  ];

  return (
    <header className="fixed top-0 w-full text-primary-white max-md:text-active-white">
      <nav 
        id="navbar"
        className={` absolute w-full flex items-center justify-between flex-wrap px-6 md:px-16 py-4  ${
          isScrolled || isOpen
            ? "bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 bg-[#ffffff14]"
            : "bg-transparent"
        }`}
      >
        <a
          href="/"
          className="font-rubik text-4xl text-active-white opacity-60 hover:opacity-100"
        >
          <h2>SK</h2>
        </a>
        <div className="block md:hidden text-active-white opacity-60 hover:opacity-100">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <div
          id="navlinks"
          className={`w-full block md:flex gap-16 z-1 md:w-auto ${
            isOpen ? "block  " : "hidden"
          }`}
        >
          <div  className="text-lg  flex-1  font-palanquin font-semibold ">
            <ul className="flex flex-col md:flex-row items-center justify-center gap-8">
              {Links.map((item, index) => (
                <li key={index}>
                  <a
                  
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`flex  items-center justify-center gap-2 opacity-70 hover:opacity-100`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="font-bold text-active-white w-4 h-4"
                  />
                  {item.name}
                </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
