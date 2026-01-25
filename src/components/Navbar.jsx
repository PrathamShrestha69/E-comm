import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "../data/NavLink.js";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Example } from "./AnimatedHamburgerButton.jsx";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
import Footer from "./Footer.jsx";
import { useSelector } from "react-redux";
import Cart from "./Cart.jsx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const [scrolled, setScrolled] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (Math.abs(delta) < 5) return;

      if (mobileMenuOpen) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      if (y > 60 && delta > 1) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen]);

  const backgroundClass = mobileMenuOpen
    ? "bg-white text-black"
    : scrolled || !isHome
    ? "bg-black text-white shadow-md"
    : "bg-transparent text-white";

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 font-[DM_Sans] transition-transform transition-opacity duration-300 ${backgroundClass} ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Desktop View */}
      <div className="font-[DM_Sans] items-center justify-between px-15 py-4 bg-transparent lg:flex hidden">
        <Link to="/" className="inline-flex items-center">
          Nivest
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
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-1 cursor-pointer hover:opacity-80"
          >
            <HiOutlineShoppingBag style={{ height: "30px", width: "30px" }} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          <a href="https://whatsapp.com">
            <div className="border  border-[0.1vw] text-white p-2 rounded-full border-green-600 hover:bg-green-600 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--logos size-4  group-hover:grayscale-0"
                width="1em"
                height="1em"
                viewBox="0 0 256 258"
              >
                <defs>
                  <linearGradient
                    id="iconifyReact92"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#1FAF38"></stop>
                    <stop offset="100%" stop-color="#60D669"></stop>
                  </linearGradient>
                  <linearGradient
                    id="iconifyReact93"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#F9F9F9"></stop>
                    <stop offset="100%" stop-color="#FFF"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#iconifyReact92)"
                  d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                ></path>
                <path
                  fill="url(#iconifyReact93)"
                  d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                ></path>
                <path
                  fill="#FFF"
                  d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                ></path>
              </svg>
              <p>Whatsapp</p>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile View */}
      <div>
        <div className="font-[DM_Sans] items-center justify-between px-3 bg-transparent lg:hidden flex">
          <Example isOpen={mobileMenuOpen} onToggle={setMobileMenuOpen} />
          <Link to={"/"} className="inline-flex items-center">
            Nivest
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
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Navbar;
