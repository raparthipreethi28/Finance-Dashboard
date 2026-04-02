// src/data/mockData.ts
export interface Transaction {
  id: string;
  date: string; // YYYY-MM-DD
  amount: number;
  category: string;
  type: 'income' | 'expense';
  description: string;
}

export const initialTransactions: Transaction[] = [
  { id: '1', date: '2024-03-01', amount: 1200, category: 'Salary', type: 'income', description: 'Monthly salary' },
  { id: '2', date: '2024-03-03', amount: 50, category: 'Groceries', type: 'expense', description: 'Weekly grocery shopping' },
  { id: '3', date: '2024-03-05', amount: 150, category: 'Utilities', type: 'expense', description: 'Electricity bill' },
  { id: '4', date: '2024-03-08', amount: 30, category: 'Transportation', type: 'expense', description: 'Bus fare' },
  { id: '5', date: '2024-03-10', amount: 200, category: 'Freelance', type: 'income', description: 'Project payment' },
  { id: '6', date: '2024-03-12', amount: 75, category: 'Dining Out', type: 'expense', description: 'Dinner with friends' },
  { id: '7', date: '2024-03-15', amount: 40, category: 'Entertainment', type: 'expense', description: 'Movie tickets' },
  { id: '8', date: '2024-03-18', amount: 60, category: 'Groceries', type: 'expense', description: 'Mid-week groceries' },
  { id: '9', date: '2024-03-20', amount: 100, category: 'Shopping', type: 'expense', description: 'New shirt' },
  { id: '10', date: '2024-03-22', amount: 1000, category: 'Rent', type: 'expense', description: 'Monthly rent payment' },
  { id: '11', date: '2024-04-01', amount: 1200, category: 'Salary', type: 'income', description: 'Monthly salary' },
  { id: '12', date: '2024-04-02', amount: 60, category: 'Groceries', type: 'expense', description: 'Weekly grocery shopping' },
  { id: '13', date: '2024-04-05', amount: 160, category: 'Utilities', type: 'expense', description: 'Water bill' },
  { id: '14', date: '2024-04-08', amount: 45, category: 'Transportation', type: 'expense', description: 'Gas refill' },
  { id: '15', date: '2024-04-10', amount: 250, category: 'Freelance', type: 'income', description: 'Another project payment' },
];
