"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: "physio",
    title: "Fisioterapia",
    body: "Realinhamento estrutural através da precisão manual",
    calmSection: false,
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="16" cy="8" r="4" />
        <path d="M8 28c0-4.418 3.582-8 8-8s8 3.582 8 8" />
        <path d="M4 18h6M22 18h6" />
        <path d="M7 18l2-4M25 18l-2-4" />
      </svg>
    ),
  },
  {
    id: "nlp",
    title: "PNL",
    body: "Reprogrammação das respostas à dor na sua origem neurológica",
    calmSection: true,
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="10" />
        <path d="M16 6v2M16 24v2M6 16h2M24 16h2" />
        <circle cx="16" cy="16" r="4" />
        <path d="M12 12l-4-4M20 20l4 4M20 12l4-4M12 20l-4 4" />
      </svg>
    ),
  },
  {
    id: "meditation",
    title: "Meditação",
    body: "Restaurando o equilíbrio natural do sistema nervoso",
    calmSection: true,
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 4C16 4 8 12 8 20a8 8 0 0 0 16 0c0-8-8-16-8-16z" />
        <path d="M16 14v8" />
        <path d="M12 18h8" />
      </svg>
    ),
  },
  {
    id: "acupuncture",
    title: "Acupuntura",
    body: "Caminhos ancestrais, ciência moderna da dor",
    calmSection: false,
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="16" y1="4" x2="16" y2="28" />
        <line x1="10" y1="6" x2="22" y2="6" />
        <path d="M13 12c0 0 3 2 3 5s-3 5-3 5" opacity="0.5" />
        <path d="M19 12c0 0-3 2-3 5s3 5 3 5" opacity="0.5" />
        <circle cx="16" cy="6" r="2" />
      </svg>
    ),
  },
];

export default function RootCause() {
  return (
    <section
      id="root-cause"
      className="relative"
      style={{ backgroundColor: "var(--color-mist)" }}
      aria-label="Nossa abordagem multidisciplinar"
    >
      {/* Organic SVG wave separator (sand colored) */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", height: "80px", width: "100%" }}
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
            fill="var(--color-sand)"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ color: "var(--color-bark)" }}
          >
            A Causa Raiz
          </h2>
          <p
            className="font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(61,46,30,0.65)" }}
          >
            Ferramentas de desenvolvimento pessoal — terapia cognitivo comportamental, medicina tradicional chinesa, PNL e mais — trabalhando juntas para tratar a dor na raiz, não apenas nos sintomas.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 8px 32px rgba(135,169,107,0.15), 0 2px 8px rgba(0,0,0,0.06)",
              }}
              className={`group p-8 rounded-2xl border transition-all duration-500 ${
                card.calmSection ? "calm-section" : ""
              }`}
              style={{
                backgroundColor: "var(--color-sand)",
                borderColor: "rgba(135,169,107,0.2)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="mb-4 [&>svg]:transition-all [&>svg]:duration-700 group-hover:[&>svg]:fill-current"
                style={{ color: "var(--color-sage)" }}
              >
                {card.icon}
              </div>
              <h3
                className="font-serif text-xl mb-2"
                style={{ color: "var(--color-bark)" }}
              >
                {card.title}
              </h3>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "rgba(61,46,30,0.65)" }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
