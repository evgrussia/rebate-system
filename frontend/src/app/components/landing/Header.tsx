import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#how-it-works', label: 'Как работает' },
    { href: '#exchanges', label: 'Биржи' },
    { href: '#calculator', label: 'Калькулятор' },
    { href: '#faq', label: 'FAQ' },
  ];

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#374151] hover:text-[#1E40AF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
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

          {/* Mobile Burger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[#374151] hover:text-[#1E40AF] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  Войти
                </Link>
              </Button>
              <Button className="w-full bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90" asChild>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  Начать
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
