"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const slideImages = [
  { src: "/fundosessao2.png", alt: "Paciente recebendo tratamento premium no pescoço e face" },
  { src: "/stress.png", alt: "Stress" },
  { src: "/bruxismo.png", alt: "Bruxismo" },
];

export default function PremiumTreatment() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });

  // progress=0: fundo da seção na base da viewport (prestes a rolar pra próxima)
  // progress=1: fundo da seção no topo da viewport (seção já passou)
  const eMaisOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const eMaisY = useTransform(scrollYProgress, [0, 0.15], [16, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-24 bg-bark">
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
            className="text-center font-serif text-sand uppercase leading-tight tracking-[0.15em] sm:tracking-[0.25em] z-20 mb-[-120px] md:mb-[-150px]"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", textShadow: "0 2px 20px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4)" }}
          >
            Tratamento<br />Premium<br />
            <span className="tracking-normal text-white/90 font-medium" style={{ fontSize: "0.6em", display: 'block', marginTop: '1rem', letterSpacing: '0.15em', textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
              Para Bruxismo, Stress, Dores Crônicas,<br />Zumbido no Ouvido ou até mesmo Tonturas
            </span>
          </motion.h2>

          {/* The Sharp Center Portrait Image - Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 w-[85%] sm:w-[500px] aspect-[4/5] mx-auto overflow-hidden shadow-2xl rounded-sm"
          >
            <AnimatePresence>
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slideImages[current].src}
                  alt={slideImages[current].alt}
                  fill
                  className="object-cover object-center"
                  quality={100}
                />
              </motion.div>
            </AnimatePresence>
            {/* Olive overlay para suavizar as fotos */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{ background: "rgba(52, 68, 38, 0.38)" }}
            />
            {/* Elegant inner border */}
            <div className="absolute inset-4 border border-sand/20 pointer-events-none z-20" />
          </motion.div>

          {/* Typography Continued: aparece ao se aproximar do fim da seção */}
          <motion.div
            style={{ opacity: eMaisOpacity, y: eMaisY }}
            className="z-20 mt-[-40px] md:mt-[-60px] ml-auto mr-12 sm:mr-[-40px]"
          >
            <span
              className="font-serif italic text-4xl sm:text-6xl text-white font-light"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
            >
              e Mais...
            </span>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
