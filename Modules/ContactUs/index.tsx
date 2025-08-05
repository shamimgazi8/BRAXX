// components/Contact/ContactPage.tsx

import ContactBlock from "./components/ContactBlock";
import ContactUsForm from "./components/ContactUsForm";
import HeroBanner from "./components/HeroBanner";
import ParagraphBlock from "./components/PharagraphBlock";

export default function ContactPage() {
  return (
    <main className="relative transition-all duration-[1000ms]">
      <div className="overflow-hidden">
        <HeroBanner />
      </div>
      <div>
        <ContactUsForm />
      </div>
      <div className="relative flex flex-col bg-white text-black py-8 lg:py-12">
        <ContactBlock
          title="Address"
          labels={["North American Office", "European Office"]}
          left={
            <>
              <p>380 El Pueblo Rd</p>
              <p>Scotts Valley, CA 95066, USA</p>
            </>
          }
          right={
            <>
              <p>Oester 12</p>
              <p>1723 HW Noord-Scharwoude, Netherlands</p>
            </>
          }
          note="There are no demo rides available in our European office. Please schedule a demo at your nearest dealer."
        />

        <ContactBlock
          title="Call Us"
          labels={["United States", ""]}
          left={
            <>
              <p>(888) RUN-ZERO (toll free)</p>
              <p>(831) 438-3500</p>
            </>
          }
          right={<></>}
        />

        <ContactBlock
          title="Email Us"
          labels={["General Inquiry", "media"]}
          left={<p>inquiries@zeromotorcycles.com</p>}
          right={<p>media@zeromotorcycles.com</p>}
        />

        <ParagraphBlock
          title="Schedule a demo ride"
          links={[
            { text: "Visit a Zero dealer", href: "/dealer-locator" },
            { text: "Schedule a demo ride online", href: "/demo-ride" },
            { text: "Check our events page", href: "/events-home" },
          ]}
        />

        <ParagraphBlock
          title="For owner services"
          links={[{ text: "Visit the Owner Resources page", href: "/" }]}
        />

        <ParagraphBlock
          title="Other ways to connect"
          links={[
            {
              text: "Like us on Facebook",
              href: "https://www.facebook.com/ZeroMotorcycles/",
            },
            { text: "Follow us on X", href: "https://twitter.com/ZeroMC" },
            {
              text: "Follow us on Instagram",
              href: "https://www.instagram.com/zeromotorcycles/",
            },
          ]}
        />
      </div>
    </main>
  );
}
