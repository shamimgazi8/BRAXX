import React from "react";

type Color = {
  name: string;
  tailwindClass: string;
};

type ProductDisplayProps = {
  productName: string;
  colors: Color[];
};

export const ProductDisplay = ({
  productName,
  colors,
}: ProductDisplayProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Smaller text for mobile, bigger for desktop */}
      <p className="text-[20px] md:text-[30px] text-white">{productName}</p>

      {colors.length === 0 ? (
        <p className="text-[12px] md:text-[15px] text-white">COMING SOON</p>
      ) : (
        <div className="flex items-center gap-1 md:gap-2">
          {colors.map((color, index) => (
            <React.Fragment key={index}>
              <p className="text-[12px] md:text-[15px] text-white">
                {color.name}{" "}
                <span
                  className={`inline-block w-[8px] h-[8px] md:w-[10px] md:h-[10px] ${color.tailwindClass} rounded-full`}
                ></span>
              </p>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
