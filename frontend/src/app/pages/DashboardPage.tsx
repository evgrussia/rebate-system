import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  TrendingUp,
  DollarSign,
  Building2,
  Gift,
  Wallet,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
  Copy,
  CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function generateChartData(period: string) {
  const points: { date: string; rebate: number }[] = [];
  const count = period === '7d' ? 7 : period === '30d' ? 30 : period === '90d' ? 90 : 180;
  const now = new Date();
  for (let i = count; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    points.push({
      date: date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
      rebate: Math.round((Math.random() * 150 + 50) * 100) / 100,
    });
  }
  return points;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [copiedReferral, setCopiedReferral] = useState(false);
  const [chartPeriod, setChartPeriod] = useState('30d');
  const [chartData] = useState(() => generateChartData('30d'));

  const stats = [
    {
      icon: Wallet,
      label: 'Баланс',
      value: '12,543.50',
      currency: 'USDT',
      change: '+12.5%',
      isPositive: true,
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      label: 'Всего заработано',
      value: '24,847.20',
      currency: 'USDT',
      change: '+8.3%',
      isPositive: true,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      label: 'Активных бирж',
      value: '5',
      subValue: 'из 11 доступных',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      label: 'Ожидает вывода',
      value: '247.30',
      currency: 'USDT',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const recentActivity = [
    { exchange: 'Binance', amount: 124.50, type: 'rebate', date: '2 часа назад', status: 'completed' },
    { exchange: 'Bybit', amount: 89.30, type: 'rebate', date: '5 часов назад', status: 'completed' },
    { exchange: 'MEXC', amount: 500.00, type: 'withdrawal', date: 'Вчера', status: 'pending' },
    { exchange: 'OKX', amount: 67.80, type: 'rebate', date: 'Вчера', status: 'completed' },
    { exchange: 'Binance', amount: 45.20, type: 'referral', date: '2 дня назад', status: 'completed' }
  ];

  const connectedExchanges = [
    { name: 'Binance', rebate: '40%', earnings: 4520.30, logo: '\uD83D\uDFE1' },
    { name: 'Bybit', rebate: '45%', earnings: 3210.50, logo: '\uD83D\uDFE0' },
    { name: 'MEXC', rebate: '60%', earnings: 2850.80, logo: '\uD83D\uDD35' },
    { name: 'OKX', rebate: '35%', earnings: 1520.40, logo: '\u26AB' },
    { name: 'Gate.io', rebate: '50%', earnings: 441.50, logo: '\uD83D\uDFE2' },
  ];

  const handleCopyReferral = () => {
    const referralLink = `https://cryptorebate.com/ref/${user?.referralCode}`;
    navigator.clipboard.writeText(referralLink);
    setCopiedReferral(true);
    toast.success('Реферальная ссылка скопирована!');
    setTimeout(() => setCopiedReferral(false), 2000);
  };

  const periods = [
    { key: '7d', label: '7 дней' },
    { key: '30d', label: '30 дней' },
    { key: '90d', label: '90 дней' },
    { key: 'all', label: 'Всё время' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                {stat.change && (
                  <div className={`flex items-center gap-1 text-xs sm:text-sm font-medium ${stat.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.isPositive ? <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" /> : <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {stat.change}
                  </div>
                )}
              </div>
              <div>
                <div className="text-xs sm:text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</span>
                  {stat.currency && <span className="text-xs sm:text-sm font-mono text-gray-500">{stat.currency}</span>}
                </div>
                {stat.subValue && <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.subValue}</div>}
              </div>
            </Card>
          ))}
        </div>

        {/* Rebate Chart */}
        <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">График кэшбэка</h3>
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {periods.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setChartPeriod(p.key)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-md transition-all ${
                    chartPeriod === p.key ? 'bg-white text-blue-600 shadow-sm font-medium' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <div className="h-56 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorDashRebate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#6B7280' }} tickLine={false} axisLine={{ stroke: '#E5E7EB' }} />
                <YAxis tick={{ fontSize: 11, fill: '#6B7280' }} tickLine={false} axisLine={{ stroke: '#E5E7EB' }} tickFormatter={(v) => `$${v}`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', fontSize: '13px' }}
                  formatter={(value: number) => [`$${value.toFixed(2)}`, 'Кэшбэк']}
                />
                <Area type="monotone" dataKey="rebate" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorDashRebate)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Referral Card */}
        <Card className="p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-emerald-600 border-none text-white">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="text-sm sm:text-base font-semibold">Реферальная программа</h3>
            </div>
            <p className="text-xs sm:text-sm text-white/90 mb-4 max-w-2xl">
              Приглашайте друзей и получайте 10% от их кэшбэка навсегда. Ваша реферальная ссылка:
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 font-mono text-xs sm:text-sm overflow-x-auto">
                <span className="whitespace-nowrap">https://cryptorebate.com/ref/{user?.referralCode}</span>
              </div>
              <Button onClick={handleCopyReferral} className="bg-white text-blue-600 hover:bg-white/90 w-full sm:w-auto" size="sm">
                {copiedReferral ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copiedReferral ? 'Скопировано' : 'Копировать'}
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Connected Exchanges */}
          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Подключенные биржи</h3>
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">Добавить</span>
              </Button>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {connectedExchanges.map((exchange, index) => (
                <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="text-xl sm:text-2xl flex-shrink-0">{exchange.logo}</div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm sm:text-base text-gray-900 truncate">{exchange.name}</div>
                      <div className="text-xs sm:text-sm text-emerald-600 font-medium">{exchange.rebate} кэшбэк</div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-mono font-semibold text-sm sm:text-base text-gray-900">
                      ${exchange.earnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-xs text-gray-500">заработано</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Последняя активность</h3>
              <Button variant="ghost" size="sm" className="text-blue-600">
                <span className="hidden sm:inline">Смотреть всё</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 sm:ml-2" />
              </Button>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'rebate' ? 'bg-blue-100' : activity.type === 'withdrawal' ? 'bg-purple-100' : 'bg-emerald-100'
                    }`}>
                      {activity.type === 'rebate' && <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />}
                      {activity.type === 'withdrawal' && <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />}
                      {activity.type === 'referral' && <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 text-xs sm:text-sm truncate">{activity.exchange}</div>
                      <div className="text-xs text-gray-500">{activity.date}</div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={`font-mono font-semibold text-sm sm:text-base ${activity.type === 'withdrawal' ? 'text-purple-600' : 'text-emerald-600'}`}>
                      {activity.type === 'withdrawal' ? '-' : '+'}${activity.amount.toFixed(2)}
                    </div>
                    <div className={`text-xs ${activity.status === 'completed' ? 'text-emerald-600' : 'text-orange-600'}`}>
                      {activity.status === 'completed' ? 'Завершено' : 'В обработке'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
