import React from "react";
import { XCircle, CheckCircle2, TrendingDown, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react";

export default function Transformation() {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Decorative center backdrop spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
            ANÁLISE DE IMPACTO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-4">
            A diferença entre tentar sozinho e aplicar o método
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            O mercado digital se divide em dois tipos de pessoas: os que produzem conteúdo de forma manual e sofrida, e os que usam inteligência artificial para escalar.
          </p>
        </div>

        {/* Visual Columns Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Column 1: ANTES (Red-Tinted Manual Pain) */}
          <div className="bg-white/[0.03] border border-red-500/15 backdrop-blur-sm p-8 rounded-3xl relative flex flex-col justify-between transition-colors hover:border-red-500/35">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 to-transparent rounded-t-3xl" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-red-400 bg-red-400/10 px-3 py-1 rounded-full border border-red-400/15">
                  OPERAÇÃO MANUAL (COMO VOCÊ ESTÁ HOJE)
                </span>
                <TrendingDown className="w-5 h-5 text-red-400" />
              </div>

              <div className="space-y-5">
                {/* 1. Sem estratégia */}
                <div className="flex gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">Sem estratégia</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      Postar vídeos aleatórios que não prendem o telespectador nos primeiros 3 segundos e ficam travados em visualizações baixas.
                    </p>
                  </div>
                </div>

                {/* 2. Sem ideias de conteúdo */}
                <div className="flex gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">Sem ideias de conteúdo</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      Ficar horas em frente ao computador tentando criar roteiros interessantes, sem saber se as pessoas vão clicar no link.
                    </p>
                  </div>
                </div>

                {/* 3. Perdendo oportunidades */}
                <div className="flex gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">Perdendo oportunidades</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      Assistir a dezenas de perfis lucrando milhares de reais em comissões como afiliados de produtos físicos enquanto você apenas assiste.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-red-400/70 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Resultados imprevisíveis e perda de tempo diária</span>
            </div>
          </div>

          {/* Column 2: DEPOIS (Green-Tinted High Tech AI scale) */}
          <div className="bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm p-8 rounded-3xl relative flex flex-col justify-between transition-colors hover:border-emerald-500/40">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/30 to-transparent rounded-t-3xl" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  MÉTODO TIKTOK SHOP AI (COMO VOCÊ FICARÁ)
                </span>
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="space-y-5">
                {/* 1. Conteúdo criado em escala */}
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">Conteúdo criado em escala</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      Geração massiva de clipes persuasivos de alta fidelidade usando IA. Publique 5 a 10 vídeos por dia com cliques rápidos na tela.
                    </p>
                  </div>
                </div>

                {/* 2. Estratégia definida */}
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">Estratégia definida</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      Uso de filtros de inteligência de mercado para mapear e testar apenas produtos que já possuem alto tráfego e alta comissão garantidos.
                    </p>
                  </div>
                </div>

                {/* 3. Possibilidade de monetização */}
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">Monetização orgânica real</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      Comissões automáticas caindo diretamente na carteira com tráfego orgânico ilimitado distribuído pelo algoritmo do TikTok.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-emerald-400 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 animate-pulse" />
              <span>Escala previsível com inteligência artificial ativa</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
