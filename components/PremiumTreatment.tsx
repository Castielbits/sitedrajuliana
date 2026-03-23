"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Using Great Vibes or similar cursive local style if no font loaded, 
// but we have Lora italic which can serve elegantly if styled right.
export default function PremiumTreatment() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-24 bg-bark">
      {/* 1. Background Layer: Full, blurred and darkened */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/fundosessao2.png"
          alt="Tratamento Premium Fundo"
          fill
          className="object-cover object-center scale-105"
        />
        {/* Soft elegant vignette to ensure top text is readable without blurring/darkening the main image */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(61,46,30,0.7) 0%, rgba(61,46,30,0) 40%, rgba(61,46,30,0.3) 100%)"
          }}
        />
      </div>

      {/* 2. Main Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 h-full flex flex-col items-center justify-center">
        
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Typography: "TRATAMENTO PREMIUM..." (Floating above center) */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center font-serif text-sand uppercase leading-tight tracking-[0.15em] sm:tracking-[0.25em] z-20 mb-[-120px] md:mb-[-150px] drop-shadow-sm"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            Tratamento<br />Premium<br />
            <span className="opacity-90 tracking-normal text-mist font-medium" style={{ fontSize: "0.6em", display: 'block', marginTop: '1rem', letterSpacing: '0.15em' }}>
              Para Bruxismo, Stress & Dores Crônicas
            </span>
          </motion.h2>

          {/* The Sharp Center Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 w-[85%] sm:w-[500px] aspect-[4/5] mx-auto overflow-hidden shadow-2xl rounded-sm"
          >
            <Image
              src="/fundosessao2.png"
              alt="Paciente recebendo tratamento premium no pescoço e face"
              fill
              className="object-cover object-center"
              quality={100}
            />
            {/* Elegant inner border */}
            <div className="absolute inset-4 border border-sand/20 pointer-events-none" />
          </motion.div>

          {/* Typography Continued: overlapping below */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="z-20 mt-[-40px] md:mt-[-60px] ml-auto mr-12 sm:mr-[-40px]"
          >
            <span className="font-serif italic text-4xl sm:text-6xl text-sage/80 drop-shadow-sm font-light">
              e Mais...
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
