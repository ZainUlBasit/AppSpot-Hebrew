import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import { useEffect } from "react";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  function handleBurger(e) {
    const element = document.querySelector(".menu-responsive");
    if (e.target.checked) {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  }

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add("animateMenu");
      } else {
        nav.classList.remove("animateMenu");
      }
    }
  });

  return (
    <nav className="nav bg-[#0F0B07] ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
        <ul className="hidden text-xs md:flex justify-between items-center font-spartan">
          <ListItem path="/" text="Home" />
          <ListItem path="/service" text="Service" />
          <ListItem path="/aboutUs" text="About Us" />
          <ListItem path="/portfolio" text="PORTFOLIO" />
        </ul>
        <div className="hidden md:inline-block">
          <button className="bg-[#333333] text-white py-2 px-4 sm:py-3 sm:px-7 rounded-full font-spartan font-bold flex justify-center items-center">
            Contact Us
          </button>
        </div>
        <input type="checkbox" id="openSidebarMenu" onChange={handleBurger} />
        <label
          htmlFor="openSidebarMenu"
          className="sidebarIconToggle pr-4 md:hidden"
        >
          <div className="spinner top"></div>
          <div className="spinner middle"></div>
          <div className="spinner bottom"></div>
        </label>
        <ul className="menu-responsive d-none">
          <li className="py-4">
            <a
              to="/"
              className="text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500"
            >
              Home
            </a>
          </li>
          <li className="py-4">
            <a
              to="/products"
              className="text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500"
            >
              Products
            </a>
          </li>
          <li className="py-4">
            <a
              href="#about"
              className="text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500"
            >
              About Us
            </a>
          </li>
          <li className="py-4">
            <a
              href="#contact"
              className="text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
