"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { bikeTabsData } from "@/Data/BikePeformanceTabData";

export default function BikePerformanceSlider() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative z-20 flex flex-col bg-white text-black pt-12 pb-6 px-4 sm:px-8 md:px-16">
      <div className="grid-container mb-4">
        <div className="col-span-4 lg:col-span-6">
          <h5 className="text-[20px] sm:text-[24px] uppercase tracking-wider mb-2">
            Performance
          </h5>
          <h4 className="text-[26px] sm:text-[33px] tracking-wider uppercase leading-snug">
            The unprecedented combination of industry-leading
            <br className="hidden sm:block" />
            power, control, and connection
          </h4>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative -mx-4 sm:mx-0">
        <ul
          className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 no-scrollbar px-4 sm:px-0"
          role="tablist"
        >
          {bikeTabsData.map((tab) => (
            <li key={tab.id} className="shrink-0">
              <button
                className={clsx(
                  "px-4 py-2 text-[16px] sm:text-[19px] uppercase tracking-wide font-medium transition-colors",
                  active === tab.id
                    ? "border-b-4 text-black border-[#a38f65]"
                    : "text-gray-500"
                )}
                onClick={() => setActive(tab.id)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Animated Content */}
      <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[70vh] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={bikeTabsData[active].id}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={bikeTabsData[active].image}
              alt={bikeTabsData[active].title}
              fill
              className="object-cover"
              priority
            />
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute bottom-8 sm:bottom-16 left-4 sm:left-16  text-white p-4 rounded-lg max-w-[90%] sm:max-w-lg"
            >
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
                className="text-[20px] sm:text-[28px]"
              >
                {bikeTabsData[active].heading}
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.4, ease: "easeOut" }}
                className="mt-2 text-[14px] sm:text-[16px] line-clamp-3 sm:line-clamp-none"
              >
                {bikeTabsData[active].description}
              </motion.p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
