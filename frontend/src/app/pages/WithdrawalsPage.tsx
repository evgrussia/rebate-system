import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { 
  Wallet, 
  TrendingUp, 
  Clock,
  ArrowRight,
  Copy,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface Withdrawal {
  id: string;
  amount: number;
  currency: string;
  address: string;
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  date: string;
  txHash?: string;
}

export default function WithdrawalsPage() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USDT');
  const [network, setNetwork] = useState('TRC20');
  const [address, setAddress] = useState('');
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const balance = {
    available: 12543.50,
    pending: 247.30,
    minWithdrawal: 10
  };

  const withdrawalHistory: Withdrawal[] = [
    {
      id: '1',
      amount: 500,
      currency: 'USDT',
      address: 'TXnB...k9Ld',
      status: 'completed',
      date: '2024-02-01',
      txHash: '0x1234...5678'
    },
    {
      id: '2',
      amount: 300,
      currency: 'USDT',
      address: 'TXnB...k9Ld',
      status: 'processing',
      date: '2024-02-03'
    },
    {
      id: '3',
      amount: 150,
      currency: 'USDT',
      address: 'TXnB...k9Ld',
      status: 'pending',
      date: '2024-02-04'
    },
  ];

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    toast.success('Адрес скопирован');
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount);
    
    if (!amount || withdrawAmount <= 0) {
      toast.error('Введите корректную сумму');
      return;
    }

    if (withdrawAmount < balance.minWithdrawal) {
      toast.error(`Минимальная сумма вывода: $${balance.minWithdrawal}`);
      return;
    }

    if (withdrawAmount > balance.available) {
      toast.error('Недостаточно средств');
      return;
    }

    if (!address) {
      toast.error('Введите адрес кошелька');
      return;
    }

    toast.success('Заявка на вывод создана!');
    setAmount('');
    setAddress('');
  };

  const getStatusBadge = (status: Withdrawal['status']) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Завершено</Badge>;
      case 'processing':
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Обработка</Badge>;
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-700 border-orange-200">Ожидание</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-700 border-red-200">Отклонено</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Balance Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Доступно для вывода</div>
              <div className="text-3xl font-bold text-gray-900 font-mono">
                ${balance.available.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <div className="text-sm text-gray-500 mt-1">USDT</div>
            </div>
          </Card>

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">В обработке</div>
              <div className="text-3xl font-bold text-gray-900 font-mono">
                ${balance.pending.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <div className="text-sm text-gray-500 mt-1">USDT</div>
            </div>
          </Card>

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Минимальный вывод</div>
              <div className="text-3xl font-bold text-gray-900 font-mono">
                ${balance.minWithdrawal}
              </div>
              <div className="text-sm text-gray-500 mt-1">USDT</div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Withdrawal Form */}
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Создать заявку на вывод</h2>
            
            <div className="space-y-5">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  Выплаты обрабатываются в течение 24 часов. Минимальная сумма вывода - ${balance.minWithdrawal}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency">Валюта</Label>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="h-12 bg-white/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USDT">USDT - Tether</SelectItem>
                    <SelectItem value="USDC">USDC - USD Coin</SelectItem>
                    <SelectItem value="BTC">BTC - Bitcoin</SelectItem>
                    <SelectItem value="ETH">ETH - Ethereum</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="network">Сеть</Label>
                <Select value={network} onValueChange={setNetwork}>
                  <SelectTrigger className="h-12 bg-white/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TRC20">TRC20 (Tron) - Без комиссии</SelectItem>
                    <SelectItem value="ERC20">ERC20 (Ethereum) - Высокая комиссия</SelectItem>
                    <SelectItem value="BEP20">BEP20 (BSC) - Низкая комиссия</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Сумма</Label>
                <div className="relative">
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    className="h-12 bg-white/50 font-mono pr-20"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min={balance.minWithdrawal}
                    max={balance.available}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    {currency}
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Доступно: ${balance.available.toFixed(2)}</span>
                  <button
                    type="button"
                    onClick={() => setAmount(balance.available.toString())}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Макс
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Адрес кошелька</Label>
                <Input
                  id="address"
                  placeholder={`Введите ${network} адрес`}
                  className="h-12 bg-white/50 font-mono"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <Button 
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                onClick={handleWithdraw}
              >
                Создать заявку
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Withdrawal History */}
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">История выводов</h2>
            
            <div className="space-y-3">
              {withdrawalHistory.map((withdrawal) => (
                <div 
                  key={withdrawal.id}
                  className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-mono font-semibold text-gray-900 text-lg">
                        ${withdrawal.amount.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {new Date(withdrawal.date).toLocaleDateString('ru-RU', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    {getStatusBadge(withdrawal.status)}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Адрес:</span>
                      <code className="text-sm font-mono text-gray-900">{withdrawal.address}</code>
                    </div>
                    <button
                      onClick={() => handleCopyAddress(withdrawal.address)}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {copiedAddress === withdrawal.address ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {withdrawal.txHash && (
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <a 
                        href={`https://tronscan.org/#/transaction/${withdrawal.txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                      >
                        Посмотреть транзакцию
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {withdrawalHistory.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600">История выводов пуста</p>
                <p className="text-sm text-gray-500 mt-1">Создайте первую заявку на вывод</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
