import React, { useState } from 'react';
import type { Transaction } from '../../data/mockData';
import { Button } from '../common/Button';

interface TransactionFormProps {
  onSubmit: (transaction: Omit<Transaction, 'id'>) => void;
  onCancel: () => void;
  initialData?: Transaction | null;
  categories: string[];
}

export const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit, onCancel, initialData, categories }) => {
  const [formData, setFormData] = useState({
    date: initialData?.date || new Date().toISOString().split('T')[0],
    amount: initialData?.amount || 0,
    category: initialData?.category || categories[0] || '',
    type: (initialData?.type || 'expense') as 'income' | 'expense',
    description: initialData?.description || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold mb-4">{initialData ? 'Edit' : 'Add'} Transaction</h3>
      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <input type="text" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input type="number" value={formData.amount} onChange={e => setFormData({ ...formData, amount: Number(e.target.value) })} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value as 'income' | 'expense' })} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="secondary" type="button" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};