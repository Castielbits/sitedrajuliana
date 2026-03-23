import Image from "next/image";

export default function Local() {
  return (
    <section className="bg-[#936d39] text-[#f5f2ed] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 items-center lg:items-start">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start w-full lg:pt-8">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-sans tracking-[0.25em] mb-12 font-light leading-snug text-[#f3e6c8] w-full text-center lg:text-left pl-0 lg:pl-[10%]">
            SEMPRE<br />PERTO
          </h2>
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:pl-[5%]">
            <p className="text-lg md:text-[1.35rem] font-serif leading-relaxed text-center">
              Com nosso Programa de<br/>
              Tratamento Exclusivo,<br/>
              você tem todo o nosso suporte<br/>
              para alcançar a transformação<br/>
              e o bem-estar que tanto<br/>
              procura. Nossa atenção à<br/>
              distância é inigualável. A<br/>
              presencial também.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full max-w-2xl flex flex-col items-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/local.png"
                alt="Edifício Parque Avenida"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <iframe 
                src="https://maps.google.com/maps?q=Av.%20Raja%20Gab%C3%A1glia,%202000%20-%20Estoril,%20Belo%20Horizonte&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'contrast(1.1) opacity(0.9) grayscale(0.2)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          
          <div className="text-[13px] md:text-sm font-sans leading-relaxed text-right text-white/95 max-w-lg">
            <p className="mb-4">
              Parque Avenida. Muito perto se você está no Belvedere, Vila<br className="hidden md:block" />
              da Serra, Vale do Sereno, Buritis, Luxemburgo, Estoril,<br className="hidden md:block" />
              Gutierrez, zona sul de Belo Horizonte. Mas se estiver mais<br className="hidden md:block" />
              longe, venha com vontade de aproveitar tudo. Desde a nossa<br className="hidden md:block" />
              entrada.
            </p>
            <p className="font-semibold text-white/90">
              Av. Raja Gabáglia, 2000 - sala 936 Torre 2 - Estoril, Belo Horizonte - MG, 30494-170
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
