"use client";

import React from "react";
import ColorSelector from "../../@common/ColorSelector";
import { bikeHeroData } from "@/Data/BikeHeroData";

const ModelYearSwitcher = () => (
  <div className="flex flex-col text-white items-end translate-x-[-30px]">
    <p className="text-[24px] mb-1 opacity-50">Model year</p>
    <div className="relative flex w-[97px] justify-end gap-2">
      {bikeHeroData.modelYears.map((year, index) => (
        <a
          key={year.label}
          href={year.href}
          className={
            year.isActive ? "" : "Link_link__s0GAk pointer-events-none"
          }
          aria-label={`Model year ${year.label}`}
        >
          <span>{year.label}</span>
        </a>
      ))}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-5 bg-white translate-x-[56px] transition-all"
        style={{
          transform: `translateX(${
            bikeHeroData.modelYears.findIndex((y) => y.isActive) * 56
          }px)`,
        }}
      />
    </div>
  </div>
);

const BikeTitle = () => (
  <div>
    <div className=" h-[350px]">
      <h1 className="opacity-20 text-[250px] ">{bikeHeroData.title}</h1>
    </div>
    <div className=" absolute top-[52%] flex h-0 items-center gap-8 md:ml-4 md:gap-12">
      <span className="text-[20px]">{bikeHeroData.subtitle.name}</span>
      <span className="text-[20px]">{bikeHeroData.subtitle.type}</span>
    </div>
  </div>
);

const BikeSpecs = () => {
  const { specs } = bikeHeroData;

  return (
    <div className="flex flex-col gap-2 mb-3">
      <div className="flex items-start justify-between">
        <div className="bike-hero-stagger">
          <p className=" mb-[4px] text-white opacity-50">{specs.speed.label}</p>
          <span className="heading--6 text-white">{specs.speed.value}</span>
        </div>

        <div className="pointer-events-auto">
          <ColorSelector />
        </div>
      </div>
      <div className="bike-hero-stagger">
        <p className=" mb-[4px] text-white opacity-50">{specs.range.label}</p>
        <span className="heading--6 text-white">{specs.range.value}</span>
      </div>
      <div className="bike-hero-stagger">
        <p className=" mb-[4px] text-white opacity-50">{specs.torque.label}</p>
        <span className="heading--6 text-white">{specs.torque.value}</span>
      </div>
      <div className="flex items-end justify-between">
        <div className="bike-hero-stagger">
          <p className=" mb-[4px] text-white opacity-50">
            {specs.charge.label}
          </p>
          <span className="heading--6 text-white">{specs.charge.value}</span>
        </div>
        <BikePrice />
      </div>
    </div>
  );
};

const BikePrice = () => (
  <div className="text-[18px] flex flex-col items-end md:hidden">
    <div>
      <span>{bikeHeroData.price}</span>
    </div>
  </div>
);

const BikeHero = () => {
  return (
    <div className="ml-3 w-[calc(100vw-52px)] flex flex-col justify-center text-white md:ml-[10vw] md:w-[90vw] md:pr-5 select-none pointer-events-none">
      <div className="relative mt-[12vh] flex justify-between md:mt-0">
        <BikeTitle />
        <div className="z-50 md:hidden">
          <ModelYearSwitcher />
        </div>
      </div>

      <BikeSpecs />

      <div className="z-30 hidden w-full items-end justify-between md:flex">
        <div className="text-[24px] bike-hero-stagger">
          <span>{bikeHeroData.price}</span>
        </div>
        <ModelYearSwitcher />
      </div>
    </div>
  );
};

export default BikeHero;
