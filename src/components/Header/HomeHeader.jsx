import React from "react";
import MobileImage from "../../assets/images/MobileIcon.png";
import OrangeLinear from "../../assets/images/OrangeLinear.png";
import PinkLinear from "../../assets/images/PinkLinear.png";
import Navbar from "../Navbar/Navbar";

const HomeHeader = () => {
  return (
    <div className="h-[90vh] md:h-screen overflow-hidden w-full bg-black text-white flex justify-center flex-col items-center gap-y-14 md:gap-y-7 md:pt-6 xsm:pt-6 sm:pt-0">
      {/* <Navbar /> */}
      <div className="flex justify-center flex-col items-center gap-y-3 w-full">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-4xl lg:text-6xl xl:text-8xl md:text-7xl sm:text-5xl font-bold font-spartan "
        >
          WHERE IDEAS
        </div>
        <div className="text-2xl lg:text-4xl xl:text-7xl md:text-5xl sm:text-3xl  font-bold font-spartan">
          CODE TO LIFE!
        </div>
        <div className="max-w-[500px] text-center text-lg font-spartan">
          At AppSpot, we are a team of passionate software developers who are
          committed to delivering exceptional results.
        </div>
      </div>
      <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] z-0">
        <button className="relative inline-block px-6 py-3 font-semibold text-white bg-black hover:bg-transparent rounded-full transition-all ease-in-out duration-500">
          Get Started
        </button>
      </div>
      <img
        src={MobileImage}
        alt="Image not found"
        className="z-10 w-[50vw] sm:w-[30vw] max-w-full h-auto"
      />
      <img
        src={OrangeLinear}
        alt="Image not found"
        className="w-[600px] absolute left-0 top-1/2 transform -translate-y-1/2 -z-10"
      />
      <img
        src={PinkLinear}
        alt="Image not found"
        className="w-[600px] absolute right-0 top-1/2 transform -translate-y-1/2 -z-10"
      />
    </div>
  );
};

export default HomeHeader;
