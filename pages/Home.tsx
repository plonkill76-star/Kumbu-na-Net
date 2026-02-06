
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import AdSenseSlot from '../components/AdSenseSlot';

interface HomeProps {
  user: User | null;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-amber-500/20 px-4 py-2 rounded-full mb-8 animate-bounce">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-amber-500">Pagamentos via MCX EXPRESS Ativos</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Ganhe Kumbu na Net <br />
            <span className="text-transparent bg-clip-text gold-gradient">Assistindo Conteúdo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
            A maior plataforma de monetização de tempo livre em Angola. Transforme o seu engajamento em saldo no MULTICAIXA EXPRESS de forma simples e segura.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to={user ? "/tasks" : "/auth"} 
              className="w-full sm:w-auto px-8 py-4 gold-gradient rounded-xl font-bold text-lg shadow-2xl shadow-amber-500/40 hover:scale-105 transition-transform"
            >
              Começar Agora
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors">
              Como Funciona?
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Slot for Approval */}
      <div className="max-w-4xl mx-auto px-6">
        <AdSenseSlot slot="1234567890" />
      </div>

      {/* Stats Section */}
      <section className="bg-slate-900/50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-extrabold text-amber-500 mb-2">15k+</p>
            <p className="text-slate-400 text-sm">Usuários Ativos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-amber-500 mb-2">2.5M</p>
            <p className="text-slate-400 text-sm">Kwanzas Pagos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-amber-500 mb-2">100k</p>
            <p className="text-slate-400 text-sm">Interações Concluídas</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-amber-500 mb-2">24h</p>
            <p className="text-slate-400 text-sm">Saque Médio</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engajamento Simples</h2>
          <p className="text-slate-400">Três passos para sua primeira recompensa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="glass p-8 rounded-3xl relative">
            <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">1</div>
            <h3 className="text-xl font-bold mb-4">Crie sua Conta</h3>
            <p className="text-slate-400">Registe-se com segurança usando seu email e telefone verificado.</p>
          </div>
          
          <div className="glass p-8 rounded-3xl relative">
            <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">2</div>
            <h3 className="text-xl font-bold mb-4">Engaje com Marcas</h3>
            <p className="text-slate-400">Escolha conteúdos publicitários de marcas parceiras disponíveis diariamente.</p>
          </div>
          
          <div className="glass p-8 rounded-3xl relative">
            <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">3</div>
            <h3 className="text-xl font-bold mb-4">Receba Recompensas</h3>
            <p className="text-slate-400">Solicite o seu saque para o MCX EXPRESS após atingir o limite mínimo.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass gold-gradient rounded-[40px] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <i className="fa-solid fa-coins text-9xl"></i>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Pronto para começar?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de angolanos que já estão aproveitando as recompensas do Kumbu na Net.
          </p>
          <Link 
            to="/auth" 
            className="inline-block px-10 py-5 bg-white text-amber-600 rounded-2xl font-extrabold text-xl shadow-xl hover:bg-slate-100 transition-colors"
          >
            Criar Minha Conta Grátis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
