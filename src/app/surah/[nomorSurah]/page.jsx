'use client';

import Loading from '@/components/Loading';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const DetailSurah = () => {
  const { nomorSurah } = useParams();
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await axios.get(
          `https://equran.id/api/v2/surat/${nomorSurah}`
        );
        setSurah(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching surah', error);
      }
    };
    fetchSurah();
  }, [nomorSurah]);

  if (!surah)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );

  return (
    <>
      <div className="flex flex-col items-center justify-center my-10">
        <div className="text-3xl font-bold text-white">{surah.namaLatin}</div>
        <div className="flex items-center gap-1 text-white">
          <span>{surah.tempatTurun}</span>
          <span>.</span>
          <span>{surah.jumlahAyat}</span>
        </div>
      </div>
      <div className="p-4">
        {surah.ayat &&
          surah.ayat.map((ayat) => (
            <div
              key={ayat.nomorAyat}
              className="my-10 text-justify text-white md:px-20"
            >
              {/* Teks Arab */}
              <div className="text-4xl leading-[80px] text-end font-misbah">
                {ayat.teksArab}
              </div>

              {/* Teks Latin */}
              <div className="mt-10 text-lg text-green-400">
                {ayat.teksLatin}
              </div>

              {/* Terjemahan Bahasa Indonesia */}
              <h3 className="mt-6 mb-2 font-semibold">Artinya:</h3>
              <div className="text-lg ">&quot;{ayat.teksIndonesia}&quot;</div>

              <hr className="my-5" />
            </div>
          ))}
      </div>
    </>
  );
};

export default DetailSurah;
