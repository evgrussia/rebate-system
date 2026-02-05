import { ArrowRight, ArrowDown, Check } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-blue-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'radial-gradient(circle, #1E40AF 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-[#111827] leading-tight">
              Получай cashback с каждой сделки на 11 криптобиржах
            </h1>
            
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Зарегистрируйся один раз — получай до 40% возврата торговых комиссий на Bybit, Binance, OKX, MEXC и ещё 7 биржах. Вывод в USDT.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90 h-12 px-8" asChild>
                <Link to="/register">
                  Получить cashback <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-[#E5E7EB]">
                Узнать больше <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#059669] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#374151] font-medium">Без KYC</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#059669] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#374151] font-medium">11 бирж</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#059669] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#374151] font-medium">Вывод в USDT</span>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Floating coins */}
              <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#F7931A] to-[#F7931A]/60 rounded-full shadow-2xl animate-pulse-slow flex items-center justify-center">
                <span className="text-4xl">₿</span>
              </div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#627EEA] to-[#627EEA]/60 rounded-full shadow-2xl animate-pulse-slow" style={{animationDelay: '0.5s'}}>
                <div className="w-full h-full flex items-center justify-center text-3xl">Ξ</div>
              </div>
              <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-[#26A17B] to-[#26A17B]/60 rounded-full shadow-2xl animate-pulse-slow" style={{animationDelay: '1s'}}>
                <div className="w-full h-full flex items-center justify-center text-white font-bold">₮</div>
              </div>
              <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-[#F3BA2F] to-[#F3BA2F]/60 rounded-full shadow-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}