import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <div className="bg-[#2a282e] h-[50px] flex items-center translate-y-[-2px]">
      <Marquee gradient={false} speed={50} pauseOnHover>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="md:mx-25 mx-10 flex-shrink-0">
            <Image
              src={"/placeholder/pl-3.png"}
              alt="placeholder logo"
              height={50}
              width={50}
              unoptimized
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
