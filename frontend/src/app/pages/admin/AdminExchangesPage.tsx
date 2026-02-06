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
  traderShare: number;
  serviceMargin: number;
  minWithdrawal: number;
  payoutPeriod: string;
  isActive: boolean;
  connectedUsers: number;
  totalVolume: number;
  totalRebates: number;
  apiEndpoint: string;
  apiKey: string;
  apiSecret: string;
  referralLink: string;
}

export default function AdminExchangesPage() {
  const [exchanges, setExchanges] = useState<ExchangeConfig[]>([
    {
      id: '1',
      name: 'Binance',
      logo: '\uD83D\uDFE1',
      rebateRate: 40,
      traderShare: 70,
      serviceMargin: 30,
      minWithdrawal: 10,
      payoutPeriod: 'weekly',
      isActive: true,
      connectedUsers: 523,
      totalVolume: 1450000,
      totalRebates: 45200,
      apiEndpoint: 'https://api.binance.com',
      apiKey: 'bk_***************',
      apiSecret: '••••••••••••••••',
      referralLink: 'https://accounts.binance.com/register?ref=CR40BACK'
    },
    {
      id: '2',
      name: 'Bybit',
      logo: '\uD83D\uDFE0',
      rebateRate: 45,
      traderShare: 65,
      serviceMargin: 35,
      minWithdrawal: 10,
      payoutPeriod: 'weekly',
      isActive: true,
      connectedUsers: 412,
      totalVolume: 980000,
      totalRebates: 32100,
      apiEndpoint: 'https://api.bybit.com',
      apiKey: 'bb_***************',
      apiSecret: '••••••••••••••••',
      referralLink: 'https://www.bybit.com/invite?ref=CR45BACK'
    },
    {
      id: '3',
      name: 'MEXC',
      logo: '\uD83D\uDD35',
      rebateRate: 60,
      traderShare: 60,
      serviceMargin: 40,
      minWithdrawal: 5,
      payoutPeriod: 'daily',
      isActive: true,
      connectedUsers: 345,
      totalVolume: 780000,
      totalRebates: 28500,
      apiEndpoint: 'https://api.mexc.com',
      apiKey: 'mx_***************',
      apiSecret: '••••••••••••••••',
      referralLink: 'https://www.mexc.com/register?ref=CR60BACK'
    },
    {
      id: '4',
      name: 'OKX',
      logo: '\u26AB',
      rebateRate: 35,
      traderShare: 75,
      serviceMargin: 25,
      minWithdrawal: 10,
      payoutPeriod: 'weekly',
      isActive: true,
      connectedUsers: 289,
      totalVolume: 650000,
      totalRebates: 21400,
      apiEndpoint: 'https://api.okx.com',
      apiKey: 'ok_***************',
      apiSecret: '••••••••••••••••',
      referralLink: 'https://www.okx.com/join?ref=CR35BACK'
    },
    {
      id: '5',
      name: 'Gate.io',
      logo: '\uD83D\uDFE2',
      rebateRate: 50,
      traderShare: 65,
      serviceMargin: 35,
      minWithdrawal: 10,
      payoutPeriod: 'weekly',
      isActive: true,
      connectedUsers: 187,
      totalVolume: 340000,
      totalRebates: 15200,
      apiEndpoint: 'https://api.gateio.ws',
      apiKey: 'gt_***************',
      apiSecret: '••••••••••••••••',
      referralLink: 'https://www.gate.io/signup?ref=CR50BACK'
    },
    {
      id: '6', name: 'KuCoin', logo: '\uD83D\uDFE2', rebateRate: 45, traderShare: 70, serviceMargin: 30, minWithdrawal: 10, payoutPeriod: 'weekly',
      isActive: false, connectedUsers: 0, totalVolume: 0, totalRebates: 0,
      apiEndpoint: 'https://api.kucoin.com', apiKey: '', apiSecret: '', referralLink: ''
    },
    {
      id: '7', name: 'HTX (Huobi)', logo: '\uD83D\uDD35', rebateRate: 40, traderShare: 70, serviceMargin: 30, minWithdrawal: 10, payoutPeriod: 'weekly',
      isActive: false, connectedUsers: 0, totalVolume: 0, totalRebates: 0,
      apiEndpoint: 'https://api.htx.com', apiKey: '', apiSecret: '', referralLink: ''
    },
    {
      id: '8', name: 'Bitget', logo: '\uD83D\uDD35', rebateRate: 50, traderShare: 65, serviceMargin: 35, minWithdrawal: 10, payoutPeriod: 'weekly',
      isActive: false, connectedUsers: 0, totalVolume: 0, totalRebates: 0,
      apiEndpoint: 'https://api.bitget.com', apiKey: '', apiSecret: '', referralLink: ''
    },
    {
      id: '9', name: 'BingX', logo: '\uD83D\uDD35', rebateRate: 55, traderShare: 60, serviceMargin: 40, minWithdrawal: 10, payoutPeriod: 'weekly',
      isActive: false, connectedUsers: 0, totalVolume: 0, totalRebates: 0,
      apiEndpoint: 'https://api.bingx.com', apiKey: '', apiSecret: '', referralLink: ''
    },
    {
      id: '10', name: 'Phemex', logo: '\uD83D\uDFE1', rebateRate: 45, traderShare: 70, serviceMargin: 30, minWithdrawal: 10, payoutPeriod: 'weekly',
      isActive: false, connectedUsers: 0, totalVolume: 0, totalRebates: 0,
      apiEndpoint: 'https://api.phemex.com', apiKey: '', apiSecret: '', referralLink: ''
    },
    {
      id: '11', name: 'CoinEx', logo: '\uD83D\uDD34', rebateRate: 40, traderShare: 70, serviceMargin: 30, minWithdrawal: 10, payoutPeriod: 'weekly',
      isActive: false, connectedUsers: 0, totalVolume: 0, totalRebates: 0,
      apiEndpoint: 'https://api.coinex.com', apiKey: '', apiSecret: '', referralLink: ''
    },
  ]);

  const [selectedExchange, setSelectedExchange] = useState<ExchangeConfig | null>(null);
  const [editForm, setEditForm] = useState({
    rebateRate: '',
    traderShare: '',
    serviceMargin: '',
    minWithdrawal: '',
    payoutPeriod: '',
    apiKey: '',
    apiSecret: '',
    referralLink: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleToggleActive = (exchangeId: string) => {
    setExchanges(exchanges.map(ex =>
      ex.id === exchangeId
        ? { ...ex, isActive: !ex.isActive }
        : ex
    ));
    toast.success('Статус биржи обновлен');
  };

  const handleOpenEdit = (exchange: ExchangeConfig) => {
    setSelectedExchange(exchange);
    setEditForm({
      rebateRate: exchange.rebateRate.toString(),
      traderShare: exchange.traderShare.toString(),
      serviceMargin: exchange.serviceMargin.toString(),
      minWithdrawal: exchange.minWithdrawal.toString(),
      payoutPeriod: exchange.payoutPeriod,
      apiKey: exchange.apiKey,
      apiSecret: exchange.apiSecret,
      referralLink: exchange.referralLink,
    });
  };

  const handleSaveExchange = () => {
    if (!selectedExchange) return;

    const newRate = parseFloat(editForm.rebateRate);
    const newTraderShare = parseFloat(editForm.traderShare);
    const newServiceMargin = parseFloat(editForm.serviceMargin);
    const newMinWithdrawal = parseFloat(editForm.minWithdrawal);

    if (isNaN(newRate) || newRate < 0 || newRate > 100) {
      toast.error('Введите корректный процент ребейта (0-100)');
      return;
    }
    if (isNaN(newTraderShare) || isNaN(newServiceMargin)) {
      toast.error('Введите корректные доли');
      return;
    }

    setExchanges(exchanges.map(ex =>
      ex.id === selectedExchange.id
        ? {
            ...ex,
            rebateRate: newRate,
            traderShare: newTraderShare,
            serviceMargin: newServiceMargin,
            minWithdrawal: newMinWithdrawal,
            payoutPeriod: editForm.payoutPeriod,
            apiKey: editForm.apiKey,
            apiSecret: editForm.apiSecret,
            referralLink: editForm.referralLink,
          }
        : ex
    ));

    toast.success(`Настройки ${selectedExchange.name} сохранены`);
    setIsDialogOpen(false);
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
              className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm"
            >
              <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="text-3xl sm:text-4xl">{exchange.logo}</div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
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
                      <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                        Трейдер: {exchange.traderShare}%
                      </Badge>
                      <Badge variant="outline" className="border-orange-200 text-orange-700">
                        Маржа: {exchange.serviceMargin}%
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Подключено</div>
                        <div className="font-semibold text-gray-900">
                          {exchange.connectedUsers} польз.
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
                        <div className="text-sm text-gray-600 mb-1">Мин. вывод</div>
                        <div className="font-mono font-semibold text-gray-900">
                          ${exchange.minWithdrawal}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <Dialog
                    open={isDialogOpen && selectedExchange?.id === exchange.id}
                    onOpenChange={setIsDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenEdit(exchange)}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Настроить
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Настройки {exchange.name}</DialogTitle>
                        <DialogDescription>
                          Настройте параметры биржи, доли и API
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Ставка кэшбэка (%)</Label>
                            <Input
                              type="number" min="0" max="100" step="0.1"
                              value={editForm.rebateRate}
                              onChange={(e) => setEditForm({...editForm, rebateRate: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Доля трейдера (%)</Label>
                            <Input
                              type="number" min="0" max="100" step="1"
                              value={editForm.traderShare}
                              onChange={(e) => setEditForm({...editForm, traderShare: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Маржа сервиса (%)</Label>
                            <Input
                              type="number" min="0" max="100" step="1"
                              value={editForm.serviceMargin}
                              onChange={(e) => setEditForm({...editForm, serviceMargin: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Мин. вывод ($)</Label>
                            <Input
                              type="number" min="0" step="1"
                              value={editForm.minWithdrawal}
                              onChange={(e) => setEditForm({...editForm, minWithdrawal: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Период выплат</Label>
                          <select
                            className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 text-sm"
                            value={editForm.payoutPeriod}
                            onChange={(e) => setEditForm({...editForm, payoutPeriod: e.target.value})}
                          >
                            <option value="daily">Ежедневно</option>
                            <option value="weekly">Еженедельно</option>
                            <option value="biweekly">Раз в 2 недели</option>
                            <option value="monthly">Ежемесячно</option>
                          </select>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">API настройки</h4>
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <Label>API Key</Label>
                              <Input
                                placeholder="Введите API ключ"
                                value={editForm.apiKey}
                                onChange={(e) => setEditForm({...editForm, apiKey: e.target.value})}
                                className="font-mono text-sm"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>API Secret</Label>
                              <Input
                                type="password"
                                placeholder="Введите API секрет"
                                value={editForm.apiSecret}
                                onChange={(e) => setEditForm({...editForm, apiSecret: e.target.value})}
                                className="font-mono text-sm"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Реферальная ссылка</Label>
                          <Input
                            placeholder="https://..."
                            value={editForm.referralLink}
                            onChange={(e) => setEditForm({...editForm, referralLink: e.target.value})}
                            className="font-mono text-sm"
                          />
                        </div>

                        <Button
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700"
                          onClick={handleSaveExchange}
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
