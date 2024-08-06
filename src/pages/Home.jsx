import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SideMenu from "../components/Navbar/SideMenu";
import HomeHeader from "../components/Header/HomeHeader";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";
import ProjectSection from "../components/Section/ProjectSection";
import CardWrapper from "../components/Wrapper/CardWrapper";
import TestimonialSection from "../components/Section/TestimonialSection";
import Note from "../components/Section/Note";
import ContactCard from "../components/Card/ContactCard";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <SideMenu /> */}
      <HomeHeader />
      {/* <Carousel /> */}
      <ServiceCarousel />
      <ProjectSection />
      <CardWrapper />
      {/* <TestimonialSection /> */}
      <Note />
      <ContactCard />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
