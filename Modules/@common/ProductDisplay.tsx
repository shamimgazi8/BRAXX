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
      <p className="text-[30px] text-white ">{productName}</p>

      {colors.length === 0 ? (
        <p className="text-[15px] text-white">COMING SOON</p>
      ) : (
        <div className="flex items-center gap-2">
          {colors.map((color, index) => (
            <React.Fragment key={index}>
              <p className="text-[15px] text-white">
                {color.name}{" "}
                <span
                  className={`inline-block w-[10px] h-[10px] ${color.tailwindClass} rounded-full`}
                ></span>
              </p>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
