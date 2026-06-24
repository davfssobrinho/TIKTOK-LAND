import React from "react";
import { Check, ShieldCheck, PlayCircle, BookOpen, Clock, Layers } from "lucide-react";

export default function Benefits() {
  const benefitsList = [
    {
      title: "Criar vídeos usando inteligência artificial",
      desc: "Domine as ferramentas exatas de geração automática de imagem, voz sintética humana, legendas magnéticas e trilha sonora hipnótica sem tocar em editores manuais."
    },
    {
      title: "Estratégias para TikTok Shop",
      desc: "Como funciona a logística oficial e a vinculação correta do produto no seu carrinho para garantir que a transação ocorra direto na plataforma e sua comissão caia na hora."
    },
    {
      title: "Como encontrar produtos vencedores",
      desc: "Aprenda a mapear os produtos físicos mais desejados do mercado, analisando métricas de retenção e margens de comissão para garantir vendas rápidas."
    },
    {
      title: "Como criar conteúdos sem aparecer",
      desc: "Use nossa metodologia exclusiva de perfis dark e de nicho, explorando o tráfego 100% orgânico sem precisar gravar seu rosto ou expor sua privacidade."
    },
    {
      title: "Como aumentar volume de postagem",
      desc: "Sua produção subirá de 1 vídeo por dia para 10 vídeos diários. Aprenda a programar postagens automatizadas usando IA para criar escala no algoritmo."
    },
    {
      title: "Como estruturar uma máquina de vendas online",
      desc: "Crie um negócio sustentável de médio a longo prazo, montando canais paralelos e multiplicando suas fontes de receita sem precisar gerenciar estoque ou suporte físico."
    }
  ];

  const modules = [
    { num: "Módulo 1", name: "Introdução à Economia do TikTok Shop", count: "4 Aulas" },
    { num: "Módulo 2", name: "Mineração Secreta de Produtos Físicos Vendedores", count: "6 Aulas" },
    { num: "Módulo 3", name: "Instalando e Dominando as IAs de Criação de Vídeo", count: "8 Aulas" },
    { num: "Módulo 4", name: "Estruturação de Canais Dark e Escalabilidade", count: "5 Aulas" },
    { num: "Módulo 5", name: "O Algoritmo Decodificado: Técnicas de Viralização", count: "6 Aulas" },
    { num: "Módulo 6", name: "Saques, Impostos e Escala da Operação", count: "4 Aulas" }
  ];

  return (
    <section id="beneficios" className="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Subtle bottom backdrop glow */}
      <div className="absolute bottom-[5%] right-[5%] w-[300px] h-[300px] bg-purple-600/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono mb-4 border border-purple-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CRONOGRAMA DE EXCELÊNCIA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            O que você vai aprender dentro do curso
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            O treinamento foi desenhado passo a passo, do básico absoluto ao nível avançado de escala de faturamento automático.
          </p>
        </div>

        {/* Two column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Course syllabus tracker mockup */}
          <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 backdrop-blur-sm p-6 rounded-3xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Grade de Aulas</span>
                <h3 className="font-display font-bold text-white text-base">Grade Completa</h3>
              </div>
              <span className="text-xs bg-purple-500/10 text-purple-300 font-mono px-3 py-1 rounded-full border border-purple-500/20">
                33 Aulas Práticas
              </span>
            </div>

            <div className="space-y-3">
              {modules.map((mod, index) => (
                <div
                  key={index}
                  className="bg-slate-950/40 border border-white/5 p-4 rounded-xl flex items-center justify-between hover:border-purple-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center font-mono text-[11px] font-bold text-blue-400 group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 block uppercase leading-none">{mod.num}</span>
                      <span className="text-xs font-semibold text-slate-200 block mt-1 group-hover:text-white transition-colors">{mod.name}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 shrink-0">{mod.count}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" /> Atualizado em 2026
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Acesso Vitalício
              </span>
            </div>
          </div>

          {/* Right Column: Beautiful benefits checklist */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-white text-xl sm:text-2xl tracking-tight mb-4 flex items-center gap-2">
              <span className="text-blue-400">✓</span> Conhecimento Estratégico Aplicável
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="space-y-2 p-5 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <h4 className="font-display font-semibold text-white text-sm sm:text-base tracking-tight leading-tight">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-7">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 mt-6">
              <p className="text-xs text-slate-300 leading-relaxed text-center">
                🎯 <strong className="text-white">Diferencial Único:</strong> Nenhuma aula enrolativa. Focamos em cliques práticos na tela, ensinando você a configurar cada inteligência artificial e conectá-las ao seu perfil do TikTok de forma cirúrgica.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
