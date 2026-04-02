import React from 'react';

interface TransactionFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: 'all' | 'income' | 'expense';
  setFilterType: (type: 'all' | 'income' | 'expense') => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  sortBy: 'date' | 'amount';
  setSortBy: (sort: 'date' | 'amount') => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
  categories: string[];
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <input type="text" placeholder="Search description..." value={props.searchTerm} onChange={e => props.setSearchTerm(e.target.value)} className="p-2.5 border border-slate-200 rounded-xl bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
      <select value={props.filterType} onChange={e => props.setFilterType(e.target.value as any)} className="p-2.5 border border-slate-200 rounded-xl bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <select value={props.filterCategory} onChange={e => props.setFilterCategory(e.target.value)} className="p-2.5 border border-slate-200 rounded-xl bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
        <option value="all">All Categories</option>
        {props.categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <div className="flex space-x-2">
        <select value={props.sortBy} onChange={e => props.setSortBy(e.target.value as any)} className="flex-1 p-2.5 border border-slate-200 rounded-xl bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <button onClick={() => props.setSortOrder(props.sortOrder === 'asc' ? 'desc' : 'asc')} className="px-4 border border-slate-200 rounded-xl bg-slate-100 dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
          {props.sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>
    </div>
  );
};