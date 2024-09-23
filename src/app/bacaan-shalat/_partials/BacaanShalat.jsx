'use client';

import { IconButton } from '@material-tailwind/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const BacaanShalat = () => {
  const [bacaanShalat, setBacaanShalat] = useState([]);
  useEffect(() => {
    const fetchBacaanShalat = async () => {
      try {
        const response = await axios.get(
          'https://islamic-api-zhirrr.vercel.app/api/bacaanshalat'
        );
        setBacaanShalat(response.data);
      } catch (error) {
        console.error('Error fetching bacaan', error);
      }
    };
    fetchBacaanShalat();
  }, []);
  return (
    <>
      <div className="">
        {bacaanShalat.map((bacaan) => (
          <div
            key={bacaan.id}
            className="my-10 text-justify text-white"
          >
            <div className="mb-5 text-2xl font-bold">
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
    </>
  );
};

export default BacaanShalat;
