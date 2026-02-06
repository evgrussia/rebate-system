import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useParams, useNavigate } from 'react-router';
import {
  ArrowLeft,
  Copy,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Calendar,
  BarChart3,
  ExternalLink,
  RefreshCw
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Mock data
const exchangeData: Record<string, {
  name: string;
  logo: string;
  rebateRate: string;
  isConnected: boolean;
  earnings: number;
  volume: number;
  lastSync: string;
  referralLink: string;
  monthlyEarnings: number;
  avgRebate: number;
}> = {
  '1': { name: 'Binance', logo: '\uD83D\uDFE1', rebateRate: '40%', isConnected: true, earnings: 4520.30, volume: 125000, lastSync: '5 минут назад', referralLink: 'https://accounts.binance.com/register?ref=CR_12345', monthlyEarnings: 1250.80, avgRebate: 38.5 },
  '2': { name: 'Bybit', logo: '\uD83D\uDFE0', rebateRate: '45%', isConnected: true, earnings: 3210.50, volume: 89000, lastSync: '10 минут назад', referralLink: 'https://www.bybit.com/invite?ref=CR_67890', monthlyEarnings: 980.40, avgRebate: 43.2 },
  '3': { name: 'MEXC', logo: '\uD83D\uDD35', rebateRate: '60%', isConnected: true, earnings: 2850.80, volume: 67000, lastSync: '15 минут назад', referralLink: 'https://www.mexc.com/register?inviteCode=CR_11111', monthlyEarnings: 870.20, avgRebate: 57.8 },
  '4': { name: 'OKX', logo: '\u26AB', rebateRate: '35%', isConnected: true, earnings: 1520.40, volume: 54000, lastSync: '1 час назад', referralLink: 'https://www.okx.com/join/CR_22222', monthlyEarnings: 420.60, avgRebate: 33.1 },
  '5': { name: 'Gate.io', logo: '\uD83D\uDFE2', rebateRate: '50%', isConnected: true, earnings: 441.50, volume: 12000, lastSync: '30 минут назад', referralLink: 'https://www.gate.io/signup/CR_33333', monthlyEarnings: 132.40, avgRebate: 48.5 },
};

function generateChartData(period: string) {
  const points: { date: string; rebate: number }[] = [];
  const count = period === '7d' ? 7 : period === '30d' ? 30 : period === '90d' ? 90 : 180;
  const now = new Date();

  for (let i = count; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    points.push({
      date: date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
      rebate: Math.round((Math.random() * 80 + 20) * 100) / 100,
    });
  }
  return points;
}

const recentTransactions = [
  { id: '1', type: 'rebate', pair: 'BTC/USDT', amount: 42.50, date: '2 часа назад', volume: 12500 },
  { id: '2', type: 'rebate', pair: 'ETH/USDT', amount: 28.30, date: '5 часов назад', volume: 8400 },
  { id: '3', type: 'rebate', pair: 'SOL/USDT', amount: 15.80, date: '8 часов назад', volume: 4200 },
  { id: '4', type: 'rebate', pair: 'MATIC/USDT', amount: 8.60, date: 'Вчера', volume: 2100 },
  { id: '5', type: 'rebate', pair: 'AVAX/USDT', amount: 22.40, date: 'Вчера', volume: 6300 },
  { id: '6', type: 'rebate', pair: 'DOGE/USDT', amount: 5.20, date: '2 дня назад', volume: 1500 },
];

export default function ExchangeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState(false);
  const [chartPeriod, setChartPeriod] = useState('30d');
  const [chartData] = useState(() => generateChartData('30d'));

  const exchange = id ? exchangeData[id] : null;

  if (!exchange) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-gray-600">Биржа не найдена</p>
          <Button variant="outline" className="mt-4" onClick={() => navigate('/exchanges')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к биржам
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  const handleCopyReferralLink = () => {
    navigator.clipboard.writeText(exchange.referralLink);
    setCopiedLink(true);
    toast.success('Реферальная ссылка скопирована!');
    setTimeout(() => setCopiedLink(false), 2000);
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
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => navigate('/exchanges')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Биржи
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{exchange.name}</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{exchange.logo}</div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{exchange.name}</h1>
                {exchange.isConnected && (
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Подключена</Badge>
                )}
              </div>
              <p className="text-gray-600 mt-1">До {exchange.rebateRate} кэшбэк с каждой сделки</p>
            </div>
          </div>
          <div className="flex gap-2 sm:ml-auto">
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Синхронизация
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Всего заработано</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">
                  ${exchange.earnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="text-xs sm:text-sm text-gray-600">За этот месяц</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">
                  ${exchange.monthlyEarnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Объём торгов</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">
                  ${exchange.volume.toLocaleString()}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Средний ребейт</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{exchange.avgRebate}%</div>
                <div className="text-xs text-gray-500">Последняя синхр: {exchange.lastSync}</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Referral Link */}
        <Card className="p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-emerald-600 border-none text-white">
          <div className="flex items-center gap-2 mb-2">
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            <h3 className="text-sm sm:text-base font-semibold">Реферальная ссылка {exchange.name}</h3>
          </div>
          <p className="text-xs sm:text-sm text-white/90 mb-4">
            Зарегистрируйтесь на {exchange.name} по этой ссылке для получения кэшбэка
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 font-mono text-xs sm:text-sm overflow-x-auto">
              <span className="whitespace-nowrap">{exchange.referralLink}</span>
            </div>
            <Button
              onClick={handleCopyReferralLink}
              className="bg-white text-blue-600 hover:bg-white/90 w-full sm:w-auto"
              size="sm"
            >
              {copiedLink ? (
                <CheckCircle2 className="w-4 h-4 mr-2" />
              ) : (
                <Copy className="w-4 h-4 mr-2" />
              )}
              {copiedLink ? 'Скопировано' : 'Копировать'}
            </Button>
          </div>
        </Card>

        {/* Rebate Chart */}
        <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <h3 className="text-lg font-semibold text-gray-900">График кэшбэка</h3>
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {periods.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setChartPeriod(p.key)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-md transition-all ${
                    chartPeriod === p.key
                      ? 'bg-white text-blue-600 shadow-sm font-medium'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRebate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                  tickFormatter={(v) => `$${v}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '14px',
                  }}
                  formatter={(value: number) => [`$${value.toFixed(2)}`, 'Кэшбэк']}
                />
                <Area
                  type="monotone"
                  dataKey="rebate"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRebate)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">История начислений</h3>
          <div className="space-y-2 sm:space-y-3">
            {recentTransactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{tx.pair}</div>
                    <div className="text-xs text-gray-500">{tx.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono font-semibold text-emerald-600 text-sm sm:text-base">
                    +${tx.amount.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-500">
                    объём: ${tx.volume.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
