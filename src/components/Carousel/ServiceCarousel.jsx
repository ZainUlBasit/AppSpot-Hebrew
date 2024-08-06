import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaBuildingColumns } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CarouselWrapper } from "../Wrapper/CarouselWrapper";
import CarouselCard from "./CarouselCard";
import { TargetMarketsData } from "./TargetMarketsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const ServiceCarousel = () => {
  // Define custom arrow components with react-icons
  const PrevArrow = (props) => (
    <div {...props} className="slick-prev">
      <FiChevronLeft size={30} color="black" className="!-m-5 !-mx-2" />
    </div>
  );

  const NextArrow = (props) => (
    <div {...props} className="slick-next">
      <FiChevronRight size={30} color="black" className="!-m-5 !-mx-3 !" />
    </div>
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <CarouselWrapper className="gap-x-10 flex justify-between flex-wrap items-center w-full">
      <div className="w-[20%] min-w-[300px] text-wrapper !bg-black text-white">
        <div className="flex flex-col items-end justify-center gap-y-3 w-[300px] sm:flex-wrap overflow-hidden h-[60vh]">
          <div className="flex flex-col gap-y-3 w-[250px] font-spartan">
            <h1 className="text-5xl font-bold gradient-text-link">
              השירותים שלנו
            </h1>
            <p className="pr-3">
              שנה את המותג שלך עם הפתרונות הדיגיטליים החדשניים שלנו שמושכים את
              הקהל שלך ומשתפים אותם.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[70%] carousel-wrapper">
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          draggable={true}
          centerMode={windowWidth < 500 ? true : true}
          centerPadding={windowWidth < 400 ? "20%" : "0"}
          arrows={false}
          // prevArrow={<PrevArrow />}
          // nextArrow={<NextArrow />}
          responsive={[
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {TargetMarketsData.map((dt, i) => (
            <CarouselCard
              key={i}
              Icon={dt.icon}
              title={dt.title}
              img={dt.img}
              desc={dt.desc}
            />
          ))}
        </Slider>
      </div>
    </CarouselWrapper>
  );
};

export default ServiceCarousel;
