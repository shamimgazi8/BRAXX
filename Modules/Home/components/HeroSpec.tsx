import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SpecItem {
  label: string;
  value: string;
}

interface SpecSection {
  title: string;
  items?: SpecItem[];
}

const HeroSpecs = () => {
  const sections: SpecSection[] = [
    {
      title: "Performance",
      items: [
        { label: "Power", value: "Peak 8kW" },
        { label: "Motor Torque", value: "Peak 8kW" },
        { label: "Wheel Torque", value: "" },
        { label: "Range", value: "" },
      ],
    },
    {
      title: "Geometry",
      items: [
        { label: "Power", value: "Peak 8kW" },
        { label: "Motor Torque", value: "Peak 8kW" },
        { label: "Wheel Torque", value: "" },
        { label: "Range", value: "" },
      ],
    },
    {
      title: "Components",
      items: [
        { label: "Power", value: "Peak 8kW" },
        { label: "Motor Torque", value: "Peak 8kW" },
        { label: "Wheel Torque", value: "" },
        { label: "Range", value: "" },
      ],
    },
  ];

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <div className=" text-white bg-transparent">
      {/* Title */}
      <h1 className="text-[130px] font-semibold ">
        O3 <span className=" text-[100px]">PRO</span>
      </h1>

      {/* Sections */}
      <div className="border-l-8 border-white pl-2 space-y-2 font-semibold w-[350px]">
        {sections.map((section, idx) => (
          <div key={idx} className=" pb-2 font-bold">
            {/* Section Header */}
            <div
              className="flex justify-between items-center cursor-pointer border-b-[2px]"
              onClick={() => toggleSection(section.title)}
            >
              <h3 className="text-lg font-light">{section.title}</h3>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openSection === section.title ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Section Items */}
            {openSection === section.title && section.items && (
              <div className="mt-4  grid grid-cols-2  text-[16px] font-bold  ">
                {section.items.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className=" border-b text-right pr-[70px] font-bold">
                      {item.label}
                    </div>
                    <div className="text-left border-b font-normal">
                      {item.value}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSpecs;
