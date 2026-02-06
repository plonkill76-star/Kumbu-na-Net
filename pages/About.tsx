
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-300">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Sobre o Kumbu na Net</h1>
      <div className="glass p-10 rounded-[40px] space-y-8">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 gold-gradient rounded-3xl flex items-center justify-center shadow-xl shadow-amber-500/20">
            <i className="fa-solid fa-money-bill-trend-up text-white text-5xl"></i>
          </div>
        </div>
        <p className="text-xl text-center text-slate-200 font-medium">
          Nossa missão é democratizar o acesso à renda digital em Angola através do Kumbu na Net.
        </p>
        <div className="space-y-4">
          <p>
            O Kumbu na Net surgiu da necessidade de conectar marcas globais ao público angolano através do engajamento digital. Somos uma plataforma de recompensas que permite aos usuários monetizar seu tempo livre.
          </p>
          <p>
            Trabalhamos em parceria com grandes redes de anúncios, incluindo o Google Ads, para trazer conteúdo relevante enquanto você acumula saldo em sua carteira digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
            <h3 className="text-amber-500 font-bold mb-2">Segurança</h3>
            <p className="text-sm">Seus dados e seus ganhos estão protegidos com criptografia de ponta no Kumbu na Net.</p>
          </div>
          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
            <h3 className="text-amber-500 font-bold mb-2">Rapidez</h3>
            <p className="text-sm">Foco total em agilizar os pagamentos via MCX EXPRESS para todos os angolanos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
