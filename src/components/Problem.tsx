import React from "react";
import { AlertCircle, EyeOff, Hourglass, Search, ZapOff, ArrowDown } from "lucide-react";

export default function Problem() {
  const pains = [
    {
      icon: <Search className="w-6 h-6 text-purple-400" />,
      title: "Não sabe qual produto vender",
      desc: "Fica perdido tentando adivinhar quais produtos do TikTok Shop realmente vendem e têm margem de comissão alta, sem nenhum critério científico de escolha."
    },
    {
      icon: <ZapOff className="w-6 h-6 text-purple-400" />,
      title: "Não sabe criar vídeos que viralizam",
      desc: "Produz vídeos genéricos que ficam travados nas famigeradas '200 visualizações', sem entender as técnicas de retenção e os ganchos psicológicos que forçam o algoritmo a entregar."
    },
    {
      icon: <EyeOff className="w-6 h-6 text-purple-400" />,
      title: "Tem vergonha de aparecer",
      desc: "Deixa de faturar com o TikTok Shop porque não quer gravar o próprio rosto, falar na câmera ou expor sua imagem pessoal na internet."
    },
    {
      icon: <Hourglass className="w-6 h-6 text-purple-400" />,
      title: "Perde horas criando conteúdo",
      desc: "Passa a tarde inteira editando um único clipe curto no celular para, no final, receber pouquíssimos cliques e nenhuma comissão de venda."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-purple-400" />,
      title: "Não sabe usar IA para escala",
      desc: "Vê outras pessoas postando dezenas de vídeos profissionais por dia, mas não sabe quais ferramentas ou prompts usar para criar uma máquina automática de conteúdo."
    }
  ];

  return (
    <section id="problema" className="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Background glow shadow */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono mb-4 border border-purple-500/20 animate-pulse">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>O CUSTO DA INÉRCIA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Você está deixando dinheiro na mesa todos os dias?
          </h2>
          <p className="text-slate-400 text-base">
            Se você passa horas no TikTok vendo outros perfis acumularem visualizações e vendas, saiba que eles não são mais inteligentes que você. Eles apenas dominam o segredo da automação.
          </p>
        </div>

        {/* Pains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pains.map((pain, index) => (
            <div
              key={index}
              className={`bg-white/[0.03] border border-white/10 backdrop-blur-sm p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1 relative group ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Highlight purple top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-4">
                <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 w-fit">
                  {pain.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg tracking-tight">
                  {pain.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pain.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Quick interactive stats block inside the grid to enrich the layout */}
          <div className="bg-white/[0.02] border border-white/5 backdrop-blur-sm p-6 rounded-3xl flex flex-col justify-center items-center text-center space-y-4">
            <div className="text-4xl font-extrabold text-white font-mono">92%</div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
              dos novos criadores de conteúdo desistem nas primeiras duas semanas por falta de ferramentas eficientes de escala.
            </p>
          </div>
        </div>

        {/* Beautiful Solution Transition Banner */}
        <div className="bg-white/[0.02] border border-white/5 backdrop-blur-md p-8 rounded-3xl relative overflow-hidden max-w-4xl mx-auto text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/5 blur-3xl pointer-events-none" />
          
          <h3 className="font-display font-semibold text-white text-lg sm:text-xl mb-3">
            Mas a verdade é uma só:
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            A culpa não é sua. Até hoje, você achava que para crescer na internet precisava gravar o próprio rosto por horas ou ter equipamentos de milhares de reais. Mas com a chegada da Inteligência Artificial, as regras do jogo mudaram completamente...
          </p>
          
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full animate-bounce">
            <ArrowDown className="w-3.5 h-3.5" /> Conheça a Nova Era da Criação de Conteúdo
          </div>
        </div>

      </div>
    </section>
  );
}
