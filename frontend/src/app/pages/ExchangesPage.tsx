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
  Calendar
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

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Подключено</div>
                <div className="text-2xl font-bold text-gray-900">{connectedExchanges.length}</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Общий объем</div>
                <div className="text-2xl font-bold text-gray-900 font-mono">
                  ${connectedExchanges.reduce((sum, ex) => sum + (ex.volume || 0), 0).toLocaleString()}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Доступно</div>
                <div className="text-2xl font-bold text-gray-900">{availableExchanges.length}</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Connected Exchanges */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Подключенные биржи</h2>
          <div className="grid gap-4">
            {connectedExchanges.map((exchange) => (
              <Card key={exchange.id} className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-4xl">{exchange.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{exchange.name}</h3>
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                          Активна
                        </Badge>
                        <Badge variant="outline" className="border-blue-200 text-blue-700">
                          {exchange.rebateRate} кэшбэк
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Заработано</div>
                          <div className="font-mono font-semibold text-gray-900">
                            ${exchange.earnings?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Объем торгов</div>
                          <div className="font-mono font-semibold text-gray-900">
                            ${exchange.volume?.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Последняя синхронизация</div>
                          <div className="text-sm text-gray-900">{exchange.lastSync}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Детали
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-red-600 border-red-200 hover:bg-red-50"
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
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Доступные биржи</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableExchanges.map((exchange) => (
              <Card 
                key={exchange.id} 
                className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{exchange.logo}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{exchange.name}</h3>
                      <div className="text-sm text-emerald-600 font-medium mt-1">
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
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Подключить
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Подключить {exchange.name}</DialogTitle>
                      <DialogDescription>
                        Введите API ключи для подключения биржи. Мы рекомендуем создать read-only ключ.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-900">
                          <strong>Важно:</strong> Создайте API ключ только с правами на чтение. Права на торговлю и вывод не требуются.
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="apiKey">API Key</Label>
                        <Input
                          id="apiKey"
                          placeholder="Вставьте ваш API ключ"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          className="font-mono text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="apiSecret">API Secret</Label>
                        <Input
                          id="apiSecret"
                          type="password"
                          placeholder="Вставьте ваш API secret"
                          value={apiSecret}
                          onChange={(e) => setApiSecret(e.target.value)}
                          className="font-mono text-sm"
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
