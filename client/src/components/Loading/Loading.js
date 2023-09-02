import React from "react";
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container h-screen w-full bg-active-black-1 ">
      <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 h-full w-full m-auto flex items-center justify-center">
        <span class="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
