import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MainHeader from "../components/Header/MainHeader";
import PheroImg from "../assets/images/Portfolio.png";
import Heading from "../assets/images/Portfolio1.png";
import CardImg from "../assets/images/Portfolio2.png";
import cardLogo from "../assets/images/cardLogo.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import PortfolioCard from "../components/Card/PortfolioCard";
import PortfolioWrapper from "../components/Wrapper/PortfolioWrapper";
import Note from "../components/Section/Note";
import ContactCard from "../components/Card/ContactCard";
import Footer from "../components/Footer/Footer";
const Portfolio = () => {
  return (
    <div className="bg-[#0F0B07]">
      {/* <Navbar /> */}
      <MainHeader
        HeroImg={PheroImg}
        title="Portfolio"
        subtitle="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
        path="Home /
Portfolio"
      />
      <div className="pt-16 pb-2">
        <img src={Heading} alt="Heading" className="w-80" />
        <h1 className="text-4xl font-semibold -mt-9 text-white pb-5 px-14">
          See what we've <br />
          completed so far
        </h1>
      </div>
      <PortfolioWrapper>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </PortfolioWrapper>
      <Note />
      <ContactCard />
      {/* <Footer /> */}
    </div>
  );
};

export default Portfolio;
