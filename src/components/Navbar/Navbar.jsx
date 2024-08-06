import { Link, NavLink, useLocation } from "react-router-dom";
import ListItem from "./ListItem";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const location = useLocation();

  function handleBurger(e) {
    const element = document.querySelector(".menu-responsive");
    if (e.target.checked) {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  }

  function closeMenu() {
    const checkbox = document.getElementById("openSidebarMenu");
    if (checkbox) {
      checkbox.checked = false;
      handleBurger({ target: checkbox });
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
    <nav className="nav bg-black h-[14vh]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center cursor-pointer">
          <img src={Logo} alt="Logo" className="h-12" />
        </a>
        <ul className="hidden text-xs md:flex justify-between items-center font-spartan">
          {/* <ListItem path="/" text="Home" />
          <ListItem path="/services" text="Service" />
          <ListItem path="/aboutUs" text="About Us" />
          <ListItem path="/portfolio" text="PORTFOLIO" /> */}
        </ul>
        {/* <a href="#contact" className="hidden md:inline-block">
          <button className="bg-[#333333] text-white py-2 px-4 sm:py-3 sm:px-7 rounded-full font-spartan font-bold flex justify-center items-center">
            Contact Us
          </button>
        </a> */}
        {/* <input type="checkbox" id="openSidebarMenu" onChange={handleBurger} /> */}
        {/* <label
          htmlFor="openSidebarMenu"
          className="sidebarIconToggle pr-4 md:hidden"
        >
          <div className="spinner top"></div>
          <div className="spinner middle"></div>
          <div className="spinner bottom"></div>
        </label>
        <ul className="menu-responsive d-none z-50">
          <li className="py-4">
            <NavLink
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-color"
                  : "text-white transition-all ease-in-out duration-300"
              } text-2xl px-10 font-semibold transition ease-in-out duration-500`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="py-4">
            <Link
              to="/services"
              className={`${
                location.pathname === "/services"
                  ? "text-color"
                  : "text-white transition-all ease-in-out duration-300"
              } text-2xl px-10 font-semibold transition ease-in-out duration-500`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li className="py-4">
            <Link
              to="/aboutus"
              className={`${
                location.pathname === "/aboutus"
                  ? "text-color"
                  : "text-white transition-all ease-in-out duration-300"
              } text-2xl px-10 font-semibold transition ease-in-out duration-500`}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li className="py-4">
            <Link
              to="/portfolio"
              className={`${
                location.pathname === "/portfolio"
                  ? "text-color"
                  : "text-white transition-all ease-in-out duration-300"
              } text-2xl px-10 font-semibold transition ease-in-out duration-500`}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
          <li className="py-4">
            <button
              className="bg-[#333333] text-white text-xl py-3 px-7 rounded-full font-spartan font-bold flex justify-center items-center"
              onClick={closeMenu}
            >
              Contact Us
            </button>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
