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
  AlertCircle,
  ArrowDownToLine,
  DollarSign,
  ExternalLink
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
      <div className="space-y-6 sm:space-y-8">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-600">Доступно</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  ${balance.available.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-600">В обработке</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  ${balance.pending.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <ArrowDownToLine className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-600">Минимальный вывод</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  ${balance.minWithdrawal}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Withdrawal Form */}
          <Card className="p-4 sm:p-6 lg:p-8 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Заявка на вывод</h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Currency Selection */}
              <div className="space-y-2">
                <Label htmlFor="currency" className="text-sm">Валюта</Label>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger id="currency" className="h-10 sm:h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USDT">USDT</SelectItem>
                    <SelectItem value="BTC">BTC</SelectItem>
                    <SelectItem value="ETH">ETH</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Network Selection */}
              <div className="space-y-2">
                <Label htmlFor="network" className="text-sm">Сеть</Label>
                <Select value={network} onValueChange={setNetwork}>
                  <SelectTrigger id="network" className="h-10 sm:h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TRC20">TRC20 (Tron)</SelectItem>
                    <SelectItem value="ERC20">ERC20 (Ethereum)</SelectItem>
                    <SelectItem value="BEP20">BEP20 (BSC)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Amount Input */}
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-sm">Сумма</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-9 sm:pl-10 font-mono text-base sm:text-lg h-11 sm:h-12"
                  />
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-500">
                    Минимум: ${balance.minWithdrawal}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-blue-600 hover:bg-transparent"
                    onClick={() => setAmount(balance.available.toString())}
                  >
                    Максимум
                  </Button>
                </div>
              </div>

              {/* Address Input */}
              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm">Адрес кошелька</Label>
                <Input
                  id="address"
                  placeholder="Введите адрес кошелька"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="font-mono text-xs sm:text-sm h-10 sm:h-11"
                />
              </div>

              {/* Info Alert */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-blue-900">
                  <strong>Обработка:</strong> Выплаты обрабатываются в течение 24-48 часов. Комиссия сети оплачивается получателем.
                </div>
              </div>

              <Button 
                onClick={handleWithdraw}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-11 sm:h-12"
              >
                Создать заявку на вывод
              </Button>
            </div>
          </Card>

          {/* Withdrawal History */}
          <Card className="p-4 sm:p-6 lg:p-8 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">История выводов</h2>
              <Button variant="ghost" size="sm" className="text-blue-600">
                <span className="hidden sm:inline">Смотреть всё</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 sm:ml-2" />
              </Button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {withdrawalHistory.map((withdrawal) => (
                <div 
                  key={withdrawal.id}
                  className="p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-mono font-semibold text-sm sm:text-base text-gray-900">
                          ${withdrawal.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </span>
                        {getStatusBadge(withdrawal.status)}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">{withdrawal.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <span className="font-mono text-gray-600 truncate">{withdrawal.address}</span>
                      <button
                        onClick={() => handleCopyAddress(withdrawal.address)}
                        className="flex-shrink-0 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        {copiedAddress === withdrawal.address ? (
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                        )}
                      </button>
                    </div>
                    {withdrawal.txHash && (
                      <a
                        href={`https://tronscan.org/#/transaction/${withdrawal.txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 flex-shrink-0 text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
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