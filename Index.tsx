import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VideoSection from "@/components/sections/VideoSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        {/* HERO — must contain the ONLY H1 */}
        <section id="hero" aria-labelledby="hero-title">
          <HeroSection />
        </section>

        {/* ABOUT */}
        <section id="about" aria-labelledby="about-title">
          <AboutSection />
        </section>

        {/* VIDEO */}
        <section id="video" aria-labelledby="video-title">
          <VideoSection />
        </section>

        {/* PROCESS */}
        <section id="process" aria-labelledby="process-title">
          <ProcessSection />
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" aria-labelledby="testimonials-title">
          <TestimonialsSection />
        </section>

        {/* PRICING */}
        <section id="pricing" aria-labelledby="pricing-title">
          <PricingSection />
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-title">
          <FAQSection />
        </section>

        {/* CONTACT */}
        <section id="contact" aria-labelledby="contact-title">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
