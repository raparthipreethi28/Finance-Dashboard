// src/pages/InsightsPage.tsx
import React, { useMemo } from 'react';
import { useFinance } from '../contexts/FinanceContext';
import { Card } from '../components/common/Card'; // Reusing Card component
import { formatCurrency } from '../utils/helpers';

const InsightsPage: React.FC = () => {
  const { transactions, categories } = useFinance();

  // Insight 1: Highest Spending Category
  const highestSpendingCategory = useMemo(() => {
    const expenseByCategory: { [key: string]: number } = {};
    transactions
      .filter(t => t.type === 'expense')
      .forEach(t => {
        expenseByCategory[t.category] = (expenseByCategory[t.category] || 0) + t.amount;
      });

    let maxCategory = 'N/A';
    let maxAmount = 0;
    for (const category in expenseByCategory) {
      if (expenseByCategory[category] > maxAmount) {
        maxAmount = expenseByCategory[category];
        maxCategory = category;
      }
    }
    return { category: maxCategory, amount: maxAmount };
  }, [transactions]);

  // Insight 2: Monthly Spending Comparison (Current vs. Previous Month)
  const monthlySpendingComparison = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const prevMonthDate = new Date(now);
    prevMonthDate.setMonth(now.getMonth() - 1);
    const previousMonth = prevMonthDate.getMonth();
    const previousYear = prevMonthDate.getFullYear();

    let currentMonthExpenses = 0;
    let previousMonthExpenses = 0;

    transactions
      .filter(t => t.type === 'expense')
      .forEach(t => {
        const transactionDate = new Date(t.date);
        if (transactionDate.getMonth() === currentMonth && transactionDate.getFullYear() === currentYear) {
          currentMonthExpenses += t.amount;
        } else if (transactionDate.getMonth() === previousMonth && transactionDate.getFullYear() === previousYear) {
          previousMonthExpenses += t.amount;
        }
      });

    const difference = currentMonthExpenses - previousMonthExpenses;
    const percentageChange = previousMonthExpenses === 0 ? (difference > 0 ? 100 : 0) : (difference / previousMonthExpenses) * 100;

    return {
      currentMonthExpenses,
      previousMonthExpenses,
      difference,
      percentageChange: isFinite(percentageChange) ? percentageChange.toFixed(2) : 'N/A',
    };
  }, [transactions]);

  return (
    <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <header className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Financial Insights</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Automated analysis of your activity</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Highest Spending Category" value={`${highestSpendingCategory.category} (${formatCurrency(highestSpendingCategory.amount)})`} />
        <Card
          title="Monthly Spending Trend"
          value={`Current: ${formatCurrency(monthlySpendingComparison.currentMonthExpenses)}`}
          description={`Previous: ${formatCurrency(monthlySpendingComparison.previousMonthExpenses)} (${monthlySpendingComparison.percentageChange}% ${monthlySpendingComparison.difference >= 0 ? 'increase' : 'decrease'})`}
          type={monthlySpendingComparison.difference <= 0 ? 'positive' : 'negative'}
        />
        {/* Add more insights here */}
        <Card title="Total Categories Tracked" value={categories.length.toString()} />
        {transactions.length === 0 && (
          <Card title="No Data Yet" value="Add some transactions to see insights!" />
        )}
      </div>
    </div>
  );
};

export default InsightsPage;
