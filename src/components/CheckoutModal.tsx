import React, { useState } from "react";
import { ShieldCheck, CreditCard, QrCode, FileCheck2, ShoppingBag, X, CheckCircle2, AlertCircle } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | "boleto">("pix");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [validationError, setValidationError] = useState("");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) {
      setValidationError("Por favor, preencha seu nome e e-mail!");
      return;
    }
    setValidationError("");
    setCheckoutSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      
      {/* Modal Container */}
      <div className="bg-slate-900 border border-white/10 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative flex flex-col justify-between">
        
        {/* Header */}
        <div className="bg-[#020617] px-6 py-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-purple-400 animate-pulse" />
            <h3 className="font-display font-extrabold text-white text-xs sm:text-sm tracking-tight uppercase">
              Inscrição Segura Protegida
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white rounded-lg p-1 hover:bg-white/5 focus:outline-none transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success View */}
        {checkoutSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            
            <div className="space-y-2">
              <h4 className="font-display font-black text-white text-xl">
                Parabéns, {formName.split(" ")[0]}!
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
                Sua vaga promocional para o <strong className="text-white">Curso TikTok Shop AI</strong> foi reservada com sucesso!
              </p>
              <p className="text-slate-400 text-xs">
                Enviamos os dados de acesso imediatos para o e-mail: <strong className="text-blue-400">{formEmail}</strong>
              </p>
            </div>

            <div className="bg-[#020617]/50 p-4 rounded-xl border border-white/5 text-[11px] text-slate-500 leading-normal">
              Obs: Como este é um ambiente de demonstração premium, nenhuma cobrança real foi efetuada no seu cartão ou Pix. O fluxo foi simulado com sucesso!
            </div>

            <button
              onClick={() => {
                setCheckoutSuccess(false);
                setFormName("");
                setFormEmail("");
                setFormPhone("");
                onClose();
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-display font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm cursor-pointer shadow-purple-500/20"
            >
              CONCLUIR E ENTRAR NA ÁREA DE ALUNOS
            </button>
          </div>
        ) : (
          /* Checkout Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            
            {/* Validation warning */}
            {validationError && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2 text-xs text-red-400">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Step 1: User details */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">1. Dados Cadastrais</span>
              
              <div className="space-y-1">
                <input
                  type="text"
                  required
                  placeholder="Seu Nome Completo"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-slate-950/50 text-white text-xs sm:text-sm border border-white/10 p-3 rounded-xl focus:outline-none focus:border-purple-500/50 transition-colors placeholder-slate-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Seu E-mail Principal"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full bg-slate-950/50 text-white text-xs sm:text-sm border border-white/10 p-3 rounded-xl focus:outline-none focus:border-purple-500/50 transition-colors placeholder-slate-600"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp com DDD"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="w-full bg-slate-950/50 text-white text-xs sm:text-sm border border-white/10 p-3 rounded-xl focus:outline-none focus:border-purple-500/50 transition-colors placeholder-slate-600"
                />
              </div>
            </div>

            {/* Step 2: Payment Method Select */}
            <div className="space-y-3 pt-3 border-t border-white/5">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">2. Método de Pagamento</span>
              
              <div className="grid grid-cols-3 gap-2">
                {/* PIX */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("pix")}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-center cursor-pointer ${
                    paymentMethod === "pix"
                      ? "bg-purple-500/10 border-purple-500 text-purple-300"
                      : "bg-slate-950/50 border-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  <QrCode className="w-5 h-5 shrink-0" />
                  <span className="text-[10px] font-mono font-bold uppercase leading-none">Pix</span>
                </button>

                {/* Credit card */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-center cursor-pointer ${
                    paymentMethod === "card"
                      ? "bg-purple-500/10 border-purple-500 text-purple-300"
                      : "bg-slate-950/50 border-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  <CreditCard className="w-5 h-5 shrink-0" />
                  <span className="text-[10px] font-mono font-bold uppercase leading-none">Cartão</span>
                </button>

                {/* Boleto */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("boleto")}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-center cursor-pointer ${
                    paymentMethod === "boleto"
                      ? "bg-purple-500/10 border-purple-500 text-purple-300"
                      : "bg-slate-950/50 border-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  <FileCheck2 className="w-5 h-5 shrink-0" />
                  <span className="text-[10px] font-mono font-bold uppercase leading-none">Boleto</span>
                </button>
              </div>

              {/* Dynamic info message based on select */}
              <div className="p-3 bg-slate-950/20 rounded-xl border border-white/5 text-[11px] text-slate-400 leading-normal">
                {paymentMethod === "pix" && (
                  <span>⚡ <strong>Liberação imediata:</strong> O código Pix 'Copia e Cola' será gerado na próxima tela. O acesso é enviado ao seu e-mail em menos de 2 minutos após o pagamento.</span>
                )}
                {paymentMethod === "card" && (
                  <span>💳 <strong>Parcelamento em até 12x:</strong> Transação processada de forma 100% segura. Liberação instantânea no seu e-mail após a aprovação da operadora.</span>
                )}
                {paymentMethod === "boleto" && (
                  <span>📄 <strong>Boleto Bancário:</strong> O boleto vence em 2 dias úteis. A liberação do curso pode levar de 1 a 2 dias úteis devido à compensação bancária.</span>
                )}
              </div>
            </div>

            {/* Total display */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-white/10 flex justify-between items-center text-xs">
              <span className="text-slate-400">Total a ser pago hoje:</span>
              <div>
                <span className="text-[10px] text-slate-500 line-through mr-1.5">R$ 497,00</span>
                <span className="text-base font-bold text-emerald-400 font-mono">R$ 197,00 à vista</span>
              </div>
            </div>

            {/* Action submit */}
            <div className="space-y-3 pt-3">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-display font-black py-4 rounded-xl text-center text-sm tracking-widest cursor-pointer shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-transform hover:scale-[1.01]"
              >
                CONFIRMAR INSCRIÇÃO AGORA
              </button>

              <div className="flex justify-center items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Transação assegurada por criptografia de nível bancário de 256 bits</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
