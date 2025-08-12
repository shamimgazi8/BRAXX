"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

interface ParallaxSectionProps {
  title: string;
  description: string;
  features: { heading: string; content: string }[];
  imageSrc: string;
  reverse?: boolean;
  overlayIcon?: string; // new prop for overlay image
}

export default function ParallaxFXESection({
  title,
  description,
  features,
  imageSrc,
  reverse = false,
  overlayIcon = "/placeholder/placeholder-1.png", // default example image
}: ParallaxSectionProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="relative w-full font-gro">
      <div
        className={clsx(
          "flex flex-col lg:flex-row",
          reverse && "lg:flex-row-reverse"
        )}
      >
        {/* Sticky image section */}
        <div className="relative h-[350px] min-h-[350px] w-full flex-1 brightness-[75%] lg:sticky lg:top-0 lg:h-screen lg:brightness-100">
          <Image
            alt={`Parallax image - ${title}`}
            src={imageSrc}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text section */}
        <div className="w-full flex-1 mb-[100px]">
          <div className="flex justify-center items-center">
            <h2 className="md:text-[100px] text-[50px] text-white font-semibold font-Leag">
              {title}
            </h2>
          </div>
          <div className="mt-4 w-full px-3 lg:mt-[75vh] lg:px-10">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-lg text-white"
            >
              {description}
            </motion.p>

            <div className="mt-8 hidden h-[1px] w-full bg-gray-700 lg:block" />

            {/* Desktop features */}
            <ul className="mt-8 hidden flex-col gap-8 lg:flex">
              {features.map((feat, idx) => (
                <li key={idx} className="flex gap-4">
                  <h5 className="w-[250px] min-w-[250px] text-white text-[16px]">
                    {feat.heading}
                  </h5>
                  <div className="w-full text-gray-400">
                    <p>{feat.content}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile collapsible features */}
            <div className="block lg:hidden">
              {features.map((feat, idx) => (
                <div key={idx} className="border-t border-gray-700">
                  <button
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                    className="flex w-full items-center justify-between py-3"
                  >
                    <h5 className="font-bold text-white">{feat.heading}</h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 10 10"
                      className={clsx(
                        "h-2 w-2 fill-white transition-transform",
                        expanded === idx ? "rotate-180" : "rotate-0"
                      )}
                    >
                      <path d="M10 3.57 5.31 7.882A.46.46 0 0 1 5 8a.46.46 0 0 1-.31-.118L0 3.57.62 3 5 7.028 9.38 3z" />
                    </svg>
                  </button>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: expanded === idx ? "auto" : 0 }}
                    className="overflow-hidden text-gray-400"
                  >
                    <div className="pb-4">
                      <p>{feat.content}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
