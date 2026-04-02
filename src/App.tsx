// src/App.tsx
import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { FinanceProvider } from './contexts/FinanceContext';
import Dashboard from './pages/Dashboard';
import TransactionsPage from './pages/TransactionsPage';
import InsightsPage from './pages/InsightsPage';
import RoleSwitcher from './components/RoleSwitcher';
import { ThemeToggle } from './components/ThemeToggle';
// import Navbar from './components/common/Navbar'; // Missing file fix

const App: React.FC = () => {
  // For simplicity, we'll render all pages on one screen.
  // In a real app, you'd use React Router for navigation.
  return (
    <AuthProvider>
      <FinanceProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
          {/* Sticky Navbar with Glassmorphism */}
          <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
                </div>
                <h1 className="text-xl font-bold tracking-tight">Finance Dashboard</h1>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2" />
                <RoleSwitcher />
              </div>
            </div>
          </header>

          <main className="container mx-auto p-4 lg:p-8 space-y-8">
            <section>
              <Dashboard />
            </section>

            <section>
              <TransactionsPage />
            </section>

            <section>
              <InsightsPage />
            </section>
          </main>
        </div>
      </FinanceProvider>
    </AuthProvider>
  );
};

export default App;
