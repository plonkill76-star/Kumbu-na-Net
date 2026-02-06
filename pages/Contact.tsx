
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Precisa de Ajuda?</h1>
        <p className="text-slate-400 text-lg">Nossa equipa de suporte está pronta para lhe atender.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="glass p-8 rounded-3xl border-amber-500/20">
            <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-white text-xl mb-6">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">E-mail de Suporte</h3>
            <p className="text-slate-400 text-sm mb-4">Para questões técnicas ou problemas com pagamentos.</p>
            <a href="mailto:suporte@kumbunanet.com" className="text-amber-500 font-bold hover:underline">suporte@kumbunanet.com</a>
          </div>

          <div className="glass p-8 rounded-3xl border-amber-500/20">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl mb-6">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp Directo</h3>
            <p className="text-slate-400 text-sm mb-4">Atendimento rápido em horário comercial (Seg-Sex).</p>
            <a href="tel:+244923000000" className="text-white font-bold hover:text-amber-500 transition-colors">+244 923 000 000</a>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-lg font-bold mb-4">Perguntas Frequentes</h3>
            <p className="text-slate-400 text-sm mb-4">O saque mínimo é de 15.000 Kz e os pagamentos são feitos via MCX EXPRESS em até 72h.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 glass p-8 md:p-12 rounded-[40px] border-slate-800">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-4xl mb-6">
                <i className="fa-solid fa-check"></i>
              </div>
              <h2 className="text-2xl font-bold mb-2">Mensagem Enviada!</h2>
              <p className="text-slate-400">Recebemos o seu contacto. Responderemos o mais breve possível para o seu email.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-amber-500 font-bold hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Seu Nome</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 focus:border-amber-500 outline-none transition-all"
                    placeholder="Como devemos lhe chamar?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Seu E-mail</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 focus:border-amber-500 outline-none transition-all"
                    placeholder="email@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Assunto</label>
                <select 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 focus:border-amber-500 outline-none transition-all text-slate-300"
                >
                  <option value="">Selecione um motivo</option>
                  <option value="pagamento">Problema com Saque/Pagamento</option>
                  <option value="conta">Acesso à Conta</option>
                  <option value="tarefas">Dúvida sobre Tarefas</option>
                  <option value="outro">Outro Assunto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Mensagem</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 focus:border-amber-500 outline-none transition-all resize-none"
                  placeholder="Descreva detalhadamente a sua dúvida ou sugestão..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 gold-gradient rounded-2xl font-black text-xl shadow-xl shadow-amber-500/20 flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {isSubmitting ? (
                  <i className="fa-solid fa-spinner animate-spin"></i>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <i className="fa-solid fa-paper-plane text-sm"></i>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
