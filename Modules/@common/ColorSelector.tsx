"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useColorStore } from "@/store/useColorStore";

const colors = [
  { label: "Chrome", value: "#393939" },
  { label: "Black", value: "#000000" },
  { label: "Red", value: "#ff0000" },
  { label: "Chrome_Black", value: "#1B2A34" },
];

const ColorSelector = () => {
  const { selectedColor, setSelectedColor } = useColorStore();
  const [expanded, setExpanded] = useState(false);

  const handleSelect = (color: (typeof colors)[0]) => {
    setSelectedColor(color);
    setExpanded(false);
  };

  return (
    <div className="flex items-center justify-center gap-4 text-white translate-x-[-30px]">
      <p className="text-[18px] opacity-60"> {selectedColor.label}</p>

      {!expanded && (
        <button
          aria-label={`Selected color is ${selectedColor.label}, click to change`}
          className="w-8 h-8 rounded-full border-2 border-white"
          style={{ backgroundColor: selectedColor.value }}
          onClick={() => setExpanded(true)}
          type="button"
        />
      )}

      <AnimatePresence>
        {expanded && (
          <motion.fieldset
            className="flex gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {colors.map((color) => (
              <label
                key={color.value}
                className="relative cursor-pointer"
                aria-label={`Select ${color.label}`}
              >
                <input
                  type="radio"
                  name="bike-color"
                  value={color.label}
                  checked={selectedColor.value === color.value}
                  onChange={() => handleSelect(color)}
                  className="sr-only"
                />
                <motion.div
                  layout
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                    selectedColor.value === color.value
                      ? "border-white scale-110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.value }}
                  whileHover={{ scale: 1.2 }}
                />
              </label>
            ))}
          </motion.fieldset>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorSelector;
