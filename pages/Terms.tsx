
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-300">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Termos de Uso</h1>
      <div className="glass p-8 rounded-3xl space-y-6 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">1. Aceitação dos Termos</h2>
          <p>Ao acessar o Kumbu na Net, você concorda em cumprir estes termos de serviço e todas as leis aplicáveis em Angola.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">2. Uso de Conta</h2>
          <p>Cada usuário deve possuir apenas uma conta. O uso de bots, scripts ou qualquer forma de automação para assistir vídeos resultará no banimento imediato da conta sem direito a saque no Kumbu na Net.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">3. Pagamentos</h2>
          <p>Os pagamentos são processados via MULTICAIXA EXPRESS. O prazo médio de processamento é de 24h a 72h úteis após a solicitação, sujeito à verificação de atividade legítima.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
