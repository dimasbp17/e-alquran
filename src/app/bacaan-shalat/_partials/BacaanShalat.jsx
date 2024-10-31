'use client';

import Loading from '@/components/Loading';
import axios from 'axios';
import { useEffect, useState } from 'react';

const BacaanShalat = () => {
  const [bacaanShalat, setBacaanShalat] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBacaanShalat = async () => {
      try {
        const response = await axios.get(
          'https://islamic-api-zhirrr.vercel.app/api/bacaanshalat'
        );
        setBacaanShalat(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bacaan', error);
      }
    };
    fetchBacaanShalat();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-28">
          <Loading />
        </div>
      ) : (
        <div>
          {bacaanShalat.map((bacaan) => (
            <div
              key={bacaan.id}
              className="my-10 text-justify text-white"
            >
              <div className="mb-5 text-2xl font-bold">
                {bacaan.id}. {bacaan.name}
              </div>
              <div className="text-3xl leading-[80px] text-end font-misbah">
                {bacaan.arabic}
              </div>

              <div className="mt-10 text-lg text-green-400">{bacaan.latin}</div>

              <div className="mt-6 text-lg">{bacaan.terjemahan}</div>

              <hr className="my-5" />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BacaanShalat;
