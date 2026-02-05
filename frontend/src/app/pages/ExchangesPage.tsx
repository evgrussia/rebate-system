import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { 
  Plus, 
  Check, 
  ExternalLink,
  AlertCircle,
  TrendingUp,
  Calendar,
  Building2,
  DollarSign
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface Exchange {
  id: string;
  name: string;
  logo: string;
  rebateRate: string;
  isConnected: boolean;
  apiKey?: string;
  earnings?: number;
  volume?: number;
  lastSync?: string;
}

export default function ExchangesPage() {
  const [exchanges, setExchanges] = useState<Exchange[]>([
    { 
      id: '1', 
      name: 'Binance', 
      logo: '🟡', 
      rebateRate: '40%', 
      isConnected: true,
      earnings: 4520.30,
      volume: 125000,
      lastSync: '5 минут назад'
    },
    { 
      id: '2', 
      name: 'Bybit', 
      logo: '🟠', 
      rebateRate: '45%', 
      isConnected: true,
      earnings: 3210.50,
      volume: 89000,
      lastSync: '10 минут назад'
    },
    { 
      id: '3', 
      name: 'MEXC', 
      logo: '🔵', 
      rebateRate: '60%', 
      isConnected: true,
      earnings: 2850.80,
      volume: 67000,
      lastSync: '15 минут назад'
    },
    { 
      id: '4', 
      name: 'OKX', 
      logo: '⚫', 
      rebateRate: '35%', 
      isConnected: true,
      earnings: 1520.40,
      volume: 54000,
      lastSync: '1 час назад'
    },
    { 
      id: '5', 
      name: 'Gate.io', 
      logo: '🟢', 
      rebateRate: '50%', 
      isConnected: true,
      earnings: 441.50,
      volume: 12000,
      lastSync: '30 минут назад'
    },
    { id: '6', name: 'KuCoin', logo: '🟢', rebateRate: '45%', isConnected: false },
    { id: '7', name: 'HTX (Huobi)', logo: '🔵', rebateRate: '40%', isConnected: false },
    { id: '8', name: 'Bitget', logo: '🔵', rebateRate: '50%', isConnected: false },
    { id: '9', name: 'BingX', logo: '🔵', rebateRate: '55%', isConnected: false },
    { id: '10', name: 'Phemex', logo: '🟡', rebateRate: '45%', isConnected: false },
    { id: '11', name: 'CoinEx', logo: '🔴', rebateRate: '40%', isConnected: false },
  ]);

  const [selectedExchange, setSelectedExchange] = useState<Exchange | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleConnectExchange = () => {
    if (!apiKey || !apiSecret) {
      toast.error('Заполните все поля');
      return;
    }

    // Имитация подключения биржи
    setExchanges(exchanges.map(ex => 
      ex.id === selectedExchange?.id 
        ? { ...ex, isConnected: true, apiKey: apiKey, earnings: 0, volume: 0, lastSync: 'Только что' }
        : ex
    ));

    toast.success(`Биржа ${selectedExchange?.name} успешно подключена!`);
    setIsDialogOpen(false);
    setApiKey('');
    setApiSecret('');
    setSelectedExchange(null);
  };

  const handleDisconnect = (exchangeId: string) => {
    setExchanges(exchanges.map(ex => 
      ex.id === exchangeId 
        ? { ...ex, isConnected: false, apiKey: undefined, earnings: undefined, volume: undefined, lastSync: undefined }
        : ex
    ));
    toast.success('Биржа отключена');
  };

  const connectedExchanges = exchanges.filter(ex => ex.isConnected);
  const availableExchanges = exchanges.filter(ex => !ex.isConnected);
  const totalEarnings = connectedExchanges.reduce((sum, ex) => sum + (ex.earnings || 0), 0);

  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-600">Подключено бирж</div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{connectedExchanges.length}</div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-600">Всего заработано</div>
                <div className="flex items-baseline gap-2">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    ${totalEarnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-600">За этот месяц</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  ${(totalEarnings * 0.25).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-600">Средний ребейт</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">45%</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Connected Exchanges */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Подключенные биржи</h2>
          <div className="space-y-4">
            {connectedExchanges.map((exchange) => (
              <Card 
                key={exchange.id} 
                className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="text-2xl sm:text-3xl flex-shrink-0">{exchange.logo}</div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-base sm:text-lg text-gray-900">{exchange.name}</h3>
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                        </div>
                        <div className="text-xs sm:text-sm text-emerald-600 font-medium">
                          {exchange.rebateRate} кэшбэк
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600 mb-1">Заработано</div>
                        <div className="font-mono text-sm sm:text-base font-semibold text-gray-900">
                          ${exchange.earnings?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600 mb-1">Объем торгов</div>
                        <div className="font-mono text-sm sm:text-base font-semibold text-gray-900">
                          ${exchange.volume?.toLocaleString()}
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <div className="text-xs sm:text-sm text-gray-600 mb-1">Последняя синхронизация</div>
                        <div className="text-xs sm:text-sm text-gray-900">{exchange.lastSync}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Детали
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full sm:w-auto text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => handleDisconnect(exchange.id)}
                    >
                      Отключить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Exchanges */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Доступные биржи</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableExchanges.map((exchange) => (
              <Card 
                key={exchange.id} 
                className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl sm:text-3xl">{exchange.logo}</div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900">{exchange.name}</h3>
                      <div className="text-xs sm:text-sm text-emerald-600 font-medium mt-1">
                        До {exchange.rebateRate} кэшбэк
                      </div>
                    </div>
                  </div>
                </div>

                <Dialog open={isDialogOpen && selectedExchange?.id === exchange.id} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                      onClick={() => setSelectedExchange(exchange)}
                      size="sm"
                    >
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Подключить
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md mx-4">
                    <DialogHeader>
                      <DialogTitle className="text-base sm:text-lg">Подключить {exchange.name}</DialogTitle>
                      <DialogDescription className="text-xs sm:text-sm">
                        Введите API ключи для подключения биржи. Мы рекомендуем создать read-only ключ.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm text-blue-900">
                          <strong>Важно:</strong> Создайте API ключ только с правами на чтение. Права на торговлю и вывод не требуются.
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="apiKey" className="text-sm">API Key</Label>
                        <Input
                          id="apiKey"
                          placeholder="Вставьте ваш API ключ"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          className="font-mono text-xs sm:text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="apiSecret" className="text-sm">API Secret</Label>
                        <Input
                          id="apiSecret"
                          type="password"
                          placeholder="Вставьте ваш API secret"
                          value={apiSecret}
                          onChange={(e) => setApiSecret(e.target.value)}
                          className="font-mono text-xs sm:text-sm"
                        />
                      </div>

                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700"
                        onClick={handleConnectExchange}
                      >
                        Подключить биржу
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}