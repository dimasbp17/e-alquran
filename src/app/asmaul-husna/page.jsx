'use client';

import ErrorState from '@/components/ErrorState';
import PageHeader from '@/components/PageHeader';
import Search from '@/components/Search';
import axios from 'axios';
import { useEffect, useState } from 'react';

const AsmaulHusnaPage = () => {
  const [asmaulHusna, setAsmaulHusna] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchAsmaulHusna = async () => {
      try {
        const response = await axios.get(
          'https://islamic-api-zhirrr.vercel.app/api/asmaulhusna'
        );
        setAsmaulHusna(response.data.data);
      } catch (error) {
        console.error('Error fetching asmaul husna', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchAsmaulHusna();
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = asmaulHusna.filter(
    (husna) =>
      husna.latin.toLowerCase().includes(q) ||
      husna.translation_id.toLowerCase().includes(q)
  );

  const LoadingSkeleton = () =>
    Array(12)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="p-6 card"
        >
          <div className="w-8 h-4 skeleton" />
          <div className="w-24 h-10 mx-auto mt-4 skeleton" />
          <div className="w-20 h-4 mx-auto mt-5 skeleton" />
          <div className="w-32 h-3 mx-auto mt-2 skeleton" />
        </div>
      ));

  return (
    <>
      <PageHeader
        title="Asmaul Husna"
        description="99 nama Allah yang indah beserta maknanya."
      >
        <Search
          placeholder="Cari nama atau arti"
          value={query}
          onChange={setQuery}
          className="md:w-80"
        />
      </PageHeader>

      <div className="container-page">
        {error ? (
          <ErrorState />
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {loading ? (
              <LoadingSkeleton />
            ) : (
              filtered.map((husna) => (
                <article
                  key={husna.index}
                  className="relative p-6 text-center card card-hover"
                >
                  <span className="absolute text-xs font-semibold left-5 top-5 text-muted">
                    {husna.index}
                  </span>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="mt-2 text-4xl leading-[1.8] font-misbah text-brand"
                  >
                    {husna.arabic}
                  </p>
                  <h2 className="mt-3 text-lg font-semibold">{husna.latin}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {husna.translation_id}
                  </p>
                </article>
              ))
            )}
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="py-16 text-center text-muted">
            Tidak ada nama yang cocok dengan &ldquo;{query}&rdquo;.
          </p>
        )}
      </div>
    </>
  );
};

export default AsmaulHusnaPage;
