import { Shield, Zap, Globe, BarChart3, Smartphone, TrendingUp } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Без KYC',
      description: 'Мы не требуем верификацию — идентификация через биржу',
      color: 'bg-blue-100 text-[#1E40AF]'
    },
    {
      icon: Zap,
      title: 'Автоматические начисления',
      description: 'Rebate рассчитывается и начисляется без вашего участия',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Globe,
      title: 'Глобальный сервис',
      description: 'Работаем по всему миру — СНГ, Азия, Европа, Латинская Америка',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Прозрачная статистика',
      description: 'Видите точные данные: объёмы, комиссии, начисленный rebate',
      color: 'bg-emerald-100 text-[#059669]'
    },
    {
      icon: Smartphone,
      title: 'Web + Telegram',
      description: 'Полноценный личный кабинет в браузере и в Telegram-боте',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'До 40% возврата',
      description: 'Возвращаем максимальную долю партнёрских комиссий',
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#111827] mb-4">Почему CryptoRebate</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full ${benefit.color} flex items-center justify-center mb-4`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">{benefit.title}</h3>
              <p className="text-[#6B7280]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
