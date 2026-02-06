import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Toaster } from './components/ui/sonner';

// Public Pages
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

// Trader Pages
import DashboardPage from './pages/DashboardPage';
import ExchangesPage from './pages/ExchangesPage';
import ExchangeDetailPage from './pages/ExchangeDetailPage';
import WithdrawalsPage from './pages/WithdrawalsPage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';

// Admin Pages
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminPayoutsPage from './pages/admin/AdminPayoutsPage';
import AdminExchangesPage from './pages/admin/AdminExchangesPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Trader Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          <Route
            path="/exchanges"
            element={
              <ProtectedRoute>
                <ExchangesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exchanges/:id"
            element={
              <ProtectedRoute>
                <ExchangeDetailPage />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/withdrawals" 
            element={
              <ProtectedRoute>
                <WithdrawalsPage />
              </ProtectedRoute>
            } 
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute requireAdmin>
                <AdminDashboardPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/users" 
            element={
              <ProtectedRoute requireAdmin>
                <AdminUsersPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/payouts" 
            element={
              <ProtectedRoute requireAdmin>
                <AdminPayoutsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/exchanges" 
            element={
              <ProtectedRoute requireAdmin>
                <AdminExchangesPage />
              </ProtectedRoute>
            } 
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-right" />
      </BrowserRouter>
    </AuthProvider>
  );
}