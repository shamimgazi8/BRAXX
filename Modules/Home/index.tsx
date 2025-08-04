"use client";
import dynamic from "next/dynamic";
import BikeHero from "./components/SpecCard";
import ParallaxHero from "../@common/Parallax/ParallaxHero";
import ParallaxFXESection from "../@common/Parallax/ParallaxSection";
import BikePerformanceSlider from "../@common/BikePerformenceSlider";
import TechSpecsComponent from "../@common/TechSpecsComponent";

// Dynamically import 360 viewer if you have one (placeholder for now)
const Viewer360 = dynamic(() => import("@/Modules/Home/components/Viewer360"), {
  ssr: false,
});

export default function HomePage() {
  const frames = Array.from(
    { length: 96 },
    (_, i) =>
      `/images/360frames/.CHROME 360/${String(i + 1).padStart(4, "0")}.png`
  );

  return (
    <main className="relative ">
      {/* 360 Viewer Section (Placeholder) */}
      <section className="h-screen bg-[#cecece]  text-white grid grid-cols-[100px_1fr]">
        <BikeHero />
        <div className=" w-full flex items-center">
          <Viewer360 images={frames} height={700} />
        </div>
      </section>

      <ParallaxHero
        imageSrc="/placeholder/placeholder-10.png"
        videoSrc="/placeholder/placeholder-video.mp4" // optional, omit to disable video
        cursorEnabled={true} // optional, default true; set false to disable custom cursor
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
                "In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.",
            },
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.",
            },
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.",
            },
          ]}
        />

        <ParallaxFXESection
          title="INSTANT TORQUE"
          description="Partnering with Huge Design, we crafted the future of motorcycles - the FXE. Breathtaking profile, record-breaking performance, and cutting-edge technology that totally redefines motorcycling. Only from the global leader in electric motorcycles. The future is here."
          imageSrc="/placeholder/placeholder-8.png"
          features={[
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.",
            },
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.",
            },
            {
              heading: "FROM CONCEPT TO REALITY",
              content:
                "In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.",
            },
          ]}
          reverse
        />
        <ParallaxHero imageSrc="/placeholder.avif" />
        <div className=" bg-white">
          <div className=" container">
            <BikePerformanceSlider />
          </div>
        </div>
        <div className=" bg-[#1E1E21]">
          <div className=" container">
            <TechSpecsComponent />
          </div>
        </div>
      </div>
    </main>
  );
}
