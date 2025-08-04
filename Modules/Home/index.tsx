'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'
import BikeHero from './components/SpecCard'
import PurchaseButton from '../@common/PurchaseButton'
import ParallaxHero from '../@common/Parallax/ParallaxFx'


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
      <section className="h-screen bg-white flex items-center justify-center">
  <p className="text-black text-3xl">Next Section</p>
</section>
    </main>
  )
}
