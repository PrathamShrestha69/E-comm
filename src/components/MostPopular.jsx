import { Icon } from "@iconify/react";
import React from "react";
import { shoe } from "../data/Shoe.js";
import Card from "./Card.jsx";

const MostPopular = () => {
  const popularShoes = shoe
    .filter((item) => item.tag === "Popular")
    .slice(0, 3);

  return (
    <div className="font-[DM_Sans] w-full px-5 lg:px-15 py-10 lg:py-20">
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between mb-8">
        <h1 className="text-3xl font-bold">MOST POPULAR</h1>
        <div className="flex items-center gap-2 mt-4 lg:mt-0 ">
          <Icon
            icon="clarity:child-arrow-line"
            width="24"
            height="24"
            className=""
          />

          <p className="hover:text-zinc-700">Shop Popular</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        {popularShoes.map((shoeItem) => (
          <Card key={shoeItem.id} shoe={shoeItem} />
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
