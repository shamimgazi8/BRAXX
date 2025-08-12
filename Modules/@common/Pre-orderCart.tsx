import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PreOrderCart: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const cartRef = useRef<HTMLDivElement>(null);

  // Detect desktop width only on client
  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 640);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Close on outside click (mobile only)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target as Node) &&
        !isDesktop
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isDesktop]);

  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleIncrement = () => setQuantity((prev) => prev + 1);

  return (
    <div className="fixed right-0 bottom-0 z-[9999] sm:w-auto">
      {/* Mobile Toggle Button */}
      {!isOpen && !isDesktop && (
        <button
          className="absolute right-0 bottom-0 bg-[#e6fd7c] text-black p-3 rounded-tl-xl sm:hidden flex items-center gap-2 w-[120px]"
          onClick={() => setIsOpen(true)}
        >
          <ShoppingCart size={20} />
          <span className="text-sm font-bold">Pre-Order</span>
        </button>
      )}

      {/* Full Cart with Animation */}
      <AnimatePresence>
        {(isOpen || isDesktop) && (
          <motion.div
            ref={cartRef}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="bg-[#e6fd7c] p-4 sm:w-[526px] sm:h-[167px] w-full h-auto relative"
          >
            {/* Mobile Close Button */}
            {!isDesktop && (
              <button
                className="absolute top-2 right-2 text-black sm:hidden"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            )}

            {/* Header */}
            <div className="flex md:flex-row items-start md:items-center justify-between">
              <h1 className="text-xl sm:text-[40px] font-extrabold text-black leading-tight mb-2 md:mb-0">
                JOIN THE FUN.
              </h1>
              <div className="text-[11px] sm:text-[15px] font-bold text-gray-800 leading-4.5">
                <p>Shipping Early 2026.</p>
                <p>$100 refundable deposit reserves yours.</p>
              </div>
            </div>

            {/* Quantity & Button */}
            <div className="flex sm:flex-row items-end gap-4">
              <div className="sm:w-auto flex flex-col space-y-2 font-gro">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-full sm:w-auto flex flex-col space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-0">
                      Quantity
                    </label>
                    <div className="border-b-2 border-black w-full h-[40px]">
                      <div className="flex items-stretch justify-between">
                        <button
                          onClick={handleDecrement}
                          className="p-1 text-lg font-bold text-gray-700 hover:bg-yellow-200 transition-colors"
                        >
                          -
                        </button>
                        <span className="p-1 text-lg font-bold text-gray-800 flex items-center justify-center min-w-[3rem]">
                          {quantity}
                        </span>
                        <button
                          onClick={handleIncrement}
                          className="p-1 text-lg font-bold text-gray-700 hover:bg-yellow-200 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full sm:flex-1 mt-4 sm:mt-0 px-4 py-2 bg-black text-white text-base sm:text-lg hover:bg-gray-800 transition-colors">
                Pre-Order Now
              </button>
            </div>

            {/* Footer */}
            <p className="text-[11px] sm:text-[15px] font-bold text-gray-800 leading-4.5 mt-2">
              Limited time. 50% off additional reservations when you pre-order
              for your crew.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PreOrderCart;
