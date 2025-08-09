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
    <div className="w-full max-w-xl md:max-w-2xl bg-[#e6fd7b] p-4 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between ">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight mb-2 md:mb-0">
          JOIN THE FUN.
        </h1>
        <div className="text-sm font-semibold text-gray-800 space-y-1 font-gro pl-5">
          <p>Shipping Early 2026.</p>
          <p>$100 refundable deposit reserves yours.</p>
        </div>
      </div>

      {/* Main Action Section: Quantity and Button */}
      <div className="flex flex-col sm:flex-row items-end gap-4">
        {/* Quantity Selector */}
        <div className="w-full sm:w-auto flex flex-col space-y-2 font-gro">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Quantity Selector */}
            <div className="w-full sm:w-auto flex flex-col space-y-2">
              <label
                htmlFor="quantity"
                className="text-sm font-semibold text-gray-800"
              >
                Quantity
              </label>

              {/* Full underline container */}
              <div className="border-b-2 border-black w-full">
                <div className="flex items-stretch justify-between ">
                  <button
                    onClick={handleDecrement}
                    className="p-3 text-lg font-bold text-gray-700 hover:bg-yellow-200 transition-colors focus:outline-none "
                    aria-label="Decrement quantity"
                  >
                    -
                  </button>
                  <span className="p-3 text-lg font-bold text-gray-800 flex items-center justify-center   min-w-[3rem]">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="p-3 text-lg font-bold text-gray-700 hover:bg-yellow-200 transition-colors focus:outline-none "
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
          className="w-full font-gro sm:flex-1 mt-6 sm:mt-0 px-4 py-2 bg-black text-white font-bold text-lg  shadow-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900"
          aria-label="Pre-order now"
        >
          Pre-Order Now
        </button>
      </div>

      {/* Footer Text */}
      <p className="mt-2 text-[12px] font-semibold text-gray-800 leading-snug font-gro">
        Limited time. 50% off additional reservations when you pre-order for
        your crew.
      </p>
    </div>
  );
};

export default PreOrderCart;
