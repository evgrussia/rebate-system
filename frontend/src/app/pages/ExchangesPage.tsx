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
  DollarSign,
  Search,
  Copy,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router';

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
  referralLink?: string;
}

type FilterType = 'all' | 'connected' | 'available';

export default function ExchangesPage() {
  const [exchanges, setExchanges] = useState<Exchange[]>([
    {
      id: 'binance',
      name: 'Binance',
      logo: '\uD83D\uDFE1',
      rebateRate: '40%',
      isConnected: true,
      earnings: 4520.30,
      volume: 125000,
      lastSync: '5 минут назад',
      referralLink: 'https://accounts.binance.com/register?ref=CR40BACK'
    },
    {
      id: 'bybit',
      name: 'Bybit',
      logo: '\uD83D\uDFE0',
      rebateRate: '45%',
      isConnected: true,
      earnings: 3210.50,
      volume: 89000,
      lastSync: '10 минут назад',
      referralLink: 'https://www.bybit.com/invite?ref=CR45BACK'
    },
    {
      id: 'mexc',
      name: 'MEXC',
      logo: '\uD83D\uDD35',
      rebateRate: '60%',
      isConnected: true,
      earnings: 2850.80,
      volume: 67000,
      lastSync: '15 минут назад',
      referralLink: 'https://www.mexc.com/register?ref=CR60BACK'
    },
    {
      id: 'okx',
      name: 'OKX',
      logo: '\u26AB',
      rebateRate: '35%',
      isConnected: true,
      earnings: 1520.40,
      volume: 54000,
      lastSync: '1 час назад',
      referralLink: 'https://www.okx.com/join?ref=CR35BACK'
    },
    {
      id: 'gateio',
      name: 'Gate.io',
      logo: '\uD83D\uDFE2',
      rebateRate: '50%',
      isConnected: true,
      earnings: 441.50,
      volume: 12000,
      lastSync: '30 минут назад',
      referralLink: 'https://www.gate.io/signup?ref=CR50BACK'
    },
    { id: 'kucoin', name: 'KuCoin', logo: '\uD83D\uDFE2', rebateRate: '45%', isConnected: false, referralLink: 'https://www.kucoin.com/r/CR45BACK' },
    { id: 'htx', name: 'HTX (Huobi)', logo: '\uD83D\uDD35', rebateRate: '40%', isConnected: false, referralLink: 'https://www.htx.com/invite?ref=CR40BACK' },
    { id: 'bitget', name: 'Bitget', logo: '\uD83D\uDD35', rebateRate: '50%', isConnected: false, referralLink: 'https://www.bitget.com/referral?ref=CR50BACK' },
    { id: 'bingx', name: 'BingX', logo: '\uD83D\uDD35', rebateRate: '55%', isConnected: false, referralLink: 'https://bingx.com/invite?ref=CR55BACK' },
    { id: 'phemex', name: 'Phemex', logo: '\uD83D\uDFE1', rebateRate: '45%', isConnected: false, referralLink: 'https://phemex.com/register?ref=CR45BACK' },
    { id: 'coinex', name: 'CoinEx', logo: '\uD83D\uDD34', rebateRate: '40%', isConnected: false, referralLink: 'https://www.coinex.com/register?ref=CR40BACK' },
  ]);

  const [selectedExchange, setSelectedExchange] = useState<Exchange | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleConnectExchange = () => {
    if (!apiKey || !apiSecret) {
      toast.error('Заполните все поля');
      return;
    }

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

  const handleCopyReferral = (exchangeId: string, link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(exchangeId);
    toast.success('Реферальная ссылка скопирована!');
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const filteredExchanges = exchanges.filter(ex => {
    const matchesSearch = ex.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' ||
      (filter === 'connected' && ex.isConnected) ||
      (filter === 'available' && !ex.isConnected);
    return matchesSearch && matchesFilter;
  });

  const connectedExchanges = filteredExchanges.filter(ex => ex.isConnected);
  const availableExchanges = filteredExchanges.filter(ex => !ex.isConnected);
  const totalEarnings = exchanges.filter(ex => ex.isConnected).reduce((sum, ex) => sum + (ex.earnings || 0), 0);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'Все' },
    { key: 'connected', label: 'Подключённые' },
    { key: 'available', label: 'Не подключённые' },
  ];

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
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{exchanges.filter(e => e.isConnected).length}</div>
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

        {/* Search & Filters */}
        <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <Input
                placeholder="Поиск биржи..."
                className="pl-9 sm:pl-11 h-10 sm:h-11"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-md transition-all ${
                    filter === f.key ? 'bg-white text-blue-600 shadow-sm font-medium' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Connected Exchanges */}
        {connectedExchanges.length > 0 && (
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

                    {/* Referral Link */}
                    {exchange.referralLink && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-blue-700 font-medium mb-1">Реферальная ссылка</div>
                          <div className="font-mono text-xs text-blue-900 truncate">{exchange.referralLink}</div>
                        </div>
                        <button
                          onClick={() => handleCopyReferral(exchange.id, exchange.referralLink!)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-md transition-colors flex-shrink-0"
                        >
                          {copiedLink === exchange.id ? (
                            <><CheckCircle2 className="w-3.5 h-3.5" /> Скопировано</>
                          ) : (
                            <><Copy className="w-3.5 h-3.5" /> Копировать</>
                          )}
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                        <Link to={`/exchanges/${exchange.id}`}>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          Детали
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                        </Link>
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
        )}

        {/* Available Exchanges */}
        {availableExchanges.length > 0 && (
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

                  {exchange.referralLink && (
                    <div className="mb-4 bg-gray-50 rounded-lg p-2.5 flex items-center gap-2">
                      <div className="font-mono text-[10px] text-gray-600 truncate flex-1">{exchange.referralLink}</div>
                      <button
                        onClick={() => handleCopyReferral(exchange.id, exchange.referralLink!)}
                        className="text-gray-400 hover:text-blue-600 transition-colors flex-shrink-0"
                      >
                        {copiedLink === exchange.id ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}

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
        )}

        {filteredExchanges.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">Биржи не найдены</p>
            <p className="text-sm text-gray-500 mt-1">Попробуйте изменить поисковый запрос или фильтр</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
