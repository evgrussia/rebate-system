import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Алексей',
      exchanges: 'MEXC + Bybit',
      rating: 5,
      text: 'Экономлю $200 в месяц на комиссиях. Жалею что не узнал раньше.',
      initials: 'АТ'
    },
    {
      name: 'Мария',
      exchanges: 'Bybit',
      rating: 5,
      text: 'Простое подключение, всё прозрачно. Вижу каждую копейку.',
      initials: 'МК'
    },
    {
      name: 'Дмитрий',
      exchanges: 'OKX + BingX',
      rating: 4,
      text: 'Вывожу каждую неделю. Комиссия минимальная, всё моментально.',
      initials: 'ДП'
    }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#111827] mb-4">Трейдеры уже экономят</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote mark */}
              <div className="text-6xl text-[#E5E7EB] leading-none mb-4">"</div>
              
              {/* Text */}
              <p className="text-[#374151] mb-6 italic">{testimonial.text}</p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-[#E5E7EB]'}`}
                  />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-full bg-[#1E40AF] text-white flex items-center justify-center font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">{testimonial.name}</p>
                  <p className="text-sm text-[#6B7280]">{testimonial.exchanges}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
