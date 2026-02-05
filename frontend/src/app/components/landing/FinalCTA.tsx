import { Link } from 'react-router';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] p-12 md:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Готовы экономить на комиссиях?
            </h2>
            
            <p className="text-xl text-white/80">
              Присоединяйтесь к тысячам трейдеров
            </p>

            <Button 
              size="lg" 
              className="bg-white text-[#1E40AF] hover:bg-white/90 h-14 px-10 text-lg font-semibold shadow-xl"
              asChild
            >
              <Link to="/register">
                Зарегистрироваться бесплатно <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <p className="text-sm text-white/70 pt-4">
              Бесплатно. Навсегда. Без скрытых платежей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}