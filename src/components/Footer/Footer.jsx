import React from "react";
import Logo from "../../assets/images/Logo.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaRegMessage, FaPhoneVolume } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full font-spartan">
      <div className="mx-auto px-6 md:px-12 w-full">
        <div className="flex w-full flex-col sm:flex-row justify-between">
          <div className="mb-8 md:mb-0 w-full px-4 sm:w-4/12">
            {/* <h2 className="text-xl font-bold">AppSpot</h2> */}
            <a
              href="/"
              className="flex items-center justify-center sm:justify-normal"
            >
              <img src={Logo} alt="Logo" className="h-12" />
            </a>
            <p className="mt-2">
              ב-AppSpot, אנחנו צוות של מפתחי תוכנה נלהבים המחויבים לספק תוצאות
              יוצאות דופן.
            </p>
          </div>
          {/* <div className="mb-8 md:mb-0 w-full px-6 sm:w-1/4">
            <h3 className="text-lg font-bold text-center sm:text-left">
              Quick Links
            </h3>
            <ul className="mt-2 flex justify-evenly text-base font-normal text-[#A8A8A8] sm:space-y-2 py-4 sm:flex-none sm:justify-normal sm:flex-col">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Our Service
                </a>
              </li>
              <li>
                <a href="/aboutUs" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:underline">
                  Portfolio
                </a>
              </li>
            </ul>
          </div> */}
          <div className="w-full sm:w-4/12">
            <h3 className="text-lg font-bold text-center sm:text-left">
              להשיג אותנו
            </h3>
            <ul className="mt-2 space-y-2 mx-auto w-[60%] sm:w-full">
              <li className="flex items-center gap-1">
                <a
                  href="mailto:wa9575695@gmail.com"
                  className="hover:underline  flex items-center gap-2"
                >
                  <FaRegMessage size={20} />
                  wa9575695@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-500 pt-2">
          <p>© 2023 Appspot.com.pk. כל הזכויות שמורות.</p>
          <div className="flex space-x-4 text-main  ">
            <a href="#" className="hover:underline hover:text-white">
              <FaFacebookSquare />
            </a>
            <a href="#" className="hover:underline hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
