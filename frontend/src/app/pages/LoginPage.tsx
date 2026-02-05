import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { toast } from 'sonner';
import { 
  ArrowLeft, 
  Mail, 
  Lock,
  Sparkles,
  BarChart3,
  Wallet,
  Gift
} from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(formData.email, formData.password);
      toast.success('Добро пожаловать!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Неверный email или пароль');
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: BarChart3,
      title: 'Отслеживайте статистику',
      description: 'Детальная аналитика вашего кэшбэка'
    },
    {
      icon: Wallet,
      title: 'Управляйте биржами',
      description: 'Подключите до 11 бирж в одном месте'
    },
    {
      icon: Gift,
      title: 'Получайте бонусы',
      description: 'Приглашайте друзей и зарабатывайте больше'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-200/50 bg-white/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>На главную</span>
              </Link>
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-semibold text-gray-900">CryptoRebate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Features */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  С возвращением в <span className="text-blue-600">CryptoRebate</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Войдите в личный кабинет и продолжайте зарабатывать на каждой сделке
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <Card 
                    key={index}
                    className="p-6 border-gray-200/50 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-2">Быстрый вход для тестирования</h3>
                <div className="space-y-2 text-sm font-mono bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div>
                    <span className="opacity-75">Трейдер:</span> trader@test.com
                  </div>
                  <div>
                    <span className="opacity-75">Админ:</span> admin@test.com
                  </div>
                  <div>
                    <span className="opacity-75">Пароль:</span> любой (демо режим)
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Login Form */}
            <div>
              <Card className="p-8 border-gray-200/50 bg-white/70 backdrop-blur-xl shadow-xl">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Вход в систему</h2>
                  <p className="text-gray-600">Введите ваши данные для входа</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-11 h-12 bg-white/50"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Пароль</Label>
                      <a href="#" className="text-sm text-blue-600 hover:underline">
                        Забыли пароль?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Введите пароль"
                        className="pl-11 h-12 bg-white/50"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Вход...
                      </div>
                    ) : (
                      'Войти'
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Нет аккаунта?{' '}
                    <Link to="/register" className="text-blue-600 hover:underline font-medium">
                      Зарегистрироваться
                    </Link>
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Входя в систему, вы соглашаетесь с нашими{' '}
                    <a href="#" className="text-blue-600 hover:underline">условиями использования</a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}