"use client";
import dynamic from "next/dynamic";
import ParallaxHero from "../@common/Parallax/ParallaxHero";
import ParallaxFXESection from "../@common/Parallax/ParallaxSection";
import BikePerformanceSlider from "./components/BikePerformenceSlider";
import TechSpecsComponent from "./components/TechSpecsComponent";
import { useColorStore } from "@/store/useColorStore";
import ColorSelector from "../@common/ColorSelector";

import HeroSpecs from "./components/HeroSpec";
import Image from "next/image";
import LogoMarquee from "../@common/InfinityLogoScroll";

// Dynamically import 360 viewer
const Viewer360 = dynamic(() => import("@/Modules/Home/components/Viewer360"), {
  ssr: false,
});

export default function HomePage() {
  const selectedColor = useColorStore((state) => state.selectedColor);

  const folderName = selectedColor.label.toLowerCase();

  const frames = Array.from(
    { length: 96 },
    (_, i) =>
      `https://cdn.jsdelivr.net/gh/shamimgazi8/BRAXX/public/images/360frames/${folderName}-optimized/frame-${String(
        i + 1
      ).padStart(3, "0")}.webp`
  );

  return (
    <main className="relative">
      <section className="h-screen flex md:flex-row flex-col justify-center items-start mt-[10vh] relative">
        <div className="w-[380px] absolute left-[8vw] md:flex hidden">
          <HeroSpecs />
        </div>

        <div>
          <Viewer360 images={frames} height={600} />
          <div className=" flex  justify-center gap-5">
            <ColorSelector />
            <ColorSelector />
          </div>
        </div>
        <div className="w-full  justify-center items-center   flex md:hidden">
          <HeroSpecs />
        </div>
      </section>

      <ParallaxHero
        imageSrc="/placeholder/placeholder-10.png"
        videoSrc="/placeholder/placeholder-video.mp4"
        cursorEnabled={true}
      />
      <div className="w-full bg-[#1e1e21]">
        <LogoMarquee />
        <ParallaxFXESection
          title="FUTURISTIC DESIGN"
          description="Partnering with Huge Design, we crafted the future of motorcycles - the FXE. Breathtaking profile, record-breaking performance, and cutting-edge technology that totally redefines motorcycling. Only from the global leader in electric motorcycles. The future is here."
          imageSrc="/placeholder.avif"
          features={[
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build...",
            },
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build...",
            },
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build...",
            },
          ]}
        />

        <ParallaxFXESection
          title="INSTANT TORQUE"
          description="Partnering with Huge Design, we crafted the future of motorcycles - the FXE..."
          imageSrc="/placeholder/placeholder-8.png"
          features={[
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build...",
            },
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build...",
            },
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build...",
            },
          ]}
          reverse
        />

        <ParallaxHero imageSrc="/placeholder.avif" />

        <div className="bg-white">
          <div className="container">
            <BikePerformanceSlider />
          </div>
        </div>

        <div className="bg-[#1E1E21]">
          <div className="container">
            <TechSpecsComponent />
          </div>
        </div>
      </div>
    </main>
  );
}
