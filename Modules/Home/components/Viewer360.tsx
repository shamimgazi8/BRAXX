"use client";

import React, { useState, useEffect, useRef } from "react";

interface Viewer360Props {
  images: string[];
  width?: number | string;
  height?: number | string;
}

export default function Viewer360({
  images,
  width = "100%",
  height = "400px",
}: Viewer360Props) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const lastX = useRef<number | null>(null);
  const deltaAccum = useRef(0);
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
    dragging.current = true;
    lastX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current || lastX.current === null) return;
    const deltaX = e.touches[0].clientX - lastX.current;
    lastX.current = e.touches[0].clientX;
    updateFrame(deltaX);
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    lastX.current = null;
    deltaAccum.current = 0;
  };

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height,
        touchAction: "none",
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
