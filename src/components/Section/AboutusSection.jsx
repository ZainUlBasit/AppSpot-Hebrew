import React from "react";

const AboutusSection = ({ Heading, title, subtitle, sideImg, className }) => {
  return (
    <div
      className={` w-full h-full flex justify-between gap-4 text-white font-spartan pt-16 md:flex-row flex-col ${className}`}
    >
      <div className="w-full md:w-5/12">
        <img src={Heading} alt="Heading" className="w-[350px] sm:[400]" />
        <div className="pl-[4.5rem] pr-[1rem] md:pr-0">
          <h1 className="text-3xl font-bold -mt-8">{title}</h1>
          <p className="text-base sm:text-base md:text-lg font-normal w-fit pt-3">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="w-full md:w-7/12 h-[350px] flex justify-center items-center">
        <div className="object-cover w-3/4 h-80">
          <img src={sideImg} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutusSection;
