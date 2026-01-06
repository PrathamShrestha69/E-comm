import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import React, { useState } from "react";

const StoreCard = ({ shoe }) => {
  if (!shoe) return null;
  const [hover, isHovered] = useState(false);
  const sizes = () => {
    isHovered(true);
  };
  const leaveSizes = () => {
    isHovered(false);
  };

  return (
    <div className="flex flex-col font-[DM_Sans]">
      <div
        onMouseEnter={sizes}
        onMouseLeave={leaveSizes}
        className="bg-[#F5F5F5] h-[56vw] lg:h-[32vw] w-[45vw] lg:w-[26vw] items-center rounded-2xl lg:px-5 cursor-pointer"
      >
        <div className="justify-between items-center flex p-3 lg:py-5">
          <div
            className={`${
              shoe.tag === "New"
                ? "bg-blue-600"
                : "Popular"
                ? "bg-black"
                : "Red"
            } text-white w-min px-3 py-1 rounded-full text-xs lg:text-sm`}
          >
            {shoe.tag}
          </div>
          <div className="bg-white p-2 rounded-full hover:bg-zinc-300">
            <Icon icon="tdesign:heart" />
          </div>
        </div>
        <div className="relative w-full h-1/2">
          <img
            src={hover ? shoe.image.back : shoe.image.side}
            alt={shoe.name}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center align-middle lg:mt-15 mt-5 px-5"
          />
        </div>
        {hover && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-xl p-3 top-16"
          >
            <h1>Select Size</h1>
            <div className="flex flex-row items-center justify-between">
              {["5", "6", "8"].map((size) => (
                <div
                  key={size}
                  className=" text-black border-[0.1vw] py-3 px-10 rounded-2xl border-zinc-200 hover:border-zinc-800 bottom-96 hidden lg:flex"
                >
                  {size}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <div className="text-black font-bold mt-2">
        <h1>{shoe.name}</h1>
        <p>€{shoe.price}</p>
      </div>
    </div>
  );
};

export default StoreCard;
