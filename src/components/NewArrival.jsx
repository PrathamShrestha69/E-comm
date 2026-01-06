import { Icon } from "@iconify/react";
import React from "react";
import { shoe } from "../data/Shoe.js";
import Card from "./Card.jsx";

const NewArrival = () => {
  const newShoes = shoe.filter((item) => item.tag === "New").slice(0, 3);

  return (
    <div className="font-[DM_Sans] w-full px-5 lg:px-15 py-10 lg:py-20">
      <div className="mb-8 lg:flex lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
        <div className="mt-4 flex items-center gap-2 lg:mt-0">
          <Icon icon="clarity:child-arrow-line" width="24" height="24" />
          <p className="hover:text-zinc-700">Shop New</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        {newShoes.map((shoeItem) => (
          <Card key={shoeItem.id} shoe={shoeItem} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
