import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Juliana Torres | Especialista em Bruxismo, ATM e Dor Orofacial — Belo Horizonte",
  description:
    "Mais de 20 anos de excelência no tratamento de Bruxismo, DTM, dores crônicas, zumbido e tonturas. Doutoranda em Neurociências na UFMG. Agende sua avaliação em BH.",
  keywords: [
    "bruxismo", "ATM", "dor orofacial", "fisioterapia", "Belo Horizonte",
    "DTM", "dor crônica", "zumbido", "tonturas", "Juliana Torres", "neuromodulação",
  ],
  openGraph: {
    title: "Dra. Juliana Torres | Especialista em Bruxismo e ATM — BH",
    description:
      "Mais de 20 anos de excelência. Tratamento premium para Bruxismo, DTM, dores crônicas e zumbido em Belo Horizonte.",
    url: "https://www.julianatorresatm.com.br",
    siteName: "Clínica Juliana Torres",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/banner.png", width: 1200, height: 630, alt: "Clínica Juliana Torres" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Juliana Torres | Bruxismo e ATM — BH",
    description: "Especialista com mais de 20 anos. Agende sua avaliação.",
    images: ["/banner.png"],
  },
  alternates: {
    canonical: "https://www.julianatorresatm.com.br",
  },
};

import LoadingScreen from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${inter.variable}`}>
      <body>
        <LoadingScreen />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
