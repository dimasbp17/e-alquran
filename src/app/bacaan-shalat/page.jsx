'use client';

import { Card } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BacaanShalat = () => {
  const [bacaanShalat, setBacaanShalat] = useState([]);
  useEffect(() => {
    const fetchBacaanShalat = async () => {
      try {
        const response = await axios.get(
          'https://islamic-api-zhirrr.vercel.app/api/bacaanshalat'
        );
        setBacaanShalat(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching bacaan', error);
      }
    };
    fetchBacaanShalat();
  }, []);
  return (
    <>
      <div className="md:px-20">
        {bacaanShalat.map((bacaan) => (
          <div
            key={bacaan.id}
            className="my-10 text-justify text-white md:px-20"
          >
            <div className="text-2xl font-bold">
              {bacaan.id}. {bacaan.name}
            </div>
            {/* Teks Arab */}
            <div className="text-4xl leading-[80px] text-end font-misbah">
              {bacaan.arabic}
            </div>

            {/* Teks Latin */}
            <div className="mt-10 text-lg text-green-400">{bacaan.latin}</div>

            {/* Terjemahan Bahasa Indonesia */}
            <div className="mt-6 text-lg">{bacaan.terjemahan}</div>

            <hr className="my-5" />
          </div>
        ))}
      </div>
    </>
  );
};

export default BacaanShalat;
