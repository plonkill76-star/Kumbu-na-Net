
import React, { useState, useEffect } from 'react';
import { User, Task, TaskType } from '../types';
import { AVAILABLE_TASKS, DAILY_LIMITS } from '../constants';
import AdSenseSlot from '../components/AdSenseSlot';

interface TasksProps {
  user: User;
  onUpdateUser: (user: User) => void;
}

const Tasks: React.FC<TasksProps> = ({ user, onUpdateUser }) => {
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isWatching, setIsWatching] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const startTask = (task: Task) => {
    const isVideo = task.type !== TaskType.GOOGLE_ADS;
    if (isVideo && user.dailyVideosCount >= DAILY_LIMITS.VIDEOS) {
      alert(`Limite diário atingido!`);
      return;
    }
    if (!isVideo && user.dailyAdsCount >= DAILY_LIMITS.ADS) {
      alert(`Limite diário atingido!`);
      return;
    }
    setActiveTask(task);
    setTimeLeft(task.durationSeconds);
    setIsWatching(true);
  };

  useEffect(() => {
    let timer: any;
    if (isWatching && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isWatching && timeLeft === 0 && activeTask) {
      completeTask(activeTask);
    }
    return () => clearInterval(timer);
  }, [isWatching, timeLeft, activeTask]);

  const completeTask = (task: Task) => {
    setIsWatching(false);
    const isVideo = task.type !== TaskType.GOOGLE_ADS;
    const updatedUser = {
      ...user,
      balance: user.balance + task.reward,
      totalTasksCompleted: user.totalTasksCompleted + 1,
      dailyAdsCount: !isVideo ? user.dailyAdsCount + 1 : user.dailyAdsCount,
      dailyVideosCount: isVideo ? user.dailyVideosCount + 1 : user.dailyVideosCount,
    };
    onUpdateUser(updatedUser);
    setTimeout(() => {
      alert(`+${task.reward} Kz depositados na sua carteira!`);
      setActiveTask(null);
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8 md:max-w-4xl">
      <div className="mb-10">
        <h1 className="text-3xl font-black mb-2">Recarregar Carteira</h1>
        <p className="text-slate-400 text-sm">Escolha uma forma de aumentar o seu saldo hoje.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-10">
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center text-white">
              <i className="fa-solid fa-wallet"></i>
            </div>
            <div>
              <p className="text-xs text-slate-400">Saldo Atual</p>
              <p className="font-bold text-amber-500">{user.balance.toLocaleString('pt-AO')} Kz</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Meta do Dia</p>
            <p className="text-xs font-bold text-white">2.200 Kz</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-bold text-lg px-2">Oportunidades Disponíveis</h2>
        {AVAILABLE_TASKS.map((task) => {
          const isVideo = task.type !== TaskType.GOOGLE_ADS;
          const limitReached = isVideo ? user.dailyVideosCount >= DAILY_LIMITS.VIDEOS : user.dailyAdsCount >= DAILY_LIMITS.ADS;
          
          return (
            <div 
              key={task.id} 
              onClick={() => !limitReached && startTask(task)}
              className={`p-6 bg-slate-900 border border-slate-800 rounded-[28px] flex items-center justify-between transition-all active:scale-95 ${limitReached ? 'opacity-40 grayscale' : 'cursor-pointer hover:border-amber-500/50'}`}
            >
              <div className="flex items-center space-x-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${
                  task.type === TaskType.GOOGLE_ADS ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'
                }`}>
                  <i className={task.icon}></i>
                </div>
                <div>
                  <h3 className="font-bold text-sm">{task.title}</h3>
                  <div className="flex items-center space-x-3 mt-1 text-[10px] font-bold text-slate-500">
                    <span className="flex items-center"><i className="fa-regular fa-clock mr-1"></i> {formatTime(task.durationSeconds)}</span>
                    <span className="flex items-center"><i className="fa-solid fa-shield-check mr-1 text-green-500"></i> Verificado</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-black text-white">+{task.reward} <span className="text-xs opacity-50">Kz</span></p>
                {limitReached && <span className="text-[10px] text-red-500 font-bold">Esgotado</span>}
              </div>
            </div>
          );
        })}
      </div>

      {isWatching && activeTask && (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col p-4">
          <div className="flex justify-between items-center mb-6 pt-4">
             <div className="flex items-center space-x-3">
               <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center text-white text-xs">
                 <i className={activeTask.icon}></i>
               </div>
               <span className="text-sm font-bold">Processando Depósito</span>
             </div>
             <div className="bg-amber-500 text-slate-950 px-4 py-1.5 rounded-full font-black text-sm">
               {formatTime(timeLeft)}
             </div>
          </div>
          
          <div className="flex-grow flex flex-col justify-center items-center">
            <div className="w-full aspect-video bg-black rounded-[32px] overflow-hidden shadow-2xl border border-white/5 relative">
              {activeTask.type === TaskType.YOUTUBE ? (
                <iframe 
                  className="w-full h-full pointer-events-none" 
                  src={`${activeTask.url}?autoplay=1&controls=0&mute=1`} 
                  allow="autoplay"
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur-xl">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-amber-500 blur-3xl opacity-20 animate-pulse"></div>
                    <i className={`${activeTask.icon} text-7xl text-amber-500 relative z-10`}></i>
                  </div>
                  <p className="text-slate-300 font-bold text-lg animate-pulse">Sincronizando com AdSense...</p>
                  <p className="text-slate-500 text-xs mt-2 px-12 text-center">Aguarde a validação para receber seus {activeTask.reward} Kz.</p>
                </div>
              )}
              <div className="absolute inset-0 z-20"></div>
            </div>
            
            <button 
              onClick={() => { if(confirm("Cancelar depósito?")) setIsWatching(false); }}
              className="mt-12 text-slate-500 font-bold text-sm"
            >
              Cancelar e Voltar para Carteira
            </button>
          </div>
        </div>
      )}

      <AdSenseSlot slot="8877665544" />
    </div>
  );
};

export default Tasks;
