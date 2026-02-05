import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  Building2, 
  Gift,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
  Copy,
  CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';

export default function DashboardPage() {
  const { user } = useAuth();
  const [copiedReferral, setCopiedReferral] = useState(false);

  const stats = [
    {
      icon: DollarSign,
      label: 'Общий кэшбэк',
      value: '12,543.50',
      currency: 'USDT',
      change: '+12.5%',
      isPositive: true,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      label: 'За этот месяц',
      value: '2,847.20',
      currency: 'USDT',
      change: '+8.3%',
      isPositive: true,
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Building2,
      label: 'Подключено бирж',
      value: '5',
      subValue: 'из 11 доступных',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Gift,
      label: 'Реферальный доход',
      value: '1,234.80',
      currency: 'USDT',
      change: '+15.2%',
      isPositive: true,
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const recentActivity = [
    { 
      exchange: 'Binance', 
      amount: 124.50, 
      type: 'rebate', 
      date: '2 часа назад',
      status: 'completed'
    },
    { 
      exchange: 'Bybit', 
      amount: 89.30, 
      type: 'rebate', 
      date: '5 часов назад',
      status: 'completed'
    },
    { 
      exchange: 'MEXC', 
      amount: 500.00, 
      type: 'withdrawal', 
      date: 'Вчера',
      status: 'pending'
    },
    { 
      exchange: 'OKX', 
      amount: 67.80, 
      type: 'rebate', 
      date: 'Вчера',
      status: 'completed'
    },
    { 
      exchange: 'Binance', 
      amount: 45.20, 
      type: 'referral', 
      date: '2 дня назад',
      status: 'completed'
    }
  ];

  const connectedExchanges = [
    { name: 'Binance', rebate: '40%', earnings: 4520.30, logo: '🟡' },
    { name: 'Bybit', rebate: '45%', earnings: 3210.50, logo: '🟠' },
    { name: 'MEXC', rebate: '60%', earnings: 2850.80, logo: '🔵' },
    { name: 'OKX', rebate: '35%', earnings: 1520.40, logo: '⚫' },
    { name: 'Gate.io', rebate: '50%', earnings: 441.50, logo: '🟢' },
  ];

  const handleCopyReferral = () => {
    const referralLink = `https://cryptorebate.com/ref/${user?.referralCode}`;
    navigator.clipboard.writeText(referralLink);
    setCopiedReferral(true);
    toast.success('Реферальная ссылка скопирована!');
    setTimeout(() => setCopiedReferral(false), 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                {stat.change && (
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    stat.isPositive ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {stat.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {stat.change}
                  </div>
                )}
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  {stat.currency && (
                    <span className="text-sm font-mono text-gray-500">{stat.currency}</span>
                  )}
                </div>
                {stat.subValue && (
                  <div className="text-sm text-gray-500 mt-1">{stat.subValue}</div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Referral Card */}
        <Card className="p-6 bg-gradient-to-r from-blue-600 to-emerald-600 border-none text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-5 h-5" />
                <h3 className="font-semibold">Реферальная программа</h3>
              </div>
              <p className="text-white/90 mb-4 max-w-2xl">
                Приглашайте друзей и получайте 10% от их кэшбэка навсегда. Ваша реферальная ссылка:
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 font-mono text-sm">
                  https://cryptorebate.com/ref/{user?.referralCode}
                </div>
                <Button
                  onClick={handleCopyReferral}
                  className="bg-white text-blue-600 hover:bg-white/90"
                >
                  {copiedReferral ? (
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                  ) : (
                    <Copy className="w-4 h-4 mr-2" />
                  )}
                  {copiedReferral ? 'Скопировано' : 'Копировать'}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Connected Exchanges */}
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Подключенные биржи</h3>
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                <Building2 className="w-4 h-4 mr-2" />
                Добавить
              </Button>
            </div>
            <div className="space-y-3">
              {connectedExchanges.map((exchange, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{exchange.logo}</div>
                    <div>
                      <div className="font-medium text-gray-900">{exchange.name}</div>
                      <div className="text-sm text-emerald-600 font-medium">
                        {exchange.rebate} кэшбэк
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-semibold text-gray-900">
                      ${exchange.earnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-xs text-gray-500">заработано</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Последняя активность</h3>
              <Button variant="ghost" size="sm" className="text-blue-600">
                Смотреть всё
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activity.type === 'rebate' ? 'bg-blue-100' :
                      activity.type === 'withdrawal' ? 'bg-purple-100' :
                      'bg-emerald-100'
                    }`}>
                      {activity.type === 'rebate' && <TrendingUp className="w-5 h-5 text-blue-600" />}
                      {activity.type === 'withdrawal' && <DollarSign className="w-5 h-5 text-purple-600" />}
                      {activity.type === 'referral' && <Gift className="w-5 h-5 text-emerald-600" />}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{activity.exchange}</div>
                      <div className="text-xs text-gray-500">{activity.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-mono font-semibold ${
                      activity.type === 'withdrawal' ? 'text-purple-600' : 'text-emerald-600'
                    }`}>
                      {activity.type === 'withdrawal' ? '-' : '+'}${activity.amount.toFixed(2)}
                    </div>
                    <div className={`text-xs ${
                      activity.status === 'completed' ? 'text-emerald-600' : 'text-orange-600'
                    }`}>
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
