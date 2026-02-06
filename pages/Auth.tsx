
import React, { useState } from 'react';
import { User } from '../types';

interface AuthProps {
  onLogin: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: isLogin ? 'Usuário VIP' : name,
        email: email,
        balance: 0,
        multicaixaNumber: phone || '',
        totalTasksCompleted: 0,
        dailyAdsCount: 0,
        dailyVideosCount: 0,
        lastResetDate: new Date().toISOString().split('T')[0],
        avatar: `https://picsum.photos/seed/${email}/200`,
        isVerified: isLogin
      };
      onLogin(mockUser);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md glass p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-lock text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl font-bold">{isLogin ? 'Kumbu na Net' : 'Criar Nova Conta'}</h2>
          <p className="text-slate-400 mt-2">Ganhe até 2.200 Kz por dia assistindo anúncios.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Nome Completo</label>
              <input 
                type="text" required value={name} onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 px-4 focus:border-amber-500 outline-none"
                placeholder="Seu nome"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
            <input 
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 px-4 focus:border-amber-500 outline-none"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-slate-300">Senha</label>
            <input 
              type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 px-4 focus:border-amber-500 outline-none"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" disabled={isSubmitting}
            className="w-full py-4 gold-gradient rounded-xl font-bold text-lg shadow-lg flex items-center justify-center"
          >
            {isSubmitting ? <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div> : (isLogin ? 'Entrar' : 'Registrar')}
          </button>
        </form>

        <div className="mt-8 text-center text-slate-400 text-sm">
          {isLogin ? (
            <p>Novo aqui? <button onClick={() => setIsLogin(false)} className="text-amber-500 font-bold hover:underline">Criar conta</button></p>
          ) : (
            <p>Já tem conta? <button onClick={() => setIsLogin(true)} className="text-amber-500 font-bold hover:underline">Fazer login</button></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
