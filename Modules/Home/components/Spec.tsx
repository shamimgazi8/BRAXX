// components/Specs.tsx
"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define the data structure to hold all specifications for each category
interface SpecData {
  label: string;
  value: string;
}

interface SpecCategory {
  title: string;
  key: string;
  specs: SpecData[];
}

interface SpecItem {
  model: string;
  categories: SpecCategory[];
  colors: string[];
}

// Full data set, ensuring all categories have their respective labels and values
const specsData: SpecItem[] = [
  {
    model: "S8 / R15 / C35",
    categories: [
      {
        title: "BATTERY",
        key: "battery",
        specs: [
          { label: "Voltage", value: "72V" },
          { label: "Range", value: "80miles" },
          { label: "Amp Hours", value: "38ah" },
          { label: "Charge Time", value: "3hrs" },
        ],
      },
      {
        title: "MOTOR",
        key: "motor",
        specs: [
          { label: "Type", value: "Hub Motor" },
          { label: "Power", value: "5000W" },
          { label: "Efficiency", value: "95%" },
        ],
      },
      {
        title: "SUSPENSION",
        key: "suspension",
        specs: [
          { label: "Front", value: "Dual Hydraulic" },
          { label: "Rear", value: "Mono Shock" },
        ],
      },
      {
        title: "WHEELS/TIRES",
        key: "wheels_tires",
        specs: [
          { label: "Wheels", value: "Aluminum" },
          { label: "Tires", value: "All-Terrain" },
        ],
      },
      {
        title: "BRAKES",
        key: "brakes",
        specs: [
          { label: "Front", value: "Hydraulic Disc" },
          { label: "Rear", value: "Regenerative" },
        ],
      },
    ],
    colors: ["red", "black"],
  },
];

const Specs: React.FC = () => {
  return (
    <div className="w-full max-w-4xl font-sans text-white">
      {specsData.map((item, index) => (
        <div key={index} className="">
          <h1 className="text-5xl  font-light  opacity-80 tracking-wide mb-2">
            Model: {item.model}
          </h1>

          <Tabs defaultValue={item.categories[0].key} className="w-full">
            <TabsList className="flex justify-between gap-10 w-full text-xl font-light border-b  rounded-b-none border-white border-opacity-30 pb-4 bg-transparent p-0">
              {item.categories.map((category) => (
                <TabsTrigger
                  key={category.key}
                  value={category.key}
                  className="text-white text-[18px] opacity-40 tracking-wider data-[state=active]:opacity-80 data-[state=active]:bg-transparent data-[state=active]:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-opacity duration-200 p-0"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* This is the key change to match the design */}
            {item.categories.map((category) => (
              <TabsContent
                key={category.key}
                value={category.key}
                className="p-0 "
              >
                <div className="flex justify-between w-full text-[14px] leading-2 font-light mt-1">
                  <div className="grid grid-rows-2 gap-4">
                    <div className=" flex justify-between">
                      {category.specs.map((spec, specIndex) => (
                        <div
                          key={specIndex}
                          className={`opacity-80 pr-4 pl-4 whitespace-nowrap w-[80px] border-r border-l flex justify-center items-center border-white/50 border-opacity-30 
                          `}
                        >
                          {spec.label}
                        </div>
                      ))}
                    </div>
                    <div className=" flex justify-between">
                      {category.specs.map((spec, specIndex) => (
                        <div
                          key={specIndex}
                          className={`opacity-80 pr-4 pl-4 whitespace-nowrap w-[80px] border-r border-l flex justify-center items-center border-white/50 border-opacity-30 `}
                        >
                          {spec.value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex items-center text-lg font-light mt-5">
            {item.colors.map((color, colorIndex) => (
              <React.Fragment key={colorIndex}>
                <span className="opacity-80 uppercase">{color}</span>
                <span
                  className="h-3 w-3 rounded-full mx-2 "
                  style={{ backgroundColor: color }}
                ></span>
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Specs;
