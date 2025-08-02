'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
        scrolled ? 'bg-black/30 ' : 'bg-transparent'
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
          <Link href="/about" className="text-white text-[19px] hover:text-gray-300 text-2xl transition tracking-wider">
            About
          </Link>
          <Link href="/contact" className="text-white text-[19px] hover:text-gray-300 transition tracking-wider font-normal">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
