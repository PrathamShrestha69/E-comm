import React from "react";
import CardBg from "./CardBg";
import { shoe } from "../data/Shoe.js";

const HeroWomen = () => {
  const womenShoe =
    shoe.find((item) => item.name === "Trailblaze Runner") || shoe[0];

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div
        className="relative flex-1 bg-cover bg-center min-h-[65vh] lg:min-h-screen"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/FsI2lMOKSjog9l8dycXZcNAUHc.png?width=1024&height=1024')",
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-4 text-white text-center">
          <p className="text-sm font-medium tracking-wide text-zinc-200">
            Best for Women
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            WOMEN'S COLLECTION
          </h2>
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition duration-300">
            <span className="block translate-y-0 transition duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              Shop Women
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Shop Women
            </span>
          </button>
        </div>
      </div>
      <div className="bg-[#F5F5F5] flex-1 flex items-center justify-center min-h-[50vh] px-4 py-10">
        <CardBg shoe={womenShoe} />
      </div>
    </div>
  );
};

export default HeroWomen;
