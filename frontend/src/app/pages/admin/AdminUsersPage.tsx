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
  Search, 
  Filter,
  MoreVertical,
  Mail,
  Phone,
  Building2,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  telegram?: string;
  exchanges: number;
  totalEarnings: number;
  totalVolume: number;
  referrals: number;
  status: 'active' | 'pending' | 'blocked';
  joinDate: string;
}

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const users: User[] = [
    {
      id: '1',
      name: 'Алексей Иванов',
      email: 'alex@example.com',
      telegram: '@alexcrypto',
      exchanges: 5,
      totalEarnings: 12543.50,
      totalVolume: 450000,
      referrals: 12,
      status: 'active',
      joinDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Мария Петрова',
      email: 'maria@example.com',
      telegram: '@mariatrader',
      exchanges: 3,
      totalEarnings: 8234.20,
      totalVolume: 320000,
      referrals: 8,
      status: 'active',
      joinDate: '2024-01-20'
    },
    {
      id: '3',
      name: 'Дмитрий Сидоров',
      email: 'dmitry@example.com',
      exchanges: 4,
      totalEarnings: 15678.90,
      totalVolume: 580000,
      referrals: 15,
      status: 'active',
      joinDate: '2024-01-10'
    },
    {
      id: '4',
      name: 'Елена Кузнецова',
      email: 'elena@example.com',
      telegram: '@elenacrypto',
      exchanges: 2,
      totalEarnings: 4567.80,
      totalVolume: 180000,
      referrals: 5,
      status: 'pending',
      joinDate: '2024-02-01'
    },
    {
      id: '5',
      name: 'Иван Смирнов',
      email: 'ivan@example.com',
      exchanges: 6,
      totalEarnings: 23456.70,
      totalVolume: 890000,
      referrals: 23,
      status: 'active',
      joinDate: '2023-12-05'
    },
  ];

  const stats = [
    {
      label: 'Всего пользователей',
      value: users.length.toString(),
      icon: 'total'
    },
    {
      label: 'Активные',
      value: users.filter(u => u.status === 'active').length.toString(),
      icon: 'active'
    },
    {
      label: 'Ожидание',
      value: users.filter(u => u.status === 'pending').length.toString(),
      icon: 'pending'
    },
    {
      label: 'Заблокированные',
      value: users.filter(u => u.status === 'blocked').length.toString(),
      icon: 'blocked'
    },
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

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.telegram?.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Поиск по имени, email или Telegram..."
                className="pl-11"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="border-gray-300">
              <Filter className="w-4 h-4 mr-2" />
              Фильтры
            </Button>
          </div>
        </Card>

        {/* Users Table */}
        <Card className="border-gray-200/50 bg-white/70 backdrop-blur-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Пользователь</TableHead>
                <TableHead>Контакты</TableHead>
                <TableHead>Биржи</TableHead>
                <TableHead>Заработано</TableHead>
                <TableHead>Объем</TableHead>
                <TableHead>Рефералы</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Дата регистрации</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-50/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">ID: {user.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        {user.email}
                      </div>
                      {user.telegram && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4" />
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
                  <TableCell>
                    <div className="font-mono text-gray-900">
                      ${(user.totalVolume / 1000).toFixed(0)}K
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">{user.referrals}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(user.status)}
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-600">
                      {new Date(user.joinDate).toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Пользователи не найдены</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
