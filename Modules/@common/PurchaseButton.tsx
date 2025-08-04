"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MoveRight, ShoppingCart, X } from "lucide-react"; // Using Lucide React for icons
import Image from "next/image";
import ColorSelector from "../Home/components/ColorSelector";

const PurchaseButton = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <>
      {/* Fixed Purchase Button */}
      <motion.button
        onClick={() => setIsSidebarOpen(true)}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        className="fixed bottom-0 left-[150px] h-[66px] w-[300px] z-40 flex items-center justify-center gap-1 p-4 bg-black text-white   transition-transform   focus:outline-none cursor-pointer text-xl "
        aria-label="Open purchase sidebar"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Image
          src={"/images/360frames/.CHROME 360/0001.png"}
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
              className="fixed top-0 right-0 h-full w-full max-w-[33vw] bg-[#1e1e21] text-white  z-50 flex flex-col font-gro "
              initial={{ x: "100%" }} // Starts off-screen to the right
              animate={{ x: 0 }} // Slides to its final position (x=0)
              exit={{ x: "100%" }} // Slides back off-screen on exit
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            >
              {/* Sidebar header with close button */}
              <div className="flex items-center justify-end pb-4 border-b border-black  p-6 ">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                  aria-label="Close sidebar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Bike details content */}
              <div
                className="flex-1 overflow-y-auto p-6 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Bike Image */}
                <img
                  src="/images/360frames/.CHROME 360/0001.png"
                  alt="A cool mountain bike"
                  className="w-full h-auto rounded-xl  mb-6"
                />

                {/* Bike Info */}
                <div className="space-y-4 ">
                  <h3 className="text-xl font-semibold">BRAXX O3</h3>
                  <p className="text-sm text-white ">
                    This cutting-edge mountain bike is built for adventure. With
                    a lightweight carbon fiber frame and a high-performance
                    suspension system, it's ready to conquer any trail.
                  </p>
                  <div className=" w-full flex justify-start items-start ml-10 my-5">
                    <ColorSelector />
                  </div>
                  <div className="text-2xl font-bold  flex items-baseline">
                    $1,950.00
                    <span className="text-base font-normal text-gray-500 ml-2">
                      USD
                    </span>
                  </div>
                </div>
              </div>

              {/* Buy Now Button */}
              <div className=" pt-6 bg-[#171717] p-6">
                <div>
                  <p className=" text-[13px] mb-1">
                    When checking out, you will be directed to Zero's Ekho
                    Dealer Checkout. Ekho Dealer allows you to finance /
                    purchase, insure, and register your Zero bike 100% online in
                    minutes. Ekho Dealer is licensed to sell our products.
                  </p>
                  <a href="#" className="text-[#a38f65] underline ">
                    Learn more
                  </a>
                </div>
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
