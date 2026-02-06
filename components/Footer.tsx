
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 gold-gradient rounded flex items-center justify-center">
              <i className="fa-solid fa-money-bill-trend-up text-white text-sm"></i>
            </div>
            <span className="text-lg font-bold tracking-tighter">
              KUMBU<span className="text-amber-500">NANET</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Plataforma angolana de recompensas digitais. Ganhe saldo assistindo conteúdos de marcas parceiras.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Plataforma</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/tasks" className="hover:text-amber-500 transition-colors">Ver Tarefas</Link></li>
            <li><Link to="/dashboard" className="hover:text-amber-500 transition-colors">Painel de Controle</Link></li>
            <li><Link to="/about" className="hover:text-amber-500 transition-colors">Quem Somos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Suporte & Legal</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Fale Connosco</Link></li>
            <li><Link to="/terms" className="hover:text-amber-500 transition-colors">Termos de Uso</Link></li>
            <li><Link to="/privacy" className="hover:text-amber-500 transition-colors">Política de Privacidade</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Pagamentos</h4>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded-lg border border-slate-800">
              <i className="fa-solid fa-credit-card text-amber-500"></i>
              <span className="text-sm font-semibold">MULTICAIXA EXPRESS</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 transition-all">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 transition-all">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
        <p>&copy; 2024 Kumbu na Net Angola. Todos os direitos reservados.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <Link to="/privacy" className="hover:text-slate-300">Regras de Privacidade</Link>
          <Link to="/terms" className="hover:text-slate-300">Condições Gerais</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
