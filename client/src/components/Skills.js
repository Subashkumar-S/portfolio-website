import React from "react";
import Card from "./Card";
import {
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import { SiNextdotjs, SiFirebase } from "react-icons/si";


const Skills = ({color}) => {
  const iconData = [
    { icon: DiJava, title: "Java" },
    { icon: DiJavascript, title: "JavaScript" },
    { icon: DiHtml5, title: "HTML" },
    { icon: DiCss3, title: "CSS" },
    { icon: DiReact, title: "React" },
    { icon: DiNodejs, title: "NodeJS" },
    { icon: DiMongodb, title: "MongoDB" },
    { icon: DiGit, title: "Git" },
    { icon: SiFirebase, title: "Firebase" },
    { icon: SiNextdotjs, title: "NextJs" },
  ];

  return (
    <div className="text-center w-full">
      <h4 className="text-3xl mb-8 font-palanquin font-bold"> My <span style={{color}}>Skills</span> </h4>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {iconData.map((item, index) => (
          <Card color={color} key={index}>
            <item.icon   className="text-4xl"/>
            <h4 className="mt-2 font-semibold">{item.title}</h4>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
