import React from 'react';

interface CardProps {
  title: string;
  value: string;
  description?: string;
  type?: 'positive' | 'negative' | 'neutral';
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({ title, value, description, type = 'neutral', gradient = false }) => {
  const getGradientStyles = () => {
    if (!gradient) return 'bg-white dark:bg-[#1e293b] border-slate-200 dark:border-slate-700';
    
    switch (type) {
      case 'positive': return 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-transparent';
      case 'negative': return 'bg-gradient-to-br from-rose-500 to-red-600 text-white border-transparent';
      default: return 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white border-transparent';
    }
  };

  const getLabelColor = () => {
    if (gradient) return 'text-blue-50/80';
    return 'text-slate-500 dark:text-gray-400';
  };

  const getValueColor = () => {
    if (gradient) return 'text-white';
    if (type === 'positive') return 'text-emerald-500';
    if (type === 'negative') return 'text-rose-500';
    return 'text-slate-900 dark:text-slate-100';
  };

  return (
    <div className={`p-6 rounded-[14px] shadow-sm border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${getGradientStyles()}`}>
      <div className="flex flex-col gap-1">
        <h3 className={`text-xs font-bold uppercase tracking-widest ${getLabelColor()}`}>{title}</h3>
        <p className={`text-3xl font-extrabold tracking-tight ${getValueColor()}`}>{value}</p>
        {description && <p className={`mt-2 text-sm ${gradient ? 'text-blue-50/70' : 'text-slate-500'}`}>{description}</p>}
      </div>
    </div>
  );
};