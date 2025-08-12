import React, { useState } from "react";

const PreOrderCart: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div
      className="
        bg-[#e6fd7c] 
        p-4 
        sm:w-[526px] sm:h-[167px] 
        w-full 
        h-auto
      "
    >
      {/* Header Section */}
      <div className="flex  md:flex-row items-start md:items-center justify-between">
        <h1 className="text-xl sm:text-[40px] font-extrabold text-black leading-tight mb-2 md:mb-0">
          JOIN THE FUN.
        </h1>
        <div className="text-[11px] sm:text-[15px] font-bold text-gray-800 leading-4.5">
          <p>Shipping Early 2026.</p>
          <p>$100 refundable deposit reserves yours.</p>
        </div>
      </div>

      {/* Main Action Section: Quantity and Button */}
      <div className="flex  sm:flex-row items-end gap-4">
        {/* Quantity Selector */}
        <div className=" sm:w-auto flex flex-col space-y-2 font-gro">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full sm:w-auto flex flex-col space-y-2">
              <label
                htmlFor="quantity"
                className="text-xs sm:text-sm font-semibold text-gray-800 mb-0"
              >
                Quantity
              </label>

              <div className="border-b-2 border-black w-full h-[40px]">
                <div className="flex items-stretch justify-between">
                  <button
                    onClick={handleDecrement}
                    className="p-1 text-lg font-bold text-gray-700 hover:bg-yellow-200 transition-colors focus:outline-none"
                    aria-label="Decrement quantity"
                  >
                    -
                  </button>
                  <span className="p-1 text-lg font-bold text-gray-800 flex items-center justify-center min-w-[3rem]">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="p-1 text-lg font-bold text-gray-700 hover:bg-yellow-200 transition-colors focus:outline-none"
                    aria-label="Increment quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-Order Button */}
        <button
          className="w-full sm:flex-1 mt-4 sm:mt-0 px-4 py-2 bg-black text-white text-base sm:text-lg hover:bg-gray-800 transition-colors cursor-pointer"
          aria-label="Pre-order now"
        >
          Pre-Order Now
        </button>
      </div>

      {/* Footer Text */}
      <p className="text-[11px] sm:text-[15px] font-bold text-gray-800 leading-4.5 mt-2">
        Limited time. 50% off additional reservations when you pre-order for
        your crew.
      </p>
    </div>
  );
};

export default PreOrderCart;
