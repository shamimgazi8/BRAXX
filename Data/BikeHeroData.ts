export const bikeHeroData = {
  title: "O3 ",
  subtitle: {
    name: "BRAXX O3",
    type: "Street",
  },
  price: "$12,495",
  specs: {
    speed: {
      label: "Speed",
      value: "85 MPH",
    },
    range: {
      label: "Range",
      value: "105 Miles",
    },
    torque: {
      label: "Torque",
      value: "78 LB-FT",
    },
    charge: {
      label: "Charge",
      value: "1.3 Hours",
    },
  },
  modelYears: [
    {
      label: "2024",
      href: "/model/zero-fxe-2024",
      isActive: false,
    },
    {
      label: "2025",
      href: "/model/zero-fxe-2024", // You can change this later if needed
      isActive: false,
    },
  ],
};

export const productData = [
  {
    productName: "S8",
    colors: [
      { name: "RED", tailwindClass: "bg-red-500" },
      { name: "BLACK", tailwindClass: "bg-black" },
    ],
  },
  {
    productName: "R15",
    colors: [
      { name: "SILVER", tailwindClass: "bg-gray-200" },
      { name: "BLACK", tailwindClass: "bg-black" },
    ],
  },
  {
    productName: "C35",
    colors: [],
  },
];
