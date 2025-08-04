import React, { useState } from "react";
import { ChevronRight, Info } from "lucide-react"; // Using lucide-react for icons

// Data structure to hold the technical specifications
const techSpecsData = [
  {
    id: "range",
    title: "Range",
    items: [
      {
        label: "City:",
        value: "105 miles (169 km)",
        tooltip:
          'This is intended to provide a reasonable estimate of the riding range that can be expected during "stop-and-go" operation typically found in urban areas, such as that prescribed by the "City Test" duty cycle within SAE J2982. Actual range will vary based upon actual riding conditions and habits.',
      },
      {
        label: "Low-Speed Highway Commuting:",
        value: "66 miles (106 km)",
        tooltip:
          'This is intended to provide a reasonable estimate for the riding range that can be expected during operation that consists of 50% stop-and-go and 50% highway at a steady-state speed of 55 mph (89 km/h), using the "highway commuting range" calculation specified by SAE J2982. Actual range will vary based upon riding conditions and habits.',
      },
      {
        label: "High-Speed Highway Commuting:",
        value: "59 miles (95 km)",
        tooltip:
          'This is intended to provide a reasonable estimate for the riding range that can be expected during operation that consists of 50% stop-and-go and 50% highway at a steady-state speed of 70 mph (113 km/h), using the "highway commuting range" calculation specified by SAE J2982. Actual range will vary based upon riding conditions and habits.',
      },
    ],
  },
  {
    id: "motor",
    title: "Motor",
    items: [
      {
        label: "Peak torque:",
        value: "78 lb-ft (106 Nm)",
        tooltip: null,
      },
      {
        label: "Peak power:",
        value: "46 hp (34 kW) @ 4,300 rpm",
        tooltip:
          "Peak power the motor can produce for a finite period of time. Actual power output may vary depending on a number of conditions, including operating temperature and state of charge.",
      },
      {
        label: "Top speed (max):",
        value: "85 mph (137 km/h)",
        tooltip:
          "The top speed is based on the results of government regulated standardized testing known as homologation. Actual top speed may vary according to riding conditions and the battery's state-of-charge.",
      },
      {
        label: "Top speed (sustained):",
        value: "75 mph (121 km/h)",
        tooltip:
          "The sustained top speed is that which the motorcycle can be expected to hold for an extended period of time. This sustained top speed may vary according to riding conditions.",
      },
      {
        label: "Type:",
        value:
          "Z-Force® 75-5 passively air-cooled, high efficiency, radial flux, interior permanent magnet, brushless motor",
        tooltip: null,
      },
      {
        label: "Controller:",
        value:
          "High efficiency, 550 amp, 3-phase brushless controller with regenerative deceleration",
        tooltip:
          "An electric motorcycle's controller is akin to a gas bike's fuel injection system. It precisely \"meters\" the flow of electricity from the battery to the motor according to the action of the rider's throttle and surrounding conditions, via a sophisticated map algorithm.",
      },
    ],
  },
  {
    id: "power-system",
    title: "Power System",
    items: [
      {
        label: "Power pack:",
        value: "Z-Force® Li-Ion intelligent integrated",
        tooltip: null,
      },
      {
        label: "Max capacity:",
        value: "7.2 kWh",
        tooltip:
          "Maximum capacity tends to be the electric vehicle industry's choice for reporting the maximum amount of energy that can be stored in a vehicle's power pack.",
      },
      {
        label: "Nominal capacity:",
        value: "6.3 kWh",
        tooltip:
          "Nominal capacity is the most accurate measure of the amount of usable energy that can be stored in a vehicle's power pack. It differs from maximum capacity because it is calculated using an average voltage that is more often 'the norm' rather than a maximum which is rarely seen.",
      },
      {
        label: "Charger type:",
        value: "650 W, integrated",
        tooltip: null,
      },
      {
        label: "Charge time (standard):",
        value: "9.7 hours (100% charged) / 9.2 hours (95% charged)",
        tooltip:
          "Typical charge time using the motorcycle's on-board charger and a standard 110 V or 220 V outlet.",
      },
      {
        label: "— With one accessory charger:",
        value: "4.1 hours (100% charged) / 3.6 hours (95% charged)",
        tooltip:
          "Zero's scalable charging accessories allow customers to add multiple standalone chargers for up to a ~75% reduction in charge time.",
      },
      {
        label: "— With max accessory chargers:",
        value: "1.8 hours (100% charged) / 1.3 hours (95% charged)",
        tooltip:
          "Zero's scalable charging accessories allow customers to add multiple standalone chargers for up to a ~75% reduction in charge time.",
      },
      {
        label: "Input:",
        value: "Standard 110 V or 220 V",
        tooltip: null,
      },
    ],
  },
  {
    id: "drivetrain",
    title: "Drivetrain",
    items: [
      {
        label: "Transmission:",
        value: "Clutchless direct drive",
        tooltip: null,
      },
      {
        label: "Final drive:",
        value: "90T / 18T, Poly Chain® HTD® Carbon™ belt",
        tooltip: null,
      },
    ],
  },
  {
    id: "chassis",
    title: "Chassis / Suspension / Brakes",
    items: [
      {
        label: "Front suspension:",
        value:
          "Showa 41 mm inverted cartridge forks, with adjustable spring preload, compression and rebound damping",
        tooltip: null,
      },
      {
        label: "Rear suspension:",
        value:
          "Showa 40 mm piston, piggy-back reservoir shock with adjustable spring preload, compression and rebound damping",
        tooltip: null,
      },
      {
        label: "Front suspension travel:",
        value: "7.00 in (178 mm)",
        tooltip: "Wheel travel, measured along fork-line.",
      },
      {
        label: "Rear suspension travel:",
        value: "8.94 in (227 mm)",
        tooltip: "Wheel travel, measured perpendicular to ground.",
      },
      {
        label: "Front brakes:",
        value:
          "Bosch Gen 9 ABS, J-Juan asymmetric dual piston floating caliper, 320 x 5 mm disc",
        tooltip: null,
      },
      {
        label: "Rear brakes:",
        value:
          "Bosch Gen 9 ABS, J-Juan single piston floating caliper, 240 x 4.5 mm disc",
        tooltip: null,
      },
      {
        label: "Front tire:",
        value: "Pirelli Diablo Rosso II 110/70-17",
        tooltip: null,
      },
      {
        label: "Rear tire:",
        value: "Pirelli Diablo Rosso II 140/70-17",
        tooltip: null,
      },
      {
        label: "Front wheel:",
        value: "3.00 x 17",
        tooltip: null,
      },
      {
        label: "Rear wheel:",
        value: "3.50 x 17",
        tooltip: null,
      },
    ],
  },
  {
    id: "dimensions",
    title: "Dimensions",
    items: [
      {
        label: "Wheelbase:",
        value: "56.0 in (1,422 mm)",
        tooltip:
          "The distance from where the front tire contacts the ground to where the back tire contacts the ground without any additional weight on the motorcycle (Unladen).",
      },
      {
        label: "Seat height:",
        value: "30.0 in (762 mm)",
        tooltip:
          "The distance from the ground to the top of the seat without any additional weight on the motorcycle (Unladen).",
      },
    ],
  },
  {
    id: "weight",
    title: "Weight",
    items: [
      {
        label: "Curb weight:",
        value: "298 lb (135 kg)",
        tooltip: null,
      },
    ],
  },
  {
    id: "economy",
    title: "Economy",
    items: [
      {
        label: "Equivalent consumption:",
        value: "77 MPGe (3.05 l/100 km)",
        tooltip: null,
      },
      {
        label: "Electricity cost:",
        value: "~$0.01 per mile",
        tooltip: "Based on average US electricity prices.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    items: [
      {
        label: "MSRP:",
        value: "$11,995",
        tooltip:
          "Manufacturer's Suggested Retail Price. Does not include destination charges, taxes, or fees.",
      },
    ],
  },
  {
    id: "warranty",
    title: "Warranty",
    items: [
      {
        label: "Standard warranty:",
        value: "2 years / unlimited mileage",
        tooltip: "Covers any defects in materials or workmanship.",
      },
      {
        label: "Power pack warranty:",
        value: "5 years / unlimited mileage",
        tooltip:
          "Covers any defects in the power pack, including capacity degradation.",
      },
    ],
  },
];

interface TechSpecItemProps {
  label: string;
  value: string;
  tooltip: string | null;
}

// A helper component to render each specification item with a tooltip
const TechSpecItem: React.FC<TechSpecItemProps> = ({
  label,
  value,
  tooltip,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="grid grid-cols-[1fr_1fr_2fr] py-2 items-center border-b border-gray-700/50 w-[800px] font-gro">
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
      <div className=" flex justify-center items-center">:</div>
      <div className="text-[12px]  text-white flex justify-start items-start">
        {value}
      </div>
    </div>
  );
};

const TechSpecsComponent: React.FC = () => {
  const [activeSpec, setActiveSpec] = useState(techSpecsData[0].id);

  // Find the currently active specification object
  const activeSpecData = techSpecsData.find((spec) => spec.id === activeSpec);

  return (
    <>
      {/* Title section, visible on all screen sizes */}
      <div className="m-auto pt-[150px] px-8 ">
        <div className="border-t border-gray-700/50  px-[64px]">
          <h2 className="text-[90px]  tracking-wide uppercase">
            Technical Specifications
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-[#1E1E21] min-h-screen p-8 text-white font-inter">
        {/* Main content grid */}
        <div className="w-full lg:w-2/3 lg:pl-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: Navigation tabs */}
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

                  {/* Mobile view content (collapsible) */}
                  <div
                    className={`px-4 lg:hidden transition-all duration-300 ease-in-out ${
                      activeSpec === spec.id
                        ? "max-h-96 opacity-100"
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

          {/* Right side: Detailed information for the selected tab (Desktop view) */}
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
