'use client';

import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Gunakan mode terang' : 'Gunakan mode gelap'}
      className="flex items-center justify-center transition-colors border rounded-full size-10 border-line bg-surface text-muted hover:text-ink focus-ring"
    >
      {dark ? <LuSun size={18} /> : <LuMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
