import React, { useState } from "react";
import { DollarSign, Sparkles, TrendingUp, HelpCircle, CheckCircle2 } from "lucide-react";

export default function Calculator() {
  const [videosPerDay, setVideosPerDay] = useState(3);
  const [avgViews, setAvgViews] = useState(15000); // Average 15k views
  const [conversionRate, setConversionRate] = useState(0.3); // 0.3% conversion rate
  const [productPrice, setProductPrice] = useState(79); // Average product price R$ 79
  const [commissionRate, setCommissionRate] = useState(15); // 15% commission

  // Calculations
  const dailyViews = videosPerDay * avgViews;
  const monthlyViews = dailyViews * 30;
  const monthlySales = Math.floor(monthlyViews * (conversionRate / 100));
  const monthlyRevenue = monthlySales * productPrice;
  const monthlyCommission = monthlyRevenue * (commissionRate / 100);

  // Format currency
  const formatCurrency = (val: number) => {
    return val.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    });
  };

  return (
    <section id="calculadora" className="py-20 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono mb-4 border border-emerald-500/20">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>ESTIMATIVA DE GANHOS REAIS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Simulador de Potencial de Lucro no <span className="text-gradient-purple-cyan font-bold">TikTok Shop</span>
          </h2>
          <p className="text-slate-400 text-base">
            Arraste os controles abaixo para ver como pequenos aumentos no número de vídeos criados por IA podem impactar exponencialmente seu faturamento mensal como afiliado ou vendedor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-purple-500/30 transition-colors">
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-white text-lg flex items-center gap-2 pb-4 border-b border-white/5">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Configure Sua Estrutura de Vídeos
              </h3>

              {/* Slider 1: Videos per day */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">Vídeos Postados por Dia:</span>
                  <span className="text-blue-400 font-mono font-bold">{videosPerDay} {videosPerDay === 1 ? "vídeo" : "vídeos"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={videosPerDay}
                  onChange={(e) => setVideosPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 border border-white/5 rounded-lg appearance-none cursor-pointer accent-purple-500 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1 vídeo (manual)</span>
                  <span>10 vídeos (com nossa IA em escala)</span>
                </div>
              </div>

              {/* Slider 2: Average views */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">Média de Visualizações por Vídeo:</span>
                  <span className="text-blue-400 font-mono font-bold">{avgViews.toLocaleString()} visualizações</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={avgViews}
                  onChange={(e) => setAvgViews(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 border border-white/5 rounded-lg appearance-none cursor-pointer accent-purple-500 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1.000 visualizações (mínimo)</span>
                  <span>100.000 visualizações (vídeo viral básico)</span>
                </div>
              </div>

              {/* Slider 3: Conversion rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">Taxa de Conversão em Vendas:</span>
                  <span className="text-purple-400 font-mono font-bold">{conversionRate}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 border border-white/5 rounded-lg appearance-none cursor-pointer accent-purple-500 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>0.1% (público frio)</span>
                  <span>2.0% (público ultra qualificado)</span>
                </div>
              </div>

              {/* Grid for minor settings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                {/* Product price */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Preço Médio do Produto:</span>
                    <span className="text-white font-mono font-semibold">R$ {productPrice}</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="199"
                    step="5"
                    value={productPrice}
                    onChange={(e) => setProductPrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-900 border border-white/5 rounded-lg appearance-none cursor-pointer accent-purple-400 focus:outline-none"
                  />
                </div>

                {/* Commission rate */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Comissão do Afiliado:</span>
                    <span className="text-white font-mono font-semibold">{commissionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-900 border border-white/5 rounded-lg appearance-none cursor-pointer accent-purple-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                <strong className="text-white">Como a IA ajuda aqui?</strong> Criar vídeos manualmente limita você a postar apenas 1 por dia devido ao tempo de edição. Com ferramentas de Inteligência Artificial ensinadas no curso, você pode gerar até 10 vídeos virais altamente persuasivos por dia em menos de 30 minutos, multiplicando suas chances de conversão em 10x de forma automatizada.
              </p>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative">
            {/* Top decorative badge */}
            <div className="absolute top-0 right-0 transform translate-x-[-10%] translate-y-[-50%] bg-emerald-500 text-slate-950 text-[10px] font-mono font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-emerald-500/20">
              Projeção 30 Dias
            </div>

            <div className="space-y-6">
              <h3 className="font-display font-semibold text-white text-lg pb-4 border-b border-white/5">
                Seu Potencial de Receita
              </h3>

              {/* Highlight KPI */}
              <div className="space-y-1 bg-slate-950/40 p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-xl rounded-full" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5" /> Comissão Estimada
                </span>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-1">
                  {formatCurrency(monthlyCommission)}
                </div>
                <p className="text-[10px] text-slate-400 pt-1">
                  Dinheiro líquido direto na sua carteira TikTok
                </p>
              </div>

              {/* Sub KPIs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/20 p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">Faturamento Gerado</span>
                  <span className="text-base font-bold text-slate-200 block pt-0.5">{formatCurrency(monthlyRevenue)}</span>
                  <span className="text-[9px] text-slate-500 block">Total em vendas brutas</span>
                </div>
                <div className="bg-slate-950/20 p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">Vendas Estimadas</span>
                  <span className="text-base font-bold text-slate-200 block pt-0.5">{monthlySales.toLocaleString()} pedidos</span>
                  <span className="text-[9px] text-slate-500 block">No mês (30 dias)</span>
                </div>
              </div>

              {/* Cumulative stats */}
              <div className="space-y-2 text-xs border-t border-white/5 pt-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Vídeos postados / mês:</span>
                  <span className="text-white font-mono font-semibold">{(videosPerDay * 30).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total visualizações estimadas:</span>
                  <span className="text-white font-mono font-semibold">{monthlyViews.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Nenhuma necessidade de estocar produtos físicos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem lidar com suporte ao cliente ou entregas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Trabalhe de qualquer lugar apenas com notebook ou celular</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-500 leading-normal text-center italic">
                * Os cálculos baseiam-se em médias de mercado. Seus resultados dependerão da constância na aplicação do método ensinado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
