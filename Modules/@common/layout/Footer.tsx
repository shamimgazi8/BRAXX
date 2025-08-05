import Link from "next/link";
import { Copyright, ArrowRight } from "lucide-react";

type FooterProps = {
  observerRef?: React.Ref<HTMLDivElement>;
};

const footerData = {
  about: {
    title: "ABOUT",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Employment", href: "/employment" },
      { name: "Media Gallery", href: "/media" },
    ],
  },
  interact: {
    title: "INTERACT",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Contact a Dealer", href: "/dealer" },
      { name: "Events", href: "/events" },
      { name: "Owners", href: "/owners" },
    ],
  },
  commercial: {
    title: "COMMERCIAL",
    links: [
      { name: "Fleet & Authority", href: "/fleet" },
      { name: "Become a Dealer", href: "/become-dealer" },
      { name: "Powertrain Systems", href: "/powertrain" },
    ],
  },
  purchase: {
    title: "PURCHASE",
    links: [
      { name: "Financing", href: "/financing" },
      { name: "Incentives", href: "/incentives" },
      { name: "Accessories", href: "/accessories" },
      { name: "Promotions", href: "/promotions" },
    ],
  },
};

const Footer = ({ observerRef }: FooterProps) => {
  return (
    <footer
      className="bg-[#262626] text-white font-sans"
      ref={observerRef} // Attach ref here on footer element
    >
      {/* Top section with logo and links */}
      <div className="px-4 lg:px-8 py-16">
        <div className="grid grid-cols-[1fr_2fr]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-bold ml-5">BRAXX</span>
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 flex-grow">
            {Object.entries(footerData).map(([key, section]) => (
              <div key={key}>
                <h3 className="uppercase text-sm font-bold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle section with CTA and newsletter */}
      <div className="bg-[#171717]">
        <div className="grid grid-cols-[1fr_2fr]">
          {/* Request a demo ride button */}
          <Link
            href="/demo-ride"
            className="text-white text-sm flex justify-start items-center  uppercase tracking-widest hover:text-[#b8a07c] transition-colors  p-4 lg:p-8"
          >
            Request a Demo Ride
          </Link>

          {/* Newsletter signup form */}
          <form className=" bg-[#1f1f1f] text-[#111111] w-full lg:w-auto  flex items-center justify-between ">
            <span className="text-sm  tracking-wide text-white/60  p-4 lg:p-8 ">
              Sign up for our newsletter to receive updates about Zero
              Motorcycles products, events, offers, and promotions.
            </span>
            <button
              type="submit"
              className="flex-shrink-0 p-8 bg-[#a38f65] cursor-pointer hover:bg-[#937f55]"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom section with copyright and policy links */}
      <div className="bg-black px-5 py-8 md:px-6  grid grid-cols-4 lg:grid-cols-12 text-white/50">
        <div className="col-span-4 col-start-1 flex flex-col md:flex-row lg:col-span-8 lg:col-start-5">
          <div className="mb-2 w-full pr-1 md:mb-0 flex justify-start items-center">
            <p className=" text-[11px] flex justify-start items-center">
              Contact: (888) 968-ZERO
            </p>
          </div>
          <div className="mb-2 w-full pr-1 md:mb-0 flex justify-start items-center">
            <p className=" text-[11px] flex justify-start items-center">
              Privacy Policy - Terms of Service
            </p>
          </div>
          <div className="mb-2 w-full pr-1 md:mb-0 flex justify-start items-center">
            <Copyright className="h-4 w-4" />
            <span className=" text-[11px] ml-1">
              2023 Copyright Zero Motorcycles, Inc. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
