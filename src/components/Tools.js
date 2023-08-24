import React from "react";
import Card from "./Card";
import {
  SiVisualstudiocode,
  SiIntellijidea,
  SiPostman,
  SiAndroidstudio,

} from "react-icons/si";



const Tools = () => {
  const iconData = [
    { icon: SiVisualstudiocode, title: "VS Code" },
    { icon: SiIntellijidea, title: "IntelliJ IDEA" },
    { icon: SiAndroidstudio, title: "Android Studio" },
    { icon: SiPostman, title: "Postman" },

  ];

  return (
    <div className="text-center w-full">
      <h4 className="text-3xl mb-8"><span className="text-pink">Tools </span>I use, </h4>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {iconData.map((item, index) => (
          <Card key={index}>
            <item.icon   className="text-4xl"/>
            <h4 className="mt-2 font-semibold">{item.title}</h4>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tools;
