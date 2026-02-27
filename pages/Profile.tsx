
import React, { useState, useRef } from 'react';
import { User } from '../types';

interface ProfileProps {
  user: User;
  onUpdateUser: (user: User) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onUpdateUser }) => {
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.multicaixaNumber);
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Limpar espaços e caracteres não numéricos do telefone
    const cleanPhone = phone.replace(/\D/g, '');
    
    setTimeout(() => {
      onUpdateUser({
        ...user,
        name,
        multicaixaNumber: cleanPhone
      });
      setIsSaving(false);
      alert('Perfil atualizado com sucesso!');
    }, 1000);
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("A imagem é muito grande. Escolha uma foto com menos de 2MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onUpdateUser({
          ...user,
          avatar: base64String
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-12">Meu Perfil</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1 text-center">
          <div 
            className="relative inline-block mb-6 group cursor-pointer"
            onClick={handleAvatarClick}
          >
            <img 
              src={user.avatar} 
              alt="Avatar" 
              className="w-40 h-40 rounded-[40px] border-4 border-amber-500 object-cover p-1 shadow-2xl transition-transform group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-slate-900/40 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <div className="bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                 <i className="fa-solid fa-camera text-slate-900 text-xl"></i>
               </div>
            </div>
            {/* Hidden File Input */}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange}
            />
          </div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-slate-400 text-sm mb-4">{user.email}</p>
          <div className="bg-green-500/10 text-green-500 px-4 py-1 rounded-full text-xs font-bold inline-block border border-green-500/20">
            Conta Verificada
          </div>
          <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest">Clique na foto para alterar</p>
        </div>

        <div className="md:col-span-2 glass p-8 rounded-[32px] border-slate-800">
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Nome Completo</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 focus:border-amber-500 outline-none transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">E-mail de Cadastro (Bloqueado)</label>
              <input 
                type="email" 
                disabled
                value={user.email}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-slate-500 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Nº MULTICAIXA EXPRESS (9 dígitos)</label>
              <div className="relative">
                <i className="fa-solid fa-credit-card absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
                <input 
                  type="text" 
                  value={phone}
                  maxLength={9}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: 923123456"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-12 pr-4 focus:border-amber-500 outline-none transition-all font-mono"
                />
              </div>
              <p className="text-[10px] text-amber-500/70 mt-2">Importante: Os pagamentos são feitos exclusivamente para este número.</p>
            </div>

            <button 
              type="submit"
              disabled={isSaving}
              className="w-full py-4 gold-gradient rounded-xl font-bold text-lg shadow-lg flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {isSaving ? <i className="fa-solid fa-spinner animate-spin mr-2"></i> : 'Atualizar Dados'}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <h3 className="text-red-500 font-bold mb-4">Zona Crítica</h3>
            <button className="text-sm text-slate-500 hover:text-red-500 flex items-center transition-colors">
              <i className="fa-solid fa-trash-can mr-2"></i> Solicitar encerramento de conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
