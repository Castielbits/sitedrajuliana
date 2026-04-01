import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Clínica Juliana Torres",
  description: "Política de privacidade e proteção de dados da Clínica Juliana Torres, em conformidade com a LGPD.",
};

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-[#f9f8f6] px-6 py-24">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-sans mb-10 hover:opacity-70 transition-opacity"
          style={{ color: "var(--color-sage)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Voltar ao site
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl mb-3" style={{ color: "var(--color-bark)" }}>
          Política de Privacidade
        </h1>
        <p className="font-sans text-sm mb-12" style={{ color: "rgba(61,46,30,0.5)" }}>
          Última atualização: abril de 2026
        </p>

        <div className="prose prose-neutral max-w-none font-sans text-base leading-relaxed space-y-8" style={{ color: "rgba(61,46,30,0.8)" }}>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "var(--color-bark)" }}>1. Quem somos</h2>
            <p>A <strong>Clínica Juliana Torres</strong>, localizada na Av. Raja Gabáglia, 2000, Sala 936, Torre 2 — Estoril, Belo Horizonte/MG, é responsável pelo tratamento dos dados pessoais coletados neste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "var(--color-bark)" }}>2. Dados que coletamos</h2>
            <p>Podemos coletar as seguintes informações quando você entra em contato conosco ou utiliza nossos serviços:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Nome completo</li>
              <li>Número de telefone / WhatsApp</li>
              <li>Endereço de e-mail</li>
              <li>Informações de saúde fornecidas voluntariamente durante o atendimento</li>
              <li>Dados de navegação (cookies e analytics, de forma anonimizada)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "var(--color-bark)" }}>3. Como usamos seus dados</h2>
            <p>Seus dados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Agendamento e confirmação de consultas</li>
              <li>Comunicação sobre tratamentos e orientações clínicas</li>
              <li>Envio de informações e conteúdos relacionados à sua saúde (apenas com seu consentimento)</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "var(--color-bark)" }}>4. Compartilhamento de dados</h2>
            <p>Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Seus dados podem ser compartilhados apenas com outros profissionais de saúde diretamente envolvidos no seu tratamento, sempre com sua ciência e consentimento.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "var(--color-bark)" }}>5. Armazenamento e segurança</h2>
            <p>Seus dados são armazenados em ambiente seguro e protegido. Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, perda ou destruição.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "var(--color-bark)" }}>6. Seus direitos (LGPD)</h2>
            <p>Nos termos da LGPD, você tem direito a:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Confirmar se tratamos seus dados pessoais</li>
              <li>Acessar os dados que temos sobre você</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p className="mt-3">Para exercer esses direitos, entre em contato pelo e-mail: <a href="mailto:contato@clinicajulianatorres.com.br" className="underline">contato@clinicajulianatorres.com.br</a></p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "var(--color-bark)" }}>7. Cookies</h2>
            <p>Este site pode utilizar cookies essenciais para funcionamento técnico e cookies analíticos anonimizados para melhoria da experiência. Você pode desativar cookies nas configurações do seu navegador a qualquer momento.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "var(--color-bark)" }}>8. Contato</h2>
            <p>Em caso de dúvidas sobre esta política, entre em contato:</p>
            <ul className="mt-3 space-y-1">
              <li><strong>E-mail:</strong> contato@clinicajulianatorres.com.br</li>
              <li><strong>Telefone:</strong> (31) 9868-7763</li>
              <li><strong>Endereço:</strong> Av. Raja Gabáglia, 2000, Sala 936 — Estoril, BH/MG</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}
