// src/pages/TransactionsPage.tsx
import React, { useState, useMemo } from 'react';
import { useFinance } from '../contexts/FinanceContext';
import { useAuth } from '../contexts/AuthContext';
import { TransactionTable } from '../components/transactions/TransactionTable';
import { TransactionForm } from '../components/transactions/TransactionForm';
import { TransactionFilters } from '../components/transactions/TransactionFilters';
import { Modal } from '../components/common/Modal'; // You'd create this
import { Button } from '../components/common/Button'; // You'd create this
import type { Transaction } from '../data/mockData';

const TransactionsPage: React.FC = () => {
  const { transactions, categories, addTransaction, editTransaction, deleteTransaction } = useFinance();
  const { role } = useAuth();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const filteredAndSortedTransactions = useMemo(() => {
    let filtered = transactions;

    // Search
    if (searchTerm) {
      filtered = filtered.filter(
        (t) =>
          t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter((t) => t.type === filterType);
    }

    // Filter by category
    if (filterCategory !== 'all') {
      filtered = filtered.filter((t) => t.category === filterCategory);
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'date') {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === 'amount') {
        comparison = a.amount - b.amount;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return sorted;
  }, [transactions, searchTerm, filterType, filterCategory, sortBy, sortOrder]);

  const handleAddEdit = (transaction: Omit<Transaction, 'id'>) => {
    if (editingTransaction) {
      editTransaction(editingTransaction.id, transaction);
    } else {
      addTransaction(transaction);
    }
    setIsModalOpen(false);
    setEditingTransaction(null);
  };

  const handleEditClick = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      deleteTransaction(id);
    }
  };

  return (
    <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-100">Transactions</h2>

      <TransactionFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        setFilterType={setFilterType}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        categories={categories}
      />

      {role === 'Admin' && (
        <div className="mb-4">
          <Button onClick={() => { setEditingTransaction(null); setIsModalOpen(true); }}>
            Add New Transaction
          </Button>
        </div>
      )}

      {filteredAndSortedTransactions.length > 0 ? (
        <TransactionTable
          transactions={filteredAndSortedTransactions}
          onEdit={role === 'Admin' ? handleEditClick : undefined}
          onDelete={role === 'Admin' ? handleDeleteClick : undefined}
        />
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">No transactions found matching your criteria.</p>
      )}

      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setEditingTransaction(null); }}>
        <TransactionForm
          onSubmit={handleAddEdit}
          initialData={editingTransaction}
          onCancel={() => { setIsModalOpen(false); setEditingTransaction(null); }}
          categories={categories}
        />
      </Modal>
    </div>
  );
};

export default TransactionsPage;
