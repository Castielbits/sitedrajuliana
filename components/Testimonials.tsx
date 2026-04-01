"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Junia Costa de Miranda",
      initial: "J",
      bgColor: "bg-[#c0392b]",
      text: "Toda a equipe é especial! Muito profissionais, educadas, atenciosas! Fiz o programa para tratar o bruxismo e foi maravilhoso!!! A clínica é linda, aconchegante e sempre tem um chá delicioso. Super recomendo o tratamento com a Juliana Torres! Estou muuuuuito satisfeita!!!"
    },
    {
      name: "Ana Kelly Carvalho Melo",
      initial: "A",
      bgColor: "bg-[#3f51b5]",
      text: "Juliana é excepcional. A conheci depois de passar anos convivendo com dores diárias, principalmente na cabeça, ombros e mandíbula, e recorrendo quase todos os dias ao ibuprofeno. Após iniciar o tratamento com ela, redescobri uma vida sem dores, muito mais leve e equilibrada. Os resultados foram simplesmente incríveis."
    },
    {
      name: "Fernanda Quinan",
      initial: "F",
      bgColor: "bg-[#009688]",
      text: "Dra Juliana e equipe são maravilhosos! São muito competentes, minhas dores de cabeça e do meu filho melhoram demais com as idas à clínica!"
    },
    {
      name: "Iara Morais",
      initial: "I",
      bgColor: "bg-[#7b1fa2]",
      text: "Estou fazendo o protocolo com a Ju e ela é incrível, super atenciosa! Tem me ajudado bastante com as tensões cervicais, bruxismo, zumbido!"
    },
    {
      name: "Jorge Luiz B. Danielian",
      initial: "J",
      bgColor: "bg-[#1565c0]",
      text: "Muito satisfeito, competência, dedicação e profissionalismo fantásticos. Meu bruxismo melhorou 99%, infelizmente não tem cura."
    },
    {
      name: "Isadora Azevedo",
      initial: "I",
      bgColor: "bg-[#2e7d32]",
      text: "Fiz 5 sessões para meu bruxismo e não poderia estar mais satisfeita! O ambiente é muito agradável, toda a equipe muito atenciosa e gentil; isso tudo além do principal que é o tratamento com a Juliana, que é uma profissional muito dedicada."
    },
    {
      name: "Alice Casali",
      initial: "A",
      bgColor: "bg-[#e65100]",
      text: "Conheci a Juliana por indicação da minha otorrinolaringologista. Meu quadro era de zumbido somatossensorial, cervicalgia e dor e rigidez na ATM. O acolhimento que tive foi o primeiro passo para compreender que eu poderia melhorar muito."
    },
    {
      name: "Cláudia Lima",
      initial: "C",
      bgColor: "bg-[#00695c]",
      text: "Preciso expressar a minha imensa gratidão pelo diagnóstico correto, tratamento eficaz e acolhimento humano, para o meu caso de capsulite adesiva. Feliz que me livrei dos remédios e agora posso sorrir e me expressar como mereço."
    },
    {
      name: "Carlos Ribeiro",
      initial: "C",
      bgColor: "bg-[#4527a0]",
      text: "Por 30 anos tive dores de cabeça e me acostumei. Essas dores passaram para a face e a clínica foi fundamental para mudar essa realidade. Uma experiência transformadora."
    },
    {
      name: "Lucas Wilson",
      initial: "L",
      bgColor: "bg-[#558b2f]",
      text: "Cheguei à clínica por intermédio da Dra. Luciana Porto após uma cirurgia e deslocamento de mandíbula. O atendimento foi excepcional e a recuperação muito além do esperado."
    },
  ];

  return (
    <section className="relative w-full bg-[#f1f2f0] py-24 md:py-32 overflow-hidden">
      
      {/* Background SVG abstract shape */}
      <svg 
        className="absolute left-[-15%] top-[-5%] w-[100vw] md:w-[700px] h-auto text-black/[0.03] z-0 pointer-events-none" 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg" 
        style={{ fill: "currentColor" }}
      >
        <path d="M42.7,-73.4C55.6,-67.2,66.4,-55.4,75.1,-41.8C83.8,-28.1,90.4,-12.6,89.5,2.6C88.6,17.9,80.1,32.8,70.1,45.4C60.2,57.9,48.7,68.1,35.3,75.3C21.9,82.6,6.5,86.9,-8.5,85.6C-23.4,84.4,-38,77.7,-51.1,68.6C-64.2,59.5,-75.8,48,-82.7,34.1C-89.6,20.2,-91.8,3.9,-88,-11.1C-84.3,-26,-74.6,-39.7,-62.4,-49.6C-50.2,-59.5,-35.4,-65.7,-21.8,-70.5C-8.1,-75.4,4.5,-79,16.7,-78.9C28.8,-78.7,29.8,-79.5,42.7,-73.4Z" transform="translate(100 100)" />
      </svg>
      <svg 
        className="absolute right-[-15%] bottom-[-5%] w-[100vw] md:w-[700px] h-auto text-black/[0.03] z-0 pointer-events-none" 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg" 
        style={{ fill: "currentColor" }}
      >
        <path d="M37,-67.2C49.9,-58.5,63.5,-51.2,73.5,-40.1C83.5,-29,89.8,-14.5,89.8,-0.1C89.7,14.4,83.2,28.8,72.9,39.9C62.6,51,48.5,58.8,34.4,65.3C20.4,71.9,6.3,77.3,-7.4,75.9C-21.2,74.5,-34.5,66.3,-47.1,57.1C-59.6,48,-71.4,37.8,-79.1,24.6C-86.8,11.3,-90.4,-5,-86.3,-19.4C-82.1,-33.8,-70.3,-46.3,-56.9,-54.6C-43.5,-63,-28.5,-67.2,-14.6,-72C-0.8,-76.8,11.9,-82.1,24.1,-80.6C36.3,-79.2,24,-75.8,37,-67.2Z" transform="translate(100 100)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 mt-4 w-full">
          <h3 className="text-[#3c787e] font-sans font-extrabold text-sm md:text-base mb-6 uppercase tracking-[0.2em]">
             Depoimentos
          </h3>
          <h2 className="text-[#1e5258] font-serif text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] max-w-4xl mx-auto italic">
             Palavras de quem já conhece o cuidado da Dra. Juliana
          </h2>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-center gap-16 lg:gap-12 relative">
          
          {/* Left: Overall Google Rating */}
          <div className="flex flex-col items-center justify-center shrink-0 w-full lg:w-[280px]">
            <span className="font-bold font-sans text-xl md:text-2xl mb-2 text-bark">EXCELENTE</span>
            <div className="flex gap-1 mb-2 text-[#FBBC04]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="font-sans text-xs md:text-sm text-bark/80 mb-4">
              Com base em <strong>+40 avaliações</strong>
            </p>
            {/* Google Logo text style */}
            <div className="flex items-center">
              <span className="text-3xl font-sans font-bold tracking-tighter">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </div>
          </div>

          {/* Right: Scrolling Cards */}
          <div className="w-full lg:w-[calc(100%-320px)] overflow-x-auto pb-8 flex gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {reviews.map((review, i) => (
               <div key={i} className="shrink-0 w-[300px] md:w-[340px] bg-white rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.04)] p-8 flex flex-col snap-center">
                 <div className="flex items-center justify-between mb-5">
                   <div className="flex items-center gap-4">
                     <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.bgColor}`}>
                       {review.initial}
                     </div>
                     <span className="font-bold text-sm md:text-base text-bark">{review.name}</span>
                   </div>
                   {/* Small G icon */}
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                   </svg>
                 </div>
                 
                 <div className="flex items-center gap-1 mb-4 text-[#FBBC04]">
                    {[1,2,3,4,5].map(s => (
                       <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                       </svg>
                    ))}
                    {/* Blue checkmark circle */}
                    <svg className="w-[18px] h-[18px] ml-2 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                       <circle cx="12" cy="12" r="10"></circle>
                       <path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"></path>
                    </svg>
                 </div>
                 
                 <p className="text-sm md:text-[15px] text-bark/90 leading-relaxed font-sans">
                   "{review.text}"
                 </p>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
