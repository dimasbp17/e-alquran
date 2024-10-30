'use client';

import { Card } from '@material-tailwind/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Quran = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuran = async () => {
      try {
        const response = await axios.get(`https://equran.id/api/v2/surat`);
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching al-quran', error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuran();
  }, []);

  const LoadingSkeleton = () => (
    <>
      {Array(144)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-row w-full gap-5 p-5 bg-gray-800 border border-white rounded-lg animate-pulse"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-lg"></div>
            <div className="flex flex-col w-full gap-1">
              <div className="flex justify-between w-full">
                <div className="w-20 h-4 bg-gray-700 rounded"></div>
                <div className="w-12 h-4 bg-gray-700 rounded"></div>
              </div>
              <div className="flex justify-between w-full text-gray-300">
                <div className="w-16 h-3 bg-gray-600 rounded"></div>
                <div className="w-8 h-3 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        ))}
    </>
  );

  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        data.map((surah) => (
          <Link
            href={`/surah/${surah.nomor}`}
            key={data.nomor}
          >
            <Card className="flex flex-row w-full gap-5 p-5 duration-300 border border-white bg-hitamTua hover:scale-105">
              <div className="flex items-center justify-center text-lg bg-gray-800 rounded-full w-14">
                <span className="font-bold text-white">{surah.nomor}</span>
              </div>
              <div className="flex flex-col w-full gap-1 text-white">
                <div className="flex justify-between w-full">
                  <div className="font-semibold">{surah.namaLatin}</div>
                  <div>{surah.nama}</div>
                </div>
                <div className="flex justify-between flex-grow w-full text-gray-300">
                  <div className="text-xs">{surah.arti}</div>
                  <div className="text-xs">{surah.jumlahAyat} ayat</div>
                </div>
              </div>
            </Card>
          </Link>
        ))
      )}
    </>
  );
};

export default Quran;
