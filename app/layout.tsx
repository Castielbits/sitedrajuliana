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
  title: "Clínica Juliana Torres | Fisioterapia, DTM e Bruxismo",
  description:
    "Tratamento especializado em DTM, Bruxismo e Dor Crônica com abordagem holística: Meditação, PNL, Acupuntura e Fisioterapia.",
  openGraph: {
    title: "Clínica Juliana Torres",
    description:
      "Tratamento especializado em DTM, Bruxismo e Dor Crônica com abordagem holística.",
    url: "https://clinicajulianatorres.com",
    siteName: "Clínica Juliana Torres",
    locale: "pt_BR",
    type: "website",
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
