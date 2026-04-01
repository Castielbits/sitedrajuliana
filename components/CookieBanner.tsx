"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] bg-[var(--color-bark)] text-[var(--color-sand)] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-[0_-4px_24px_rgba(0,0,0,0.15)]">
      <p className="text-sm font-sans leading-relaxed flex-1 text-[var(--color-sand)]/80">
        Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
        <Link href="/privacidade" className="underline underline-offset-2 hover:text-[var(--color-sand)] transition-colors">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={decline}
          className="px-5 py-2 text-xs font-sans font-medium border border-[var(--color-sand)]/30 rounded hover:border-[var(--color-sand)]/60 transition-colors"
        >
          Recusar
        </button>
        <button
          onClick={accept}
          className="px-5 py-2 text-xs font-sans font-bold rounded transition-colors"
          style={{ backgroundColor: "var(--color-sage)", color: "var(--color-sand)" }}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
