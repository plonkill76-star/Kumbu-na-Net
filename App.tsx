
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import About from './pages/About';
import Contact from './pages/Contact';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('kumbu_user');
    const cookiesAccepted = localStorage.getItem('cookies_accepted');
    
    if (savedUser) {
      const parsedUser: User = JSON.parse(savedUser);
      
      // Lógica de Reset Diário
      const today = new Date().toISOString().split('T')[0];
      if (parsedUser.lastResetDate !== today) {
        parsedUser.dailyAdsCount = 0;
        parsedUser.dailyVideosCount = 0;
        parsedUser.lastResetDate = today;
        localStorage.setItem('kumbu_user', JSON.stringify(parsedUser));
      }
      
      setUser(parsedUser);
    }
    
    if (!cookiesAccepted) {
      setShowCookieBanner(true);
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('kumbu_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kumbu_user');
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('kumbu_user', JSON.stringify(updatedUser));
  };

  const acceptCookies = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setShowCookieBanner(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar user={user} onLogout={logout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/auth" 
              element={!user ? <Auth onLogin={login} /> : <Navigate to="/dashboard" />} 
            />
            <Route 
              path="/dashboard" 
              element={user ? <Dashboard user={user} onUpdateUser={updateUser} /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/tasks" 
              element={user ? <Tasks user={user} onUpdateUser={updateUser} /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/profile" 
              element={user ? <Profile user={user} onUpdateUser={updateUser} /> : <Navigate to="/auth" />} 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />

        {showCookieBanner && (
          <div className="fixed bottom-0 left-0 right-0 z-[100] p-6">
            <div className="max-w-4xl mx-auto glass p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border-amber-500/30">
              <p className="text-sm text-slate-300 text-center md:text-left">
                Utilizamos cookies para personalizar anúncios e melhorar a sua experiência no Kumbu na Net. Ao continuar navegando, você concorda com a nossa <Link to="/privacy" className="text-amber-500 hover:underline">Política de Privacidade</Link>.
              </p>
              <button 
                onClick={acceptCookies}
                className="whitespace-nowrap px-8 py-3 gold-gradient text-white font-bold rounded-xl shadow-lg"
              >
                Aceitar Cookies
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
