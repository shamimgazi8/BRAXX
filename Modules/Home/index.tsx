"use client";
import dynamic from "next/dynamic";
import BikeHero from "./components/SpecCard";
import ParallaxHero from "../@common/Parallax/ParallaxHero";
import ParallaxFXESection from "../@common/Parallax/ParallaxSection";
import BikePerformanceSlider from "./components/BikePerformenceSlider";
import TechSpecsComponent from "./components/TechSpecsComponent";
import { useColorStore } from "@/store/useColorStore";

// Dynamically import 360 viewer
const Viewer360 = dynamic(() => import("@/Modules/Home/components/Viewer360"), {
  ssr: false,
});

export default function HomePage() {
  const selectedColor = useColorStore((state) => state.selectedColor);

  // Use selectedColor.label to generate the folder name in lowercase
  const folderName = selectedColor.label.toLowerCase();

  // const frames = Array.from(
  //   { length: 96 },
  //   (_, i) =>
  //     `/images/360frames/${folderName}-optimized/frame-${String(i + 1).padStart(
  //       3,
  //       "0"
  //     )}.webp`
  // );
  const frames = Array.from(
    { length: 96 },
    (_, i) =>
      `https://cdn.jsdelivr.net/gh/shamimgazi8/BRAXX/public/images/360frames/${folderName}-optimized/frame-${String(
        i + 1
      ).padStart(3, "0")}.webp`
  );

  return (
    <main className="relative">
      {/* 360 Viewer Section */}
      <section className="h-screen bg-[#cecece] text-white grid  md:grid-cols-[100px_1fr]">
        <div className="order-2 md:order-1 md:block hidden">
          <BikeHero />
        </div>
        <div className="order-2 md:order-1  md:hidden block">
          <h1 className=" text-[40px]">BRAXX O3</h1>
          <h1 className=" text-[40px]">BRAXX O3</h1>
          <h1 className=" text-[40px]">BRAXX O3</h1>
          <h1 className=" text-[40px]">BRAXX O3</h1>
          <h1 className=" text-[40px]">BRAXX O3</h1>
          <h1 className=" text-[40px]">BRAXX O3</h1>
          <h1 className=" text-[40px]">BRAXX O3</h1>
        </div>
        <div className="order-1 md:order-2 w-full flex items-center">
          <Viewer360 images={frames} height={700} />
        </div>
      </section>

      <ParallaxHero
        imageSrc="/placeholder/placeholder-10.png"
        videoSrc="/placeholder/placeholder-video.mp4"
        cursorEnabled={true}
      />

      <div className="w-full bg-[#1e1e21]">
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
