import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { Transaction } from '../../data/mockData';

ChartJS.register(ArcElement, Tooltip, Legend);

export const SpendingBreakdownChart: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  const expenses = transactions.filter(t => t.type === 'expense');
  const categoryTotals: Record<string, number> = {};
  
  expenses.forEach(t => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [{
      data: Object.values(categoryTotals),
      backgroundColor: [
        '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#6366F1', '#EC4899', '#8B5CF6'
      ],
      borderWidth: 1,
    }]
  };

  return <div className="h-64"><Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false }} /></div>;
};