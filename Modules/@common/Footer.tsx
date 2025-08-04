'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl tracking-wider">BRAXX</h2>
          <p className="text-sm text-gray-400">Electric Performance Redefined</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-1">
            <h4 className=" text-[18px] mb-2 text-gray-300">Explore</h4>
            <Link href="/models" className="hover:text-white text-gray-400 text-sm">Models</Link>
            <Link href="/360" className="hover:text-white text-gray-400 text-sm">360 Viewer</Link>
            <Link href="/about" className="hover:text-white text-gray-400 text-sm">About</Link>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className=" text-[18px] mb-2 text-gray-300">Company</h4>
            <Link href="/contact" className="hover:text-white text-gray-400 text-sm">Contact</Link>
            <Link href="/dealer" className="hover:text-white text-gray-400 text-sm">Become a Dealer</Link>
            <Link href="/support" className="hover:text-white text-gray-400 text-sm">Support</Link>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <h4 className=" text-[18px] mb-2 text-gray-300">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white text-gray-400">Instagram</a>
            <a href="#" className="hover:text-white text-gray-400">YouTube</a>
            <a href="#" className="hover:text-white text-gray-400">Facebook</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} BRAXX. All rights reserved.
      </div>
    </footer>
  );
}
