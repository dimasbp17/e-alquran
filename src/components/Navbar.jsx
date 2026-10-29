'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBookQuran } from 'react-icons/fa6';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: "Al-Qur'an" },
  { href: '/doa-harian', label: 'Doa Harian' },
  { href: '/bacaan-shalat', label: 'Bacaan Shalat' },
  { href: '/asmaul-husna', label: 'Asmaul Husna' },
];

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href) =>
    href === '/'
      ? pathname === '/' || pathname.startsWith('/surah')
      : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-16 gap-4 container-page">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-ring"
        >
          <span className="flex items-center justify-center text-white rounded-xl size-9 bg-brand dark:text-canvas">
            <FaBookQuran size={18} />
          </span>
          <span className="text-lg font-bold tracking-tight">
            E-Alqur&apos;an
          </span>
        </Link>

        <nav className="items-center hidden gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors focus-ring ${
                isActive(link.href)
                  ? 'bg-brand-soft text-brand'
                  : 'text-muted hover:text-ink hover:bg-subtle'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>

      {/* Navigasi mobile */}
      <nav className="flex gap-2 pb-3 overflow-x-auto md:hidden container-page no-scrollbar">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`shrink-0 px-4 py-1.5 text-sm font-medium rounded-full border transition-colors focus-ring ${
              isActive(link.href)
                ? 'bg-brand text-white border-brand dark:text-canvas'
                : 'bg-surface text-muted border-line'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
