'use client';

import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import ShalatList from './_partials/ShalatList';

const tabs = [
  {
    label: 'Niat Shalat',
    endpoint: 'https://islamic-api-zhirrr.vercel.app/api/niatshalat',
  },
  {
    label: 'Bacaan Shalat',
    endpoint: 'https://islamic-api-zhirrr.vercel.app/api/bacaanshalat',
  },
];

const BacaanShalatPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PageHeader
        title="Bacaan Shalat"
        description="Niat dan bacaan shalat lengkap dengan latin dan artinya."
      >
        <div
          role="tablist"
          className="inline-flex self-start p-1 border rounded-full bg-subtle border-line md:self-auto"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition focus-ring ${
                activeTab === index
                  ? 'bg-surface text-brand shadow-soft'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </PageHeader>

      <div className="max-w-4xl container-page">
        <ShalatList
          key={activeTab}
          endpoint={tabs[activeTab].endpoint}
        />
      </div>
    </>
  );
};

export default BacaanShalatPage;
