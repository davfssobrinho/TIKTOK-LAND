import React from "react";
import { Compass, Sparkles, UploadCloud, DollarSign, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Compass className="w-5 h-5 text-blue-400" />,
      title: "Escolha produtos inteligentes",
      desc: "Use nossa lista seleta de mineração para encontrar produtos de altíssima conversão e grande margem física no catálogo do TikTok Shop."
    },
    {
      number: "02",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: "Gere vídeos com IA",
      desc: "Copie nossos prompts para injetar no software. A IA gerará o roteiro magnético e montará o vídeo estético perfeito pronto para atrair cliques."
    },
    {
      number: "03",
      icon: <UploadCloud className="w-5 h-5 text-blue-400" />,
      title: "Publique estrategicamente",
      desc: "Publique usando os horários secretos de entrega rápida de tráfego do TikTok e marque o link oficial do produto no TikTok Shop."
    },
    {
      number: "04",
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      title: "Converta visualizações em comissão",
      desc: "Veja suas visualizações se transformarem em comissões em tempo real. O TikTok cuida do envio e do suporte, você só saca o lucro."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Background radial soft light */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
            PASSO A PASSO SIMPLIFICADO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-4">
            Como funciona a operação na prática?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            O fluxo completo foi encurtado para que você possa colocar no ar sua primeira máquina de comissões em menos de 24 horas.
          </p>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="relative">
          
          {/* Timeline Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                
                {/* Step card element */}
                <div className="bg-white/[0.03] border border-white/10 backdrop-blur-sm p-6 rounded-3xl hover:border-purple-500/50 transition-all duration-300 relative z-10 h-full flex flex-col justify-between">
                  
                  <div className="space-y-4">
                    {/* Circle timeline point */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <span className="font-display font-black text-2xl text-slate-700 font-mono tracking-tight group-hover:text-white transition-colors duration-300">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-white text-lg tracking-tight group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Desktop connector arrows */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-[52px] -right-[20px] z-20 text-slate-400 bg-slate-950 p-1 rounded-full border border-white/5 group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Short motivational callout */}
        <div className="text-center mt-16 text-xs text-slate-500 font-mono">
          <span>Sem necessidade de estoque • Sem aparecer • Comissões em dólar ou real</span>
        </div>

      </div>
    </section>
  );
}
