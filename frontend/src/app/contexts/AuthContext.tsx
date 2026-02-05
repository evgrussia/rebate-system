import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'trader' | 'admin';
  telegramId?: string;
  referralCode: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, telegramId?: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверяем наличие сохраненного пользователя в localStorage
    const savedUser = localStorage.getItem('cryptorebate_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Демо данные для тестирования
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: email.includes('admin') ? 'admin' : 'trader',
        referralCode: 'REF' + Math.random().toString(36).substr(2, 6).toUpperCase(),
        createdAt: new Date().toISOString(),
      };
      
      setUser(mockUser);
      localStorage.setItem('cryptorebate_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Ошибка входа');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string, telegramId?: string) => {
    setIsLoading(true);
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        role: 'trader',
        telegramId,
        referralCode: 'REF' + Math.random().toString(36).substr(2, 6).toUpperCase(),
        createdAt: new Date().toISOString(),
      };
      
      setUser(mockUser);
      localStorage.setItem('cryptorebate_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Ошибка регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cryptorebate_user');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        isLoading, 
        login, 
        register, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
