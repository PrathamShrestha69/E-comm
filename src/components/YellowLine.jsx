import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { Icon } from "@iconify/react";

const YellowLine = () => {
  return (
    <div className="w-full px-3 py-2 lg:py-3 bg-[#D2FF1F] flex gap-5 lg:gap-10 items-center justify-start lg:justify-center text-xs lg:text-sm font-bold font-[DM_Sans] whitespace-nowrap overflow-x-hidden">
      <div className="flex gap-2 items-center flex-shrink-0">
        <MdOutlineSecurity className="h-5 w-5 lg:h-6 lg:w-6" />
        <p>Secure Checkout</p>
      </div>
      <div className="flex gap-2 items-center flex-shrink-0">
        <BiWorld className="h-5 w-5 lg:h-6 lg:w-6" />
        <p>Worldwide Support</p>
      </div>
      <div className="flex gap-2 items-center flex-shrink-0">
        <Icon
          icon="icon-park-outline:return"
          className="h-5 w-5 lg:h-6 lg:w-6"
        />
        <p>Free Return</p>
      </div>
      <div className="flex gap-2 items-center flex-shrink-0">
        <MdOutlineSecurity className="h-5 w-5 lg:h-6 lg:w-6" />
        <p>Secure Checkout</p>
      </div>
      <div className="flex gap-2 items-center flex-shrink-0">
        <BiWorld className="h-5 w-5 lg:h-6 lg:w-6" />
        <p>Worldwide Support</p>
      </div>
      <div className="flex gap-2 items-center flex-shrink-0">
        <Icon
          icon="icon-park-outline:return"
          className="h-5 w-5 lg:h-6 lg:w-6"
        />
        <p>Free Return</p>
      </div>
      <div className="flex gap-2 items-center flex-shrink-0">
        <MdOutlineSecurity className="h-5 w-5 lg:h-6 lg:w-6" />
        <p>Secure Checkout</p>
      </div>
      <div className="flex gap-2 items-center flex-shrink-0">
        <BiWorld className="h-5 w-5 lg:h-6 lg:w-6" />
        <p>Worldwide Support</p>
      </div>
    </div>
  );
};

export default YellowLine;
