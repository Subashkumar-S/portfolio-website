import React, { useState } from "react";
import "../styles.css";

const Card = ({ children, color }) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    borderColor: color,
    boxShadow: `0 4px 6px -1px ${color}`,
  };

  const hoverStyle = {
    backgroundColor: color,
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      style={{
        ...cardStyle,
        ...(hovered ? hoverStyle : null),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`.card py-2 w-32 md:py-4 flex flex-col font-montserrat  items-center text-primary-white hover:text-active-white border-[1px] border-solid rounded-md  shadow-md `}
    >
      {children}
    </div>
  );
};

export default Card;
