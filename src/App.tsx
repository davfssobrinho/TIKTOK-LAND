import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Transformation from "./components/Transformation";
import Offer from "./components/Offer";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { Sparkles, ShoppingBag, ArrowUp } from "lucide-react";

// URL DE VENDAS EXTERNA (Hotmart, Kiwify, Braip, Monetizze, etc.)
// Substitua o link abaixo pelo seu link de afiliado ou link de checkout oficial!
const SALES_LINK = "https://pay.kiwify.com.br/u7MMx4B?afid=CXxFjqGj";

export default function App() {
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  const handleOpenCheckout = () => {
    // Redireciona o usuário diretamente na mesma janela para garantir 100% de compatibilidade
    // com navegadores integrados de redes sociais (TikTok, Instagram, Facebook), evitando bloqueio de popups e perdas de cookies.
    window.location.href = SALES_LINK;
  };

  const handleCloseCheckout = () => {
    // Mantido por compatibilidade de estado simples
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA bar when scrolled down 600px
      setShowFloatingBar(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 font-sans antialiased selection:bg-purple-500/30 selection:text-slate-100">
      {/* Premium background radial light anchors - Optimized for mobile GPUs with transform-gpu and scale limits */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 transform-gpu">
        <div className="absolute top-[10%] left-[-20%] w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] bg-purple-600/3 blur-[80px] sm:blur-[140px] rounded-full transform-gpu" />
        <div className="absolute bottom-[10%] right-[-20%] w-[90vw] h-[90vw] sm:w-[60vw] sm:h-[60vw] bg-blue-600/3 blur-[90px] sm:blur-[150px] rounded-full transform-gpu" />
        <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] sm:w-[30vw] sm:h-[30vw] bg-emerald-500/2 blur-[80px] sm:blur-[130px] rounded-full transform-gpu" />
      </div>

      {/* Main Content Sections Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header onCtaClick={handleOpenCheckout} />

        {/* Hero Section */}
        <Hero onCtaClick={handleOpenCheckout} />

        {/* Problem Section */}
        <Problem />

        {/* Solution Section */}
        <Solution />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Benefits Section */}
        <Benefits />

        {/* Transformation Section */}
        <Transformation />

        {/* Special Offer Section */}
        <Offer onCtaClick={handleOpenCheckout} />

        {/* Social Proof / Testimonials */}
        <SocialProof />

        {/* FAQ Section */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Action/CRO Bar */}
      {showFloatingBar && (
        <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 z-40 max-w-sm w-full bg-[#020617]/95 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 animate-fade-in-up">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 animate-pulse border border-purple-500/10">
              <ShoppingBag className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 block uppercase leading-none">Oferta Limitada</span>
              <span className="text-xs font-bold text-white block mt-1">Apenas 12x R$ 19,70</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleOpenCheckout}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-display font-black text-[11px] tracking-wider rounded-full transition-all transform hover:scale-105 active:scale-95 text-center cursor-pointer uppercase shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              Garantir Vaga
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-slate-900 hover:bg-white/5 text-slate-400 hover:text-white rounded-xl border border-white/5 transition-colors cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
