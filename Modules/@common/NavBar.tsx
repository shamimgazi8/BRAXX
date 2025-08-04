'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ease-in-out',
          scrolled ? 'py-[18px]' : 'py-[28px]'
        )}
      >
        {/* Logo */}
        <Link href="/" className="text-white text-4xl tracking-wide ">
          BRAXX
        </Link>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

// NavLink component to encapsulate the Framer Motion logic
const NavLink = ({ href, children }:any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative text-white text-[22px] font-normal tracking-wider transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.span
        className="absolute left-0 bottom-0 block h-[2px] w-full bg-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ originX: 0 }}
      />
    </Link>
  );
};