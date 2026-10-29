'use client';

import ErrorState from '@/components/ErrorState';
import ReadingCard, { ReadingCardSkeleton } from '@/components/ReadingCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ShalatList = ({ endpoint }) => {
  const [bacaanShalat, setBacaanShalat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBacaanShalat = async () => {
      try {
        const response = await axios.get(endpoint);
        setBacaanShalat(response.data);
      } catch (error) {
        console.error('Error fetching bacaan', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBacaanShalat();
  }, [endpoint]);

  if (error) return <ErrorState />;

  return (
    <div className="space-y-4">
      {loading
        ? Array(3)
            .fill()
            .map((_, index) => <ReadingCardSkeleton key={index} />)
        : bacaanShalat.map((bacaan) => (
            <ReadingCard
              key={bacaan.id}
              number={bacaan.id}
              title={bacaan.name}
              arabic={bacaan.arabic}
              latin={bacaan.latin}
              translation={bacaan.terjemahan}
            />
          ))}
    </div>
  );
};

export default ShalatList;
