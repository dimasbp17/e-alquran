import Link from 'next/link';
import { LuArrowLeft } from 'react-icons/lu';

const PageHeader = ({ title, description, children }) => {
  return (
    <section className="pt-8 pb-8 md:pt-12 container-page">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-1 py-1 -ml-1 text-sm font-medium transition-colors rounded-lg text-muted hover:text-brand focus-ring"
      >
        <LuArrowLeft size={16} />
        Beranda
      </Link>
      <div className="flex flex-col gap-6 mt-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default PageHeader;
