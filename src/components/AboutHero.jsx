import React from "react";

const AboutHero = () => {
  return (
    <div className="bg-black text-white text-2xl lg:text-5xl  text-center font-bold">
      <h1 className="uppercase py-5 px-5 mt-5">
        We build movement. Every pair is made for action on the street, on the
        run, on your terms.
      </h1>
      <div className="bg-[url('https://framerusercontent.com/images/hM1f3O8NQWEXyfjF3LfGjdPsnNg.png?width=1536&height=1024')] py-56 lg:bg-fixed h-[150vw] lg:h-[40vw] w-full bg-center"></div>
      <div className=" text-2xl lg:text-4xl font-bold px-2 py-5 lg:py-70 lg:px-76 bg-black text-white">
        <h1>
          NIVEST® ISN’T JUST A STORE. IT’S A MOVEMENT IN FORM. BASED IN PARIS,
          WE CURATE CLEAN, ESSENTIAL DESIGN — NO NOISE, JUST PURPOSE. EVERY
          PIECE IS CHOSEN FOR ITS FEEL, FUNCTION, AND TIMELESS EDGE. MINIMAL.
          DURABLE. UNAPOLOGETICALLY REFINED.
        </h1>
      </div>

      <div className="bg-[#D2FF1F] p-10 text-left">
        <div className=" text-black ">
          <h1 className="text-2xl lg:text-4xl uppercase">Backing Progress </h1>
          <h1 className="text-2xl lg:text-4xl uppercase"> with Purpose</h1>
        </div>
        <div className=" text-xs font-medium mt-5 text-[#657D11]">
          <p>
            At Nivest®, we build for movement — in culture, craft, and clarity.
            Every design{" "}
          </p>
          <p>choice is intentional. Minimalist, powerful, future-minded.</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-10 mt-15 text-black">
          <div className="border-t-[0.1vw] border-l-[0.1vw] p-5 lg:w-1/2 ">
            <h1 className="lg:text-8xl text-5xl font-bold">800+</h1>
            <p className="font-extralight text-xs mt-5">
              Shoes Tested in Motion
            </p>
          </div>
          <div className="border-t-[0.1vw] border-l-[0.1vw] p-5 lg:w-1/2">
            <h1 className="lg:text-8xl text-5xl font-bold">50+</h1>
            <p className="font-extralight text-xs mt-5">
              Athletes & Creators Backed
            </p>
          </div>
          <div className="border-t-[0.1vw] border-l-[0.1vw] p-5 lg:w-1/2">
            <h1 className="lg:text-8xl text-5xl font-bold">200+</h1>
            <p className="font-extralight text-xs mt-5">
              Hours of Wear Before Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
