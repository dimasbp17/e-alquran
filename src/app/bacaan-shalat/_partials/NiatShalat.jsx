'use client';

import Loading from '@/components/Loading';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NiatShalat = () => {
  const [bacaanShalat, setBacaanShalat] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBacaanShalat = async () => {
      try {
        const response = await axios.get(
          'https://islamic-api-zhirrr.vercel.app/api/niatshalat'
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
        <div className="">
          {bacaanShalat.map((bacaan) => (
            <div
              key={bacaan.id}
              className="my-10 text-justify text-white"
            >
              <div className="text-2xl font-bold">
                {bacaan.id}. {bacaan.name}
              </div>
              <div className="text-4xl leading-[80px] text-end font-misbah">
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

export default NiatShalat;
