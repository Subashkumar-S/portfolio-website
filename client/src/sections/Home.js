import React from "react";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import homeImage from "../assets/home.webp";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodecademy } from "react-icons/si";
import Socials from "../components/Socials";
import ParticlesComponent from "../components/ParticleComponent";

const Home = ({ color }) => {
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

    return () => {
      typed.destroy();
    };
  }, []);

  const socialMedia = [
    { icon: FaGithub, link: "https://github.com/Subashkumar-S" },
    { icon: SiLeetcode, link: "https://leetcode.com/Subash2232/" },
    {
      icon: SiCodecademy,
      link: "https://www.codecademy.com/profiles/Subashkumar_2232",
    },
  ];
  return (
    <section
      id="home"
      className="bg-active-black relative min-h-screen text-primary-white"
    >
      {/* particles js component */}
      <ParticlesComponent />
      {/* particles js component */}

      <div className="absolute w-full">
        <div className="relative isolate">
          <div className="h-screen max-w-7xl m-auto px-[10vw] py-[15vh]">
            <div className="flex flex-col items-center justify-between  md:flex-row h-full">
              <div className="text-center flex flex-col md:items-start gap-2 font-palanquin md:text-start">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-textColor sm:text-4xl flex-wrap">
                  Hi, I am <span style={{color}}>Subashkumar</span>.
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold">I'm a <span style={{color}}>Front End Developer</span>.</h2>
                <p className="text-xl md:text-2xl font-semibold">
                  I develop <span ref={el} style={{ color }}></span>
                </p>
                <div className="mt-4 flex items-center justify-center gap-x-6">
                  {socialMedia.map((item, index) => (
                    <a key={index} href={item.link}>
                      <Socials>
                        <item.icon />
                      </Socials>
                    </a>
                  ))}
                </div>
              </div>
              <div>
              <img src={homeImage} alt="home" width={300} height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
