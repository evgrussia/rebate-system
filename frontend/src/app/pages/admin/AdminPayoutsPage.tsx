import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  CheckCircle2, 
  XCircle, 
  Clock,
  DollarSign,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface Payout {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  amount: number;
  currency: string;
  network: string;
  address: string;
  status: 'pending' | 'approved' | 'rejected' | 'processing' | 'completed';
  requestDate: string;
  processedDate?: string;
  adminNote?: string;
}

export default function AdminPayoutsPage() {
  const [payouts, setPayouts] = useState<Payout[]>([
    {
      id: '1',
      userId: 'U1',
      userName: 'Алексей Иванов',
      userEmail: 'alex@example.com',
      amount: 500,
      currency: 'USDT',
      network: 'TRC20',
      address: 'TXnB5kL9mN3oP2qR4sT6uV8wX0yZ2aC4bD',
      status: 'pending',
      requestDate: '2024-02-04T10:30:00',
    },
    {
      id: '2',
      userId: 'U2',
      userName: 'Мария Петрова',
      userEmail: 'maria@example.com',
      amount: 300,
      currency: 'USDT',
      network: 'TRC20',
      address: 'TYnC6mM8oO4pP3rS5tT7vW9xX1zZ3bD5eF',
      status: 'pending',
      requestDate: '2024-02-04T09:15:00',
    },
    {
      id: '3',
      userId: 'U3',
      userName: 'Дмитрий Сидоров',
      userEmail: 'dmitry@example.com',
      amount: 150,
      currency: 'USDT',
      network: 'TRC20',
      address: 'TZoD7nN9pP5qQ4rR6sU8wY0xZ2aC4bE6fG',
      status: 'processing',
      requestDate: '2024-02-03T14:20:00',
    },
    {
      id: '4',
      userId: 'U4',
      userName: 'Елена Кузнецова',
      userEmail: 'elena@example.com',
      amount: 750,
      currency: 'USDT',
      network: 'TRC20',
      address: 'TApE8oO0qQ6rR5sS7tV9xZ1aC3bD5eF7gH',
      status: 'completed',
      requestDate: '2024-02-02T11:45:00',
      processedDate: '2024-02-02T15:30:00',
    },
    {
      id: '5',
      userId: 'U5',
      userName: 'Иван Смирнов',
      userEmail: 'ivan@example.com',
      amount: 200,
      currency: 'USDT',
      network: 'TRC20',
      address: 'TBqF9pP1rR7sS6tT8uW0yZ2aC4bE6fG8hI',
      status: 'rejected',
      requestDate: '2024-02-01T16:30:00',
      processedDate: '2024-02-01T18:00:00',
      adminNote: 'Недостаточно средств на балансе'
    },
  ]);

  const stats = {
    pending: payouts.filter(p => p.status === 'pending').length,
    pendingAmount: payouts.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0),
    processing: payouts.filter(p => p.status === 'processing').length,
    completed: payouts.filter(p => p.status === 'completed').length,
    completedAmount: payouts.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0),
  };

  const handleApprove = (payoutId: string) => {
    setPayouts(payouts.map(p => 
      p.id === payoutId 
        ? { ...p, status: 'processing' as const, processedDate: new Date().toISOString() }
        : p
    ));
    toast.success('Выплата одобрена и отправлена в обработку');
  };

  const handleReject = (payoutId: string) => {
    setPayouts(payouts.map(p => 
      p.id === payoutId 
        ? { ...p, status: 'rejected' as const, processedDate: new Date().toISOString() }
        : p
    ));
    toast.error('Выплата отклонена');
  };

  const getStatusBadge = (status: Payout['status']) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-700 border-orange-200">Ожидает</Badge>;
      case 'approved':
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Одобрена</Badge>;
      case 'processing':
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Обработка</Badge>;
      case 'completed':
        return <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Завершена</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-700 border-red-200">Отклонена</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderPayoutCard = (payout: Payout) => (
    <Card 
      key={payout.id}
      className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-semibold">
            {payout.userName.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-gray-900">{payout.userName}</h3>
              {getStatusBadge(payout.status)}
            </div>
            <p className="text-sm text-gray-600 mb-1">{payout.userEmail}</p>
            <p className="text-xs text-gray-500">ID: {payout.userId}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="font-mono font-bold text-2xl text-gray-900">
            ${payout.amount.toFixed(2)}
          </div>
          <div className="text-sm text-gray-500 mt-1">{payout.currency}</div>
        </div>
      </div>

      <div className="space-y-2 mb-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Сеть:</span>
          <span className="font-medium text-gray-900">{payout.network}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Адрес:</span>
          <code className="font-mono text-xs text-gray-900 bg-white px-2 py-1 rounded">
            {payout.address.slice(0, 20)}...
          </code>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Дата запроса:</span>
          <span className="text-gray-900">{formatDate(payout.requestDate)}</span>
        </div>
        {payout.processedDate && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Дата обработки:</span>
            <span className="text-gray-900">{formatDate(payout.processedDate)}</span>
          </div>
        )}
      </div>

      {payout.adminNote && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-900">
            <strong>Примечание:</strong> {payout.adminNote}
          </p>
        </div>
      )}

      {payout.status === 'pending' && (
        <div className="flex gap-3">
          <Button
            className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
            onClick={() => handleApprove(payout.id)}
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Одобрить
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
            onClick={() => handleReject(payout.id)}
          >
            <XCircle className="w-4 h-4 mr-2" />
            Отклонить
          </Button>
        </div>
      )}
    </Card>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-sm text-gray-600">Ожидают</div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.pending}</div>
            <div className="text-sm text-gray-500 font-mono mt-1">
              ${stats.pendingAmount.toFixed(2)}
            </div>
          </Card>

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-sm text-gray-600">В обработке</div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.processing}</div>
          </Card>

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-sm text-gray-600">Завершено</div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.completed}</div>
            <div className="text-sm text-gray-500 font-mono mt-1">
              ${stats.completedAmount.toFixed(2)}
            </div>
          </Card>

          <Card className="p-6 border-gray-200/50 bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-sm text-gray-600">Всего выплат</div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{payouts.length}</div>
          </Card>
        </div>

        {/* Payouts Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="bg-white/70 backdrop-blur-sm border border-gray-200">
            <TabsTrigger value="pending">
              Ожидают ({stats.pending})
            </TabsTrigger>
            <TabsTrigger value="processing">
              В обработке ({stats.processing})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Завершенные
            </TabsTrigger>
            <TabsTrigger value="rejected">
              Отклоненные
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <div className="grid gap-4">
              {payouts.filter(p => p.status === 'pending').map(renderPayoutCard)}
              {payouts.filter(p => p.status === 'pending').length === 0 && (
                <Card className="p-12 text-center border-gray-200/50 bg-white/70">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Нет ожидающих выплат</p>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="processing">
            <div className="grid gap-4">
              {payouts.filter(p => p.status === 'processing').map(renderPayoutCard)}
              {payouts.filter(p => p.status === 'processing').length === 0 && (
                <Card className="p-12 text-center border-gray-200/50 bg-white/70">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Нет выплат в обработке</p>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid gap-4">
              {payouts.filter(p => p.status === 'completed').map(renderPayoutCard)}
              {payouts.filter(p => p.status === 'completed').length === 0 && (
                <Card className="p-12 text-center border-gray-200/50 bg-white/70">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Нет завершенных выплат</p>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="rejected">
            <div className="grid gap-4">
              {payouts.filter(p => p.status === 'rejected').map(renderPayoutCard)}
              {payouts.filter(p => p.status === 'rejected').length === 0 && (
                <Card className="p-12 text-center border-gray-200/50 bg-white/70">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Нет отклоненных выплат</p>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
