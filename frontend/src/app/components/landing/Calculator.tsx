import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Slider } from '../ui/slider';
import { ArrowRight } from 'lucide-react';

export function Calculator() {
  const [volume, setVolume] = useState(50000);
  const [exchange, setExchange] = useState('MEXC');

  const calculateRebate = () => {
    const fee = volume * 0.001; // 0.1% fee
    const affiliateRate = 0.50; // 50% for MEXC
    const traderShare = 0.60; // 60% share
    return fee * affiliateRate * traderShare;
  };

  const monthlyRebate = calculateRebate();
  const yearlyRebate = monthlyRebate * 12;

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#111827] mb-4">Калькулятор cashback</h2>
          <p className="text-lg text-[#6B7280]">Узнайте, сколько вы можете экономить каждый месяц</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-[#E5E7EB]">
            <div className="space-y-6">
              {/* Volume input */}
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Ваш месячный объём торгов
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">$</span>
                  <Input 
                    type="number"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="pl-8 h-12 text-lg"
                  />
                </div>
              </div>

              {/* Slider */}
              <div className="px-2">
                <Slider 
                  value={[volume]}
                  onValueChange={(values) => setVolume(values[0])}
                  min={1000}
                  max={500000}
                  step={1000}
                  className="[&_[role=slider]]:bg-[#059669] [&_[role=slider]]:border-[#059669]"
                />
                <div className="flex justify-between text-xs text-[#9CA3AF] mt-2">
                  <span>$1k</span>
                  <span>$500k</span>
                </div>
              </div>

              {/* Exchange select */}
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Биржа
                </label>
                <Select value={exchange} onValueChange={setExchange}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MEXC">MEXC</SelectItem>
                    <SelectItem value="Bitget">Bitget</SelectItem>
                    <SelectItem value="Bybit">Bybit</SelectItem>
                    <SelectItem value="Binance">Binance</SelectItem>
                    <SelectItem value="OKX">OKX</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Results */}
              <div className="bg-[#ECFDF5] rounded-xl p-6 border border-[#059669]/20">
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium text-[#047857]">Ваш cashback:</p>
                  <p className="text-4xl font-bold text-[#059669]">
                    ~${monthlyRebate.toFixed(0)} / мес
                  </p>
                  <p className="text-xl text-[#047857]">
                    ~${yearlyRebate.toFixed(0)} / год
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full h-12 bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90">
                Начать получать cashback <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
