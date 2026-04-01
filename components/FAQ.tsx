"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Como funciona o tratamento?",
    answer:
      "Como é de se esperar de um tratamento Premium, cada caso é único e o plano de tratamento seguirá as possibilidades e necessidades do paciente. Na avaliação inicial fazemos um mapeamento completo para entender a causa raiz do problema e, a partir disso, estruturamos um protocolo personalizado e integrado.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Diferentemente da fisioterapia convencional, o nosso tratamento traz impactos muito fortes a cada sessão, sendo o mais comum a frequência de 1 vez por semana — e não todos os dias. Na avaliação inicial definimos juntos a quantidade estimada de sessões de acordo com o seu caso.",
  },
  {
    question: "E se eu fizer a avaliação mas não puder pagar o tratamento proposto?",
    answer:
      "Você não pode se negar a oportunidade de ser avaliado e cuidado pela maior especialista no seu problema por causa deste receio. Mesmo que seu caso seja muito crônico, uma só sessão já te traz um benefício transformador. Veja nos depoimentos e terá essa confirmação. Não podemos te ajudar se você não vier nenhuma vez. Mas para os que chegam aqui, sempre existe uma solução.",
  },
  {
    question: "Vocês atendem por convênio?",
    answer:
      "Os convênios de saúde não permitem um atendimento tão individualizado e com a excelência que entregamos. Mas muitos permitem o reembolso e fornecemos toda a documentação necessária para tal. Somos muito flexíveis em nossas formas de pagamento.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-24 md:py-32 px-6" style={{ backgroundColor: "var(--color-mist)" }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-sans font-extrabold text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: "var(--color-sage)" }}
          >
            Dúvidas Frequentes
          </p>
          <h2
            className="font-serif italic text-4xl md:text-5xl leading-tight"
            style={{ color: "var(--color-bark)" }}
          >
            Perguntas frequentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border overflow-hidden"
                style={{
                  borderColor: isOpen ? "rgba(135,169,107,0.4)" : "rgba(61,46,30,0.1)",
                  backgroundColor: isOpen ? "var(--color-sand)" : "white",
                  transition: "border-color 0.3s, background-color 0.3s",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-serif text-lg md:text-xl leading-snug"
                    style={{ color: "var(--color-bark)" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor: isOpen ? "var(--color-sage)" : "rgba(135,169,107,0.12)",
                      color: isOpen ? "var(--color-sand)" : "var(--color-sage)",
                    }}
                  >
                    <motion.svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </motion.svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="px-6 pb-6 font-sans text-sm md:text-base leading-relaxed"
                        style={{ color: "rgba(61,46,30,0.72)" }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
