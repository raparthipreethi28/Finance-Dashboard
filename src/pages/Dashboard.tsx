// src/pages/Dashboard.tsx
import React from 'react';
import { useFinance } from '../contexts/FinanceContext';
import { Card } from '../components/common/Card'; // You'd create this
import { BalanceTrendChart } from '../components/charts/BalanceTrendChart';
import { SpendingBreakdownChart } from '../components/charts/SpendingBreakdownChart';
import { formatCurrency } from '../utils/helpers'; // You'd create this

const Dashboard: React.FC = () => {
  const { totalBalance, totalIncome, totalExpenses, transactions } = useFinance();

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Balance" value={formatCurrency(totalBalance)} type="neutral" gradient />
        <Card title="Total Income" value={formatCurrency(totalIncome)} type="positive" gradient />
        <Card title="Total Expenses" value={formatCurrency(totalExpenses)} type="negative" gradient />
      </div>

      {/* Charts with clear Title -> Legend -> Chart hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
          <header className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Income vs Expenses</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Monthly trend analysis</p>
          </header>
          <BalanceTrendChart transactions={transactions} />
        </div>
        <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
          <header className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Spending Breakdown</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Allocation by category</p>
          </header>
          <SpendingBreakdownChart transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
