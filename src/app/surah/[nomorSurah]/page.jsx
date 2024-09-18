'use client';

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

  if (!surah) return <div>Loading...</div>;

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
            <div className="mt-10 text-lg text-green-400">{ayat.teksLatin}</div>

            {/* Terjemahan Bahasa Indonesia */}
            <div className="mt-6 text-lg">{ayat.teksIndonesia}</div>

            <hr className="my-5" />
          </div>
        ))}
    </>
  );
};

export default DetailSurah;
