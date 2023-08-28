import React from "react";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import homeImage from "../assets/home.webp";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodecademy } from "react-icons/si";
import Socials from "../components/Socials";
import { useTheme } from "../components/ThemeContext";

const Home = () => {
  const { color } = useTheme();
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["web apps.", "mobile apps."],
      startDelay: 300,
      typeSpeed: 300,
      backSpeed: 300,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  const socialMedia = [
    { icon: FaGithub, link: "https://github.com/Subashkumar-S" },
    { icon: SiLeetcode, link: "https://leetcode.com/Subash2232/" },
    { icon: SiCodecademy, link: "https://www.codecademy.com/profiles/Subashkumar_2232" },
  ];
  return (
    <section
      id="home"
      className="w-full pt-16 h-screen px-16 bg-dark-blue text-primary-white md:flex-row justify-around items-center flex flex-col"
    >
      <div className="home-container flex flex-col gap-4 font-palanquin font-bold">
        <h4 className="text-4xl font-montserrat">Hello,</h4>
        <h2 className="text-5xl font-semibold ">
          I'm <span className={`text-${color}`}>Subashkumar</span>.
        </h2>
        <p className="text-2xl">
          I develop <span ref={el} className={`text-${color}`}></span>
        </p>
        <div className="socials flex gap-8 text-2xl">
          {socialMedia.map((item, index) => (
            <a key={index} href={item.link}>
              <Socials>
                <item.icon />
              </Socials>
            </a>
          ))}
        </div>
      </div>
      <img src={homeImage} alt="home" width={300} height={300} />
    </section>
  );
};

export default Home;
