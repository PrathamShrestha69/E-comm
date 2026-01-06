import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "../data/NavLink.js";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Example } from "./AnimatedHamburgerButton.jsx";
import { motion } from "motion/react";
import { Link } from "react-router";
import Footer from "./Footer.jsx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // avoid tiny jitter
      if (Math.abs(delta) < 5) return;

      // keep navbar visible when menu is open
      if (mobileMenuOpen) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      if (y > 60 && delta > 0) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up or near top
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 font-[DM_Sans] transition-transform transition-opacity duration-300 ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${
        mobileMenuOpen
          ? "bg-white text-black transition-transform transition-opacity duration-300"
          : "bg-transparent text-[#bbbbbb]"
      }`}
    >
      {/* Desktop View */}
      <div className="font-[DM_Sans] items-center justify-between px-15 py-4 bg-transparent lg:flex hidden">
        <Link to="/" className="inline-flex items-center">
          <img
            src="/white-logo.png"
            alt="Nivest logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex flex-row gap-5 leading-5 text-xl">
          {NavLink.map((nav) => (
            <Link
              key={nav.name}
              to={nav.link}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 duration-500"
            >
              <div className="translate-y-0 transition-transform transform-flat duration-300 group-hover:-translate-y-[190%] cursor-pointer">
                {nav.name}
              </div>
              <div className="absolute translate-y-[156%] transition group-hover:translate-y-0 duration-300">
                {nav.name}
              </div>
            </Link>
          ))}
        </div>
        <div>
          <HiOutlineShoppingBag style={{ height: "30px", width: "30px" }} />
        </div>
      </div>

      {/* Mobile View */}
      <div>
        <div className="font-[DM_Sans] items-center justify-between px-3 bg-transparent lg:hidden flex">
          <Example isOpen={mobileMenuOpen} onToggle={setMobileMenuOpen} />
          <Link to={"/"} className="inline-flex items-center">
            <img
              src="/white-logo.png"
              alt="Nivest logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div>
            <HiOutlineShoppingBag style={{ height: "30px", width: "30px" }} />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: mobileMenuOpen ? "100vh" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="lg:hidden overflow-hidden bg-white h-96"
        >
          {NavLink.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  x: mobileMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
                className="px-6 py-1 cursor-pointer text-5xl"
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
