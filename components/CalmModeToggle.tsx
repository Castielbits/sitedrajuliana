"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CalmModeToggle() {
  const [calmMode, setCalmMode] = useState(false);

  // Persist across sessions
  useEffect(() => {
    const stored = localStorage.getItem("calmMode") === "true";
    setCalmMode(stored);
    if (stored) document.body.classList.add("calm-mode");
  }, []);

  const toggle = () => {
    const next = !calmMode;
    setCalmMode(next);
    localStorage.setItem("calmMode", String(next));
    if (next) {
      document.body.classList.add("calm-mode");
    } else {
      document.body.classList.remove("calm-mode");
    }
  };

  return (
    <>
      {/* The Button */}
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label={calmMode ? "Desativar modo calmo" : "Ativar modo calmo"}
        title={calmMode ? "Desativar Modo Calmo" : "Ativar Modo Calmo"}
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white transition-colors duration-300"
        style={{
          backgroundColor: calmMode
            ? "var(--color-sage)"
            : "rgba(135,169,107,0.65)",
        }}
      >
        {/* Rotating Sun/Moon SVGs */}
        <AnimatePresence mode="wait" initial={false}>
          {calmMode ? (
            <motion.svg
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0 }}
              transition={{ duration: 0.3 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              initial={{ opacity: 0, rotate: 90, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0 }}
              transition={{ duration: 0.3 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
      
      {/* Cinematic Vignette Overlay that pulses slowly */}
      <AnimatePresence>
        {calmMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 bottom-0 pointer-events-none z-[40]"
            style={{
              background:
                "radial-gradient(circle at center, transparent 40%, rgba(20, 30, 20, 0.45) 110%)",
              mixBlendMode: "multiply",
            }}
          >
            {/* The breathing element */}
            <motion.div
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 50%, rgba(10, 20, 10, 0.3) 100%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
