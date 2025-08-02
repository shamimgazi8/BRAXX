'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'

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
    <main className="relative">


      {/* 360 Viewer Section (Placeholder) */}
      <section className="h-screen bg-[#cecece]  text-white flex flex-col items-center justify-center">
  
        <div className=" w-full">
          <Viewer360 images={frames} height={700}  /> 
        </div>
      </section>
      <section  className='h-screen bg-[#cecece] text-4xl font-league text-white flex flex-col items-center justify-center'>
        hello world
      </section>


    </main>
  )
}
