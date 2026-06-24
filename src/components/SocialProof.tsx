import React from "react";
import { MessageSquare, Star, Sparkles, AlertCircle } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    {
      name: "Gabriel Santos",
      handle: "@gabriel_ttshop",
      result: "R$ 4.820,00 no primeiro mês",
      comment: "Incrível! Nunca imaginei que daria para criar tantos vídeos de review de produtos físicos sem precisar ter o produto em mãos ou falar na câmera. A IA faz todo o trabalho de locução e legenda, só preciso minerar os produtos corretos e postar.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      name: "Mariana Costa",
      handle: "@mari_digital_ai",
      result: "R$ 12.140,00 acumulados",
      comment: "A estratégia de canais paralelos é o maior diferencial do curso. Hoje tenho 3 perfis de nicho no TikTok Shop rodando vídeos feitos com inteligência artificial. O faturamento é super consistente porque o algoritmo sempre entrega.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      name: "Lucas Almeida",
      handle: "@lucas_shop_ia",
      result: "R$ 7.930,00 em comissões",
      comment: "O módulo de prompts de IA salvou meu tempo. Eu gastava horas tentando editar vídeos simples, hoje eu faço 10 vídeos estéticos em meia hora. O retorno em vendas de afiliados é absurdo quando você acerta o gancho do vídeo.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Decorative side light */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono mb-4 border border-purple-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>PROVA SOCIAL RELEVANTE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Resultados de quem aplica a metodologia
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Veja o depoimento simulado de alunos que utilizam o poder da IA para criar impérios de afiliados no TikTok Shop.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 backdrop-blur-sm p-6 rounded-3xl hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              {/* User info */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/5 mt-6">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-10 h-10 rounded-full border border-white/10 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="overflow-hidden">
                  <h4 className="font-display font-semibold text-white text-sm truncate leading-none">
                    {test.name}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">
                    {test.handle}
                  </span>
                  
                  {/* Highlighting result */}
                  <span className="text-[11px] font-semibold text-emerald-400 font-mono block mt-1">
                    🎯 {test.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editable info banner (User intent: "Não inventar resultados reais, deixar como modelo editável") */}
        <div className="mt-12 p-4 bg-purple-500/5 border border-purple-500/10 rounded-xl max-w-2xl mx-auto flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-500 leading-normal">
            <strong className="text-slate-300">Área de Modelo Editável:</strong> Os depoimentos acima representam simulações realistas do mercado de afiliação de alta escala. Você poderá facilmente substituir estes blocos por fotos, links de redes sociais ou vídeos reais enviados pelos seus alunos após as primeiras semanas de curso.
          </p>
        </div>

      </div>
    </section>
  );
}
