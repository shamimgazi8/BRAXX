import React from "react";
import ColorSelector from "../../@common/ColorSelector";

const ModelYearSwitcher = () => (
  <div className="flex flex-col text-white items-end translate-x-[-30px]">
    <p className="text-[24px] mb-1 opacity-50">Model year</p>
    <div className="relative flex w-[97px] justify-end gap-2">
      <a href="/model/zero-fxe-2024" className="" aria-label="Model year 2024">
        <span className="">2024</span>
      </a>
      <a
        href="/model/zero-fxe-2024"
        className="Link_link__s0GAk pointer-events-none"
        aria-label="Model year 2025"
      >
        <span className="">2025</span>
      </a>
      <div className="absolute bottom-0 left-0 h-[2px] w-5 bg-white translate-x-[56px] transition-all" />
    </div>
  </div>
);

const BikeTitle = () => (
  <div>
    <div className=" h-[350px]">
      <h1 className="opacity-20 text-[250px] ">FXE</h1>
    </div>
    <div className=" absolute top-[52%] flex h-0 items-center gap-8 md:ml-4 md:gap-12">
      <span className="text-[20px]">Zero FXE</span>
      <span className="text-[20px]">Street</span>
    </div>
  </div>
);

const BikeSpecs = () => (
  <div className="flex flex-col gap-2 mb-3">
    <div className="flex items-start justify-between">
      <div className="bike-hero-stagger">
        <p className=" mb-[4px] text-white opacity-50">Speed</p>
        <span className="heading--6 text-white">85 MPH</span>
      </div>

      <div className="pointer-events-auto">
        <ColorSelector />
      </div>
    </div>
    <div className="bike-hero-stagger">
      <p className=" mb-[4px] text-white opacity-50">Range</p>
      <span className="heading--6 text-white">105 Miles</span>
    </div>
    <div className="bike-hero-stagger">
      <p className=" mb-[4px] text-white opacity-50">Torque</p>
      <span className="heading--6 text-white">78 LB-FT</span>
    </div>
    <div className="flex items-end justify-between">
      <div className="bike-hero-stagger">
        <p className=" mb-[4px] text-white opacity-50">Charge</p>
        <span className="heading--6 text-white">1.3 Hours</span>
      </div>
      <BikePrice />
    </div>
  </div>
);

const BikePrice = () => (
  <div className="text-[18px]  flex flex-col items-end md:hidden">
    <div>
      <span>$12,495</span>
    </div>
  </div>
);

const BikeHero = () => {
  return (
    <div className="ml-3 w-[calc(100vw-52px)] flex flex-col justify-center text-white md:ml-[10vw] md:w-[90vw] md:pr-5 select-none pointer-events-none">
      <div className="relative  mt-[12vh] flex justify-between md:mt-0">
        <BikeTitle />
        <div className="z-50 md:hidden">
          <ModelYearSwitcher />
        </div>
      </div>

      <BikeSpecs />

      <div className="z-30 hidden w-full items-end justify-between md:flex">
        <div className="text-[24px] bike-hero-stagger">
          <span>$12,495</span>
        </div>
        <ModelYearSwitcher />
      </div>
    </div>
  );
};

export default BikeHero;
