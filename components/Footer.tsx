import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bark)] pt-20 pb-10 px-6 md:px-12 lg:px-24 text-[var(--color-sand)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <div className="relative w-48 h-16 mb-6">
            <Image 
              src="/logo-transparent.png" 
              alt="Clínica Juliana Torres" 
              fill 
              className="object-contain object-left brightness-0 invert"
            />
          </div>
          <p className="text-sm text-[var(--color-sand)]/70 leading-relaxed max-w-xs mb-6">
            Excelência em fisioterapia, tratamento especializado em DTM, Bruxismo e reabilitação de alta performance. O ritmo natural da sua Transformação.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/julianatorres.atm/" target="_blank" rel="noopener noreferrer" className="p-2 border border-[var(--color-sand)]/20 rounded-full hover:bg-[var(--color-sand)]/10 hover:border-[var(--color-sand)]/40 transition-all duration-300">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-sand)]/90"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col">
          <h4 className="font-serif text-lg text-[#f3e6c8] mb-6 tracking-wide">Menu</h4>
          <ul className="flex flex-col gap-3 text-sm text-[var(--color-sand)]/70">
            <li><Link href="#about" className="hover:text-[var(--color-sand)] transition-colors">Sobre a Dra. Juliana</Link></li>
            <li><Link href="#root-cause" className="hover:text-[var(--color-sand)] transition-colors">Nossos Serviços</Link></li>
            <li><Link href="#testimonials" className="hover:text-[var(--color-sand)] transition-colors">Depoimentos</Link></li>
            <li><Link href="#membros" className="hover:text-[var(--color-sand)] transition-colors">A Equipe</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h4 className="font-serif text-lg text-[#f3e6c8] mb-6 tracking-wide">Contato</h4>
          <ul className="flex flex-col gap-4 text-sm text-[var(--color-sand)]/70">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-sage)]" />
              <a href="tel:+5531986877763" className="hover:text-[var(--color-sand)] transition-colors">(31) 9868-7763</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-sage)]" />
              <a href="mailto:contato@clinicajulianatorres.com.br" className="hover:text-[var(--color-sand)] transition-colors">contato@clinicajulianatorres.com.br</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-sage)]" />
              <span className="leading-snug">Av. Raja Gabáglia, 2000<br/>Sala 936, Torre 2 - Estoril<br/>Belo Horizonte - MG</span>
            </li>
          </ul>
        </div>

        {/* Horários */}
        <div className="flex flex-col">
          <h4 className="font-serif text-lg text-[#f3e6c8] mb-6 tracking-wide">Atendimento</h4>
          <ul className="flex flex-col gap-4 text-sm text-[var(--color-sand)]/70">
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-sage)]" />
              <div className="flex flex-col gap-1">
                <span><strong className="text-[var(--color-sand)]/90 font-medium">Segunda a Sexta:</strong><br/> 08:00 às 19:00</span>
                <span className="mt-2"><strong className="text-[var(--color-sand)]/90 font-medium">Sábados:</strong><br/> 08:00 às 12:00</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[var(--color-sand)]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--color-sand)]/40 font-sans">
        <p>© 2026 Clínica Juliana Torres. Todos os direitos reservados.</p>
        <Link href="/privacidade" className="hover:opacity-70 transition-opacity underline underline-offset-2">Política de Privacidade</Link>
      </div>
    </footer>
  );
}
