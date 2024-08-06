import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MainHeader from "../components/Header/MainHeader";
import CheroImg from "../assets/images/CheroImg.png";
import Heading from "../assets/images/case1.png";
import CardImg from "../assets/images/Portfolio2.png";
import App from "../assets/images/App.png";
import Google from "../assets/images/Google.png";
import SmallHeading from "../assets/images/vPmbl.png";
import LargeHeading from "../assets/images/Heading1.png";
import Heading2 from "../assets/images/Heading2.png";
import Heading3 from "../assets/images/Heading3.png";
import Heading4 from "../assets/images/Heading4.png";
import case3 from "../assets/images/case3.png";
import case3Mbl from "../assets/images/case3Mbl.png";
import case2 from "../assets/images/case2.png";
import case4 from "../assets/images/case4.png";
import TextSection from "../components/Section/TextSection";
import Note from "../components/Section/Note";
import ContactCard from "../components/Card/ContactCard";
import Footer from "../components/Footer/Footer";

const CaseStudy = () => {
  const [BgImg, setBgImg] = useState(case3);
  const pro = "Wias Project";
  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 640) {
        setBgImg(case3Mbl);
      } else {
        setBgImg(case3);
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);

    return () => {
      window.removeEventListener("resize", updateImage);
    };
  }, [case3, case3Mbl]);
  return (
    <div className="bg-[#0F0B07]">
      {/* <Navbar /> */}
      <MainHeader
        HeroImg={CheroImg}
        title={`Case Study of ${pro}`}
        subtitle="Explore a detailed case study of our well-crafted digital projects that demonstrate our creativity and expertise."
        path="Home/Portfolio/Wias Project"
      />
      <div className="pt-16 pb-2">
        <TextSection
          largeImg={Heading}
          smallImg={Heading}
          title="Project Overview"
          subTitle="  The Wias App is a unique digital platform designed to help users
            prepare and share important messages, secrets, or information with
            trusted individuals after their passing. Recognizing the importance
            of leaving a legacy and ensuring that loved ones have access to
            vital information, Wias offers a secure and confidential space for
            users to store their messages."
        />

        <div className="px-14 w-full h-full py-8 bg-[#0F0B07]">
          <div className="w-full h-60 sm:h-[500px] mb-4">
            <img
              src={CardImg}
              alt=""
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
          <div className="flex justify-end w-full gap-3 sm:gap-5 sm:pt-4">
            <button className="w-48 h-12 sm:w-60 sm:h-16">
              <img
                src={Google}
                alt=""
                className="w-full h-full rounded-md object-contain"
              />
            </button>
            <button className="w-48 h-12 sm:w-60 sm:h-16">
              <img
                src={App}
                alt=""
                className="w-full h-full rounded-md  object-contain"
              />
            </button>
          </div>
        </div>
        <TextSection
          largeImg={LargeHeading}
          smallImg={SmallHeading}
          title="Validating the Problem"
          subTitle="Before the development of the Wias App, individuals faced significant
          challenges in managing and securely sharing important personal
          information for the future. Common issues included security concerns
          due to the lack of secure methods to store and transmit sensitive
          information, the absence of a streamlined way to ensure accessibility
          of important messages after one's passing, and legal and ethical
          uncertainty, which caused hesitancy in preparing for the future."
          className="w-72 text-xl -mt-[16px] sm:w-96"
        />
        <TextSection
          largeImg={Heading2}
          smallImg={Heading2}
          title="Solution"
          subTitle="The Wias App addresses these challenges by offering robust security features with advanced encryption protocols, ensuring message confidentiality. It provides ease of accessibility, allowing users to manage and share messages with designated recipients seamlessly. Additionally, the app adheres to data protection laws and ethical considerations, offering clarity on the legal implications of posthumous communication."
          className="w-40 text-3xl sm:text-5xl -mt-[16px] sm:w-48 sm:-mt-[14px]"
        />
      </div>
      <div className="flex justify-center items-center w-full flex-col ">
        <div className="text-white font-spartan ">
          <img src={Heading3} alt="Heading" className="w-80" />

          <h1
            className={`text-4xl text-center font-semibold w-80 -mt-4 text-white pb-5`}
          >
            Overall Process
          </h1>
        </div>
        <img src={BgImg} alt="Heading" className="w-24 h-1/6 sm:w-2/3" />
      </div>
      <div className="flex justify-center items-center w-full flex-col py-20">
        <div className="text-white font-spartan flex justify-center items-center w-full flex-col ">
          <img src={Heading4} alt="Heading" className="w-60" />

          <h1
            className={`text-[44px] text-center font-semibold w-96 -mt-7 text-white pb-5`}
          >
            User Flow
          </h1>
        </div>
        <div className="relative bg-black w-full h-full">
          <img
            src={case2}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute pl-8 bottom-0 lg:pl-96 flex flex-col h-full w-full py-6">
            <img
              src={case4}
              alt=""
              className="w-full h-full object-contain flex text-center"
            />
          </div>
        </div>
      </div>
      <Note />
      <ContactCard />
      {/* <Footer /> */}
    </div>
  );
};

export default CaseStudy;
