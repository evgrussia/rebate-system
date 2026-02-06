import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  TrendingUp,
  DollarSign,
  Gift,
  Calendar,
  Download,
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { Label } from '../components/ui/label';

interface Transaction {
  id: string;
  type: 'rebate' | 'withdrawal' | 'referral';
  exchange: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'processing';
  details?: string;
}

export default function HistoryPage() {
  const [period, setPeriod] = useState('all');
  const [transactionType, setTransactionType] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'rebate',
      exchange: 'Binance',
      amount: 124.50,
      date: '2024-02-04T10:30:00',
      status: 'completed',
      details: 'BTC/USDT торговля'
    },
    {
      id: '2',
      type: 'rebate',
      exchange: 'Bybit',
      amount: 89.30,
      date: '2024-02-04T08:15:00',
      status: 'completed',
      details: 'ETH/USDT торговля'
    },
    {
      id: '3',
      type: 'withdrawal',
      exchange: 'MEXC',
      amount: 500.00,
      date: '2024-02-03T14:20:00',
      status: 'processing',
      details: 'TRC20: TXnB...k9Ld'
    },
    {
      id: '4',
      type: 'referral',
      exchange: 'Binance',
      amount: 45.20,
      date: '2024-02-03T11:45:00',
      status: 'completed',
      details: 'Реферальный доход'
    },
    {
      id: '5',
      type: 'rebate',
      exchange: 'OKX',
      amount: 67.80,
      date: '2024-02-02T16:30:00',
      status: 'completed',
      details: 'SOL/USDT торговля'
    },
    {
      id: '6',
      type: 'rebate',
      exchange: 'Gate.io',
      amount: 34.60,
      date: '2024-02-02T09:15:00',
      status: 'completed',
      details: 'MATIC/USDT торговля'
    },
    {
      id: '7',
      type: 'withdrawal',
      exchange: 'Binance',
      amount: 300.00,
      date: '2024-02-01T13:00:00',
      status: 'completed',
      details: 'TRC20: TXnB...k9Ld'
    },
    {
      id: '8',
      type: 'rebate',
      exchange: 'MEXC',
      amount: 156.70,
      date: '2024-02-01T10:20:00',
      status: 'completed',
      details: 'AVAX/USDT торговля'
    },
    {
      id: '9',
      type: 'rebate',
      exchange: 'Bybit',
      amount: 210.40,
      date: '2024-01-28T15:10:00',
      status: 'completed',
      details: 'XRP/USDT торговля'
    },
    {
      id: '10',
      type: 'referral',
      exchange: 'OKX',
      amount: 32.10,
      date: '2024-01-25T09:30:00',
      status: 'completed',
      details: 'Реферальный доход'
    },
    {
      id: '11',
      type: 'withdrawal',
      exchange: 'Bybit',
      amount: 750.00,
      date: '2023-12-15T11:00:00',
      status: 'completed',
      details: 'ERC20: 0xAb3...F12d'
    },
    {
      id: '12',
      type: 'rebate',
      exchange: 'Binance',
      amount: 98.50,
      date: '2023-11-20T14:45:00',
      status: 'completed',
      details: 'DOGE/USDT торговля'
    },
  ];

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      // Period filter
      if (period !== 'all') {
        const txDate = new Date(t.date);
        const now = new Date();
        const diffMs = now.getTime() - txDate.getTime();
        const diffDays = diffMs / (1000 * 60 * 60 * 24);

        if (period === 'today' && diffDays > 1) return false;
        if (period === 'week' && diffDays > 7) return false;
        if (period === 'month' && diffDays > 30) return false;
        if (period === 'year' && diffDays > 365) return false;
      }

      // Type filter
      if (transactionType !== 'all' && t.type !== transactionType) return false;

      // Status filter
      if (statusFilter !== 'all' && t.status !== statusFilter) return false;

      return true;
    });
  }, [period, transactionType, statusFilter]);

  const stats = useMemo(() => ({
    totalRebates: filteredTransactions.filter(t => t.type === 'rebate' && t.status === 'completed')
      .reduce((sum, t) => sum + t.amount, 0),
    totalWithdrawals: filteredTransactions.filter(t => t.type === 'withdrawal' && t.status === 'completed')
      .reduce((sum, t) => sum + t.amount, 0),
    totalReferrals: filteredTransactions.filter(t => t.type === 'referral' && t.status === 'completed')
      .reduce((sum, t) => sum + t.amount, 0),
    transactionCount: filteredTransactions.length
  }), [filteredTransactions]);

  const getTypeIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'rebate':
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'withdrawal':
        return <DollarSign className="w-5 h-5 text-purple-600" />;
      case 'referral':
        return <Gift className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getTypeLabel = (type: Transaction['type']) => {
    switch (type) {
      case 'rebate':
        return 'Кэшбэк';
      case 'withdrawal':
        return 'Вывод';
      case 'referral':
        return 'Реферал';
    }
  };

  const getTypeBadgeColor = (type: Transaction['type']) => {
    switch (type) {
      case 'rebate':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'withdrawal':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'referral':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    }
  };

  const getStatusBadge = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Завершено</Badge>;
      case 'processing':
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Обработка</Badge>;
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-700 border-orange-200">Ожидание</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 24) {
      if (diffHours < 1) {
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        return `${diffMinutes} минут назад`;
      }
      return `${diffHours} часов назад`;
    } else if (diffHours < 48) {
      return 'Вчера';
    } else {
      return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }
  };

  const renderTransactionsList = (txList: Transaction[]) => (
    <div className="space-y-2 sm:space-y-3">
      {txList.map((transaction) => (
        <Card
          key={transaction.id}
          className="p-3 sm:p-5 border-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-md transition-all"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0 w-full sm:w-auto">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                transaction.type === 'rebate' ? 'bg-blue-100' :
                transaction.type === 'withdrawal' ? 'bg-purple-100' :
                'bg-emerald-100'
              }`}>
                {getTypeIcon(transaction.type)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900">{transaction.exchange}</h3>
                  <Badge className={`${getTypeBadgeColor(transaction.type)} text-xs`}>
                    {getTypeLabel(transaction.type)}
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 truncate">{transaction.details}</p>
                <p className="text-xs text-gray-500 mt-1">{formatDate(transaction.date)}</p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="text-left sm:text-right">
                <div className={`font-mono font-bold text-base sm:text-lg ${
                  transaction.type === 'withdrawal' ? 'text-purple-600' : 'text-emerald-600'
                }`}>
                  {transaction.type === 'withdrawal' ? '-' : '+'}${transaction.amount.toFixed(2)}
                </div>
                <div className="text-xs text-gray-500 mt-1">USDT</div>
              </div>
              {getStatusBadge(transaction.status)}
            </div>
          </div>
        </Card>
      ))}

      {txList.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
          </div>
          <p className="text-sm sm:text-base text-gray-600">Нет транзакций</p>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Попробуйте изменить параметры фильтрации</p>
        </div>
      )}
    </div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        {/* Filters */}
        <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="flex-1">
              <Label htmlFor="period" className="sr-only">Период</Label>
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger id="period" className="h-10 sm:h-11">
                  <SelectValue placeholder="Выберите период" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все время</SelectItem>
                  <SelectItem value="today">Сегодня</SelectItem>
                  <SelectItem value="week">Эта неделя</SelectItem>
                  <SelectItem value="month">Этот месяц</SelectItem>
                  <SelectItem value="year">Этот год</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="type" className="sr-only">Тип</Label>
              <Select value={transactionType} onValueChange={setTransactionType}>
                <SelectTrigger id="type" className="h-10 sm:h-11">
                  <SelectValue placeholder="Тип транзакции" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все типы</SelectItem>
                  <SelectItem value="rebate">Кэшбэк</SelectItem>
                  <SelectItem value="referral">Рефералы</SelectItem>
                  <SelectItem value="withdrawal">Выводы</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="status" className="sr-only">Статус</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger id="status" className="h-10 sm:h-11">
                  <SelectValue placeholder="Статус" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все статусы</SelectItem>
                  <SelectItem value="completed">Завершено</SelectItem>
                  <SelectItem value="pending">Ожидание</SelectItem>
                  <SelectItem value="processing">Обработка</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="w-full sm:w-auto h-10 sm:h-11">
              <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="hidden sm:inline">Экспорт</span>
              <span className="sm:hidden">CSV</span>
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-sm text-gray-600">Кэшбэк</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 font-mono">
              ${stats.totalRebates.toFixed(2)}
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-sm text-gray-600">Выведено</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 font-mono">
              ${stats.totalWithdrawals.toFixed(2)}
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Gift className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-sm text-gray-600">Рефералы</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 font-mono">
              ${stats.totalReferrals.toFixed(2)}
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-sm text-gray-600">Транзакций</div>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {stats.transactionCount}
            </div>
          </Card>
        </div>

        {/* Transaction Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-white/70 backdrop-blur-sm border border-gray-200">
            <TabsTrigger value="all">Все транзакции</TabsTrigger>
            <TabsTrigger value="rebates">Кэшбэк</TabsTrigger>
            <TabsTrigger value="withdrawals">Выводы</TabsTrigger>
            <TabsTrigger value="referrals">Рефералы</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {renderTransactionsList(filteredTransactions)}
          </TabsContent>

          <TabsContent value="rebates">
            {renderTransactionsList(filteredTransactions.filter(t => t.type === 'rebate'))}
          </TabsContent>

          <TabsContent value="withdrawals">
            {renderTransactionsList(filteredTransactions.filter(t => t.type === 'withdrawal'))}
          </TabsContent>

          <TabsContent value="referrals">
            {renderTransactionsList(filteredTransactions.filter(t => t.type === 'referral'))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
