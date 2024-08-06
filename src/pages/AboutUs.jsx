import React from "react";
import MainHeader from "../components/Header/MainHeader";
import Navbar from "../components/Navbar/Navbar";
import AboutHeroImg from "../assets/images/AboutHeroImg.png";
import About1 from "../assets/images/Aboutus.png";
import About2 from "../assets/images/Aboutus2.png";
import AboutUS1 from "../assets/images/About1.png";
import AboutUS2 from "../assets/images/About2.png";
import About3 from "../assets/images/About3.png";
import AboutusSection from "../components/Section/AboutusSection";
import TestimonialCard from "../components/Card/TestimonialCard";
// import Heading from "../assets/images/Aboutus.png";
import Footer from "../components/Footer/Footer";
import Logo from "../assets/images/Logo.png";
import { useParams } from "react-router-dom";

import profileImage1 from "../assets/images/faizan.png"; // Update the path as needed
import profileImage2 from "../assets/images/shujaat.png"; // Update the path as needed
import profileImage3 from "../assets/images/subhan.png"; // Update the path as needed
import CardImg1 from "../assets/images/Tcard1.png";
import CardImg2 from "../assets/images/Tcard2.png";
import CardImg3 from "../assets/images/Tcard3.png";
const testimonials = [
  {
    name: "Fahad Hussain",
    title: "Chief Technology Officer",
    text: "As our CTO, Fahad Hussain drives innovation and strategic tech initiatives. His expertise ensures we stay ahead with cutting-edge solutions",
    avatar: profileImage1,
    CardImg: CardImg1,
  },
  {
    name: "Arbab Shujaat",
    title: "Chief Executive Officer",
    text: "As our CEO, Arbab Shujaat sets the vision and leads our company to success. His leadership and dedication inspire our team",
    avatar: profileImage2,
    CardImg: CardImg2,
  },
  {
    name: "Subhan Ali",
    title: "Chief Operating Officer",
    text: "As our COO, Subhan Ali oversees operations and ensures organizational efficiency. His strategic leadership drives our operational excellence",
    avatar: profileImage3,
    CardImg: CardImg3,
  },
];
const AboutUs = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#0F0B07]">
      {/* <Navbar /> */}
      <MainHeader
        HeroImg={AboutHeroImg}
        title="About Us"
        subtitle="Welcome to AppSpot, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        path={id ? "Home/About Us" : "Home/About Us"}
      />
      <AboutusSection
        Heading={About1}
        sideImg={AboutUS1}
        title="About Company"
        subtitle="At AppSpot, we are a team of passionate software developers who are
            committed to delivering exceptional results. With years of
            experience, we provide customized software solutions that help our
            clients achieve their business objectives. Our approach is rooted in
            a commitment to quality, reliability, and scalability. We strive to
            build long-term relationships with our clients, providing ongoing
            support and maintenance to ensure their software solutions continue
            to meet their evolving needs."
      />
      {/* <AboutusSection
        Heading={About2}
        sideImg={AboutUS2}
        title="AppSpot Mission"
        subtitle="Our mission is to provide our clients with customized, high-quality software solutions that help them achieve their business objectives. We are committed to delivering exceptional service, leveraging our technical expertise and innovative approach to software development. Our team is passionate about technology and takes pride in delivering reliable, scalable, and secure software solutions that exceed our client's expectations. We strive to build long-term relationships with our clients, working collaboratively to understand their unique needs and challenges. At the heart of our mission is a dedication to delivering value, ensuring that our clients receive the maximum return on their investment in software development."
        className="-order-1"
      /> */}
      <div
        className={` w-full h-full flex justify-between items-center gap-4 text-white font-spartan pt-16 md:flex-row flex-col`}
      >
        <div
          className="w-[100%] md:w-1/3 h-[250px] flex justify-center items-center
     object-cover px-[4.5rem] md:px-0 md:pl-[4.5rem] order-1 md:order-none"
        >
          <img src={AboutUS2} alt="" className="w-full h-full" />
        </div>
        <div className="w-full md:w-7/12">
          <img src={About2} alt="Heading" className="w-[350px] sm:[400]" />
          <div className="pl-[4.5rem] pr-[1rem] md:pr-0">
            <h1 className="text-3xl font-bold -mt-7">AppSpot Mission</h1>
            <p className="text-base sm:text-base md:text-lg md:pr-[2rem] font-normal w-fit pt-3">
              Our mission is to provide our clients with customized,
              high-quality software solutions that help them achieve their
              business objectives. We are committed to delivering exceptional
              service, leveraging our technical expertise and innovative
              approach to software development. Our team is passionate about
              technology and takes pride in delivering reliable, scalable, and
              secure software solutions that exceed our client's expectations.
              We strive to build long-term relationships with our clients,
              working collaboratively to understand their unique needs and
              challenges. At the heart of our mission is a dedication to
              delivering value, ensuring that our clients receive the maximum
              return on their investment in software development.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-black w-full h-fit my-16 overflow-hidden">
        <img
          src={About3}
          alt=""
          className="opacity-20
          h-96 xsm:h-[22rem] w-full sm:h-80 md:h-96 lg:h-[20rem] xl:h-[24rem] 2xl:h-[28rem] object-cover"
        />
        <div className="absolute top-0 bottom-0 flex-col flex justify-center items-center font-spartan h-full w-full">
          <h1 className="py-4 font-bold text-base xsm:text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-white">
            AppSpot Vision
          </h1>
          <p
            className="
          w-[80%] text-xs xsm:text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-thin  text-white sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] text-center"
          >
            Our vision is to provide innovative software solutions that empower
            businesses to achieve their goals and exceed their customers'
            expectations. We aim to be the leading software development company,
            recognized for our exceptional quality, exceptional service, and
            commitment to excellence. Our portfolio showcases our expertise and
            passion for software development, demonstrating how we leverage the
            latest technologies and best practices to deliver solutions that are
            scalable, reliable, and secure. By partnering with us, our clients
            can harness the power of software to drive growth, streamline
            operations, and enhance customer experiences.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-[#0f0B07] ">
        <div className="w-[80%] text-center text-white text-xl xsm:text-2xl sm:text-3xl lg:text-4xl gap-x-2 font-bold pt-14">
          Meet Our
          <span className="text-transparent bg-clip-text bg-main pl-2">
            Executive Trio
          </span>
          <div className=" flex flex-wrap gap-4 items-center justify-center pt-20">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                Index={index}
                name={testimonial.name}
                CardImg={testimonial.CardImg}
                title={testimonial.title}
                text={testimonial.text}
                avatar={testimonial.avatar}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="w-[90%] bg-[#141414]  p-8 rounded-lg flex justify-between items-center mb-16 md:flex-row gap-7 flex-col">
          <img src={Logo} alt="" />
          <p className="font-normal text-lg md:text-xl text-[#98989A] w-1/2">
            We invite you to join us on our journey and discover how we can help
            bring your digital ideas to life.
          </p>
          <button className="bg-[#FE966F] px-6 py-3 rounded-lg text-white font-semibold md:text-xl text-lg">
            Contact Us
          </button>
        </div>
      </div>

      {/* <Footer /> */}
      {/* <div className="bg-black w-full h-full flex justify-between gap-4 text-white font-spartan pt-16">
        <div className="w-5/12">
          <img src={Heading} alt="Heading" className="w-[430px]" />
          <div className="pl-[4.5rem]">
            <h1 className="text-5xl font-bold -mt-9">About Company</h1>
            <p className="text-lg font-normal w-fit pt-3">
              At AppSpot, we are a team of passionate software developers who
              are committed to delivering exceptional results. With years of
              experience, we provide customized software solutions that help our
              clients achieve their business objectives. Our approach is rooted
              in a commitment to quality, reliability, and scalability. We
              strive to build long-term relationships with our clients,
              providing ongoing support and maintenance to ensure their software
              solutions continue to meet their evolving needs.
            </p>
          </div>
        </div>
        <div className="w-7/12 h-[400px] object-cover">
          <img src={AboutUS1} alt="" className="w-full h-full" />
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
