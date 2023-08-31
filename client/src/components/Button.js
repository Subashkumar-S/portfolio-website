import React, {useState} from "react";

const Button = ({
  href,
  downloadLink,
  openInNewTab,
  children,
  color,
  ...rest
}) => {

  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (openInNewTab && href) {
      window.open(href, "_blank");
    }
  };

  const handleHover = () => {
    setHovered(!hovered);
  };

  const buttonStyle = {
    backgroundColor: hovered ? color : "",
    borderColor: color
  };

  if (downloadLink) {
    return (
      <a
        style={buttonStyle}
        onMouseEnter={handleHover}
      onMouseLeave={handleHover}
        href={downloadLink}
        download
        className={`text-primary-white text-center font-montserrat font-semibold py-2 px-6 rounded w-[150px] hover:text-active-white  border-2 border-solid  uppercase duration-500`}
        {...rest}
      >
        {children}
      </a>
    );
  }
  if (openInNewTab && href) {
    return (
      <a
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={` text-primary-white text-center font-montserrat font-semibold py-2 px-6 rounded w-[150px] hover:text-active-white border-2 border-solid   uppercase duration-500`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
    style={buttonStyle}
    onMouseEnter={handleHover}
    onMouseLeave={handleHover}
      className={`text-primary-white text-center font-montserrat font-semibold py-2 px-6 rounded w-[150px] hover:text-active-white  border-2 border-solid   uppercase duration-500`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;