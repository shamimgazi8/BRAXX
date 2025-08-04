"use client";

import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import PurchaseButton from "@/Modules/@common/PurchaseButton";
import Footer from "@/Modules/@common/Footer";
import { useEffect } from "react";

export default function FooterWrapper() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    console.log("Footer in view:", inView);
  }, [inView]);

  return (
    <>
      <AnimatePresence>
        {!inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <PurchaseButton />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer observerRef={ref} />
    </>
  );
}
