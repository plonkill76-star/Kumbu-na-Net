
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-300">
      <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidade</h1>
      <div className="glass p-8 rounded-3xl space-y-6 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">1. Informações Coletadas</h2>
          <p>No Kumbu na Net, coletamos informações básicas de registro, como email e nome, para garantir a segurança da sua conta e o processamento de pagamentos via MULTICAIXA EXPRESS.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">2. Uso de Cookies</h2>
          <p>Utilizamos cookies para melhorar sua experiência e para que parceiros como o Google AdSense possam exibir anúncios relevantes baseados em suas visitas anteriores ao Kumbu na Net.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">3. Terceiros</h2>
          <p>Trabalhamos com fornecedores de terceiros, incluindo o Google, que utilizam cookies para veicular anúncios com base em visitas anteriores dos usuários ao nosso website ou a outros websites na internet.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
