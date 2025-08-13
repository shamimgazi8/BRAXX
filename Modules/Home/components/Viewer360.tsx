"use client";

import { productData } from "@/Data/BikeHeroData";
import { ProductDisplay } from "@/Modules/@common/ProductDisplay";
import React, { useState, useEffect, useRef } from "react";

interface Viewer360Props {
  images: string[];
  width?: number | string;
  height?: number | string;
}

export default function Viewer360({
  images,
  width = "100%",
  height = "80vh",
}: Viewer360Props) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const lastX = useRef<number | null>(null);
  const deltaAccum = useRef(0);
  const initialPinchDistance = useRef<number | null>(null);
  const frameCount = images.length;
  const sensitivity = 5;

  // Preload all images
  useEffect(() => {
    let loaded = 0;
    const preloadedImages: HTMLImageElement[] = [];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === images.length) {
          setIsLoaded(true);
        }
      };
      preloadedImages.push(img);
    });

    // Reset frame index on color change
    setCurrentFrame(0);
  }, [images]);

  const updateFrame = (deltaX: number) => {
    deltaAccum.current += deltaX;

    if (Math.abs(deltaAccum.current) >= sensitivity) {
      const frameChange = Math.floor(deltaAccum.current / sensitivity);
      deltaAccum.current -= frameChange * sensitivity;

      setCurrentFrame((prev) => {
        let next = (prev + frameChange) % frameCount;
        if (next < 0) next += frameCount;
        return next;
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || lastX.current === null) return;
    const deltaX = e.clientX - lastX.current;
    lastX.current = e.clientX;
    updateFrame(deltaX);
  };

  const handleMouseUp = () => {
    dragging.current = false;
    lastX.current = null;
    deltaAccum.current = 0;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch-to-zoom logic
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      initialPinchDistance.current = Math.sqrt(dx * dx + dy * dy);
    } else if (e.touches.length === 1) {
      // 360-view dragging logic
      dragging.current = true;
      lastX.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDistance.current !== null) {
      // Pinch-to-zoom logic
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const currentPinchDistance = Math.sqrt(dx * dx + dy * dy);

      const scaleChange = currentPinchDistance / initialPinchDistance.current;
      const newScale = Math.min(Math.max(1, scale * scaleChange), 3);

      setScale(newScale);
      initialPinchDistance.current = currentPinchDistance;
    } else if (
      e.touches.length === 1 &&
      dragging.current &&
      lastX.current !== null
    ) {
      // 360-view dragging logic
      const deltaX = e.touches[0].clientX - lastX.current;
      lastX.current = e.touches[0].clientX;
      updateFrame(deltaX);
    }
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    lastX.current = null;
    deltaAccum.current = 0;
    initialPinchDistance.current = null;
  };

  return (
    <div
      className=" flex flex-col justify-center items-center   md:mt-2"
      ref={containerRef}
      style={{
        width,
        height,
        touchAction: "pan-y",
        userSelect: "none",
        cursor: 'url("/icons-360.png") 8 8, grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex md:gap-12 gap-5 items-center md:mt-0 mt-[220px] ">
        {productData.map((product: any, index: number) => (
          <React.Fragment key={index}>
            <ProductDisplay
              productName={product.productName}
              colors={product.colors}
            />
            {index < productData.length - 1 && (
              <span className=" text-white">—</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {isLoaded ? (
        <img
          src={images[currentFrame]}
          alt={`360 frame ${currentFrame + 1}`}
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            pointerEvents: "none",
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            transition: "transform 0.1s ease-out",
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white">
          Loading...
        </div>
      )}
    </div>
  );
}
