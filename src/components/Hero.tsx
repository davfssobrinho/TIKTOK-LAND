import React, { useState, useEffect } from "react";
import { Sparkles, Play, Shield, Users, ArrowRight, Video, ShoppingCart, Cpu, ChevronRight, TrendingUp } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  // Simulator steps for the interactive AI screen on the right
  const [activeStep, setActiveStep] = useState(0);
  const [viewsCount, setViewsCount] = useState(1250);
  const [commissions, setCommissions] = useState(0);
  const [promptText, setPromptText] = useState("");

  const steps = [
    { title: "1. Escolher Produto", desc: "Varredura automática por itens com comissões de até 35% no TikTok Shop" },
    { title: "2. Gerar Roteiro & Voz", desc: "IA redige ganchos hipnóticos e gera voz neural realista" },
    { title: "3. Renderizar Clipe", desc: "Montagem de cenas de alta qualidade sem precisar mostrar seu rosto" },
    { title: "4. Escalar Viral", desc: "Envio em múltiplos canais para alcançar o público comprador no algoritmo" }
  ];

  // Typing effect simulation
  useEffect(() => {
    let currentText = "";
    const promptPhrases = [
      "Crie um gancho altamente persuasivo sobre o Mini Projetor Portátil focado no público gamer e cinéfilo...",
      "Gere um vídeo do tipo Unboxing Estético usando cenas em 4k sem aparecer o rosto...",
      "Crie uma narração emocional em português destacando a oferta por tempo limitado no TikTok Shop..."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let typingInterval: NodeJS.Timeout;

    const runTyping = () => {
      currentText = "";
      charIndex = 0;
      const targetPhrase = promptPhrases[phraseIndex];

      typingInterval = setInterval(() => {
        if (charIndex < targetPhrase.length) {
          currentText += targetPhrase[charIndex];
          setPromptText(currentText);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          // Wait and move to next phrase
          setTimeout(() => {
            phraseIndex = (phraseIndex + 1) % promptPhrases.length;
            runTyping();
          }, 3000);
        }
      }, 35);
    };

    runTyping();

    return () => clearInterval(typingInterval);
  }, []);

  // Simulator flow loop
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4500);

    return () => clearInterval(stepInterval);
  }, []);

  // Views & commissions counting simulation
  useEffect(() => {
    const viewsInterval = setInterval(() => {
      setViewsCount((prev) => {
        const increment = Math.floor(Math.random() * 45) + 5;
        const newViews = prev + increment;
        
        // Simulating commission conversions based on views
        if (Math.random() > 0.85) {
          setCommissions((cPrev) => cPrev + Math.floor(Math.random() * 30) + 12);
        }
        return newViews;
      });
    }, 1500);

    return () => {
      clearInterval(viewsInterval);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#020617] overflow-hidden select-none">
      {/* Background Atmosphere */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Extremely Strong Persuasive Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">MÉTODO EXCLUSIVO 2026</span>
              <span className="text-xs text-blue-400 font-bold">•</span>
              <span className="text-xs text-blue-300 font-mono font-bold animate-pulse">VAGAS LIMITADAS</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent">
              Converta IA em uma <span className="text-emerald-400 italic">Máquina</span> de Vendas no TikTok Shop.
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
              Domine o algoritmo. Crie vídeos virais sem aparecer e construa uma operação lucrativa no TikTok Shop usando automação de ponta.
            </p>

            {/* Micro proof badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-white/5 py-5">
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-mono block uppercase tracking-wider">100% Sem Rosto</span>
                <span className="text-sm font-semibold text-slate-200">Não precisa aparecer</span>
              </div>
              <div className="space-y-1 border-l border-white/5 pl-4">
                <span className="text-xs text-slate-500 font-mono block uppercase tracking-wider">Tempo Recomendado</span>
                <span className="text-sm font-semibold text-slate-200">30 min por dia</span>
              </div>
              <div className="space-y-1 border-l border-white/5 pl-4 col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-500 font-mono block uppercase tracking-wider">Garantia Absoluta</span>
                <span className="text-sm font-semibold text-slate-200">7 dias de reembolso</span>
              </div>
            </div>

            {/* Large Call-To-Action Button with link spacing */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
              <button
                onClick={onCtaClick}
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold text-lg text-white shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer text-center"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 px-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">JD</div>
                  <div className="w-8 h-8 rounded-full border border-slate-900 bg-purple-700 flex items-center justify-center text-[10px] font-bold text-white">MA</div>
                  <div className="w-8 h-8 rounded-full border border-slate-900 bg-blue-700 flex items-center justify-center text-[10px] font-bold text-white">PH</div>
                </div>
                <div className="text-xs text-slate-400">
                  <strong className="text-white">+1,240</strong> alunos lucrando hoje
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-xs text-slate-500 pt-2">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Suporte Completo na Comunidade</span>
              </div>
            </div>
          </div>

          {/* Right Side: High-Tech Custom Simulated AI Sales Dashboard Mockup */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Ambient neon backdrop light behind the computer card */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-20 blur-xl pointer-events-none" />
            
            {/* The Main Simulated Tech Dashboard Container */}
            <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Header with macOS style window dots */}
              <div className="bg-slate-950/80 border-b border-white/5 px-4 py-3 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 bg-white/[0.02] px-3 py-0.5 rounded-full border border-white/5">
                  tt-shop-ai-engine.io
                </div>
                <div className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>

              {/* Main Content inside simulated screen */}
              <div className="p-5 space-y-4">
                
                {/* Simulated AI Video Generator Box */}
                <div className="bg-slate-950/55 rounded-2xl p-4 border border-white/5 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-purple-400">
                      <Cpu className="w-3.5 h-3.5" /> IA Ativa
                    </span>
                    <span>Modo Piloto Automático</span>
                  </div>
                  
                  {/* Prompt Typing simulation box */}
                  <div className="bg-slate-950 text-[11px] font-mono p-2.5 rounded-lg border border-white/5 text-slate-300 h-14 overflow-hidden relative">
                    <span className="text-blue-400">&gt; </span>
                    {promptText}
                    <span className="animate-pulse bg-white w-1.5 h-3.5 inline-block align-middle ml-0.5" />
                  </div>

                  {/* Rendering simulation progress */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                    <div className="bg-slate-950/40 p-2 rounded-lg border border-white/5 flex items-center justify-between">
                      <span className="text-slate-500">Narração Voz Neural:</span>
                      <span className="text-emerald-400 font-bold">100% OK</span>
                    </div>
                    <div className="bg-slate-950/40 p-2 rounded-lg border border-white/5 flex items-center justify-between">
                      <span className="text-slate-500">Imagens do Produto:</span>
                      <span className="text-emerald-400 font-bold">Geradas</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Live Statistics */}
                <div className="bg-slate-950/75 rounded-2xl p-4 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 blur-lg pointer-events-none" />
                  
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                        <ShoppingCart className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 block uppercase leading-none">Canal de Venda</span>
                        <span className="text-xs font-bold text-slate-200 block">Afiliação TikTok Shop</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase leading-none">Status da Conta</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-bold inline-block mt-0.5">
                        ATIVA
                      </span>
                    </div>
                  </div>

                  {/* Live counting numbers */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 font-mono block">VISUALIZAÇÕES ORGANICAS</span>
                      <span className="text-lg font-mono font-bold text-white tracking-tight">
                        {viewsCount.toLocaleString()}
                      </span>
                    </div>
                    <div className="space-y-1 border-l border-white/5 pl-4">
                      <span className="text-[10px] text-slate-500 font-mono block">COMISSÕES ACUMULADAS</span>
                      <span className="text-lg font-mono font-bold text-emerald-400 tracking-tight">
                        R$ {commissions.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline / Method Pipeline tracker (clickable/visual) */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 font-mono block uppercase">Status da Pipeline do Método:</span>
                  <div className="grid grid-cols-4 gap-1.5">
                    {steps.map((s, idx) => (
                      <div
                        key={idx}
                        className={`p-1.5 rounded-lg text-center transition-all duration-300 ${
                          activeStep === idx
                            ? "bg-purple-500/20 border border-purple-500/40"
                            : "bg-slate-950/30 border border-white/5 opacity-40"
                        }`}
                      >
                        <div className="text-[9px] font-mono font-bold text-white">Passo {idx + 1}</div>
                        <div className="text-[7px] text-slate-400 mt-0.5 truncate">{idx === 0 ? "Escolha" : idx === 1 ? "Roteiro" : idx === 2 ? "Render" : "Escala"}</div>
                      </div>
                    ))}
                  </div>
                  {/* Dynamic description of the active step */}
                  <p className="text-[10px] text-slate-400 text-center italic min-h-[25px] flex items-center justify-center">
                    "{steps[activeStep].desc}"
                  </p>
                </div>

              </div>
            </div>

            {/* floating badges */}
            <div className="absolute -top-4 -left-6 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl p-3 shadow-lg flex items-center gap-2.5 animate-bounce-slow">
              <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] text-slate-500 block uppercase">Vídeos Gerados hoje</span>
                <span className="text-xs font-bold text-white font-mono">14 Vídeos</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl p-3 shadow-lg flex items-center gap-2.5 animate-bounce-slow-delayed">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] text-slate-500 block uppercase">ROI de Anúncio</span>
                <span className="text-xs font-bold text-white font-mono">R$ 0,00 (100% Orgânico)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
