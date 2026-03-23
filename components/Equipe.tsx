import Image from "next/image";

export default function Equipe() {
  const team = [
    {
      role: "Psicologia",
      image: "/equipe/psicologia.png"
    },
    {
      role: "Terapia de Casal",
      image: "/equipe/terapia de casal.png"
    },
    {
      role: "Nutrição",
      image: "/equipe/nutricao.png"
    },
    {
      role: "Acupuntura",
      image: "/equipe/aculpuntura.png"
    }
  ];

  return (
    <section className="relative w-full bg-[#12363b] py-24 md:py-32 overflow-hidden">
      
      {/* 1. Efeito de Ruído/Textura de Granulação Premium (Noise Texture) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay z-0"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
        }}
      />

      {/* 2. Logo / Mandala Opaca como Marca d'água no Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] md:w-[80vw] max-w-[1200px] aspect-square pointer-events-none z-0 opacity-[0.04] mix-blend-screen flex items-center justify-center">
         <Image 
            src="/logo-transparent.png" 
            alt="Mandala Background" 
            fill 
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            unoptimized
         />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16 md:mb-20">
          <h3 className="text-[#89b1b5] font-sans font-bold text-sm md:text-base mb-4 uppercase tracking-[0.2em] drop-shadow-sm">
            Uma equipe
          </h3>
          <h2 className="text-sand font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mx-auto italic drop-shadow-md">
            de Experts para você
          </h2>
          <p className="text-white/80 font-sans mt-6 max-w-2xl mx-auto text-[15px] md:text-lg leading-relaxed">
            Exigência da máxima qualidade resultou em uma equipe de especialistas inigualável focada em tratamento integrado e multidisciplinar, que sempre encontra em conjunto a causa do problema para tratar na raiz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <div 
              key={i} 
              className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.3)] border border-white/5 block bg-[#0b2427]"
            >
              {/* Image with zoom on hover */}
              <div className="absolute inset-0 transition-transform duration-[800ms] group-hover:scale-110">
                <Image
                  src={member.image}
                  alt={member.role}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              
              {/* Elegant dark gradient over the bottom */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[rgba(15,35,40,0.95)] via-[rgba(15,35,40,0.4)] to-transparent pointer-events-none" />
              
              {/* Text overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-white font-serif italic text-2xl md:text-3xl font-medium tracking-wide drop-shadow-lg">
                  {member.role}
                </h4>
                {/* Thin elegant gold/sand line that expands on hover */}
                <div className="w-8 h-[2px] bg-[#89b1b5] mt-4 opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-700 ease-out shadow-[0_0_8px_rgba(137,177,181,0.5)]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
