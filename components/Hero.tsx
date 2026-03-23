"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroTexts = [
  "Trabalhar na área da saúde é diferente de atuar no comércio. É uma oportunidade de impactar profundamente a vida de uma pessoa, uma vez que a dor, o sofrimento e o desconforto abrem uma porta no corpo dela.",
  "Com o passar do tempo, percebi o quanto essa oportunidade é valiosa, pois uma das características mais maravilhosas do ser humano é a capacidade de aprender. Somos seres em constante transformação!",
  "Essa é a minha maior motivação: ao observar que uma disfunção pode ser resolvida não apenas através das minhas mãos, mas também por meio do crescimento pessoal que promove hábitos de vida mais saudáveis, beneficiando todos ao redor do paciente.",
  "Com 18 anos de experiência, sou uma referência em Belo Horizonte entre os médicos que atuam na área de ATM e dor orofacial, pois reconheço a importância do trabalho multidisciplinar.",
  "Além disso, a busca contínua por conhecimento é uma obrigação para quem lida com pessoas. Como especialista, não me prendo a uma única técnica e analiso as patologias a partir de várias perspectivas.",
  "Por exemplo, o bruxismo é abordado de diferentes ângulos, pois cada indivíduo é único. As ferramentas que desenvolvo no coaching voltado para o crescimento pessoal aumentam a cada dia...",
  "...especialmente agora com minha formação em Psicologia, já que essa busca é parte da minha vida pessoal.",
  "Especialista em Bruxismo • Especialista em ATM • Tratamento Bruxismo • Tratamento ATM"
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 8000); // 8 seconds per text for a slow, relaxing read

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Início"
      style={{ backgroundColor: "var(--color-bark)" }}
    >
      {/* Clinic Reception Background Image - appears first */}
      <Image
        src="/banner.png"
        alt="Recepção da Clínica Juliana Torres com mural de floresta"
        fill
        priority
        className="object-cover object-center"
        quality={100}
        style={{ zIndex: 1 }}
      />

      {/* Video Background - transitions in over the image */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, ease: "easeInOut", delay: 1.5 }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 2 }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </motion.video>

      {/* Dark gradient overlay for text legibility over the detailed photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(46,35,26,0.8) 0%, rgba(46,35,26,0.45) 50%, rgba(46,35,26,0.15) 100%)",
          zIndex: 3,
        }}
        aria-hidden="true"
      />

      {/* Animated subtle noise texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 20%, rgba(245,242,237,0.05) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(135,169,107,0.08) 0%, transparent 50%)",
          zIndex: 4,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto mt-20">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-6"
        >
          {/* Main Name - Visually dominant */}
          <span
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight"
            style={{ color: "var(--color-sand)" }}
          >
            Dra. Juliana Torres
          </span>
          
          {/* SEO Profession and Location */}
          <span
            className="font-sans text-xl md:text-2xl lg:text-3xl mt-4 font-light tracking-wide"
            style={{ color: "rgba(245,242,237,0.9)" }}
          >
            Fisioterapeuta em Belo Horizonte
          </span>
          
          {/* Specialties and abstract concept */}
          <span
            className="font-sans text-sm md:text-base lg:text-lg mt-5 font-light max-w-xl mx-auto tracking-wider uppercase"
            style={{ color: "rgba(245,242,237,0.6)" }}
          >
            Especialista em Tratamento de Bruxismo e ATM • O ritmo natural da sua cura
          </span>
        </motion.h1>

        {/* Fading text container */}
        <div className="relative h-48 md:h-40 w-full max-w-xl mx-auto mb-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(4px)", y: -10 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute font-sans text-lg md:text-xl leading-relaxed"
              style={{ color: "rgba(245,242,237,0.9)" }}
            >
              {heroTexts[currentTextIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative mt-2 inline-block"
        >
          {/* Subtle pulsing background glow and border */}
          <motion.div
            animate={{ scale: [1, 1.12], opacity: [0.5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: "var(--color-sage)",
              borderRadius: "8px",
            }}
          />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, backgroundColor: "#789462" }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center justify-center px-10 md:px-14 py-[11px] font-sans text-xs md:text-sm tracking-[0.15em] uppercase font-medium shadow-md transition-colors duration-300"
            style={{
              backgroundColor: "var(--color-sage)",
              color: "var(--color-sand)",
              borderRadius: "8px",
            }}
          >
            Agendar avaliação
          </motion.a>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-14"
          style={{ color: "rgba(245,242,237,0.55)" }}
          aria-label="Rolar para baixo"
        >
          <motion.svg
            width="28"
            height="44"
            viewBox="0 0 28 44"
            fill="none"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M14 2C14 2 20 10 20 22C20 30 17 36 14 42C11 36 8 30 8 22C8 10 14 2 14 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinejoin="round"
            />
            <path
              d="M14 20L14 32"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M10 28L14 33L18 28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
