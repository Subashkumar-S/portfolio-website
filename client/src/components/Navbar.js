import React, { useState, useEffect } from "react";
import { faBars, faHome, faMessage, faProjectDiagram, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Navbar = ({color}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  let Links = [
    { name: "HOME", link: "#home" , icon: faHome},
    { name: "ABOUT", link: "#about", icon: faUser },
    { name: "PROJECTS", link: "#projects", icon: faProjectDiagram },
    { name: "CONTACT", link: "#contact", icon: faMessage },
  ];

  return (
    <header className="fixed top-0 w-full text-primary-white max-md:text-active-white">
      <nav className={` absolute w-full flex items-center justify-between flex-wrap px-6 md:px-16 py-4  ${isScrolled || isOpen ? 'backdrop-blur-xl bg-primary-white bg-opacity-20 transition-all duration-300 ease-in-out' : 'bg-transparent'}`}>
        <a href="/" className="font-rubik text-4xl text-active-white opacity-60 hover:opacity-100">
          <h2>SK</h2>
        </a>
        <div className="block md:hidden text-active-white opacity-60 hover:opacity-100">
          <button
            onClick={() => setIsOpen(!isOpen)}
            
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <div
          className={`w-full block md:flex gap-16 z-1 md:w-auto ${
            isOpen ? "block transition-all duration-300 ease-in-out" : "hidden"
          }`}
        >
          <div className="text-lg flex flex-col md:flex-row items-center justify-center gap-8 flex-1 font-palanquin font-semibold ">
            {Links.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`flex  items-center justify-center gap-2 opacity-70 hover:opacity-100`}
              >
                <FontAwesomeIcon icon={item.icon}/>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
