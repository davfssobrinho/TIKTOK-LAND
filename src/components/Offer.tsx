import React, { useState, useEffect } from "react";
import { Check, ShieldCheck, Clock, Award, CreditCard, Sparkles, AlertCircle } from "lucide-react";

interface OfferProps {
  onCtaClick: () => void;
}

export default function Offer({ onCtaClick }: OfferProps) {
  const [timeLeft, setTimeLeft] = useState(894); // 14 mins and 54 secs

  // Simulating countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 894; // reset
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}m:${s.toString().padStart(2, "0")}s`;
  };

  const inclusions = [
    { title: "Curso Completo TikTok Shop AI", desc: "Todo o passo a passo da criação de canais dark até o saque das comissões." },
    { title: "Aulas Práticas Direto ao Ponto", desc: "Sem enrolação, focado em cliques práticos na tela e ferramentas gratuitas." },
    { title: "Estratégias de Viralização Atualizadas", desc: "Acesso direto aos ganchos e roteiros que enganam e conquistam o algoritmo." },
    { title: "Comunidade VIP & Suporte Dedicado", desc: "Espaço exclusivo para tirar dúvidas de mineração de produtos e prompts." }
  ];

  return (
    <section id="oferta" className="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Visual background ambient spotlights */}
      <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono mb-4 border border-purple-500/20 animate-pulse">
            <Clock className="w-3.5 h-3.5" />
            <span>OFERTA ESPECIAL DE LANÇAMENTO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Tenha acesso ao treinamento completo
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Abra a sua licença de aluno hoje mesmo e receba o método completo de TikTok Shop estruturado para faturar de forma automática com Inteligência Artificial.
          </p>
        </div>

        {/* Master Offer Card with grid */}
        <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 relative">
          
          {/* Top banner representing scarcity */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2.5 flex items-center justify-center gap-2 text-center">
            <span className="text-[10px] sm:text-xs font-mono font-black text-white tracking-widest uppercase flex items-center gap-1">
              ⚠️ PREÇO PROMOCIONAL VAI SUBIR EM: <span className="font-bold underline">{formatTime(timeLeft)}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            
            {/* Left side: Course Inclusions */}
            <div className="p-8 md:col-span-7 space-y-6">
              <h3 className="font-display font-black text-white text-lg sm:text-xl tracking-tight uppercase">
                O que você recebe ao entrar hoje:
              </h3>

              <div className="space-y-5">
                {inclusions.map((inc, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white text-sm sm:text-base">
                        {inc.title}
                      </h4>
                      <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                        {inc.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bonus tag */}
              <div className="p-3.5 bg-slate-950/40 rounded-xl border border-white/5 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-[11px] text-slate-300 leading-relaxed">
                  <strong className="text-white">SUPER BÔNUS:</strong> Planilha exclusiva de mineração com mais de 100 produtos físicos de alta conversão atualizada semanalmente.
                </span>
              </div>
            </div>

            {/* Right side: Pricing and Call to action */}
            <div className="p-8 md:col-span-5 bg-slate-950/20 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between text-center md:text-left relative">
              
              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Licença Vitalícia Individual
                </span>

                {/* Price anchor */}
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 line-through block leading-none">
                    De R$ 497,00
                  </span>
                  <div className="font-display text-xs text-blue-400 font-mono font-bold uppercase tracking-wider">
                    Por apenas 12x de
                  </div>
                  <div className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                    R$ 19,70
                  </div>
                  <span className="text-xs text-slate-400 block pt-1">
                    ou R$ 197,00 à vista (via Pix/Cartão)
                  </span>
                </div>
              </div>

              {/* Purchase button area with space prepared for custom link */}
              <div className="mt-8 space-y-4">
                <button
                  onClick={onCtaClick}
                  className="w-full py-4 rounded-xl font-display font-black text-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-transform hover:scale-[1.01] text-center uppercase"
                >
                  LIBERAR MEU ACESSO
                </button>

                <p className="text-[10px] text-slate-500 leading-normal text-center">
                  Garantia incondicional de 7 dias incluída. Se você não gostar do método, devolvemos seu dinheiro na hora.
                </p>

                {/* Trust and safety logos */}
                <div className="flex justify-center items-center gap-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1 text-[9px] text-slate-500 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> SSL Protegido
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-slate-500 font-mono">
                    <Award className="w-3.5 h-3.5 text-purple-400" /> Nota 4.9/5
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
