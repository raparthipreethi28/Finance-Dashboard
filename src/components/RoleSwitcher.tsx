// src/components/RoleSwitcher.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const RoleSwitcher: React.FC = () => {
  const { role, switchRole } = useAuth();

  const options = [
    { label: 'Viewer', value: 'Viewer' },
    { label: 'Admin', value: 'Admin' },
  ];

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switchRole(event.target.value as 'Viewer' | 'Admin');
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="role-switcher" className="text-sm font-medium">Current Role:</label>
      <select
        id="role-switcher"
        value={role}
        onChange={handleRoleChange}
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoleSwitcher;
