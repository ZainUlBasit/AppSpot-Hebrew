import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MainHeader from "../components/Header/MainHeader";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";
import Note from "../components/Section/Note";
import ContactCard from "../components/Card/ContactCard";
import Footer from "../components/Footer/Footer";
import ServicesSection from "../components/Section/ServicesSection";
import { IoIosArrowDown } from "react-icons/io";
import ServiceWrapper from "../components/Wrapper/ServiceWrapper";
import ServiceCard from "../components/Card/ServiceCard";
import ServiceImg from "../assets/images/services.png";
import { useParams } from "react-router-dom";

const Services = () => {
  const { id } = useParams();
  return (
    <>
      {/* <Navbar /> */}
      <MainHeader
        HeroImg={ServiceImg}
        title="Services"
        subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        path={id ? "Home/services/UI/UX" : "Home/services"}
      />
      {/* <ServicesSection /> */}

      {/* <ServiceWrapper
        title={"User Experience (UX) Design"}
        // className={`border-t w-[90%] border-gray-300`}
      >
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
          className={`border-l`}
        />
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
        />
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
        />
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
        />
      </ServiceWrapper>
      <ServiceWrapper
        title={"User Experience (UX) Design"}
        // className={`border-t w-[90%] border-gray-300`}
      >
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
          className={`border-l`}
        />
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
        />
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
        />
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
        />
      </ServiceWrapper>
      <ServiceWrapper
        title={"User Experience (UX) Design"}
        // className={`border-t w-[90%] border-gray-300`}
      >
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
          className={`border-l`}
        />
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
        />
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
        />
        <ServiceCard
          icon={<IoIosArrowDown />}
          title={" User Research and Persona Development"}
        />
      </ServiceWrapper> */}
      <ServiceCarousel />
      <Note />
      <ContactCard />
      {/* <Footer /> */}
    </>
  );
};

export default Services;
{
  /* <div className="px-8 w-full  bg-[#0F0B07] text-white">
        <h1 className="text-2xl font-bold py-6">User Experience (UX) Design</h1>
        <div className="flex w-full ">
          <div className="w-1/4 gap-y-4 border border-gray-300 h-52 flex-col flex justify-center items-start px-6">
            <div className="w-16 h-16 bg-[#473227] flex justify-center items-center rounded-md">
              <IoIosArrowDown size={50} color="#E76364" />
            </div>
            <p className="font-medium text-base font-spartan">
              User Research and Persona Development
            </p>
          </div>
          <div className="w-1/4 gap-y-4 border border-gray-300 h-52 flex-col flex justify-center items-start px-6">
            <div className="w-16 h-16 bg-[#473227] flex justify-center items-center rounded-md">
              <IoIosArrowDown size={50} color="#E76364" />
            </div>
            <p className="font-medium text-base font-spartan">
              User Research and Persona Development
            </p>
          </div>
          <div className="w-1/4 gap-y-4 border border-gray-300 h-52 flex-col flex justify-center items-start px-6">
            <div className="w-16 h-16 bg-[#473227] flex justify-center items-center rounded-md">
              <IoIosArrowDown size={50} color="#E76364" />
            </div>
            <p className="font-medium text-base font-spartan">
              User Research and Persona Development
            </p>
          </div>
          <div className="w-1/4 gap-y-4 border border-gray-300 h-52 flex-col flex justify-center items-start px-6">
            <div className="w-16 h-16 bg-[#473227] flex justify-center items-center rounded-md">
              <IoIosArrowDown size={50} color="#E76364" />
            </div>
            <p className="font-medium text-base font-spartan">
              User Research and Persona Development
            </p>
          </div>
        </div>
      </div> */
}
