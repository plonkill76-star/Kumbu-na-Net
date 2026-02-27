
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdate = "27 de Fevereiro de 2026";

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-300">
      <header className="mb-12">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">Política de Privacidade</h1>
        <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Última atualização: {lastUpdate}</p>
      </header>

      <div className="glass p-8 md:p-12 rounded-[40px] space-y-10 leading-relaxed border-white/5 shadow-2xl">
        <section>
          <p className="text-lg">
            Bem-vindo ao <span className="text-amber-500 font-bold">Kumbu na Net</span>. A sua privacidade é de extrema importância para nós. Esta política descreve como coletamos, usamos e protegemos as suas informações ao utilizar a nossa plataforma de recompensas em Angola.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <span className="w-8 h-8 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mr-3 text-sm">01</span>
            Informações que Coletamos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
              <h3 className="text-amber-500 font-bold mb-2">Dados de Registo</h3>
              <p className="text-sm">Nome, endereço de e-mail e informações de contacto necessárias para criar a sua conta e processar pagamentos via MULTICAIXA EXPRESS.</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
              <h3 className="text-amber-500 font-bold mb-2">Dados de Utilização</h3>
              <p className="text-sm">Informações sobre as tarefas concluídas, anúncios visualizados e o seu progresso de ganhos na plataforma.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <span className="w-8 h-8 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mr-3 text-sm">02</span>
            Como Usamos os Seus Dados
          </h2>
          <ul className="list-none space-y-3">
            {[
              "Para processar e validar as suas recompensas diárias.",
              "Para realizar transferências de saldo via MULTICAIXA EXPRESS.",
              "Para prevenir fraudes e garantir a segurança da comunidade.",
              "Para comunicar atualizações importantes sobre a plataforma."
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <i className="fa-solid fa-check text-amber-500 mt-1.5 mr-3 text-xs"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <span className="w-8 h-8 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mr-3 text-sm">03</span>
            Publicidade e Cookies (Google AdSense)
          </h2>
          <div className="bg-amber-500/5 border border-amber-500/20 p-6 rounded-2xl">
            <p className="mb-4">
              O Kumbu na Net utiliza o Google AdSense para exibir anúncios. O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios neste site.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
              <li>O uso do cookie DART permite ao Google exibir anúncios com base nas visitas dos utilizadores ao nosso e a outros sites na Internet.</li>
              <li>Os utilizadores podem desativar o uso do cookie DART visitando a Política de Privacidade da rede de conteúdo e anúncios do Google.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <span className="w-8 h-8 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mr-3 text-sm">04</span>
            Segurança dos Dados
          </h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger as suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, lembre-se que nenhum método de transmissão pela Internet é 100% seguro.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <span className="w-8 h-8 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mr-3 text-sm">05</span>
            Os Seus Direitos
          </h2>
          <p>
            Como utilizador angolano, tem o direito de aceder, corrigir ou solicitar a eliminação dos seus dados pessoais a qualquer momento através das definições do seu perfil ou contactando o nosso suporte.
          </p>
        </section>

        <footer className="pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-white font-bold">Dúvidas sobre Privacidade?</h4>
              <p className="text-sm">Entre em contacto com a nossa equipa de proteção de dados.</p>
            </div>
            <a href="mailto:privacidade@kumbunanet.ao" className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10">
              privacidade@kumbunanet.ao
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
