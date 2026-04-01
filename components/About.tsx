"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const AcademicCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
);

const ProfessionalIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 overflow-hidden bg-sand"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left: Text Column */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-start text-left z-20 relative pt-10 pb-20 lg:py-10"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span 
            className="text-bark/60 font-sans text-sm md:text-base tracking-widest font-semibold uppercase mb-4"
            aria-hidden="true"
          >
            Dra. Juliana Torres - Fisioterapia Integrativa
          </span>
          
          <h2 
            id="about-title"
            className="font-serif text-4xl md:text-5xl lg:text-7xl text-sage mb-8 leading-[1.1] max-w-2xl"
          >
            Uma jornada de<br />cuidado e excelência
          </h2>
          
          <p className="text-bark/85 font-sans leading-relaxed text-base md:text-[17px] mb-12 max-w-xl">
            Desde cedo, percebi minha vocação para cuidar das pessoas. Ao longo dos anos, essa paixão se transformou em uma sólida carreira dedicada à saúde integral, marcada por excelência técnica e atenção humanizada, garantindo um cuidado especializado e acolhedor a cada paciente.
          </p>

          <div className="space-y-10 w-full max-w-xl">
            {/* Formação acadêmica */}
            <div className="flex flex-col sm:flex-row items-start gap-5 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full border border-sage/40 flex items-center justify-center text-sage bg-sage/5 relative transition-colors duration-500 group-hover:bg-sage/20">
                {/* little decorative rings to match the reference */}
                <div className="absolute inset-2 border border-sage/20 rounded-full" />
                <AcademicCapIcon className="w-8 h-8 relative z-10 transition-colors duration-500 group-hover:fill-current" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-sage mb-4 font-bold">Formação acadêmica</h3>
                <ul className="space-y-4 text-sm md:text-base text-bark/80">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full border-2 border-sage mt-1.5 flex-shrink-0" />
                    <span>Graduação em Fisioterapia pela Universidade Estadual do Sudoeste da Bahia (UESB) - Conclusão em 2011.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full border-2 border-sage mt-1.5 flex-shrink-0" />
                    <span>Residência/Especialização em DTM e Bruxismo pelo Hospital Juliano Moreira (SESAB) - Conclusão em 2017.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full border-2 border-sage mt-1.5 flex-shrink-0" />
                    <span>Doutoranda em Neurociências pela UFMG.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full border-2 border-sage mt-1.5 flex-shrink-0" />
                    <span>Credenciada em Neuromodulação não invasiva.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Atuação Profissional */}
            <div className="flex flex-col sm:flex-row items-start gap-5 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full border border-sage/40 flex items-center justify-center text-sage bg-sage/5 relative transition-colors duration-500 group-hover:bg-sage/20">
                <div className="absolute inset-2 border border-sage/20 rounded-full" />
                <ProfessionalIcon className="w-8 h-8 relative z-10 transition-colors duration-500 group-hover:fill-current" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-sage mb-4 font-bold">Atuação Profissional</h3>
                <ul className="space-y-4 text-sm md:text-base text-bark/80">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full border-2 border-sage mt-1.5 flex-shrink-0" />
                    <span>Fisioterapeuta em consultório especializado, com atendimentos presenciais e online focados em dor crônica.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full border-2 border-sage mt-1.5 flex-shrink-0" />
                    <span>Coordenadora Técnica em serviço de internação focado em reabilitação física e integrativa.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full border-2 border-sage mt-1.5 flex-shrink-0" />
                    <span>Preceptoria de cursos de especialização, contribuindo para a formação de novos profissionais.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right: Absolute Image overlaying the right side */}
        <div className="lg:absolute right-0 top-0 bottom-0 w-full lg:w-[50%] h-[600px] lg:h-full z-0 overflow-hidden pointer-events-none mt-10 lg:mt-0">
          <div className="w-full h-full relative">
            {/* Soft fade masks over the image: Linear gradients simulating the blend effect */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-sand via-sand/50 to-transparent w-[40%] lg:w-[45%] left-0" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-sand via-sand/50 to-transparent h-[20%] lg:h-[30%] bottom-0 mt-auto" />
            
            <Image
              src="/sobre-mim.png"
              alt="Retrato da Dra. Juliana Torres em seu consultório"
              fill
              className="object-cover object-center lg:object-[center_10%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
