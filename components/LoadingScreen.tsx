"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // A robust, hardcoded 2.5-second loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Wait 2.5 seconds
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // Using opacity and pointerEvents instead of AnimatePresence prevents 
  // any unmounting glithches where the image disappears before the background.
  return (
    <motion.div
      className="bg-sand z-[99999] flex items-center justify-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: isLoading ? "auto" : "none" 
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="relative w-32 h-32 md:w-48 md:h-48"
      >
        <Image
          src="/logo-transparent.png"
          alt="Carregando..."
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
