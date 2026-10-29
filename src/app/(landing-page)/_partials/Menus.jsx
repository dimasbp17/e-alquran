import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import menu from './menu';

const Menus = () => {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
      {menu.map(({ href, icon: Icon, title, description }) => (
        <Link
          key={title}
          href={href}
          className="relative p-4 group card card-hover md:p-5 focus-ring"
        >
          <span className="flex items-center justify-center size-11 rounded-xl bg-brand-soft text-brand">
            <Icon size={22} />
          </span>
          <div className="mt-4 font-semibold md:text-lg">{title}</div>
          <div className="mt-0.5 text-sm text-muted">{description}</div>
          <LuArrowUpRight
            size={18}
            className="absolute transition-colors right-4 top-4 text-line group-hover:text-brand"
          />
        </Link>
      ))}
    </div>
  );
};

export default Menus;
