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
  Filter
} from 'lucide-react';
import { useState } from 'react';

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
  const [timeFilter, setTimeFilter] = useState('all');
  const [exchangeFilter, setExchangeFilter] = useState('all');

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
  ];

  const stats = {
    totalRebates: transactions.filter(t => t.type === 'rebate' && t.status === 'completed')
      .reduce((sum, t) => sum + t.amount, 0),
    totalWithdrawals: transactions.filter(t => t.type === 'withdrawal' && t.status === 'completed')
      .reduce((sum, t) => sum + t.amount, 0),
    totalReferrals: transactions.filter(t => t.type === 'referral' && t.status === 'completed')
      .reduce((sum, t) => sum + t.amount, 0),
    transactionCount: transactions.length
  };

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

  const renderTransactionsList = (filteredTransactions: Transaction[]) => (
    <div className="space-y-3">
      {filteredTransactions.map((transaction) => (
        <Card 
          key={transaction.id}
          className="p-5 border-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                transaction.type === 'rebate' ? 'bg-blue-100' :
                transaction.type === 'withdrawal' ? 'bg-purple-100' :
                'bg-emerald-100'
              }`}>
                {getTypeIcon(transaction.type)}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{transaction.exchange}</h3>
                  <Badge className={getTypeBadgeColor(transaction.type)}>
                    {getTypeLabel(transaction.type)}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{transaction.details}</p>
                <p className="text-xs text-gray-500 mt-1">{formatDate(transaction.date)}</p>
              </div>
            </div>

            <div className="text-right flex items-center gap-4">
              <div>
                <div className={`font-mono font-bold text-lg ${
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

      {filteredTransactions.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-600">Нет транзакций</p>
          <p className="text-sm text-gray-500 mt-1">История транзакций появится здесь</p>
        </div>
      )}
    </div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
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

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
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

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
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

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
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

        {/* Filters and Export */}
        <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Период" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все время</SelectItem>
                  <SelectItem value="today">Сегодня</SelectItem>
                  <SelectItem value="week">Неделя</SelectItem>
                  <SelectItem value="month">Месяц</SelectItem>
                  <SelectItem value="year">Год</SelectItem>
                </SelectContent>
              </Select>

              <Select value={exchangeFilter} onValueChange={setExchangeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Биржа" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все биржи</SelectItem>
                  <SelectItem value="binance">Binance</SelectItem>
                  <SelectItem value="bybit">Bybit</SelectItem>
                  <SelectItem value="mexc">MEXC</SelectItem>
                  <SelectItem value="okx">OKX</SelectItem>
                  <SelectItem value="gateio">Gate.io</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              <Download className="w-4 h-4 mr-2" />
              Экспорт CSV
            </Button>
          </div>
        </Card>

        {/* Transaction Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-white/70 backdrop-blur-sm border border-gray-200">
            <TabsTrigger value="all">Все транзакции</TabsTrigger>
            <TabsTrigger value="rebates">Кэшбэк</TabsTrigger>
            <TabsTrigger value="withdrawals">Выводы</TabsTrigger>
            <TabsTrigger value="referrals">Рефералы</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {renderTransactionsList(transactions)}
          </TabsContent>

          <TabsContent value="rebates">
            {renderTransactionsList(transactions.filter(t => t.type === 'rebate'))}
          </TabsContent>

          <TabsContent value="withdrawals">
            {renderTransactionsList(transactions.filter(t => t.type === 'withdrawal'))}
          </TabsContent>

          <TabsContent value="referrals">
            {renderTransactionsList(transactions.filter(t => t.type === 'referral'))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
