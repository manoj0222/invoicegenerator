import React from "react";

const Logo = ({src}) => {
  return (
    <span className="border w-1/6 h-1/6 flex justify-center items-center">
      <img className="max-w-full max-h-full" alt="logo" src={src} />
    </span>
  );
};

export default Logo;
