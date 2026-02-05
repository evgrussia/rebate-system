import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Users, 
  DollarSign, 
  Building2,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  AlertCircle
} from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    {
      icon: Users,
      label: 'Всего пользователей',
      value: '1,247',
      change: '+12.5%',
      isPositive: true,
      gradient: 'from-blue-500 to-blue-600',
      subValue: '+156 за месяц'
    },
    {
      icon: DollarSign,
      label: 'Общие выплаты',
      value: '$124,543',
      change: '+8.3%',
      isPositive: true,
      gradient: 'from-emerald-500 to-emerald-600',
      subValue: 'USDT'
    },
    {
      icon: Building2,
      label: 'Активные биржи',
      value: '11',
      change: '0%',
      isPositive: true,
      gradient: 'from-purple-500 to-purple-600',
      subValue: 'Все подключены'
    },
    {
      icon: TrendingUp,
      label: 'Общий объем',
      value: '$4.2M',
      change: '+15.2%',
      isPositive: true,
      gradient: 'from-orange-500 to-orange-600',
      subValue: 'За месяц'
    }
  ];

  const pendingPayouts = [
    { id: '1', user: 'user@example.com', amount: 500, date: '2 часа назад' },
    { id: '2', user: 'trader@example.com', amount: 300, date: '5 часов назад' },
    { id: '3', user: 'crypto@example.com', amount: 150, date: 'Вчера' },
  ];

  const recentUsers = [
    { id: '1', name: 'Алексей Иванов', email: 'alex@example.com', exchanges: 3, earnings: 1250.50, status: 'active' },
    { id: '2', name: 'Мария Петрова', email: 'maria@example.com', exchanges: 5, earnings: 2340.80, status: 'active' },
    { id: '3', name: 'Дмитрий Сидоров', email: 'dmitry@example.com', exchanges: 2, earnings: 890.30, status: 'active' },
    { id: '4', name: 'Елена Кузнецова', email: 'elena@example.com', exchanges: 4, earnings: 1780.20, status: 'pending' },
  ];

  const exchangeStats = [
    { name: 'Binance', users: 523, volume: 1450000, rebates: 45200 },
    { name: 'Bybit', users: 412, volume: 980000, rebates: 32100 },
    { name: 'MEXC', users: 345, volume: 780000, rebates: 28500 },
    { name: 'OKX', users: 289, volume: 650000, rebates: 21400 },
    { name: 'Gate.io', users: 187, volume: 340000, rebates: 15200 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                {stat.subValue && (
                  <div className="text-sm text-gray-500 mt-1">{stat.subValue}</div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Pending Payouts Alert */}
        <Card className="p-6 bg-orange-50 border-orange-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                Ожидающие выплаты: {pendingPayouts.length}
              </h3>
              <p className="text-sm text-gray-600">
                На общую сумму ${pendingPayouts.reduce((sum, p) => sum + p.amount, 0)} требуют вашего одобрения
              </p>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Exchange Statistics */}
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Статистика по биржам</h3>
            <div className="space-y-3">
              {exchangeStats.map((exchange, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{exchange.name}</h4>
                    <Badge variant="outline">{exchange.users} пользователей</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Объем</div>
                      <div className="font-mono font-semibold text-gray-900">
                        ${(exchange.volume / 1000).toFixed(0)}K
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Кэшбэк</div>
                      <div className="font-mono font-semibold text-emerald-600">
                        ${exchange.rebates.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Users */}
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Последние пользователи</h3>
            <div className="space-y-3">
              {recentUsers.map((user) => (
                <div 
                  key={user.id}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                      </div>
                    </div>
                    <Badge className={
                      user.status === 'active' 
                        ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                        : 'bg-orange-100 text-orange-700 border-orange-200'
                    }>
                      {user.status === 'active' ? 'Активен' : '��жидание'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-200">
                    <span className="text-gray-600">{user.exchanges} бирж</span>
                    <span className="font-mono font-semibold text-gray-900">
                      ${user.earnings.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Pending Payouts Table */}
        <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Ожидающие выплаты</h3>
          <div className="space-y-3">
            {pendingPayouts.map((payout) => (
              <div 
                key={payout.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{payout.user}</div>
                    <div className="text-sm text-gray-500">{payout.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono font-semibold text-gray-900 text-lg">
                    ${payout.amount.toFixed(2)}
                  </div>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200 mt-1">
                    Ожидает
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}