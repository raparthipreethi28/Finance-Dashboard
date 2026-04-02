import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import type { Transaction } from '../../data/mockData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const BalanceTrendChart: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  // Group data by date for Income vs Expenses
  const dailyTotals: Record<string, { income: number; expense: number }> = {};
  
  transactions.forEach(t => {
    if (!dailyTotals[t.date]) dailyTotals[t.date] = { income: 0, expense: 0 };
    if (t.type === 'income') dailyTotals[t.date].income += t.amount;
    else dailyTotals[t.date].expense += t.amount;
  });

  const sortedDates = Object.keys(dailyTotals).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  const data = {
    labels: sortedDates,
    datasets: [
      {
        label: 'Income',
        data: sortedDates.map(d => dailyTotals[d].income),
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.05)',
        pointBackgroundColor: '#10b981',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: sortedDates.map(d => dailyTotals[d].expense),
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.05)',
        pointBackgroundColor: '#ef4444',
        fill: true,
        tension: 0.4,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'top' as const, align: 'end' as const } }
  };

  return <div className="h-72"><Line data={data} options={options} /></div>;
};