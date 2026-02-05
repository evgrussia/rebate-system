import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Button } from '../ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md backdrop-blur-sm' : 'border-b border-[#E5E7EB]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1E40AF] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" stroke="white" strokeWidth="2"/>
                <path d="M10 6V10L13 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-[#111827]">CryptoRebate</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-[#374151] hover:text-[#1E40AF] transition-colors">Как работает</a>
            <a href="#exchanges" className="text-[#374151] hover:text-[#1E40AF] transition-colors">Биржи</a>
            <a href="#calculator" className="text-[#374151] hover:text-[#1E40AF] transition-colors">Калькулятор</a>
            <a href="#faq" className="text-[#374151] hover:text-[#1E40AF] transition-colors">FAQ</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-[#374151]" asChild>
              <Link to="/login">
                Войти
              </Link>
            </Button>
            <Button className="bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90" asChild>
              <Link to="/register">
                Начать
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}