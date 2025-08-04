'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'
import BikeHero from './components/SpecCard'
import PurchaseButton from '../@common/PurchaseButton'
import ParallaxHero from '../@common/Parallax/ParallaxFx'
import ParallaxFXESection from '../@common/Parallax/ParallaxSection'


// Dynamically import 360 viewer if you have one (placeholder for now)
const Viewer360 = dynamic(() => import('@/Modules/Home/components/Viewer360'), { ssr: false })

export default function HomePage() {
  const frames = Array.from({ length: 96 }, (_, i) =>
 `/images/360frames/.CHROME 360/${String(i + 1).padStart(4, '0')}.png`
)
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Fade-in content
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <main className="relative ">
      {/* 360 Viewer Section (Placeholder) */}
      <section className="h-screen bg-[#cecece]  text-white grid grid-cols-[100px_1fr]">
      <BikeHero />
      <div className=" w-full flex items-center">
        <Viewer360 images={frames} height={700}  /> 
      </div>
      </section>
      <PurchaseButton />
 
        <ParallaxHero />
        <div className="w-full bg-[#1e1e21]">
      <ParallaxFXESection
        title="FUTURISTIC DESIGN"
        description="Partnering with Huge Design, we crafted the future of motorcycles - the FXE. Breathtaking profile, record-breaking performance, and cutting-edge technology that totally redefines motorcycling. Only from the global leader in electric motorcycles. The future is here."
        imageSrc="/placeholder.avif"
        features={[
    { heading: 'FROM CONCEPT TO REALITY', content: 'In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.' },
    { heading: 'FROM CONCEPT TO REALITY', content: 'In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.' },
    { heading: 'FROM CONCEPT TO REALITY', content: 'In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.' },
 
  ]}
  
      />

      <ParallaxFXESection
        title="INSTANT TORQUE"
              description="Partnering with Huge Design, we crafted the future of motorcycles - the FXE. Breathtaking profile, record-breaking performance, and cutting-edge technology that totally redefines motorcycling. Only from the global leader in electric motorcycles. The future is here."
        imageSrc="/placeholder.avif"
        features={[
    { heading: 'FROM CONCEPT TO REALITY', content: 'In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.' },
    { heading: 'FROM CONCEPT TO REALITY', content: 'In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.' },
    { heading: 'FROM CONCEPT TO REALITY', content: 'In 2018, Zero partnered with Bill Webb for a custom FXS build, inspiring future motorcycles. Webb approach pushed boundaries yet maintained relatability and functionality, and from that the FXE was born. The FXE has been embraced by the motorcycle industry and exceeding even our own lofty expectations. The FXE has advanced design influenced by Huge Design in San Francisco that advances transportation thinking. Affordable luxury combines unmatched performance and style. Redefine your ride with the FXE.' },
 
  ]}
        reverse // optional: image on left, text on right
      />
      <ParallaxHero />
    </div>

    </main>
  )
}
