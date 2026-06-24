import React, { useState } from "react";
import { Sparkles, Mail, MessageCircle, FileText, Lock } from "lucide-react";

export default function Footer() {
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  const handleOpenModal = (type: "terms" | "privacy") => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <footer className="bg-[#020617] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/5 pb-8 mb-8">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-black p-1.5 rounded-full flex items-center justify-center border border-white/10">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.62 4.18 1.23 1.34 2.95 2.15 4.74 2.29v3.7c-1.89-.04-3.74-.71-5.22-1.92V15.5c0 2.21-1.12 4.31-2.96 5.53-2.34 1.53-5.54 1.63-7.98.24-2.45-1.4-3.78-4.32-3.32-7.14.39-2.43 2.15-4.5 4.54-5.26 1.76-.56 3.7-.3 5.25.7v3.7c-.89-.54-1.95-.73-2.97-.53-1.42.27-2.61 1.39-2.93 2.8-.46 2.05 1.05 4.09 3.12 4.24 1.79.13 3.42-1.02 3.82-2.76.1-.4.15-.81.15-1.22V.02z" />
                </svg>
              </div>
              <span className="font-display font-bold text-base tracking-wider text-white">
                TTShop <span className="text-blue-400">AI</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Desenvolvemos estratégias de marketing digital de alta conversão, unindo o poder da automação via Inteligência Artificial com os canais de vendas mais lucrativos da atualidade.
            </p>
          </div>

          {/* Legal Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest">
              Legal & Regulamento
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button
                onClick={() => handleOpenModal("terms")}
                className="text-slate-400 hover:text-blue-400 transition-colors text-left font-medium cursor-pointer"
              >
                Termos de Uso
              </button>
              <button
                onClick={() => handleOpenModal("privacy")}
                className="text-slate-400 hover:text-blue-400 transition-colors text-left font-medium cursor-pointer"
              >
                Política de Privacidade
              </button>
            </div>
          </div>

          {/* Contact Support Column */}
          <div id="contato" className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest">
              Contato & Suporte
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>suporte@ttshop-ai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Segunda a Sexta, das 9h às 18h</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers */}
        <div className="space-y-4">
          <p className="text-[10px] text-slate-600 leading-normal">
            <strong>AVISO LEGAL:</strong> Esta landing page possui caráter exclusivamente informativo e educacional. Não garantimos faturamento fixo, renda recorrente garantida ou milagres financeiros. Os resultados financeiros ilustrados no simulador e depoimentos representam potenciais de ganho baseados na execução correta e consistente do método ensinado, dependendo unicamente do empenho individual de cada aluno. Não possuímos vínculo comercial direto ou associação institucional com a marca registrada TikTok, TikTok Shop ou ByteDance Ltd.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-mono">
            <span>© 2026 TTShop AI Marketing Digital. Todos os direitos reservados.</span>
            <span>CNPJ: 48.192.420/0001-20</span>
          </div>
        </div>
      </div>

      {/* Simulated Terms / Privacy Modal Overlays */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-white/10 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-4 max-h-[80vh] overflow-y-auto shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <h3 className="font-display font-bold text-white text-base sm:text-lg flex items-center gap-2">
                {modalType === "terms" ? (
                  <>
                    <FileText className="w-5 h-5 text-purple-400" /> Termos de Uso do Aluno
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 text-blue-400" /> Política de Privacidade do Site
                  </>
                )}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-white font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-950 border border-white/5 cursor-pointer"
              >
                Fechar [x]
              </button>
            </div>

            <div className="text-slate-400 text-xs sm:text-sm space-y-4 leading-relaxed font-light">
              {modalType === "terms" ? (
                <>
                  <p>
                    <strong>1. Aceitação dos Termos:</strong> Ao adquirir ou acessar o Curso TikTok Shop AI, você concorda em cumprir e vincular-se a estes Termos de Uso, bem como a todas as leis brasileiras vigentes.
                  </p>
                  <p>
                    <strong>2. Licença de Uso Individual:</strong> O acesso adquirido concede uma licença de uso individual, intransferível e irrevogável para fins exclusivamente de aprendizagem pessoal. É expressamente proibida a reiteração de conteúdo, revenda, pirataria ou compartilhamento de logins de acesso sob pena de encerramento contratual e persecução cível.
                  </p>
                  <p>
                    <strong>3. Resultados Financeiros:</strong> Esclarecemos expressamente que o marketing digital envolve riscos e flutuações algoritmos naturais das plataformas externas. Nenhuma aula ou ferramenta constitui promessa de ganho fácil ou garantia de enriquecimento rápido.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Coleta de Informações:</strong> Coletamos apenas as informações cadastrais básicas necessárias para processar seu faturamento e garantir a correta liberação do seu link de aluno premium em nossa área de membros.
                  </p>
                  <p>
                    <strong>2. Segurança de Dados:</strong> Todos os dados de cartão de crédito e transações bancárias são processados de forma criptografada sob protocolo SSL de ponta, sem que nossa equipe tenha acesso direto às suas credenciais financeiras.
                  </p>
                  <p>
                    <strong>3. Lei Geral de Proteção de Dados (LGPD):</strong> Respeitamos integralmente seus direitos de solicitar a retificação ou exclusão permanente de seus dados cadastrais de suporte a qualquer momento através do canal oficial de e-mail.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
