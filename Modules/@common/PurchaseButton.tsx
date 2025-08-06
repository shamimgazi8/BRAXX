"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, X } from "lucide-react";
import Image from "next/image";
import ColorSelector from "./ColorSelector";
import { useColorStore } from "@/store/useColorStore";

const PurchaseButton = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const { selectedColor } = useColorStore();

  const folderName = selectedColor.label.toLowerCase();

  return (
    <>
      {/* Floating Purchase Button */}
      <motion.button
        onClick={() => setIsSidebarOpen(true)}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        className="fixed bottom-0 left-[150px] max-md:left-1/2 max-md:-translate-x-1/2 h-[66px] w-[300px] z-40 flex items-center justify-center gap-1 p-4 bg-black text-white transition-transform focus:outline-none cursor-pointer text-xl"
        aria-label="Open purchase sidebar"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={`/images/360frames/${folderName}-optimized/frame-001.webp`}
          alt="img"
          height={60}
          width={120}
        />
        PURCHASE
        <motion.span
          className="ml-2"
          animate={{ x: isButtonHovered ? 10 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <MoveRight className="h-7 w-7" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[33vw] bg-[#1e1e21] text-white z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 35, stiffness: 300 }}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-end border-b border-black p-6">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800"
                  aria-label="Close sidebar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div
                className="flex-1 overflow-y-auto p-6 scrollbar-hide relative"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Animated Circles + Image */}
                <div className="relative w-full mb-6 flex justify-center items-center">
                  {/* Background Circles */}
                  <motion.div
                    className="absolute rounded-full bg-[#0a0a0a52]"
                    style={{ width: 160, height: 160 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute rounded-full bg-[#0f0f0f]"
                    style={{ width: 240, height: 240 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.15 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute rounded-full bg-[#070707]"
                    style={{ width: 360, height: 360 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.15 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  />

                  {/* Image */}
                  <img
                    src={`/images/360frames/${folderName}-optimized/frame-001.webp`}
                    alt={`Bike in ${selectedColor.label} color`}
                    className="relative w-full max-w-[300px] sm:max-w-[360px] h-auto rounded-xl z-10"
                  />
                </div>

                {/* Info Text */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">BRAXX O3</h3>
                  <p className="text-sm text-white">
                    This cutting-edge mountain bike is built for adventure. With
                    a lightweight carbon fiber frame and a high-performance
                    suspension system, it's ready to conquer any trail.
                  </p>
                  <div className="w-full flex justify-start ml-4 sm:ml-10 my-5">
                    <ColorSelector />
                  </div>
                  <div className="text-2xl font-bold flex items-baseline">
                    $1,950.00
                    <span className="text-base font-normal text-gray-500 ml-2">
                      USD
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="pt-6 bg-[#171717] p-6">
                <p className="text-[13px] mb-2 leading-relaxed">
                  When checking out, you will be directed to Zero's Ekho Dealer
                  Checkout. Ekho Dealer allows you to finance / purchase,
                  insure, and register your Zero bike 100% online in minutes.
                </p>
                <a href="#" className="text-[#a38f65] underline text-sm">
                  Learn more
                </a>
                <button
                  onClick={() => alert("Proceeding to checkout...")}
                  className="w-full py-4 bg-[#a38f65] text-white font-semibold hover:bg-[#837454] cursor-pointer transition-colors focus:outline-none mt-4"
                >
                  CHECKOUT NOW
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PurchaseButton;
