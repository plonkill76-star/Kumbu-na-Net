
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import { DAILY_LIMITS, MOCK_TRANSACTIONS } from '../constants';
import AdSenseSlot from '../components/AdSenseSlot';

interface DashboardProps {
  user: User;
  onUpdateUser?: (user: User) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const dailyTotal = (user.dailyAdsCount * DAILY_LIMITS.REWARD_AD) + (user.dailyVideosCount * DAILY_LIMITS.REWARD_VIDEO);
  const canWithdraw = user.balance >= DAILY_LIMITS.MIN_WITHDRAWAL;

  return (
    <div className="max-w-md mx-auto px-4 py-8 md:max-w-4xl">
      {/* Header da Carteira */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-slate-500 text-sm">Bem-vindo de volta,</p>
          <h1 className="text-xl font-bold">{user.name}</h1>
        </div>
        <Link to="/profile" className="w-12 h-12 rounded-full border-2 border-amber-500 p-0.5">
          <img src={user.avatar} alt="Perfil" className="w-full h-full rounded-full object-cover" />
        </Link>
      </div>

      {/* Cartão Virtual Estilizado */}
      <div className="relative overflow-hidden gold-gradient rounded-[32px] p-8 shadow-2xl shadow-amber-500/20 mb-10 min-h-[220px] flex flex-col justify-between">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <i className="fa-solid fa-rss text-9xl -rotate-45"></i>
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-2">
            <span className="text-white/70 text-sm font-medium uppercase tracking-widest">Saldo Disponível</span>
            <i className="fa-solid fa-brazilian-real-sign text-white/30 text-xl"></i>
          </div>
          <p className="text-5xl font-black text-white tracking-tighter">
            {user.balance.toLocaleString('pt-AO')} <span className="text-2xl opacity-80">Kz</span>
          </p>
        </div>
        <div className="relative z-10 flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-white/60 text-[10px] uppercase">Titular da Conta</p>
            <p className="text-white font-bold tracking-widest">{user.name.toUpperCase()}</p>
          </div>
          <div className="w-12 h-8 bg-white/20 rounded-md backdrop-blur-md flex items-center justify-center border border-white/30">
            <div className="w-6 h-6 bg-amber-200 rounded-full opacity-50 -mr-2"></div>
            <div className="w-6 h-6 bg-amber-400 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Ações Rápidas */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <Link to="/tasks" className="flex flex-col items-center space-y-2 group">
          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-amber-500 text-xl border border-slate-800 group-hover:bg-amber-500 group-hover:text-white transition-all">
            <i className="fa-solid fa-plus"></i>
          </div>
          <span className="text-xs font-bold text-slate-400">Ganhar</span>
        </Link>
        <button 
          onClick={() => {
            if (!canWithdraw) alert(`Mínimo de ${DAILY_LIMITS.MIN_WITHDRAWAL.toLocaleString('pt-AO')} Kz necessário.`);
            else alert("Transferência para MCX EXPRESS solicitada!");
          }}
          className="flex flex-col items-center space-y-2 group"
        >
          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-500 text-xl border border-slate-800 group-hover:bg-blue-500 group-hover:text-white transition-all">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
          <span className="text-xs font-bold text-slate-400">Sacar</span>
        </button>
        <button className="flex flex-col items-center space-y-2 group">
          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-green-500 text-xl border border-slate-800 group-hover:bg-green-500 group-hover:text-white transition-all">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <span className="text-xs font-bold text-slate-400">Extrato</span>
        </button>
      </div>

      <AdSenseSlot slot="2233445566" />

      {/* Estatísticas e Metas */}
      <div className="glass rounded-[32px] p-6 mb-10">
        <h3 className="font-bold mb-6 flex items-center">
          <i className="fa-solid fa-bullseye text-amber-500 mr-2"></i>
          Meta de Hoje
        </h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-400">Progresso Diário</span>
              <span className="text-amber-500 font-bold">{dailyTotal} / 2.200 Kz</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 transition-all duration-1000" 
                style={{ width: `${(dailyTotal / 2200) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Histórico de Transações */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg">Atividade Recente</h3>
          <button className="text-amber-500 text-sm font-bold">Ver Tudo</button>
        </div>
        <div className="space-y-4">
          {/* Mock de Entradas (Tarefas) */}
          <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-arrow-down-left"></i>
              </div>
              <div>
                <p className="font-bold text-sm">Visualização de Vídeo</p>
                <p className="text-[10px] text-slate-500 italic">Tarefa Concluída Hoje</p>
              </div>
            </div>
            <p className="text-green-500 font-black">+300 Kz</p>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-arrow-down-left"></i>
              </div>
              <div>
                <p className="font-bold text-sm">Anúncio Google Ads</p>
                <p className="text-[10px] text-slate-500 italic">Tarefa Concluída Hoje</p>
              </div>
            </div>
            <p className="text-green-500 font-black">+100 Kz</p>
          </div>

          {/* Mock de Saída */}
          {MOCK_TRANSACTIONS.map(tx => (
            <div key={tx.id} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 ${tx.status === 'CONCLUÍDO' ? 'bg-blue-500/10 text-blue-500' : 'bg-slate-800 text-slate-400'} rounded-xl flex items-center justify-center`}>
                  <i className="fa-solid fa-arrow-up-right"></i>
                </div>
                <div>
                  <p className="font-bold text-sm">Saque MCX EXPRESS</p>
                  <p className="text-[10px] text-slate-500 italic">{tx.date} • {tx.status}</p>
                </div>
              </div>
              <p className="text-slate-100 font-black">-{tx.amount.toLocaleString('pt-AO')} Kz</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
