import React from "react";
import { Sparkles, ShoppingBag, EyeOff, TrendingUp, Search, Layers, PlaySquare, Percent } from "lucide-react";

export default function Solution() {
  const cards = [
    {
      icon: <Search className="w-6 h-6 text-blue-400" />,
      title: "Encontrar produtos com potencial de venda",
      desc: "Você aprenderá a vasculhar a biblioteca de produtos do TikTok Shop usando filtros secretos de comissão rápida, taxa de conversão e estoque, focando apenas nos itens que já estão vendendo toneladas de forma automática."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: "Gerar vídeos profissionais usando IA",
      desc: "Acesso direto aos prompts e softwares de IA capazes de roteirizar, narrar e sincronizar imagens de alta qualidade em menos de 3 minutos. Chega de sofrer com edição complexa."
    },
    {
      icon: <EyeOff className="w-6 h-6 text-blue-400" />,
      title: "Escalar conteúdo sem precisar aparecer",
      desc: "Crie dezenas de perfis e canais de nicho (os chamados 'canais dark') que trabalham para você 24 horas por dia. Seus vídeos vendem sem que ninguém saiba quem é o dono da conta."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: "Transformar visualizações em vendas",
      desc: "Como configurar os links de comissão do TikTok Shop diretamente nos seus vídeos virais de forma otimizada para que o telespectador compre o item físico em 2 cliques."
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Decorative ambient background glows */}
      <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono mb-4 border border-purple-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A REVOLUÇÃO DO MERCADO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            O método que une <span className="text-gradient-purple-cyan font-black">TikTok Shop</span> + <span className="text-white">Inteligência Artificial</span>
          </h2>
          <p className="text-slate-400 text-base">
            Uma fusão perfeita de tecnologia de ponta e o ecossistema de maior crescimento da internet mundial. Veja os pilares fundamentais da nossa metodologia:
          </p>
        </div>

        {/* 2x2 Grid of solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 backdrop-blur-sm p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Corner neon effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-3xl group-hover:from-purple-500/15 transition-all duration-300 pointer-events-none" />
              
              <div className="space-y-4">
                <div className="p-3 bg-slate-950/40 border border-white/5 rounded-xl w-fit flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-white text-xl sm:text-2xl tracking-tight leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Decorative step number in bottom right */}
              <div className="self-end mt-6 text-xs font-mono font-bold tracking-widest text-slate-500 select-none uppercase group-hover:text-purple-400 transition-colors">
                Pilar 0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic highlights beneath the grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center border-t border-white/5 pt-12">
          <div className="space-y-1">
            <div className="text-2xl font-black text-white font-display">100% Legal</div>
            <p className="text-xs text-slate-500">Regras oficiais do TikTok Shop</p>
          </div>
          <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-white/5 py-4 sm:py-0">
            <div className="text-2xl font-black text-blue-400 font-display">Sem Estoque</div>
            <p className="text-xs text-slate-500">O vendedor original envia o produto</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-black text-purple-400 font-display">Altamente Escalável</div>
            <p className="text-xs text-slate-500">Poste múltiplos vídeos ao mesmo tempo</p>
          </div>
        </div>

      </div>
    </section>
  );
}
