'use client';

import ErrorState from '@/components/ErrorState';
import Search from '@/components/Search';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const Quran = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchQuran = async () => {
      try {
        const response = await axios.get(`https://equran.id/api/v2/surat`);
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching al-quran', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchQuran();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/[-'\s]/g, '');
    if (!q) return data;
    return data.filter(
      (surah) =>
        String(surah.nomor) === q ||
        surah.namaLatin.toLowerCase().replace(/[-'\s]/g, '').includes(q) ||
        surah.arti.toLowerCase().includes(query.trim().toLowerCase())
    );
  }, [data, query]);

  const LoadingSkeleton = () =>
    Array(12)
      .fill()
      .map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 card"
        >
          <div className="skeleton size-11 rounded-xl" />
          <div className="flex-1 space-y-2">
            <div className="w-24 h-4 skeleton" />
            <div className="w-32 h-3 skeleton" />
          </div>
          <div className="w-12 h-6 skeleton" />
        </div>
      ));

  return (
    <>
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Daftar Surah</h2>
          <p className="mt-1 text-muted">
            {loading
              ? 'Memuat daftar surah...'
              : query
              ? `${filtered.length} surah ditemukan`
              : `${data.length} surah`}
          </p>
        </div>
        <Search
          placeholder="Cari nama, arti, atau nomor surah"
          value={query}
          onChange={setQuery}
          className="md:w-80"
        />
      </div>

      {error ? (
        <ErrorState />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            filtered.map((surah) => (
              <Link
                href={`/surah/${surah.nomor}`}
                key={surah.nomor}
                className="flex items-center gap-4 p-4 group card card-hover focus-ring"
              >
                <span className="flex items-center justify-center text-sm font-semibold transition-colors shrink-0 size-11 rounded-xl bg-subtle text-muted group-hover:bg-brand-soft group-hover:text-brand">
                  {surah.nomor}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">
                    {surah.namaLatin}
                  </div>
                  <div className="text-sm truncate text-muted">
                    {surah.arti} · {surah.jumlahAyat} ayat
                  </div>
                </div>
                <span
                  dir="rtl"
                  lang="ar"
                  className="text-xl shrink-0 font-misbah text-brand"
                >
                  {surah.nama}
                </span>
              </Link>
            ))
          )}
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <p className="py-16 text-center text-muted">
          Tidak ada surah yang cocok dengan &ldquo;{query}&rdquo;.
        </p>
      )}
    </>
  );
};

export default Quran;
