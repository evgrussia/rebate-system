import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';
import { Switch } from '../../components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { 
  Settings,
  TrendingUp,
  Users,
  DollarSign,
  Edit
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface ExchangeConfig {
  id: string;
  name: string;
  logo: string;
  rebateRate: number;
  isActive: boolean;
  connectedUsers: number;
  totalVolume: number;
  totalRebates: number;
  apiEndpoint: string;
}

export default function AdminExchangesPage() {
  const [exchanges, setExchanges] = useState<ExchangeConfig[]>([
    {
      id: '1',
      name: 'Binance',
      logo: '🟡',
      rebateRate: 40,
      isActive: true,
      connectedUsers: 523,
      totalVolume: 1450000,
      totalRebates: 45200,
      apiEndpoint: 'https://api.binance.com'
    },
    {
      id: '2',
      name: 'Bybit',
      logo: '🟠',
      rebateRate: 45,
      isActive: true,
      connectedUsers: 412,
      totalVolume: 980000,
      totalRebates: 32100,
      apiEndpoint: 'https://api.bybit.com'
    },
    {
      id: '3',
      name: 'MEXC',
      logo: '🔵',
      rebateRate: 60,
      isActive: true,
      connectedUsers: 345,
      totalVolume: 780000,
      totalRebates: 28500,
      apiEndpoint: 'https://api.mexc.com'
    },
    {
      id: '4',
      name: 'OKX',
      logo: '⚫',
      rebateRate: 35,
      isActive: true,
      connectedUsers: 289,
      totalVolume: 650000,
      totalRebates: 21400,
      apiEndpoint: 'https://api.okx.com'
    },
    {
      id: '5',
      name: 'Gate.io',
      logo: '🟢',
      rebateRate: 50,
      isActive: true,
      connectedUsers: 187,
      totalVolume: 340000,
      totalRebates: 15200,
      apiEndpoint: 'https://api.gateio.ws'
    },
    {
      id: '6',
      name: 'KuCoin',
      logo: '🟢',
      rebateRate: 45,
      isActive: false,
      connectedUsers: 0,
      totalVolume: 0,
      totalRebates: 0,
      apiEndpoint: 'https://api.kucoin.com'
    },
    {
      id: '7',
      name: 'HTX (Huobi)',
      logo: '🔵',
      rebateRate: 40,
      isActive: false,
      connectedUsers: 0,
      totalVolume: 0,
      totalRebates: 0,
      apiEndpoint: 'https://api.htx.com'
    },
    {
      id: '8',
      name: 'Bitget',
      logo: '🔵',
      rebateRate: 50,
      isActive: false,
      connectedUsers: 0,
      totalVolume: 0,
      totalRebates: 0,
      apiEndpoint: 'https://api.bitget.com'
    },
    {
      id: '9',
      name: 'BingX',
      logo: '🔵',
      rebateRate: 55,
      isActive: false,
      connectedUsers: 0,
      totalVolume: 0,
      totalRebates: 0,
      apiEndpoint: 'https://api.bingx.com'
    },
    {
      id: '10',
      name: 'Phemex',
      logo: '🟡',
      rebateRate: 45,
      isActive: false,
      connectedUsers: 0,
      totalVolume: 0,
      totalRebates: 0,
      apiEndpoint: 'https://api.phemex.com'
    },
    {
      id: '11',
      name: 'CoinEx',
      logo: '🔴',
      rebateRate: 40,
      isActive: false,
      connectedUsers: 0,
      totalVolume: 0,
      totalRebates: 0,
      apiEndpoint: 'https://api.coinex.com'
    },
  ]);

  const [selectedExchange, setSelectedExchange] = useState<ExchangeConfig | null>(null);
  const [editRebateRate, setEditRebateRate] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleToggleActive = (exchangeId: string) => {
    setExchanges(exchanges.map(ex => 
      ex.id === exchangeId 
        ? { ...ex, isActive: !ex.isActive }
        : ex
    ));
    toast.success('Статус биржи обновлен');
  };

  const handleUpdateRebate = () => {
    if (!selectedExchange) return;

    const newRate = parseFloat(editRebateRate);
    if (isNaN(newRate) || newRate < 0 || newRate > 100) {
      toast.error('Введите корректный процент (0-100)');
      return;
    }

    setExchanges(exchanges.map(ex => 
      ex.id === selectedExchange.id 
        ? { ...ex, rebateRate: newRate }
        : ex
    ));

    toast.success(`Ставка кэшбэка для ${selectedExchange.name} обновлена`);
    setIsDialogOpen(false);
    setEditRebateRate('');
    setSelectedExchange(null);
  };

  const stats = {
    active: exchanges.filter(ex => ex.isActive).length,
    totalUsers: exchanges.reduce((sum, ex) => sum + ex.connectedUsers, 0),
    totalVolume: exchanges.reduce((sum, ex) => sum + ex.totalVolume, 0),
    totalRebates: exchanges.reduce((sum, ex) => sum + ex.totalRebates, 0),
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Settings className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-sm text-gray-600">Активные биржи</div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.active} / {exchanges.length}</div>
          </Card>

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-sm text-gray-600">Подключений</div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</div>
          </Card>

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-sm text-gray-600">Общий объем</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 font-mono">
              ${(stats.totalVolume / 1000000).toFixed(1)}M
            </div>
          </Card>

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-sm text-gray-600">Выплачено кэшбэка</div>
            </div>
            <div className="text-2xl font-bold text-gray-900 font-mono">
              ${stats.totalRebates.toLocaleString()}
            </div>
          </Card>
        </div>

        {/* Exchanges List */}
        <div className="grid gap-4">
          {exchanges.map((exchange) => (
            <Card 
              key={exchange.id}
              className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-4xl">{exchange.logo}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{exchange.name}</h3>
                      <Badge className={
                        exchange.isActive 
                          ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                          : 'bg-gray-100 text-gray-700 border-gray-200'
                      }>
                        {exchange.isActive ? 'Активна' : 'Неактивна'}
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        {exchange.rebateRate}% кэшбэк
                      </Badge>
                    </div>

                    <div className="grid grid-cols-4 gap-6 mt-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Подключено</div>
                        <div className="font-semibold text-gray-900">
                          {exchange.connectedUsers} пользователей
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Объем торгов</div>
                        <div className="font-mono font-semibold text-gray-900">
                          ${(exchange.totalVolume / 1000).toLocaleString()}K
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Выплачено</div>
                        <div className="font-mono font-semibold text-emerald-600">
                          ${exchange.totalRebates.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">API Endpoint</div>
                        <code className="text-xs text-gray-900 bg-gray-100 px-2 py-1 rounded">
                          {exchange.apiEndpoint.replace('https://', '')}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Dialog 
                    open={isDialogOpen && selectedExchange?.id === exchange.id} 
                    onOpenChange={setIsDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedExchange(exchange);
                          setEditRebateRate(exchange.rebateRate.toString());
                        }}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Настроить
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Настройки {exchange.name}</DialogTitle>
                        <DialogDescription>
                          Измените ставку кэшбэка для биржи
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="rebateRate">Ставка кэшбэка (%)</Label>
                          <Input
                            id="rebateRate"
                            type="number"
                            min="0"
                            max="100"
                            step="0.1"
                            placeholder="40"
                            value={editRebateRate}
                            onChange={(e) => setEditRebateRate(e.target.value)}
                          />
                          <p className="text-xs text-gray-500">
                            Процент от комиссии, который будет возвращаться пользователям
                          </p>
                        </div>

                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700"
                          onClick={handleUpdateRebate}
                        >
                          Сохранить изменения
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="flex items-center gap-2">
                    <Switch
                      checked={exchange.isActive}
                      onCheckedChange={() => handleToggleActive(exchange.id)}
                    />
                    <span className="text-sm text-gray-600">
                      {exchange.isActive ? 'Вкл' : 'Выкл'}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
