import { Badge } from '../ui/badge';

export function ExchangesSection() {
  const exchanges = [
    { name: 'MEXC', rate: 'до 50%', color: 'bg-blue-500' },
    { name: 'Bitget', rate: 'до 50%', color: 'bg-cyan-500' },
    { name: 'BingX', rate: 'до 45%', color: 'bg-purple-500' },
    { name: 'Weex', rate: 'до 40%', color: 'bg-indigo-500' },
    { name: 'Bybit', rate: 'до 40%', color: 'bg-yellow-500' },
    { name: 'Binance', rate: 'до 40%', color: 'bg-amber-500' },
    { name: 'Bitmart', rate: 'до 50%', color: 'bg-green-500' },
    { name: 'OKX', rate: 'до 40%', color: 'bg-slate-700' },
    { name: 'KuCoin', rate: 'до 40%', color: 'bg-emerald-500' },
    { name: 'HTX', rate: 'до 50%', color: 'bg-red-500' },
    { name: 'BloFin', rate: 'до 40%', color: 'bg-blue-600' }
  ];

  return (
    <section id="exchanges" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#111827] mb-4">11 бирж — одна платформа</h2>
          <p className="text-lg text-[#6B7280]">Все биржи доступны сразу после регистрации</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {exchanges.map((exchange, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-[#E5E7EB]"
            >
              {/* Logo placeholder */}
              <div className={`w-12 h-12 rounded-lg ${exchange.color} mb-4 flex items-center justify-center text-white font-bold text-sm`}>
                {exchange.name.slice(0, 2)}
              </div>
              
              {/* Exchange name */}
              <h3 className="text-lg font-semibold text-[#111827] mb-2">{exchange.name}</h3>
              
              {/* Rate badge */}
              <Badge className="bg-[#ECFDF5] text-[#059669] hover:bg-[#ECFDF5]">
                {exchange.rate}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
