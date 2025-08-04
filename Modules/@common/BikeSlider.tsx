'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import clsx from 'clsx'

const tabs = [
  {
    id: 0,
    title: 'Battery',
    image: '/placeholder/placeholder-1.png',
    heading: 'Battery',
    description: 'Zero Motorcycles’ Z-Force® batteries are the most power and energy dense...'
  },
  {
    id: 1,
    title: 'Charger',
    image: '/placeholder.avif',
    heading: 'Onboard Charger',
    description: 'The FXE’s discreetly accessible 650 W onboard charger can be plugged in...'
  },
  // Add more tabs as needed
]

export default function BikePerformanceSlider() {
  const [active, setActive] = useState(0)

  return (
    <div className="relative z-20 flex flex-col bg-white text-black pt-12 pb-6 px-4">
      <div className="grid-container mb-4">
        <div className="col-span-4 lg:col-span-6">
          <h5 className="text-lg font-semibold">Performance</h5>
          <h4 className="text-2xl">
            The unprecedented combination of industry-leading power, control, and connection.
          </h4>
        </div>
      </div>

      {/* Tabs */}
      <ul className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 mb-4" role="tablist">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              className={clsx(
                'px-4 py-2 text-sm font-medium transition-colors',
                active === tab.id
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500'
              )}
              onClick={() => setActive(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Animated Content */}
      <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[70vh] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={tabs[active].id}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Image
              src={tabs[active].image}
              alt={tabs[active].title}
              fill
              className="object-cover"
              priority
            />
<motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -100, opacity: 0 }}
  transition={{ duration: 0.4, ease: 'easeInOut' }}
  className="absolute bottom-8 left-8 bg-opacity-60 text-white p-4 rounded-lg max-w-lg"
>
  <motion.h3
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.45, duration: 0.4, ease: 'easeOut' }}
    className="text-xl font-bold"
  >
    {tabs[active].heading}
  </motion.h3>
  <motion.p
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.55, duration: 0.4, ease: 'easeOut' }}
    className="mt-2 text-sm"
  >
    {tabs[active].description}
  </motion.p>
</motion.div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
