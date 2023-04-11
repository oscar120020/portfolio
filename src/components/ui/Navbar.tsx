import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { close, menu, logo } from "../../assets";
import { navLinks } from "../../constants";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScrollEvent = (event: Event) => {
      if (window.scrollY === 0) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
      
    }

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [])

  return (
    <nav
      className={`${styles.paddingX} ${isOnTop ? "bg-transparent" : "bg-[#131515da] backdrop-blur"} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[17px] font-bold cursor-pointer flex">
            Oscar&nbsp;<span className="md:block hidden">| Full Stack</span>
          </p>
        </Link>
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? "text-tertiary" : "text-white-200"
              } hover:text-tertiary text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <motion.div
            animate={toggle ? "show" : "hidden" }
            variants={slideIn("right", "spring", 0, 0.75)}
            className={`p-6 absolute black-gradient min-w-[140px] top-[70px] right-0 rounded-md mx-1 z-10`}
          >
            <ul className="flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? "text-tertiary" : "text-white-200"
                  } text-[18px] font-poppins font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};
