import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-500 border border-slate-200 dark:border-slate-700 shadow-sm transform active:scale-90"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <span className="text-indigo-400 block animate-in fade-in zoom-in duration-300">🌙</span>
      ) : (
        <span className="text-amber-500 block animate-in fade-in zoom-in duration-300">☀️</span>
      )}
    </button>
  );
};