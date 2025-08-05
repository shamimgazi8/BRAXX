// components/About/AboutPage.tsx

import HeroSection from "./components/HeroSection";
import ImageWithTextSection from "./components/ImageWithTextSection";

export default function AboutPage() {
  return (
    <main className="relative transition-all duration-[1000ms]">
      <div className="overflow-hidden">
        <HeroSection />
      </div>
      <div className="relative flex flex-col bg-white text-black py-8 lg:py-12">
        <ImageWithTextSection
          title="The story"
          image="https://images.prismic.io/zero-cms-disco/13cdac55-fbec-4ab8-a27a-f32c9add66e3_story_8db85a1b.jpg?auto=compress,format"
          alt="Story image"
          reverse={true}
          paragraphs={[
            "Zero Motorcycles is the next step in motorcycle evolution. By combining the best aspects of a traditional motorcycle with today's most advanced technology, Zero produces high-performance electric motorcycles that are lightweight, efficient, fast off the line and fun to ride.",
            "Once a burning idea conceived inside a Santa Cruz, California garage, Zero has rapidly grown into an internationally known motorcycle company. Since 2006, Zero has invited motorcyclists to go for a ride. Some things are better experienced than explained.",
          ]}
        />
        <ImageWithTextSection
          title="The mission"
          image="https://images.prismic.io/zero-cms-disco/f024475c-42e6-43cb-bedb-ef993823f165_mission_fbb47912.jpg?auto=compress,format"
          alt="Mission image"
          reverse={false}
          paragraphs={[
            "Zero Motorcycles creates a superior riding experience with its transformational line of electric powered motorcycles. Our people are driven by innovation, charged by passion, guided by integrity, and measured by results.",
            "With an unwavering focus on quality, we are committed to delivering exceptional value, performance, and fun for our customers and partners worldwide.",
          ]}
        />
      </div>
    </main>
  );
}
