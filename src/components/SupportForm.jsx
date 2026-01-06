import { Icon } from "@iconify/react";
import React, { useState } from "react";

const SupportForm = () => {
  const [active, setActive] = useState(false);

  const handleHover = () => {
    setActive(!active);
  };

  const handleLeave = () => {
    setActive(false);
  };

  return (
    <div className="mt-15">
      <h1 className="font-bold lg:text-7xl text-5xl ">Support</h1>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-40">
        <div className="mt-5 lg:mt-10">
          <p className="lg:font-medium text-md">
            Do you have any questions about our products?{" "}
          </p>
          <p className="lg:font-medium text-md">
            You can send us an email or fill in the following form.
          </p>
          <div className="grid lg:grid-cols-2 mt-6 lg:mt-15 text-black gap-5 lg:gap-15">
            <div>
              <h1 className="font-bold">Head Office</h1>
              <p>Kathmandu, Nepal </p>
            </div>
            <div>
              <h1 className="font-bold">Email</h1>
              <p>suppport@gmail.com </p>
            </div>
            <div>
              <h1 className="font-bold">Phone Number</h1>
              <p>+977 9841****** </p>
            </div>
          </div>
        </div>
        <div className="py-2 lg:p-5 lg:mt-8">
          <form action="submit">
            <input
              type="text"
              placeholder="Subject*"
              name=""
              id=""
              className="border border-t-white border-l-white border-r-white border-b-[#979797] px-5 py-3 mt-2 w-[32vw]"
            />
            <div className="flex lg:flex-row flex-col lg:gap-10">
              <input
                type="text"
                placeholder="First Name*"
                name=""
                id=""
                className="border border-t-white border-l-white border-r-white border-b-[#979797] px-5 py-3 mt-2"
              />
              <input
                type="text"
                placeholder="Last Name*"
                name=""
                id=""
                className="border border-t-white border-l-white border-r-white border-b-[#979797] px-5 py-3 mt-2"
              />
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-10">
              <input
                type="text"
                placeholder="Email*"
                name=""
                id=""
                className="border border-t-white border-l-white border-r-white border-b-[#979797] px-5 py-3 mt-2"
              />
              <input
                type="text"
                placeholder="Order Number"
                name=""
                id=""
                className="border border-t-white border-l-white border-r-white border-b-[#979797] px-5 py-3 mt-2"
              />
            </div>
            <input
              type="text"
              placeholder="Message"
              name=""
              id=""
              className="border border-t-white border-l-white border-r-white border-b-[#979797] px-5 py-3 mt-2 w-[32vw]"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportForm;
