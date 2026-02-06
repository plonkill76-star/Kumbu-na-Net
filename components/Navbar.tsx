
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
            <i className="fa-solid fa-money-bill-trend-up text-white text-xl"></i>
          </div>
          <span className="text-xl font-bold tracking-tighter">
            KUMBU<span className="text-amber-500">NANET</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-amber-500 transition-colors">Início</Link>
          {user ? (
            <>
              <Link to="/tasks" className="hover:text-amber-500 transition-colors">Tarefas</Link>
              <Link to="/dashboard" className="hover:text-amber-500 transition-colors">Painel</Link>
              <div className="flex items-center space-x-4 ml-4">
                <div className="text-right">
                  <p className="text-xs text-slate-400">Saldo Atual</p>
                  <p className="font-bold text-amber-500">{user.balance.toLocaleString('pt-AO')} Kz</p>
                </div>
                <Link to="/profile" className="w-10 h-10 rounded-full border-2 border-amber-500 overflow-hidden">
                  <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                </Link>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-red-900/40 text-sm transition-all"
                >
                  Sair
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/auth" className="px-6 py-2 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all">Entrar</Link>
              <Link to="/auth" className="px-6 py-2 rounded-lg gold-gradient text-white font-semibold shadow-lg shadow-amber-500/20">Registrar</Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 pb-4 animate-in slide-in-from-top duration-300">
          <Link to="/" className="block py-2 hover:text-amber-500" onClick={() => setIsOpen(false)}>Início</Link>
          {user ? (
            <>
              <Link to="/tasks" className="block py-2 hover:text-amber-500" onClick={() => setIsOpen(false)}>Tarefas</Link>
              <Link to="/dashboard" className="block py-2 hover:text-amber-500" onClick={() => setIsOpen(false)}>Painel</Link>
              <Link to="/profile" className="block py-2 hover:text-amber-500" onClick={() => setIsOpen(false)}>Meu Perfil</Link>
              <div className="pt-2 border-t border-slate-800">
                <p className="text-amber-500 font-bold mb-4">{user.balance.toLocaleString('pt-AO')} Kz</p>
                <button onClick={handleLogout} className="w-full py-3 bg-red-900/40 rounded-lg text-white">Sair</button>
              </div>
            </>
          ) : (
            <div className="space-y-3 pt-2">
              <Link to="/auth" className="block w-full py-3 text-center border border-amber-500 rounded-lg" onClick={() => setIsOpen(false)}>Entrar</Link>
              <Link to="/auth" className="block w-full py-3 text-center gold-gradient rounded-lg font-bold shadow-lg" onClick={() => setIsOpen(false)}>Registrar</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
