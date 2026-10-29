'use client';

import ErrorState from '@/components/ErrorState';
import PageHeader from '@/components/PageHeader';
import ReadingCard, { ReadingCardSkeleton } from '@/components/ReadingCard';
import Search from '@/components/Search';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DoaHarian = () => {
  const [doaHarian, setDoaHarian] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchDoaHarian = async () => {
      try {
        const response = await axios.get(
          'https://islamic-api-zhirrr.vercel.app/api/doaharian'
        );
        setDoaHarian(response.data.data);
      } catch (error) {
        console.error('Error fetching bacaan', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchDoaHarian();
  }, []);

  const filtered = doaHarian
    .map((doa, index) => ({ ...doa, number: index + 1 }))
    .filter((doa) =>
      doa.title.toLowerCase().includes(query.trim().toLowerCase())
    );

  return (
    <>
      <PageHeader
        title="Doa Harian"
        description="Kumpulan doa untuk menemani aktivitas sehari-hari."
      >
        <Search
          placeholder="Cari doa, misal: tidur"
          value={query}
          onChange={setQuery}
          className="md:w-80"
        />
      </PageHeader>

      <div className="max-w-4xl space-y-4 container-page">
        {error ? (
          <ErrorState />
        ) : loading ? (
          Array(3)
            .fill()
            .map((_, index) => <ReadingCardSkeleton key={index} />)
        ) : filtered.length === 0 ? (
          <p className="py-16 text-center text-muted">
            Tidak ada doa yang cocok dengan &ldquo;{query}&rdquo;.
          </p>
        ) : (
          filtered.map((doa) => (
            <ReadingCard
              key={doa.number}
              number={doa.number}
              title={doa.title}
              arabic={doa.arabic}
              latin={doa.latin}
              translation={doa.translation}
            />
          ))
        )}
      </div>
    </>
  );
};

export default DoaHarian;
