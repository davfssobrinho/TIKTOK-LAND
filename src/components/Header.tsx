import React, { useState, useEffect } from "react";
import { Sparkles, TrendingUp, Menu, X, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onCtaClick: () => void;
}

export default function Header({ onCtaClick }: HeaderProps) {
  const [spotsLeft, setSpotsLeft] = useState(42);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simulate seats filling up slowly to create urgency
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev <= 7) return prev;
        // Randomly decrease by 1 or 2
        const decrease = Math.random() > 0.7 ? 1 : 0;
        return prev - decrease;
      });
    }, 45000); // every 45 seconds

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#020617]/95 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-75 blur-xs animate-pulse"></div>
              <div className="relative bg-slate-950 px-2 py-1 rounded-lg flex items-center justify-center font-bold text-lg text-white">
                T
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white flex items-center">
              TikTok<span className="text-purple-400 font-medium">Shop</span>
              <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-500 text-white uppercase tracking-wider flex items-center gap-0.5 shadow-sm">
                <Sparkles className="w-2.5 h-2.5 text-white fill-white animate-spin-slow" />
                IA
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <button
              onClick={() => scrollToSection("problema")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              O Problema
            </button>
            <button
              onClick={() => scrollToSection("metodo")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              O Método
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("oferta")}
              className="hover:text-purple-300 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-4 h-4 text-purple-400" /> Ver Oferta
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Action Button & Spots Ticker */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-xs text-purple-300 font-mono bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              <span>Apenas {spotsLeft} vagas promocionais</span>
            </div>
            <button
              onClick={onCtaClick}
              className="relative px-6 py-2.5 rounded-full font-display text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(147,51,234,0.35)] cursor-pointer"
            >
              INSCREVER-SE AGORA
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <div className="text-[10px] text-purple-300 font-mono bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20 animate-pulse">
              {spotsLeft} Vagas
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#020617]/95 backdrop-blur-lg border-b border-white/5 py-5 px-4 shadow-2xl transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("problema")}
              className="text-left py-2 font-medium text-slate-400 hover:text-white border-b border-white/5 pb-2"
            >
              O Problema
            </button>
            <button
              onClick={() => scrollToSection("metodo")}
              className="text-left py-2 font-medium text-slate-400 hover:text-white border-b border-white/5 pb-2"
            >
              O Método
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-left py-2 font-medium text-slate-400 hover:text-white border-b border-white/5 pb-2"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("oferta")}
              className="text-left py-2 font-medium text-purple-300 hover:text-white border-b border-white/5 pb-2 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-purple-400" /> Ver Oferta
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left py-2 font-medium text-slate-400 hover:text-white"
            >
              FAQ
            </button>
            
            <div className="pt-4 flex flex-col space-y-3">
              <div className="flex items-center justify-center space-x-1.5 text-xs text-purple-300 font-mono bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping"></span>
                <span>Inscrição Promocional Segura</span>
              </div>
              <button
                onClick={onCtaClick}
                className="w-full text-center py-3 rounded-full font-display text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:scale-105 active:scale-95 transition-all"
              >
                COMEÇAR AGORA
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
