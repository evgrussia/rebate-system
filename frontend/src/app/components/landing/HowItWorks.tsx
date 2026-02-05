import { Link2, Building2, Wallet } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Link2,
      title: 'Зарегистрируйтесь',
      description: 'Создайте аккаунт за 30 секунд. Через email или Telegram.',
      color: 'bg-blue-100 text-[#1E40AF]'
    },
    {
      number: '2',
      icon: Building2,
      title: 'Подключите биржу',
      description: 'Перейдите на биржу по нашей реферальной ссылке и начните торговать.',
      color: 'bg-emerald-100 text-[#059669]'
    },
    {
      number: '3',
      icon: Wallet,
      title: 'Получайте cashback',
      description: 'Rebate начисляется автоматически. Выводите в USDT на ваш кошелёк.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#111827] mb-4">Как это работает</h2>
          <p className="text-lg text-[#6B7280]">Три простых шага до cashback</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting lines */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 border-t-2 border-dashed border-[#E5E7EB] z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#059669]">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1E40AF] text-white font-bold text-sm mb-3">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#111827] mb-2">{step.title}</h3>
                <p className="text-[#6B7280]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
