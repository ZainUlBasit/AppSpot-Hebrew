import { useState } from "react";
import HomeHeader from "./components/Header/HomeHeader";
import CarouselSlider from "./components/Slider/CarouselSlider";
import Carousel from "./components/Slider/Carousel";
import ServiceCarousel from "./components/Carousel/ServiceCarousel";
import CardWrapper from "./components/Wrapper/CardWrapper";
import TestimonialSection from "./components/Section/TestimonialSection";
import Note from "./components/Section/Note";
import ContactCard from "./components/Card/ContactCard";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProjectSection from "./components/Section/ProjectSection";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HomeHeader />
        {/* <Carousel /> */}
        <ServiceCarousel />
        <ProjectSection />
        <CardWrapper />
        <TestimonialSection />
        <Note />
        <ContactCard />
        <Footer />
      </div>
    </>
  );
}

export default App;
