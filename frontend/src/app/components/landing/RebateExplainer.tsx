import { ArrowRight } from 'lucide-react';

export function RebateExplainer() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#111827] mb-4">Как рассчитывается rebate</h2>
        </div>

        {/* Flow diagram */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <p className="font-semibold text-[#1E40AF]">Вы торгуете</p>
            </div>
            <ArrowRight className="text-[#9CA3AF] rotate-90 md:rotate-0" />
            <div className="flex-1 bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center">
              <p className="font-semibold text-red-600">Биржа берёт комиссию</p>
            </div>
            <ArrowRight className="text-[#9CA3AF] rotate-90 md:rotate-0" />
            <div className="flex-1 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <p className="font-semibold text-purple-600">Биржа делится с нами</p>
            </div>
            <ArrowRight className="text-[#9CA3AF] rotate-90 md:rotate-0" />
            <div className="flex-1 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 text-center">
              <p className="font-semibold text-[#059669]">Мы возвращаем до 80%</p>
            </div>
          </div>
        </div>

        {/* Example calculation */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-8 border-2 border-[#E5E7EB]">
            <h3 className="text-xl font-semibold text-[#111827] mb-6 text-center">Пример расчёта</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E7EB]">
                <span className="text-[#6B7280]">Объём сделки:</span>
                <span className="font-semibold text-[#111827]">$10,000</span>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E7EB]">
                <span className="text-[#6B7280]">Комиссия биржи (0.1%):</span>
                <span className="font-semibold text-[#111827]">$10.00</span>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-[#E5E7EB]">
                <span className="text-[#6B7280]">Партнёрская комиссия (50%):</span>
                <span className="font-semibold text-[#111827]">$5.00</span>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#059669] font-medium">Ваш rebate (60% доли):</span>
                <span className="text-2xl font-bold text-[#059669]">$3.00</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#ECFDF5] rounded-lg border border-[#059669]/20">
              <p className="text-sm text-[#047857] text-center">
                💡 Чем больше торгуете, тем больше экономите
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
