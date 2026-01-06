import { Icon } from "@iconify/react";
import React, { useState } from "react";

const Footer = () => {
  const [active, setActive] = useState(false);
  
    const handleHover = () => {
      setActive(!active);
    };
  
    const handleLeave = () => {
      setActive(false);
    };
  return (
    <footer className="bg-white text-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:gap-12 lg:px-10">
        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase tracking-wide">Menu</p>
          <div className="space-y-2 text-2xl font-semibold">
            <p>About</p>
            <p>Shop</p>
            <p>Support</p>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase tracking-wide">Socials</p>
          <div className="space-y-2 text-2xl font-semibold">
            <p>Instagram</p>
            <p>X / Twitter</p>
            <p>Tiktok</p>
          </div>
        </div>

        <div className="flex-[1.4] space-y-4">
          <p className="text-sm uppercase tracking-wide">Stay essential.</p>
          <p className="max-w-xl text-sm leading-relaxed">
            Join our community for evidence-based skincare insights, formulation
            updates, and exclusive access to limited releases. We respect your
            inbox as much as your skin—no excessive communication.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full  border border-t-white border-r-white border-l-white border-b-[#e5e5e5] bg-white px-4 py-3 text-sm focus:border-black focus:outline-none"
            />
             <button
                          onMouseEnter={handleHover}
                          onMouseLeave={handleLeave}
                          className="group p-3 bg-[#D4DCCF] rounded-2xl hover:bg-[#3A3D38] hover:text-white transition overflow-hidden overflow-x-hidden"
                        >
                          <div className={`${active ? "-rotate-45" : ""} transition`}>
                            <Icon icon="solar:arrow-right-linear" />
                          </div>
                        </button>
          </div>
          <label className="flex items-center gap-2 text-xs">
            <input type="checkbox" className="h-4 w-4" />
            <span>By subscribing you agree to the Privacy Policy</span>
          </label>
        </div>
      </div>

      <div className="border-t border-[#eaeaea] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs sm:flex-row sm:px-10">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Payment Methods</p>
          <p className="hidden sm:block">© 2026 Nivest™ All Rights Reserved.</p>
        </div>
      </div>

      <div className="bg-white px-4 pb-12 sm:px-8 lg:px-10 overflow-hidden">
        <h1 className="w-full whitespace-nowrap text-[27vw] sm:text-[20vw] lg:text-[30vw] font-stretch-expanded font-black leading-[0.85] tracking-tight text-black">
          Nivest
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
