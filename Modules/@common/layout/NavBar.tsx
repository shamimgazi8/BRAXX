"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Install lucide-react or replace with any icon set

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "px-6 flex justify-between items-center transition-all duration-300 ease-in-out mx-5",
          scrolled ? "py-[18px]" : "py-[28px]"
        )}
      >
        <div></div>
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-4xl tracking-wide font-extrabold"
        >
          BRAXX
        </Link>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 text-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <MobileLink
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </MobileLink>
            <MobileLink
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </MobileLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const NavLink = ({ href, children }: any) => {
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

const MobileLink = ({ href, children, onClick }: any) => (
  <Link
    href={href}
    className="block text-lg tracking-wide font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);
