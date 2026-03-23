import Image from "next/image";

export default function MentePlena() {
  return (
    <section className="relative w-full bg-[#f4f4f2] text-bark py-16 md:py-20 overflow-hidden z-20">
      
      {/* Opaque SVG shape in the background (Left Side) - Reduced opacity even further so it's extremely subtle */}
      <svg 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute left-[-20%] md:left-[-10%] top-[10%] w-[150vw] md:w-[800px] h-auto text-black/[0.02] z-0 pointer-events-none" 
        style={{ fill: "currentColor" }}
      >
        <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46C87.4,-33,90,-16.5,88.5,-0.9C87,14.8,81.4,29.6,73.4,42.7C65.4,55.8,55,67.1,42.1,74.3C29.2,81.5,14.6,84.6,-0.1,84.7C-14.8,84.8,-29.6,81.9,-42.6,74.7C-55.6,67.5,-66.8,56,-75.3,42.4C-83.8,28.8,-89.6,14.4,-90.1,-0.3C-90.6,-15,-85.8,-30,-77.3,-43.3C-68.8,-56.6,-56.6,-68.2,-42.6,-75.6C-28.6,-83,-14.3,-86.2,0.6,-87.3C15.5,-88.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center md:items-center gap-12 lg:gap-20">
        
        {/* LEFT COMPONENT: Photo with Mask to hide hard cutout */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div 
            className="relative w-[320px] md:w-[550px] lg:w-[650px] aspect-[4/5]"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
            }}
          >
            <Image 
              src="/fotodra2.png" 
              alt="Dra Juliana" 
              fill 
              className="object-contain object-bottom drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)]"
              priority
            />
          </div>
        </div>

        {/* RIGHT COMPONENT: Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-12">
          
          <div className="space-y-4">
            <h3 className="text-[#3c787e] font-sans font-bold text-sm tracking-widest uppercase mb-2">
              Mente Plena.
            </h3>
            <h2 className="font-serif text-[#1e5258] text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] italic">
              Cuidando de você, de dentro para fora.
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1e5258] flex items-center justify-center text-white shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#1e5258]">
                Diferenciais
              </h4>
            </div>

            <ul className="space-y-4 text-bark/80 font-sans text-sm md:text-base pr-4">
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#3c787e] mt-2 shrink-0 border border-[#1e5258]" />
                 <span>Experiência em atender pacientes de diferentes faixas etárias, principalmente adultos.</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#3c787e] mt-2 shrink-0 border border-[#1e5258]" />
                 <span>Abordagem humanizada, com explicações claras e cuidado em todas as etapas do tratamento.</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#3c787e] mt-2 shrink-0 border border-[#1e5258]" />
                 <span>Atualização constante e investimento em novas técnicas e tecnologias para oferecer o melhor aos pacientes.</span>
               </li>
            </ul>
          </div>

          <div className="space-y-4 pt-6">
            <p className="font-serif text-2xl md:text-3xl lg:text-[2rem] leading-snug text-[#1e5258] italic font-medium">
              &quot;Minha missão é oferecer um atendimento integrado que combine acolhimento e excelência técnica, ajudando cada paciente a encontrar o equilíbrio e a saúde que desejam.&quot;
            </p>
            <p className="text-bark/70 font-sans lg:text-lg">
              Dra. Juliana Torres
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
