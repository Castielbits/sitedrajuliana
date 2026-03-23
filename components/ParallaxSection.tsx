"use client";

import { motion } from "framer-motion";

export default function ParallaxSection() {
  return (
    <section 
      className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-start bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/imagemsessao2.png')",
      }}
    >
      {/* Sombra dura UI simulando a borda da seção de cima */}
      <div className="absolute top-0 inset-x-0 h-[1px] shadow-[0_5px_20px_10px_rgba(0,0,0,0.6)] z-10 pointer-events-none bg-black/20" />
      
      {/* Sombra dura UI simulando a borda da seção de baixo */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] shadow-[0_-5px_20px_10px_rgba(0,0,0,0.6)] z-10 pointer-events-none bg-black/20" />

      {/* Vínheta / escurecimento sutil para as letras ficarem 100% legíveis */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(40,30,20,0.6) 0%, rgba(40,30,20,0.2) 60%, transparent 100%)"
        }}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="text-sand font-sans text-sm md:text-base font-bold tracking-wider drop-shadow-sm mb-3 block">
            Mente em Paz.
          </span>
          <h2 className="text-mist font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] drop-shadow-md">
            A conexão<br />
            entre saúde e<br />
            felicidade.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
