'use client';

import { Card } from '@material-tailwind/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Quran = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchQuran = async () => {
      try {
        const response = await axios.get(`https://equran.id/api/v2/surat`);
        setData(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching al-quran', error);
      }
    };
    fetchQuran();
  }, []);

  return (
    <>
      {data.map((surah) => (
        <Link
          href={`/surah/${surah.nomor}`}
          key={data.nomor}
        >
          <Card className="flex flex-row w-full gap-5 p-5 duration-300 border border-white bg-hitamTua hover:scale-105">
            <div className="flex items-center justify-center text-lg rotate-45 bg-gray-800 rounded-lg size-10">
              <span className="font-bold text-white -rotate-45">
                {surah.nomor}
              </span>
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
      ))}
    </>
  );
};

export default Quran;
