// components/About/ImageWithTextSection.tsx
import React from "react";

interface ImageWithTextSectionProps {
  title: string;
  image: string;
  alt?: string;
  reverse?: boolean;
  paragraphs: string[];
}

export default function ImageWithTextSection({
  title,
  image,
  alt = "",
  reverse = false,
  paragraphs,
}: ImageWithTextSectionProps) {
  return (
    <section
      className={`mb-8 mx-3 md:mx-6 lg:mx-[11%] flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-4 items-center justify-between`}
    >
      <div className="flex-1">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      <div className="flex-1 w-full">
        <h1 className="mb-2 text-[45px]">{title}</h1>
        <div className="text-left">
          {paragraphs.map((text, i) => (
            <p key={i} className={i !== 0 ? "mt-4 font-gro" : " font-gro"}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
