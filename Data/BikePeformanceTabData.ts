// app/data/bikeTabsData.ts

export interface BikeTab {
  id: number;
  title: string;
  image: string;
  heading: string;
  description: string;
}

export const bikeTabsData: BikeTab[] = [
  {
    id: 0,
    title: "Battery",
    image: "/placeholder/placeholder-1.png",
    heading: "Battery",
    description:
      "Zero Motorcycles’ Z-Force® batteries are the most power and energy dense in the EV world. The FXE features a 7.2 kWh battery pack that provides a city range of up to 100 miles.",
  },
  {
    id: 1,
    title: "Charger",
    image: "/placeholder.avif",
    heading: "Onboard Charger",
    description:
      "The FXE’s discreetly accessible 650 W onboard charger can be plugged into any standard outlet. It takes about 8 hours to fully charge the battery from empty.",
  },
  {
    id: 2,
    title: "Motor",
    image: "/placeholder/placeholder-2.png",
    heading: "Z-Force® 75-5 Motor",
    description:
      "The Z-Force® 75-5 motor is a compact, passively air-cooled, interior permanent magnet (IPM) motor that delivers 46 hp and 78 ft-lb of torque. It’s a completely clutchless system for seamless power delivery.",
  },
  {
    id: 3,
    title: "Suspension",
    image: "/placeholder/placeholder-3.png",
    heading: "Suspension",
    description:
      "The FXE features a Showa 41mm inverted fork with adjustable spring preload, compression and rebound damping in the front and a Showa 40mm piggy-back reservoir shock with adjustable spring preload, compression and rebound damping in the rear. It provides a plush and controlled ride.",
  },
  {
    id: 4,
    title: "Brakes",
    image: "/placeholder/placeholder-4.png",
    heading: "Brakes",
    description:
      "J. Juan brakes provide excellent stopping power with a 320mm disc in the front and a 240mm disc in the rear. Bosch anti-lock brake system (ABS) is standard for safety.",
  },
  {
    id: 5,
    title: "Wheels & Tires",
    image: "/placeholder/placeholder-5.png",
    heading: "Wheels & Tires",
    description:
      "The FXE comes with cast alloy wheels and Pirelli Diablo Rosso III tires, a combination that offers great grip and handling. The front tire is a 110/70-17 and the rear is a 140/70-17.",
  },
  {
    id: 6,
    title: "Frame",
    image: "/placeholder/placeholder-6.png",
    heading: "Frame",
    description:
      "The aircraft-grade aluminum twin-spar frame is incredibly strong and lightweight. It provides a stable and responsive chassis for a confident ride.",
  },
  {
    id: 7,
    title: "Dash",
    image: "/placeholder/placeholder-5.png",
    heading: "Dash",
    description:
      "The full-color TFT display provides all the essential information at a glance, including speed, battery state of charge, ride mode, and more. It also connects to the Zero Motorcycles app via Bluetooth.",
  },
  {
    id: 8,
    title: "App",
    image: "/placeholder/placeholder-2.png",
    heading: "Zero App",
    description:
      "The Zero Motorcycles app allows you to customize your bike’s performance, monitor charging, track your rides, and receive over-the-air updates. It’s like having a co-pilot in your pocket.",
  },
  {
    id: 9,
    title: "Lighting",
    image: "/placeholder/placeholder-1.png",
    heading: "LED Lighting",
    description:
      "The FXE features a full suite of LED lighting, including a powerful headlight, taillight, and turn signals. It provides excellent visibility for both the rider and others on the road, day or night.",
  },
];
