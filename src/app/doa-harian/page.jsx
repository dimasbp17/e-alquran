'use client';

import { Card, IconButton } from '@material-tailwind/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const DoaHarian = () => {
  const [doaHarian, setDoaHarian] = useState([]);

  useEffect(() => {
    const fetchDoaHarian = async () => {
      try {
        const response = await axios.get(
          'https://islamic-api-zhirrr.vercel.app/api/doaharian'
        );
        setDoaHarian(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching bacaan', error);
      }
    };
    fetchDoaHarian();
  }, []);
  return (
    <>
      <section className="flex items-center justify-between w-full px-40 py-10 bg-[#1E2836]">
        <div className="flex items-center gap-2">
          <Link href={'/'}>
            <IconButton className="rounded-full">
              <FaArrowLeft />
            </IconButton>
          </Link>
          <span className="font-semibold text-white">Beranda</span>
        </div>
      </section>
      <div className="md:px-20">
        {doaHarian.map((bacaan, index) => (
          <Card
            key={index}
            className="py-10 my-10 text-justify text-black bg-gray-200 md:px-20"
          >
            <div className="text-2xl font-bold">
              {index + 1}. {bacaan.title}
            </div>
            {/* Teks Arab */}
            <div className="text-4xl leading-[80px] text-end font-misbah">
              {bacaan.arabic}
            </div>

            {/* Teks Latin */}
            <div className="mt-10 text-lg text-green-400">{bacaan.latin}</div>

            {/* Terjemahan Bahasa Indonesia */}
            <h3 className="mt-6 mb-2 text-lg font-semibold">Artinya:</h3>
            <div className="text-lg ">{bacaan.translation}</div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default DoaHarian;
