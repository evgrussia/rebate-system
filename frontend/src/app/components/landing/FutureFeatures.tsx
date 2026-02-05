import { Badge } from '../ui/badge';

export function FutureFeatures() {
  const features = [
    {
      emoji: '📱',
      title: 'Мобильное приложение',
      description: 'iOS и Android'
    },
    {
      emoji: '📊',
      title: 'Расширенная аналитика',
      description: 'Графики доходности, сравнение бирж'
    },
    {
      emoji: '⭐',
      title: 'VIP-программа',
      description: 'Увеличенные ставки для крупных трейдеров'
    },
    {
      emoji: '🔌',
      title: 'API для партнёров',
      description: 'Интеграция CryptoRebate в ваши сервисы'
    },
    {
      emoji: '🤖',
      title: 'AI-рекомендации',
      description: 'Подбор оптимальной биржи и стратегии'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#111827] mb-4">Скоро в CryptoRebate</h2>
          <p className="text-lg text-[#6B7280]">Мы постоянно развиваемся</p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-4 -mx-6 px-6 scrollbar-hide">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-72 bg-[#F9FAFB] rounded-xl p-6 border-2 border-dashed border-[#E5E7EB] relative"
            >
              <Badge className="absolute top-4 right-4 bg-[#FEF3C7] text-[#D97706] hover:bg-[#FEF3C7]">
                Скоро
              </Badge>
              
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">{feature.title}</h3>
              <p className="text-[#6B7280]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
