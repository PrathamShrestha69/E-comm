import React from "react";
import { motion } from "motion/react";
import YellowLine from "../components/YellowLine.jsx";
import MostPopular from "../components/MostPopular.jsx";
import HeroMen from "../components/HeroMen.jsx";
import NewArrival from "../components/NewArrival.jsx";
import HeroWomen from "../components/HeroWomen.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <section className="relative w-full min-h-screen overflow-hidden">
        <img
          src="https://framerusercontent.com/images/m3zBv6AtKdlSFdLSLyKIIVXN5U.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 flex h-screen flex-col justify-center gap-3 px-5 pt-32 pb-16 text-white sm:px-10 sm:pt-36 lg:px-16 lg:pt-90 mt-15"
        >
          <h1 className="text-4xl font-bold lg:text-6xl">PERFORMANCE</h1>
          <h1 className="text-4xl font-bold lg:text-6xl">IN EVERY STEP</h1>
          <p className="mt-2 text-sm text-zinc-200 lg:text-lg">
            Form function and attitude on repeat
          </p>
          <button className="group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-4 py-2 font-bold text-black duration-500 h-10 w-26">
            <span className="translate-y-0 transition-transform duration-300 group-hover:-translate-y-[190%]">
              Shop all
            </span>
            <span className="absolute translate-y-[156%] transition-transform duration-300 group-hover:translate-y-0">
              Shop all
            </span>
          </button>
        </motion.div>
      </section>

      <YellowLine />

      <MostPopular />
      <HeroMen />
      <NewArrival />
      <HeroWomen />
      
    </div>
  );
};

export default HomePage;
