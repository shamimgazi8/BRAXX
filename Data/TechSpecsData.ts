// app/data/techSpecsData.ts

export interface TechSpecItem {
  label: string;
  value: string;
  tooltip: string | null;
}

export interface TechSpecGroup {
  id: string;
  title: string;
  items: TechSpecItem[];
}

export const techSpecsData: TechSpecGroup[] = [
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
