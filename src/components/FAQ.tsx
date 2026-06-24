import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Preciso aparecer nos vídeos?",
      a: "Não! O método foca 100% em canais de nicho e 'perfis dark', onde criamos vídeos de review de alta conversão usando vídeos estéticos de produtos físicos e vozes neurais geradas por IA. Ninguém saberá quem é o dono do perfil."
    },
    {
      q: "Preciso ter experiência?",
      a: "Absolutamente não. O curso foi feito para iniciantes do zero absoluto. Ensinamos passo a passo, desde como abrir sua conta de afiliado, passando pelo manuseio das ferramentas de IA, até a postagem estratégica do vídeo."
    },
    {
      q: "Preciso investir dinheiro?",
      a: "Não é necessário investir em tráfego pago (anúncios). Ensinamos você a dominar o algoritmo orgânico do TikTok para obter milhares de visualizações gratuitas. Além disso, as ferramentas de IA sugeridas possuem excelentes versões gratuitas."
    },
    {
      q: "A IA realmente consegue criar vídeos?",
      a: "Sim! Hoje existem inteligências artificiais incríveis capazes de analisar o link de um produto, gerar um roteiro de vendas persuasivo, criar uma narração humana realista em português e unir clipes com legendas automáticas em menos de 3 minutos."
    },
    {
      q: "Como funciona o acesso ao curso?",
      a: "O acesso é imediato e vitalício. Logo após a confirmação do pagamento (PIX e cartão aprovam na hora), você receberá um e-mail oficial contendo suas credenciais de login para a nossa plataforma de alunos premium."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Decorative ambient background glow */}
      <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono mb-4 border border-purple-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>SUPORTE & DÚVIDAS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Tem alguma dúvida sobre o método? Veja as respostas das perguntas mais comuns de novos alunos.
          </p>
        </div>

        {/* Accordion Group */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-purple-500/30"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 text-white hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="font-display font-bold text-sm sm:text-base tracking-tight">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-slate-500">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-60 border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 sm:p-6 text-slate-400 text-xs sm:text-sm leading-relaxed bg-slate-950/20">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct contact CTA */}
        <div className="text-center mt-12">
          <p className="text-xs text-slate-500">
            Ainda com dúvidas? Envie uma mensagem para nossa equipe de suporte pelo{" "}
            <a href="#contato" className="text-blue-400 underline hover:text-purple-400 transition-colors">
              suporte@ttshop-ai.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
