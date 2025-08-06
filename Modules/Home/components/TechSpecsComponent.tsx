import React, { useState } from "react";
import { ChevronRight, Info } from "lucide-react";
import { techSpecsData } from "@/Data/TechSpecsData";

interface TechSpecItemProps {
  label: string;
  value: string;
  tooltip: string | null;
}

const TechSpecItem: React.FC<TechSpecItemProps> = ({
  label,
  value,
  tooltip,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="grid grid-cols-[1fr_1fr_auto] py-2 items-center border-b border-gray-700/50 w-full max-w-[800px] font-gro overflow-x-auto">
      <div className="flex items-center text-sm font-light text-gray-400">
        <span className="mr-2">{label}</span>
        {tooltip && (
          <div className="relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="text-gray-500 hover:text-white transition-colors"
              aria-label={`More information about ${label}`}
            >
              <Info size={16} />
            </button>
            {showTooltip && (
              <div className="absolute z-10 w-64 p-3 -left-32 top-6 bg-gray-800 text-white text-xs rounded-lg shadow-lg">
                {tooltip}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="md:flex hidden justify-center items-center">:</div>
      <div className="text-[12px] text-white flex justify-start items-start break-words">
        {value}
      </div>
    </div>
  );
};

const TechSpecsComponent: React.FC = () => {
  const [activeSpec, setActiveSpec] = useState(techSpecsData[0].id);
  const activeSpecData = techSpecsData.find((spec) => spec.id === activeSpec);

  return (
    <>
      {/* Title section */}
      <div className="m-auto pt-[150px] px-8">
        <div className="border-t border-gray-700/50 px-[64px]">
          <h2 className="md:text-[90px] text-[30px] text-white tracking-wide uppercase">
            Technical Specifications
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-[#1E1E21] min-h-screen p-8 text-white font-inter">
        <div className="w-full lg:w-2/3 lg:pl-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navigation Tabs */}
          <div className="col-span-1">
            <ul className="space-y-1">
              {techSpecsData.map((spec, index) => (
                <li
                  key={spec.id}
                  className={`relative border-b border-gray-700/50 transition-colors ${
                    activeSpec === spec.id
                      ? "bg-zinc-800 lg:bg-transparent"
                      : "hover:bg-zinc-800/50"
                  }`}
                >
                  <button
                    className="w-full text-left py-4 px-4 lg:px-0 flex items-center justify-between transition-colors"
                    onClick={() => setActiveSpec(spec.id)}
                  >
                    <div className="flex items-center">
                      <span className="text-sm text-gray-400 w-8">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h6
                        className={`text-lg font-medium ml-4 lg:ml-8 ${
                          activeSpec !== spec.id && "lg:text-gray-400"
                        }`}
                      >
                        {spec.title}
                      </h6>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`transform transition-transform lg:hidden ${
                        activeSpec === spec.id ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Mobile Collapsible Content */}
                  <div
                    className={`px-4 lg:hidden transition-all duration-300 ease-in-out ${
                      activeSpec === spec.id
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {activeSpecData && activeSpecData.id === spec.id && (
                      <div className="py-2">
                        {activeSpecData.items.map((item, itemIndex) => (
                          <TechSpecItem key={itemIndex} {...item} />
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel (Desktop only) */}
          <div className="hidden lg:block col-span-1 lg:pl-16">
            {activeSpecData && (
              <div>
                {activeSpecData.items.map((item, itemIndex) => (
                  <TechSpecItem key={itemIndex} {...item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechSpecsComponent;
