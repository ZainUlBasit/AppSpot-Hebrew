import React from "react";
const MainHeader = ({ HeroImg, title, subtitle, path }) => {
  return (
    <div className="relative bg-black">
      <img
        src={HeroImg}
        alt=""
        className="w-full h-96 object-cover opacity-20"
      />
      <div className="absolute top-0 left-0 flex flex-col h-full w-full">
        <div className="h-5 pl-14 pt-3 text-2xl font-medium text-white">
          {path}
        </div>
        <div className="flex flex-1 justify-center items-center flex-col w-full  h-full text-white font-spartan gap-y-3">
          <h1 className="font-semibold text-5xl text-center">{title}</h1>
          <p className="text-center px-3">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
