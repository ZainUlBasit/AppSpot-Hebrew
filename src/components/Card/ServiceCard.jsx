import React from "react";

const ServiceCard = ({ icon, title, className }) => {
  return (
    // w-[100%] lg:w-[48%] md:[40%] xl:[48%] sm:w-[48%]
    <div
      className={`w-1/2 lg:w-1/4 gap-y-4 border-y border-r border-gray-300 h-52 flex-col flex justify-center items-start px-6 ${className}`}
    >
      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-[#473227] flex justify-center items-center rounded-md">
        {/* <IoIosArrowDown size={50} color="#E76364" /> */}
        <span className="text-[#E76364] text-2xl lg:text-4xl">{icon}</span>
      </div>
      <p className="font-light lg:font-medium text-sm lg:text-base font-spartan">
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;
