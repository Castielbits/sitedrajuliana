"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const draPhotos = ["/drapng2.png"];

const heroTexts = [
  "Trabalhar na área da saúde é diferente de atuar no comércio. É uma oportunidade de impactar profundamente a vida de uma pessoa, uma vez que a dor, o sofrimento e o desconforto abrem uma porta no corpo dela.",
  "Com o passar do tempo, percebi o quanto essa oportunidade é valiosa, pois uma das características mais maravilhosas do ser humano é a capacidade de aprender. Somos seres em constante transformação!",
  "Essa é a minha maior motivação: ao observar que uma disfunção pode ser resolvida não apenas através das minhas mãos, mas também por meio do crescimento pessoal que promove hábitos de vida mais saudáveis.",
  "Com mais de 20 anos de excelência, centenas de avaliações 5 estrelas e uma equipe multidisciplinar de experts — sou a maior referência entre os médicos na área de ATM e dor orofacial em BH.",
  "Como especialista, não me prendo a uma única técnica e analiso as patologias a partir de várias perspectivas: terapia cognitivo comportamental, medicina tradicional chinesa, PNL e muito mais.",
  "Doutoranda em Neurociências na UFMG e credenciada em Neuromodulação não invasiva — a busca contínua pelo melhor para cada paciente faz parte da minha missão.",
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % draPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      aria-label="Início"
      style={{ backgroundColor: "#3a4d28" }}
    >
      {/* Grain texture — premium feel */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Video — transição suave, baixa opacidade */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.13 }}
        transition={{ duration: 5, ease: "easeInOut", delay: 2.5 }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 2 }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </motion.video>

      {/* Vignette lateral direita — separa foto do conteúdo */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(35,46,22,0.55) 0%, transparent 45%, rgba(35,46,22,0.7) 60%, rgba(35,46,22,0.9) 100%)",
        }}
      />

      {/* ── MOBILE: foto full-screen com conteúdo sobreposto ── */}
      <div className="md:hidden relative min-h-screen flex flex-col justify-end">

        {/* Foto ocupa a tela toda */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhoto}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={draPhotos[currentPhoto]}
                alt="Dra. Juliana Torres"
                fill
                priority
                quality={100}
                className="object-cover object-top"
                sizes="100vw"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(30,55,15,0.6))",
                }}
              />
            </motion.div>
          </AnimatePresence>
          {/* Gradiente escurece a parte inferior para o conteúdo ser legível */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(30,42,16,0.97) 0%, rgba(30,42,16,0.75) 40%, rgba(30,42,16,0.1) 75%, transparent 100%)",
            }}
          />
        </div>

        {/* Conteúdo sobreposto — parte inferior */}
        <div className="relative z-10 flex flex-col items-start px-7 pb-14 pt-0">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="mb-4">
            <Image src="/logo-transparent.png" alt="Logo" width={44} height={44} className="opacity-85" style={{ filter: "brightness(1.4) sepia(0.3) saturate(1.2)" }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className="mb-1">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase mb-1" style={{ color: "#c9a96e" }}>Clínica</p>
            <h1 className="font-serif text-4xl font-bold leading-none" style={{ color: "#c9a96e" }}>Juliana Torres</h1>
          </motion.div>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 1.0 }} className="my-4 h-px w-16 origin-left" style={{ backgroundColor: "rgba(201,169,110,0.6)" }} />
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.1 }} className="font-sans font-bold text-xl leading-snug uppercase mb-4" style={{ color: "rgba(245,242,237,0.95)" }}>
            Saúde, Harmonia,<br />Bem-Estar Global.
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }} className="flex flex-wrap gap-2 mb-5">
            {["Mestre em Ciências da Saúde", "Doutoranda em Neurociências · UFMG"].map((cred) => (
              <span key={cred} className="font-sans text-[10px] font-medium px-3 py-1 rounded-full border tracking-wide" style={{ color: "rgba(201,169,110,0.9)", borderColor: "rgba(201,169,110,0.3)", backgroundColor: "rgba(201,169,110,0.08)" }}>
                {cred}
              </span>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.35 }} className="relative inline-block">
            <motion.div animate={{ scale: [1, 1.14], opacity: [0.45, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} className="absolute inset-0 pointer-events-none rounded-sm" style={{ backgroundColor: "#c9a96e" }} />
            <motion.a href="#contact" whileTap={{ scale: 0.97 }} className="relative flex items-center justify-center px-8 py-3 font-sans text-xs tracking-[0.2em] uppercase font-bold shadow-lg" style={{ backgroundColor: "#c9a96e", color: "#1c2a10", borderRadius: "4px" }}>
              Agendar avaliação
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ── DESKTOP: 2 colunas ── */}
      <div className="hidden md:flex flex-row min-h-screen">

        {/* ESQUERDA: conteúdo */}
        <div className="w-1/2 flex flex-col justify-center items-start px-16 lg:px-24 pb-16 pt-28">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="mb-5">
            <Image src="/logo-transparent.png" alt="Logo Clínica Juliana Torres" width={56} height={56} className="opacity-85" style={{ filter: "brightness(1.4) sepia(0.3) saturate(1.2)" }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className="mb-1">
            <p className="font-sans text-xs tracking-[0.35em] uppercase mb-1" style={{ color: "#c9a96e" }}>Clínica</p>
            <h1 className="font-serif text-5xl lg:text-[3.5rem] font-bold leading-none" style={{ color: "#c9a96e" }}>Juliana Torres</h1>
          </motion.div>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 1.0, ease: "easeOut" }} className="my-5 h-px w-20 origin-left" style={{ backgroundColor: "rgba(201,169,110,0.6)" }} />
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1 }} className="font-sans font-bold text-3xl lg:text-[2.2rem] leading-snug uppercase mb-4" style={{ color: "rgba(245,242,237,0.95)" }}>
            Saúde, Harmonia,<br />Bem-Estar Global.
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.25 }} className="flex flex-wrap gap-2 mb-6">
            {["Mestre em Ciências da Saúde", "Doutoranda em Neurociências · UFMG"].map((cred) => (
              <span key={cred} className="font-sans text-[11px] font-medium px-3 py-1 rounded-full border tracking-wide" style={{ color: "rgba(201,169,110,0.9)", borderColor: "rgba(201,169,110,0.3)", backgroundColor: "rgba(201,169,110,0.08)" }}>
                {cred}
              </span>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.4 }} className="relative h-20 w-full max-w-md mb-8">
            <AnimatePresence mode="wait">
              <motion.p key={currentTextIndex} initial={{ opacity: 0, y: 8, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -8, filter: "blur(4px)" }} transition={{ duration: 1.2, ease: "easeInOut" }} className="absolute font-sans text-[15px] leading-relaxed" style={{ color: "rgba(245,242,237,0.7)" }}>
                {heroTexts[currentTextIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.55 }} className="relative inline-block mb-8">
            <motion.div animate={{ scale: [1, 1.14], opacity: [0.45, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} className="absolute inset-0 pointer-events-none rounded-sm" style={{ backgroundColor: "#c9a96e" }} />
            <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative flex items-center justify-center px-10 py-[11px] font-sans text-xs tracking-[0.2em] uppercase font-bold shadow-lg" style={{ backgroundColor: "#c9a96e", color: "#1c2a10", borderRadius: "4px" }}>
              Agendar avaliação
            </motion.a>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.7 }} className="font-sans text-[11px] tracking-[0.25em] uppercase" style={{ color: "rgba(201,169,110,0.5)" }}>
            www.julianatorresatm.com.br
          </motion.p>
        </div>

        {/* DIREITA: foto */}
        <div className="relative w-1/2 flex items-end justify-start pointer-events-none select-none">
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} className="relative w-full h-[82vh] mt-auto mb-0 pt-16">
            <AnimatePresence mode="wait">
              <motion.div key={currentPhoto} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2, ease: "easeInOut" }} className="absolute inset-0">
                <Image src={draPhotos[currentPhoto]} alt="Dra. Juliana Torres" fill priority quality={100} className="object-contain object-bottom" sizes="50vw"
                  style={{ filter: "drop-shadow(0 0 40px rgba(30,55,15,0.7)) drop-shadow(0 20px 60px rgba(30,55,15,0.5))" }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ color: "rgba(245,242,237,0.35)" }}
        aria-label="Rolar para baixo"
      >
        <motion.svg
          width="24"
          height="38"
          viewBox="0 0 28 44"
          fill="none"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M14 2C14 2 20 10 20 22C20 30 17 36 14 42C11 36 8 30 8 22C8 10 14 2 14 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          <path d="M14 20L14 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 28L14 33L18 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
