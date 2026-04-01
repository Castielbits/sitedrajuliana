"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const videos = [
  { id: "MDwhYTXlano", label: "01" },
  { id: "dITfF4aaOL0", label: "02" },
  { id: "bIkb0s_3Tnw", label: "03" },
];

export default function VideoDicas() {
  return (
    <section id="videos" className="relative w-full bg-[#12363b] py-24 md:py-32 overflow-hidden">

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Logo watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] md:w-[80vw] max-w-[1200px] aspect-square pointer-events-none z-0 opacity-[0.04] mix-blend-screen flex items-center justify-center">
        <Image
          src="/logo-transparent.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 80vw"
          unoptimized
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header — assimétrico para dar ritmo premium */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#89b1b5] mb-4">
              Conteúdo exclusivo
            </p>
            <h2 className="font-serif italic text-sand text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-lg drop-shadow-md">
              Aprenda com<br />quem cuida
            </h2>
          </motion.div>

          <motion.a
            href="https://www.youtube.com/@julianatorresatm/videos"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 font-sans text-sm font-medium px-6 py-3 border border-[#89b1b5]/50 text-[#89b1b5] rounded-full hover:bg-[#89b1b5]/10 transition-all self-start md:self-auto shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Ver canal no YouTube
          </motion.a>
        </div>

        {/* Video cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-white/5 bg-[#0b2427]"
              style={{ aspectRatio: "9/16" }}
            >
              {/* Number label */}
              <div className="absolute top-4 left-4 z-10 font-sans text-xs font-bold tracking-[0.2em] text-white/40 pointer-events-none select-none">
                {video.label}
              </div>

              {/* Inner border elegante */}
              <div className="absolute inset-3 border border-white/[0.07] rounded-xl pointer-events-none z-10" />

              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                title={`Dica ${video.label} — Dra. Juliana Torres`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </motion.div>
          ))}
        </div>

        {/* Linha decorativa inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-[#89b1b5]/30 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
