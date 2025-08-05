// store/useColorStore.ts
import { create } from "zustand";

type Color = {
  label: string;
  value: string;
};

type ColorStore = {
  selectedColor: Color;
  setSelectedColor: (color: Color) => void;
};

export const useColorStore = create<ColorStore>((set) => ({
  selectedColor: { label: "Chrome", value: "#393939" },
  setSelectedColor: (color) => set({ selectedColor: color }),
}));
