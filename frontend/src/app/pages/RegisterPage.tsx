import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from 'sonner';
import { 
  ArrowLeft, 
  Mail, 
  Lock, 
  User, 
  MessageCircle,
  Sparkles,
  Shield,
  Zap,
  TrendingUp
} from 'lucide-react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    telegramId: '',
    agreeToTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Пароли не совпадают');
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error('Необходимо принять условия использования');
      return;
    }

    setIsLoading(true);
    try {
      await register(formData.email, formData.password, formData.name, formData.telegramId);
      toast.success('Регистрация успешна! Добро пожаловать в CryptoRebate');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Ошибка регистрации. Попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'До 60% кэшбэк',
      description: 'Возвращайте комиссии с каждой сделки'
    },
    {
      icon: Zap,
      title: 'Моментальные выплаты',
      description: 'Вывод средств в любое время'
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Ваши данные под защитой'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/5 to-emerald-200/5 rounded-full blur-3xl"></div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Начните зарабатывать <span className="text-blue-600">сегодня</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Присоединяйтесь к тысячам трейдеров, которые уже получают кэшбэк с каждой сделки
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={index}
                    className="p-6 border-gray-200/50 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-mono text-sm opacity-90">Бонус за регистрацию</div>
                    <div className="text-2xl font-bold">+5% кэшбэк</div>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  Получите повышенный кэшбэк на первый месяц использования платформы
                </p>
              </div>
            </div>

            {/* Right side - Registration Form */}
            <div>
              <Card className="p-8 border-gray-200/50 bg-white/70 backdrop-blur-xl shadow-xl">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Создать аккаун��</h2>
                  <p className="text-gray-600">Заполните форму для регистрации</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Ваше имя"
                        className="pl-11 h-12 bg-white/50"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
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
                        placeholder="your@email.com"
                        className="pl-11 h-12 bg-white/50"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telegramId">
                      Telegram ID <span className="text-gray-400 text-sm">(опционально)</span>
                    </Label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="telegramId"
                        type="text"
                        placeholder="@username или ID"
                        className="pl-11 h-12 bg-white/50"
                        value={formData.telegramId}
                        onChange={(e) => setFormData({ ...formData, telegramId: e.target.value })}
                      />
                    </div>
                    <p className="text-xs text-gray-500">Для получения уведомлений о выплатах</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Пароль</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Минимум 8 символов"
                        className="pl-11 h-12 bg-white/50"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        minLength={8}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Повторите пароль"
                        className="pl-11 h-12 bg-white/50"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, agreeToTerms: checked as boolean })
                      }
                      className="mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                      Я принимаю{' '}
                      <a href="#" className="text-blue-600 hover:underline">условия использования</a>
                      {' '}и{' '}
                      <a href="#" className="text-blue-600 hover:underline">политику конфиденциальности</a>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Регистрация...
                      </div>
                    ) : (
                      'Создать аккаунт'
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Уже есть аккаунт?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                      Войти
                    </Link>
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