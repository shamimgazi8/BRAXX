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
    { title: "Geometry" },
    { title: "Components" },
  ];

  const [openSection, setOpenSection] = useState<string | null>("Performance");

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <div className="w-full max-w-2xl text-white bg-transparent">
      {/* Title */}
      <h1 className="text-[120px] font-thin ">
        O3 <span className="font-normal text-[90px]">PRO</span>
      </h1>

      {/* Sections */}
      <div className="border-l-8 border-white pl-6 space-y-2">
        {sections.map((section, idx) => (
          <div key={idx} className=" pb-2">
            {/* Section Header */}
            <div
              className="flex justify-between items-center cursor-pointer border-b"
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
              <div className="mt-4 ml-4 grid grid-cols-2 gap-y-3 text-sm">
                {section.items.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="text-white/80 border-b">{item.label}</div>
                    <div className="text-left border-b">{item.value}</div>
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
