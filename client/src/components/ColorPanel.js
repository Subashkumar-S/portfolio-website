import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";


const ColorPanel = ({onColorChange}) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };


  const changeColor = color => {
    onColorChange(color); 
  };

  

  return (
    <div
      className={`fixed top-1/2  z-50  flex ${open ? "right-0" : "-right-[120px]"
        } transition-all duration-700 ease-in-out`}
    >
      <button
        className="w-10 h-10 text-3xl bg-primary-white flex items-center justify-center "
        onClick={handleToggle}
      >
        <FiSettings />
      </button>
      <div className="bg-active-white w-[120px] h-20 flex flex-wrap">
        <button
          className="w-8 h-8 bg-pink m-1 rounded-md"
          onClick={() => changeColor("#c70039")}
        ></button>
        <button
          className="w-8 h-8 bg-blue m-1 rounded-md"
          onClick={() => changeColor("#4338ca")}
        ></button>
        <button
          className="w-8 h-8 bg-purple m-1 rounded-md"
          onClick={() => changeColor("#8739f9")}
        ></button>
        <button
          className="w-8 h-8 bg-orange m-1 rounded-md"
          onClick={() => changeColor("#bc3908")}
        ></button>
        <button
          className="w-8 h-8 bg-[#00909e] m-1 rounded-md"
          onClick={() => changeColor("#00909e")}
        ></button>
        <button
          className="w-8 h-8 bg-[#04A777] m-1 rounded-md"
          onClick={() => changeColor("#04A777")}
        ></button>
      </div>
    </div>
  );
};

export default ColorPanel;