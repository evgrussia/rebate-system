import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import {
  User,
  Mail,
  MessageCircle,
  Shield,
  Wallet,
  Bell,
  BellOff,
  Save,
  Copy,
  CheckCircle2,
  Trash2,
  Plus,
  AlertCircle,
  Smartphone
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

interface SavedWallet {
  id: string;
  label: string;
  address: string;
  network: string;
  isDefault: boolean;
}

export default function SettingsPage() {
  const { user } = useAuth();
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  // Profile state
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    telegramId: user?.telegramId || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Notification state
  const [notifications, setNotifications] = useState({
    emailRebate: true,
    emailWithdrawal: true,
    emailSecurity: true,
    emailNews: false,
    telegramRebate: true,
    telegramWithdrawal: true,
    telegramSecurity: true,
    telegramNews: false,
  });

  // Wallets state
  const [wallets, setWallets] = useState<SavedWallet[]>([
    { id: '1', label: 'Основной TRC20', address: 'TXnB5kL9mN3oP2qR4sT6uV8wX0yZ2aC4bD', network: 'TRC20', isDefault: true },
    { id: '2', label: 'ERC20 кошелёк', address: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD38', network: 'ERC20', isDefault: false },
  ]);

  const [newWallet, setNewWallet] = useState({ label: '', address: '', network: 'TRC20' });
  const [showAddWallet, setShowAddWallet] = useState(false);

  const handleSaveProfile = () => {
    if (profile.newPassword && profile.newPassword !== profile.confirmPassword) {
      toast.error('Пароли не совпадают');
      return;
    }
    toast.success('Профиль обновлён');
    setProfile(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
  };

  const handleSaveNotifications = () => {
    toast.success('Настройки уведомлений сохранены');
  };

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    toast.success('Адрес скопирован');
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const handleAddWallet = () => {
    if (!newWallet.label || !newWallet.address) {
      toast.error('Заполните все поля');
      return;
    }
    const wallet: SavedWallet = {
      id: Date.now().toString(),
      label: newWallet.label,
      address: newWallet.address,
      network: newWallet.network,
      isDefault: wallets.length === 0,
    };
    setWallets([...wallets, wallet]);
    setNewWallet({ label: '', address: '', network: 'TRC20' });
    setShowAddWallet(false);
    toast.success('Кошелёк добавлен');
  };

  const handleDeleteWallet = (walletId: string) => {
    setWallets(wallets.filter(w => w.id !== walletId));
    toast.success('Кошелёк удалён');
  };

  const handleSetDefaultWallet = (walletId: string) => {
    setWallets(wallets.map(w => ({ ...w, isDefault: w.id === walletId })));
    toast.success('Кошелёк по умолчанию обновлён');
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8 max-w-4xl">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-white/70 backdrop-blur-sm border border-gray-200">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="wallets">Кошелёк</TabsTrigger>
            <TabsTrigger value="notifications">Уведомления</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="space-y-6">
              {/* Personal Info */}
              <Card className="p-6 sm:p-8 border-gray-200/50 bg-white/70 backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Личные данные</h2>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="pl-11 h-12"
                        placeholder="Ваше имя"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="pl-11 h-12"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telegramId">
                      Telegram ID <span className="text-gray-400 text-sm">(для уведомлений)</span>
                    </Label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="telegramId"
                        value={profile.telegramId}
                        onChange={(e) => setProfile({ ...profile, telegramId: e.target.value })}
                        className="pl-11 h-12"
                        placeholder="@username или ID"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Security */}
              <Card className="p-6 sm:p-8 border-gray-200/50 bg-white/70 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Безопасность</h2>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Текущий пароль</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={profile.currentPassword}
                      onChange={(e) => setProfile({ ...profile, currentPassword: e.target.value })}
                      className="h-12"
                      placeholder="Введите текущий пароль"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Новый пароль</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={profile.newPassword}
                        onChange={(e) => setProfile({ ...profile, newPassword: e.target.value })}
                        className="h-12"
                        placeholder="Минимум 8 символов"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={profile.confirmPassword}
                        onChange={(e) => setProfile({ ...profile, confirmPassword: e.target.value })}
                        className="h-12"
                        placeholder="Повторите пароль"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              <Button
                onClick={handleSaveProfile}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-12 px-8"
              >
                <Save className="w-4 h-4 mr-2" />
                Сохранить профиль
              </Button>
            </div>
          </TabsContent>

          {/* Wallets Tab */}
          <TabsContent value="wallets">
            <div className="space-y-6">
              <Card className="p-6 sm:p-8 border-gray-200/50 bg-white/70 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-5 h-5 text-blue-600" />
                    <h2 className="text-lg font-semibold text-gray-900">Сохранённые кошельки</h2>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAddWallet(!showAddWallet)}
                    className="text-blue-600 border-blue-200 hover:bg-blue-50"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Добавить
                  </Button>
                </div>

                {/* Existing wallets */}
                <div className="space-y-3">
                  {wallets.map((wallet) => (
                    <div
                      key={wallet.id}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-gray-900">{wallet.label}</h3>
                          <Badge variant="outline" className="text-xs">{wallet.network}</Badge>
                          {wallet.isDefault && (
                            <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">По умолчанию</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {!wallet.isDefault && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleSetDefaultWallet(wallet.id)}
                              className="text-xs h-8"
                            >
                              Сделать основным
                            </Button>
                          )}
                          <button
                            onClick={() => handleDeleteWallet(wallet.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm text-gray-600 truncate flex-1">
                          {wallet.address}
                        </code>
                        <button
                          onClick={() => handleCopyAddress(wallet.address)}
                          className="flex-shrink-0 text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          {copiedAddress === wallet.address ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}

                  {wallets.length === 0 && (
                    <div className="text-center py-8">
                      <Wallet className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-600">Нет сохранённых кошельков</p>
                      <p className="text-sm text-gray-500 mt-1">Добавьте кошелёк для быстрого вывода средств</p>
                    </div>
                  )}
                </div>

                {/* Add wallet form */}
                {showAddWallet && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-4">
                    <h3 className="font-medium text-gray-900">Новый кошелёк</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Название</Label>
                        <Input
                          placeholder="Мой TRC20 кошелёк"
                          value={newWallet.label}
                          onChange={(e) => setNewWallet({ ...newWallet, label: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Сеть</Label>
                        <select
                          value={newWallet.network}
                          onChange={(e) => setNewWallet({ ...newWallet, network: e.target.value })}
                          className="w-full h-10 rounded-md border border-gray-200 px-3 text-sm"
                        >
                          <option value="TRC20">TRC20 (Tron)</option>
                          <option value="ERC20">ERC20 (Ethereum)</option>
                          <option value="BEP20">BEP20 (BSC)</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Адрес кошелька</Label>
                      <Input
                        placeholder="Вставьте адрес кошелька"
                        value={newWallet.address}
                        onChange={(e) => setNewWallet({ ...newWallet, address: e.target.value })}
                        className="font-mono text-sm"
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button onClick={handleAddWallet} className="bg-gradient-to-r from-blue-600 to-blue-700">
                        Добавить кошелёк
                      </Button>
                      <Button variant="outline" onClick={() => setShowAddWallet(false)}>
                        Отмена
                      </Button>
                    </div>
                  </div>
                )}
              </Card>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <strong>Безопасность:</strong> Всегда перепроверяйте адрес кошелька перед выводом средств.
                  Транзакции в блокчейне необратимы.
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <div className="space-y-6">
              {/* Email notifications */}
              <Card className="p-6 sm:p-8 border-gray-200/50 bg-white/70 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Email уведомления</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { key: 'emailRebate' as const, label: 'Начисление кэшбэка', desc: 'Уведомление при получении ребейта' },
                    { key: 'emailWithdrawal' as const, label: 'Статус вывода', desc: 'Изменение статуса заявки на вывод' },
                    { key: 'emailSecurity' as const, label: 'Безопасность', desc: 'Вход в аккаунт, смена пароля' },
                    { key: 'emailNews' as const, label: 'Новости и акции', desc: 'Новые биржи, бонусы, обновления' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                      <Switch
                        checked={notifications[item.key]}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, [item.key]: checked })
                        }
                      />
                    </div>
                  ))}
                </div>
              </Card>

              {/* Telegram notifications */}
              <Card className="p-6 sm:p-8 border-gray-200/50 bg-white/70 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Telegram уведомления</h2>
                </div>

                {user?.telegramId ? (
                  <div className="space-y-4">
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <div className="flex items-center gap-2 text-emerald-700 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Telegram подключён: <strong>{user.telegramId}</strong></span>
                      </div>
                    </div>
                    {[
                      { key: 'telegramRebate' as const, label: 'Начисление кэшбэка', desc: 'Мгновенное уведомление в Telegram' },
                      { key: 'telegramWithdrawal' as const, label: 'Статус вывода', desc: 'Обновления по выводу средств' },
                      { key: 'telegramSecurity' as const, label: 'Безопасность', desc: 'Предупреждения безопасности' },
                      { key: 'telegramNews' as const, label: 'Новости', desc: 'Новые возможности и акции' },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{item.label}</div>
                          <div className="text-xs text-gray-500">{item.desc}</div>
                        </div>
                        <Switch
                          checked={notifications[item.key]}
                          onCheckedChange={(checked) =>
                            setNotifications({ ...notifications, [item.key]: checked })
                          }
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BellOff className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-600">Telegram не подключён</p>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      Укажите Telegram ID в настройках профиля для получения уведомлений
                    </p>
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-200">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Подключить Telegram
                    </Button>
                  </div>
                )}
              </Card>

              <Button
                onClick={handleSaveNotifications}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-12 px-8"
              >
                <Save className="w-4 h-4 mr-2" />
                Сохранить настройки
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
