import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PremiumTreatment from "@/components/PremiumTreatment";
import About from "@/components/About";
import RootCause from "@/components/RootCause";
import Testimonials from "@/components/Testimonials";
import CalmModeToggle from "@/components/CalmModeToggle";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParallaxSection from "@/components/ParallaxSection";
import MentePlena from "@/components/MentePlena";
import ServicesSticky from "@/components/ServicesSticky";
import Equipe from "@/components/Equipe";
import VideoDicas from "@/components/VideoDicas";
import FAQ from "@/components/FAQ";
import Local from "@/components/Local";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-sand">
        <Hero />
        <PremiumTreatment />
        <About />
        <RootCause />
        <ParallaxSection />
        <MentePlena />
        <ServicesSticky />
        <Equipe />
        <Testimonials />
        <VideoDicas />
        <FAQ />

        {/* Contact CTA section */}
        <section
          id="contact"
          className="py-24 px-6 text-center"
          style={{ backgroundColor: "var(--color-mist)" }}
        >
          <div className="max-w-xl mx-auto">
            <h2
              className="font-serif text-4xl md:text-5xl mb-4"
              style={{ color: "var(--color-bark)" }}
            >
              Pronto para iniciar sua Transformação?
            </h2>
            <p
              className="font-sans text-base md:text-lg mb-8 leading-relaxed"
              style={{ color: "rgba(61,46,30,0.65)" }}
            >
              Agende uma avaliação e vamos descobrir juntos a causa raiz da sua dor.
            </p>
            <a
              href="https://wa.me/5531986877763"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 font-sans text-base font-medium transition-transform hover:scale-105"
              style={{
                backgroundColor: "var(--color-sage)",
                color: "var(--color-sand)",
                borderRadius: "9999px",
              }}
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </section>

        {/* Local Section */}
        <Local />

        {/* Footer */}
        <Footer />
      </main>
      <CalmModeToggle />
      <WhatsAppButton />
    </>
  );
}
