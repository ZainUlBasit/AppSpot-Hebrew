import { NavLink, useLocation } from "react-router-dom";

const ListItem = ({ path, text }) => {
  const location = useLocation();

  const styles = {
    // text-color
    liClassess:
      "xl:text-xl lg:text-lg md:text-base sm:text-sm sm:font-bold hover:text-pink-900 transition ease-in-out duration-500 md:pl-7 sm:pl-3 lg:pl-10 xl:pl-12 capitalize font-spartan text-style text-white",
  };
  // gradient-text-link
  return (
    <li>
      <NavLink
        to={path}
        className={`${
          location.pathname === path
            ? "text-color"
            : "text-white transition-all ease-in-out duration-300"
        }
            xl:text-xl lg:text-lg md:text-base sm:text-sm sm:font-bold transition ease-in-out duration-500 md:pl-7 sm:pl-3 lg:pl-10 xl:pl-12 capitalize font-spartan text-style text-white`}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default ListItem;
