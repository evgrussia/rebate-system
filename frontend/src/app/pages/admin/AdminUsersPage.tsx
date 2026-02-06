import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Search,
  Mail,
  Phone,
  Building2,
  TrendingUp,
  X,
  Ban,
  CheckCircle2,
  Wallet,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface User {
  id: string;
  name: string;
  email: string;
  telegram?: string;
  exchanges: number;
  exchangeNames: string[];
  totalEarnings: number;
  totalVolume: number;
  referrals: number;
  status: 'active' | 'pending' | 'blocked';
  joinDate: string;
  lastActive: string;
  walletAddress?: string;
}

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [exchangeFilter, setExchangeFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Алексей Иванов',
      email: 'alex@example.com',
      telegram: '@alexcrypto',
      exchanges: 5,
      exchangeNames: ['Binance', 'Bybit', 'MEXC', 'OKX', 'Gate.io'],
      totalEarnings: 12543.50,
      totalVolume: 450000,
      referrals: 12,
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2 часа назад',
      walletAddress: 'TXnB5kL9mN3oP2qR4sT6uV8wX0yZ2aC4bD'
    },
    {
      id: '2',
      name: 'Мария Петрова',
      email: 'maria@example.com',
      telegram: '@mariatrader',
      exchanges: 3,
      exchangeNames: ['Binance', 'Bybit', 'MEXC'],
      totalEarnings: 8234.20,
      totalVolume: 320000,
      referrals: 8,
      status: 'active',
      joinDate: '2024-01-20',
      lastActive: '5 часов назад',
      walletAddress: 'TYnC6mM8oO4pP3rS5tT7vW9xX1zZ3bD5eF'
    },
    {
      id: '3',
      name: 'Дмитрий Сидоров',
      email: 'dmitry@example.com',
      exchanges: 4,
      exchangeNames: ['Binance', 'OKX', 'Gate.io', 'Bitget'],
      totalEarnings: 15678.90,
      totalVolume: 580000,
      referrals: 15,
      status: 'active',
      joinDate: '2024-01-10',
      lastActive: '1 день назад',
    },
    {
      id: '4',
      name: 'Елена Кузнецова',
      email: 'elena@example.com',
      telegram: '@elenacrypto',
      exchanges: 2,
      exchangeNames: ['Binance', 'Bybit'],
      totalEarnings: 4567.80,
      totalVolume: 180000,
      referrals: 5,
      status: 'pending',
      joinDate: '2024-02-01',
      lastActive: '3 дня назад',
    },
    {
      id: '5',
      name: 'Иван Смирнов',
      email: 'ivan@example.com',
      exchanges: 6,
      exchangeNames: ['Binance', 'Bybit', 'MEXC', 'OKX', 'Gate.io', 'KuCoin'],
      totalEarnings: 23456.70,
      totalVolume: 890000,
      referrals: 23,
      status: 'active',
      joinDate: '2023-12-05',
      lastActive: '30 минут назад',
      walletAddress: 'TBqF9pP1rR7sS6tT8uW0yZ2aC4bE6fG8hI'
    },
  ]);

  const stats = [
    { label: 'Всего пользователей', value: users.length.toString() },
    { label: 'Активные', value: users.filter(u => u.status === 'active').length.toString() },
    { label: 'Ожидание', value: users.filter(u => u.status === 'pending').length.toString() },
    { label: 'Заблокированные', value: users.filter(u => u.status === 'blocked').length.toString() },
  ];

  const getStatusBadge = (status: User['status']) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Активен</Badge>;
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-700 border-orange-200">Ожидание</Badge>;
      case 'blocked':
        return <Badge className="bg-red-100 text-red-700 border-red-200">Заблокирован</Badge>;
    }
  };

  const handleBlockUser = (userId: string) => {
    setUsers(users.map(u => u.id === userId ? { ...u, status: u.status === 'blocked' ? 'active' as const : 'blocked' as const } : u));
    const user = users.find(u => u.id === userId);
    if (user?.status === 'blocked') {
      toast.success(`Пользователь ${user.name} разблокирован`);
    } else {
      toast.success(`Пользователь ${user?.name} заблокирован`);
    }
    if (selectedUser?.id === userId) {
      setSelectedUser(prev => prev ? { ...prev, status: prev.status === 'blocked' ? 'active' as const : 'blocked' as const } : null);
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.telegram?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesExchange = exchangeFilter === 'all' || user.exchangeNames.includes(exchangeFilter);
    return matchesSearch && matchesStatus && matchesExchange;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <Card className="p-4 sm:p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Поиск по имени, email или Telegram..."
                className="pl-11"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[160px]">
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="active">Активные</SelectItem>
                <SelectItem value="pending">Ожидание</SelectItem>
                <SelectItem value="blocked">Заблокированные</SelectItem>
              </SelectContent>
            </Select>
            <Select value={exchangeFilter} onValueChange={setExchangeFilter}>
              <SelectTrigger className="w-full sm:w-[160px]">
                <SelectValue placeholder="Биржа" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все биржи</SelectItem>
                <SelectItem value="Binance">Binance</SelectItem>
                <SelectItem value="Bybit">Bybit</SelectItem>
                <SelectItem value="MEXC">MEXC</SelectItem>
                <SelectItem value="OKX">OKX</SelectItem>
                <SelectItem value="Gate.io">Gate.io</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Users Table */}
          <div className={`${selectedUser ? 'lg:flex-1' : 'w-full'} min-w-0`}>
            <Card className="border-gray-200/50 bg-white/70 backdrop-blur-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Пользователь</TableHead>
                    <TableHead className="hidden md:table-cell">Контакты</TableHead>
                    <TableHead>Биржи</TableHead>
                    <TableHead>Заработано</TableHead>
                    <TableHead className="hidden lg:table-cell">Рефералы</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow
                      key={user.id}
                      className={`cursor-pointer hover:bg-blue-50/50 transition-colors ${
                        selectedUser?.id === user.id ? 'bg-blue-50/70' : ''
                      }`}
                      onClick={() => setSelectedUser(user)}
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                            {user.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium text-gray-900 truncate">{user.name}</div>
                            <div className="text-xs text-gray-500">ID: {user.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="w-3.5 h-3.5" />
                            <span className="truncate">{user.email}</span>
                          </div>
                          {user.telegram && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="w-3.5 h-3.5" />
                              {user.telegram}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">{user.exchanges}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-mono font-semibold text-emerald-600">
                          ${user.totalEarnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </div>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">{user.referrals}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(user.status)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {filteredUsers.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600">Пользователи не найдены</p>
                </div>
              )}
            </Card>
          </div>

          {/* User Detail Panel */}
          {selectedUser && (
            <div className="lg:w-[380px] flex-shrink-0">
              <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm sticky top-24">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-xl font-semibold">
                      {selectedUser.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{selectedUser.name}</h3>
                      {getStatusBadge(selectedUser.status)}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedUser(null)}
                    className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{selectedUser.email}</span>
                    </div>
                    {selectedUser.telegram && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{selectedUser.telegram}</span>
                      </div>
                    )}
                    {selectedUser.walletAddress && (
                      <div className="flex items-center gap-2 text-sm">
                        <Wallet className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 font-mono text-xs truncate">{selectedUser.walletAddress}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Регистрация: {new Date(selectedUser.joinDate).toLocaleDateString('ru-RU')}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Статистика</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Заработано</div>
                        <div className="font-mono font-semibold text-emerald-600">
                          ${selectedUser.totalEarnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Объём</div>
                        <div className="font-mono font-semibold text-gray-900">
                          ${(selectedUser.totalVolume / 1000).toFixed(0)}K
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Биржи</div>
                        <div className="font-semibold text-gray-900">{selectedUser.exchanges}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Рефералы</div>
                        <div className="font-semibold text-gray-900">{selectedUser.referrals}</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Подключённые биржи</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedUser.exchangeNames.map((name) => (
                        <Badge key={name} variant="outline" className="text-xs">
                          {name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-xs text-gray-500 mb-3">Последняя активность: {selectedUser.lastActive}</div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`flex-1 ${
                          selectedUser.status === 'blocked'
                            ? 'text-emerald-600 border-emerald-200 hover:bg-emerald-50'
                            : 'text-red-600 border-red-200 hover:bg-red-50'
                        }`}
                        onClick={() => handleBlockUser(selectedUser.id)}
                      >
                        {selectedUser.status === 'blocked' ? (
                          <><CheckCircle2 className="w-4 h-4 mr-1.5" /> Разблокировать</>
                        ) : (
                          <><Ban className="w-4 h-4 mr-1.5" /> Заблокировать</>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
